import { cookies } from "next/headers";
import { auth } from "@/lib/supabase";
import { isAdmin, setSession as setAdminSession } from "@/lib/admin";
import { savePublicSession } from "@/lib/public-auth";
export async function GET(req) {
  const url = new URL(req.url);
  if (process.env.GOOGLE_OAUTH_ENABLED !== "true") return Response.redirect(new URL("/admin?auth=unavailable", url.origin));
  const jar = await cookies();
  const verifier = jar.get("spl_oauth_verifier")?.value;
  const requested = jar.get("spl_oauth_next")?.value || "/";
  const dest = /^\/(?!\/)[a-z0-9\/_-]{0,110}(?:#[a-z0-9_-]{1,50})?$/i.test(requested) ? requested : "/";
  for (const name of ["spl_oauth_verifier", "spl_oauth_next"])
    jar.set(name, "", { path: "/api/auth/callback", maxAge: 0 });
  if (!verifier || !/^[A-Za-z0-9_-]{10,256}$/.test(url.searchParams.get("code") || ""))
    return Response.redirect(new URL(dest + "?auth=failed", url.origin));
  try {
    const result = await auth("token?grant_type=pkce", { auth_code: url.searchParams.get("code"), code_verifier: verifier });
    if (!result.ok) throw new Error("exchange failed");
    const session = await result.json();
    const verify = await auth("user", null, session.access_token);
    if (!verify.ok) throw new Error("invalid user");
    const user = await verify.json();
    if (!user.id || !user.email || !user.email_confirmed_at || !(user.app_metadata?.providers || []).includes("google")) throw new Error("unconfirmed");
    if (dest === "/admin" && !(await isAdmin(user.id)))
      return Response.redirect(new URL("/admin?auth=denied", url.origin));
    await savePublicSession(session);
    if (dest === "/admin") await setAdminSession(session);
    return Response.redirect(new URL(dest, url.origin));
  } catch { return Response.redirect(new URL(dest + "?auth=failed", url.origin)); }
}
