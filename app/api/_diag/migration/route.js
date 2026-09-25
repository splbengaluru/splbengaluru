import { rest } from "@/lib/supabase";
// Temporary schema-only read probe; removed immediately after verification.
export async function GET() {
  const checks = {};
  for (const table of ["audience_registrations", "founder_applications", "vc_interest", "sponsor_interest"]) {
    try { await rest(`${table}?select=auth_user_id&limit=0`); checks[table] = true; } catch { checks[table] = false; }
  }
  try { await rest("payment_orders?select=auth_user_id,account_email&limit=0"); checks.payment_orders = true; } catch { checks.payment_orders = false; }
  try { await rest("member_avatars?select=auth_user_id,avatar&limit=0"); checks.member_avatars = true; } catch { checks.member_avatars = false; }
  return Response.json(checks, { headers: { "Cache-Control": "no-store" } });
}
