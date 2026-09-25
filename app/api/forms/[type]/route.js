// POST /api/forms/audience | founder | vc | sponsor
import { FORMS, validate } from "@/lib/forms";
import { insertRow, storeConfigured } from "@/lib/store";
import { redis, redisConfigured } from "@/lib/upstash";
import { publicIdentity } from "@/lib/public-auth";
import { ticketEligibility } from "@/lib/ticket-eligibility";

export const dynamic = "force-dynamic";
const json = (data, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "no-store" } });

async function rateLimited(ip) {
  if (!redisConfigured()) return false;
  try {
    const key = "forms:rl:" + ip + ":" + Math.floor(Date.now() / 600000);
    const [n] = await redis([["INCR", key], ["EXPIRE", key, "700"]]);
    return n > 10; // 10 submissions per IP per 10 minutes
  } catch { return false; }
}

export async function POST(req, { params }) {
  const { type } = await params;
  const form = FORMS[type];
  if (!form) return json({ error: "Unknown form" }, 404);
  let body = {};
  try { body = await req.json(); } catch {}
  if (body && body.company_fax) return json({ ok: true }); // honeypot: bots fill hidden fields
  const ip = String(req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "x";
  if (await rateLimited(ip)) return json({ error: "Too many tries. Give it a few minutes." }, 429);
  const { data, errors } = validate(type, body);
  if (errors) return json({ error: "Fix the highlighted fields", errors }, 400);
  if (!storeConfigured()) return json({ error: "Forms open very soon. The database isn't connected yet." }, 503);
  try {
    const identity = await publicIdentity();
    if (identity && identity.email.toLowerCase() !== data.email.toLowerCase())
      return json({ error: "Use your signed-in Google email for this form, or sign out to submit as a guest." }, 403);
    if (type === "audience" && data.ticket_type === "applied_not_selected") {
      if (!identity || identity.email.toLowerCase() !== data.email.toLowerCase())
        return json({ error: "Sign in with Google using your pitch application email to unlock the ₹799 ticket." }, 403);
      const eligibility = await ticketEligibility(identity);
      if (!eligibility.applied)
        return json({ error: "No pitch application found for this Google account. Apply first using the same email." }, 403);
    }
    const payload = { ...data, source: String(body.source || "").slice(0, 60) || null };
    // Keep public forms working until the optional OAuth columns are migrated.
    let row;
    if (identity) {
      try { row = await insertRow(form.table, { ...payload, auth_user_id: identity.id }); }
      catch (e) { if (e.code !== "identity_column_missing") throw e; }
    }
    if (!row) row = await insertRow(form.table, payload);
    return json({ ok: true, ...(type === "audience" ? { registrationNumber: row.registration_number } : {}) });
  } catch (e) {
    if (e.code === "duplicate") return json({ error: "Looks like you're already in with this email." }, 409);
    return json({ error: "Something broke on our side. Try again in a minute." }, 500);
  }
}
