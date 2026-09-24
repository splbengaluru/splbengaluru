import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts",
  description: "A fast, high-energy, day-long pitching event in Bengaluru. Founders pitch, VCs listen, the audience votes. Season 1: 24 Oct 2026.",
  openGraph: { title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts", description: "A fast, high-energy, day-long pitching event in Bengaluru. Founders pitch, VCs listen, the audience votes. Season 1: 24 Oct 2026.", images: ["/og.png"] },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />

<main>
<section className="hero">
  <div className="ghost-spl" aria-hidden="true">SPL</div>
  <span className="cross" style={{"left": "47%", "top": "34px"}}></span><span className="cross" style={{"right": "3%", "bottom": "44%"}}></span><span className="sq" style={{"background": "var(--pink)", "right": "6%", "top": "250px"}}></span><span className="sq" style={{"background": "var(--orange)", "left": "3.4%", "top": "52%"}}></span><span className="sq" style={{"background": "var(--volt)", "left": "62%", "top": "120px"}}></span>
  <img className="burst-img" src="/assets/burst.svg" alt="" aria-hidden="true" />
  <div className="wrap">
    <span className="eyebrow">Bengaluru, India - 24 Oct 2026 - Season 1</span>
    <div className="title-wrap"><h1 className="hero-title"><span>Startup League</span></h1>
    <div className="kn-sticker" lang="kn">ಬೆಂಗಳೂರು</div></div>
    <button className="script tg" type="button" aria-label="Touch grass"><span className="tg-lawn tg-back" aria-hidden="true"></span><span className="tg-face"><span className="tg-label">touch grass</span></span><span className="tg-lawn tg-front" aria-hidden="true"></span></button>
    <p className="hero-sub">Serious opportunity.<br />Unserious hosts.</p>
    <p className="lede">Startup League Bengaluru (SPL) is a fast, high-energy, day-long pitching event. Founders get a real stage. VCs get curated deal flow. The audience gets to discover, vote and play - not just watch.</p>
    <div className="cta-row">
      <a className="btn btn-accent" href="/season-1#apply">Apply free</a>
      <a className="btn btn-ghost" href="/season-1">See the event</a>
    </div>
    <div className="stats">
      <div className="stat"><b>500</b><span>Round 1 applications, max</span></div>
      <div className="stat"><b>16</b><span>startups pitch live</span></div>
      <div className="stat"><b>60+</b><span>VCs we're targeting in the room</span></div>
      <div className="stat"><b>200</b><span>audience seats</span></div>
    </div>
  </div>
  <div className="skyline-wrap">
    <div className="strip s1">REAL PITCHES. FLUFF NOT INVITED.</div>
    <picture className="skyline"><source media="(max-width:860px)" srcSet="/assets/skyline-1200.webp" /><img src="/assets/skyline-2400.webp" width="2400" height="506" alt="Engraved Bengaluru skyline: temple gopuram, High Court, Mayo Hall clock tower, Vidhana Soudha, Bangalore Palace, UB City towers and the Namma Metro" decoding="async" /></picture>
  </div>
</section>

<div className="ticker" aria-hidden="true"><div>
  Help two dumb guys host their first event<i>/</i>Two hours of experience &gt; ten hours of doomscrolling<i>/</i>Touch some grass, mate<i>/</i>Young, dumb and broke (the hosts, not the founders)<i>/</i>
  Help two dumb guys host their first event<i>/</i>Two hours of experience &gt; ten hours of doomscrolling<i>/</i>Touch some grass, mate<i>/</i>Young, dumb and broke (the hosts, not the founders)<i>/</i>
</div></div>

<section id="what">
  <div className="wrap">
    <div className="split rv">
      <div>
        <span className="eyebrow">What is SPL</span>
        <h2>A pitching event, <span className="hl">not a conference.</span></h2>
      </div>
      <div>
        <p className="lede" style={{"marginTop": "34px"}}>No ten-hour agenda. No panel about panels. SPL is short and alive: founders pitch, investors listen, and the room gets a real say in what deserves attention. And the community keeps going after the lights come up.</p>
      </div>
    </div>
    <div className="cards">
      <div className="card rv"><span className="k">For founders</span><h3>A real stage</h3><p>Apply free with your idea and a video. Get selected and you pitch live to a room of investors.</p><ul><li>Free Round 1 application</li><li>Selection, exposure and feedback</li><li>Access to investors in one room</li></ul></div>
      <div className="card rv"><span className="k">For investors</span><h3>Curated deal flow</h3><p>A shortlist that's been screened before it reaches you, and a room built for follow-up.</p><ul><li>Private briefing pack before the event</li><li>Reserved seating and a help desk</li><li>Intros only when both sides opt in</li></ul></div>
      <div className="card rv"><span className="k">For the audience</span><h3>You get a say</h3><p>Vote live, ask questions, play the quiz rounds - and one of you can win a pitch slot on stage.</p><ul><li>Live voting and moderated Q&amp;A</li><li>Quiz rounds between pitch blocks</li><li>Startup booths and networking</li></ul></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="badges">
  <div className="wrap">
    <span className="eyebrow">Who's in the room</span>
    <h2>Pick your <span className="hl">badge.</span></h2>
    <p className="lede">Five sides of the room. Everyone coming gets a tile to post. Badge maker <span className="tba">launch date TBA</span></p>
    <div className="badges">
      <div className="badge has-img" style={{"--r": "-3deg"}}><img src="/assets/badge-founder-feed.jpg" alt="Founder badge: I'm pitching" loading="lazy" /></div>
      <div className="badge has-img" style={{"--r": "2deg"}}><img src="/assets/badge-attendee-feed.jpg" alt="Attendee badge: I'm in the room" loading="lazy" /></div>
      <div className="badge has-img" style={{"--r": "-1deg"}}><img src="/assets/badge-investor-feed.jpg" alt="Investor badge: I brought a cheque" loading="lazy" /></div>
      <div className="badge has-img" style={{"--r": "3deg"}}><img src="/assets/badge-builder-feed.jpg" alt="Builder badge: I'm building" loading="lazy" /></div>
      <div className="badge has-img" style={{"--r": "-2deg"}}><img src="/assets/badge-judge-feed.jpg" alt="Judge badge: I'm judging" loading="lazy" /></div>
    </div>
    <div className="swipe-hint">SWIPE FOR ALL 5 &rarr;</div>
  </div>
</section>

<div className="ticker alt" aria-hidden="true"><div>NO SLIDES AFTER 10 MIN<i>/</i>COME WATCH 16 FOUNDERS SWEAT<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i>NO SLIDES AFTER 10 MIN<i>/</i>COME WATCH 16 FOUNDERS SWEAT<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i></div></div>

<section id="season-1">
  <div className="wrap">
    <span className="eyebrow">Up next</span>
    <h2>Season 1. One day.</h2>
    <div className="event-card rv">
      <div className="l">
        <span className="mono muted" style={{"fontSize": "12px", "letterSpacing": ".14em"}}>ROUND 1 APPLICATIONS <span className="tba">open date TBA</span></span>
        <h3 style={{"fontSize": "clamp(28px,3.4vw,42px)", "marginTop": "18px", "lineHeight": "1"}}>Startup League Bengaluru - Season 1</h3>
        <dl className="meta">
          <dt>Date</dt><dd className="mono">24 OCT 2026</dd>
          <dt>Time</dt><dd><span className="tba">TBA</span></dd>
          <dt>Venue</dt><dd>Bengaluru <span className="tba">venue TBA</span></dd>
          <dt>Stage</dt><dd>16 startups · 5 VC judges · top 3 win</dd>
        </dl>
      </div>
      <div className="r">
        <div><div className="mono" style={{"fontSize": "13px", "letterSpacing": ".14em"}}>COUNTDOWN</div><div className="big"><span data-days data-short>30</span> <span style={{"fontSize": ".4em"}}>DAYS TO GO</span></div></div>
        <a className="btn" href="/season-1">Event details →</a>
      </div>
    </div>
  </div>
</section>

<section id="sponsors">
  <div className="wrap split">
    <div className="rv">
      <span className="eyebrow">Sponsors &amp; booths</span>
      <h2>Put your product in front of <span className="hl">founders.</span></h2>
      <p className="lede">If your customers are startup founders - payments, fintech infrastructure, hiring, CRM and sales tools, production partners - this is your room.</p>
      <div className="cta-row" style={{"marginTop": "30px"}}><a className="btn btn-accent" href="#contact">Get the sponsor deck</a><a className="btn btn-ghost" href="/season-1#booths">Booths</a></div>
    </div>
    <div className="card rv">
      <span className="k">What sponsors get</span>
      <ul>
        <li>Reach before, during and after the event</li>
        <li>Startup booth or demo space</li>
        <li>Stage acknowledgement, signage and tickets</li>
        <li>Clearly labelled content integration</li>
        <li>Opt-in leads only - never scraped, never quietly shared</li>
        <li>A post-event report: attendance, reach, leads</li>
      </ul>
      <p className="note">Packages and pricing <span className="tba">TBA</span> · Category exclusivity only when priced and contracted.</p>
    </div>
  </div>
</section>

<section className="bigcta has-sky" id="contact"><div className="ghost-spl" aria-hidden="true">SPL</div>
  <div className="wrap">
    <span className="eyebrow">Get involved</span>
    <h2>Help two dumb guys<br />host their first event.</h2>
    <p className="lede" style={{"margin": "0 auto"}}>Founder, investor, sponsor, creator or volunteer - there's a spot for you.</p>
    <div className="cta-row"><a className="btn btn-accent" href="/season-1#apply">Apply to pitch</a><a className="btn btn-ghost" href="mailto:">Email us <span className="tba">address TBA</span></a></div>
  </div>
<img className="sky-band" src="/assets/skyline-1200.webp" alt="" aria-hidden="true" loading="lazy" /></section>
</main>

      <SiteFooter />
    </>
  );
}
