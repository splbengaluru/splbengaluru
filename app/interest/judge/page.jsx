import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Jury & Evaluation Bench | Startup League Bengaluru",
  description: "Express interest in serving on the SPL Season 1 evaluation jury. Review live pitches from 15 shortlisted Indian startups on 24 Oct 2026.",
  openGraph: {
    title: "SPL Season 1 · Jury & Evaluation Bench",
    description: "Join the venture evaluation bench for the Startup World Cup regional finale in Bengaluru.",
  },
};

export default function JudgePage() {
  return (
    <FormPage
      standalone
      type="vc"
      eyebrow="Jury & Venture Evaluation · 24 Oct 2026 · Bengaluru"
      title={<><span>Judge the </span><span>evidence.</span></>}
      sticker="Jury"
      sub="Evaluate 15 audited early-stage finalists on live traction, unit economics, and global defensibility. Help determine the top 3 startups representing India at the Silicon Valley Grand Finale."
      aside={
        <div className="ticket-mini">
          <span className="tag">Evaluation Committee Standards</span>
          <ul>
            <li>Active institutional GPs, venture partners, and exited unicorn operators</li>
            <li>Zero-commercial bias: jury appointments are strictly unpurchased and invitation-only</li>
            <li>Standardized 100-point rubric assessing team, market, traction, and defensibility</li>
            <li>Transparent conflict-of-interest disclosures for all participating ventures</li>
          </ul>
          <p className="fine">
            <a href="/#rubric">Explore the 100-point scoring rubric →</a> · <a href="/#format">Regional format →</a>
          </p>
          <p className="fine">
            To express interest, select <strong>"Express interest in judging"</strong> in the investor form and note your fund focus or domain expertise. Our selection committee reviews submissions on a rolling basis.
          </p>
        </div>
      }
    />
  );
}
