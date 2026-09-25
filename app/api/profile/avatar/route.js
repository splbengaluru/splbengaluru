import { publicIdentity } from "@/lib/public-auth";
import { sameOrigin } from "@/lib/admin";
import { rest } from "@/lib/supabase";
import { DEFAULT_AVATAR, normalizeAvatar } from "@/lib/avatar";
const json = (data, status = 200) => Response.json(data, { status, headers: { "Cache-Control": "private, no-store" } });
export async function GET() {
  const identity = await publicIdentity();
  if (!identity) return json({ error: "Sign in with Google." }, 401);
  try {
    const rows = await (await rest(`member_avatars?auth_user_id=eq.${identity.id}&select=avatar&limit=1`)).json();
    return json({ avatar: normalizeAvatar(rows[0]?.avatar) || DEFAULT_AVATAR });
  } catch { return json({ error: "Couldn't load your avatar." }, 503); }
}
export async function PUT(req) {
  if (!sameOrigin(req)) return json({ error: "Invalid request." }, 403);
  const identity = await publicIdentity();
  if (!identity) return json({ error: "Sign in with Google." }, 401);
  const avatar = normalizeAvatar(await req.json().catch(() => null));
  if (!avatar) return json({ error: "Invalid avatar options." }, 400);
  try {
    await rest("member_avatars?on_conflict=auth_user_id", { method: "POST", headers: { "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ auth_user_id: identity.id, avatar }) });
    return json({ ok: true, avatar });
  } catch { return json({ error: "Couldn't save your avatar. Try again." }, 503); }
}
