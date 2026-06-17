# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint (flat config, ESLint 9)
```

No test suite is configured.

## Architecture

Personal portfolio site for Sharon Shineberg built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. All content is static — no database, no API routes, no `"use client"` directives.

**App Router structure** (`app/`):
- `layout.tsx` — root HTML shell, metadata, global font/color defaults
- `page.tsx` — home (hero, services, project preview, CTA)
- `about/`, `how-to-work/`, `lonoda/`, `blog/` — one `page.tsx` each
- `blog/lezel-cannabis-ai/page.tsx` — only individual post so far (static route, not dynamic)
- `components/Footer.tsx` — only shared component; nav is duplicated per page

**Content as data**: Projects (in `lonoda/page.tsx`) and blog posts (in `blog/page.tsx`) are plain JS object arrays defined inline — no CMS. Adding a new blog post requires both a new entry in that array and a new static route directory.

## Design System

All styling via Tailwind utility classes. Custom tokens defined in `tailwind.config.ts`:

| Token | Value |
|---|---|
| `paper` | `#F5F0E8` (background) |
| `ink` | `#111111` (primary text) |
| `body` | `#727170` (body text) |
| `muted` | `#9F9F9E` (secondary text) |
| `line` | `#DCD6CA` (borders/dividers) |

Custom spacing scale: `xs` (4px) → `4xl` (160px). Custom `maxWidth`: `prose` (54ch), `shell` (1200px). Default `borderRadius` is 3px. Fonts: `font-serif` = Playfair Display, `font-sans` = Hanken Grotesk, `font-mono` = JetBrains Mono.

## Next.js Version Warning

This project uses **Next.js 16**, which has breaking changes from versions in typical training data. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Heed all deprecation notices.
