import { rest } from "@/lib/supabase";
export const dynamic = "force-dynamic";
export async function GET() {
  const tables = ["audience_registrations", "founder_applications", "vc_interest", "sponsor_interest", "visitor_sessions"];
  const columns = await Promise.all(tables.map(async table => {
    try { await rest(`${table}?select=auth_user_id&limit=0`); return true; } catch { return false; }
  }));
  let rpc = false, snapshot = false, snapshotStatus = "unknown";
  try {
    const cfg = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
    const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
    const r = await fetch(cfg + "/rest/v1/rpc/record_visit", { method:"POST", headers:{ apikey:key, ...(key.startsWith("sb_secret_") ? {} : {Authorization:`Bearer ${key}`}), "Content-Type":"application/json" }, body: JSON.stringify({p_visitor:"not-a-uuid",p_session:"not-a-uuid",p_path:"/",p_view:false,p_user:null}), cache:"no-store" });
    const d = await r.json(); rpc = r.status === 400 && d.code !== "PGRST202";
  } catch {}
  try { const d = await (await rest("rpc/analytics_snapshot", { method:"POST", headers:{"Content-Type":"application/json"}, body:"{}" })).json(); snapshot=Array.isArray(d?.identified_online); snapshotStatus = typeof d === "object" && d !== null ? Object.keys(d).sort().join(",") : typeof d; } catch(e) { snapshotStatus="error:" + String(e?.message || "unknown").replace(/[^a-zA-Z0-9 :]/g, "").slice(0,80); }
  return Response.json({ columns:Object.fromEntries(tables.map((t,i)=>[t,columns[i]])), rpc, snapshot, snapshotStatus }, { headers:{"Cache-Control":"no-store"} });
}
