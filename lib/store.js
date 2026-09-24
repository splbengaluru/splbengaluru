// Data layer for form submissions. Talks to Supabase through its REST API
// (PostgREST) with the service-role key, server-side only. Swap this file to
// change backends; nothing else touches the database.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const storeConfigured = () => Boolean(SUPABASE_URL && SUPABASE_KEY);

export async function insertRow(table, row) {
  if (!storeConfigured()) throw Object.assign(new Error("store not configured"), { code: "not_configured" });
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });
  if (r.status === 409) throw Object.assign(new Error("duplicate"), { code: "duplicate" });
  if (!r.ok) throw new Error(`supabase ${r.status}`);
}
