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
  try {
    const cfg = process.env.SUPABASE_URL?.trim().replace(/\/$/, "");
    const key = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
    const r = await fetch(cfg + "/rest/v1/rpc/analytics_snapshot", { method:"POST", headers:{ apikey:key, ...(key.startsWith("sb_secret_") ? {} : {Authorization:`Bearer ${key}`}), "Content-Type":"application/json" }, body:"{}", cache:"no-store" });
    snapshotStatus = String(r.status);
    if (r.ok) { const d=await r.json(); snapshot=Array.isArray(d?.identified_online); snapshotStatus += ":" + Object.keys(d || {}).sort().join(","); }
    else { const d=await r.json(); snapshotStatus += ":" + String(d.code || ""); }
  } catch(e) { snapshotStatus="error"; }
  return Response.json({ columns:Object.fromEntries(tables.map((t,i)=>[t,columns[i]])), rpc, snapshot, snapshotStatus }, { headers:{"Cache-Control":"no-store"} });
}
