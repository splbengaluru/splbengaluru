import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "SourcingXPress · Ecosystem Partner | Startup League Bengaluru",
  description: "Learn about SourcingXPress, official ecosystem partner supporting talent and recruitment tracks at SPL Season 1 in Bengaluru.",
};

export default function Partner() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="directory-hero">
          <div className="wrap">
            <span className="eyebrow">Confirmed Ecosystem Partner · Season 1</span>
            <h1>SourcingXPress</h1>
            <p className="lede">
              Enterprise technology platform for hiring, talent sourcing, and candidate intelligence. As an official ecosystem partner for SPL Season 1, SourcingXPress equips early-stage founders with tools and strategies to recruit technical talent and scale high-performance teams.
            </p>
            <a className="sxp-brand" href="https://www.sourcingxpress.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="275" height="25" />
            </a>
            <div className="cta-row">
              <a className="btn btn-accent" href="https://www.sourcingxpress.com/" target="_blank" rel="noopener noreferrer">
                Visit SourcingXPress ↗
              </a>
              <a className="btn btn-ghost" href="/interest/sponsor">
                Partner with SPL →
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
