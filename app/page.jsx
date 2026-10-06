import EventCountdown from "@/components/EventCountdown";
import StartupJourney from "@/components/StartupJourney";
import CardEndpoints from "@/components/CardEndpoints";
import BadgeDeck from "@/components/BadgeDeck";
import TicketPreview from "@/components/TicketPreview";
import HomeAnchors from "@/components/HomeAnchors";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Startup League Bengaluru (SPL) · Road to Silicon Valley",
  description: "The official Bengaluru regional for Startup World Cup. 15 startups pitch on 24 October 2026; top three fly to San Francisco to compete for the $1M investment prize.",
  openGraph: {
    title: "Startup League Bengaluru (SPL) · Road to Silicon Valley",
    description: "The official Bengaluru regional for Startup World Cup. 15 startups pitch on 24 October 2026; top three fly to San Francisco to compete for the $1M investment prize.",
    images: ["/og.png?v=3"],
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
<HomeAnchors />
<CardEndpoints />

<main>
<section className="hero" id="home">
  <div className="ghost-spl" aria-hidden="true">SPL</div>
  <span className="cross" style={{"left": "47%", "top": "34px"}}></span><span className="cross" style={{"right": "3%", "bottom": "44%"}}></span><span className="sq" style={{"background": "var(--pink)", "right": "6%", "top": "250px"}}></span><span className="sq" style={{"background": "var(--orange)", "left": "3.4%", "top": "52%"}}></span><span className="sq" style={{"background": "var(--volt)", "left": "62%", "top": "120px"}}></span>
  <img className="burst-img" src="/assets/burst.svg" alt="" aria-hidden="true" />
  <div className="wrap">
    <span className="eyebrow">Bengaluru, India · 24 October 2026 · Season 1</span>
    <div className="title-wrap"><h1 className="hero-title"><span>Startup League</span></h1>
    <div className="kn-sticker" lang="kn">ಬೆಂಗಳೂರು</div></div>
    <button className="script tg" type="button" aria-label="Touch grass"><span className="tg-lawn tg-back" aria-hidden="true"></span><span className="tg-face"><span className="tg-label">touch grass</span></span><span className="tg-lawn tg-front" aria-hidden="true"></span><span className="tg-doodle" aria-hidden="true"><svg viewBox="0 0 190 140" fill="none"><text x="112" y="16" transform="rotate(-9 130 12)">click</text><path className="tg-arrow" d="M178 30 C150 20 116 22 94 38 C80 48 84 68 102 66 C120 64 120 42 100 40 C74 38 52 56 42 78 C34 96 32 114 33 130" /><path className="tg-head" d="M20 114 L33 131 L48 117" /></svg></span></button>
    <div className="grass-leaderboard" id="leaderboard"><button className="lb-btn" type="button" aria-expanded="false" aria-controls="lb-panel"><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />Top 10<span> touchers</span></button><div className="lb-panel" id="lb-panel" hidden><div className="lb-head"><b>Grass touch leaderboard</b><button className="lb-x" type="button" aria-label="Close">×</button></div><ol className="lb-list"><li className="lb-empty">Loading…</li></ol><form className="lb-form"><label htmlFor="lb-name">Your name on the board</label><div><input id="lb-name" maxLength="18" autoComplete="nickname" placeholder="e.g. grass_goblin" /><button type="submit">Save</button></div><p className="lb-me"></p></form></div></div>
    <p className="hero-sub">From Bengaluru<br />to San Francisco.</p>
    <p className="lede">15 early-stage ventures pitch live to active institutional VCs. The top 3 secure their pathway to San Francisco for the $1,000,000 Startup World Cup investment prize.</p>
    <div className="cta-row">
      <a className="btn btn-accent" href="/apply">Apply Now · 15 Stage Slots</a>
      <a className="btn btn-ghost" href="/register">Claim Attendee Pass (₹999)</a>
    </div>
    <div className="hero-countdown-row">
      <EventCountdown />
    </div>
    <div className="stats">
      <div className="stat"><b>TOP 3</b><span>fly to Silicon Valley</span></div>
      <div className="stat"><b>BLR → USA</b><span>official Startup World Cup regional</span></div>
      <div className="stat"><b>24 OCT</b><span>2026 · Bengaluru stage</span></div>
      <div className="stat"><b>$1M</b><span>Grand Finale investment prize</span></div>
    </div>
  </div>
  <div className="skyline-wrap">
    <div className="strip s1">15 FOUNDERS · LIVE VC DILIGENCE · TOP 3 TO SILICON VALLEY</div>
    <picture className="skyline"><source media="(max-width:860px)" srcSet="/assets/skyline-1200.webp" /><img src="/assets/skyline-2400.webp" width="2400" height="506" alt="Engraved Bengaluru skyline: temple gopuram, High Court, Mayo Hall clock tower, Vidhana Soudha, Bangalore Palace, UB City towers and the Namma Metro" decoding="async" /></picture>
  </div>
</section>

<div className="ticker" aria-hidden="true"><div>
  From Bengaluru to San Francisco<i>/</i>Top three to the USA Grand Finale<i>/</i>$1,000,000 investment prize<i>/</i>15 startups on stage<i>/</i>
  From Bengaluru to San Francisco<i>/</i>Top three to the USA Grand Finale<i>/</i>$1,000,000 investment prize<i>/</i>15 startups on stage<i>/</i>
</div></div>



<StartupJourney/>
<nav className="page-index" aria-label="Homepage details"><div className="wrap"><span className="mono">Active section: <b className="active-anchor-tag">#world-cup</b> ↓</span><a href="#world-cup">World Cup</a><a href="#tickets">Tickets</a><a href="#investors">VC thesis</a><a href="#format">Format</a><a href="#rubric">Scorecard</a><a href="#jury">Jury</a><a href="#logistics">Planning</a><a href="#schedule">Schedule</a><a href="/partners">Partners</a><a href="/mentors">Mentors</a><a href="#travel">USA pathway</a><a href="#sponsors">Sponsorship</a><a href="#faq">FAQ</a><a href="#hosts">Hosts</a></div></nav>

<section className="panel-bg" id="tickets">
  <div className="wrap">
    <span className="eyebrow">Event Access · 24 October 2026</span>
    <h2>Step inside the arena.</h2>
    <TicketPreview>
    <div className="tickets" id="apply">
      <div className="ticket"><span className="tag">Step 1 · Founders</span><div className="price">FREE</div><span className="fine">Online application</span><div className="perf"></div>
        <ul><li>Submit pitch video &amp; startup details</li><li>Screened for the 15-startup live stage</li><li>Unlocks the ₹799 applicant attendee rate</li><li>Pitch deck optional</li></ul>
        <a className="btn btn-ghost" href="/apply">Apply Now</a></div>
      <div className="ticket feat"><span className="tag">Verified applicants</span><div className="price"><small>₹</small>799</div><span className="fine">Unlocked with matching application email</span><div className="perf"></div>
        <ul><li>Full day: all 15 pitches, Q&amp;A and booths</li><li>Direct access to founders, mentors and VCs</li><li>Live pitch heats, teardowns and Q&amp;A</li><li>Networking lunch and ecosystem breaks</li></ul>
        <a className="btn" href="/register">Unlock ₹799 Founder Rate</a></div>
      <div className="ticket"><span className="tag">General attendee</span><div className="price"><small>₹</small>999</div><span className="fine">Standard full-day pass</span><div className="perf"></div>
        <ul><li>Full day: pitches, jury reviews and booths</li><li>Learn how high-stakes pitches are evaluated</li><li>Connect with active founders and engineers</li><li>Open networking and community sessions</li></ul>
        <a className="btn btn-ghost" href="/register">Claim ₹999 Attendee Pass</a></div>
      <div className="ticket showcase-card"><span className="tag">Selected finalists · locked</span><div className="price"><small>₹</small>4,999</div><span className="fine">Showcase pass unlocks exclusively upon jury selection.</span><div className="perf"></div><ul><li>Live stage pitch slot in front of jury and VCs</li><li>Dedicated founder demo station in venue</li><li>Inclusion in the investor deal-flow memo</li><li>Pathway to the top 3 San Francisco spots</li></ul><a className="btn btn-ghost" href="/apply">Apply Now First</a></div>
    </div>
    </TicketPreview>
    <p className="note">Selected startups: ₹4,999 showcase pass to pitch on stage. Tickets grant full-day access to SPL Season 1 on 24 October 2026. Venue announcement and door timings* sent directly to registered pass holders.</p>
  </div>
</section>

<section id="investors"><div className="wrap"><div className="split"><div><span className="eyebrow">Venture Capital &amp; Angels</span><h2>High-density deal flow.<br /><span className="hl">Zero fluff on stage.</span></h2></div><div><p className="lede">Discover 15 pre-vetted Bengaluru startups pitching live across tech and non-tech sectors, and scout the teams heading to the global stage.</p><p className="note">Curated deal flow and investor briefing. Investment discussions remain independent between funds and startups.</p></div></div><div className="cards"><div className="card rv"><span className="k">Curated deal flow</span><h3>15 vetted teams</h3><p>Pre-screened Bengaluru startups across consumer brands, AI, D2C, B2B SaaS, manufacturing, fintech, and deeptech. An executive briefing memo delivered directly to participating funds.</p></div><div className="card rv"><span className="k">Unvarnished diligence</span><h3>Live jury defense</h3><p>Watch founders defend their unit economics and go-to-market assumptions under live jury questioning.</p></div><div className="card rv"><span className="k">Founder access</span><h3>Direct connections</h3><p>Meet founding teams in dedicated investor networking windows, with opt-in introductions after the event.</p></div><div className="card"><span className="k">Global representation</span><h3>Back the top three</h3><p>Support and mentor the top three teams advancing from Bengaluru to the Startup World Cup Grand Finale in Silicon Valley.</p><a className="btn btn-ghost btn-sm" href="/interest/vc" style={{marginTop: 14}}>Register for VC Access →</a></div></div><div className="cta-row" style={{marginTop:32}}><a className="btn btn-accent" href="/interest/vc">Request Stage Deal-Flow Memo</a><a className="btn btn-ghost" href="#rubric">Inspect Scorecard (100 Pts)</a></div></div></section>

<section className="panel-bg" id="badges">
  <div className="wrap">
    <span className="eyebrow">Who is in the room</span>
    <h2>Select your <span className="hl">track.</span></h2>
    <p className="lede">Founders, early operators, investors and ecosystem partners gather under one roof on 24 October 2026. Explore your role below:</p>
    <BadgeDeck />
    <div className="swipe-hint">SWIPE FOR ALL 5 &rarr;</div>
  </div>
</section>

<div className="ticker alt" aria-hidden="true"><div>REAL PITCHES + UNFILTERED DILIGENCE<i>/</i>TOP THREE TO SILICON VALLEY<i>/</i>BENGALURU BUILDS<i>/</i>SEASON 1 · 2026<i>/</i>REAL PITCHES + UNFILTERED DILIGENCE<i>/</i>TOP THREE TO SILICON VALLEY<i>/</i>BENGALURU BUILDS<i>/</i>SEASON 1 · 2026<i>/</i></div></div>

<section id="rubric"><div className="wrap"><span className="eyebrow">Evaluation Standard · 100-Point Framework</span><h2>One stage.<br /><span className="hl">One objective scorecard.</span></h2><p className="lede">Every startup on stage is evaluated against a rigorous 100-point venture framework adapted from institutional diligence. Open to all ambitious tech and non-tech ventures.</p><div className="rubric-grid">{[
['Problem & market',15,'Acute customer pain, defensible market sizing and why-now urgency.'],['Product, craft & defensibility',15,'Working product, tangible prototype, or operational craft with a clear defensible moat.'],['Traction & retention',20,'Verified revenue, active pilot contracts, customer loyalty, or repeat order metrics.'],['Unit economics & model',15,'Sustainable margin profile, pricing power, and scalable acquisition economics.'],['Team & execution',15,'Founder-market fit, domain competence, operational grit, and resilience.'],['Moat & unfair advantage',10,'Brand equity, intellectual property, supply chain/distribution access, or network barriers.'],['Ask & capital efficiency',5,'Clear use of funds, runway planning, and next-stage milestone targets.'],['Pitch clarity & defense',5,'Precise answers, intellectual honesty, and command of the numbers.']
].map(([name,weight,detail])=><div className="rubric-item" key={name}><div><h3>{name}</h3><p>{detail}</p></div><b>{weight}<small>/100</small></b></div>)}</div><div className="cards"><div className="card rv"><span className="k">Objective scoring</span><h3>Standardized scale</h3><p>Judges evaluate each criterion on a 1-5 scale; scores are normalized into an unweighted final composite out of 100.</p></div><div className="card rv"><span className="k">Conflict disclosure</span><h3>Strict integrity</h3><p>Judges recuse themselves from scoring any startup where prior investments, advisory roles or active diligence exist.</p></div><div className="card rv"><span className="k">Tie-break priority</span><h3>Evidence leads</h3><p>In the event of a tied score, traction and retention leads, followed by team execution and jury chair consensus.</p></div></div><div className="cta-row" style={{ marginTop: 32 }}><a className="btn btn-ghost" href="/selection">Inspect Full Scorecard Breakdown →</a><a className="btn btn-accent" href="/apply">Apply Now · 15 Stage Slots →</a></div></div></section>

<section id="jury"><div className="wrap"><span className="eyebrow">Independent evaluation</span><h2>The <span className="hl">jury.</span></h2><p className="lede">An independent panel of active institutional VCs, prominent angels and experienced operators. Confirmed appointments are published as rounds finalize.<sup className="ast">*</sup></p><div className="cards"><div className="card"><span className="k">Panel in progress</span><h3>Active appointments</h3><p>Confirmed jury members, committee chair and conflict recusal disclosures will be detailed here ahead of pitch day.</p></div><div className="card"><span className="k">The judging track</span><h3>Evaluate the field</h3><p>Experienced investors and operators can express interest in serving on the evaluation committee.</p><a className="btn btn-ghost btn-sm" href="/interest/judge" style={{marginTop: 14}}>Judging Track Details →</a></div></div></div></section>
<section id="partner-preview" className="panel-bg"><div className="wrap"><span className="eyebrow">Ecosystem Partners</span><h2>Partners backing<br/><span className="hl">the field.</span></h2><div className="cards"><div className="card rv"><span className="k">Championship Partner</span><div className="partner-card-logo"><img src="/assets/swc/logo.png" alt="Startup World Cup" width="220" height="44"/></div><h3>Startup World Cup</h3><p>The premier global competition partnering with SPL to advance the top 3 Bengaluru teams to San Francisco for the $1,000,000 USD investment prize.</p><a className="btn btn-ghost btn-sm" href="https://www.startupworldcup.io/" target="_blank" rel="noopener noreferrer" style={{marginTop: 14}}>Visit startupworldcup.io ↗</a></div><div className="card rv"><span className="k">Global VC Partner · $2B+ AUM</span><div className="partner-card-logo"><img src="/assets/swc/pegasus.png" alt="Pegasus Tech Ventures" width="220" height="44"/></div><h3>Pegasus Tech Ventures</h3><p>Silicon Valley-based global venture capital firm backing transformative companies and organizing the Startup World Cup worldwide.</p><a className="btn btn-ghost btn-sm" href="https://www.pegasustechventures.com/" target="_blank" rel="noopener noreferrer" style={{marginTop: 14}}>Visit pegasustechventures.com ↗</a></div><div className="card rv"><span className="k">Confirmed Talent Partner</span><div className="partner-card-logo"><img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="220" height="25"/></div><h3>SourcingXPress</h3><p>Enterprise platforms for hiring and talent sourcing, supporting the startup recruitment track and team scaling.</p><a className="btn btn-ghost btn-sm" href="/partners/sourcingxpress" style={{marginTop: 14}}>Partner Profile →</a></div><div className="card"><span className="k">Open categories</span><h3>Partner with SPL</h3><p>Title, silver / track, showcase, branding, and community categories for organizations powering Bengaluru startups.</p><a className="btn btn-ghost btn-sm" href="/partners" style={{marginTop: 14}}>Explore Every Category →</a></div></div></div></section><section id="mentors"><div className="wrap"><span className="eyebrow">Operational leadership</span><h2>Meet the<br/><span className="hl">mentors.</span></h2><div className="cards"><div className="card rv person-card"><img className="person-photo" src="/assets/people/victor-c.jpg" alt="Victor C." width="160" height="160"/><h3>Victor C.</h3><p className="person-title">Recruitment, HR &amp; Tech Leader</p><p>Founder of mypathfinder and co-founder of fiesTA. Scaled talent and recruitment at Hubilo, Whatfix, and Pipemonk.</p><a className="btn btn-ghost btn-sm btn-linkedin" href="https://in.linkedin.com/in/victorchoudhary" target="_blank" rel="noopener noreferrer" style={{marginTop: 10}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="linkedin-icon"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path d="M7.4 9.6v7.4H5V9.6h2.4zm.1-3.2c0 .7-.5 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3zm11.5 5.8v4.8H16.6v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.5h-2.4s.03-6.7 0-7.4h2.4v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5z" fill="#ffffff"/></svg><span>LinkedIn ↗</span></a></div><div className="card rv"><span className="k">The mentor panel</span><h3>Operators in your corner</h3><p>We connect the top startups of Bengaluru to our mentors, and they work together on hiring, product, distribution and pitch craft until pitch day. If you have built and scaled, there is a seat for you.</p><a className="btn btn-ghost btn-sm" href="/interest/judge" style={{marginTop: 14}}>Join the mentor panel →</a></div></div><div className="cta-row" style={{marginTop: 32}}><a className="btn btn-accent" href="/mentors">Explore Mentor Directory →</a><a className="btn btn-ghost" href="/interest/judge">Join the mentor panel →</a></div></div></section><section id="logistics"><div className="wrap"><span className="eyebrow">Event Operations</span><h2>The road to<br /><span className="hl">24 October.</span></h2><div className="cards"><div className="card rv"><span className="k">Date & location</span><h3>24 October · Bengaluru</h3><p>A full single-day summit in Bengaluru from morning to evening. In-person venue announcement* and transport details sent to pass holders.</p></div><div className="card rv"><span className="k">The room</span><h3>200+ founders &amp; VCs<sup className="ast">*</sup></h3><p>A curated room of shortlisted founders, active investors, operators and builders from across Bengaluru.</p></div><div className="card rv"><span className="k">The main stage</span><h3>Built for live pitching</h3><p>A high-production stage built for sharp 5-minute pitches, technical product demos and intense jury Q&amp;A.</p></div></div></div></section>
<section id="schedule" className="panel-bg"><div className="wrap schedule-layout"><div className="schedule-intro"><span className="eyebrow schedule-eyebrow">Pitch Day Flow · 24 October 2026</span><h2>One day.<br/><span className="hl">Fifteen pitches.</span></h2><p className="lede">Here is how 24 October runs, from morning check-in to the winner announcement.</p><p className="note">All sessions run at the Season 1 Bengaluru venue.* Timings are indicative while finalists are confirmed; the final running order goes to registered pass holders first.</p></div><div id="timeline" className="schedule-entries">{[["01","Doors & Check-In","Registration open, morning coffee and a walk through the showcase floor."],["02","Opening Keynote & SWC Briefing","Welcome to SPL Season 1 and the road to San Francisco."],["03","Pitch Heats: Block A","First block of finalist pitches, each followed by rapid-fire jury Q&A."],["04","Midday Break & Networking","Networking, product demos and conversations across the showcase floor."],["05","Pitch Heats: Block B","Second block of finalist pitches and jury diligence."],["06","Deliberation & Winner Announcement","The jury reveals the top 3 teams heading to the USA."]].map(([n,title,description])=><article className="schedule-entry" key={n}><div className="schedule-time"><span className="tba">Block {n}</span></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>



<section id="sponsors">
  <div className="wrap"><div className="split">
    <div className="rv">
      <span className="eyebrow">Sponsorship &amp; Partnerships</span>
      <h2>Put your brand in front of <span className="hl">Bengaluru founders.</span></h2>
      <p className="lede">If your company equips early-stage startups with cloud infrastructure, developer tooling, payments, legal, HR tech or banking, SPL puts your leadership directly in the room with high-growth decision-makers.</p>
      <div className="cta-row" style={{"marginTop": "30px"}}><a className="btn btn-accent" href="/partners">Meet our partners</a><a className="btn btn-ghost" href="/interest/sponsor">Register sponsor interest</a><a className="btn btn-ghost" href="#booths">Explore booth space</a></div>
    </div>
    <div className="card rv">
      <span className="k">What sponsors receive</span>
      <ul>
        <li>Prominent brand integration across stage, streams and digital channels</li>
        <li>Startup booth or dedicated demo space in the high-traffic showcase</li>
        <li>VIP passes for your team, portfolio founders or key partners</li>
        <li>Direct opt-in founder connections with zero scraped lists</li>
        <li>Comprehensive post-event report: attendance, reach and leads</li>
      </ul>
      <p className="note">Category exclusivity available for confirmed headline partners.</p>
    </div>
  </div>
<div className="sponsor-slots">{['Title partner','Track partner','Showcase partner','Community & in-kind'].map(name=><details className="sponsor-slot" key={name}><summary>{name}</summary><p>Custom deliverable packages including stage presence, booth placement and branding. Discuss custom allocations directly with the team.</p><a className="btn btn-ghost btn-sm" href="/interest/sponsor" style={{marginTop: 12}}>Discuss This Partnership →</a></details>)}</div></div></section>



<section id="booths">
  <div className="wrap split">
    <div className="rv">
      <span className="eyebrow">Startup Booths &amp; Demos</span>
      <h2>Demo to a room built for discovery.</h2>
    </div>
    <div className="rv">
      <p className="lede" style={{"marginTop": "34px"}}>Startups, developer platforms and infrastructure tools can secure dedicated demo stations to showcase products, onboard users and meet founders and investors throughout the day.</p>
      <p className="note">Limited demo booth spaces allocated on review.</p>
      <div className="cta-row" style={{"marginTop": "24px"}}><a className="btn btn-accent" href="/interest/sponsor">Reserve demo booth</a><a className="btn btn-ghost" href="/go/whatsapp?topic=booth" target="_blank" rel="noopener noreferrer">Inquire on WhatsApp</a></div>
    </div>
  </div>
</section>

<section id="hosts" className="panel-bg"><div className="wrap"><span className="eyebrow">Organizing team</span><h2>The people behind <span className="hl">the league.</span></h2><div className="team-group"><h3 className="team-group-title">Hosts</h3><div className="host-grid hosts-row">{[
{ name:'Victor C.', role:'Host', title:'Recruitment, HR & Tech Leader', bio:'Founder of mypathfinder and co-founder of fiesTA. Scaled talent and recruitment at Hubilo, Whatfix, and Pipemonk.', photo:'victor-c', profile:'https://in.linkedin.com/in/victorchoudhary' },
{ name:'Sanjay Jha', role:'Host', title:'Production GenAI Architect', bio:'Builds RAG, agentic AI, and MCP systems. AI speaker, community organizer, hackathon judge, and mentor.', photo:'sanjay-jha', profile:'https://in.linkedin.com/in/sanjay-jha-2a425719' },
{ name:'Abhishek Das', role:'Host', title:'Co-founder & CTO, SourcingXPress', bio:'Startup World Cup ambassador and regional partner. Builds software platforms for hiring.', photo:'abhishek-das', profile:'https://www.linkedin.com/in/abhishekdas2512' }
].map(person=><div className="card rv person-card" key={person.name}>{person.photo?<img className="person-photo" src={`/assets/people/${person.photo}.jpg`} alt={person.name} width="160" height="160"/>:<div className="person-photo person-placeholder" aria-label="Photo to be announced">Photo TBA</div>}<span className="k">{person.role}</span><h3>{person.name}</h3><p className="person-title">{person.title}</p><p>{person.bio}</p><a className="btn btn-ghost btn-sm btn-linkedin" href={person.profile} target="_blank" rel="noopener noreferrer" style={{marginTop: 14}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="linkedin-icon"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path d="M7.4 9.6v7.4H5V9.6h2.4zm.1-3.2c0 .7-.5 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3zm11.5 5.8v4.8H16.6v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.5h-2.4s.03-6.7 0-7.4h2.4v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5z" fill="#ffffff"/></svg><span>LinkedIn ↗</span></a></div>)}</div></div><div className="team-group"><h3 className="team-group-title">Creative <span className="hl">directors</span></h3><div className="host-grid creative-row">{[
{ name:'Sanskar Kharya', role:'Creative director', title:'Creative Director & Developer', bio:'SPL creative director. Builds AI and backend tools in Python and Java. Founding member of Scientific Bharat.', photo:'sanskar-kharya', profile:'https://www.linkedin.com/in/sanskar-kharya-614301310' },
{ name:'Prahalad Singh Gaur', role:'Creative director', title:'Creative Director & Developer, SourcingXPress', bio:'SPL creative director and open-source contributor. Former technology apprentice at Morgan Stanley.', photo:'prahalad-gaur', profile:'https://www.linkedin.com/in/prahalad-singh-gaur-4a5455333' }
].map(person=><div className="card rv person-card" key={person.name}>{person.photo?<img className="person-photo" src={`/assets/people/${person.photo}.jpg`} alt={person.name} width="160" height="160"/>:<div className="person-photo person-placeholder" aria-label="Photo to be announced">Photo TBA</div>}<span className="k">{person.role}</span><h3>{person.name}</h3><p className="person-title">{person.title}</p><p>{person.bio}</p><a className="btn btn-ghost btn-sm btn-linkedin" href={person.profile} target="_blank" rel="noopener noreferrer" style={{marginTop: 14}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="linkedin-icon"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path d="M7.4 9.6v7.4H5V9.6h2.4zm.1-3.2c0 .7-.5 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.8 0 1.3.6 1.3 1.3zm11.5 5.8v4.8H16.6v-4.5c0-1.1-.4-1.8-1.4-1.8-.8 0-1.2.5-1.4 1-.1.2-.1.5-.1.8v4.5h-2.4s.03-6.7 0-7.4h2.4v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5z" fill="#ffffff"/></svg><span>LinkedIn ↗</span></a></div>)}</div></div></div></section>
<section className="panel-bg" id="faq">
  <div className="wrap">
    <span className="eyebrow">FAQ</span>
    <h2>Frequently asked questions.</h2>
    <div className="faq">
      <details><summary>Is there an application fee for startups?</summary><p>Round 1 online screening is open at zero cost to founders. Evaluation slots are strictly capped for the 15-startup live stage.</p></details>
      <details><summary>Do I need to apply in order to attend?</summary><p>No. Anyone can register for a General Attendee ticket (₹999) to watch the live pitches, learn from jury evaluations, and network. Submitting a pitch application simply unlocks the discounted ₹799 rate.</p></details>
      <details><summary>What does it cost if our startup is selected for the stage?</summary><p>If selected among the 15 stage finalists, startups unlock the ₹4,999 Showcase Pass. This includes the live pitch slot, venue demo space, and full inclusion in the VC deal-flow memo.</p></details>
      <details><summary>How long is each pitch?</summary><p>Finalists receive a dedicated live presentation block followed immediately by interactive jury Q&amp;A. Exact minute allocations are briefed to shortlisted teams.</p></details>
      <details><summary>Who judges the pitches?</summary><p>An independent panel of active institutional VCs, prominent angel investors, and experienced operators. The top three startups advance directly to the USA.</p></details>
      <details><summary>Can audience members participate?</summary><p>Yes. Audience members participate in open founder Q&amp;A, live jury teardowns, ecosystem discussions, and dedicated networking blocks.</p></details>
      <details><summary>Where and when is the event?</summary><p>24 October 2026 in Bengaluru. Doors open in the morning for a full day of pitches, showcase demos, and networking. Exact venue details are sent directly to registered pass holders.</p></details>
      <details><summary>Can I get a refund?</summary><p>Tickets are non-refundable and non-cancellable, but transferrable upon request to the organizing team.</p></details>
      <details><summary>Will the event be photographed or recorded?</summary><p>Yes, main stage pitches and presentations will be recorded and shared. If you prefer not to appear in attendee crowd photos, you can notify the event check-in desk on arrival.</p></details>
    </div>
  </div>
</section>


<section className="bigcta has-sky" id="contact"><div className="ghost-spl" aria-hidden="true">SPL</div>
  <div className="wrap">
    <span className="eyebrow">Season 1 · Bengaluru</span>
    <h2>Back the next<br />global winner from Bengaluru.</h2>
    <div className="cta-row">
      <a className="btn btn-accent" href="/apply">Apply Now · 15 Stage Slots</a>
      <a className="btn btn-ghost" href="/register">Claim Attendee Pass (₹999)</a>
      <a className="btn btn-ghost" href="/interest/vc">Request VC Deal Memo</a>
      <a className="btn btn-ghost" href="/interest/sponsor">Showcase Booth Deck</a>
      <a className="btn btn-ghost" href="/go/whatsapp" target="_blank" rel="noopener noreferrer">Chat on WhatsApp ↗</a>
    </div>
  </div>
<img className="sky-band" src="/assets/skyline-1200.webp" alt="" aria-hidden="true" loading="lazy" /></section>

</main>

      <SiteFooter />
    </>
  );
}
