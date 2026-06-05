'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'

export default function GoldLine({ vertical = false, className = '' }: { vertical?: boolean; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        [vertical ? 'scaleY' : 'scaleX']: 0,
        duration: 1.2,
        ease: 'power3.out',
        transformOrigin: vertical ? 'top' : 'left',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [vertical])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        background: 'var(--gold)',
        opacity: 0.4,
        ...(vertical ? { width: '1px', height: '100%' } : { height: '1px', width: '100%' }),
      }}
    />
  )
}
