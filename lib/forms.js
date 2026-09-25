// Single source of truth for every SPL form: fields, labels, options and validation.
// Used by the client (BrandForm) and the server (/api/forms/[type]).

const PHONE = /^[+0-9 ()-]{8,20}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URLRE = /^https?:\/\/\S+\.\S+/i;

const name = { name: "full_name", label: "Your name", type: "text", required: true, max: 80, autoComplete: "name" };
const email = { name: "email", label: "Email", type: "email", required: true, max: 120, autoComplete: "email" };
const phone = { name: "phone", label: "WhatsApp number", type: "tel", required: true, max: 20, autoComplete: "tel", placeholder: "+91 98xxx xxxxx" };
const linkedin = { name: "linkedin_url", label: "LinkedIn", type: "url", max: 200, placeholder: "https://linkedin.com/in/..." };
const consent = { name: "consent", label: "You can contact me about SPL Season 1. My details stay with the SPL team.", type: "checkbox", required: true };

export const FORMS = {
  audience: {
    table: "audience_registrations",
    title: "Get your ticket",
    submitLabel: "Register",
    success: "You're registered. You can try the simulated Razorpay payment below; live ticket sales are still TBA.",
    fields: [
      name, email, phone,
      { name: "ticket_type", label: "Ticket", type: "radio", required: true, options: [
        { value: "general", label: "General · ₹999" },
        { value: "applied_not_selected", label: "Pitch applicant · ₹799 (application required)" },
      ] },
      { name: "referral_code", label: "Referral code", type: "text", max: 40, hint: "Discount validation TBA. Codes are saved, but do not reduce the ticket price yet." },
      { name: "attendee_type", label: "You are a", type: "select", required: true, options: [
        { value: "founder", label: "Founder / building something" },
        { value: "operator", label: "Working at a startup" },
        { value: "investor", label: "Investor / angel" },
        { value: "student", label: "Student" },
        { value: "curious", label: "Just here for the chaos" },
      ] },
      { name: "company", label: "Company / college", type: "text", max: 120 },
      linkedin,
      consent,
    ],
  },
  founder: {
    table: "founder_applications",
    title: "Apply to pitch",
    submitLabel: "Send application",
    success: "Application in. You can now unlock the ₹799 applicant ticket by signing in with Google using this application email. Round 2 format and selection details are TBA. We'll tell you where you stand either way.",
    fields: [
      name, email, phone,
      { name: "startup_name", label: "Startup name", type: "text", required: true, max: 120 },
      { name: "one_liner", label: "What are you building, in one line?", type: "text", required: true, max: 160 },
      { name: "stage", label: "Stage", type: "select", required: true, options: [
        { value: "idea", label: "Idea" },
        { value: "prototype", label: "Prototype / MVP" },
        { value: "early_revenue", label: "Early users or revenue" },
        { value: "growing", label: "Growing" },
      ] },
      { name: "sector", label: "Sector", type: "text", required: true, max: 80, placeholder: "fintech, SaaS, D2C, AI..." },
      { name: "city", label: "Based in", type: "text", required: true, max: 80, placeholder: "Bengaluru" },
      { name: "team_size", label: "Team size", type: "number", min: 1, max: 500 },
      { name: "video_url", label: "Pitch video link", type: "url", required: true, max: 300, hint: "YouTube, Loom or Drive. Unlisted is fine." },
      { name: "deck_url", label: "Pitch deck link", type: "url", max: 300, hint: "Optional." },
      { name: "website_url", label: "Website", type: "url", max: 200 },
      linkedin,
      consent,
    ],
  },
  vc: {
    table: "vc_interest",
    title: "VC interest",
    submitLabel: "Count me in",
    success: "Noted. We'll send the curated shortlist and briefing details before event day.",
    fields: [
      name, email, phone,
      { name: "firm", label: "Firm / fund", type: "text", required: true, max: 120 },
      { name: "role", label: "Role", type: "text", required: true, max: 80 },
      { name: "involvement", label: "How do you want in?", type: "checkboxes", required: true, options: [
        { value: "attend", label: "Attend and watch the pitches" },
        { value: "judge", label: "Judge on stage" },
        { value: "shortlist", label: "Get the shortlist before the event" },
        { value: "intros", label: "Consent-based intros after" },
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
    submitLabel: "Send interest",
    success: "Got it. We'll reach out with packages once they're final.",
    fields: [
      name, email, phone,
      { name: "company", label: "Company", type: "text", required: true, max: 120 },
      { name: "role", label: "Role", type: "text", required: true, max: 80 },
      { name: "website_url", label: "Website", type: "url", max: 200 },
      { name: "interest", label: "Interested in", type: "checkboxes", required: true, options: [
        { value: "booth", label: "Startup booth / demo space" },
        { value: "sponsorship", label: "Sponsorship" },
        { value: "stage", label: "Stage acknowledgement and signage" },
        { value: "custom", label: "Something custom" },
      ] },
      { name: "goal", label: "What do you want out of the day?", type: "textarea", max: 1000 },
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
