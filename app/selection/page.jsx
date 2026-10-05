import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Selection Process & Evaluation | Startup League Bengaluru",
  description: "How 15 startups are selected for the SPL Season 1 pitch stage in Bengaluru. Evaluation criteria, screening process, and timeline.",
};

export default function Selection() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="directory-hero">
          <div className="wrap">
            <span className="eyebrow">Selection Framework · Season 1</span>
            <h1>
              From open application.
              <br />
              <span className="hl">To the 15-team shortlist.</span>
            </h1>
            <p className="lede">
              Every application is screened against our objective 100-point venture scorecard. 15 standout startups earn their place on the live Bengaluru stage.
            </p>
            <div className="cta-row">
              <a className="btn btn-accent" href="/apply">
                Apply to pitch free →
              </a>
              <a className="btn btn-ghost" href="/#rubric">
                Inspect the scorecard →
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>What we evaluate in Round 1.</h2>
            <p className="lede">
              We look for acute customer pain, differentiated product or service craft, early traction or retention evidence, and founder execution ability. Applications are open to both tech and non-tech startups, from early validation through scaling revenue.
            </p>
            <h3 style={{ marginTop: 36 }}>The 100-point venture standard</h3>
            <p className="lede">
              Submissions are scored across eight weighted criteria adapted from standard venture fund diligence: problem &amp; market (15 pts), product, craft &amp; defensibility (15 pts), traction &amp; retention (20 pts), business model &amp; unit economics (15 pts), team execution (15 pts), competitive moat (10 pts), use of capital (5 pts), and pitch clarity (5 pts). Whether building consumer goods, software, manufacturing, hardware, or deeptech, the rubric evaluates real customer value and sustainable economics.
            </p>
            <p className="note">
              The 15 shortlisted startups present live on 24 October 2026. The independent jury selects the top three teams to represent Bengaluru at the Startup World Cup Grand Finale in Silicon Valley.
            </p>
            <div className="cta-row">
              <a className="btn btn-accent" href="/apply">
                Submit your startup →
              </a>
              <a className="btn btn-ghost" href="/register">
                Explore attendee passes →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
