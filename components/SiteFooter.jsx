export default function SiteFooter() {
  return (
<footer><div className="wrap">
  <div className="top">
    <div>
      <a className="brand" href="/" aria-label="Startup League Bengaluru home"><span className="wm"><span className="lockup">SPL</span><img className="trophy" src="/assets/trophy.png?v=2" alt="" width="310" height="287" /><span className="city">BENGALURU</span></span></a>
      <p className="muted" style={{"marginTop": "16px", "maxWidth": "320px", "fontSize": "14px"}}>Serious opportunity, unserious hosts. A live pitching event for Bengaluru founders, investors and the people who want to see them first.</p>
    </div>
    <div className="cols">
      <div><h4>Season 1</h4><ul><li><a href="/season-1#format">Format</a></li><li><a href="/season-1#tickets">Tickets</a></li><li><a href="/season-1#faq">FAQ</a></li><li><a href="/season-1#apply">Apply</a></li></ul></div>
      <div><h4>Work with us</h4><ul><li><a href="/#sponsors">Sponsors &amp; booths</a></li><li><a href="/season-1#vcs">VCs</a></li><li><a href="/#contact">Contact</a></li></ul></div>
      <div><h4>Follow</h4><ul><li>Instagram <span className="tba">link TBA</span></li><li>X <span className="tba">link TBA</span></li><li>LinkedIn <span className="tba">link TBA</span></li></ul></div>
    </div>
  </div>
  <div className="bottom"><span>© <span id="yr">2026</span> Startup League Bengaluru (SPL)</span><span>Terms <span className="tba">TBA</span> · Privacy <span className="tba">TBA</span> · Code of conduct <span className="tba">TBA</span></span></div>
</div></footer>
  );
}
