import { rest } from "@/lib/supabase";
// Temporary aggregate probe for the user's specific demo registration, removed immediately.
export async function GET() {
  try {
    const regs = await (await rest("audience_registrations?registration_number=eq.3&select=id,auth_user_id,email,registration_number,test_ticket_number,payment_status&limit=1")).json();
    const reg = regs[0];
    if (!reg) return Response.json({ registration: "absent" });
    const rows = await (await rest(`payment_orders?registration_id=eq.${reg.id}&select=auth_user_id,account_email,registration_id,amount_paise,currency,mode,status,razorpay_payment_id,paid_at&order=created_at.desc&limit=3`)).json();
    return Response.json({ registration: { number: reg.registration_number, hasAuthUid: !!reg.auth_user_id,
      testTicket: reg.test_ticket_number, paymentStatus: reg.payment_status },
      orders: rows.map(o => ({ linkedUidMatches: o.auth_user_id === reg.auth_user_id, linkedEmailMatches: o.account_email?.toLowerCase() === reg.email.toLowerCase(), linkedRegistrationMatches: o.registration_id === reg.id,
        amountPaise: o.amount_paise, currency: o.currency, mode: o.mode, status: o.status, hasPaymentId: !!o.razorpay_payment_id, hasPaidAt: !!o.paid_at })) }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Couldn't inspect state" }, { status: 503 }); }
}
