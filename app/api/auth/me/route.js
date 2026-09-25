import { publicIdentity } from "@/lib/public-auth";
export async function GET() {
  return Response.json({ user: await publicIdentity(), googleEnabled: process.env.GOOGLE_OAUTH_ENABLED === "true" }, { headers: { "Cache-Control": "private, no-store" } });
}
