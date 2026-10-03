// Single source of truth for every SPL form: fields, labels, options and validation.
// Used by the client (BrandForm) and the server (/api/forms/[type]).

const PHONE = /^[+0-9 ()-]{8,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URLRE = /^https?:\/\/\S+\.\S+/i;

const name = { name: "full_name", label: "Your name", type: "text", required: true, max: 80, autoComplete: "off", placeholder: "Enter your name" };
const email = { name: "email", label: "Email", type: "email", required: true, max: 120, autoComplete: "email" };
const phone = { name: "phone", label: "WhatsApp number", type: "tel", required: true, max: 20, autoComplete: "tel", placeholder: "+91 98xxx xxxxx" };
const linkedin = { name: "linkedin_url", label: "LinkedIn", type: "url", max: 200, placeholder: "https://linkedin.com/in/..." };
const consent = { name: "consent", label: "You can contact me about SPL Season 1. My details stay with the SPL team.", type: "checkbox", required: true };

export const FORMS = {
  audience: {
    table: "audience_registrations",
    title: "Get your ticket",
    submitLabel: "Confirm Registration & Reserve Pass →",
    success: "You're registered for SPL Season 1. Simulated test checkout is available below; live event logistics and venue updates will be sent directly to your registered email.",
    fields: [
      name, email, phone,
      { name: "ticket_type", label: "Ticket", type: "radio", required: true, options: [
        { value: "general", label: "General Attendee · ₹999" },
        { value: "applied_not_selected", label: "Pitch applicant · ₹799 (requires pitch application)" },
      ] },
      { name: "referral_code", label: "Referral code", type: "text", max: 40, hint: "Partner referral codes are saved with your registration." },
      { name: "attendee_type", label: "You are a", type: "select", required: true, options: [
        { value: "founder", label: "Founder / building something" },
        { value: "operator", label: "Working at a startup / tech company" },
        { value: "investor", label: "Investor / angel" },
        { value: "student", label: "Student / aspiring founder" },
        { value: "curious", label: "Builder / tech enthusiast" },
      ] },
      { name: "company", label: "Company / college", type: "text", max: 120 },
      linkedin,
      consent,
    ],
  },
  founder: {
    table: "founder_applications",
    title: "Apply to pitch",
    submitLabel: "Submit Free Application (₹0) →",
    success: "Your application is submitted. You can now unlock the ₹799 applicant attendee rate using this Google account. The committee will evaluate your pitch against the 100-point venture rubric and notify you on shortlist status.",
    fields: [
      name, email, phone,
      { name: "startup_name", label: "Startup name", type: "text", required: true, max: 120 },
      { name: "one_liner", label: "What are you building, in one line?", type: "text", required: true, max: 160 },
      { name: "stage", label: "Stage", type: "select", required: true, options: [
        { value: "idea", label: "Idea / Validation" },
        { value: "prototype", label: "Prototype / MVP" },
        { value: "early_revenue", label: "Early users / Revenue" },
        { value: "growing", label: "Scaling / Post-seed" },
      ] },
      { name: "sector", label: "Sector", type: "text", required: true, max: 80, placeholder: "Consumer brand, D2C, AI, SaaS, manufacturing, hardware, fintech..." },
      { name: "city", label: "Based in", type: "text", required: true, max: 80, placeholder: "Bengaluru" },
      { name: "team_size", label: "Team size", type: "number", min: 1, max: 500 },
      { name: "video_url", label: "Pitch video link", type: "url", required: true, max: 300, hint: "YouTube, Loom or Drive. Unlisted is fine. Haven't recorded yet? Paste a placeholder link and share the video later on WhatsApp." },
      { name: "deck_url", label: "Pitch deck link", type: "url", max: 300, hint: "Optional." },
      { name: "website_url", label: "Website", type: "url", max: 200 },
      linkedin,
      consent,
    ],
  },
  vc: {
    table: "vc_interest",
    title: "VC interest",
    submitLabel: "Request Curated Deal-Flow Memo →",
    success: "Interest recorded. The SPL organizing team will follow up with the venture briefing memo, jury track information, and summit passes.",
    fields: [
      name, email, phone,
      { name: "firm", label: "Firm / fund", type: "text", required: true, max: 120 },
      { name: "role", label: "Role", type: "text", required: true, max: 80 },
      { name: "involvement", label: "How do you want to participate?", type: "checkboxes", required: true, options: [
        { value: "attend", label: "Attend summit and observe live pitches" },
        { value: "judge", label: "Express interest in the independent jury panel" },
        { value: "shortlist", label: "Receive pre-event startup briefing memo" },
        { value: "intros", label: "Opt-in founder introductions post-event" },
      ] },
      { name: "focus", label: "Sectors and stages you back", type: "text", max: 200 },
      { name: "check_size", label: "Typical check size", type: "text", max: 60, hint: "Optional." },
      linkedin,
      { name: "note", label: "Anything else", type: "textarea", max: 1000 },
      consent,
    ],
  },
  sponsor: {
    table: "sponsor_interest",
    title: "Sponsor & booth interest",
    submitLabel: "Request Founder Showcase Deck →",
    success: "Thank you for your interest. The SPL team will follow up with showcase booth allocations and partnership specifications.",
    fields: [
      name, email, phone,
      { name: "company", label: "Company", type: "text", required: true, max: 120 },
      { name: "role", label: "Role", type: "text", required: true, max: 80 },
      { name: "website_url", label: "Website", type: "url", max: 200 },
      { name: "interest", label: "Interested in", type: "checkboxes", required: true, options: [
        { value: "booth", label: "Startup booth / demo space" },
        { value: "sponsorship", label: "Headline or track sponsorship" },
        { value: "stage", label: "Main stage integration & branding" },
        { value: "custom", label: "Custom partnership" },
      ] },
      { name: "goal", label: "What do you want out of the summit?", type: "textarea", max: 1000 },
      consent,
    ],
  },
};

// Validate a submission. Returns { data } or { errors: { field: message } }.
export function validate(type, input) {
  const form = FORMS[type];
  if (!form) return { errors: { _form: "Unknown form" } };
  const data = {}, errors = {};
  for (const f of form.fields) {
    let v = input?.[f.name];
    if (f.type === "checkbox") {
      v = v === true || v === "on" || v === "true";
      if (f.required && !v) errors[f.name] = "Tick this to continue";
      data[f.name] = v; continue;
    }
    if (f.type === "checkboxes") {
      v = (Array.isArray(v) ? v : v ? [v] : []).map(String).filter((x) => f.options.some((o) => o.value === x));
      if (f.required && !v.length) errors[f.name] = "Pick at least one";
      data[f.name] = v; continue;
    }
    v = typeof v === "string" ? v.trim() : v == null ? "" : String(v).trim();
    if (!v) { if (f.required) errors[f.name] = "Required"; data[f.name] = null; continue; }
    if (f.max && f.type !== "number" && v.length > f.max) errors[f.name] = `Keep it under ${f.max} characters`;
    if (f.type === "email" && !EMAIL.test(v)) errors[f.name] = "That email looks off";
    if (f.type === "tel" && !PHONE.test(v)) errors[f.name] = "That number looks off";
    if (f.type === "url" && !URLRE.test(v)) errors[f.name] = "Paste a full link starting with https://";
    if ((f.type === "select" || f.type === "radio") && !f.options.some((o) => o.value === v)) errors[f.name] = "Pick an option";
    if (f.type === "number") { const n = Number(v); if (!Number.isInteger(n) || n < (f.min ?? 0) || n > (f.max ?? 1e9)) errors[f.name] = "Enter a number"; else v = n; }
    data[f.name] = v;
  }
  return Object.keys(errors).length ? { errors } : { data };
}
