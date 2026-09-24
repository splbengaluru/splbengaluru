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
| `KV_REST_API_URL`, `KV_REST_API_TOKEN` | leaderboard (Upstash Redis, set by the Vercel storage integration) |

`UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` also work as fallbacks.

## Next up

Registration and interest forms, in the same SPL.BLR theme, with people data in Supabase (Upstash stays for the leaderboard only). Interest forms are standalone shareable pages, e.g. `/interest/vc` and `/interest/sponsor`.

## Content rule

Real facts only. Anything undecided shows a visible `<span className="tba">TBA</span>` placeholder.
