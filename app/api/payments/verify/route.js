import { sameOrigin } from "@/lib/admin";
import { publicIdentity } from "@/lib/public-auth";
import { rest } from "@/lib/supabase";
import { razorpayAPI, razorpayConfig, validSignature } from "@/lib/razorpay";
import { after } from "next/server";
import { captureServerEvent } from "@/lib/posthog-server";
import { emitPostHogLog, flushPostHogLogs } from "@/lib/posthog-logs";

export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({ error: "Invalid request" }, { status: 403 });
  const cfg = razorpayConfig();
  if (!cfg || cfg.mode !== "test" || process.env.PAYMENTS_TEST_ENABLED !== "true") return Response.json({ error: "Test checkout unavailable." }, { status: 503 });
  const identity = await publicIdentity();
  if (!identity) return Response.json({ error: "Sign in with Google to verify your payment." }, { status: 401 });
  const b = await req.json().catch(() => ({}));
  if (!b || !/^order_[A-Za-z0-9]{8,40}$/.test(b.razorpay_order_id || "") ||
    !/^pay_[A-Za-z0-9]{8,40}$/.test(b.razorpay_payment_id || "")) return Response.json({ error: "Invalid payment." }, { status: 400 });
  try {
    const rows = await (await rest(`payment_orders?razorpay_order_id=eq.${b.razorpay_order_id}&select=razorpay_order_id,amount_paise,currency,mode,auth_user_id,account_email&limit=1`)).json();
    const order = rows[0];
    if (!order || order.mode !== cfg.mode || order.auth_user_id !== identity.id || order.account_email?.toLowerCase() !== identity.email.toLowerCase() || !validSignature(order.razorpay_order_id + "|" + b.razorpay_payment_id, cfg.secret, b.razorpay_signature))
      return Response.json({ error: "Payment not verified." }, { status: 403 });
    const payment = await razorpayAPI(`payments/${b.razorpay_payment_id}`);
    if (payment.status !== "captured" || payment.order_id !== order.razorpay_order_id ||
      payment.amount !== order.amount_paise || payment.currency !== order.currency)
      return Response.json({ error: "Payment has not been captured yet. Check back shortly." }, { status: 409 });
    const number = await (await rest("rpc/confirm_captured_payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ p_order: order.razorpay_order_id, p_payment: payment.id, p_amount: payment.amount, p_mode: cfg.mode }) })).json();
    await captureServerEvent({
      distinctId: identity.id,
      event: "payment_verified",
      properties: { amount_paise: payment.amount, currency: payment.currency, payment_mode: cfg.mode },
    });
    emitPostHogLog("Payment verified", {
      event: "payment_verified",
      amount_paise: payment.amount,
      currency: payment.currency,
      payment_mode: cfg.mode,
      outcome: "success",
    });
    after(flushPostHogLogs);
    return Response.json({ ok: true, paidTicketNumber: number, mode: cfg.mode }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Payment status could not be verified. Don't pay again; contact the SPL team." }, { status: 503 }); }
}
