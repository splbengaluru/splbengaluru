import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Apply to pitch - Season 1 | Startup League Bengaluru",
  description: "Apply free to pitch at SPL Season 1 in Bengaluru. Idea plus a video link, pitch deck optional.",
  openGraph: { title: "Apply to pitch - SPL Season 1", description: "Free to apply. 16 founders pitch live to VCs on 24 Oct 2026." },
};

export default function ApplyPage() {
  return (
    <FormPage
      type="founder"
      eyebrow="Round 1 · Free to apply"
      title={<><span>Apply to</span><span>pitch.</span></>}
      sub="Your idea and a video link. Pitch deck optional. Up to 500 apply, 20 advance, 16 pitch live."
      aside={
        <div className="ticket-mini">
          <span className="tag">How it works</span>
          <ol className="steps"><li><b>Apply</b> Screened against a published rubric <span className="tba">rubric TBA</span></li><li><b>Round 2</b> Format <span className="tba">TBA</span>. 15 selected.</li><li><b>Pitch day</b> 6-minute pitch, then 4-minute judge Q&amp;A.</li><li><b>Result</b> 4-6 qualified judges select one winner.</li></ol>
          <p className="fine">A valid application unlocks the ₹799 audience ticket after Google sign-in with the same email. Selected founders can unlock the ₹4,999 showcase pass after selection. Round 2 details <span className="tba">TBA</span>.</p>
        </div>
      }
    />
  );
}
