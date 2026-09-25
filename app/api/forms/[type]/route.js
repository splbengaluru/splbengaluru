// POST /api/forms/audience | founder | vc | sponsor
import { FORMS, validate } from "@/lib/forms";
import { insertRow, storeConfigured } from "@/lib/store";
import { redis, redisConfigured } from "@/lib/upstash";
import { publicIdentity } from "@/lib/public-auth";
import { ticketEligibility } from "@/lib/ticket-eligibility";
import { rest } from "@/lib/supabase";
import { sameOrigin } from "@/lib/admin";

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

async function priorSubmission(form, identity) {
  // Fetch by either verified UID or email to also catch old anonymous rows.
  const rows = await (await rest(`${form.table}?or=(auth_user_id.eq.${identity.id},email.ilike.${encodeURIComponent(identity.email)})&select=id,email,auth_user_id&limit=100`)).json();
  return rows.some(row => row.auth_user_id === identity.id || row.email.toLowerCase() === identity.email.toLowerCase());
}
export async function GET(req, { params }) {
  const { type } = await params;
  const form = FORMS[type];
  if (!form) return json({ error: "Unknown form" }, 404);
  const identity = await publicIdentity();
  if (!identity) return json({ signedIn: false, submitted: false });
  try { return json({ signedIn: true, name: identity.name, email: identity.email, submitted: await priorSubmission(form, identity) }); }
  catch { return json({ error: "Couldn't check your form status. Try again." }, 503); }
}
export async function POST(req, { params }) {
  if (!sameOrigin(req)) return json({ error: "Invalid request" }, 403);
  const { type } = await params;
  const form = FORMS[type];
  if (!form) return json({ error: "Unknown form" }, 404);
  const identity = await publicIdentity();
  if (!identity) return json({ error: "Sign in with Google to submit this form." }, 401);
  if (!identity.name) return json({ error: "Your Google account didn't provide a name. Check your Google profile and sign in again." }, 422);
  let body = {};
  try { body = await req.json(); } catch {}
  if (body && body.company_fax) return json({ error: "Invalid request" }, 400);
  const ip = String(req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "x";
  if (await rateLimited(ip)) return json({ error: "Too many tries. Give it a few minutes." }, 429);
  const { data, errors } = validate(type, { ...body, full_name: identity.name, email: identity.email });
  if (errors) return json({ error: "Fix the highlighted fields", errors }, 400);
  if (!storeConfigured()) return json({ error: "Forms open very soon. The database isn't connected yet." }, 503);
  try {
    if (await priorSubmission(form, identity))
      return json({ error: "You've already submitted this form with your Google account." }, 409);
    if (type === "audience" && data.ticket_type === "applied_not_selected") {
      const eligibility = await ticketEligibility(identity);
      if (!eligibility.applied)
        return json({ error: "No pitch application found for this Google account. Apply first using the same email." }, 403);
    }
    const payload = { ...data, source: String(body.source || "").slice(0, 60) || null };
    // Unique email protects existing emails. The UID index migration protects
    // accounts whose Google email changes after their first submission.
    const row = await insertRow(form.table, { ...payload, auth_user_id: identity.id });
    return json({ ok: true, ...(type === "audience" ? { registrationNumber: row.registration_number, registrationId: row.id } : {}) });
  } catch (e) {
    if (e.code === "duplicate") return json({ error: "You've already submitted this form with your Google account." }, 409);
    return json({ error: "Something broke on our side. Try again in a minute." }, 500);
  }
}
