import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Venture Capital & Angel Investor Access · Startup League Bengaluru",
  description: "Access curated early-stage deal flow from 15 pre-screened Bengaluru startups pitching live on 24 October 2026.",
  openGraph: {
    title: "Venture Capital Access · SPL Season 1",
    description: "Curated early-stage deal flow from 15 pre-vetted Bengaluru startups. 24 October 2026.",
  },
};

export default function VcInterestPage() {
  return (
    <FormPage
      standalone
      type="vc"
      eyebrow="Venture Capital &amp; Angels · 24 Oct 2026"
      title={<><span>High-density </span><span>deal flow.</span></>}
      sticker="VCs"
      sub="Connect with 15 pre-vetted Bengaluru startups across tech and non-tech verticals: consumer brands, D2C, AI, B2B SaaS, deeptech, manufacturing, and hardware. Evaluate live pitches, observe stage diligence, and access direct founder introductions."
      aside={
        <div className="ticket-mini">
          <span className="tag">Investor Track · Season 1</span>
          <p className="fine">24 October 2026 · Bengaluru Stage · Full Day</p>
          <ul>
            <li>Pre-event startup briefing memo with key metrics and deck links</li>
            <li>Reserved seating for main stage pitch heats and live jury defense</li>
            <li>Dedicated networking blocks with shortlisted founding teams</li>
            <li>Opt-in introductions facilitated post-event</li>
          </ul>
          <p className="fine">
            Registering interest allows the SPL team to share investor passes, briefing materials, and schedule allocations in advance.
          </p>
        </div>
      }
    />
  );
}
