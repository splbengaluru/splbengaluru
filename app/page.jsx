import HomeAnchors from "@/components/HomeAnchors";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts",
  description: "Official Startup World Cup Bengaluru regional. One winner advances to the San Francisco semi-final. 24 October 2026. Hosted by SPL and SourcingXPress.",
  openGraph: { title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts", description: "Official Startup World Cup Bengaluru regional. One winner advances to the San Francisco semi-final. 24 October 2026. Hosted by SPL and SourcingXPress.", images: ["/og.png?v=3"] },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
<HomeAnchors />

<main>
<section className="hero" id="home">
  <div className="ghost-spl" aria-hidden="true">SPL</div>
  <span className="cross" style={{"left": "47%", "top": "34px"}}></span><span className="cross" style={{"right": "3%", "bottom": "44%"}}></span><span className="sq" style={{"background": "var(--pink)", "right": "6%", "top": "250px"}}></span><span className="sq" style={{"background": "var(--orange)", "left": "3.4%", "top": "52%"}}></span><span className="sq" style={{"background": "var(--volt)", "left": "62%", "top": "120px"}}></span>
  <img className="burst-img" src="/assets/burst.svg" alt="" aria-hidden="true" />
  <div className="wrap">
    <span className="eyebrow">Bengaluru, India - 24 Oct 2026 - Season 1</span>
    <div className="title-wrap"><h1 className="hero-title"><span>Startup League</span></h1>
    <div className="kn-sticker" lang="kn">ಬೆಂಗಳೂರು</div></div>
    <button className="script tg" type="button" aria-label="Touch grass"><span className="tg-lawn tg-back" aria-hidden="true"></span><span className="tg-face"><span className="tg-label">touch grass</span></span><span className="tg-lawn tg-front" aria-hidden="true"></span><span className="tg-doodle" aria-hidden="true"><svg viewBox="0 0 190 140" fill="none"><text x="112" y="16" transform="rotate(-9 130 12)">click</text><path className="tg-arrow" d="M178 30 C150 20 116 22 94 38 C80 48 84 68 102 66 C120 64 120 42 100 40 C74 38 52 56 42 78 C34 96 32 114 33 130" /><path className="tg-head" d="M20 114 L33 131 L48 117" /></svg></span></button>
    <div className="grass-leaderboard" id="leaderboard"><button className="lb-btn" type="button" aria-expanded="false" aria-controls="lb-panel"><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />Top 10<span> touchers</span></button><div className="lb-panel" id="lb-panel" hidden><div className="lb-head"><b>Grass touch leaderboard</b><button className="lb-x" type="button" aria-label="Close">×</button></div><ol className="lb-list"><li className="lb-empty">Loading…</li></ol><form className="lb-form"><label htmlFor="lb-name">Your name on the board</label><div><input id="lb-name" maxLength="18" autoComplete="nickname" placeholder="e.g. grass_goblin" /><button type="submit">Save</button></div><p className="lb-me"></p></form></div></div>
    <p className="hero-sub">Pick your horse.<br />Back Bengaluru.</p>
    <p className="lede">Startup League Bengaluru is the official Startup World Cup Bengaluru regional. One winner advances to the San Francisco semi-final, competing for a US$1 million investment prize. A full day of pitches, questions and horse picking. Same Bengaluru energy.</p>
    <div className="cta-row">
      <a className="btn btn-accent" href="/apply">Apply free</a>
      <a className="btn btn-ghost" href="#event">See the event</a>
    </div>
    <div className="stats">
      <div className="stat"><b>ONE</b><span>regional winner advances</span></div>
      <div className="stat"><b>6 + 4</b><span>minute pitch + judge Q&amp;A</span></div>
      <div className="stat"><b>24 OCT</b><span>2026 · Bengaluru</span></div>
      <div className="stat"><b>$1M</b><span>Grand Finale investment prize</span></div>
    </div>
  </div>
  <div className="skyline-wrap">
    <div className="strip s1">REAL PITCHES. FLUFF NOT INVITED.</div>
    <picture className="skyline"><source media="(max-width:860px)" srcSet="/assets/skyline-1200.webp" /><img src="/assets/skyline-2400.webp" width="2400" height="506" alt="Engraved Bengaluru skyline: temple gopuram, High Court, Mayo Hall clock tower, Vidhana Soudha, Bangalore Palace, UB City towers and the Namma Metro" decoding="async" /></picture>
  </div>
</section>

<div className="ticker" aria-hidden="true"><div>
  Pick your horse. Back Bengaluru.<i>/</i>One winner. A global stage.<i>/</i>Touch some grass, mate<i>/</i>Bengaluru to San Francisco<i>/</i>
  Pick your horse. Back Bengaluru.<i>/</i>One winner. A global stage.<i>/</i>Touch some grass, mate<i>/</i>Bengaluru to San Francisco<i>/</i>
</div></div>


<nav className="page-index" aria-label="Homepage details"><div className="wrap"><span className="mono">The whole field ↓</span><a href="#world-cup">World Cup</a><a href="#investors">VC thesis</a><a href="#format">Format</a><a href="#rubric">Rubric</a><a href="#hosts">Hosts</a><a href="#logistics">Planning</a><a href="#travel">Winner travel</a><a href="#sponsors">Sponsorship</a><a href="#tickets">Tickets</a><a href="#faq">FAQ</a></div></nav>
<section id="world-cup" className="panel-bg"><div className="wrap">
  <div className="split"><div><span className="eyebrow">The global finish line</span><h2>Bengaluru.<br />Then <span className="hl">the world.</span></h2><a className="swc-brand" href="https://www.startupworldcup.io/" target="_blank" rel="noopener noreferrer"><img src="/assets/swc/logo.png" alt="Startup World Cup" width="1000" height="600" /><span>Official Startup World Cup website ↗</span></a></div><div><div className="host-brand-pair" aria-label="Hosted by SPL and SourcingXPress"><span>SPL</span><b>×</b><a className="sxp-brand" href="https://www.sourcingxpress.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="275" height="25"/></a></div><p className="lede">Startup World Cup is a global startup competition organised by Pegasus Tech Ventures. SPL is its Bengaluru regional, hosted by SPL × SourcingXPress, with the regional partnership held by Abhishek Das.</p><p className="note">The regional MOU names Pegasus Tech Ventures, Startup World Cup and Abhishek Das. This is a regional competition arrangement, not a promise of investment in every participant.</p></div></div>
  <div className="cards"><div className="card rv"><span className="k">01 · Bengaluru</span><h3>Win the regional</h3><p>Pitch to the regional jury. One winner is selected at SPL on 24 October 2026.</p></div><div className="card rv"><span className="k">02 · San Francisco</span><h3>Enter the semi-final</h3><p>The regional winner is accepted as an official participant in the Grand Finale semi-final and may join its networking sessions, workshops and seminars.</p></div><div className="card rv"><span className="k">03 · The main stage</span><h3>Earn the final-round slot</h3><p>Only selected companies advance to the main-stage final. The US$1 million prize is an investment, subject to SWC terms and due diligence, not a cash grant from SPL.</p></div></div>
  <p className="note">SWC's current schedule: semi-finals 4 November; Grand Finale 6 November 2026, Hilton Union Square, San Francisco. <a href="https://www.startupworldcup.io/grand-finale" target="_blank" rel="noopener noreferrer">Check the organiser's schedule ↗</a> · <a href="https://www.startupworldcup.io/faq" target="_blank" rel="noopener noreferrer">SWC FAQ ↗</a> · <a href="https://www.startupworldcup.io/terms-and-conditions" target="_blank" rel="noopener noreferrer">Prize terms ↗</a></p>
</div></section>
<section id="investors"><div className="wrap"><div className="split"><div><span className="eyebrow">The VC thesis</span><h2>Watch the field.<br /><span className="hl">Pick your horse.</span></h2></div><div><p className="lede">A Bengaluru derby for startup conviction. See the founders, test the evidence and decide who you want to back before the regional winner runs on a global stage.</p><p className="note">Horse picking is the metaphor. This is not betting, a return guarantee or an obligation to invest. Jury selection stays independent of sponsorship.</p></div></div><div className="cards"><div className="card rv"><span className="k">Deal flow</span><h3>Evidence before hype</h3><p>A shared evaluation framework gives the room a common way to compare teams. Shortlist size and investor briefing format <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">Your conviction</span><h3>Back the team you rate</h3><p>Talk to founders after the pitches, with consent. Any investment is a separate discussion between the startup and investor, not an event entitlement.</p></div><div className="card rv"><span className="k">The send-off</span><h3>A global next step</h3><p>Optionally support the winner's San Francisco travel. Costs, coverage and agreement are decided separately. Any equity or investment rights require a separate agreement.</p></div></div><div className="cta-row" style={{marginTop:32}}><a className="btn btn-accent" href="/interest/vc">Register VC interest</a><a className="btn btn-ghost" href="#rubric">Read the evaluation draft</a></div></div></section>

<section id="what">
  <div className="wrap">
    <div className="split rv">
      <div>
        <span className="eyebrow">What is SPL</span>
        <h2>A pitching event, <span className="hl">not a conference.</span></h2>
      </div>
      <div>
        <p className="lede" style={{"marginTop": "34px"}}>A full day, morning to evening. Founders pitch, investors ask the hard questions, and the community meets the teams behind the decks. One regional winner earns a place in the Startup World Cup semi-final. The main-stage final is a further selection, not an automatic slot.</p>
      </div>
    </div>
    <div className="cards">
      <div className="card rv"><span className="k">For founders</span><h3>A real stage</h3><p>Apply free with your idea and a video. Get selected and you pitch live to a room of investors.</p><ul><li>Free Round 1 application</li><li>Selection, exposure and feedback</li><li>Access to investors in one room</li></ul></div>
      <div className="card rv"><span className="k">For investors</span><h3>Curated deal flow</h3><p>A shortlist that's been screened before it reaches you, and a room built for follow-up.</p><ul><li>Investor briefing details TBA</li><li>Investor participation details TBA</li><li>Intros only when both sides opt in</li></ul></div>
      <div className="card rv"><span className="k">For the audience</span><h3>You get a say</h3><p>Watch the pitches, meet founders and take part in the community. Voting and quiz mechanics are being finalised.</p><ul><li>Community participation details TBA</li><li>Quiz rules and timings TBA</li><li>Startup booths and networking</li></ul></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="badges">
  <div className="wrap">
    <span className="eyebrow">Who's in the room</span>
    <h2>Pick your <span className="hl">badge.</span></h2>
    <p className="lede">Five sides of the room. Hover, focus or tap a badge to see your lane. Badge maker <span className="tba">launch date TBA</span></p>
    <div className="badges interactive-badges">
      <details className="role-badge" style={{"--r": "-3deg"}}><summary><img src="/assets/badge-founder-feed.jpg" alt="I'm pitching" loading="lazy" /><span>Flip / tap for details</span></summary><div className="badge-back"><b>For founders</b><p>Apply, meet the jury and understand the route to San Francisco.</p><a className="btn btn-ghost btn-sm" href="#format">Learn more →</a></div></details>
      <details className="role-badge" style={{"--r": "2deg"}}><summary><img src="/assets/badge-attendee-feed.jpg" alt="I'm in the room" loading="lazy" /><span>Flip / tap for details</span></summary><div className="badge-back"><b>For attendees</b><p>Watch the pitches, ask questions and meet the people building next.</p><a className="btn btn-ghost btn-sm" href="#tickets">Learn more →</a></div></details>
      <details className="role-badge" style={{"--r": "-1deg"}}><summary><img src="/assets/badge-investor-feed.jpg" alt="I brought a cheque" loading="lazy" /><span>Flip / tap for details</span></summary><div className="badge-back"><b>For investors</b><p>Read the thesis, evaluation draft and optional winner-backing plan.</p><a className="btn btn-ghost btn-sm" href="#investors">Learn more →</a></div></details>
      <details className="role-badge" style={{"--r": "3deg"}}><summary><img src="/assets/badge-builder-feed.jpg" alt="I'm building" loading="lazy" /><span>Flip / tap for details</span></summary><div className="badge-back"><b>For builders</b><p>Meet founders, explore demos and get involved in the community.</p><a className="btn btn-ghost btn-sm" href="#booths">Learn more →</a></div></details>
      <details className="role-badge" style={{"--r": "-2deg"}}><summary><img src="/assets/badge-judge-feed.jpg" alt="I'm judging" loading="lazy" /><span>Flip / tap for details</span></summary><div className="badge-back"><b>For judges</b><p>Review the proposed rubric, conflicts process and pitch format.</p><a className="btn btn-ghost btn-sm" href="#rubric">Learn more →</a></div></details>
    </div>
    <div className="swipe-hint">SWIPE FOR ALL 5 &rarr;</div>
  </div>
</section>

<div className="ticker alt" aria-hidden="true"><div>6 MIN PITCH + 4 MIN Q&amp;A<i>/</i>ONE WINNER ADVANCES<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i>6 MIN PITCH + 4 MIN Q&amp;A<i>/</i>ONE WINNER ADVANCES<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i></div></div>

<section id="season-1">
  <div className="wrap" id="event">
    <span className="eyebrow">Up next</span>
    <h2>Season 1. One day.</h2>
    <div className="event-card rv">
      <div className="l">
        <span className="mono muted" style={{"fontSize": "12px", "letterSpacing": ".14em"}}>ROUND 1 APPLICATIONS <span className="tba">open date TBA</span></span>
        <h3 style={{"fontSize": "clamp(28px,3.4vw,42px)", "marginTop": "18px", "lineHeight": "1"}}>Startup League Bengaluru - Season 1</h3>
        <dl className="meta">
          <dt>Date</dt><dd className="mono">24 OCT 2026</dd>
          <dt>Time</dt><dd>Morning to evening · <span className="tba">exact times TBA</span></dd>
          <dt>Venue</dt><dd>Bengaluru <span className="tba">venue TBA</span></dd>
          <dt>Stage</dt><dd>6-minute pitch + 4-minute judge Q&amp;A · one winner</dd>
        </dl>
      </div>
      <div className="r">
        <div><div className="mono" style={{"fontSize": "13px", "letterSpacing": ".14em"}}>COUNTDOWN</div><div className="big"><span data-days data-short>30</span> <span style={{"fontSize": ".4em"}}>DAYS TO GO</span></div></div>
        <a className="btn" href="#format">Event format →</a>
      </div>
    </div>
  </div>
</section>


<section id="format" className="panel-bg"><div className="wrap"><span className="eyebrow">The regional format</span><h2>Apply. Pitch.<br /><span className="hl">One winner.</span></h2><p className="lede">A six-minute pitch followed by four minutes of judge Q&amp;A. The MOU calls for 4-6 qualified judges. Final jury, shortlist size and selection dates <span className="tba">TBA</span>.</p><div className="cards"><div className="card rv"><span className="k">01 · Application</span><h3>Apply with SPL</h3><p>Apply through SPL. This is the final application route for the Bengaluru regional. SPL runs applications, selection, judging and the event; SWC supports the regional with its brand and marketing. Opening date and deadline <span className="tba">TBA</span>.</p><a className="text-link" href="/apply">Apply to the Bengaluru regional →</a></div><div className="card rv"><span className="k">02 · Regional stage</span><h3>6 + 4 minutes</h3><p>Six minutes to pitch. Four minutes for the jury's questions. Audience quizzes and community activity sit around the competition; their final rules <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">03 · The result</span><h3>One regional champion</h3><p>The jury selects the winner. The winner advances to the San Francisco semi-final, not automatically to the main-stage final.</p></div></div><p className="note">The regional 6+4 format comes from the signed regional MOU. SWC's published Grand Finale format is different: 4 minutes + 2 minutes Q&amp;A. <a href="https://www.startupworldcup.io/faq" target="_blank" rel="noopener noreferrer">Read the SWC FAQ ↗</a></p></div></section>
<section id="rubric"><div className="wrap"><span className="eyebrow">Evaluation · proposed, not final</span><h2>One field.<br /><span className="hl">One fair scorecard.</span></h2><p className="lede">A working 100-point rubric for discussion. SWC supplies judging criteria and guidelines; this draft must be aligned and approved before it is used. Final rubric and jury briefing <span className="tba">TBA</span>.</p><div className="rubric-grid">{[
['Problem & market',15,'Real customer pain, credible market and a clear why-now.'],['Product & solution',15,'A working product, a clear demo and a differentiated solution.'],['Traction & evidence',20,'Revenue, users or pilots supported by retention and real evidence.'],['Business model',15,'Plausible economics, costs and a path to sustainable margins.'],['Team',15,'Founder-market fit, complementary skills and an honest read of gaps.'],['Moat & competition',10,'A clear competitive landscape and a defensible edge.'],['Ask & use of funds',5,'A specific ask, deployment plan and milestones.'],['Pitch & delivery',5,'Clear answers, honest limits and ownership of the weak spots.']
].map(([name,weight,detail])=><div className="rubric-item" key={name}><div><h3>{name}</h3><p>{detail}</p></div><b>{weight}<small>/100</small></b></div>)}</div><div className="cards"><div className="card rv"><span className="k">Draft scoring</span><h3>Compare like with like</h3><p>Proposed method: score each criterion 1-5; weighted points = score ÷ 5 × weight. Average eligible judges' totals. This produces a score out of 100.</p></div><div className="card rv"><span className="k">Draft integrity rule</span><h3>Declare conflicts</h3><p>Proposed: disclose investments, advisory roles and active diligence before scoring. Exclude conflicted scores; record a short reason for each evaluation.</p></div><div className="card rv"><span className="k">Draft tie-break</span><h3>Evidence leads</h3><p>Proposed order: traction, then team, then jury-chair decision. Chair, final process and publication policy <span className="tba">TBA</span>.</p></div></div></div></section>
<section id="hosts" className="panel-bg"><div className="wrap"><span className="eyebrow">People behind the league</span><h2>Your <span className="hl">hosts.</span></h2><div className="host-grid">{[
{ name:'Prahalad Singh Gaur', title:'Associate Software Developer, SourcingXPress', bio:'SPL co-organizer and FOSS contributor. Previously a Technology Apprentice at Morgan Stanley.', photo:'prahalad-gaur', profile:'https://www.linkedin.com/in/prahalad-singh-gaur-4a5455333' },
{ name:'Sanskar Kharya', title:'CSE Student, Alliance (Kalvium)', bio:'SPL co-organizer. Builds AI and backend tools in Python and Java. Founding member of Scientific Bharat.', photo:'sanskar-kharya', profile:'https://www.linkedin.com/in/sanskar-kharya-614301310' },
{ name:'Abhishek Das', title:'Co-founder & CTO, SourcingXPress', bio:'Startup World Cup ambassador and regional partner. Builds technology for people.', photo:'abhishek-das', profile:'https://www.linkedin.com/in/abhishekdas2512' },
{ name:'Sanjay Jha', title:'Production GenAI Architect', bio:'Builds RAG, agentic AI and MCP systems. AI speaker, community leader, hackathon judge and mentor.', photo:'sanjay-jha', profile:'https://in.linkedin.com/in/sanjay-jha-2a425719' }
].map(person=><div className="card rv person-card" key={person.name}>{person.photo?<img className="person-photo" src={`/assets/people/${person.photo}.jpg`} alt={person.name} width="120" height="120"/>:<div className="person-photo person-placeholder" aria-label="Photo to be announced">Photo TBA</div>}<span className="k">Host</span><h3>{person.name}</h3><p className="person-title">{person.title}</p><p>{person.bio}</p><a className="text-link" href={person.profile} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>)}</div><div className="cards"><div className="card rv"><span className="k">Hosting entity</span><a className="sxp-brand" href="https://www.sourcingxpress.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="275" height="25"/></a><h3>SourcingXPress</h3><p>The business entity hosting the event with SPL. SourcingXPress builds technology for hiring and talent sourcing.</p><a className="text-link" href="https://www.sourcingxpress.com/" target="_blank" rel="noopener noreferrer">Visit SourcingXPress ↗</a></div><div className="card rv person-card" id="mentors"><img className="person-photo" src="/assets/people/victor-c.jpg" alt="Victor C." width="120" height="120"/><span className="k">Mentor</span><h3>Victor C.</h3><p className="person-title">Recruitment, HR &amp; Tech Enthusiast</p><p>Founder of mypathfinder and co-founder of fiesTA, with experience leading talent and HR at Hubilo, Whatfix and Pipemonk.</p><a className="text-link" href="https://in.linkedin.com/in/victorchoudhary" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><p className="note">More mentors and session details <span className="tba">TBA</span>.</p></div><div className="card rv" id="jury"><span className="k">Jury</span><h3>4-6 qualified judges</h3><p>VCs, industry experts and thought leaders, as required by the regional MOU. Final names, chair and conflicts process <span className="tba">TBA</span>.</p></div></div></div></section>
<section id="logistics"><div className="wrap"><span className="eyebrow">Planning, in the open</span><h2>What is locked.<br /><span className="hl">What is not.</span></h2><div className="cards"><div className="card rv"><span className="k">When & where</span><h3>24 October · Bengaluru</h3><p>A full day, morning to evening. Exact venue, doors, closing time, accessibility and transport information <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">MOU minimums, not bookings</span><h3>100+ / 30+</h3><p>Minimum 100 attendees and 30 startup applications. These are planning commitments, not claimed registrations. Confirmed attendance, investor count and final capacity <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">The stage</span><h3>Built for clear pitches</h3><p>SWC and Pegasus branding, visible presentation screens and a 10-minute SWC introduction. Production supplier, stage plan and technical check schedule <span className="tba">TBA</span>.</p></div></div><div id="timeline" className="planning-list"><h3>Draft day flow · exact times TBA</h3><p>Check-in &amp; booths → SWC introduction → pitch blocks &amp; judge Q&amp;A → community quiz breaks → jury decision → one winner announced → networking.</p><p className="note">Application window, shortlist announcement, jury briefing, mentor sessions and detailed running order <span className="tba">TBA</span>.</p></div></div></section>
<section id="travel" className="panel-bg"><div className="wrap"><span className="eyebrow">The winner's San Francisco trip</span><h2>The stage is earned.<br /><span className="hl">Travel is separate.</span></h2><p className="lede">Pegasus and SWC do not cover travel expenses or related participation costs. The regional winner receives free SWC event tickets under the organiser's published FAQ. Travel funding is not included in winning SPL.</p><div className="cards"><div className="card rv"><span className="k">Path A</span><h3>The startup arranges it</h3><p>The startup covers flights, accommodation, visa fees and local logistics. Budget, travelling team and booking choices remain theirs. Cost estimate <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">Path B</span><h3>A backer helps</h3><p>A VC or sponsor can choose to cover agreed parts of the winner's trip. Coverage, payment route, terms and any investment are separate written agreements. Nothing is assumed.</p></div><div className="card rv"><span className="k">Visa support</span><h3>Recommendation, not approval</h3><p>SPL submits the regional winner to SWC, which provides the visa recommendation. Process and letter details <span className="tba">TBA</span>. Visa decisions remain with the authorities; no visa is guaranteed.</p></div></div><p className="note"><a href="https://www.startupworldcup.io/faq" target="_blank" rel="noopener noreferrer">Read SWC's travel and ticket policy ↗</a></p></div></section>

<section id="sponsors">
  <div className="wrap"><div className="split">
    <div className="rv">
      <span className="eyebrow">Sponsors &amp; booths</span>
      <h2>Put your product in front of <span className="hl">founders.</span></h2>
      <p className="lede">If your customers are startup founders - payments, fintech infrastructure, hiring, CRM and sales tools, production partners - this is your room.</p>
      <div className="cta-row" style={{"marginTop": "30px"}}><a className="btn btn-accent" href="/interest/sponsor">Register sponsor interest</a><a className="btn btn-ghost" href="#booths">Booths</a></div>
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
<div className="sponsor-slots">{['Title partner','Stable partner','Track partner','Community / in-kind'].map(name=><details className="sponsor-slot" key={name}><summary>{name}<span className="tba">price TBA</span></summary><p>Available slots, deliverables, placement and price <span className="tba">TBA</span>. No jury seat, investment rights or data access are included by default.</p><a className="text-link" href="/interest/sponsor">Discuss this partnership →</a></details>)}</div><p className="note">The regional partner has the sole right to solicit, negotiate and retain tournament sponsorship and commercial proceeds. Sponsor branding sits alongside, and never replaces, required SWC and Pegasus branding. Final packages are subject to agreement.</p></div></section>

<section className="panel-bg" id="tickets">
  <div className="wrap">
    <span className="eyebrow">Tickets</span>
    <h2>Tickets. On the table.</h2>
    <p className="lede">Current SPL ticket structure. Sales opening and final inclusions are still being confirmed. Founders apply free. A valid application unlocks the ₹799 ticket with matching Google sign-in. All forms use Google sign-in for accurate name and email.</p>
    <div className="tickets" id="apply">
      <div className="ticket rv"><span className="tag">Step 1 · Everyone</span><div className="price">FREE</div><span className="fine">Round 1 application</span><div className="perf"></div>
        <ul><li>Idea + video link</li><li>Pitch deck optional</li><li>Unlocks ₹799 ticket with the same Google account email</li><li>Shot at the live stage</li></ul>
        <a className="btn btn-ghost" href="/apply">Apply now</a></div>
      <div className="ticket feat rv"><span className="tag">Pitch applicants</span><div className="price"><small>₹</small>799</div><span className="fine">Locked until a valid pitch application + matching Google sign-in</span><div className="perf"></div>
        <ul><li>For founders with a valid pitch application</li><li>Full day: pitches, community, booths</li><li>Live voting and Q&amp;A</li><li>Networking with founders and VCs</li></ul>
        <a className="btn" href="/register">Register</a></div>
      <div className="ticket rv"><span className="tag">General · base ticket</span><div className="price"><small>₹</small>999</div><span className="fine">Referral discount rules <span className="tba">TBA</span></span><div className="perf"></div>
        <ul><li>Base price for attendees</li><li>Full day: pitches, community, booths</li><li>Live voting and Q&amp;A</li><li>Community quiz rules TBA</li></ul>
        <a className="btn btn-ghost" href="/register">Register</a></div>
      <div className="ticket rv showcase-card"><span className="tag">Selected founders · locked</span><div className="price"><small>₹</small>4,999</div><span className="fine">Showcase pass unlocks only after SPL selects your application. Purchase details <span className="tba">TBA</span>.</span><div className="perf"></div><ul><li>Only for founders selected by SPL</li><li>Pitch on stage after Round 2</li><li>Purchase details <span className="tba">TBA</span></li></ul><a className="btn btn-ghost" href="/apply">Apply free first</a></div>
    </div>
    <p className="note">Selected startups: ₹4,999 showcase pass to pitch on stage. Tickets are non-refundable. GST <span className="tba">inclusive/exclusive TBC</span> · VC track and VIP <span className="tba">TBA</span> · Sales open <span className="tba">date TBA</span></p>
  </div>
</section>

<section id="booths">
  <div className="wrap split">
    <div className="rv">
      <span className="eyebrow">Booths &amp; sponsors</span>
      <h2>Demo to a room that came to discover.</h2>
    </div>
    <div className="rv">
      <p className="lede" style={{"marginTop": "34px"}}>Startups and companies can buy a booth to demo their product, meet other founders and talk to the audience. Sponsors get reach before, during and after the event, with opt-in leads only.</p>
      <p className="note">Booth and sponsor pricing <span className="tba">TBA</span></p>
      <div className="cta-row" style={{"marginTop": "24px"}}><a className="btn btn-accent" href="/go/whatsapp?topic=booth" target="_blank" rel="noopener noreferrer">Enquire about a booth</a></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="faq">
  <div className="wrap">
    <span className="eyebrow">FAQ</span>
    <h2>Questions.</h2>
    <div className="faq">
      <details><summary>Is applying really free?</summary><p>Yes. Round 1 is free: your idea and a video link. A pitch deck is optional.</p></details>
      <details><summary>Do I need to apply to get a ticket?</summary><p>No. Anyone can register for a General ticket at ₹999. A valid pitch application unlocks the ₹799 applicant ticket when you sign in with Google using the same application email.</p></details>
      <details><summary>What does it cost to pitch?</summary><p>If you're selected to pitch, the showcase pass to pitch on stage is ₹4,999. Payment timing and withdrawal terms <span className="tba">TBA</span></p></details>
      <details><summary>How long is a pitch?</summary><p>6 minutes, followed by 4 minutes of judge Q&amp;A.</p></details>
      <details><summary>Who judges?</summary><p>The regional MOU calls for 4-6 qualified judges. Final names TBA. They select one winner.</p></details>
      <details><summary>Can someone from the audience pitch?</summary><p>Audience quiz and any showcase pitch slot are planned. Eligibility, selection and relationship to the regional competition <span className="tba">TBA</span></p></details>
      <details><summary>Where and when is it?</summary><p>24 October 2026 in Bengaluru. Venue and time <span className="tba">TBA</span></p></details>
      <details><summary>Can I get a refund?</summary><p>Tickets are non-refundable and non-cancellable.</p></details>
      <details><summary>Will I be filmed?</summary><p>By attending, you consent that you might be photographed or filmed and shown. You can always say no to being interviewed or captured when a photographer, volunteer or host asks. Full consent policy <span className="tba">TBA</span></p></details>
    </div>
  </div>
</section>


<section className="bigcta has-sky" id="contact"><div className="ghost-spl" aria-hidden="true">SPL</div>
  <div className="wrap">
    <span className="eyebrow">Get involved</span>
    <h2>Back the next<br />Bengaluru winner.</h2>
    <p className="lede" style={{"margin": "0 auto"}}>Founder, investor, sponsor, creator or volunteer - there's a spot for you.</p>
    <div className="cta-row"><a className="btn btn-accent" href="/apply">Apply to pitch</a><a className="btn btn-ghost" href="/interest/vc">VC interest</a><a className="btn btn-ghost" href="/interest/sponsor">Sponsor interest</a><a className="btn btn-ghost" href="/register">Get a ticket</a><a className="btn btn-ghost" href="/go/whatsapp" target="_blank" rel="noopener noreferrer">Enquire on WhatsApp</a></div>
  </div>
<img className="sky-band" src="/assets/skyline-1200.webp" alt="" aria-hidden="true" loading="lazy" /></section>
</main>

      <SiteFooter />
    </>
  );
}
