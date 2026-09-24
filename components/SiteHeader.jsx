// Shared site header: nav, touch grass button and grass leaderboard panel.
// Behaviour is wired up by /public/assets/site.js.
export default function SiteHeader({ active }) {
  return (
<header className="nav"><div className="wrap">
  <a className="brand" href="/" aria-label="Startup League Bengaluru home"><span className="wm"><span className="lockup">SPL</span><img className="trophy" src="/assets/trophy.png?v=2" alt="" width="310" height="287" /><span className="city">BENGALURU</span></span></a>
  <ul>
    <li><a href="/#what" data-nav="home" aria-current={active === "home" ? "page" : undefined}>What is SPL</a></li>
    <li><a href="/season-1" data-nav="s1" aria-current={active === "s1" ? "page" : undefined}>Season 1</a></li>
    <li><a href="/season-1#format">Format</a></li>
    <li><a href="/season-1#tickets">Tickets</a></li>
    <li><a href="/#sponsors">Sponsors</a></li>
  </ul>
  <div className="nav-right">
  <a className="btn btn-accent btn-sm" href="/apply">Apply free</a>
  <button className="lb-btn" type="button" aria-expanded="false" aria-controls="lb-panel"><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />Top 10<span> touchers</span></button></div>
  <div className="lb-panel" id="lb-panel" hidden><div className="lb-head"><b>Grass touch leaderboard</b><button className="lb-x" type="button" aria-label="Close">×</button></div><ol className="lb-list"><li className="lb-empty">Loading…</li></ol><form className="lb-form"><label htmlFor="lb-name">Your name on the board</label><div><input id="lb-name" maxLength="18" autoComplete="nickname" placeholder="e.g. grass_goblin" /><button type="submit">Save</button></div><p className="lb-me"></p></form></div>
</div>
<nav className="mnav" aria-label="Sections"><a href="/" data-nav="home" aria-current={active === "home" ? "page" : undefined}>Home</a><a href="/season-1" data-nav="s1" aria-current={active === "s1" ? "page" : undefined}>Season 1</a><a href="/season-1#format">Format</a><a href="/season-1#tickets">Tickets</a><a href="/season-1#faq">FAQ</a><a href="/#sponsors">Sponsors</a></nav></header>
  );
}
