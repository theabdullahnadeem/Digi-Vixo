'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import MagneticButton from '@/components/ui/MagneticButton'
import DashboardMockup from '@/components/ui/DashboardMockup'

export default function Hero({ ready }: { ready: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ready) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

      tl.from('.hero-tag', { opacity: 0, y: 12, duration: 0.6, ease: 'power3.out' })
      tl.from(
        '.hero-line',
        { yPercent: 110, duration: 1.2, stagger: 0.1, ease: 'power4.out' },
        '-=0.3'
      )
      tl.from(
        '.hero-sub',
        { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      tl.from(
        '.hero-ctas',
        { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      )
      tl.from(
        '.hero-mockup',
        { opacity: 0, x: 40, duration: 1.0, ease: 'power3.out' },
        '-=0.9'
      )
      tl.from(
        '.hero-scroll',
        { opacity: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [ready])

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--void)',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/sections/hero_bg.png"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.18 }}
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.85) 55%, rgba(8,8,8,0.5) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 20% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to top, var(--void) 0%, transparent 100%)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div
        className="container hero-grid"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          paddingTop: '60px',
          paddingBottom: '60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        {/* Left: copy */}
        <div>
          {/* Tag */}
          <div
            className="hero-tag"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '36px',
              padding: '6px 14px 6px 6px',
              border: '1px solid rgba(201,168,76,0.25)',
              background: 'rgba(201,168,76,0.06)',
            }}
          >
            <span
              style={{
                background: 'var(--gold)',
                color: 'var(--void)',
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '3px 8px',
              }}
            >
              New
            </span>
            <span
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--cream-muted)',
              }}
            >
              AI Calling Infrastructure for Accounting Firms
            </span>
          </div>

          {/* Headline */}
          <div style={{ marginBottom: '28px' }}>
            {['Your Phones', 'Are Losing', 'You Money.'].map((line, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <h1
                  className="hero-line"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(32px, 7.5vw, 120px)',
                    fontWeight: 700,
                    lineHeight: 0.93,
                    letterSpacing: '-0.02em',
                    color: i === 2 ? 'var(--gold)' : 'var(--cream)',
                    display: 'block',
                  }}
                >
                  {line}
                </h1>
              </div>
            ))}
          </div>

          {/* Subtext */}
          <p
            className="hero-sub"
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: 'clamp(14px, 1.3vw, 17px)',
              lineHeight: 1.75,
              color: 'var(--cream-muted)',
              maxWidth: '460px',
              marginBottom: '44px',
            }}
          >
            We build AI calling agents that answer every call, qualify leads,
            and book appointments — 24/7. No downtime. No missed revenue.
            Fully managed.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', marginBottom: '48px' }}
          >
            <MagneticButton href="/contact">Book a Free Call →</MagneticButton>
            <a
              href="#social-proof"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--cream-muted)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cream)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream-muted)')}
            >
              See Results ↓
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="hero-trust-strip"
            style={{
              display: 'flex',
              gap: '28px',
              alignItems: 'center',
              paddingTop: '28px',
              borderTop: '1px solid var(--void-border)',
            }}
          >
            {[
              { v: '5%', l: 'Missed Call Rate' },
              { v: '+13%', l: 'Revenue Increase' },
              { v: '48hr', l: 'Setup Time' },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 600, color: 'var(--cream)', lineHeight: 1 }}>
                  {s.v}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: 'var(--cream-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div
          className="hero-mockup"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Glow behind mockup */}
          <div
            style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <DashboardMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.5))',
          }}
        />
      </div>

      {/* Mobile: stack */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-mockup { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-trust-strip {
            flex-wrap: wrap !important;
            gap: 16px 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
