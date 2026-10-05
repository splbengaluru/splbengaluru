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
                className="btn btn-ghost btn-sm"
                href="https://in.linkedin.com/in/victorchoudhary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 14 }}
              >
                LinkedIn Profile ↗
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
