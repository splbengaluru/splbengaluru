"use client";
import { useState } from "react";
let scriptPromise;
function loadCheckout() {
  if (window.Razorpay) return Promise.resolve();
  scriptPromise ||= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = resolve; script.onerror = () => { scriptPromise = null; reject(new Error("Razorpay checkout did not load.")); };
    document.head.appendChild(script);
  });
  return scriptPromise;
}
export default function TestCheckout({ registrationId, email }) {
  const [status, setStatus] = useState("idle"), [message, setMessage] = useState("");
  async function pay() {
    if (status === "loading" || status === "verifying" || status === "paid") return;
    setStatus("loading"); setMessage("");
    try {
      const res = await fetch("/api/payments/order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ registrationId, email }) });
      const order = await res.json();
      if (!res.ok) throw new Error(order.error || "Couldn't open checkout.");
      if (order.mode !== "test" || !order.keyId?.startsWith("rzp_test_") || ![79900,99900].includes(order.amount)) throw new Error("Test-mode order check failed.");
      await loadCheckout();
      const checkout = new window.Razorpay({ key: order.keyId, amount: order.amount, currency: "INR", order_id: order.orderId,
        name: "SPL.BLR", description: "Simulated ticket payment - no real money",
        prefill: order.prefill, theme: { color: "#3138A3" },
        handler: async ({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) => {
          setStatus("verifying"); setMessage("Verifying the simulated payment...");
          try {
            const reply = await fetch("/api/payments/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ razorpay_order_id, razorpay_payment_id, razorpay_signature }) });
            const result = await reply.json();
            if (!reply.ok || !result.ok) throw new Error(result.error || "Payment verification failed. Don't try paying twice; contact the SPL team.");
            setStatus("paid"); setMessage(`Test ticket #${result.paidTicketNumber} issued. No real money was charged.`);
          } catch (e) { setStatus("error"); setMessage(e.message); }
        },
        modal: { ondismiss: () => setStatus(previous => previous === "loading" ? "idle" : previous) },
      });
      checkout.on("payment.failed", event => { setStatus("error"); setMessage(event.error?.description || "Test payment failed. Try again."); });
      checkout.open();
    } catch (e) { setStatus("error"); setMessage(e.message); }
  }
  return <div className="test-checkout"><p className="test-tag">Razorpay TEST mode</p><p>No real money moves. You can try the simulated payment for this registration.</p>
    {status !== "paid" && <button className="btn btn-accent" type="button" onClick={pay} disabled={status === "loading" || status === "verifying"}>{status === "loading" ? "Opening checkout..." : status === "verifying" ? "Verifying..." : "Pay with test card →"}</button>}
    {message && <p role="status" className={status === "error" ? "test-error" : ""}>{message}</p>}
  </div>;
}
