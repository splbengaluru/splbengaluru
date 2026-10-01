import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Privacy | Startup League Bengaluru",
  description: "How Startup League Bengaluru handles registration, Google sign-in and site analytics data.",
};

export default function PrivacyPage() {
  return <>
    <SiteHeader />
    <main>
      <section className="policy-hero"><div className="wrap">
        <span className="eyebrow">Startup League Bengaluru</span>
        <h1>Privacy.</h1>
        <p>What happens to information you give us on this site.</p>
      </div></section>
      <section className="policy-body"><div className="wrap policy-sheet">
        <h2>What we collect</h2>
        <p>When you submit a pitch application, audience registration, VC interest or sponsor interest form, we collect the details you enter there, such as your name, email, WhatsApp number, company and answers. If you choose Google sign-in, we receive your verified Google account identity, including your email and name. You can submit the public forms without signing in, except that the ₹799 applicant ticket requires a matching Google account.</p>
        <p>We also use browser and session identifiers to count visits and see which pages are active. Those visits are anonymous unless you sign in; while signed in, your activity can be linked to your account in the SPL team's dashboard. We do not use the analytics to identify guests from the email they type in a form.</p>
        <h2>Why we use it</h2>
        <p>We use form details to run SPL Season 1, review applications, manage registrations, follow up about the event and check ticket eligibility. We use visit counts to understand how the site is used. We do not sell your information.</p>
        <h2>Contact</h2>
        <p>Questions about your information or a request to correct or remove it? Message the SPL team on WhatsApp at <a href="https://wa.me/919945958602">+91 99459 58602</a>.</p>
      </div></section>
    </main>
    <SiteFooter />
  </>;
}
