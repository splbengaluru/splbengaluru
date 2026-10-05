import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Mentors & Advisors · Startup League Bengaluru",
  description: "Meet the experienced founders, operators, and talent leaders mentoring startups at SPL Season 1 in Bengaluru.",
};

export default function MentorsPage() {
  return (
    <>
      <SiteHeader />
      <section className="directory-hero">
        <div className="wrap">
          <span className="eyebrow">Operational Experience · Season 1</span>
          <h1>
            Experienced operators.
            <br />
            <span className="hl">In the room with founders.</span>
          </h1>
          <p className="lede">
            Tactical guidance from leaders who have built, scaled, and led high-growth teams across Bengaluru and global markets.
          </p>
        </div>
      </section>
      <section className="panel-bg">
        <div className="wrap">
          <span className="eyebrow">Confirmed Mentor</span>
          <h2>
            Talent, culture, and
            <br />
            <span className="hl">scaling teams.</span>
          </h2>
          <article className="mentor-feature">
            <img src="/assets/people/victor-c.jpg" alt="Victor C." width="320" height="320" />
            <div>
              <span className="k">Confirmed Mentor</span>
              <h3>Victor C.</h3>
              <p className="person-title">Recruitment, HR &amp; Tech Leader</p>
              <p>
                Founder of mypathfinder and co-founder of fiesTA, with extensive leadership scaling talent and human operations at Hubilo, Whatfix, and Pipemonk.
              </p>
              <a
                className="btn btn-ghost btn-sm btn-linkedin"
                href="https://in.linkedin.com/in/victorchoudhary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 14 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="linkedin-icon">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path d="M7.4 9.6v7.4H5V9.6h2.4zm.1-3.2c0 .7-.5 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3zm11.5 5.8v4.8H16.6v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.5h-2.4s.03-6.7 0-7.4h2.4v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5z" fill="#ffffff"/>
                </svg>
                <span>LinkedIn ↗</span>
              </a>
            </div>
          </article>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">Advisory Network</span>
          <h2>
            Hands-on guidance.
            <br />
            <span className="hl">Real operational depth.</span>
          </h2>
          <div className="cards">
            <div className="card">
              <span className="k">Mentor Network</span>
              <h3>Scaling &amp; Growth Leaders</h3>
              <p>
                Founders, growth specialists, and technical architects joining to advise shortlisted teams during dedicated midday breakout sessions.
              </p>
            </div>
            <div className="card">
              <span className="k">Breakout Tracks</span>
              <h3>Tactical Focus Areas</h3>
              <p>
                Actionable guidance across early hiring, technical infrastructure, unit economics, go-to-market distribution, and pitch presentation.
              </p>
            </div>
            <div className="card">
              <span className="k">Evaluation Governance</span>
              <h3>Distinct Evaluation Panel</h3>
              <p>
                Mentors support and advise founders, while an independent evaluation committee scores main stage pitches against the 100-point rubric.
              </p>
              <a className="text-link" href="/interest/judge">
                Explore judging track →
              </a>
            </div>
          </div>
          <div className="cta-row" style={{ marginTop: 36 }}>
            <a className="btn btn-accent" href="/interest/judge">Express Interest to Mentor →</a>
            <a className="btn btn-ghost" href="/#hosts">Organizing Team →</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
