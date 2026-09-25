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
