'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const caseStudy = {
  slug: 'ai-calling-agent-deployment',
  category: 'AI',
  industry: 'Professional Services / Accounting',
  label: 'Verified Results — Client Name Withheld',
  title: 'AI Calling Agent Deployment',
  problem: 'Accounting firm losing 32% of inbound calls to voicemail during tax season.',
  metric: '5%',
  metricLabel: 'Missed call rate (down from 32%)',
  secondary: '+13% Revenue',
  timeline: '60 days',
  tags: ['AI', 'Calling Agent', 'Revenue Recovery'],
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
}

export default function CaseStudiesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-study-card', {
        opacity: 0,
        y: 45,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.case-studies-container',
          start: 'top 85%',
          once: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)' }}>
      {/* Hero */}
      <section
        style={{
          minHeight: '72vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '128px 0 80px',
          borderBottom: '1px solid var(--void-border)',
        }}
      >
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Proven Results
            </p>
          </RevealText>
          <RevealText>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(56px, 8vw, 110px)',
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: '24px',
                paddingBottom: '40px',
              }}
            >
              Case Studies
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Featured Card */}
      <section className="case-studies-container" style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div
            className="case-study-card featured-case-grid premium-card"
            style={{
              border: '1px solid rgba(201,168,76,0.4)',
              padding: '48px',
              background: 'rgba(201,168,76,0.02)',
              position: 'relative',
              borderRadius: '16px',
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '40px',
            }}
          >
            {/* Left Column: Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--void-border)' }}>
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                style={{ objectFit: 'cover', filter: 'grayscale(25%) brightness(0.65)', transition: 'transform 0.5s' }}
                sizes="(max-width: 991px) 100vw, 50vw"
                className="case-image"
                priority
              />
            </div>

            {/* Right Column: Content */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Verified Results Badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#1A56DB',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    marginBottom: '24px',
                  }}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '0.15em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                    }}
                  >
                    Verified Results
                  </span>
                </div>

                <RevealText className="mb-2">
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                    {caseStudy.label}
                  </p>
                </RevealText>
                
                <RevealText className="mb-4">
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-dim)' }}>
                    {caseStudy.industry} · {caseStudy.timeline}
                  </p>
                </RevealText>
                
                <RevealText className="mb-4">
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 'clamp(28px, 3.5vw, 42px)',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      lineHeight: 1.15,
                    }}
                  >
                    <Link href={`/case-studies/${caseStudy.slug}`} style={{ color: 'var(--cream)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream)'}>
                      {caseStudy.title}
                    </Link>
                  </h3>
                </RevealText>
                
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--cream-muted)', marginBottom: '32px' }}>
                  {caseStudy.problem}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '40px', marginBottom: '32px' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(44px, 6vw, 68px)', fontWeight: 600, lineHeight: 1, color: 'var(--cream)' }}>
                      {caseStudy.metric}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-muted)', letterSpacing: '0.1em', marginTop: '4px', textTransform: 'uppercase' }}>
                      {caseStudy.metricLabel}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '24px', fontWeight: 500, color: 'var(--gold)' }}>
                      {caseStudy.secondary}
                    </p>
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-dim)', letterSpacing: '0.1em', marginTop: '4px', textTransform: 'uppercase' }}>
                      Revenue Recovery
                    </p>
                  </div>
                </div>

                <MagneticButton href={`/case-studies/${caseStudy.slug}`}>Read Case Study →</MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Notice */}
      <section style={{ padding: '0 0 128px' }}>
        <div className="container">
          <div
            style={{
              border: '1px dashed var(--void-border)',
              borderRadius: '12px',
              padding: '48px 24px',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.01)',
              maxWidth: '800px',
              margin: '40px auto 0',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(20px, 3vw, 26px)',
                color: 'var(--cream-muted)',
                fontStyle: 'italic',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              More case studies being published — results from current clients in Q3 2025
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                color: 'var(--cream-dim)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '16px',
                marginBottom: 0,
              }}
            >
              Documenting voice agent deployments for CPA and accounting firms in the US and UK
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .featured-case-grid {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
        .case-study-card:hover .case-image {
          transform: scale(1.03) !important;
        }
      `}</style>
    </div>
  )
}
