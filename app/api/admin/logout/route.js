import { clearSession, sameOrigin } from "@/lib/admin";
export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({ error: "Invalid request" }, { status: 403 });
  await clearSession();
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
