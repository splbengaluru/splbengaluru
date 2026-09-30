export default function SiteFooter() {
  return (
<footer><div className="wrap">
  <div className="top">
    <div>
      <a className="brand" href="/" aria-label="Startup League Bengaluru home"><img className="spl-logo" src="/assets/spl-logo.jpg" alt="SPL Bengaluru" width="1400" height="846" /></a>
      <p className="muted" style={{"marginTop": "16px", "maxWidth": "320px", "fontSize": "14px"}}>Hosted by SPL × SourcingXPress. Official Startup World Cup Bengaluru regional. One winner, a global next step.</p>
    </div>
    <div className="cols">
      <div><h4>Season 1</h4><ul><li><a href="/#format">Format</a></li><li><a href="/#tickets">Tickets</a></li><li><a href="/#faq">FAQ</a></li><li><a href="/apply">Apply</a></li></ul></div>
      <div><h4>Work with us</h4><ul><li><a href="/partners">Partners</a></li><li><a href="/mentors">Mentors</a></li><li><a href="/interest/sponsor">Sponsor &amp; booth interest</a></li><li><a href="/interest/vc">VC interest</a></li><li><a href="/apply">Apply to pitch</a></li><li><a href="/register">Audience registration</a></li><li><a href="/go/whatsapp" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></li></ul></div>
      <div><h4>Follow</h4><ul><li>Instagram <span className="tba">link TBA</span></li><li>X <span className="tba">link TBA</span></li><li>LinkedIn <span className="tba">link TBA</span></li></ul></div>
    </div>
  </div>
  <div className="bottom"><span>© <span id="yr">2026</span> Startup League Bengaluru (SPL)</span><span>Terms <span className="tba">TBA</span> · <a href="/privacy">Privacy</a> · Code of conduct <span className="tba">TBA</span></span></div>
</div></footer>
  );
}
