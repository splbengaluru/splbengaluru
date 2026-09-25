import { sameOrigin } from "@/lib/admin";
import { rest } from "@/lib/supabase";
import { razorpayAPI, razorpayConfig, validSignature } from "@/lib/razorpay";

export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({ error: "Invalid request" }, { status: 403 });
  const cfg = razorpayConfig();
  if (!cfg || cfg.mode !== "test" || process.env.PAYMENTS_TEST_ENABLED !== "true") return Response.json({ error: "Test checkout unavailable." }, { status: 503 });
  const b = await req.json().catch(() => ({}));
  if (!b || !/^order_[A-Za-z0-9]{8,40}$/.test(b.razorpay_order_id || "") ||
    !/^pay_[A-Za-z0-9]{8,40}$/.test(b.razorpay_payment_id || "")) return Response.json({ error: "Invalid payment." }, { status: 400 });
  try {
    const rows = await (await rest(`payment_orders?razorpay_order_id=eq.${b.razorpay_order_id}&select=razorpay_order_id,amount_paise,currency,mode&limit=1`)).json();
    const order = rows[0];
    if (!order || order.mode !== cfg.mode || !validSignature(order.razorpay_order_id + "|" + b.razorpay_payment_id, cfg.secret, b.razorpay_signature))
      return Response.json({ error: "Payment not verified." }, { status: 403 });
    const payment = await razorpayAPI(`payments/${b.razorpay_payment_id}`);
    if (payment.status !== "captured" || payment.order_id !== order.razorpay_order_id ||
      payment.amount !== order.amount_paise || payment.currency !== order.currency)
      return Response.json({ error: "Payment has not been captured yet. Check back shortly." }, { status: 409 });
    const number = await (await rest("rpc/confirm_captured_payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ p_order: order.razorpay_order_id, p_payment: payment.id, p_amount: payment.amount, p_mode: cfg.mode }) })).json();
    return Response.json({ ok: true, paidTicketNumber: number, mode: cfg.mode }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Payment status could not be verified. Don't pay again; contact the SPL team." }, { status: 503 }); }
}
