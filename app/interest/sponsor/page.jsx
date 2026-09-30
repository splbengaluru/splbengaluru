import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Sponsors & booths | Startup League Bengaluru",
  description: "Put your product in front of Bengaluru founders at SPL Season 1, 24 Oct 2026. Booths, sponsorship and stage presence.",
  openGraph: { title: "Sponsor SPL Season 1", description: "Booths, sponsorship and stage presence in a room full of founders. 24 Oct 2026, Bengaluru." },
};

export default function SponsorInterestPage() {
  return (
    <FormPage
      standalone
      type="sponsor"
      eyebrow="Sponsors & booths · 24 Oct 2026 · Bengaluru"
      title={<><span>Get in front</span><span>of founders.</span></>}
      sticker="Booths"
      sub="If your customers are startup founders - payments, fintech infrastructure, hiring, CRM and sales tools, production partners - this is your room."
      aside={
        <div className="ticket-mini">
          <span className="tag">Builders, booths &amp; sponsors · Price TBA</span>
          <p className="fine">24 October 2026 · Bengaluru · Full day. Tell us whether you want demo space, sponsorship or a custom partnership.</p>
          <ul><li>Discuss reach before, during and after the event</li><li>Request startup booth or demo space</li><li>Stage acknowledgement, signage and tickets: package TBA</li><li>Opt-in leads only, never scraped</li><li>Post-event reporting: scope TBA</li></ul>
          <p className="fine">Packages, available space and pricing <span className="tba">TBA</span>. Interest is not a confirmed booking. No jury seat, investment rights or attendee data access are included by default.</p>
        </div>
      }
    />
  );
}
