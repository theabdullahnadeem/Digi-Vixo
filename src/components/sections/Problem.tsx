'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import CountUp from '@/components/ui/CountUp'
import RevealText from '@/components/ui/RevealText'

const problems = [
  { stat: '62%', text: 'of voicemail callers never call back' },
  { stat: '3×', text: 'more likely to book with the firm that answered first' },
  { stat: '$0', text: 'revenue from a call that went to voicemail' },
]

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.problem-item', {
        opacity: 0,
        x: -24,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-items',
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from('.problem-image-wrap', {
        opacity: 0,
        scale: 0.96,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.problem-image-wrap',
          start: 'top 85%',
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
      style={{ background: 'var(--void)', borderTop: '1px solid var(--void-border)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          {/* Left */}
          <div>
            <RevealText className="mb-5">
              <p className="label" style={{ marginBottom: '0' }}>The Problem</p>
            </RevealText>

            <RevealText className="mb-10">
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(36px, 5.5vw, 76px)',
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                }}
              >
                Every missed call
                <span style={{ color: 'var(--gold)', display: 'block' }}>is revenue lost.</span>
              </h2>
            </RevealText>

            <RevealText className="mb-12">
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: 'clamp(14px, 1.3vw, 16px)',
                  lineHeight: 1.8,
                  color: 'var(--cream-muted)',
                  maxWidth: '440px',
                }}
              >
                Your phone system was built for a different era. After-hours calls
                go unanswered. Spike seasons overwhelm your front desk. Each voicemail
                is a prospect calling your competitor next.
              </p>
            </RevealText>

            {/* Problem stats */}
            <div className="problem-items" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="problem-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '20px 0',
                    borderBottom: '1px solid var(--void-border)',
                  }}
                >
                  <div
                    style={{
                      minWidth: '80px',
                      textAlign: 'right',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: 'clamp(28px, 3.5vw, 42px)',
                        fontWeight: 600,
                        color: i === 0 ? '#ef4444' : i === 1 ? 'var(--gold)' : 'var(--cream)',
                        lineHeight: 1,
                      }}
                    >
                      {p.stat}
                    </span>
                  </div>
                  <div
                    style={{
                      width: '1px',
                      height: '36px',
                      background: 'var(--void-border)',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '14px',
                      lineHeight: 1.5,
                      color: 'var(--cream-muted)',
                    }}
                  >
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            className="problem-image-wrap"
            style={{ position: 'relative' }}
          >
            {/* Main image */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                overflow: 'hidden',
                border: '1px solid var(--void-border)',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="Professional on phone"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(30%) brightness(0.6)' }}
                sizes="(max-width: 900px) 0px, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)' }} />

              {/* Overlay stat */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '32px',
                  left: '32px',
                  right: '32px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(64px, 9vw, 100px)',
                    fontWeight: 700,
                    color: '#ef4444',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                  }}
                >
                  62%
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    color: 'var(--cream-muted)',
                    marginTop: '8px',
                    letterSpacing: '0.05em',
                  }}
                >
                  of callers who reach voicemail never call back
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                background: 'var(--void-3)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '16px 20px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '32px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>
                $0
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: 'var(--cream-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>
                Revenue from missed calls
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
