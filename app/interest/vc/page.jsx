import FormPage from "@/components/FormPage";

export const metadata = {
  title: "VCs: see them first | Startup League Bengaluru",
  description: "SPL Season 1, Bengaluru, 24 Oct 2026. Meet Bengaluru founders and register for investor participation. Details and pricing TBA.",
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
      sub="Watch the field. Pick the team you want to back. Register interest in meeting the regional founders; investment is a separate decision, never an event obligation."
      aside={
        <div className="ticket-mini">
          <span className="tag">Investor track · Price TBA</span>
          <p className="fine">24 October 2026 · Bengaluru · Full day. Registering interest does not reserve a jury seat.</p>
          <ul><li>Screened startup shortlist; size and delivery TBA</li><li>Investor briefing format and timing TBA</li><li>Investor participation and seating details TBA</li><li>Intros only when both sides opt in</li></ul>
          <p className="fine">VC track pricing <span className="tba">TBA</span>. Serious opportunity, unserious hosts: the jokes are on us, never the founders.</p>
        </div>
      }
    />
  );
}
