import { adminIdentity } from "@/lib/admin";
import { config, configStatus, rest } from "@/lib/supabase";
export const dynamic = "force-dynamic";
const tables = ["audience_registrations", "founder_applications", "vc_interest", "sponsor_interest", "payment_orders"];
export async function GET() {
  if (!config()) return Response.json({ error: "Supabase not connected yet", setup: configStatus() }, { status: 503 });
  try {
    const admin = await adminIdentity();
    if (!admin) return Response.json({ error: "Sign in to see the dashboard." }, { status: 401 });
    const [summary, ...entries] = await Promise.all([
      rest("rpc/analytics_snapshot", { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" }).then(r => r.json()),
      ...tables.map(table => rest(`${table}?select=*&order=created_at.desc&limit=200`).then(r => r.json())),
    ]);
    return Response.json({ admin: admin.email, adminId: admin.id, analytics: summary, forms: Object.fromEntries(tables.map((t, i) => [t, entries[i]])) }, { headers: { "Cache-Control": "private, no-store" } });
  } catch { return Response.json({ error: "Dashboard temporarily unavailable." }, { status: 503 }); }
}
