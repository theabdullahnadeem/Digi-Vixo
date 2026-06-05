'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'
import GoldLine from '@/components/ui/GoldLine'

const projectPricing = [
  { service: 'Starter Business Website', from: '$1,500' },
  { service: 'E-commerce & Shopify', from: '$2,500' },
  { service: 'Custom Web Applications', from: '$5,000' },
  { service: 'Custom SaaS Platforms', from: '$10,000' },
  { service: 'AI & Automation Systems', from: '$2,000' },
]

const callingPlans = [
  {
    name: 'Standard Answering',
    price: '$1,500',
    period: '/ month',
    minutes: '6,000 minutes',
    features: ['Real-time call transcripts', '24/7 phone coverage', 'Weekly prompt tuning', '48-hour onboarding', 'Custom CPA database training'],
    popular: false,
    badge: 'Starter Firm'
  },
  {
    name: 'Pro Peak Season',
    badge: '★ Most Popular',
    price: '$2,200',
    period: '/ month',
    minutes: '10,000 minutes',
    features: ['Everything in Standard', 'Priority support routing', 'Spike season queue handler', 'Instant model failovers', 'Advanced custom API hooks'],
    popular: true,
  },
]

const comparisonData = [
  { metric: 'Answering Speed', human: '15 - 20s (or voicemail)', ai: 'Under 1.5 seconds', accent: true },
  { metric: 'Coverage Availability', human: '40 hours / week', ai: '24 / 7 / 365', accent: true },
  { metric: 'Capacity Limit', human: '1 call at a time', ai: 'Infinite concurrent queues', accent: false },
  { metric: 'Transcription accuracy', human: 'Manual notes (fragmented)', ai: '99.8% database perfect', accent: false },
  { metric: 'Average Monthly Cost', human: '$3,500+ (plus overhead)', ai: 'From $1,500 (flat rate)', accent: true },
]

export default function PricingPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger AI plans
      gsap.from('.calling-plan-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.calling-plans-grid',
          start: 'top 80%',
          once: true,
        },
      })

      // Comparison table fade
      gsap.from('.comparison-section', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.comparison-section',
          start: 'top 80%',
          once: true,
        },
      })

      // Stagger project works rows
      gsap.from('.project-price-row', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.project-pricing-list',
          start: 'top 80%',
          once: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)', position: 'relative' }}>
      
      {/* Hero */}
      <section style={{ minHeight: '72vh', display: 'flex', alignItems: 'flex-end', padding: '160px 0 96px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Transparent Pricing
            </p>
          </RevealText>
          <RevealText>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '24px' }}>
              Pricing
            </h1>
          </RevealText>
        </div>
      </section>

      {/* AI Calling Plans */}
      <section style={{ padding: '128px 0', borderBottom: '1px solid var(--void-border)', position: 'relative' }}>
        
        {/* Backdrop gold ambient light */}
        <div 
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,168,76,0.035) 0%, transparent 75%)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Flagship Product
            </p>
          </RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1 }}>
              AI Calling — Monthly Plans
            </h2>
          </RevealText>

          <div className="calling-plans-grid grid grid-cols-1 md:grid-cols-2 gap-8" style={{ zIndex: 1, position: 'relative' }}>
            {callingPlans.map((plan, i) => (
              <div
                key={i}
                className="calling-plan-card premium-card"
                style={{
                  border: `1px solid ${plan.popular ? 'rgba(201,168,76,0.4)' : 'var(--void-border)'}`,
                  padding: '48px 40px',
                  background: plan.popular ? 'rgba(201,168,76,0.02)' : 'var(--void-2)',
                  boxShadow: plan.popular ? '0 0 40px rgba(201,168,76,0.06)' : 'none',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {plan.badge && (
                    <span style={{ display: 'inline-block', borderRadius: '4px', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: plan.popular ? 'var(--void)' : 'var(--gold)', background: plan.popular ? 'var(--gold)' : 'rgba(201,168,76,0.08)', padding: '4px 12px', marginBottom: '24px', border: plan.popular ? 'none' : '1px solid rgba(201,168,76,0.3)' }}>
                      {plan.badge}
                    </span>
                  )}
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '8px' }}>
                    {plan.name}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 600, lineHeight: 1, color: 'var(--cream)' }}>
                      {plan.price}
                    </span>
                    <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--cream-muted)' }}>
                      {plan.period}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--gold)', marginBottom: '32px', fontWeight: 500 }}>
                    {plan.minutes} included
                  </p>
                  <div style={{ height: '1px', background: 'var(--void-border)', marginBottom: '24px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                    {plan.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <span style={{ color: 'var(--gold)', fontSize: '12px' }}>→</span>
                        <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--cream-muted)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{ alignSelf: 'stretch' }}>
                  <MagneticButton href="/contact">Get Started →</MagneticButton>
                </div>
              </div>
            ))}
          </div>

          <RevealText className="mt-12">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--cream-muted)', lineHeight: 1.7 }}>
              No setup fees. No contracts. Cancel anytime. Rotate between plans as your season demands.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Comparison Matrix Graphic */}
      <section className="comparison-section" style={{ padding: '128px 0', borderBottom: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Economic Analysis
            </p>
          </RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1 }}>
              Human vs. Voice AI Comparison
            </h2>
          </RevealText>

          {/* Comparison Table */}
          <div style={{ border: '1px solid var(--void-border)', borderRadius: '12px', overflow: 'hidden', background: 'var(--void-2)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: 'var(--void-3)', borderBottom: '1px solid var(--void-border)' }}>
                  <th style={{ padding: '20px 24px', color: 'var(--cream)', fontWeight: 600 }}>Operational Vector</th>
                  <th style={{ padding: '20px 24px', color: 'var(--cream-muted)', fontWeight: 500 }}>Traditional Front Desk</th>
                  <th style={{ padding: '20px 24px', color: 'var(--gold)', fontWeight: 600 }}>Digivixo AI Answering</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: idx < comparisonData.length - 1 ? '1px solid var(--void-border)' : 'none' }}>
                    <td style={{ padding: '18px 24px', color: 'var(--cream)', fontWeight: 500 }}>{row.metric}</td>
                    <td style={{ padding: '18px 24px', color: 'var(--cream-dim)' }}>{row.human}</td>
                    <td style={{ padding: '18px 24px', color: row.accent ? 'var(--gold)' : 'var(--cream-muted)', fontWeight: row.accent ? 500 : 400 }}>{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Project Work */}
      <section style={{ padding: '128px 0' }}>
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              One-Time Projects
            </p>
          </RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1 }}>
              Project Work
            </h2>
          </RevealText>

          <div className="project-pricing-list" style={{ maxWidth: '800px' }}>
            {projectPricing.map((item, i) => (
              <div
                key={i}
                className="project-price-row"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderBottom: '1px solid var(--void-border)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(201,168,76,0.02)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 400, color: 'var(--cream)' }}>
                  {item.service}
                </span>
                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.05em', fontWeight: 500 }}>
                  From {item.from}
                </span>
              </div>
            ))}
          </div>

          <RevealText className="mt-8">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--cream-muted)', fontStyle: 'italic' }}>
              All projects start with a free consultation. Final pricing depends on scope and complexity.
            </p>
          </RevealText>

          <div style={{ marginTop: '48px' }}>
            <MagneticButton href="/contact">Book a Free Consultation →</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
