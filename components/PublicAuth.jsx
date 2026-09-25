"use client";
import { useEffect, useState } from "react";
export default function PublicAuth() {
  const [state, setState] = useState({ user: undefined, googleEnabled: false });
  useEffect(() => { fetch("/api/auth/me", { cache: "no-store" }).then(r => r.json()).then(d => setState({ user: d.user || null, googleEnabled: !!d.googleEnabled })).catch(() => setState({ user: null, googleEnabled: false })); }, []);
  const logout = async () => { await fetch("/api/auth/logout", { method: "POST" }); setState(s => ({ ...s, user: null })); window.dispatchEvent(new Event("spl-auth-change")); };
  const { user, googleEnabled } = state;
  if (!googleEnabled && !user) return null;
  return <div className="public-auth">{user === undefined ? null : user ? <><span title={user.email}>{user.email}</span><button type="button" onClick={logout}>Sign out</button></> : <a href="/api/auth/google">Sign in with Google</a>}</div>;
}
