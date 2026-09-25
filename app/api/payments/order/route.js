import { randomUUID } from "node:crypto";
import { sameOrigin } from "@/lib/admin";
import { rest, config } from "@/lib/supabase";
import { razorpayAPI, razorpayConfig } from "@/lib/razorpay";
import { publicIdentity } from "@/lib/public-auth";
import { ticketEligibility } from "@/lib/ticket-eligibility";

export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({ error: "Invalid request" }, { status: 403 });
  const cfg = razorpayConfig();
  if (!cfg || !config() || cfg.mode !== "test" || process.env.PAYMENTS_TEST_ENABLED !== "true") return Response.json({ error: "Test checkout isn't available yet." }, { status: 503 });
  const b = await req.json().catch(() => ({}));
  if (!b || !/^[0-9a-f-]{36}$/i.test(b.registrationId || "") || typeof b.email !== "string" || b.email.length > 120)
    return Response.json({ error: "Invalid registration." }, { status: 400 });
  try {
    const rows = await (await rest(`audience_registrations?id=eq.${b.registrationId}&email=eq.${encodeURIComponent(b.email.trim())}&select=id,full_name,email,phone,ticket_type,referral_code,registration_number,payment_status,paid_ticket_number,test_ticket_number&limit=1`)).json();
    const row = rows[0];
    if (!row) return Response.json({ error: "Registration not found." }, { status: 404 });
    if (row.ticket_type === "applied_not_selected") {
      const identity = await publicIdentity();
      if (!identity || identity.email.toLowerCase() !== row.email.toLowerCase() || !(await ticketEligibility(identity)).applied)
        return Response.json({ error: "Google sign-in with the application email is required for this ticket." }, { status: 403 });
    }
    if (row.payment_status === "paid" || row.test_ticket_number) return Response.json({ error: "Already paid." }, { status: 409 });
    // Referral is self-reported until code issuance/verification is built. Keep that discount unavailable.
    const amount = row.ticket_type === "applied_not_selected" ? 79900 : 99900;
    const order = await razorpayAPI("orders", { method: "POST", body: JSON.stringify({ amount, currency: "INR", receipt: randomUUID(), notes: { registration_id: row.id }, partial_payment: false }) });
    if (!order.id || order.amount !== amount || order.currency !== "INR") throw new Error("order mismatch");
    await rest("payment_orders", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ registration_id: row.id, razorpay_order_id: order.id, amount_paise: amount, currency: "INR", mode: cfg.mode }) });
    return Response.json({ orderId: order.id, keyId: cfg.id, amount, currency: "INR", mode: cfg.mode,
      prefill: { name: row.full_name, email: row.email, contact: row.phone } }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Couldn't create test order. Try later." }, { status: 503 }); }
}
