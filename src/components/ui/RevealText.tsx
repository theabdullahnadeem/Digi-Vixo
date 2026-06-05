'use client'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface RevealTextProps {
  children: React.ReactNode
  delay?: number
  className?: string
  trigger?: boolean
}

export default function RevealText({ children, delay = 0, className = '', trigger = true }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      if (trigger) {
        gsap.from(el, {
          yPercent: 110,
          duration: 1.0,
          delay,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        })
      } else {
        gsap.from(el, {
          yPercent: 110,
          duration: 1.0,
          delay,
          ease: 'power4.out',
        })
      }
    })

    return () => ctx.revert()
  }, [delay, trigger])

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={ref}>{children}</div>
    </div>
  )
}
