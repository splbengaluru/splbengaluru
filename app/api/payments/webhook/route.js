import { rest } from "@/lib/supabase";
import { razorpayAPI, razorpayConfig, validSignature } from "@/lib/razorpay";

export async function POST(req) {
  const cfg = razorpayConfig();
  if (!cfg || cfg.mode !== "test" || process.env.PAYMENTS_TEST_ENABLED !== "true") return new Response(null, { status: 503 });
  const raw = await req.text();
  if (raw.length > 300000 || !validSignature(raw, cfg.webhook, req.headers.get("x-razorpay-signature")))
    return new Response(null, { status: 403 });
  let b; try { b = JSON.parse(raw); } catch { return new Response(null, { status: 400 }); }
  if (b.event !== "payment.captured" && b.event !== "order.paid") return new Response(null, { status: 200 });
  const paymentId = b.payload?.payment?.entity?.id;
  const orderId = b.payload?.payment?.entity?.order_id || b.payload?.order?.entity?.id;
  if (!/^pay_[A-Za-z0-9]{8,40}$/.test(paymentId || "") || !/^order_[A-Za-z0-9]{8,40}$/.test(orderId || "")) return new Response(null, { status: 400 });
  try {
    const rows = await (await rest(`payment_orders?razorpay_order_id=eq.${orderId}&select=razorpay_order_id,amount_paise,currency,mode&limit=1`)).json();
    const o = rows[0];
    if (!o || o.mode !== cfg.mode) return new Response(null, { status: 404 });
    const payment = await razorpayAPI(`payments/${paymentId}`);
    if (payment.status !== "captured" || payment.order_id !== orderId || payment.amount !== o.amount_paise || payment.currency !== o.currency)
      return new Response(null, { status: 409 });
    await rest("rpc/confirm_captured_payment", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ p_order: orderId, p_payment: payment.id, p_amount: payment.amount, p_mode: cfg.mode }) });
    return new Response(null, { status: 200 });
  } catch { return new Response(null, { status: 503 }); }
}
