import FormPage from "@/components/FormPage";

export const metadata = {
  title: "VCs: see them first | Startup League Bengaluru",
  description: "SPL Season 1, Bengaluru, 24 Oct 2026. A curated shortlist of 16 startups, a private briefing pack and consent-based intros.",
  openGraph: { title: "VCs: see them first - SPL Season 1", description: "Curated deal flow from Bengaluru's newest founders. 24 Oct 2026." },
};

export default function VcInterestPage() {
  return (
    <FormPage
      standalone
      type="vc"
      eyebrow="For investors · 24 Oct 2026 · Bengaluru"
      title={<><span>See them</span><span>first.</span></>}
      sticker="VCs"
      sub="16 startups pitch live. You get a screened shortlist, a private briefing pack before the event, reserved seating and consent-based intros."
      aside={
        <div className="ticket-mini">
          <span className="tag">What you get</span>
          <ul><li>Curated shortlist, screened before it reaches you</li><li>Private briefing pack before the event</li><li>Reserved seating and a help desk</li><li>Intros only when both sides opt in</li></ul>
          <p className="fine">VC track pricing <span className="tba">TBA</span>. Serious opportunity, unserious hosts: the jokes are on us, never the founders.</p>
        </div>
      }
    />
  );
}
