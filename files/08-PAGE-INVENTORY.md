# Page Inventory — Existing Digivixo.com

All existing pages must be rebuilt using the design system in 02-DESIGN-SYSTEM.md.
Same content, same structure — new visual execution. Dark luxury theme throughout.

---

## Pages to Rebuild (from existing site)

### 1. `/` — Homepage
Already fully specced in 04-SECTIONS.md with updated AI calling copy.

**Existing sections to preserve and rebuild:**
- Hero (update copy to AI calling focus — see 04-SECTIONS.md)
- Stats bar: 50+ Projects, 98% Client Satisfaction, 3 Countries
- About teaser: "Founded by engineers tired of watching businesses struggle..."
- Services overview: Web/SaaS Dev, AI Automation, Conversion Sites + 4 additional
- Case studies preview (3 cards — mark "Coming Soon" as before)
- Pricing table (keep existing + add AI Calling plans from 04-SECTIONS.md)
- Testimonials (3 existing: Sarah Jenkins, Marcus Chen, Elena Rodriguez)
- "Intelligence Weaponized" AI Core section
- Methodology: Audit → Roadmap → Execution
- Industries section (5 verticals)
- Meet the Founders (Abdullah + Hassan)
- Footer

**Key change:** Add the AI Calling Agent service prominently. Position it as the flagship product above general SaaS services.

---

### 2. `/about` — About Page

**Sections to rebuild:**
- Hero: "We are DIGIVIXO." + origin story paragraph
- Core Directives (Mission + Vision) — keep as cards
- Corporate Governance (4 pillars: Technical Standards, Data Sovereignty, Sustainable Infrastructure, Operational Integrity)
- Compliance & Responsibility (4 items)
- Timeline / Journey:
  - 2021 — Technical Foundations
  - 2022 — Digital Service Expansion
  - 2023 — Enterprise Solutions
  - 2024 — Process & Quality Excellence
  - 2025 — Integrated Digital Partner
- Leadership Principles (5: Customer Obsession, Ownership, Invent & Simplify, Bias for Action, Deliver Results)
- Founders quote block: *"Technical excellence is not just about writing code..."*
- Meet the Founders: Abdullah (CEO) + Hassan (COO)

**Animation for timeline:**
- Horizontal scroll timeline on desktop
- Each year label animates in with GSAP as user scrolls
- Gold connecting line draws between milestones

---

### 3. `/services` — Services Page

**Rebuild these service blocks:**

**Core Services:**
1. Custom Web & SaaS Development — end-to-end custom software
2. AI & Business Automation Systems — LLMs, agents, APIs
3. Conversion-Focused Websites — high-performance frontends
4. **AI Calling Agent (NEW — flagship)** — missed call recovery, 24/7 coverage

**Additional Services:**
- Shopify E-commerce
- Amazon Optimization
- WordPress Development
- Digital/Growth Marketing

**Design pattern:**
- Each core service gets a full-width alternating section (image left/text right, then flip)
- Additional services in a 2x2 grid
- Each service card has a gold hover border + arrow that animates right

---

### 4. `/team` — Team Page

**Content:**
- Abdullah — CEO: "A strategic architect of technical ecosystems and high-performance software."
- Hassan — COO: "The technical backbone of Digivixo. Engineers seamless digital architectures."

**Design:**
- Full-width hero with team headline
- Two large cards — photo, name, title, bio
- Subtle parallax on photos on scroll

---

### 5. `/case-studies` — Case Studies Page

**Existing (all "Coming Soon"):**
1. E-Commerce Replatforming — 34% conversion rate increase, 60% page speed improvement
2. SaaS Architecture Overhaul — 80% faster deployments, 5x user growth
3. AI Inventory Automation — 40% processing time reduction, zero stock anomalies

**Add (NEW — AI Calling):**
4. Accounting Firm AI Calling — 32% → 5% missed call rate, 13% revenue increase
   - Label: "Verified Results — Client Name Withheld"
   - Industry: Professional Services / Accounting
   - Timeline: 60 days

**Design:**
- Each case study as a large card with: industry tag, problem, result metric (big number), CTA
- Filter bar at top: All | Web/SaaS | AI | E-commerce

---

### 6. `/industries` — Industries Page

**Existing verticals:**
- SaaS Startups — scalable MVPs and cloud architectures
- E-commerce Brands — headless Shopify storefronts
- Healthcare & MedTech — HIPAA-compliant portals
- Logistics & Operations — inventory and tracking automation
- **Professional Services (CPA/Accounting) — ADD THIS** — AI calling, appointment automation, missed call recovery

**Design:**
- Full-width sections per industry
- Each has: icon/illustration, headline, 2-3 pain points, what we do, CTA

---

### 7. `/pricing` — Pricing Page

**Rebuild existing table + add AI Calling plans:**

**Existing services pricing:**
| Service | Starting From |
|---|---|
| Starter Business Website | $1,500 |
| E-commerce & Shopify | $2,500 |
| Custom Web Applications | $5,000 |
| Custom SaaS Platforms | $10,000 |
| AI & Automation Systems | $2,000 |

**Add AI Calling section:**
| Plan | Price | Minutes |
|---|---|---|
| Standard | $1,500/mo | 6,000 min |
| Pro (Peak Season) | $2,200/mo | 10,000 min |

**Design:**
- Two sections: "Project Work" (one-time) and "AI Calling (Monthly)"
- Monthly section uses the card design from 04-SECTIONS.md
- Project work uses a clean table with gold row highlights on hover
- Footer note: "All projects start with a free consultation."

---

### 8. `/blog` — Blog Page

**Current state:** Exists but appears empty/placeholder.

**Rebuild as:**
- Grid layout of blog cards
- Empty state if no posts: "Insights coming soon. Subscribe for updates."
- Email capture form (simple, no backend needed — use a Formspree or Resend endpoint)

---

### 9. `/contact` — Contact Page

**Content:**
- Headline: "Let's Build Something."
- Two columns: contact form (left) + info (right)
- Info: email, LinkedIn, response time ("We respond within 24 hours")
- Calendly embed for AI Calling prospects specifically
- Form fields: Name, Email, Company, Service Interested In (dropdown), Message

---

### 10. `/privacy-policy` and `/terms-of-service`

**Rebuild visually only** — keep legal content identical.
Simple single-column layout, dark background, cream text.
Gold line separator between sections.

---

## Navbar Links (Final)
```
Home | About | Services | Case Studies | Industries | Pricing | Team | Blog | Contact
[Book a Call →]  ← CTA button, gold border
```

## Footer Links (Final)
```
Navigation: About | Services | Case Studies | Industries | Pricing | Team | Blog
Legal: Privacy Policy | Terms of Service
Connect: LinkedIn | Email Us
```
