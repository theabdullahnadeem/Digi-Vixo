'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on bg image
      gsap.to('.cta-bg-img', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        borderTop: '1px solid var(--void-border)',
      }}
    >
      {/* Background */}
      <div className="cta-bg-img" style={{ position: 'absolute', inset: '-20%', zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
          alt=""
          fill
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.15 }}
          sizes="100vw"
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--void-2) 0%, rgba(8,8,8,0.7) 40%, rgba(8,8,8,0.7) 60%, var(--void) 100%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)', zIndex: 0 }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 48px' }}>
        <RevealText className="mb-6">
          <p className="label" style={{ textAlign: 'center' }}>One Decision Away</p>
        </RevealText>

        <div style={{ marginBottom: '32px' }}>
          {['Stop Losing', 'Calls.'].map((line, i) => (
            <RevealText key={i} delay={i * 0.12}>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(36px, 11vw, 160px)',
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: '-0.025em',
                  color: i === 1 ? 'var(--gold)' : 'var(--cream)',
                  display: 'block',
                }}
              >
                {line}
              </h2>
            </RevealText>
          ))}
        </div>

        <RevealText delay={0.3}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              lineHeight: 1.75,
              color: 'var(--cream-muted)',
              maxWidth: '540px',
              margin: '0 auto 48px',
            }}
          >
            Every unanswered call is revenue walking out the door. Book a free
            20-minute call — we'll show you exactly what you're losing and how
            to recover it.
          </p>
        </RevealText>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <MagneticButton href="/contact">Book Your Free Call →</MagneticButton>
        </div>

        <RevealText delay={0.5}>
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--cream-dim)',
            }}
          >
            No commitment · No sales pressure · Just clarity.
          </p>
        </RevealText>

        {/* Bottom divider with trust badges */}
        <div className="cta-badges">
          {['48hr Setup', 'No Contracts', 'Fully Managed', 'Cancel Anytime'].map((badge) => (
            <div key={badge} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', opacity: 0.6 }} />
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-muted)',
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .cta-badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 60px;
          padding-top: 32px;
          border-top: 1px solid var(--void-border);
          flex-wrap: wrap;
        }
        @media (min-width: 640px) {
          .cta-badges {
            gap: 40px;
            margin-top: 80px;
            padding-top: 40px;
          }
        }
      `}</style>
    </section>
  )
}
