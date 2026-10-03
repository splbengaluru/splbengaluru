"use client";
import {useEffect,useState} from "react";
import JourneyIllustration from "./JourneyIllustration";
const stops = [
  {
    n: "01",
    id: "what",
    label: "Open application",
    title: "One application. Zero gatekeeping.",
    body: "Whether you are building a software MVP, a physical product, a consumer D2C brand, or scaling revenue, Round 1 is open to every founder across Bengaluru—tech and non-tech alike. No warm intros required.",
    note: "Tell us who you are, what you are building, and why it matters. Submit a brief pitch video link. A deck is optional.",
    links: [["Apply to pitch (Free)", "/apply"]],
  },
  {
    n: "02",
    id: "format",
    label: "The shortlist",
    title: "15 startups earn the stage.",
    body: "Submissions are screened across problem validation, product moat, traction, and team execution. 15 standout teams are selected to pitch live at SPL Season 1.",
    note: "Evaluated against a standardized 100-point venture scorecard. Selection updates roll out ahead of pitch day.",
    links: [
      ["View the scorecard", "#rubric"],
      ["Selection details", "/selection"],
      ["Apply with your idea", "/apply"],
    ],
  },
  {
    n: "03",
    id: "event",
    label: "The regional stage",
    title: "Live pitches. Unfiltered questions.",
    body: "15 founders present to a dedicated jury, an audience of active venture funds, and 200+ founders, operators, and builders from Bengaluru's tech ecosystem.",
    note: "24 October 2026 in Bengaluru. A full day of competitive pitch heats, live jury diligence, and ecosystem networking.",
    links: [
      ["Pitch day format", "/event-details"],
      ["Judging track", "/interest/judge"],
      ["Join as an investor", "/interest/vc"],
      ["Get attendee pass", "/register"],
    ],
  },
  {
    n: "04",
    id: "travel",
    label: "Bengaluru → San Francisco",
    title: "Top 3 to the USA. Top 10 qualify for 2027.",
    body: "The jury selects the top three teams to represent Bengaluru at the Startup World Cup Grand Finale in San Francisco. SPL provides official visa recommendation letters and coordinates travel sponsorship grants.",
    note: "The top 10 ranked startups earn automatic qualification into the 2027 Startup World Cup regional pipeline.",
    links: [
      ["Founder pathway", "/apply"],
      ["Sponsor travel grants", "/interest/sponsor"],
    ],
  },
  {
    n: "05",
    id: "world-cup",
    label: "Startup World Cup",
    title: "Compete for the $1M investment prize.",
    body: "Stand on stage alongside 50+ global champions at the Startup World Cup Grand Finale in Silicon Valley, hosted by Pegasus Tech Ventures.",
    note: "Finalists pitch directly for the global $1,000,000 investment prize in front of premier international venture investors.",
    links: [
      ["Explore Startup World Cup", "https://www.startupworldcup.io/"],
      ["Meet Pegasus Tech Ventures", "https://www.pegasustechventures.com/"],
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
                    <a className="text-link" href="/register">
                      Explore attendee passes →
                    </a>
                  </aside>
                )}
                {i === 4 && (
                  <>
                    <div className="journey-logos">
                      <a href="https://www.startupworldcup.io/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/swc/logo.png" alt="Startup World Cup" />
                      </a>
                      <a href="https://www.pegasustechventures.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/swc/pegasus.png" alt="Pegasus Tech Ventures" />
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
