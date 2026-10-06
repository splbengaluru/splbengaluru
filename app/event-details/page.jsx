import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Pitch Day Format & Schedule · Startup League Bengaluru",
  description: "15 startups pitch live on 24 October 2026 in Bengaluru. Discover the main stage heats, jury diligence format, and ecosystem networking.",
};

export default function EventDetails() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="directory-hero">
          <div className="wrap">
            <span className="eyebrow">24 October 2026 · Bengaluru Stage · Season 1</span>
            <h1>
              15 live pitches.
              <br />
              <span className="hl">Unfiltered stage diligence.</span>
            </h1>
            <p className="lede">
              One day, one stage. 15 shortlisted founders pitch live to venture funds and angels in front of a 200+ strong Bengaluru room.<sup className="ast">*</sup>
            </p>
            <div className="cta-row">
              <a className="btn btn-accent" href="/apply">
                Apply to Pitch (Free · 3 Mins) →
              </a>
              <a className="btn btn-ghost" href="/register">
                Claim Attendee Pass (₹999) →
              </a>
              <a
                className="btn btn-ghost"
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Startup+League+Bengaluru+Season+1&dates=20261024T033000Z/20261024T143000Z&details=Pitch+Day+%C2%B7+Bengaluru+to+San+Francisco+%C2%B7+15+startups+pitch+live+for+the+%241%2C000%2C000+Grand+Finale+spot.&location=Bengaluru%2C+Karnataka%2C+India"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--volt)" }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>Add 24 Oct to Google Calendar</span>
                <span style={{ color: "var(--volt)" }}>↗</span>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>The summit structure, broken down.</h2>
            <p className="lede">
              From morning check-in to the winner announcement, here is what happens on stage and around it.
            </p>
            <div className="cards">
              <div className="card">
                <span className="k">The Evaluation Panel</span>
                <h3>Institutional &amp; Angel Judges</h3>
                <p>
                  An independent panel of active VC partners, prominent angels, and seasoned operators evaluating pitches against the 100-point venture framework.<sup className="ast">*</sup>
                </p>
                <a href="/interest/judge" className="text-link">
                  Judging track details →
                </a>
              </div>
              <div className="card">
                <span className="k">Venture Capital</span>
                <h3>Direct Founder Access</h3>
                <p>
                  Deal flow across consumer brands, AI, D2C, B2B SaaS, deeptech, hardware and manufacturing. Active funds meet founding teams in dedicated networking windows.
                </p>
                <a href="/interest/vc" className="text-link">
                  Explore VC track →
                </a>
              </div>
              <div className="card">
                <span className="k">In The Room</span>
                <h3>Founders, Operators &amp; Builders</h3>
                <p>
                  Watch venture diligence up close, study how shortlisted founders defend their numbers, and meet builders between blocks.
                </p>
                <a href="/register" className="text-link">
                  Get attendee pass →
                </a>
              </div>
            </div>
            <div style={{ marginTop: "36px", padding: "20px", background: "var(--paper-2)", borderRadius: "12px", border: "1px solid var(--border)" }}>
              <span className="eyebrow">Venue &amp; Logistics Notice</span>
              <h3 style={{ margin: "8px 0" }}>In-person Bengaluru venue announcement<sup className="ast">*</sup></h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>
                SPL Season 1 will be held at a central, transit-accessible tech auditorium in Bengaluru. Specific venue location, door timings, and parking instructions will be dispatched to all registered pass holders via email and WhatsApp. For direct venue inquiries, message our desk on <a href="/go/whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp (+91 99459 58602)</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
