'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    body: 'We learn your call patterns, peak hours, common inquiries, and booking workflow. No technical knowledge required from you.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    detail: '30-minute session · Zero prep needed',
  },
  {
    num: '02',
    title: 'Build & Configure',
    body: "We build your AI agent, train it on your firm's services, test it across hundreds of scenarios, and integrate it with your existing number.",
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80',
    detail: 'Fully managed · You review & approve',
  },
  {
    num: '03',
    title: 'Go Live & Optimize',
    body: 'Your agent goes live. You watch revenue recover on your dashboard. We monitor and optimize performance weekly.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    detail: 'Live within 48 hours · Weekly reports',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      steps.forEach((_, i) => {
        gsap.from(`.step-${i}`, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.step-${i}`,
            start: 'top 82%',
            once: true,
          },
        })
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '72px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <RevealText className="mb-4">
              <p className="label">The Process</p>
            </RevealText>
            <RevealText>
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 'clamp(36px, 5vw, 72px)',
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                }}
              >
                Live in 48 hours.
              </h2>
            </RevealText>
          </div>
          <MagneticButton href="/contact">Start Today →</MagneticButton>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              className={`step-${i}`}
              style={{
                border: '1px solid var(--void-border)',
                overflow: 'hidden',
                background: 'var(--void-2)',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  style={{ objectFit: 'cover', filter: 'grayscale(30%) brightness(0.5)', transition: 'transform 0.6s ease, filter 0.4s' }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.8) 100%)' }} />
                {/* Step number overlay */}
                <div style={{ position: 'absolute', bottom: '16px', left: '20px' }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '56px',
                      fontWeight: 700,
                      color: 'var(--gold)',
                      opacity: 0.6,
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px' }}>
                <div style={{ height: '2px', width: '32px', background: 'var(--gold)', opacity: 0.5, marginBottom: '16px' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 'clamp(22px, 2.5vw, 30px)',
                    fontWeight: 500,
                    color: 'var(--cream)',
                    marginBottom: '10px',
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    color: 'var(--cream-muted)',
                    marginBottom: '20px',
                  }}
                >
                  {step.body}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    color: 'var(--gold)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
