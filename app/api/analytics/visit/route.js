import { config, rest } from "@/lib/supabase";
import { sameOrigin } from "@/lib/admin";
import { publicIdentity } from "@/lib/public-auth";
export async function POST(req) {
  if (!sameOrigin(req)) return new Response(null, { status: 403 });
  if (!config()) return new Response(null, { status: 503 });
  const b = await req.json().catch(() => ({}));
  if (!b || typeof b !== "object") return new Response(null, { status: 400 });
  if (!/^[0-9a-f-]{36}$/i.test(b.visitor) || !/^[0-9a-f-]{36}$/i.test(b.session) ||
    !/^\/(?:[a-z0-9/_-]{0,100})$/i.test(b.path) || !["view", "pulse"].includes(b.kind)) return new Response(null, { status: 400 });
  try {
    const identity = await publicIdentity();
    const args = { p_visitor: b.visitor, p_session: b.session, p_path: b.path, p_view: b.kind === "view" };
    if (identity) {
      try { await rest("rpc/record_visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...args, p_user: identity.id }) }); }
      catch { await rest("rpc/record_visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(args) }); }
    } else {
      await rest("rpc/record_visit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(args) });
    }
    return new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  } catch { return new Response(null, { status: 503 }); }
}
