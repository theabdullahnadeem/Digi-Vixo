# Performance, SEO & Deployment

## Performance Targets
- Lighthouse Performance: 90+
- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms

## Critical Performance Rules

### GSAP
- Always import ScrollTrigger from 'gsap/ScrollTrigger' (not the dist bundle)
- Register plugins once in a central file, not per-component
- Use `gsap.context()` for cleanup in useEffect
- Kill ScrollTriggers on component unmount

```ts
// src/lib/gsap.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
```

### Lottie
- Load Lottie JSON files lazily (dynamic import)
- Keep Lottie files under 100KB — compress at lottiefiles.com
- Use `rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }`

### Images
- Use next/image for all images
- Hero background: WebP, lazy=false (above fold)
- All others: lazy=true

### Fonts
- Use next/font/google — zero layout shift
- Preload display font (Cormorant Garamond)
- Subset to latin only

---

## SEO

### Metadata (src/app/layout.tsx)
```ts
export const metadata = {
  title: 'Digivixo — AI Calling Agents for Accounting Firms',
  description: 'We reduce missed calls from 32% to 5% and increase revenue by 13% for US accounting firms. Fully managed AI calling infrastructure.',
  keywords: ['AI calling agent', 'CPA firm AI', 'accounting firm automation', 'missed call recovery'],
  openGraph: {
    title: 'Digivixo — AI Calling Agents for Accounting Firms',
    description: 'Recover missed calls. Recover revenue.',
    url: 'https://digivixo.com',
    siteName: 'Digivixo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digivixo — AI Calling Agents',
  }
}
```

### Structured Data
Add JSON-LD for LocalBusiness / ProfessionalService schema.

---

## Mobile Responsiveness Rules
- All animations disabled or simplified on mobile (prefers-reduced-motion)
- Touch events handled for mobile navigation
- Magnetic button effect disabled on touch devices
- Custom cursor hidden on mobile

```css
@media (hover: none) {
  .custom-cursor { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

---

## Deployment Checklist
- [ ] `next build` passes with no errors
- [ ] All GSAP animations guarded with `typeof window !== 'undefined'`
- [ ] Lenis only initialized client-side
- [ ] All components that use browser APIs marked `'use client'`
- [ ] Calendly link added to all CTA buttons
- [ ] Contact email set in footer
- [ ] OG image created (1200x630, dark with gold text)
- [ ] Favicon set (gold D on dark background)
- [ ] Google Analytics or Plausible added
- [ ] robots.txt present
- [ ] sitemap.xml generated (next-sitemap)

## Environment Variables
```env
# .env.local
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
NEXT_PUBLIC_EMAIL=hello@digivixo.com
```
