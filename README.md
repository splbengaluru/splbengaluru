# Startup League Bengaluru (SPL) - website

Next.js App Router site for SPL.BLR. Vercel deploys `main` to https://spl-bengaluru.vercel.app.

## Run

```bash
npm ci
npm run dev
npm run build
```

## Supabase setup (one-time, until then the forms and dashboard remain disconnected)

1. Create a **Free** project at https://supabase.com/dashboard (Mumbai region if available). In SQL Editor, run all of [`supabase/schema.sql`](supabase/schema.sql). Tables, registration sequence, admin allowlist and traffic tracking are created with RLS enabled. Do not add public read policies.
2. Authentication > Users > Add user > Create new user: add the chosen admin email with a strong password and mark email confirmed. The account password stays with its owner. In SQL Editor, run `insert into public.admin_users(id) select id from auth.users where email = 'YOUR_ADMIN_EMAIL';` replacing the placeholder with the chosen admin email. Check that it inserted one row. This explicit allowlist prevents any ordinary Supabase Auth user from reading data.
3. From Project Settings > API Keys / Data API, obtain the Project URL and new `sb_publishable_...` and `sb_secret_...` keys. Vercel project `spl-bengaluru` > Settings > Environment Variables: set `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY` for Production; redeploy the latest production commit. Preview should use a separate Supabase project if real registration data must stay isolated. The secret key must be stored as a Sensitive server-side variable. Legacy `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are also accepted if the project uses JWT keys. New-format keys are sent via `apikey` only, since they are not JWTs. Never send it over chat, prefix it with `NEXT_PUBLIC_`, or commit it. To run locally, put these in an untracked `.env.local` file.

**Validation after setup:** `/admin` accepts only the approved email/password; other authenticated users are blocked. Submit a test of each of the four forms, check each corresponding admin tab and SQL table, then delete test records if needed. Check active and daily visitor metrics after opening a public page. Until actual Supabase keys and a project are configured, `/admin` shows a not-connected message and forms return 503. No registrations are stored yet.

## Backend

| Page | Data |
| --- | --- |
| `/register` | `audience_registrations`: audience registration and atomic `registration_number` sequence. `#N of 200` for registrations 1-200 (beyond 200, only `#N` since a waitlist/cap rule has not been decided). This is a reference only, not a paid ticket. Payment remains pending until a payment integration confirms it. |
| `/apply` | `founder_applications` |
| `/interest/vc` | `vc_interest` |
| `/interest/sponsor` | `sponsor_interest` |
| `/admin` | Email/password Supabase Auth plus server-side `admin_users` allowlist. Anonymous visitor counts, active pages, last 30 days, and most recent 200 form entries per type. |

Form validation: `lib/forms.js`, API `POST /api/forms/[type]`; server stores via service-role key. Honeypot and existing Upstash limiter (10 submissions/IP/10 min) apply when Upstash is configured. Unique email per form prevents duplicate registrations.

Analytics use pseudonymous random browser and tab IDs (localStorage/sessionStorage), not people's names, IP addresses or precise identities. Public page views and once-per-minute heartbeats go through server-only `POST /api/analytics/visit`, stored as `page_views` and `visitor_sessions`. Online means a visible browser with a heartbeat in the last 2 minutes; the dashboard polls every 30 seconds. Counts are approximate: blockers/JavaScript-disabled browsers can undercount; users who clear storage or switch browser can be counted twice. Data starts accumulating only when the Supabase project is connected. Admin pages do not count. A production privacy notice, retention/deletion policy and consent review should be settled before collecting real traffic.

## Other env vars

`KV_REST_API_URL`, `KV_REST_API_TOKEN` (or Upstash equivalents) support the touch-grass leaderboard and form throttling. Keep them on the Vercel project. Do not put any credentials in Git.

## Free-plan caveats

Supabase Free advertises a 500 MB database and 50,000 monthly active auth users; idle projects may pause after a week. Historical page-view rows grow continuously; set retention/cleanup and watch database usage. Free does not include automatic backups. This site does not use Realtime (a 30-second private dashboard poll is lighter and adequate here). Traffic data is not an audit-grade analytics service.

