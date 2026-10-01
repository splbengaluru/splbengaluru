import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Apply to pitch - Season 1 | Startup League Bengaluru",
  description: "Apply free to pitch at SPL Season 1 in Bengaluru. Idea plus a video link, pitch deck optional.",
  openGraph: { title: "Apply to pitch - SPL Season 1", description: "Free to apply to the Bengaluru regional. Top three startups go to the USA event." },
};

export default function ApplyPage() {
  return (
    <FormPage
      type="founder"
      eyebrow="Round 1 · Free to apply"
      title={<><span>Apply to</span><span>pitch.</span></>}
      sub="The final SPL application route for the Bengaluru regional. Tell us what you are building and share a pitch video. A pitch deck is optional."
      aside={
        <div className="ticket-mini">
          <span className="tag">Founder track · Free to apply</span>
          <div className="price">₹0</div>
          <p className="fine">24 October 2026 · Bengaluru · Full day. Venue and application deadline TBA.</p>
          <ol className="steps"><li><b>Apply</b> SPL screens applications. <a href="/#rubric">Read the judging direction →</a></li><li><b>Round 2</b> Planned shortlist: 15 startups. Selection dates and screening details <span className="tba">TBA</span>.</li><li><b>Pitch day</b> Present to the jury and a VC audience. Final timings TBA.</li><li><b>Result</b> Top three startups go to the USA event. The top 10 are automatically eligible for next year's Startup World Cup (2027). Travel and participation arrangements TBA.</li></ol>
          <p className="fine">A valid application unlocks the ₹799 audience ticket after sign-in with the same email. Selected founders can unlock the ₹4,999 showcase pass after selection. Round 2 details <span className="tba">TBA</span>.</p>
        </div>
      }
    />
  );
}
