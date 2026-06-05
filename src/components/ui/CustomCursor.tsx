'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const xTo = gsap.quickTo(dotRef.current, 'x', { duration: 0.1 })
    const yTo = gsap.quickTo(dotRef.current, 'y', { duration: 0.1 })
    const xToRing = gsap.quickTo(ringRef.current, 'x', { duration: 0.5, ease: 'power3.out' })
    const yToRing = gsap.quickTo(ringRef.current, 'y', { duration: 0.5, ease: 'power3.out' })

    const move = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
      xToRing(e.clientX)
      yToRing(e.clientY)
    }

    const grow = () => gsap.to(ringRef.current, { scale: 2.5, duration: 0.3 })
    const shrink = () => gsap.to(ringRef.current, { scale: 1, duration: 0.3 })

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, [data-cursor-grow]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <div className="custom-cursor">
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: '8px',
          height: '8px',
          background: 'var(--gold)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          width: '32px',
          height: '32px',
          border: '1px solid var(--gold)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
        }}
      />
    </div>
  )
}
