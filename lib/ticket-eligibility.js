import "server-only";
import { rest } from "@/lib/supabase";
// Only compare with a verified OAuth account. Typed form email alone is not proof.
export async function ticketEligibility(identity) {
  if (!identity?.email) return { signedIn: false, applied: false, selected: false };
  const rows = await (await rest(`founder_applications?email=ilike.${encodeURIComponent(identity.email)}&status=neq.withdrawn&select=id,email,status&order=created_at.desc&limit=100`)).json();
  const matches = rows.filter(row => row.email.toLowerCase() === identity.email.toLowerCase());
  return { signedIn: true, applied: matches.length > 0, selected: matches.some(row => row.status === "selected") };
}
