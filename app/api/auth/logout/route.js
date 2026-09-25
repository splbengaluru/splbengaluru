import { clearPublicSession } from "@/lib/public-auth";
import { clearSession, sameOrigin } from "@/lib/admin";
export async function POST(req) {
  if (!sameOrigin(req)) return new Response(null, { status: 403 });
  await clearPublicSession(); await clearSession();
  return Response.json({ ok: true });
}
