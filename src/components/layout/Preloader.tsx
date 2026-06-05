'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const topPanelRef = useRef<HTMLDivElement>(null)
  const bottomPanelRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ onComplete })

    const counter = { val: 0 }
    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.val).toString()
        }
      },
    })

    tl.to({}, { duration: 0.2 })

    tl.to(
      topPanelRef.current,
      { yPercent: -100, duration: 1.0, ease: 'power4.inOut' },
      '+=0.1'
    )
    tl.to(
      bottomPanelRef.current,
      { yPercent: 100, duration: 1.0, ease: 'power4.inOut' },
      '<'
    )

    return () => { tl.kill() }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">
      <div
        ref={topPanelRef}
        className="flex-1 flex items-end justify-start px-12 pb-8"
        style={{ background: 'var(--void)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Digivixo
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          ref={counterRef}
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(80px, 20vw, 200px)',
            lineHeight: 1,
            color: 'var(--cream)',
            userSelect: 'none',
          }}
        >
          0
        </span>
      </div>

      <div
        ref={bottomPanelRef}
        className="flex-1 flex items-start justify-end px-12 pt-8"
        style={{ background: 'var(--void)' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--cream-muted)',
          }}
        >
          Loading
        </span>
      </div>
    </div>
  )
}
