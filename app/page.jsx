import EventCountdown from "@/components/EventCountdown";
import StartupJourney from "@/components/StartupJourney";
import CardEndpoints from "@/components/CardEndpoints";
import RoleBadge from "@/components/RoleBadge";
import TicketPreview from "@/components/TicketPreview";
import HomeAnchors from "@/components/HomeAnchors";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts",
  description: "SPL is the exclusive Bengaluru Startup World Cup partner. Top three startups head to the USA event. 24 October 2026. By Startup League Bengaluru.",
  openGraph: { title: "Startup League Bengaluru (SPL) - Serious opportunity, unserious hosts", description: "SPL is the exclusive Bengaluru Startup World Cup partner. Top three startups head to the USA event. 24 October 2026. By Startup League Bengaluru.", images: ["/og.png?v=3"] },
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
    <span className="eyebrow">Bengaluru, India - 24 Oct 2026 - Season 1</span>
    <div className="title-wrap"><h1 className="hero-title"><span>Startup League</span></h1>
    <div className="kn-sticker" lang="kn">ಬೆಂಗಳೂರು</div></div>
    <button className="script tg" type="button" aria-label="Touch grass"><span className="tg-lawn tg-back" aria-hidden="true"></span><span className="tg-face"><span className="tg-label">touch grass</span></span><span className="tg-lawn tg-front" aria-hidden="true"></span><span className="tg-doodle" aria-hidden="true"><svg viewBox="0 0 190 140" fill="none"><text x="112" y="16" transform="rotate(-9 130 12)">click</text><path className="tg-arrow" d="M178 30 C150 20 116 22 94 38 C80 48 84 68 102 66 C120 64 120 42 100 40 C74 38 52 56 42 78 C34 96 32 114 33 130" /><path className="tg-head" d="M20 114 L33 131 L48 117" /></svg></span></button>
    <div className="grass-leaderboard" id="leaderboard"><button className="lb-btn" type="button" aria-expanded="false" aria-controls="lb-panel"><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />Top 10<span> touchers</span></button><div className="lb-panel" id="lb-panel" hidden><div className="lb-head"><b>Grass touch leaderboard</b><button className="lb-x" type="button" aria-label="Close">×</button></div><ol className="lb-list"><li className="lb-empty">Loading…</li></ol><form className="lb-form"><label htmlFor="lb-name">Your name on the board</label><div><input id="lb-name" maxLength="18" autoComplete="nickname" placeholder="e.g. grass_goblin" /><button type="submit">Save</button></div><p className="lb-me"></p></form></div></div>
    <p className="hero-sub">Pick your horse.<br />Back Bengaluru.</p>
    <p className="lede">Bring your idea. Pitch in Bengaluru. Meet VCs. The top three take the next step toward Startup World Cup in San Francisco. Here is how the journey works.</p>
    <div className="cta-row">
      <a className="btn btn-accent" href="/apply">Apply free</a>
      <a className="btn btn-ghost" href="#journey">Follow the journey</a>
    </div>
    <EventCountdown/>
    <div className="stats">
      <div className="stat"><b>TOP 3</b><span>to the USA event</span></div>
      <div className="stat"><b>BLR → USA</b><span>ambition meets a global stage</span></div>
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
  Pick your horse. Back Bengaluru.<i>/</i>Top three. A global next step.<i>/</i>Touch some grass, mate<i>/</i>Bengaluru to San Francisco<i>/</i>
  Pick your horse. Back Bengaluru.<i>/</i>Top three. A global next step.<i>/</i>Touch some grass, mate<i>/</i>Bengaluru to San Francisco<i>/</i>
</div></div>



<StartupJourney/>
<nav className="page-index" aria-label="Homepage details"><div className="wrap"><span className="mono">The whole field ↓</span><a href="#world-cup">World Cup</a><a href="#investors">VC thesis</a><a href="#format">Format</a><a href="#rubric">See the rubric</a><a href="#jury">Jury</a><a href="#logistics">Planning</a><a href="#schedule">Schedule</a><a href="/partners">Partners</a><a href="/mentors">Mentors</a><a href="#travel">USA pathway</a><a href="#sponsors">Sponsorship</a><a href="#tickets">Tickets</a><a href="#faq">FAQ</a><a href="#hosts">Hosts</a></div></nav>

