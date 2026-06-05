# Homepage Sections — Copy & Animation Specs

## Section 1: Hero

### Layout
Full viewport height. Dark background. Large display type. Centered or left-aligned.
Gold horizontal rule above headline. Subtle background: faint radial gradient from gold at 3% opacity, centered.

### Copy
```
[LABEL] — AI Calling Infrastructure

[HEADLINE LINE 1] Your Phones
[HEADLINE LINE 2] Are Losing
[HEADLINE LINE 3] You Money.

[SUBTEXT]
We build AI calling agents that answer every call,
qualify leads, and book appointments — 24/7.
No downtime. No missed revenue. Fully managed.

[CTA] Book a Free Call →
[SECONDARY] See Results ↓
```

### Animation
- Lines reveal upward from clip-path (overflow hidden container per line)
- Stagger: 0.12s between lines
- Duration: 1.2s per line, ease: power4.out
- CTA button fades + slides up after lines complete
- Background gradient slowly pulses (scale 1 → 1.05, 8s loop)

### GSAP Implementation
```ts
// Each headline line wrapped in overflow-hidden div
// Inner span animates yPercent: 110 → 0
gsap.from('.hero-word', {
  yPercent: 110,
  duration: 1.2,
  stagger: 0.1,
  ease: 'power4.out',
  delay: 0.2, // after preloader
})
```

---

## Section 2: Social Proof Bar

### Layout
Full-width horizontal strip. Slightly lighter background (void-2).
Three stats separated by gold vertical lines. Centered.

### Copy
```
32% → 5%          13%              48hrs
Missed Call Rate   Revenue Increase  Average Setup Time
Reduced            Achieved
```

### Animation
- CountUp numbers trigger on scroll entry
- Numbers count up over 2s with eased timing
- Container slides up on scroll entry (ScrollTrigger)

### Component: CountUp
```tsx
// Animate from 0 to target value when in viewport
// Use GSAP + ScrollTrigger with once: true
```

---

## Section 3: Problem

### Layout
Two-column on desktop. Left: large display number/statement. Right: body text.
Each problem item has a thin gold left border.

### Copy
```
[LABEL] The Problem

[DISPLAY] 62%
of callers who reach voicemail
never call back.

---

Every missed call is a prospect
calling your competitor instead.

After-hours calls go to voicemail.
Voicemails don't get called back.
Spike seasons overwhelm your front desk.

Your phone system was built for a different era.
```

### Animation
- Section title reveals on scroll
- Stats counter (62%) counts up on entry
- Problem items reveal with stagger, slight left-to-right motion
- Gold border lines draw down (scaleY: 0 → 1) on entry

---

## Section 4: Solution

### Layout
Dark section with a large central content block.
Lottie animation on one side (abstract waveform or phone → checkmark).
Text on the other.

### Copy
```
[LABEL] The Solution

[HEADLINE]
An AI Agent That Never
Misses a Call.

[BODY]
We build, configure, and manage a custom AI calling
agent on your existing phone number. It answers
instantly, qualifies the caller, books appointments,
and hands off to you only when necessary.

You get a real-time dashboard showing every call,
every outcome, every recovered opportunity.

[FEATURES]
→ Answers in under 2 seconds
→ Works 24/7 including weekends and tax season
→ Custom-trained on your firm's services
→ Full call logs and analytics dashboard
→ No infrastructure changes on your end
```

### Lottie
Use a Lottie animation of an abstract AI waveform or network.
Source: lottiefiles.com — search "AI", "waveform", "phone"
Keep it monochrome gold/white to match palette.

### Animation
- Lottie plays on scroll entry, loops slowly
- Text items reveal with stagger on scroll
- Arrow icons (→) animate left to right on hover

---

## Section 5: How It Works

### Layout
Three large numbered steps. Full width. Each step takes significant vertical space.
Horizontal scroll on mobile, vertical stacked on desktop.
Large step numbers in display font, faded gold.

### Copy
```
[LABEL] The Process

01
Discovery Call
We learn your call patterns, peak hours,
common inquiries, and booking workflow.
No technical knowledge required from you.

02
Build & Configure
We build your AI agent, train it on your
firm's services, test it across scenarios,
and integrate with your existing number.
Live in 48 hours.

03
Go Live & Optimize
Your agent goes live. You watch revenue
recover on your dashboard. We monitor
and optimize performance weekly.
```

### Animation
- Step numbers count up (01 → 02 → 03) as user scrolls
- Each step's content pins briefly during scroll (ScrollTrigger pinning)
- Horizontal line draws across from left as step activates
- Large background number fades in behind content on entry

---

## Section 6: Pricing

### Layout
Two cards side by side. Dark cards with gold border on hover.
One card highlighted as "Most Popular" with gold border always visible.

### Copy
```
[LABEL] Transparent Pricing

[CARD 1]
Standard
$1,500 / month

6,000 minutes included
Real-time dashboard
24/7 AI coverage
Weekly optimization
48hr setup
Custom agent training

[CTA] Get Started →

---

[CARD 2] ★ Peak Season
Pro
$2,200 / month

10,000 minutes included
Everything in Standard
Priority support
Spike season ready
Rotate back anytime

[CTA] Get Started →

---

[FOOTNOTE]
No setup fees. No contracts. Cancel anytime.
Rotate between plans as your season demands.
```

### Animation
- Cards slide up on scroll entry with stagger
- Hover: subtle gold glow appears, border brightens
- Price numbers count up on first entry
- "Most Popular" badge pulses very subtly (scale 1 → 1.03, 3s loop)

---

## Section 7: FAQ

### Layout
Accordion. Left-aligned. Clean. Gold plus/minus icon.
Each item expands with smooth height animation.

### Questions
```
Q: What if the AI can't handle a complex call?
A: It transfers to you instantly with a brief summary
   of the conversation so you're never caught off guard.

Q: Do I need to change my phone number?
A: No. We configure the agent on your existing number.
   Nothing changes for your clients.

Q: How long does setup take?
A: 48 hours from our discovery call to going live.

Q: Is my client data secure?
A: All calls are processed with enterprise-grade encryption.
   No data is stored beyond call logs visible to you.

Q: What happens after the spike season ends?
A: We rotate you back to the Standard plan automatically
   or on request. No penalties, no friction.

Q: Can I see exactly what the AI says on calls?
A: Yes. Full transcripts and recordings are available
   in your dashboard for every call.
```

### Animation
- Items reveal on scroll with stagger
- Expand/collapse: GSAP height tween (not CSS transition, for smoothness)
- Icon rotates 45deg on open

---

## Section 8: Final CTA

### Layout
Full viewport height. Centered. Massive display type.
Gold animated line above. Single CTA button.

### Copy
```
[DISPLAY]
Stop Losing
Calls.

[BODY]
Every unanswered call is revenue walking out the door.
Book a free 20-minute call and we'll show you
exactly what you're losing — and how to recover it.

[CTA] Book Your Free Call →

[FOOTNOTE] No commitment. No sales pressure. Just clarity.
```

### Animation
- Headline reveals on scroll (clip-path, same as hero)
- CTA button has magnetic effect (follows cursor slightly)
- Background: subtle gold particle field or gradient shift
