'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import CountUp from '@/components/ui/CountUp'

const stats = [
  {
    from: '32%',
    to: 5,
    suffix: '%',
    prefix: '',
    label: 'Missed Call Rate',
    sub: 'Down from 32%',
    color: '#22c55e',
  },
  {
    from: '0',
    to: 13,
    suffix: '%',
    prefix: '+',
    label: 'Revenue Increase',
    sub: 'Average per client',
    color: 'var(--gold)',
  },
  {
    from: '0',
    to: 48,
    suffix: 'hrs',
    prefix: '',
    label: 'Setup Time',
    sub: 'Discovery to live',
    color: 'var(--cream)',
  },
]

export default function SocialProof() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-card', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="social-proof"
      ref={sectionRef}
      style={{
        background: 'var(--void-2)',
        borderTop: '1px solid var(--void-border)',
        borderBottom: '1px solid var(--void-border)',
        padding: '80px 0',
      }}
    >
      <div className="container">
        {/* Eyebrow */}
        <p
          className="label"
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          Verified Client Results
        </p>
        <p
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(22px, 3vw, 32px)',
            fontWeight: 400,
            color: 'var(--cream-muted)',
            textAlign: 'center',
            fontStyle: 'italic',
            marginBottom: '56px',
          }}
        >
          What happens when every call gets answered.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--void-border)',
            border: '1px solid var(--void-border)',
          }}
          className="grid-cols-1"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{
                background: 'var(--void-3)',
                padding: '48px 40px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle top accent */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '2px',
                  background: stat.color,
                  opacity: 0.6,
                }}
              />

              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(56px, 7vw, 88px)',
                  fontWeight: 600,
                  lineHeight: 0.9,
                  color: stat.color,
                  marginBottom: '12px',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.prefix}
                <CountUp to={stat.to} suffix={stat.suffix} />
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: 'var(--cream)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '12px',
                  color: 'var(--cream-dim)',
                }}
              >
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Attribution */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '11px',
            color: 'var(--cream-dim)',
            textAlign: 'center',
            marginTop: '20px',
            letterSpacing: '0.05em',
          }}
        >
          Based on anonymised data from CPA firm clients in US & UK · 60-day averages
        </p>
      </div>
    </section>
  )
}
