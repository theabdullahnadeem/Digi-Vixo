'use client'
import { useRef, useEffect } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function CountUp({ to, suffix = '', prefix = '', duration = 2, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const counter = { val: 0 }
          gsap.to(counter, {
            val: to,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = prefix + Math.round(counter.val) + suffix
            },
          })
        },
      })
    })

    return () => ctx.revert()
  }, [to, suffix, prefix, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
