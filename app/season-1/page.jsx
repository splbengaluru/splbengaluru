import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Season 1 - 24 Oct 2026 | Startup League Bengaluru",
  description: "16 startups pitch live to VCs and a 200-strong audience in Bengaluru on 24 Oct 2026. Apply free.",
  openGraph: { title: "Season 1 - 24 Oct 2026 | Startup League Bengaluru", description: "16 startups pitch live to VCs and a 200-strong audience in Bengaluru on 24 Oct 2026. Apply free.", images: ["/og.png"] },
};

export default function SeasonOnePage() {
  return (
    <>
      <SiteHeader active="s1" />

<main>
<section className="hero">
  <div className="ghost-spl" aria-hidden="true">S1</div>
  <span className="cross" style={{"left": "47%", "top": "34px"}}></span><span className="cross" style={{"right": "3%", "bottom": "44%"}}></span><span className="sq" style={{"background": "var(--pink)", "right": "6%", "top": "250px"}}></span><span className="sq" style={{"background": "var(--orange)", "left": "3.4%", "top": "52%"}}></span><span className="sq" style={{"background": "var(--volt)", "left": "62%", "top": "120px"}}></span>
  <img className="burst-img" src="/assets/burst.svg" alt="" aria-hidden="true" />
  <div className="wrap">
    <span className="eyebrow">Season 1 - Bengaluru - 24 Oct 2026</span>
    <div className="title-wrap"><h1 className="hero-title long"><span>16 Founders.</span><span>One Stage.</span></h1>
    <div className="kn-sticker" lang="kn">ಬೆಂಗಳೂರು</div></div>
    <p className="hero-sub">Come watch 16 founders sweat.</p>
    <p className="lede">Up to 500 apply. 16 pitch live to a room of VCs and a 200-strong audience that gets to vote. Five VC judges pick the top 3.</p>
    <div className="cta-row">
      <a className="btn btn-accent" href="/apply">Apply free</a>
      <a className="btn btn-ghost" href="#tickets">Get tix</a>
    </div>
    <div className="stats">
      <div className="stat"><b>24 OCT</b><span>2026 - time <span className="tba">TBA</span></span></div>
      <div className="stat"><b>BLR</b><span>Venue <span className="tba">TBA</span></span></div>
      <div className="stat"><b data-days data-short>30</b><span>days to go</span></div>
      <div className="stat"><b>FREE</b><span>to apply</span></div>
    </div>
  </div>
  <div className="skyline-wrap">
    <div className="strip s1">REAL PITCHES. FLUFF NOT INVITED.</div>
    <picture className="skyline"><source media="(max-width:860px)" srcSet="/assets/skyline-1200.webp" /><img src="/assets/skyline-2400.webp" width="2400" height="506" alt="Engraved Bengaluru skyline: temple gopuram, High Court, Mayo Hall clock tower, Vidhana Soudha, Bangalore Palace, UB City towers and the Namma Metro" decoding="async" /></picture>
  </div>
</section>
<div className="ticker" aria-hidden="true"><div>5 MIN PITCH + Q&amp;A<i>/</i>COME WATCH 16 FOUNDERS SWEAT<i>/</i>5 VC JUDGES<i>/</i>TOP 3 WIN<i>/</i>5 MIN PITCH + Q&amp;A<i>/</i>COME WATCH 16 FOUNDERS SWEAT<i>/</i>5 VC JUDGES<i>/</i>TOP 3 WIN<i>/</i></div></div>

<section id="format">
  <div className="wrap">
    <span className="eyebrow">How it works</span>
    <h2>Apply. Get picked. <span className="hl">Pitch the room.</span></h2>
    <p className="lede">Four rounds from application to trophy. Every stage has a clear exit, so you always know where you stand.</p>
    <div className="standings rv">
      <div className="row head"><span>Round</span><span>Stage</span><span className="hide-m">What happens</span><span style={{"textAlign": "right"}}>Field</span></div>
      <div className="row"><span className="pos">01</span><h3>Application</h3><p>Free. Submit your idea and a video link, pitch deck optional. Screened against a published rubric <span className="tba">rubric TBA</span>. 20 advance.</p><span className="num">500</span></div>
      <div className="row"><span className="pos">02</span><h3>Round 2</h3><p>Format <span className="tba">TBA</span>. 15 startups selected. Selection unlocks the ₹4,999 showcase pass.</p><span className="num">20</span></div>
      <div className="row"><span className="pos">03</span><h3>Live pitch day</h3><p>15 selected startups plus 1 audience quiz winner. 5-minute pitch, then Q&amp;A. All 16 judged on stage.</p><span className="num">16</span></div>
      <div className="row lead"><span className="pos">04</span><h3><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />The result</h3><p>Top 3 chosen by 5 judges, all top-level VCs from the room.</p><span className="num">3</span></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="quiz">
  <div className="wrap split">
    <div className="rv">
      <span className="eyebrow">The second chance</span>
      <h2>Didn't get picked? Win your way on stage.</h2>
    </div>
    <div className="rv">
      <p className="lede" style={{"marginTop": "34px"}}>Between pitch blocks - roughly every 5 pitches - the audience plays a live quiz round. The winner of the 3 quiz rounds pitches on stage to the VCs. Same stage the selected founders pay ₹4,999 for.</p>
      <p className="note">Eligibility and rules for the audience pitch slot <span className="tba">TBA</span></p>
    </div>
  </div>
</section>

<section id="who">
  <div className="wrap">
    <span className="eyebrow">Who it's for</span>
    <h2>Pick your side of the room.</h2>
    <div className="cards">
      <div className="card rv"><span className="k">Founders</span><h3>Pitch or scout</h3><p>Apply to pitch. Even if you're not on stage, your application unlocks a founder ticket to watch, meet investors and network.</p></div>
      <div className="card rv" id="vcs"><span className="k">VCs</span><h3>See them first</h3><p>A curated shortlist, a private briefing pack before the event, reserved seating, refreshments and consent-based intros after. VC track pricing <span className="tba">TBA</span>.</p></div>
      <div className="card rv"><span className="k">Audience</span><h3>Vote. Ask. Play.</h3><p>Live voting from your phone, moderated Q&amp;A, quiz rounds, startup booths and structured networking.</p></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="flow">
  <div className="wrap">
    <span className="eyebrow">The day</span>
    <h2>Run of show.</h2>
    <p className="lede">One full day, morning to evening. Draft running order. Exact times <span className="tba">TBA</span></p>
    <div className="standings rv">
      <div className="row"><span className="pos">01</span><h3>Doors &amp; booths</h3><p>Check-in, startup demos, sponsor booths and networking.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">02</span><h3>Cold open</h3><p>The hosts explain themselves. And how voting works.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">03</span><h3>Pitch blocks</h3><p>Fast pitches, Q&amp;A and audience input.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">04</span><h3>Quiz breaks</h3><p>Live quiz rounds between blocks. One winner earns a pitch slot.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">05</span><h3>The decision</h3><p>Judges deliberate, votes close transparently.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">06</span><h3>Results</h3><p>Top 3 announced. Investor interest captured.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
      <div className="row"><span className="pos">07</span><h3>Networking close</h3><p>Intros, booths and photos.</p><span className="num" style={{"fontSize": "16px"}}><span className="tba">time</span></span></div>
    </div>
  </div>
</section>

<section id="prizes">
  <div className="wrap">
    <span className="eyebrow">What's on the line</span>
    <h2>Prizes.</h2>
    <div className="cards">
      <div className="card rv"><span className="k">Winners · top 3</span><h3><img className="tro-i" src="/assets/trophy.png?v=2" alt="" width="310" height="287" />Winner prize</h3><p><span className="tba">TBA</span></p></div>
      <div className="card rv"><span className="k">All 16 finalists</span><h3>Finalist benefits</h3><p><span className="tba">TBA</span></p></div>
      <div className="card rv"><span className="k">Access</span><h3>VC intros &amp; publicity</h3><p>Introductions after the event, only with consent from both sides. Details <span className="tba">TBA</span></p></div>
    </div>
  </div>
</section>

<section className="panel-bg" id="tickets">
  <div className="wrap">
    <span className="eyebrow">Tickets</span>
    <h2>Apply first. Then grab your seat.</h2>
    <p className="lede">Founders apply free. A valid application unlocks the ₹799 ticket with matching Google sign-in. All forms use Google sign-in for accurate name and email.</p>
    <div className="tickets" id="apply">
      <div className="ticket rv"><span className="tag">Step 1 · Everyone</span><div className="price">FREE</div><span className="fine">Round 1 application</span><div className="perf"></div>
        <ul><li>Idea + video link</li><li>Pitch deck optional</li><li>Unlocks ₹799 ticket with the same Google account email</li><li>Shot at the live stage</li></ul>
        <a className="btn btn-ghost" href="/apply">Apply now</a></div>
      <div className="ticket feat rv"><span className="tag">Pitch applicants</span><div className="price"><small>₹</small>799</div><span className="fine">Locked until a valid pitch application + matching Google sign-in</span><div className="perf"></div>
        <ul><li>For founders with a valid pitch application</li><li>Full day: pitches, quiz, booths</li><li>Live voting and Q&amp;A</li><li>Networking with founders and VCs</li></ul>
        <a className="btn" href="/register">Register</a></div>
      <div className="ticket rv"><span className="tag">General · base ticket</span><div className="price"><small>₹</small>999</div><span className="fine">Referral discount rules <span className="tba">TBA</span></span><div className="perf"></div>
        <ul><li>Base price for attendees</li><li>Full day: pitches, quiz, booths</li><li>Live voting and Q&amp;A</li><li>Play the quiz for a pitch slot</li></ul>
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
      <div className="cta-row" style={{"marginTop": "24px"}}><a className="btn btn-accent" href="https://wa.me/919945958602?text=Hi%2C+I%27d+like+to+enquire+about+an+SPL+Bengaluru+booth." target="_blank" rel="noopener noreferrer">Enquire about a booth</a></div>
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
      <details><summary>What does it cost to pitch?</summary><p>If you're one of the 15 selected startups, the showcase pass to pitch on stage is ₹4,999. Payment timing and withdrawal terms <span className="tba">TBA</span></p></details>
      <details><summary>How long is a pitch?</summary><p>5 minutes, followed by Q&amp;A.</p></details>
      <details><summary>Who judges?</summary><p>5 judges, all top-level VCs from the room. They pick the top 3.</p></details>
      <details><summary>Can someone from the audience pitch?</summary><p>Yes. The audience plays quiz rounds between pitch blocks, and the winner of the 3 rounds pitches on stage to the VCs. Rules <span className="tba">TBA</span></p></details>
      <details><summary>Where and when is it?</summary><p>24 October 2026 in Bengaluru. Venue and time <span className="tba">TBA</span></p></details>
      <details><summary>Can I get a refund?</summary><p>Tickets are non-refundable and non-cancellable.</p></details>
      <details><summary>Will I be filmed?</summary><p>By attending, you consent that you might be photographed or filmed and shown. You can always say no to being interviewed or captured when a photographer, volunteer or host asks. Full consent policy <span className="tba">TBA</span></p></details>
    </div>
  </div>
</section>

<section className="bigcta has-sky"><div className="ghost-spl" aria-hidden="true">SPL</div>
  <div className="wrap">
    <span className="eyebrow">24 Oct 2026 · Bengaluru</span>
    <h2>Pitch or<br />go home.</h2>
    <div className="cta-row"><a className="btn btn-accent" href="/apply">Apply free →</a><a className="btn btn-ghost" href="#tickets">See tickets</a></div>
  </div>
<img className="sky-band" src="/assets/skyline-1200.webp" alt="" aria-hidden="true" loading="lazy" /></section>
</main>

      <SiteFooter />
    </>
  );
}