<section id="investors"><div className="wrap"><div className="split"><div><span className="eyebrow">For VCs</span><h2>Meet the teams.<br /><span className="hl">Choose who to back.</span></h2></div><div><p className="lede">Meet the shortlisted founders, ask questions and decide who you want to back. Help find startups to represent Bengaluru on a global stage.</p><p className="note">This is a deal-flow opportunity, not betting or a promise of returns. Networking lunch and side-event details TBA.</p></div></div><div className="cards"><div className="card rv"><span className="k">Deal flow</span><h3>Evidence before hype</h3><p>Hand-picked Bengaluru startups, a pitch stage and time to meet the founders. Investor briefing format <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">Your conviction</span><h3>Back the team you rate</h3><p>Talk to founders after the pitches, with consent. Any investment is a separate discussion between the startup and investor, not an event entitlement.</p></div><div className="card rv"><span className="k">Networking + next steps</span><h3>A global next step</h3><p>Optionally support the top three teams' San Francisco travel. Costs, coverage and agreement are decided separately. Networking lunch and side-event details TBA. Any investment is agreed separately.</p></div></div><div className="cta-row" style={{marginTop:32}}><a className="btn btn-accent" href="/interest/vc">Register VC interest</a><a className="btn btn-ghost" href="#rubric">See the rubric</a></div></div></section>



<section className="panel-bg" id="badges">
  <div className="wrap">
    <span className="eyebrow">Who's in the room</span>
    <h2>Pick your <span className="hl">badge.</span></h2>
    <p className="lede">Learning about startups? Have an idea and want more confidence? Watch real pitches, meet founders and join the networking lunch or side event. Final inclusions TBA. Hover or tap to find your track. Badge maker <span className="tba">launch date TBA</span></p>
    <div className="badges interactive-badges">
      <RoleBadge rotation="-3deg" image="/assets/badge-founder-feed.jpg" alt="I'm pitching" title="For founders" description="Apply, meet the jury and understand the route to San Francisco." href="/apply"/>
      <RoleBadge rotation="2deg" image="/assets/badge-attendee-feed.jpg" alt="I'm in the room" title="For attendees" description="Watch the pitches, ask questions and meet the people building next." href="/register"/>
      <RoleBadge rotation="-1deg" image="/assets/badge-investor-feed.jpg" alt="I brought a cheque" title="For investors" description="Meet the startups and explore the investor track." href="/interest/vc"/>
      <RoleBadge rotation="3deg" image="/assets/badge-builder-feed.jpg" alt="I'm building" title="For builders" description="Meet founders, explore demos and get involved in the community." href="/interest/sponsor"/>
      <RoleBadge rotation="-2deg" image="/assets/badge-judge-feed.jpg" alt="I'm judging" title="For judges" description="Review the proposed rubric, conflicts process and pitch format." href="/interest/judge"/>
    </div>
    <div className="swipe-hint">SWIPE FOR ALL 5 &rarr;</div>
  </div>
</section>

<div className="ticker alt" aria-hidden="true"><div>REAL PITCHES + HARD QUESTIONS<i>/</i>TOP THREE TO THE USA<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i>REAL PITCHES + HARD QUESTIONS<i>/</i>TOP THREE TO THE USA<i>/</i>BENGALURU BUILDS<i>/</i>EST 2026<i>/</i></div></div>





