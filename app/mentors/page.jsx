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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile ↗</span>
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
