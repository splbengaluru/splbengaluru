import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Get your ticket - Season 1 | Startup League Bengaluru",
  description: "Register for SPL Season 1 in Bengaluru, 24 Oct 2026. General ticket ₹999. Applicant ticket ₹799 after a verified pitch application.",
  openGraph: { title: "Get your ticket - SPL Season 1", description: "A full day of live pitches, quiz rounds and booths. General ticket ₹999." },
};

export default function RegisterPage() {
  return (
    <FormPage
      type="audience"
      eyebrow="Tickets · Season 1 · 24 Oct 2026"
      title={<><span>Get your</span><span>ticket.</span></>}
      sub="Learning about startups? Have an idea? Watch real pitches, build confidence and meet people who can help you think it through. Registration is separate from buying a ticket."
      aside={
        <div className="ticket-mini">
          <span className="tag">Audience pass · General ticket</span>
          <p className="fine">24 October 2026 · Bengaluru · Full day. Venue and doors TBA.</p>
          <div className="price"><small>₹</small>999</div>
          <span className="fine">₹799 applicant ticket unlocks after a valid pitch application and matching sign-in.</span>
          <ul><li>Full day: pitches, quiz, booths</li><li>Audience participation and Q&amp;A; final rules TBA</li><li>Networking and lunch / food time; catering and inclusions TBA</li></ul>
          <p className="fine">Test checkout is available after registration. Razorpay test mode uses simulated payments; no real money moves. Live sales <span className="tba">TBA</span>.</p>
        </div>
      }
    />
  );
}
