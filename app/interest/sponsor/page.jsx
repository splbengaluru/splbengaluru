import FormPage from "@/components/FormPage";

export const metadata = {
  title: "Sponsors & Showcase Booths | Startup League Bengaluru",
  description: "Put your developer tools, fintech infrastructure, or enterprise services directly in front of 200+ founders and venture investors at SPL Season 1 on 24 Oct 2026.",
  openGraph: {
    title: "Sponsor SPL Season 1 · Bengaluru",
    description: "Showcase booths, stage keynotes, and founder partnerships. 24 Oct 2026, Bengaluru.",
  },
};

export default function SponsorInterestPage() {
  return (
    <FormPage
      standalone
      type="sponsor"
      eyebrow="Partnerships & Showcase Booths · 24 Oct 2026 · Bengaluru"
      title={<><span>Reach high-growth </span><span>founders directly.</span></>}
      sticker="Showcase"
      sub="If your customers are venture-backed founders and scaling engineering teams—cloud, fintech, banking, devtools, hiring, and legal infrastructure—SPL puts you in front of qualified buyers."
      aside={
        <div className="ticket-mini">
          <span className="tag">Partner &amp; Showcase Program</span>
          <p className="fine">24 October 2026 · Full-day founder summit · Bengaluru</p>
          <ul>
            <li>Dedicated demo booth in the central founder networking floor</li>
            <li>Direct visibility with 200+ venture-backed founders and active investors</li>
            <li>Main stage keynote, panel integration, and brand placement options</li>
            <li>Opt-in founder introductions and qualified lead engagement</li>
            <li>Custom tracks tailored to your enterprise or developer ecosystem</li>
          </ul>
          <p className="fine">Showcase space is curated to protect attendee signal. Submitting interest initiates an exploratory discussion with our partnerships desk. No jury seats, investment rights, or raw attendee data scraping are offered under any sponsorship tier.</p>
        </div>
      }
    />
  );
}
