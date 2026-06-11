# Digi-Vixo

**AI Calling Agents for Accounting Firms**

An enterprise-grade SaaS platform that deploys AI calling agents to answer inbound calls for accounting firms, recover missed calls, and automate lead qualification and appointment booking. Live at [digivixo.com](https://digivixo.com)

## Problem

US accounting firms face critical revenue loss from missed calls:

- **62%** of voicemail callers never call back
- Missed calls mean prospects call competitors first
- Traditional phone systems don't scale during tax season
- Front desk staff can't answer 100% of inbound volume
- After-hours and weekend calls go completely unanswered

**The result:** Each missed call is direct revenue lost. A firm with 200 missed calls per month at $200 average engagement value = **$48,000 in lost annual revenue**.

## Solution

Digi-Vixo deploys custom AI agents on your existing phone number that:

- **Answer in < 2 seconds** — callers never hear a ring
- **Qualify every caller** — AI gathers intent, timeline, budget, and pain points
- **Book appointments** — AI schedules directly into your calendar system
- **Work 24/7/365** — handles after-hours, weekends, and tax season peaks
- **Provide full intelligence** — detailed call logs, transcripts, and lead scoring
- **Require zero changes** — plug into existing phone infrastructure
- **Cost a fraction of hiring** — fully managed, no infrastructure required

**Typical results:** Reduce missed call rate from 32% to 5%, increase revenue by 13%, setup in 48 hours.

---

## Who It's For

- Small to mid-size CPA firms (10-100 staff)
- Regional accounting practices
- Firms losing $20K+ annually to missed calls
- Practices wanting to handle growth without hiring
- Tax preparation firms needing seasonal capacity

## Tech Stack

### Frontend

- **Next.js 16** - React meta-framework with Turbopack for fast builds
- **React 19** - Component library and state management
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP 3** - Animation library for scroll triggers and interactive effects
- **Lenis** - Smooth scrolling engine for premium UX
- **Lottie React** - JSON-based animations
- **Lucide React** - Icon library

### Tooling

- **ESLint** - Code quality and consistency
- **PostCSS** - CSS transformation
- **Next.js Font Optimization** - Google Fonts (Cormorant Garamond, DM Sans)
- **Unsplash Images** - Background imagery via API

### Architecture Pattern

- Server Components with Client Components where needed (`'use client'` boundaries)
- Next.js App Router for file-based routing
- CSS-in-JS with Tailwind and inline styles for component customization
- Context API for global state (preloader readiness)
- GSAP Context for cleanup and performance optimization

---

## Key Features

### 1. **Hero Section**
- Premium visual storytelling with background imagery and gradient overlays
- Animated headline with staggered text reveal
- Trust metrics (5% missed call rate, +13% revenue, 48hr setup)
- Dual CTA pattern (primary action + exploratory link)

### 2. **Problem Articulation**
- Scroll-triggered animations for statistics
- Real data points (62% voicemail abandonment, 3x conversion boost)
- Visual imagery reinforcing urgency
- Problem-to-solution narrative flow

### 3. **Solution Showcase**
- Feature list with icon indicators
- Live call animation showing AI handling stages
- 24/7 operational badge
- Call handling visualization (greeting → qualifying → booking → confirming)

### 4. **Social Proof**
- Firm logos/testimonials section
- Trust indicators and result validation

### 5. **How It Works**
- Step-by-step process visualization
- Onboarding timeline and expectations

### 6. **Pricing Tiers**
- Tiered pricing display
- Feature comparison
- CTA buttons per tier

### 7. **FAQ Section**
- Expandable Q&A
- Accordion-style interaction
- Common concerns addressed

### 8. **Navigation**
- Sticky navbar with links to: Home, Services, Pricing, Industries, Blog, Contact
- Mobile-responsive hamburger menu
- Custom cursor for premium feel

### 9. **Footer**
- Company links
- Legal pages (Privacy Policy, Terms of Service)
- Contact information
- Industry-specific pages (E-commerce, SaaS, Accounting)

### 10. **Custom UI Components**
- **MagneticButton** - Interactive button with magnetic cursor effect
- **CustomCursor** - Custom pointer replacing default cursor
- **DashboardMockup** - Hero dashboard visualization
- **RevealText** - Scroll-triggered text animations
- **Preloader** - Page entry animation
- **SmoothScroll** - Lenis-powered smooth scrolling

---

## Setup & Installation

### Prerequisites

- **Node.js** 18+ (uses native ESM modules)
- **npm** or **yarn** or **pnpm**

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/theabdullahnadeem/Digi-Vixo.git
   cd Digi-Vixo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## Environment Variables

The project uses a minimal configuration. No environment variables are currently required for development.

For future integrations (Vercel deployment, analytics, CRM integration), add to `.env.local`:

```bash
# Example structure (not currently required)
NEXT_PUBLIC_API_URL=https://api.digivixo.com
NEXT_PUBLIC_GA_ID=
```

---

## Project Structure

```
Digi-Vixo/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with navbar, footer, preloader
│   │   ├── page.tsx                # Home page with all sections
│   │   ├── globals.css             # CSS variables and tailwind theme
│   │   ├── about/                  # About page
│   │   ├── blog/                   # Blog listing
│   │   ├── case-studies/           # Case studies page
│   │   ├── contact/                # Contact form page
│   │   ├── industries/             # Industry-specific pages
│   │   ├── pricing/                # Pricing page
│   │   ├── privacy-policy/         # Legal page
│   │   ├── services/               # Services listing
│   │   ├── team/                   # Team page
│   │   └── terms-of-service/       # Legal page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   ├── Footer.tsx          # Footer with links
│   │   │   ├── Preloader.tsx       # Page entry animation
│   │   │   └── SmoothScroll.tsx    # Lenis scroll wrapper
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Main hero with animations
│   │   │   ├── Problem.tsx         # Problem articulation
│   │   │   ├── Solution.tsx        # Solution showcase
│   │   │   ├── SocialProof.tsx     # Trust and testimonials
│   │   │   ├── HowItWorks.tsx      # Process steps
│   │   │   ├── Pricing.tsx         # Pricing tiers
│   │   │   ├── FAQ.tsx             # Questions & answers
│   │   │   └── FinalCTA.tsx        # Bottom call-to-action
│   │   └── ui/
│   │       ├── CustomCursor.tsx    # Custom pointer
│   │       ├── MagneticButton.tsx  # Interactive button
│   │       ├── DashboardMockup.tsx # Hero visual
│   │       ├── RevealText.tsx      # Text animations
│   │       └── CountUp.tsx         # Animated counters
│   └── lib/
│       ├── fonts.ts                # Google Fonts setup
│       ├── gsap.ts                 # GSAP library export
│       └── PreloaderContext.tsx    # React Context for preloader state
├── public/
│   └── favicon.svg
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## Architecture & Design Decisions

### 1. **Animation-First Frontend**

- **Why:** Accounting firm decision-makers respond to premium UX and data visualization
- **How:** GSAP timeline-based animations on scroll triggers, staggered reveals
- **Trade-off:** Additional JavaScript bundle size offset by Turbopack optimization

### 2. **Server Components with Client Boundaries**

- **Why:** Optimize for Lighthouse scores, reduce hydration overhead
- **Pattern:** Root layout is `'use client'` to enable hooks; sections use inline client directives
- **Benefit:** Fast initial page load, efficient interactivity

### 3. **Custom Cursor & Magnetic Effects**

- **Why:** Premium SaaS positioning requires micro-interactions
- **Design:** Disabled on touch devices, respects `prefers-reduced-motion`
- **Implementation:** CSS-in-JS with event listeners for mouse tracking

### 4. **Preloader System**

- **Why:** Page entry animations create premium perception
- **Pattern:** Context API tracks when preloader completes; content fades in after
- **UX:** Avoids jank during GSAP initialization

### 5. **Smooth Scroll (Lenis)**

- **Why:** Modern expectation for enterprise SaaS
- **Trade-off:** Mobile performance is carefully managed with CSS-based fallbacks

### 6. **CSS Color System**

- **Variables:** `--void` (dark bg), `--cream` (text), `--gold` (accent)
- **Rationale:** Professional aesthetic: dark + gold + cream = premium + trust
- **Tailwind Integration:** Custom theme in globals.css with `@theme` directive

### 7. **Unsplash Image Integration**

- **Why:** No backend image hosting required at launch
- **Pattern:** Remote patterns configured in `next.config.ts`
- **Scalability:** Easy migration to self-hosted images later

### 8. **TypeScript Strict Mode**

- **Why:** Catch errors at build time, improve IDE experience
- **Config:** `tsconfig.json` enforces strict null checks and no implicit any

---

## Build & Deployment

### Local Development

```bash
npm run dev
```

Runs on `http://localhost:3000` with hot module reloading via Turbopack.

### Production Build

```bash
npm run build
npm start
```

- Builds optimized production bundle
- Performs type checking during build
- Outputs to `.next/` directory

### Deployment Options

- **Vercel** (recommended, native Next.js platform)
  ```bash
  vercel deploy
  ```
- **Docker** (via custom Dockerfile)
- **Traditional Node hosting** (AWS EC2, DigitalOcean, etc.)

### Environment

The homepage is currently deployed at `https://digi-vixo.vercel.app` with a custom domain at `https://digivixo.com`.

---

## Code Quality

- **ESLint Configuration:** `eslint.config.mjs` enforces consistency
- **Run linter:**
  ```bash
  npm run lint
  ```
- **No automated tests** in current build (plan for future)

---

## Performance Considerations

1. **Image Optimization** - Next.js Image component with lazy loading
2. **Font Loading** - Google Fonts with `display: 'swap'` for zero FOUT
3. **CSS Efficiency** - Tailwind CSS 4 with PostCSS optimization
4. **Animation Optimization** - GSAP context cleanup prevents memory leaks
5. **Turbopack Bundling** - 5-10x faster builds than Webpack

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

Custom cursor disabled on touch devices automatically.

---

## Contributing

This is currently a single-developer project. For future contributors:

1. Follow existing code style (TypeScript, React functional components)
2. Use GSAP for animations, Tailwind for styling
3. Maintain component structure under `src/components/`
4. Test responsive behavior at 640px, 900px, 1024px breakpoints

---

## License

Proprietary - Digi-Vixo, Inc.

---

## Contact

- **Website:** https://digivixo.com
- **Email:** contact@digivixo.com
- **GitHub:** [theabdullahnadeem](https://github.com/theabdullahnadeem)

---

**Built by [Abdullah Nadeem](https://github.com/theabdullahnadeem)**
