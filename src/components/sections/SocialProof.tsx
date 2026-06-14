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

        <style>{`
          .stats-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1px;
          }
          @media (min-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
        `}</style>

        <div
          style={{
            background: 'var(--void-border)',
            border: '1px solid var(--void-border)',
          }}
          className="stats-grid"
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

        {/* Testimonial Pull Quote */}
        <div
          style={{
            maxWidth: '800px',
            margin: '64px auto 32px',
            textAlign: 'center',
            position: 'relative',
            padding: '0 20px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '96px',
              lineHeight: 1,
              color: 'rgba(201,168,76,0.15)',
              position: 'absolute',
              top: '-48px',
              left: '50%',
              transform: 'translateX(-50%)',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            “
          </span>
          
          <p
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(20px, 3vw, 26px)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--cream)',
              lineHeight: 1.55,
              position: 'relative',
              zIndex: 1,
              marginBottom: '24px',
            }}
          >
            "The AI agent handled 90% of scheduling queries without a single human touch. The volume of tax consultations booked increased by 40% year-over-year, saving senior staff hours of administrative work."
          </p>
          
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            — Managing Partner · CPA Firm · Texas
          </p>
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
          Based on verified results from accounting firm client · 60-day average
        </p>
      </div>
    </section>
  )
}
