// Server-only Supabase REST client. Never import this module in a client component.
import "server-only";

export function configStatus() {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
  const service = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anon = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
  return { url: Boolean(url), urlFormat: Boolean(url && /^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)), service: Boolean(service), anon: Boolean(anon) };
}

export function config() {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
  const service = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anon = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !service || !anon || !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) return null;
  return { url, service, anon };
}

export async function rest(path, options = {}) {
  const cfg = config();
  if (!cfg) throw new Error("Supabase not configured");
  const r = await fetch(cfg.url + "/rest/v1/" + path, {
    ...options, headers: { apikey: cfg.service, ...(cfg.service.startsWith("sb_secret_") ? {} : { Authorization: `Bearer ${cfg.service}` }), ...options.headers },
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`Supabase REST ${r.status}`);
  return r;
}

export async function auth(path, data, token) {
  const cfg = config();
  if (!cfg) throw new Error("Supabase not configured");
  return fetch(cfg.url + "/auth/v1/" + path, {
    method: data ? "POST" : "GET",
    headers: { apikey: cfg.anon, ...(token ? { Authorization: `Bearer ${token}` } : {}), ...(data ? { "Content-Type": "application/json" } : {}) },
    body: data ? JSON.stringify(data) : undefined,
    cache: "no-store",
  });
}
