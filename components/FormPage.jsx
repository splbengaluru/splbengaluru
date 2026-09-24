// Shared shell for form pages. `standalone` pages (interest forms) get a slim brand bar
// instead of the full site nav, so they work as links shared on their own.
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import BrandForm from "@/components/BrandForm";

export default function FormPage({ type, eyebrow, title, sub, sticker, aside, standalone = false }) {
  return (
    <>
      {standalone ? (
        <header className="nav slim"><div className="wrap">
          <a className="brand" href="/" aria-label="Startup League Bengaluru home"><span className="wm"><span className="lockup">SPL</span><img className="trophy" src="/assets/trophy.png?v=2" alt="" width="310" height="287" /><span className="city">BENGALURU</span></span></a>
          <a className="slim-link" href="/season-1">Season 1 · 24 Oct 2026 →</a>
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
        </div>
      </section>
      <section className="form-body">
        <div className="wrap form-grid">
          <div className="form-card"><BrandForm type={type} /></div>
          {aside && <aside className="form-aside">{aside}</aside>}
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
