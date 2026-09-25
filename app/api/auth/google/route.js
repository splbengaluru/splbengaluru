import { randomBytes, createHash } from "node:crypto";
import { cookies } from "next/headers";
import { config } from "@/lib/supabase";
export async function GET(req) {
  const cfg = config();
  if (!cfg || process.env.GOOGLE_OAUTH_ENABLED !== "true") return Response.redirect(new URL("/admin?auth=unavailable", req.url));
  const base = new URL(req.url);
  const destination = base.searchParams.get("next") === "/admin" ? "/admin" : "/";
  const verifier = randomBytes(32).toString("base64url");
  const challenge = createHash("sha256").update(verifier).digest("base64url");
  const jar = await cookies();
  const opts = { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/api/auth/callback", maxAge: 300 };
  jar.set("spl_oauth_verifier", verifier, opts);
  jar.set("spl_oauth_next", destination, opts);
  const redirect = new URL(cfg.url + "/auth/v1/authorize");
  redirect.searchParams.set("provider", "google");
  redirect.searchParams.set("redirect_to", `${base.origin}/api/auth/callback`);
  redirect.searchParams.set("code_challenge", challenge);
  redirect.searchParams.set("code_challenge_method", "s256");
  return Response.redirect(redirect, 302);
}
