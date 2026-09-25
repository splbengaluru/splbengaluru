"use client";
import { useEffect, useState } from "react";

const labels = {
  audience_registrations: "Audience", founder_applications: "Founders",
  vc_interest: "VC interest", sponsor_interest: "Sponsor interest", payment_orders: "Payments",
};
const short = (v) => {
  if (v == null || v === "") return "-";
  if (typeof v === "boolean") return v ? "Yes" : "No";
  if (Array.isArray(v)) return v.join(", ");
  if (typeof v === "string" && /^https?:\/\//.test(v)) return <a href={v} target="_blank" rel="noreferrer">{v}</a>;
  return String(v);
};
const columns = {
  audience_registrations: ["registration_number", "created_at", "full_name", "email", "phone", "ticket_type", "payment_status", "referral_code", "attendee_type", "company", "linkedin_url", "source"],
  founder_applications: ["created_at", "full_name", "email", "phone", "startup_name", "one_liner", "stage", "sector", "city", "team_size", "video_url", "deck_url", "website_url", "linkedin_url", "status"],
  vc_interest: ["created_at", "full_name", "email", "phone", "firm", "role", "involvement", "focus", "check_size", "linkedin_url", "note"],
  sponsor_interest: ["created_at", "full_name", "email", "phone", "company", "role", "interest", "goal", "website_url"],
  payment_orders: ["created_at", "account_email", "auth_user_id", "registration_id", "razorpay_order_id", "razorpay_payment_id", "amount_paise", "currency", "mode", "status", "paid_at"],
};

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("audience_registrations");
  const [googleEnabled, setGoogleEnabled] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  async function load(silent = false) {
    if (!silent) setLoading(true);
    try {
      const r = await fetch("/api/admin/data", { cache: "no-store" });
      const d = await r.json();
      if (!r.ok) { setData(null); setError(d.error || "Unavailable"); }
      else { setData(d); setError(""); }
    } catch { setError("No connection. Try again."); }
    finally { if (!silent) setLoading(false); }
  }
  useEffect(() => { fetch("/api/auth/me", { cache:"no-store" }).then(r=>r.json()).then(d=>setGoogleEnabled(!!d.googleEnabled)).catch(()=>{}); load(); const timer = setInterval(() => { if (document.visibilityState === "visible") load(true); }, 30000); return () => clearInterval(timer); }, []);
  async function login(e) {
    e.preventDefault(); setLoading(true); setError("");
    try {
      const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) });
      const d = await r.json();
      if (!r.ok) { setError(d.error || "Couldn't sign in."); return; }
      setCredentials({ email: "", password: "" });
      await load(true);
    } catch { setError("No connection. Try again."); }
    finally { setLoading(false); }
  }
  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setData(null); setCredentials({ email: "", password: "" });
  }
  const a = data?.analytics || {};
  return <main className="admin-root">
    <header className="admin-head"><a href="/" className="admin-brand">SPL<span>.</span>BLR</a><span>CONTROL ROOM / SEASON 1</span>{data && <button type="button" onClick={logout}>Sign out</button>}</header>
    {!data ? <section className="admin-login"><p className="admin-kicker">Team access only</p><h1>Control<br />room.</h1><p>Sign in with your approved Supabase account.</p>
      <form onSubmit={login}>
        <label>Email<input type="email" required autoComplete="username" value={credentials.email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} /></label>
        <label>Password<input type="password" required autoComplete="current-password" value={credentials.password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} /></label>
        <button type="submit" disabled={loading}>{loading ? "Checking..." : "Sign in →"}</button>
      </form>{googleEnabled && <><p className="admin-or">or</p><a className="admin-google" href="/api/auth/google?next=/admin">Sign in with Google →</a></>}{error && <p className="admin-error" role="alert">{error}</p>}</section> : <div className="admin-content">
      <div className="admin-title"><div><p className="admin-kicker">Private / {data.admin}</p><h1>Control room.</h1></div><button type="button" onClick={() => load()} disabled={loading}>Refresh ↻</button></div>
      <p className="admin-explain">Live activity refreshes every 30 seconds while this tab is open. Active means a browser seen in the last two minutes; only signed-in browsers show an account. Counts start when tracking is connected; ad blockers and disabled JavaScript can undercount.</p>
      {error && <p className="admin-error" role="alert">{error}</p>}
      <div className="admin-metrics">
        <article><strong>{a.active ?? "-"}</strong><span>Online now*</span></article>
        <article><strong>{a.today_visitors ?? "-"}</strong><span>Visitors today</span></article>
        <article><strong>{a.today_views ?? "-"}</strong><span>Page views today</span></article>
        <article><strong>{a.total_visitors ?? "-"}</strong><span>Visitors since launch</span></article>
      </div>
      <div className="admin-panels"><section className="admin-panel"><h2>Active pages</h2>{a.active_pages?.length ? <ul>{a.active_pages.map(p => <li key={p.path}><span>{p.path}</span><b>{p.count}</b></li>)}</ul> : <p>No active visitors right now.</p>}</section>
        <section className="admin-panel"><h2>Last 30 days</h2><div className="admin-overflow"><table><thead><tr><th>Day (IST)</th><th>Visitors</th><th>Views</th></tr></thead><tbody>{a.daily?.map(d => <tr key={d.day}><td>{d.day}</td><td>{d.visitors}</td><td>{d.views}</td></tr>)}</tbody></table></div>{!a.daily?.length && <p>No tracked page views yet.</p>}</section></div>
      <section className="admin-panel admin-identified"><h2>Signed-in visitors online</h2>{a.identified_online?.length ? <div className="admin-overflow"><table><thead><tr><th>Google account</th><th>Page</th><th>Last seen (IST)</th></tr></thead><tbody>{a.identified_online.map((v,i)=><tr key={i}><td>{v.email}</td><td>{v.path}</td><td>{new Date(v.last_seen).toLocaleString("en-IN", { timeZone:"Asia/Kolkata" })}</td></tr>)}</tbody></table></div> : <p>No signed-in visitors online. Anonymous browsers remain anonymous.</p>}</section>
      <section className="admin-panel admin-forms"><h2>Submissions</h2><div className="admin-tabs">{Object.entries(labels).map(([key, label]) => <button type="button" key={key} className={tab === key ? "selected" : ""} onClick={() => setTab(key)}>{label} <small>{data.forms[key]?.length || 0}{data.forms[key]?.length === 200 ? "+" : ""}</small></button>)}</div>
        <p className="admin-explain">Showing the latest 200 per table. Registrations are not proof of payment; the Payments tab shows order status, mode and signed-in account linkage. Test orders are simulated, not real charges.</p>
        <div className="admin-overflow"><table><thead><tr>{columns[tab].map(c => <th key={c}>{c.replaceAll("_", " ")}</th>)}</tr></thead><tbody>{data.forms[tab]?.map(row => <tr key={row.id}>{columns[tab].map(c => <td key={c}>{c === "created_at" ? new Date(row[c]).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) : short(row[c])}</td>)}</tr>)}</tbody></table></div>{!data.forms[tab]?.length && <p>No submissions yet.</p>}
      </section><p className="admin-foot">*Browser activity based on page heartbeat; identified entries require a current Google session.</p>
    </div>}
  </main>;
}
