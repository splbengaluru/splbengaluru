import "server-only";
import { cookies } from "next/headers";
import { auth } from "@/lib/supabase";
const ACCESS = "spl_user_access", REFRESH = "spl_user_refresh";
const options = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/" };
export async function savePublicSession(session) {
  const jar = await cookies();
  jar.set(ACCESS, session.access_token, { ...options, maxAge: session.expires_in || 3600 });
  jar.set(REFRESH, session.refresh_token, { ...options, maxAge: 60 * 60 * 24 * 7 });
}
export async function clearPublicSession() {
  const jar = await cookies(); jar.delete(ACCESS); jar.delete(REFRESH);
}
export async function publicIdentity() {
  const jar = await cookies();
  let access = jar.get(ACCESS)?.value;
  if (!access && !jar.get(REFRESH)?.value) return null;
  try {
    let result = access && await auth("user", null, access);
    if (!result?.ok && jar.get(REFRESH)?.value) {
      const response = await auth("token?grant_type=refresh_token", { refresh_token: jar.get(REFRESH).value });
      if (!response.ok) return null;
      const session = await response.json();
      await savePublicSession(session);
      result = await auth("user", null, session.access_token);
    }
    if (!result?.ok) return null;
    const user = await result.json();
    const providers = user.app_metadata?.providers || [];
    const name = String(user.user_metadata?.full_name || user.user_metadata?.name || "").trim();
    return user.id && user.email && user.email_confirmed_at && providers.includes("google") ? { id: user.id, email: user.email, name: name.slice(0, 80) } : null;
  } catch { return null; }
}
