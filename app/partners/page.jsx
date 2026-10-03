import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Partners & Sponsors · Startup League Bengaluru",
  description: "Organizations powering SPL Season 1 in Bengaluru. Confirmed partners and category sponsorship opportunities.",
};

const tiers = [
  ["Headline & Title Partner", "Prominent co-branding across the main stage, global digital broadcasts, and official Silicon Valley delegation materials."],
  ["Domain & Track Partners", "Exclusive category presence for dedicated AI, B2B SaaS, fintech, or deeptech pitch heats."],
  ["Startup Showcase Partners", "Directly support the 15 stage finalists and sponsor founder travel grants for the Silicon Valley Grand Finale."],
  ["Infrastructure & Tooling Partners", "Equip Bengaluru's emerging founders with developer APIs, cloud infrastructure, and technical toolkits."],
  ["Community & Ecosystem Partners", "Mobilize engineering hubs, founder circles, and incubator communities across Bengaluru."],
];

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <section className="directory-hero">
        <div className="wrap">
          <span className="eyebrow">Ecosystem Collaboration · Season 1</span>
          <h1>
            Our <span className="hl">partners.</span>
          </h1>
          <p className="lede">
            A premier venture stage is built with the ecosystem. Discover the organizations powering SPL Season 1 and open category partnerships.
          </p>
          <a className="btn btn-accent" href="/interest/sponsor">
            Explore partnership packages →
          </a>
        </div>
      </section>
      <section className="panel-bg">
        <div className="wrap">
          <span className="eyebrow">Confirmed Partners · Global &amp; Regional</span>
          <h2>
            Partner <span className="hl">organizations.</span>
          </h2>
          <div className="partner-logo-grid">
            <a className="partner-logo-card" href="https://www.startupworldcup.io/" target="_blank" rel="noopener noreferrer">
              <span className="k">Global Championship Partner</span>
              <div className="partner-logo-box">
                <img src="/assets/swc/logo.png" alt="Startup World Cup" width="300" height="90" />
              </div>
              <h3>Startup World Cup</h3>
              <p>
                The largest global startup conference and pitch competition worldwide. The top 3 Bengaluru teams qualify directly to pitch for the $1,000,000 USD investment prize at the Grand Finale in Silicon Valley.
              </p>
              <span className="text-link">startupworldcup.io ↗</span>
            </a>
            <a className="partner-logo-card" href="https://www.pegasustechventures.com/" target="_blank" rel="noopener noreferrer">
              <span className="k">Global Venture Partner · Backed by Pegasus</span>
              <div className="partner-logo-box">
                <img src="/assets/swc/pegasus.png" alt="Pegasus Tech Ventures" width="300" height="90" />
              </div>
              <h3>Pegasus Tech Ventures</h3>
              <p>
                Silicon Valley-headquartered global venture capital firm with over $2B in assets under management (AUM). Organizers and primary backing firm behind the Startup World Cup across 50+ countries.
              </p>
              <span className="text-link">pegasustechventures.com ↗</span>
            </a>
            <a className="partner-logo-card" href="/partners/sourcingxpress">
              <span className="k">Ecosystem Partner · Talent &amp; Hiring</span>
              <div className="partner-logo-box">
                <img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="275" height="25" />
              </div>
              <h3>SourcingXPress</h3>
              <p>
                Enterprise technology platform for hiring and talent sourcing, supporting the founder recruitment track and team scaling across Bengaluru.
              </p>
              <span className="text-link">View partner profile →</span>
            </a>
          </div>
          <p className="note">
            Startup League Bengaluru (SPL) is the official regional partner for the Startup World Cup, powered by Pegasus Tech Ventures.{" "}
            <a href="/#world-cup">Read the regional relationship details →</a>
          </p>
        </div>
      </section>
      {tiers.map(([name, description]) => (
        <section className="partner-tier" key={name}>
          <div className="wrap">
            <span className="eyebrow">Partnership Category</span>
            <h2>{name}</h2>
            <p className="lede">{description}</p>
            <div className="partner-logo-grid">
              <div className="partner-logo-card partner-empty">
                <span className="k">Category Open</span>
                <strong>PARTNERSHIP AVAILABLE</strong>
                <p>Put your platform in front of 200+ founders, operators, and active venture investors.</p>
                <a className="text-link" href="/interest/sponsor">
                  Inquire about this tier →
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
      <SiteFooter />
    </>
  );
}
