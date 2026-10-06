"use client";
import { useEffect, useRef, useState } from "react";
import posthog from "posthog-js";
import PixelAvatar from "@/components/PixelAvatar";
import AvatarCursor from "@/components/AvatarCursor";
import { AVATAR_OPTIONS, DEFAULT_AVATAR } from "@/lib/avatar";
const LABELS = {
  gender: "Avatar shape", hairstyle: "Hairstyle", hairColor: "Hair color", skin: "Skin tone", outfit: "Dress color", facialHair: "Beard & mustache",
};
const NAMES = { neutral: "Neutral", masculine: "Broad", feminine: "Soft", crop: "Short crop", swept: "Side sweep", curly: "Curls", bob: "Bob", long: "Long", buzz: "Buzz cut", black: "Black", brown: "Brown", auburn: "Auburn", blonde: "Blonde", pink: "Pink", sand: "Sand", warm: "Warm", deep: "Deep", rose: "Rose", "league-blue": "League Blue", volt: "Volt", ink: "Ink", cream: "Cream", none: "None", stubble: "Stubble", mustache: "Mustache", beard: "Beard" };
export default function PublicAuth() {
  const [state, setState] = useState({ user: undefined, googleEnabled: false });
  const [avatar, setAvatar] = useState(DEFAULT_AVATAR), [draft, setDraft] = useState(DEFAULT_AVATAR);
  const [open, setOpen] = useState(false), [editing, setEditing] = useState(false), [saving, setSaving] = useState(false), [message, setMessage] = useState("");
  const root = useRef(null);
  const identifiedUserId = useRef(null);
  useEffect(() => { fetch("/api/auth/me", { cache: "no-store" }).then(r => r.json()).then(d => { if (d.user?.id && identifiedUserId.current !== d.user.id) { posthog.identify(d.user.id, { email: d.user.email, name: d.user.name }); identifiedUserId.current = d.user.id; } setState({ user: d.user || null, googleEnabled: !!d.googleEnabled }); }).catch(() => setState({ user: null, googleEnabled: false })); }, []);
  useEffect(() => { if (!state.user) return; fetch("/api/profile/avatar", { cache: "no-store" }).then(r => r.json()).then(d => { if (d.avatar) { setAvatar(d.avatar); setDraft(d.avatar); } }).catch(() => {}); }, [state.user?.id]);
  useEffect(() => {
    if (!open) return;
    const away = event => { if (!root.current?.contains(event.target)) { setOpen(false); setEditing(false); } };
    const escape = event => { if (event.key === "Escape") { setOpen(false); setEditing(false); } };
    document.addEventListener("pointerdown", away); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", away); document.removeEventListener("keydown", escape); };
  }, [open]);
  const logout = async () => { await fetch("/api/auth/logout", { method: "POST" }); posthog.reset(); identifiedUserId.current = null; setState(s => ({ ...s, user: null })); setOpen(false); window.dispatchEvent(new Event("spl-auth-change")); };
  async function save() {
    setSaving(true); setMessage("");
    try {
      const res = await fetch("/api/profile/avatar", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(draft) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Couldn't save your avatar.");
      setAvatar(data.avatar); setEditing(false); setMessage("Avatar saved.");
    } catch (e) { setMessage(e.message); } finally { setSaving(false); }
  }
  const { user, googleEnabled } = state;
  if (!googleEnabled && !user) return null;
  if (user === undefined) return null;
  if (!user) {
    const here = typeof window !== "undefined" ? window.location.pathname + (window.location.hash || "") : "/";
    return <div className="public-auth"><a href={"/api/auth/google?next=" + encodeURIComponent(here)}>Sign in</a></div>;
  }
  return <><AvatarCursor avatar={avatar} /><div className="public-auth profile-root" ref={root}>
    <button className="profile-trigger" type="button" aria-label="Open profile menu" aria-haspopup="true" aria-expanded={open} onClick={() => { setOpen(v => !v); setEditing(false); }}><PixelAvatar avatar={avatar} size={35} /><span className="profile-chevron" aria-hidden="true">▾</span></button>
    {open && <div className="profile-panel" role="dialog" aria-label="Your profile">
      <div className="profile-head"><PixelAvatar avatar={avatar} size={48} /><div><strong>{user.name || "Your profile"}</strong><small title={user.email}>{user.email}</small></div></div>
      {!editing ? <div className="profile-actions"><button type="button" onClick={() => { setDraft(avatar); setEditing(true); setMessage(""); }}>Change avatar</button><button type="button" onClick={logout}>Sign out</button></div> : <div className="avatar-customizer">
        <h3>Change avatar</h3><div className="avatar-preview"><PixelAvatar avatar={draft} size={144} /><span>LIVE PREVIEW</span></div>
        <div className="avatar-fields">{Object.entries(AVATAR_OPTIONS).map(([key, options]) => <fieldset key={key}><legend>{LABELS[key]}</legend><div className="avatar-options">{options.map(option => <button key={option} type="button" className={draft[key] === option ? "selected" : ""} aria-pressed={draft[key] === option} onClick={() => setDraft(v => ({ ...v, [key]: option }))}>{NAMES[option] || option}</button>)}</div></fieldset>)}</div>
        <div className="avatar-save"><button type="button" onClick={() => setEditing(false)}>Cancel</button><button type="button" onClick={save} disabled={saving}>{saving ? "Saving..." : "Save avatar"}</button></div>
      </div>}
      {message && <p className="profile-message" role="status">{message}</p>}
    </div>}
  </div></>;
}
