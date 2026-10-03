import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
export function razorpayConfig() {
  const id = process.env.RAZORPAY_KEY_ID || "";
  const secret = process.env.RAZORPAY_KEY_SECRET || "";
  const webhook = process.env.RAZORPAY_WEBHOOK_SECRET || "";
  if (!/^rzp_(test|live)_[A-Za-z0-9]+$/.test(id) || !secret || !webhook) return null;
  return { id, secret, webhook, mode: id.startsWith("rzp_test_") ? "test" : "live" };
}
export function validSignature(message, key, signature) {
  if (!/^[a-f0-9]{64}$/i.test(signature || "")) return false;
  const computed = createHmac("sha256", key).update(message).digest();
  return timingSafeEqual(computed, Buffer.from(signature, "hex"));
}
export async function razorpayAPI(path, opts = {}) {
  const cfg = razorpayConfig();
  if (!cfg) throw new Error("Razorpay not configured");
  const r = await fetch("https://api.razorpay.com/v1/" + path, {
    ...opts,
    headers: { Authorization: "Basic " + Buffer.from(cfg.id + ":" + cfg.secret).toString("base64"),
      "Content-Type": "application/json", ...opts.headers },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Razorpay API ${r.status}`);
  return r.json();
}
