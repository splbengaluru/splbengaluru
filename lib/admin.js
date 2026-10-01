import "server-only";
import { cookies } from "next/headers";
import { auth, rest } from "@/lib/supabase";

const ACCESS = "spl_admin_access", REFRESH = "spl_admin_refresh";
const options = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/" };

export function sameOrigin(req) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  try {
    const expected = new URL(req.url);
    return !!origin && !!host && new URL(origin).host === host && new URL(origin).origin === expected.origin;
  } catch { return false; }
}

export async function setSession(session) {
  const jar = await cookies();
  jar.set(ACCESS, session.access_token, { ...options, maxAge: session.expires_in || 3600 });
  jar.set(REFRESH, session.refresh_token, { ...options, maxAge: 60 * 60 * 24 * 7 });
}
export async function clearSession() {
  const jar = await cookies();
  jar.delete(ACCESS); jar.delete(REFRESH);
}

export async function isAdmin(userId) {
  if (!/^[0-9a-f-]{36}$/i.test(userId || "")) return false;
  const r = await rest(`admin_users?id=eq.${userId}&select=id&limit=1`);
  return (await r.json()).length === 1;
}

export async function adminIdentity() {
  const jar = await cookies();
  let access = jar.get(ACCESS)?.value;
  let user = null;
  if (access) {
    const response = await auth("user", null, access);
    if (response.ok) user = await response.json();
  }
  if (!user && jar.get(REFRESH)?.value) {
    const response = await auth("token?grant_type=refresh_token", { refresh_token: jar.get(REFRESH).value });
    if (response.ok) {
      const session = await response.json();
      access = session.access_token;
      await setSession(session);
      const verify = await auth("user", null, access);
      if (verify.ok) user = await verify.json();
    }
  }
  if (!user || !(await isAdmin(user.id))) return null;
  return { id: user.id, email: user.email };
}
