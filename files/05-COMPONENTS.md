# UI Components

## MagneticButton
Follows cursor with spring physics on hover.
Used for primary CTAs.

```tsx
// src/components/ui/MagneticButton.tsx
'use client'
import { useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(ref.current, {
      x: 0, y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
    })
  }

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        inline-flex items-center gap-3 px-8 py-4
        border border-gold text-gold font-body text-sm tracking-widest uppercase
        hover:bg-gold hover:text-void
        transition-colors duration-300
        cursor-pointer select-none
      "
    >
      {children}
    </a>
  )
}
```

---

## RevealText
Splits text into lines, each in an overflow-hidden container.
Animates yPercent on scroll or trigger.

```tsx
// src/components/ui/RevealText.tsx
'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function RevealText({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.from(el, {
      yPercent: 110,
      duration: 1.0,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    })
  }, [])

  return (
    <div className="overflow-hidden">
      <div ref={ref}>{children}</div>
    </div>
  )
}
```

---

## CountUp
Animates a number from 0 to target on scroll entry.

```tsx
// src/components/ui/CountUp.tsx
'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function CountUp({ to, suffix = '', duration = 2 }: { to: number, suffix?: string, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: to,
          duration,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(this.targets()[0].val) + suffix
          }
        })
      }
    })
  }, [])

  return <span ref={ref}>0{suffix}</span>
}
```

---

## GoldLine
Animated horizontal or vertical gold divider.
Draws in on scroll entry.

```tsx
// src/components/ui/GoldLine.tsx
'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GoldLine({ vertical = false }: { vertical?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.from(ref.current, {
      [vertical ? 'scaleY' : 'scaleX']: 0,
      duration: 1.2,
      ease: 'power3.out',
      transformOrigin: vertical ? 'top' : 'left',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 90%',
        once: true,
      }
    })
  }, [])

  return (
    <div
      ref={ref}
      className={`bg-gold opacity-40 ${vertical ? 'w-px h-full' : 'h-px w-full'}`}
    />
  )
}
```

---

## CustomCursor
Replaces default cursor. Small dot + ring that scales on hover.

```tsx
// src/components/ui/CustomCursor.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const xTo = gsap.quickTo(dotRef.current, 'x', { duration: 0.1 })
    const yTo = gsap.quickTo(dotRef.current, 'y', { duration: 0.1 })
    const xToRing = gsap.quickTo(ringRef.current, 'x', { duration: 0.5, ease: 'power3' })
    const yToRing = gsap.quickTo(ringRef.current, 'y', { duration: 0.5, ease: 'power3' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToRing(e.clientX)
      yToRing(e.clientY)
    }

    window.addEventListener('mousemove', move)

    // Scale up on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-grow]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(ringRef.current, { scale: 2.5, duration: 0.3 }))
      el.addEventListener('mouseleave', () => gsap.to(ringRef.current, { scale: 1, duration: 0.3 }))
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" />
      {/* Ring */}
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 border border-gold rounded-full pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 opacity-60" />
    </>
  )
}
```

---

## Navbar
Fixed. Transparent on load, dark background after 80px scroll.
Logo left, nav links right, CTA button far right.

```tsx
// Links: Home | Results | Pricing | FAQ | Book a Call →
// On scroll: background transitions from transparent to void-2
// Mobile: hamburger → full screen overlay menu
```

---

## Footer
Minimal. Two lines.
```
Digivixo © 2025    |    hello@digivixo.com    |    Book a Call
```
Gold line above. Dark background. Centered.
