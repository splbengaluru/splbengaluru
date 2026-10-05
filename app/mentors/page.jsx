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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
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
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
