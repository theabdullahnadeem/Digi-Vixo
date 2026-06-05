# Design System

## Color Palette
```css
:root {
  --void:        #080808;   /* Primary background */
  --void-2:      #0F0F0F;   /* Card backgrounds */
  --void-3:      #141414;   /* Elevated surfaces */
  --void-border: #1E1E1E;   /* Subtle borders */

  --cream:       #F5F0E8;   /* Primary text */
  --cream-muted: #A89F91;   /* Secondary text */
  --cream-dim:   #6B6560;   /* Tertiary / placeholders */

  --gold:        #C9A84C;   /* Primary accent */
  --gold-light:  #E2C97E;   /* Hover / highlight */
  --gold-dark:   #8B6914;   /* Pressed / shadow */
  --gold-glow:   rgba(201,168,76,0.15); /* Ambient glow */
}
```

## Typography Scale
```css
/* Display — Cormorant Garamond */
.text-display-xl  { font: 700 clamp(64px, 10vw, 160px) / 0.95 var(--font-display); letter-spacing: -0.02em; }
.text-display-lg  { font: 600 clamp(48px, 7vw, 100px)  / 1.0  var(--font-display); letter-spacing: -0.01em; }
.text-display-md  { font: 500 clamp(32px, 5vw, 64px)   / 1.1  var(--font-display); }

/* Body — DM Sans */
.text-body-lg     { font: 400 clamp(16px, 1.5vw, 20px) / 1.7  var(--font-body); }
.text-body-md     { font: 400 clamp(14px, 1.2vw, 17px) / 1.6  var(--font-body); }
.text-label       { font: 500 11px / 1 var(--font-body); letter-spacing: 0.2em; text-transform: uppercase; }
```

## Spacing System
Use multiples of 8px. Key layout values:
- Section padding: `py-32 md:py-48` (128px / 192px)
- Container: `max-w-[1400px] mx-auto px-6 md:px-12`
- Content max-width: `max-w-[900px]` for text blocks

## Animation Tokens
```ts
export const ease = {
  smooth:   [0.25, 0.1, 0.25, 1.0],   // General ease
  out:      [0.0,  0.0, 0.2, 1.0],    // Elements entering
  in:       [0.4,  0.0, 1.0, 1.0],    // Elements leaving
  spring:   { type: 'spring', stiffness: 100, damping: 20 },
  luxury:   [0.76, 0.0, 0.24, 1.0],   // Slow, confident motion
}

export const duration = {
  fast:   0.3,
  normal: 0.6,
  slow:   1.0,
  crawl:  1.6,   // Hero reveals, preloader
}
```

## Border & Surface Language
- Borders: 1px solid `var(--void-border)` — barely visible, structural
- Cards: `background: var(--void-2)` with `border: 1px solid var(--void-border)`
- Gold line separator: `1px solid var(--gold)` at 30% opacity
- Glow effect: `box-shadow: 0 0 60px var(--gold-glow)`

## Cursor
Custom cursor: small circle (8px) that scales to 40px on hover over interactive elements.
Trails slightly behind mouse — gives premium, deliberate feel.

```tsx
// CustomCursor.tsx — render in layout above everything
// Use GSAP quickTo for smooth cursor following
```

## Grain Overlay
Add subtle film grain across entire site:
```css
.grain::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url('/grain.png'); /* 200x200 noise texture */
  opacity: 0.035;
  pointer-events: none;
  z-index: 9999;
}
```
Generate grain.png with an SVG filter or use a static noise PNG.
