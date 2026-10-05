export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="top">
          <div>
            <a className="brand" href="/" aria-label="Startup League Bengaluru home">
              <img className="spl-logo" src="/assets/spl-logo.jpg" alt="SPL Bengaluru" width="1400" height="846" style={{ width: 180, height: "auto", maxWidth: "100%" }} />
            </a>
            <p className="muted" style={{ marginTop: "16px", maxWidth: "320px", fontSize: "14px" }}>
              Regional partner for Startup World Cup, powered by Pegasus Tech Ventures. Top 3 Indian finalists advance to the Silicon Valley Grand Finale ($1,000,000 USD prize).
            </p>
          </div>
          <div className="cols">
            <div>
              <h4>Season 1</h4>
              <ul>
                <li><a href="/#format">Event format</a></li>
                <li><a href="/#rubric">Scoring rubric</a></li>
                <li><a href="/#tickets">Tickets &amp; passes</a></li>
                <li><a href="/#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Get involved</h4>
              <ul>
                <li><a href="/apply">Apply to pitch (Free)</a></li>
                <li><a href="/register">Attendee passes</a></li>
                <li><a href="/interest/vc">Venture investor desk</a></li>
                <li><a href="/interest/sponsor">Showcase &amp; booths</a></li>
                <li><a href="/interest/judge">Jury bench</a></li>
                <li><a href="/partners">Community partners</a></li>
                <li><a href="/mentors">Mentors</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact &amp; Desk</h4>
              <ul>
                <li><a href="/go/whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp organizer desk</a></li>
                <li><a href="/#contact">Direct inquiry form</a></li>
                <li><a href="/privacy">Privacy policy</a></li>
                <li><a href="/tnc">Terms &amp; conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© <span id="yr">2026</span> Startup League Bengaluru (SPL) · Pegasus Tech Ventures Regional Partner</span>
          <span><a href="/privacy">Privacy</a> · <a href="/tnc">Terms</a> · 24 October 2026 · Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}
