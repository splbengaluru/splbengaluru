import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Get Your Attendee Pass · Startup League Bengaluru | Season 1",
  description: "Register for SPL Season 1 in Bengaluru on 24 October 2026. Watch 15 live pitches, deconstruct jury diligence, and network with early-stage founders and VCs.",
  openGraph: {
    title: "Get Your Attendee Pass · SPL Season 1",
    description: "A full day of live venture pitches, stage diligence, and ecosystem networking in Bengaluru.",
  },
};

export default function RegisterPage() {
  return (
    <FormPage
      type="audience"
      eyebrow="Attendee Access · 24 October 2026 · Bengaluru"
      title={<><span>Get your </span><span>ticket.</span></>}
      sub="Experience 15 live pitches, unfiltered jury questioning, and high-density networking. Connect with active founders, venture investors, and builders across Bengaluru."
      aside={
        <div className="ticket-mini">
          <span className="tag">Attendee Pass · Full-Day Summit</span>
          <p className="fine">24 October 2026 · Bengaluru Stage · Full Day</p>
          <div className="price"><small>₹</small>999</div>
          <span className="fine">₹799 rate unlocks automatically with a verified pitch application.</span>
          <ul>
            <li>Full-day access to all 15 competitive startup pitches</li>
            <li>Live jury defense, diligence reviews, and winner announcement</li>
            <li>Startup demo showcase, ecosystem booths, and networking breaks</li>
            <li>Interactive audience discussions, founder Q&amp;A, and lunch sessions</li>
          </ul>
          <p className="fine">
            Pitch applicants unlock the ₹799 rate when signed in with their application Google account. In-person venue address and schedule details are sent directly to registered pass holders.
          </p>
          <div className="ticket-callout">
            <p>
              <strong>Attending with your co-founder or engineering team?</strong> For team bundles (3+ passes) or campus delegations, message our ticketing desk on <a href="/go/whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp (+91 99459 58602)</a>.
            </p>
          </div>
        </div>
      }
    />
  );
}
