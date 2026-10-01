import { publicIdentity } from "@/lib/public-auth";
import { ticketEligibility } from "@/lib/ticket-eligibility";
export const dynamic="force-dynamic";
export async function GET() {
  try { return Response.json(await ticketEligibility(await publicIdentity()), { headers: { "Cache-Control":"private, no-store" } }); }
  catch { return Response.json({ error:"Can't check eligibility right now." }, { status:503 }); }
}
