# Preloader & Smooth Scroll

## Preloader Behavior (reference: abdullahpk.site)

### Flow
1. Page loads → Preloader covers entire screen
2. Counter counts 0 → 100 (duration ~2s, eased)
3. At 100: brief pause (200ms)
4. Preloader splits/slides out (top half up, bottom half down) OR wipes up
5. Page content animates in underneath

### Preloader Component
```tsx
// src/components/layout/Preloader.tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const topPanelRef = useRef<HTMLDivElement>(null)
  const bottomPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete()
      }
    })

    // Count up
    tl.to(counterRef.current, {
      innerHTML: 100,
      duration: 2,
      ease: 'power2.inOut',
      snap: { innerHTML: 1 },
      roundProps: 'innerHTML',
    })

    // Brief hold
    tl.to({}, { duration: 0.2 })

    // Split exit — top panel goes up, bottom goes down
    tl.to(topPanelRef.current, {
      yPercent: -100,
      duration: 1.0,
      ease: 'power4.inOut',
    }, '+=0.1')

    tl.to(bottomPanelRef.current, {
      yPercent: 100,
      duration: 1.0,
      ease: 'power4.inOut',
    }, '<') // same time as top

  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col">
      {/* Top panel */}
      <div ref={topPanelRef} className="flex-1 bg-void flex items-end justify-start px-12 pb-8">
        <span className="font-label text-gold text-sm tracking-widest uppercase">
          Digivixo
        </span>
      </div>

      {/* Counter in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          ref={counterRef}
          className="font-display text-[20vw] text-cream leading-none select-none"
        >
          0
        </span>
      </div>

      {/* Bottom panel */}
      <div ref={bottomPanelRef} className="flex-1 bg-void flex items-start justify-end px-12 pt-8">
        <span className="font-label text-cream-muted text-sm tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  )
}
```

### Usage in Layout
```tsx
// src/app/layout.tsx
'use client'
import { useState } from 'react'
import Preloader from '@/components/layout/Preloader'

export default function RootLayout({ children }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <html>
      <body>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
        <main style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
```

---

## Lenis Smooth Scroll

### Setup
```tsx
// src/components/layout/SmoothScroll.tsx
'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    // Connect Lenis to GSAP ticker
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
```

### Wrap in layout
```tsx
// layout.tsx
<SmoothScroll>
  {children}
</SmoothScroll>
```

---

## Page Entry Animation (after preloader)

After preloader fires `onComplete`, trigger the hero entry:
```ts
// In Hero.tsx, watch for a `ready` prop
useEffect(() => {
  if (!ready) return
  const tl = gsap.timeline()
  tl.from('.hero-line', {
    yPercent: 110,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out',
  })
  tl.from('.hero-sub', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out',
  }, '-=0.6')
}, [ready])
```
