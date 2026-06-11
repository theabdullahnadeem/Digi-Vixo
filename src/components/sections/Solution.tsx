'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const features = [
  { icon: '⚡', text: 'Answers in under 2 seconds' },
  { icon: '🔄', text: 'Works 24/7 including weekends and tax season' },
  { icon: '🎯', text: 'Custom-trained on your firm\'s specific services' },
  { icon: '📊', text: 'Full call logs and analytics dashboard' },
  { icon: '🔧', text: 'No infrastructure changes on your end' },
]

function PhoneAnimation() {
  const barsRef = useRef<(SVGRectElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar, i) => {
        if (!bar) return
        gsap.to(bar, {
          scaleY: 0.15 + Math.random() * 0.85,
          duration: 0.3 + Math.random() * 0.4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.04,
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div style={{ padding: '0 0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: 'var(--cream-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>
            Current Call
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--cream)', fontWeight: 500 }}>
            +1 (312) 555-0147
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ position: 'relative', width: '8px', height: '8px' }}>
            <div className="live-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', position: 'relative', zIndex: 1 }} />
          </div>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: '#22c55e', letterSpacing: '0.1em' }}>
            AI Handling
          </span>
        </div>
      </div>

      <svg viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', marginBottom: '16px' }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <rect
            key={i}
            ref={(el) => { barsRef.current[i] = el }}
            x={i * 8 + 1}
            y="15"
            width="5"
            height="30"
            rx="2"
            fill="#C9A84C"
            opacity="0.8"
            style={{ transformOrigin: '50% 50%' }}
          />
        ))}
      </svg>

      <div style={{ display: 'flex', gap: '8px' }}>
        {['Greeting', 'Qualifying', 'Booking', 'Confirming'].map((step, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              padding: '5px 0',
              textAlign: 'center',
              background: i === 2 ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === 2 ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '8px', color: i === 2 ? 'var(--gold)' : 'var(--cream-dim)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {step}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-row', {
        opacity: 0,
        x: -16,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.features-list',
          start: 'top 82%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-pad"
      style={{ background: 'var(--void-2)', borderTop: '1px solid var(--void-border)' }}
    >
      <div className="container">
        <div className="solution-grid">
          {/* Left: visual */}
          <div style={{ position: 'relative' }}>
            {/* Background image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', border: '1px solid var(--void-border)' }}>
              <Image
                src="/images/sections/solution_bg.png"
                alt="AI Calling Agent wave visualization"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center', filter: 'grayscale(20%) brightness(0.4)' }}
                sizes="(max-width: 900px) 0px, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.4) 100%)' }} />
            </div>

            {/* Floating call card */}
            <div className="solution-call-card">
              <PhoneAnimation />
            </div>

            {/* Corner badge */}
            <div className="solution-corner-badge">
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 600, color: 'var(--void)', lineHeight: 1 }}>
                24/7
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'rgba(8,8,8,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                Always On
              </p>
            </div>
          </div>

          {/* Right: copy */}
          <div style={{ paddingTop: '40px' }}>
            <RevealText className="mb-5">
              <p className="label">The Solution</p>
            </RevealText>

            {['An AI Agent That Never', 'Misses a Call.'].map((line, i) => (
              <RevealText key={i} delay={i * 0.1}>
                <h2
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(34px, 5vw, 68px)',
                    fontWeight: 600,
                    lineHeight: 0.97,
                    letterSpacing: '-0.01em',
                    color: i === 1 ? 'var(--gold)' : 'var(--cream)',
                    display: 'block',
                  }}
                >
                  {line}
                </h2>
              </RevealText>
            ))}

            <RevealText className="mt-8 mb-10">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  lineHeight: 1.8,
                  color: 'var(--cream-muted)',
                  maxWidth: '460px',
                }}
              >
                We deploy a custom AI calling agent on your existing phone number.
                It answers instantly, qualifies every caller, books appointments,
                and hands off to you only when necessary — with a full briefing.
              </p>
            </RevealText>

            <div className="features-list" style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
              {features.map((f, i) => (
                <div
                  key={i}
                  className="feature-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--void-border)',
                  }}
                >
                  <span style={{ fontSize: '14px', flexShrink: 0, opacity: 0.8 }}>{f.icon}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: 'var(--cream-muted)',
                    }}
                  >
                    {f.text}
                  </span>
                  <span style={{ marginLeft: 'auto', color: 'var(--gold)', fontSize: '12px', flexShrink: 0 }}>→</span>
                </div>
              ))}
            </div>

            <MagneticButton href="/contact">See It In Action →</MagneticButton>
          </div>
        </div>
      </div>
      <style>{`
        .solution-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (min-width: 900px) {
          .solution-grid {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
          }
        }
        .solution-call-card {
          position: absolute;
          bottom: -24px;
          left: 12px;
          right: 12px;
          background: rgba(15,15,15,0.97);
          border: 1px solid rgba(201,168,76,0.25);
          padding: 16px 20px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.6);
          backdrop-filter: blur(20px);
          z-index: 10;
        }
        @media (min-width: 640px) {
          .solution-call-card {
            left: -24px;
            right: 40px;
            padding: 20px 24px;
          }
        }
        .solution-corner-badge {
          position: absolute;
          top: -16px;
          right: 0px;
          background: var(--gold);
          padding: 10px 12px;
          z-index: 10;
        }
        @media (min-width: 640px) {
          .solution-corner-badge {
            right: -16px;
            padding: 12px 16px;
          }
        }
      `}</style>
    </section>
  )
}
