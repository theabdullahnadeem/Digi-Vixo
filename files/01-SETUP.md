# Setup & Dependencies

## Init Command
```bash
npx create-next-app@16 digivixo --typescript --tailwind --app --src-dir --import-alias "@/*"
cd digivixo
```

## Install All Dependencies
```bash
# Core animation stack — pinned to latest stable
npm install gsap@3.15.0 @gsap/react@2.1.2

# Smooth scroll — use lenis directly (drop @studio-freight/lenis, it's deprecated)
npm install lenis@latest

# Lottie
npm install lottie-react@latest

# Utilities
npm install clsx tailwind-merge next-themes

# Types
npm install -D @types/node
```

## IMPORTANT: GSAP Registry Change
GSAP is now published directly on npmjs.org — no private registry needed.
If your project has an .npmrc referencing npm.greensock.com, remove it immediately.
That registry is end-of-life and will cause install failures.

## GSAP ScrollTrigger (included with gsap, no extra install)
ScrollTrigger is part of the `gsap` package. Import like:
```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

## Lenis Setup
```ts
import Lenis from 'lenis'
// Initialize in layout, connect to GSAP ticker
```

## Google Fonts (add to next/font)
```ts
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})
```

## Tailwind Config Extensions
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      void: '#080808',
      'void-2': '#0F0F0F',
      'void-3': '#141414',
      cream: '#F5F0E8',
      'cream-muted': '#A89F91',
      gold: '#C9A84C',
      'gold-light': '#E2C97E',
      'gold-dark': '#8B6914',
    },
    fontFamily: {
      display: ['var(--font-display)', 'serif'],
      body: ['var(--font-body)', 'sans-serif'],
    },
  }
}
```

## Folder Structure
```
src/
  app/
    layout.tsx          # Root layout, fonts, Lenis init
    page.tsx            # Homepage
    case-study/
      page.tsx
    contact/
      page.tsx
  components/
    layout/
      Preloader.tsx     # Full-screen preloader
      Navbar.tsx
      Footer.tsx
      SmoothScroll.tsx  # Lenis provider
    sections/
      Hero.tsx
      SocialProof.tsx
      Problem.tsx
      Solution.tsx
      HowItWorks.tsx
      Pricing.tsx
      FAQ.tsx
      CTA.tsx
    ui/
      MagneticButton.tsx
      CountUp.tsx
      RevealText.tsx
      GoldLine.tsx
  lib/
    gsap.ts             # GSAP registration helper
    lenis.ts            # Lenis singleton
  hooks/
    useGSAP.ts
    useLenis.ts
```