## Razorpay test integration (disabled until owner enables it)

The new server endpoints `/api/payments/order`, `/api/payments/verify`, and `/api/payments/webhook` are implemented but public Checkout is **not active**. Set `RAZORPAY_KEY_ID` (`rzp_test_...`), `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, and `PAYMENTS_TEST_ENABLED=true` on Production after approval and a full test. Configure a Razorpay test webhook for `payment.captured` (and optionally `order.paid`) at `https://spl-bengaluru.vercel.app/api/payments/webhook`. Never prefix secrets with `NEXT_PUBLIC_`; never send keys or webhook secret through chat. The order endpoint is intentionally test-mode only. It uses the confirmed registration email/id, recomputes price server-side (₹999 General; ₹799 server-verified pitch applicant), and stores order/amount/mode. A submitted referral code gets **no discount** until real code validation exists, so any ₹899 referral price is NOT implemented and public Checkout stays closed pending that rule. Admin registration is not proof of payment.

Razorpay's checkout response is checked against HMAC and the server's own order ID; the server then queries Razorpay and requires `captured` status and matching order/amount/currency. A signed webhook independently confirms capture. The `confirm_captured_payment` SQL function locks and updates the order atomically; repeat callbacks cannot issue another number. **Test payments** increment `test_ticket_number`, never `paid_ticket_number` or `payment_status=paid`. They are simulated and must not be presented as valid event access. Live launch needs a separate owner-reviewed enablement, real merchant keys and account, discount-code validation, webhook setup and testing, compliance/privacy review, and UI checkout approval. Swapping credentials alone must never turn on live checkout or turn test tickets into real tickets.

## Google sign-in and identity migration (pending owner setup)

Run the **optional identity linkage section at the end** of `supabase/schema.sql` in the Supabase SQL Editor before testing OAuth. It adds `auth_user_id` to each form table and visitor sessions, and updates the `record_visit` and `analytics_snapshot` RPCs. Form submissions remain open for guests; the identity is linked only when the server has a verified Supabase session. Do not infer identity from an email typed in a form. Existing anonymous rows stay anonymous. A valid pitch application (not withdrawn) unlocks the ₹799 applicant ticket only when the verified Google email matches the application email; the selected-founder showcase pass remains visible but purchase is TBA until selection. While the migration is pending, submissions fall back to unlinked storage and anonymous visitor tracking.

1. In Google Cloud, configure the OAuth consent screen/Audience. For a private test choose External in Testing and add the intended Google account as a test user (or Internal if the owner's Workspace organization permits it). Under Clients create a **Web application** OAuth client. Add `https://spl-bengaluru.vercel.app` to Authorized JavaScript origins and `https://ivctvzvzieddotlciraj.supabase.co/auth/v1/callback` to Authorized redirect URIs. Google issues a client ID and secret; keep the secret in Google/Supabase, never in this repo/chat.
2. In Supabase > Authentication > Sign In / Providers > Google, enable Google and enter that Google client ID + secret. Under Authentication > URL Configuration, set Site URL `https://spl-bengaluru.vercel.app` and allow redirect URL `https://spl-bengaluru.vercel.app/api/auth/callback`. In Vercel Production, add `GOOGLE_OAUTH_ENABLED=true` and redeploy only after provider setup and identity SQL migration; this exposes the sign-in link. The site uses server-side PKCE, a short-lived state/verifier cookie, and HTTP-only session cookies; only approved IDs in `public.admin_users` see `/admin`.
3. Test an ordinary Google login, registration and signed-in active page. Until the flag is enabled, the Google links remain hidden and the forms stay open. To use Google in Control Room, the existing admin email must match the Google account and map to the **same Auth user ID**, or add its new Google Auth UID to `public.admin_users` after verifying ownership. Supabase normally links identities with matching verified email, but check the resulting UID rather than assuming.

Google provider docs: https://supabase.com/docs/guides/auth/social-login/auth-google . Identity linking docs: https://supabase.com/docs/guides/auth/auth-identity-linking . This does not automatically migrate old anonymous submissions, and it does not make anonymous page viewers identifiable.
