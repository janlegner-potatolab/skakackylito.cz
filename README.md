# skakackylito.cz

One-page marketing site for a Czech bouncy castle rental business.

**Stack:** Astro 5 · Tailwind CSS v4 · TypeScript
**Hosting:** Cloudflare Pages (auto-deploy from `main`)
**Domain:** [skakackylito.cz](https://skakackylito.cz)

---

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # outputs to dist/
npm run preview      # preview the built site
npm run check        # astro + typescript checks
```

## Project layout

```
src/
├── pages/index.astro          # the single page
├── layouts/BaseLayout.astro   # <head>, fonts, JSON-LD
├── components/                # Header, Hero, CastleCard, HowItWorks, FAQ, Contact, Footer
├── content/
│   ├── castles/*.md           # one file per castle (add a file = add a castle)
│   └── faq/*.md               # one file per FAQ entry
├── content.config.ts          # zod schemas for both collections
├── data/site.ts               # phone, email, area, hours — single source of truth
└── styles/global.css          # Tailwind + design tokens
public/
└── photos/                    # all images served at /photos/*
```

## Common edits

| Want to change | Edit |
|---|---|
| Phone, email, hours, service area | `src/data/site.ts` |
| Add a castle | New `.md` in `src/content/castles/` |
| Edit FAQ | Files in `src/content/faq/` |
| Add a section | New component in `src/components/`, import in `src/pages/index.astro` |
| Colors / fonts | Tokens in `src/styles/global.css` (`@theme` block) |

## Deployment (Cloudflare Pages)

1. Push to `main`
2. Cloudflare Pages → Create project → Connect GitHub → select repo
3. Framework preset: **Astro** · Build command: `npm run build` · Output: `dist/`
4. Add custom domain `skakackylito.cz` (and `www.skakackylito.cz`) in the Pages dashboard

Subsequent pushes to `main` auto-deploy. PRs get preview URLs.
