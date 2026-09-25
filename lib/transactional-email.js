import "server-only";
import { rest } from "@/lib/supabase";

// This module prepares notifications, but never sends email. The outbox writer
// stays off until its additive schema has been applied and checked.
const queueEnabled = () => process.env.EMAIL_OUTBOX_ENABLED === "true";
const validEmail = value => typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;

export function registrationConfirmation({ registrationNumber, name }) {
  return {
    subject: `SPL Bengaluru registration #${registrationNumber}`,
    text: `Hi ${name},\n\nYour SPL Bengaluru registration is in. Your registration number is #${registrationNumber}.\n\nThis is not a paid ticket yet. No payment has been made, and this number does not grant entry. We'll share the next step when ticket sales open.\n\nSPL Bengaluru`,
  };
}

export function paymentConfirmation({ testTicketNumber, paidTicketNumber, amountPaise, mode, name }) {
  const amount = `₹${(amountPaise / 100).toFixed(2)}`;
  if (mode === "test") return {
    subject: `SPL Bengaluru TEST ticket #${testTicketNumber}`,
    text: `Hi ${name},\n\nTEST MODE: Your simulated ${amount} payment was recorded, and test ticket #${testTicketNumber} was issued. No real money was charged. This is not a live event ticket and does not grant entry.\n\nSPL Bengaluru`,
  };
  return {
    subject: `SPL Bengaluru ticket #${paidTicketNumber}`,
    text: `Hi ${name},\n\nYour ${amount} payment was recorded, and ticket #${paidTicketNumber} was issued for SPL Bengaluru. Please keep this email for your records.\n\nSPL Bengaluru`,
  };
}

export async function queueRegistration({ registrationId, email }) {
  if (!queueEnabled()) return { queued: false, reason: "disabled" };
  if (!validEmail(email) || !/^[0-9a-f-]{36}$/i.test(registrationId || "")) throw new Error("Invalid registration notification");
  return queue({ event_key: `registration:${registrationId}`, kind: "registration", recipient_email: email, registration_id: registrationId });
}

export async function queuePayment({ orderId, registrationId, email, mode }) {
  if (!queueEnabled()) return { queued: false, reason: "disabled" };
  if (!validEmail(email) || !/^order_[A-Za-z0-9]{8,40}$/.test(orderId || "") || !/^[0-9a-f-]{36}$/i.test(registrationId || "") || !["test", "live"].includes(mode))
    throw new Error("Invalid payment notification");
  return queue({ event_key: `payment:${orderId}`, kind: mode === "test" ? "test_payment" : "live_payment", recipient_email: email,
    registration_id: registrationId, razorpay_order_id: orderId });
}

async function queue(row) {
  // PostgreSQL unique event_key + ignore-duplicates makes retries from both the
  // checkout callback and Razorpay webhook safe. No outbound side effect here.
  await rest("email_outbox?on_conflict=event_key", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "resolution=ignore-duplicates,return=minimal" },
    body: JSON.stringify(row) });
  return { queued: true };
}
