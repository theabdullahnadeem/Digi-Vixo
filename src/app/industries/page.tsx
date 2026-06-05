'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const industries = [
  {
    title: 'Professional Services (CPA/Accounting)',
    subtitle: 'AI calling, appointment automation, missed call recovery',
    highlight: true,
    pains: [
      'Tax season call spikes overflow front desk capacity',
      '62% of voicemail callers never call back',
      'After-hours calls go unanswered indefinitely',
    ],
    solution: 'We deploy a fully managed AI calling agent on your existing number. It answers 24/7, qualifies every caller, and books appointments — so you never lose a prospect to voicemail again.',
    metric: '5% missed call rate (down from 32%)',
    image: 'https://images.unsplash.com/photo-1542744173-8e0ee268cfec?w=800&q=80',
  },
  {
    title: 'SaaS Startups',
    subtitle: 'Scalable MVPs and cloud architectures',
    highlight: false,
    pains: [
      'Need to ship fast without accruing technical debt',
      'Scaling bottlenecks as user base grows',
      'Complex third-party integrations slowing velocity',
    ],
    solution: 'We build scalable SaaS architectures from the ground up — or refactor your existing system to handle 10x growth. TypeScript, cloud-native, production-ready.',
    metric: '80% faster deployment cycles',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  },
  {
    title: 'E-commerce Brands',
    subtitle: 'Headless Shopify storefronts',
    highlight: false,
    pains: [
      'Slow page speeds killing conversion rates',
      'Platform limitations blocking custom features',
      'Poor mobile experience losing mobile-first buyers',
    ],
    solution: 'We build headless Shopify storefronts that load in under 2 seconds, convert at industry-leading rates, and give you full control over the customer experience.',
    metric: '34% conversion rate increase',
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80',
  },
  {
    title: 'Healthcare & MedTech',
    subtitle: 'HIPAA-compliant portals',
    highlight: false,
    pains: [
      'Patient data security and compliance requirements',
      'Outdated scheduling and intake workflows',
      'Fragmented systems across care touchpoints',
    ],
    solution: 'HIPAA-compliant portals, secure patient communication systems, and appointment automation built for the regulatory realities of healthcare.',
    metric: 'Zero compliance incidents',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
  },
  {
    title: 'Logistics & Operations',
    subtitle: 'Inventory and tracking automation',
    highlight: false,
    pains: [
      'Manual inventory processes causing stockouts',
      'Lack of real-time visibility across the supply chain',
      'Reporting that lags operational reality by days',
    ],
    solution: 'AI-powered inventory management, real-time tracking dashboards, and automation systems that eliminate manual intervention and surface anomalies instantly.',
    metric: '40% processing time reduction',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
  },
]

export default function IndustriesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.industry-section').forEach((section) => {
        gsap.from(section.querySelectorAll('.animate-fade-in'), {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            once: true,
          },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)' }}>
      {/* Hero */}
      <section style={{ minHeight: '72vh', display: 'flex', alignItems: 'flex-end', padding: '160px 0 96px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Sectors We Serve
            </p>
          </RevealText>
          <RevealText>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '24px' }}>
              Industries
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Industries list with alternating layout */}
      {industries.map((industry, i) => {
        const textCol = (
          <div key="text" className="animate-fade-in flex flex-col justify-center">
            <RevealText className="mb-2">
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: industry.highlight ? 'var(--gold)' : 'var(--cream-muted)' }}>
                {industry.subtitle}
              </p>
            </RevealText>
            <RevealText className="mb-6">
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 600, lineHeight: 1.1, color: 'var(--cream)' }}>
                {industry.title}
              </h2>
            </RevealText>

            <div style={{ marginBottom: '36px' }}>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-dim)', marginBottom: '16px', fontWeight: 600 }}>
                Common Pain Points
              </p>
              {industry.pains.map((pain, j) => (
                <div key={j} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--void-border)' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '12px', flexShrink: 0, marginTop: '2px' }}>→</span>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.6, color: 'var(--cream-muted)' }}>{pain}</p>
                </div>
              ))}
            </div>
          </div>
        )

        const visualCol = (
          <div key="visual" className="animate-fade-in flex flex-col gap-6 w-full">
            {/* Visual Panel Cover Image */}
            <div className="industry-image-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', borderRadius: '12px', border: `1px solid ${industry.highlight ? 'rgba(201,168,76,0.3)' : 'var(--void-border)'}` }}>
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                style={{ objectFit: 'cover', filter: 'grayscale(20%) brightness(0.65)', transition: 'transform 0.6s ease-in-out' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="industry-image"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 100%)' }} />
            </div>

            <div
              style={{
                border: `1px solid ${industry.highlight ? 'rgba(201,168,76,0.3)' : 'var(--void-border)'}`,
                borderRadius: '12px',
                padding: '36px',
                background: industry.highlight ? 'rgba(201,168,76,0.02)' : 'var(--void-3)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '12px', fontWeight: 600 }}>
                What We Do
              </p>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--cream-muted)', marginBottom: '24px' }}>
                {industry.solution}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ width: '2px', height: '32px', background: 'var(--gold)', opacity: 0.5 }} />
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', fontWeight: 500, color: 'var(--cream)', fontStyle: 'italic' }}>
                  {industry.metric}
                </p>
              </div>

              <div style={{ alignSelf: 'flex-start' }}>
                <MagneticButton href="/contact">Start a Conversation →</MagneticButton>
              </div>
            </div>
          </div>
        )

        return (
          <section
            key={i}
            className="industry-section py-20 md:py-32"
            style={{
              background: i % 2 === 0 ? 'var(--void)' : 'var(--void-2)',
              borderBottom: '1px solid var(--void-border)',
            }}
          >
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                {i % 2 === 0 ? (
                  <>
                    {textCol}
                    {visualCol}
                  </>
                ) : (
                  <>
                    {visualCol}
                    {textCol}
                  </>
                )}
              </div>
            </div>
          </section>
        )
      })}

      <style>{`
        .industry-image-wrap:hover .industry-image {
          transform: scale(1.06) !important;
        }
      `}</style>
    </div>
  )
}
