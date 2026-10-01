// Data layer for form submissions. Talks to Supabase through its REST API
// (PostgREST) with the service-role key, server-side only. Swap this file to
// change backends; nothing else touches the database.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

export const storeConfigured = () => Boolean(SUPABASE_URL && SUPABASE_KEY);

export async function insertRow(table, row) {
  if (!storeConfigured()) throw Object.assign(new Error("store not configured"), { code: "not_configured" });
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=${table === "audience_registrations" ? "id,registration_number" : "id"}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      ...(SUPABASE_KEY.startsWith("sb_secret_") ? {} : { Authorization: `Bearer ${SUPABASE_KEY}` }),
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (r.status === 400 && row.auth_user_id) {
    const detail = await r.json().catch(() => ({}));
    if (detail.code === "PGRST204" && String(detail.message).includes("auth_user_id"))
      throw Object.assign(new Error("Identity migration pending"), { code: "identity_column_missing" });
    throw new Error(`supabase ${r.status}`);
  }
  if (r.status === 409) throw Object.assign(new Error("duplicate"), { code: "duplicate" });
  if (!r.ok) throw new Error(`supabase ${r.status}`);
  return (await r.json())[0];
}
