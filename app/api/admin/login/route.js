import { auth, config } from "@/lib/supabase";
import { isAdmin, sameOrigin, setSession } from "@/lib/admin";

export async function POST(req) {
  if (!sameOrigin(req)) return Response.json({ error: "Invalid request" }, { status: 403 });
  if (!config()) return Response.json({ error: "Admin login is not connected yet." }, { status: 503 });
  const body = await req.json().catch(() => ({}));
  if (typeof body.email !== "string" || typeof body.password !== "string" || body.email.length > 254 || body.password.length > 512)
    return Response.json({ error: "Enter an email and password." }, { status: 400 });
  try {
    const result = await auth("token?grant_type=password", { email: body.email, password: body.password });
    if (!result.ok) return Response.json({ error: "Email or password is incorrect, or this account isn't approved." }, { status: 401 });
    const session = await result.json();
    const userResult = await auth("user", null, session.access_token);
    if (!userResult.ok || !(await isAdmin((await userResult.json()).id)))
      return Response.json({ error: "This account does not have admin access." }, { status: 403 });
    await setSession(session);
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  } catch { return Response.json({ error: "Login unavailable. Try again shortly." }, { status: 503 }); }
}
