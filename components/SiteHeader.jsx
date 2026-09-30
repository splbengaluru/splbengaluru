// Shared site header: nav, touch grass button and grass leaderboard panel.
// Behaviour is wired up by /public/assets/site.js.
import PublicAuth from "@/components/PublicAuth";
export default function SiteHeader({ active }) {
  return (
<header className="nav"><div className="wrap">
  <a className="brand" href="/" aria-label="Startup League Bengaluru home"><img className="spl-logo" src="/assets/spl-logo.jpg" alt="SPL Bengaluru" width="1400" height="846" /></a>
  <ul>
    <li><a href="/#what" data-nav="home" aria-current={active === "home" ? "page" : undefined}>What is SPL</a></li>
    <li><a href="/season-1" data-nav="s1" aria-current={active === "s1" ? "page" : undefined}>Season 1</a></li>
    <li><a href="/season-1#format">Format</a></li>
    <li><a href="/season-1#tickets">Tickets</a></li>
    <li><a href="/#sponsors">Sponsors</a></li>
  </ul>
  <div className="nav-right">
  <a className="btn btn-accent btn-sm" href="/apply">Apply free</a>
  <PublicAuth /></div>
  
</div>
<nav className="mnav" aria-label="Sections"><a href="/" data-nav="home" aria-current={active === "home" ? "page" : undefined}>Home</a><a href="/season-1" data-nav="s1" aria-current={active === "s1" ? "page" : undefined}>Season 1</a><a href="/season-1#format">Format</a><a href="/season-1#tickets">Tickets</a><a href="/season-1#faq">FAQ</a><a href="/#sponsors">Sponsors</a></nav></header>
  );
}
