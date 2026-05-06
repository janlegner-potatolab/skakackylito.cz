# CLAUDE.md — skakackylito.cz

Project-specific instructions for Claude. Global preferences are in `~/.claude/CLAUDE.md`.

## What this project is

One-page marketing site for a Czech bouncy castle rental business. Static, no admin, no forms, no DB on launch. Architected to scale later (reservations, client DB, admin) without rewriting.

**Independent of any other project in the parent workspace folder.** Treat as standalone.

## Stack

- Astro 5 (content collections + sitemap)
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript strict
- Hosting: Cloudflare Pages (GitHub auto-deploy)
- Domain: skakackylito.cz (purchased; DNS to be pointed at Cloudflare)

## Conventions

- **Czech language only** on the site (no i18n)
- Phone number is the primary CTA on every section that has a CTA — use `tel:` links via `site.phone.raw`
- All site-wide config (phone, email, hours, social, IČO) lives in [`src/data/site.ts`](src/data/site.ts) — single source of truth
- Castles are content collection entries — adding a castle means adding one `.md` file in [`src/content/castles/`](src/content/castles/), no code change
- FAQ entries follow the same pattern in [`src/content/faq/`](src/content/faq/)
- Path alias: `~/*` → `src/*`

## Design state

Components currently use **placeholder Tailwind styling** — basic layout/colors only. The visual design pass is done separately (claude design). When refining design, edit:
- Tokens: `@theme` block in [`src/styles/global.css`](src/styles/global.css)
- Component classes directly in `src/components/*.astro`

## Known TBDs (user must provide)

- Phone, email, service area, working hours, IČO, owner name → `src/data/site.ts`
- Hero tagline → `src/data/site.ts` (`tagline`)
- All FAQ answers → 10 files in `src/content/faq/`
- Castle ageRange + descriptions → frontmatter + body of `01-standard.md`, `02-velky.md`
- Pricing strategy (publish or "na vyžádání") → drives whether to add a Pricing section
- Final favicon + og-image (currently using `logo.png` as both)

## Image notes

Photos in `public/photos/` are large originals (2-3 MB each). Astro's static handling will serve them as-is. Before launch, either:
- Pre-optimize with a tool (e.g. `sharp` script) and replace files, OR
- Migrate to `astro:assets` with `<Image>` component for automatic optimization

This is a pre-launch perf task, not architectural.

## Deployment

Cloudflare Pages, not Workers. No `wrangler.jsonc`. Cloudflare auto-detects Astro and builds with `npm run build` → `dist/`.

## Future scaling

When forms / reservations are added:
1. Switch Astro to `output: "server"` or use `output: "hybrid"` with `prerender = false` only on form endpoints
2. Add Cloudflare Pages Functions or migrate to Cloudflare Workers
3. Add Supabase client, server-only env keys via Cloudflare dashboard

The current static config does not need changing until that point.
