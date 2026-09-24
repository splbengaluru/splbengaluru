# Startup League Bengaluru (SPL) - website

Next.js (App Router) site for SPL.BLR, deployed on Vercel. Every push to `main` auto-deploys.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

The leaderboard API needs the Upstash env vars. Pull them with `vercel env pull .env.local` (never commit `.env*`).

## Structure

```
app/
  layout.jsx            root layout: fonts, global CSS, favicon + page scripts
  page.jsx              /           league home
  season-1/page.jsx     /season-1   Season 1 event page (24 Oct 2026)
  api/grass/route.js    /api/grass  Touch Grass leaderboard (GET top 10, POST touches)
components/
  SiteHeader.jsx        nav, touch grass button, leaderboard panel (active = "home" | "s1")
  SiteFooter.jsx
lib/
  upstash.js            tiny Upstash Redis REST client (no SDK)
styles/                 theme.css (tokens), site.css (base), brand.css (SPL.BLR brand layer)
public/                 images, favicons, og.png
public/assets/site.js   page behaviour: scroll reveal, countdown, touch grass, leaderboard UI
public/assets/fav.js    animated favicon (S -> P -> L -> trophy; Safari shows the static icon)
```

## Environment variables (Vercel)

| Name | Used by |
| --- | --- |
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | leaderboard + form rate limit (Upstash Redis, set by the Vercel storage integration) |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | form submissions (not set yet) |

`UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` also work as fallbacks.

## Forms

| Page | Form | Supabase table |
| --- | --- | --- |
| `/register` | Audience registration (General ₹999 / applied-not-selected ₹799). No payment yet. | `audience_registrations` |
| `/apply` | Founder application | `founder_applications` |
| `/interest/vc` | VC interest (standalone, shareable) | `vc_interest` |
| `/interest/sponsor` | Sponsor & booth interest (standalone, shareable) | `sponsor_interest` |

- Fields and validation: `lib/forms.js` (one place, used by client and server).
- UI: `components/BrandForm.jsx`, page shell `components/FormPage.jsx`, styles `styles/forms.css`.
- API: `POST /api/forms/[type]`, with a honeypot and an Upstash rate limit (10 per IP per 10 min).
- Data layer: `lib/store.js` (Supabase REST, server-side service role key). Until it's connected, forms return "opens very soon" and nothing is stored.
- Add `?src=whatsapp` (or any tag) to a form link to record where signups came from.

### Connect Supabase

1. Create a project at supabase.com (region: Mumbai / ap-south-1).
2. SQL Editor > New query > paste `supabase/schema.sql` > Run.
3. Project Settings > API: copy the Project URL and the `service_role` key.
4. Vercel > spl-bengaluru > Settings > Environment Variables: add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (Production + Preview), then redeploy.

The service role key is server-only. Never prefix it with `NEXT_PUBLIC_` or commit it.

## Content rule

Real facts only. Anything undecided shows a visible `<span className="tba">TBA</span>` placeholder.
