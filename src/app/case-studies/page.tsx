'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const caseStudies = [
  {
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
    highlight: true,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    slug: 'ecommerce-replatforming',
    category: 'Web/SaaS',
    industry: 'E-commerce',
    label: 'Case Study',
    title: 'E-Commerce Replatforming',
    problem: 'Legacy platform causing poor conversion and slow page speeds.',
    metric: '34%',
    metricLabel: 'Conversion rate increase',
    secondary: '60% faster',
    timeline: '90 days',
    tags: ['Web/SaaS', 'E-commerce'],
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    slug: 'saas-architecture-overhaul',
    category: 'Web/SaaS',
    industry: 'SaaS',
    label: 'Case Study',
    title: 'SaaS Architecture Overhaul',
    problem: 'Monolithic architecture blocking deployment velocity and scale.',
    metric: '80%',
    metricLabel: 'Faster deployments',
    secondary: '5x user growth',
    timeline: '120 days',
    tags: ['Web/SaaS'],
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&q=80',
  },
  {
    slug: 'ai-inventory-automation',
    category: 'AI',
    industry: 'Logistics',
    label: 'Case Study',
    title: 'AI Inventory Automation',
    problem: 'Manual inventory processes causing stockouts and anomalies.',
    metric: '40%',
    metricLabel: 'Processing time reduction',
    secondary: 'Zero anomalies',
    timeline: '45 days',
    tags: ['AI'],
    comingSoon: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
]

const filters = ['All', 'Web/SaaS', 'AI', 'E-commerce']

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const containerRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeFilter === 'All'
      ? caseStudies
      : caseStudies.filter((cs) => cs.tags.includes(activeFilter))

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-study-card', {
        opacity: 0,
        y: 45,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.case-studies-grid',
          start: 'top 85%',
          once: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [activeFilter])

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

      {/* Filters */}
      <div
        className="container"
        style={{
          paddingTop: '40px',
          paddingBottom: '0',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '8px 20px',
              borderRadius: '8px',
              border: `1px solid ${activeFilter === f ? 'var(--gold)' : 'var(--void-border)'}`,
              background: activeFilter === f ? 'rgba(201,168,76,0.1)' : 'transparent',
              color: activeFilter === f ? 'var(--gold)' : 'var(--cream-muted)',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards */}
      <section style={{ padding: '0 0 128px' }}>
        <div className="container">
          <div className="case-studies-grid grid grid-cols-1 md:grid-cols-2" style={{ gap: '40px' }}>
            {filtered.map((cs, i) => (
              <div
                key={i}
                className="case-study-card premium-card"
                style={{
                  border: `1px solid ${cs.highlight ? 'rgba(201,168,76,0.4)' : 'var(--void-border)'}`,
                  padding: '40px',
                  background: cs.highlight ? 'rgba(201,168,76,0.02)' : 'var(--void-2)',
                  position: 'relative',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {cs.comingSoon && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        fontFamily: 'var(--font-dm-sans), sans-serif',
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--cream-dim)',
                        border: '1px solid var(--void-border)',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        zIndex: 2,
                      }}
                    >
                      Coming Soon
                    </span>
                  )}

                  {/* Card Cover Image */}
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', marginBottom: '24px', borderRadius: '8px', border: '1px solid var(--void-border)' }}>
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      style={{ objectFit: 'cover', filter: 'grayscale(25%) brightness(0.65)', transition: 'transform 0.5s' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="case-image"
                    />
                  </div>

                  <RevealText className="mb-2">
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: cs.highlight ? 'var(--gold)' : 'var(--cream-muted)' }}>
                      {cs.label}
                    </p>
                  </RevealText>
                  <RevealText className="mb-4">
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-dim)' }}>
                      {cs.industry} · {cs.timeline}
                    </p>
                  </RevealText>
                  <RevealText className="mb-4">
                    <h3
                      style={{
                        fontFamily: 'var(--font-cormorant), serif',
                        fontSize: 'clamp(22px, 3vw, 32px)',
                        fontWeight: 500,
                        color: 'var(--cream)',
                        lineHeight: 1.2,
                      }}
                    >
                      <Link href={`/case-studies/${cs.slug}`} style={{ color: 'var(--cream)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream)'}>
                        {cs.title}
                      </Link>
                    </h3>
                  </RevealText>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'var(--cream-muted)', marginBottom: '32px' }}>
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '40px', marginBottom: '32px' }}>
                    <div>
                      <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 600, lineHeight: 1, color: 'var(--cream)' }}>
                        {cs.metric}
                      </p>
                      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-muted)', letterSpacing: '0.1em', marginTop: '4px' }}>
                        {cs.metricLabel}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                      <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 500, color: 'var(--gold)' }}>
                        {cs.secondary}
                      </p>
                    </div>
                  </div>

                  <MagneticButton href={`/case-studies/${cs.slug}`}>Read Case Study →</MagneticButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .case-study-card:hover .case-image {
          transform: scale(1.05) !important;
        }
      `}</style>
    </div>
  )
}