<section id="rubric"><div className="wrap"><span className="eyebrow">Evaluation · proposed, not final</span><h2>One field.<br /><span className="hl">One fair scorecard.</span></h2><p className="lede">A working 100-point rubric for discussion. SPL will refine this draft with VC SOPs and insights. It must be aligned and approved before it is used. Final rubric and jury briefing <span className="tba">TBA</span>.</p><div className="rubric-grid">{[
['Problem & market',15,'Real customer pain, credible market and a clear why-now.'],['Product & solution',15,'A working product, a clear demo and a differentiated solution.'],['Traction & evidence',20,'Revenue, users or pilots supported by retention and real evidence.'],['Business model',15,'Plausible economics, costs and a path to sustainable margins.'],['Team',15,'Founder-market fit, complementary skills and an honest read of gaps.'],['Moat & competition',10,'A clear competitive landscape and a defensible edge.'],['Ask & use of funds',5,'A specific ask, deployment plan and milestones.'],['Pitch & delivery',5,'Clear answers, honest limits and ownership of the weak spots.']
].map(([name,weight,detail])=><div className="rubric-item" key={name}><div><h3>{name}</h3><p>{detail}</p></div><b>{weight}<small>/100</small></b></div>)}</div><div className="cards"><div className="card rv"><span className="k">Draft scoring</span><h3>Compare like with like</h3><p>Proposed method: score each criterion 1-5; weighted points = score ÷ 5 × weight. Average eligible judges' totals. This produces a score out of 100.</p></div><div className="card rv"><span className="k">Draft integrity rule</span><h3>Declare conflicts</h3><p>Proposed: disclose investments, advisory roles and active diligence before scoring. Exclude conflicted scores; record a short reason for each evaluation.</p></div><div className="card rv"><span className="k">Draft tie-break</span><h3>Evidence leads</h3><p>Proposed order: traction, then team, then jury-chair decision. Chair, final process and publication policy <span className="tba">TBA</span>.</p></div></div></div></section>

<section id="jury"><div className="wrap"><span className="eyebrow">Independent judging</span><h2>The <span className="hl">jury.</span></h2><p className="lede">A separate role from the hosts. Jury names and the final judging process will be announced once confirmed.</p><div className="cards"><div className="card"><span className="k">Lineup in progress</span><h3>Names TBA</h3><p>Final jury members, chair and conflicts process will appear here once confirmed. A host or mentor listing does not imply a jury seat.</p></div><div className="card"><span className="k">The judging track</span><h3>Interest, not admission</h3><p>Express interest in judging. Jury appointments are selected separately, not sold or granted through registration.</p><a className="text-link" href="/interest/judge">Judging details →</a></div></div></div></section>
<section id="partner-preview" className="panel-bg"><div className="wrap"><span className="eyebrow">Backing the field</span><h2>Partners, in<br/><span className="hl">their own lanes.</span></h2><div className="cards"><div className="card rv"><span className="k">Partner</span><a className="sxp-brand" href="/partners/sourcingxpress"><img src="/assets/people/sourcingxpress-logo.svg" alt="SourcingXPress" width="275" height="25"/></a><h3>SourcingXPress</h3><p>SourcingXPress builds technology for hiring and talent sourcing. Partner roles and final event support details TBA.</p><a className="text-link" href="/partners/sourcingxpress">Partner profile →</a><p><a className="text-link" href="/partners">All partner categories →</a></p></div><div className="card"><span className="k">Open categories</span><h3>Your place in the league</h3><p>Title, silver / track, showcase, branding and community categories. Packages and partners TBA.</p><a className="text-link" href="/partners">Explore every category →</a></div></div></div></section><section id="mentors"><div className="wrap"><span className="eyebrow">Experience in the room</span><h2>Meet the<br/><span className="hl">mentors.</span></h2><div className="cards"><div className="card rv person-card"><img className="person-photo" src="/assets/people/victor-c.jpg" alt="Victor C." width="120" height="120"/><span className="k">Mentor</span><h3>Victor C.</h3><p className="person-title">Recruitment, HR &amp; Tech Enthusiast</p><p>Founder of mypathfinder and co-founder of fiesTA, with experience leading talent and HR at Hubilo, Whatfix and Pipemonk.</p><a className="text-link" href="https://in.linkedin.com/in/victorchoudhary" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><p className="note">More mentors and session details <span className="tba">TBA</span>.</p><a className="text-link" href="/mentors">Meet the mentors →</a></div><div className="card"><span className="k">Lineup in progress</span><h3>More voices TBA</h3><p>More mentors, topics and session details will appear as they are confirmed.</p><a className="text-link" href="/mentors">The full mentor page →</a></div></div></div></section><section id="logistics"><div className="wrap"><span className="eyebrow">Planning, in the open</span><h2>What is locked.<br /><span className="hl">What is not.</span></h2><div className="cards"><div className="card rv"><span className="k">When & where</span><h3>24 October · Bengaluru</h3><p>A full day, morning to evening. Exact venue, doors, closing time, accessibility and transport information <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">The room</span><h3>Ambitious founders + VCs</h3><p>Confirmed attendance, VC lineup and final capacity <span className="tba">TBA</span>.</p></div><div className="card rv"><span className="k">The stage</span><h3>Built for clear pitches</h3><p>A stage for startups to present their ideas. Production supplier, stage plan and technical check schedule <span className="tba">TBA</span>.</p></div></div></div></section>
<section id="schedule" className="panel-bg"><div className="wrap schedule-layout"><div className="schedule-intro"><span className="eyebrow">Who &amp; when</span><h2>One day.<br/><span className="hl">A whole field.</span></h2><p className="lede">24 October 2026 · Bengaluru.<br/>Morning to evening. A draft day flow, not a published timetable.</p><p className="note">Exact times, session titles, speakers and final running order <span className="tba">TBA</span>.</p></div><div id="timeline" className="schedule-entries">{[["01","Arrival & check-in","Registration and booth setup details TBA."],["02","SWC introduction","Meet the global competition. Format and presenter TBA."],["03","Pitch blocks + Q&A","Startup pitches and jury questions. Timings, shortlist and block order TBA."],["04","Community & mentor sessions","Quiz breaks and mentor-session details TBA. No session access or speaker slot is promised."],["05","Jury decision + top three","Top three USA pathway. Decision and announcement timing TBA."],["06","Connections & close","Networking and closing arrangements TBA."]].map(([n,title,description])=><article className="schedule-entry" key={n}><div className="schedule-time"><span className="tba">Time TBA</span><small>Draft block {n}</small></div><div><h3>{title}</h3><p>{description}</p><span className="schedule-speaker">Speaker / facilitator TBA</span></div></article>)}</div></div></section>



