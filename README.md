# Startup League Bengaluru (SPL) website

Static site for https://spl-bengaluru.vercel.app

- `index.html` - league home
- `season-1.html` - Season 1 event page (24 Oct 2026)
- `assets/` - styles (`site.css`, `theme.css`, `brand.css`), `site.js`, skyline art, badges, logo
- `api/grass.js` - Vercel serverless function for the Touch Grass leaderboard (Upstash Redis via `KV_REST_API_URL` / `KV_REST_API_TOKEN`)
- `vercel.json` - clean URLs

No build step. Deploys straight from the repo root on Vercel.
