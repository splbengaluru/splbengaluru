"use client";
import {useEffect,useState} from "react";
import JourneyIllustration from "./JourneyIllustration";
const stops = [
  {
    n: "01",
    id: "what",
    label: "Screening Application",
    title: "Open screening. Zero warm intros.",
    body: "Every high-conviction founder building tech or non-tech in Bengaluru can submit. Seed, pre-revenue, or scaling ARR.",
    note: "Submit traction metrics, defensibility, and pitch video. Deck optional.",
    links: [["Apply Now · Cohort Slots Open", "/apply"]],
  },
  {
    n: "02",
    id: "format",
    label: "The Shortlist",
    title: "15 teams survive the diligence cut.",
    body: "The selection committee screens for defensible moats, unit economics, market size, and execution speed.",
    note: "Scored on a standardized 100-point venture scorecard. 15 cohort finalists advance.",
    links: [
      ["Inspect Scorecard", "#rubric"],
      ["Diligence Process", "/selection"],
      ["Apply Now", "/apply"],
    ],
  },
  {
    n: "03",
    id: "event",
    label: "The Regional Arena",
    title: "Live pitches. Institutional diligence.",
    body: "15 founders pitch live to institutional GPs, angel syndicates, and a room of 200+ active ecosystem operators.",
    note: "24 October 2026 in Bengaluru. High-stakes pitch heats, cap table defense, and direct LP/GP deal flow.",
    links: [
      ["Pitch Day Flow", "/event-details"],
      ["VC Registration", "/interest/vc"],
      ["Claim Attendee Pass", "/register"],
    ],
  },
  {
    n: "04",
    id: "travel",
    label: "BLR to Silicon Valley",
    title: "Top 3 fly to San Francisco.",
    body: "The jury selects the top three ventures to represent India in Silicon Valley. Travel grants and visa support coordinated directly.",
    note: "Top 10 ranked teams gain fast-track qualification into the 2027 global syndicate pipeline.",
    links: [
      ["Apply Now", "/apply"],
      ["Partner with SPL", "/interest/sponsor"],
    ],
  },
  {
    n: "05",
    id: "world-cup",
    label: "Global Grand Finale",
    title: "Compete for the $1,000,000 term sheet.",
    body: "Pitch alongside 50+ international champions at the Startup World Cup Grand Finale, hosted by Pegasus Tech Ventures in Silicon Valley.",
    note: "Compete for a $1,000,000 global investment prize in front of tier-one US venture capital firms.",
    links: [
      ["Startup World Cup ↗", "https://www.startupworldcup.io/"],
      ["Pegasus Tech Ventures ↗", "https://www.pegasustechventures.com/"],
    ],
  },
];
export default function StartupJourney() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step));
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: 0 }
    );
    document.querySelectorAll(".journey-stop").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="journey" className="journey">
      <div className="wrap">
        <div className="journey-intro">
          <span className="eyebrow">From Bengaluru to Silicon Valley</span>
          <h2>
            One idea.
            <br />
            <span className="hl">Five steps.</span>
          </h2>
          <p className="lede">The direct roadmap from early submission to the global stage.</p>
        </div>
        <div className="journey-grid">
          <div className="road-sticky">
            <JourneyIllustration active={active} />
          </div>
          <div className="journey-stops">
            {stops.map((stop, i) => (
              <article
                id={stop.id}
                key={stop.n}
                data-step={i}
                className={"journey-stop " + (active === i ? "is-active" : "")}
              >
                <div className="mobile-journey-art">
                  <JourneyIllustration active={i} />
                </div>
                <span className="journey-number">{stop.n}</span>
                <span className="eyebrow">
                  Step {i + 1} · {stop.label}
                </span>
                <h3>{stop.title}</h3>
                <p className="journey-body">{stop.body}</p>
                <p className="journey-note">{stop.note}</p>
                <div className="cta-row">
                  {stop.links.map(([label, href], j) => (
                    <a
                      key={href}
                      className={"btn " + (j === 0 ? "btn-accent" : "btn-ghost")}
                      href={href}
                      {...(href.startsWith("https") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {label} →
                    </a>
                  ))}
                </div>
                {i === 1 && (
                  <aside className="audience-shortcut">
                    <span className="eyebrow">↗ In the room · Attendee track</span>
                    <h4>Watch live pitches. Deconstruct live diligence.</h4>
                    <p>
                      Join 200+ founders, operators, and early engineers. Experience live pitches, jury teardowns, and interactive audience discussions.
                    </p>
                    <a className="btn btn-accent btn-sm" href="/register">
                      Explore Attendee Passes →
                    </a>
                  </aside>
                )}
                {i === 4 && (
                  <>
                    <div className="journey-logos">
                      <a href="https://www.startupworldcup.io/" target="_blank" rel="noopener noreferrer" className="journey-logo-card">
                        <img src="/assets/swc/logo.png" alt="Startup World Cup" />
                      </a>
                      <a href="https://www.pegasustechventures.com/" target="_blank" rel="noopener noreferrer" className="journey-logo-card pegasus-card">
                        <img src="/assets/swc/pegasus.png" alt="Pegasus Tech Ventures" className="pegasus-logo-img" />
                      </a>
                    </div>
                    <p className="journey-note">Official regional partner for Pegasus Tech Ventures and Startup World Cup.</p>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