<section id="sponsors">
  <div className="wrap"><div className="split">
    <div className="rv">
      <span className="eyebrow">Sponsors &amp; booths</span>
      <h2>Put your product in front of <span className="hl">founders.</span></h2>
      <p className="lede">If your customers are startup founders - payments, fintech infrastructure, hiring, CRM and sales tools, production partners - this is your room.</p>
      <div className="cta-row" style={{"marginTop": "30px"}}><a className="btn btn-accent" href="/partners">Meet the partners</a><a className="btn btn-ghost" href="/interest/sponsor">Register sponsor interest</a><a className="btn btn-ghost" href="/interest/sponsor">Explore booths</a></div>
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
<div className="sponsor-slots">{['Title partner','Stable partner','Track partner','Community / in-kind'].map(name=><details className="sponsor-slot" key={name}><summary>{name}<span className="tba">price TBA</span></summary><p>Available slots, deliverables, placement and price <span className="tba">TBA</span>. No jury seat, investment rights or data access are included by default.</p><a className="text-link" href="/interest/sponsor">Discuss this partnership →</a></details>)}</div></div></section>

<section className="panel-bg" id="tickets">
  <div className="wrap">
    <span className="eyebrow">Tickets</span>
    <h2>Tickets. On the table.</h2>
    <TicketPreview />
    <p className="lede">Current SPL ticket structure. Sales opening and final inclusions are still being confirmed. Founders apply free. A valid application unlocks the ₹799 ticket with matching sign-in. Sign in to continue to a form.</p>
    <div className="tickets" id="apply">
      <div className="ticket rv"><span className="tag">Step 1 · Everyone</span><div className="price">FREE</div><span className="fine">Round 1 application</span><div className="perf"></div>
        <ul><li>Idea + video link</li><li>Pitch deck optional</li><li>Unlocks ₹799 ticket with the same Google account email</li><li>Shot at the live stage</li></ul>
        <a className="btn btn-ghost" href="/apply">Apply now</a></div>
      <div className="ticket feat rv"><span className="tag">Pitch applicants</span><div className="price"><small>₹</small>799</div><span className="fine">Locked until a valid pitch application + matching sign-in</span><div className="perf"></div>
        <ul><li>For founders with a valid pitch application</li><li>Full day: pitches, community, booths</li><li>Live voting and Q&amp;A</li><li>Networking with founders and VCs</li></ul>
        <a className="btn" href="/register">Register</a></div>
      <div className="ticket rv"><span className="tag">General · base ticket</span><div className="price"><small>₹</small>999</div><span className="fine">Referral discount rules <span className="tba">TBA</span></span><div className="perf"></div>
        <ul><li>Base price for attendees</li><li>Full day: pitches, community, booths</li><li>Live voting and Q&amp;A</li><li>Community quiz rules TBA</li></ul>
        <a className="btn btn-ghost" href="/register">Register</a></div>
      <div className="ticket rv showcase-card"><span className="tag">Selected founders · locked</span><div className="price"><small>₹</small>4,999</div><span className="fine">Showcase pass unlocks only after SPL selects your application. Purchase details <span className="tba">TBA</span>.</span><div className="perf"></div><ul><li>Only for founders selected by SPL</li><li>Pitch on stage after Round 2</li><li>Purchase details <span className="tba">TBA</span></li></ul><a className="btn btn-ghost" href="/apply">Apply free first</a></div>
    </div>
    <div className="cards pass-tracks"><div className="card"><span className="k">VC pass · Price TBA</span><h3>A different seat in the room</h3><p>Investor participation, networking booths and distinct ID cards. Access, booth allocation and inclusions TBA.</p><a className="text-link" href="/interest/vc">VC pass details →</a></div><div className="card"><span className="k">Sponsor pass · Price TBA</span><h3>Back the field</h3><p>A separate sponsor track and ID card. Packages, access and deliverables TBA.</p><a className="text-link" href="/interest/sponsor">Sponsor pass details →</a></div></div><p className="note">Selected startups: ₹4,999 showcase pass to pitch on stage. Tickets are non-refundable. GST <span className="tba">inclusive/exclusive TBC</span> · VC and sponsor passes <span className="tba">price TBA</span> · Sales open <span className="tba">date TBA</span></p>
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

