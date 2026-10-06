import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Terms and Conditions | Startup League Bengaluru",
  description: "Terms and conditions, ticketing policies, competition rules and travel terms for Startup League Bengaluru.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="policy-hero">
          <div className="wrap">
            <span className="eyebrow">Startup League Bengaluru</span>
            <h1>Terms and conditions.</h1>
            <p>Rules, ticket policies, competition guidelines and participant terms for SPL Season 1.</p>
          </div>
        </section>

        <section className="policy-body">
          <div className="wrap policy-sheet">
            <h2>Agreement to terms</h2>
            <p>
              By accessing this website, registering for attendee passes, submitting a pitch application, or participating as an investor, sponsor, judge or mentor, you agree to these terms and conditions. If you disagree with any part of these terms, you should not access the site or attend the event.
            </p>

            <h2>Event overview and regional role</h2>
            <p>
              Startup League Bengaluru (SPL) is an in-person startup summit held in Bengaluru on 24 October 2026. SPL serves as a regional partner for the Startup World Cup (SWC), organized by Pegasus Tech Ventures. SPL hosts the Bengaluru regional edition, where 15 selected startups pitch live and the top three teams advance to the Startup World Cup Grand Finale in Silicon Valley.
            </p>

            <h2>Details marked with an asterisk (*)</h2>
            <p>
              Across this site, items marked with an asterisk (*) are planned but not yet final. At the time of publishing, these are: the venue, door timings, the session running order, jury appointments, additional mentors, the expected room size, and 2027 season details. We confirm them on this site and in emails to registered pass holders as they are locked in. If a marked detail changes, the updated information on this site and the event emails is the authoritative version and takes precedence over earlier posts, screenshots or social media.
            </p>

            <h2>Pitch applications and stage selection</h2>
            <p>
              Round 1 online screening is open to Indian startups at zero cost. Submitting an application does not guarantee selection for the 15-startup live stage. An independent evaluation committee evaluates applications against published rubric criteria. Decisions of the selection committee and jury chair are final.
            </p>
            <p>
              Startups selected among the 15 stage finalists must confirm their participation and unlock the Showcase Pass (₹4,999) to lock in their dedicated live pitch slot, demo station, and inclusion in the VC briefing memo.
            </p>

            <h2>Ticketing and pass conditions</h2>
            <p>
              General Attendee passes (₹999) and discounted applicant passes (₹799) provide admission to the live stage pitches, interactive jury questions, demo floors, and networking areas. Discounted applicant passes require a verified pitch application submission. Passes are issued digitally and tied to your verified email or phone number.
            </p>

            <h2>Cancellation and transfer policy</h2>
            <p>
              All pass purchases and showcase fees are non-refundable and non-cancellable once payment completes. If you cannot attend, you may request a ticket transfer to another individual by contacting the organizing desk at least 48 hours prior to the event date. Transfers remain subject to team verification.
            </p>

            <h2>Grand Finale advancement and travel terms</h2>
            <p>
              The top three teams selected by the jury earn the official qualification to represent Bengaluru at the Startup World Cup Grand Finale in Silicon Valley to compete for the $1,000,000 USD investment prize. Event admission to the Grand Finale is provided under Startup World Cup published terms.
            </p>
            <p>
              Travel funding is not included in winning SPL. Pegasus Tech Ventures, SPL, and partner organizations do not cover airline tickets, hotel accommodation, meals, visa application fees, or local transit. Finalist teams may cover expenses directly or arrange backing through independent venture partners. SPL provides official regional winner recommendation letters for consular visa interviews; SPL does not guarantee visa approval, which remains under the exclusive discretion of government authorities.
            </p>

            <h2>Jury evaluations and independent investment</h2>
            <p>
              Independent venture capitalists, angels, and operators evaluate live pitches using a standardized 100-point rubric. Committee members recuse themselves from scoring startups in which they hold existing financial stakes or formal advisory roles.
            </p>
            <p>
              Participation in the pitch heats or inclusion in the deal-flow memo does not guarantee investment from attending funds. All term sheets, diligence inquiries, and investment discussions remain strictly private agreements negotiated directly between funds and founding teams.
            </p>

            <h2>Media, recording and intellectual property</h2>
            <p>
              Main stage presentations, showcase booths, and audience interactions are recorded through photo and video for editorial, recap, and promotional use. By attending, you permit SPL to include your likeness in official event documentation.
            </p>
            <p>
              Founders retain full ownership of their pitch decks, trade secrets, software platforms, and proprietary technology. Presentations delivered on the main stage are public disclosures; founding teams are responsible for protecting unpatented intellectual property prior to public presentation.
            </p>

            <h2>Code of conduct</h2>
            <p>
              All attendees, founders, speakers, and sponsors must maintain professional conduct. Harassment, disruption of live pitches, unauthorized solicitation, or non-compliance with venue safety protocols will result in immediate removal from the premises without refund.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted under applicable law, SPL, its host entities, organizers, sponsors, and venue partners are not liable for direct, indirect, incidental, or consequential damages resulting from attendance, speaker schedule adjustments, pitch results, or technical disruptions.
            </p>

            <h2>Governing law</h2>
            <p>
              These terms are governed by and construed under the laws of the Republic of India. Any disputes arising in connection with SPL Season 1 are subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
            </p>

            <h2>Contact information</h2>
            <p>
              For questions regarding these terms, pass confirmations, or transfer requests, contact the organizing team on WhatsApp at <a href="https://wa.me/919945958602">+91 99459 58602</a> or through the official help desk.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
