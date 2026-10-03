import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Apply to Pitch · Startup League Bengaluru | Season 1",
  description: "Submit your startup free. 15 teams pitch live on 24 October 2026 in Bengaluru; top three advance to the Startup World Cup Grand Finale in Silicon Valley.",
  openGraph: {
    title: "Apply to Pitch · Startup League Bengaluru Season 1",
    description: "Free application for Bengaluru founders. Top three teams fly to Silicon Valley to compete for the $1M investment prize.",
  },
};

export default function ApplyPage() {
  return (
    <FormPage
      type="founder"
      eyebrow="Round 1 · Open Application"
      title={<><span>Apply to </span><span>pitch.</span></>}
      sub="Round 1 is open to every founder across Bengaluru—both tech and non-tech startups. Whether you are building an AI platform, a consumer D2C brand, hardware, food & beverage, or manufacturing, submit what you are building, why it matters, and share a brief pitch video link. A pitch deck is optional."
      aside={
        <div className="ticket-mini">
          <span className="tag">Founder Track · ₹0 Application · Tech &amp; Non-Tech</span>
          <div className="price">₹0</div>
          <p className="fine">24 October 2026 · Bengaluru Stage · Season 1</p>
          <ol className="steps">
            <li>
              <b>Round 1 · Apply</b>
              Submit your idea, progress, and pitch video. Applications are evaluated against the standardized 100-point venture rubric.{" "}
              <a href="/#rubric">Inspect the scorecard →</a>
            </li>
            <li>
              <b>Round 2 · Shortlist</b>
              15 standout teams are selected to pitch live on stage at SPL Season 1.
            </li>
            <li>
              <b>Pitch Day · 24 Oct</b>
              Present live to the independent jury panel, active institutional VCs, and 200+ ecosystem builders.
            </li>
            <li>
              <b>Global Grand Finale</b>
              The top three startups advance to the Startup World Cup in San Francisco to compete for the $1,000,000 investment prize. The top 10 qualify for 2027.
            </li>
          </ol>
          <p className="fine">
            Submitting a pitch application immediately unlocks the discounted ₹799 attendee pass for your Google account. The 15 selected finalists unlock the ₹4,999 stage showcase pass upon notification.
          </p>
          <div className="ticket-callout">
            <p>
              <strong>Don't have a pitch video ready?</strong> Don't let that stop you from applying. Submit your company details now, or chat directly with our founder desk on <a href="/go/whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp (+91 99459 58602)</a>.
            </p>
          </div>
        </div>
      }
    />
  );
}