<section id="hosts" className="panel-bg"><div className="wrap"><span className="eyebrow">People behind the league</span><h2>Your <span className="hl">hosts.</span></h2><div className="host-grid">{[
{ name:'Prahalad Singh Gaur', title:'Associate Software Developer, SourcingXPress', bio:'SPL co-organizer and FOSS contributor. Previously a Technology Apprentice at Morgan Stanley.', photo:'prahalad-gaur', profile:'https://www.linkedin.com/in/prahalad-singh-gaur-4a5455333' },
{ name:'Sanskar Kharya', title:'CSE Student, Alliance (Kalvium)', bio:'SPL co-organizer. Builds AI and backend tools in Python and Java. Founding member of Scientific Bharat.', photo:'sanskar-kharya', profile:'https://www.linkedin.com/in/sanskar-kharya-614301310' },
{ name:'Abhishek Das', title:'Co-founder & CTO, SourcingXPress', bio:'Startup World Cup ambassador and regional partner. Builds technology for people.', photo:'abhishek-das', profile:'https://www.linkedin.com/in/abhishekdas2512' },
{ name:'Sanjay Jha', title:'Production GenAI Architect', bio:'Builds RAG, agentic AI and MCP systems. AI speaker, community leader, hackathon judge and mentor.', photo:'sanjay-jha', profile:'https://in.linkedin.com/in/sanjay-jha-2a425719' }
].map(person=><div className="card rv person-card" key={person.name}>{person.photo?<img className="person-photo" src={`/assets/people/${person.photo}.jpg`} alt={person.name} width="120" height="120"/>:<div className="person-photo person-placeholder" aria-label="Photo to be announced">Photo TBA</div>}<span className="k">Host</span><h3>{person.name}</h3><p className="person-title">{person.title}</p><p>{person.bio}</p><a className="text-link" href={person.profile} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>)}</div></div></section>
<section className="panel-bg" id="faq">
  <div className="wrap">
    <span className="eyebrow">FAQ</span>
    <h2>Questions.</h2>
    <div className="faq">
      <details><summary>Is applying really free?</summary><p>Yes. Round 1 is free: your idea and a video link. A pitch deck is optional.</p></details>
      <details><summary>Do I need to apply to get a ticket?</summary><p>No. Anyone can register for a General ticket at ₹999. A valid pitch application unlocks the ₹799 applicant ticket when you sign in using the same application email.</p></details>
      <details><summary>What does it cost to pitch?</summary><p>If you're selected to pitch, the showcase pass to pitch on stage is ₹4,999. Payment timing and withdrawal terms <span className="tba">TBA</span></p></details>
      <details><summary>How long is a pitch?</summary><p>Final pitch and Q&amp;A timings TBA.</p></details>
      <details><summary>Who judges?</summary><p>Final jury names and judging process TBA. The top three startups go to the USA event.</p></details>
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
