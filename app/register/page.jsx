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
      sub="A full day of live pitches, quiz rounds and booths. You vote, you ask questions, and one of you wins a pitch slot."
      aside={
        <div className="ticket-mini">
          <span className="tag">General · base ticket</span>
          <div className="price"><small>₹</small>999</div>
          <span className="fine">₹799 applicant ticket unlocks after a valid pitch application and matching Google sign-in.</span>
          <ul><li>Full day: pitches, quiz, booths</li><li>Live voting and Q&amp;A</li><li>Play the quiz for a pitch slot</li></ul>
          <p className="fine">No payment on this page. We'll send the payment link once sales open <span className="tba">date TBA</span>. Tickets are non-refundable.</p>
        </div>
      }
    />
  );
}
