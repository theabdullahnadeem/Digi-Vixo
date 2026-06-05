'use client'
import { useRef } from 'react'
import { gsap } from '@/lib/gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, href, className = '', onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
    const el = e.currentTarget
    el.style.background = 'transparent'
    el.style.color = 'var(--gold)'
  }

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center gap-3 px-8 py-4 border text-sm tracking-widest uppercase select-none transition-colors duration-300 ${className}`}
      style={{
        borderColor: 'var(--gold)',
        color: 'var(--gold)',
        fontFamily: 'var(--font-dm-sans), sans-serif',
        padding: '16px 32px',
        borderRadius: '8px',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--gold)'
        el.style.color = 'var(--void)'
      }}
    >
      {children}
    </a>
  )
}
