// Shared shell for form pages. `standalone` pages (interest forms) get a slim brand bar
// instead of the full site nav, so they work as links shared on their own.
import SiteHeader from "@/components/SiteHeader";
import PublicAuth from "@/components/PublicAuth";
import SiteFooter from "@/components/SiteFooter";
import BrandForm from "@/components/BrandForm";
import TicketEligibility from "@/components/TicketEligibility";

export default function FormPage({ type, eyebrow, title, sub, sticker, aside, standalone = false }) {
  return (
    <>
      {standalone ? (
        <header className="nav slim"><div className="wrap">
          <a className="brand" href="/" aria-label="Startup League Bengaluru home"><img className="spl-logo" src="/assets/spl-logo.jpg" alt="SPL Bengaluru" width="1400" height="846" style={{ width: 100, height: "auto", maxWidth: "100%" }} /></a>
          <PublicAuth /><a className="slim-link" href="/season-1">Season 1 · 24 Oct 2026 →</a>
        </div></header>
      ) : (
        <SiteHeader active="s1" />
      )}
      <section className="hero form-hero">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <div className="form-title-wrap">
            <h1 className="form-title">{title}</h1>
            {sticker && <div className="kn-sticker form-sticker">{sticker}</div>}
          </div>
          {sub && <p className="lede">{sub}</p>}
          <a className="btn btn-accent form-jump" href="#registration">Continue to the form ↓</a>
        </div>
      </section>
      <section className="form-body">
        <div className="wrap form-flow">
          {aside && <aside className="pass-details" aria-label="Pass details before registration">{aside}</aside>}
          <div className="form-card" id="registration"><span className="eyebrow">Your next step</span><h2 className="form-section-title">{type === "founder" ? "Your application" : type === "audience" ? "Your registration" : "Register your interest"}</h2>{type === "audience" && <TicketEligibility />}<BrandForm type={type} /></div>

        </div>
      </section>
      <SiteFooter />
    </>
  );
}
