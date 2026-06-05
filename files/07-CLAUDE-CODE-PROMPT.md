# Claude Code Prompt — Paste This Directly

Use this as your starting prompt when you open Claude Code on this project.

---

```
Build a premium Next.js 16 website for Digivixo — an AI calling agent service targeting US accounting/CPA firms.

Read all markdown files in the /digivixo-docs/ folder before writing any code. They contain the full design system, component specs, copy, animation instructions, and deployment checklist.

Tech stack — use EXACTLY these versions:
- Next.js 16 — init with: npx create-next-app@16
- TypeScript
- Tailwind CSS with custom tokens from 02-DESIGN-SYSTEM.md
- GSAP 3.15.0 + @gsap/react 2.1.2 (ScrollTrigger is included in gsap package)
- Lenis latest — import from 'lenis' NOT '@studio-freight/lenis' (that's deprecated)
- lottie-react latest
- Google Fonts via next/font: Cormorant Garamond (display) + DM Sans (body)

Next.js 16 breaking changes — handle these:
- cookies() and headers() are now async — always await in Server Components
- fetch() has no default caching — add cache: 'force-cache' where needed
- Use --turbopack flag with next dev (stable in 16, significantly faster)
- Every component using window, GSAP, or Lenis must be marked 'use client'

Design direction:
- Dark luxury theme (#080808 background, #F5F0E8 text, #C9A84C gold accent)
- Inspired by k72.ca, apple.com, abdullahpk.site
- Premium, refined, not startup-y
- Film grain overlay, custom cursor, magnetic buttons

Build in this order:
1. Project setup + Tailwind config + fonts
2. Preloader component (counter 0→100, split exit)
3. Lenis smooth scroll provider
4. GSAP registration utility
5. Custom cursor
6. Navbar (transparent → dark on scroll)
7. Hero section (full viewport, clip-path text reveal)
8. Social proof bar (CountUp stats)
9. Problem section
10. Solution section (with Lottie)
11. How It Works (3 steps, scroll-pinned)
12. Pricing section (2 cards)
13. FAQ accordion (GSAP height tween)
14. Final CTA section (magnetic button)
15. Footer
16. Mobile responsiveness pass
17. Performance pass (lazy loading, reduced motion)

All copy is in 04-SECTIONS.md. Use it exactly — do not invent copy.
All component implementations are in 05-COMPONENTS.md. Follow them precisely.
All animations must use GSAP — not CSS transitions for primary reveals.

Do not use purple gradients, Inter font, or generic AI agency aesthetics.
This should look like it costs $1,500/month to use.
```

---

## Follow-up Prompts (use these after initial build)

**After hero is built:**
```
The hero looks good. Now add the preloader so it animates out before the hero reveals. Connect them so the hero entry animation fires after onComplete from the preloader.
```

**After full build:**
```
Run a mobile responsiveness pass. Disable magnetic button and custom cursor on touch devices. Simplify animations for mobile — keep reveals but remove pin-based scroll effects. Ensure all sections stack properly on 375px viewport.
```

**For performance:**
```
Audit for performance. Ensure all GSAP contexts are cleaned up on unmount. Lazy load Lottie JSON. Add prefers-reduced-motion handling. Check all images use next/image with proper sizing.
```

---

## UPDATED PROMPT — Full Site Rebuild (use this instead of the original)

```
Build a complete Next.js 16 site rebuild for Digivixo.com.

Read ALL markdown files in /digivixo-docs/ before writing any code:
- 00 through 06 cover design system, animations, and components
- 08-PAGE-INVENTORY.md covers every page to build

Pages to build:
/ (homepage)
/about
/services
/case-studies
/industries
/pricing
/team
/blog
/contact
/privacy-policy
/terms-of-service

Design rules (from 02-DESIGN-SYSTEM.md):
- Dark luxury theme: #080808 background, #F5F0E8 text, #C9A84C gold
- Fonts: Cormorant Garamond (display) + DM Sans (body)
- GSAP for all scroll animations — no CSS transitions for primary reveals
- Lenis smooth scroll connected to GSAP ticker
- Preloader on first load (counter 0→100, split exit)
- Custom cursor (dot + ring, scales on hover)
- Magnetic buttons for all primary CTAs
- Film grain overlay across entire site

Build order:
1. Setup: Tailwind config, fonts, CSS variables
2. Global: Preloader, SmoothScroll, CustomCursor, Navbar, Footer
3. Homepage (most complex — follow 04-SECTIONS.md exactly)
4. About page
5. Services page
6. Case Studies page (include the NEW AI Calling case study)
7. Industries page (add Professional Services/CPA vertical)
8. Pricing page (two sections: project work + monthly AI calling)
9. Team page
10. Contact page with Calendly embed
11. Blog page (empty state with email capture)
12. Privacy + Terms (layout only)
13. Mobile responsiveness pass
14. Performance pass

Critical: The AI Calling Agent service is the FLAGSHIP product. It should be the most prominent service on the homepage and services page. All other services are secondary.

Do not use Inter font, purple gradients, or generic agency layouts. This should look like it costs money.
```
