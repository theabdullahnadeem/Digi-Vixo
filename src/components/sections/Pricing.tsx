'use client'
import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const plans = [
  {
    name: 'Pilot',
    description: 'Start Here',
    badge: 'Best for first-timers',
    price: '$800',
    period: '/ month',
    minutes: '3,000 minutes included',
    features: [
      '30-day risk-free pilot',
      'Full refund guarantee',
      '24/7 AI coverage',
      'CPA agent training',
      'Real-time CRM sync',
    ],
    popular: false,
    ctaText: 'Start with a pilot →',
    finePrint: '30-day pilot · Full refund if no measurable improvement'
  },
  {
    name: 'Standard',
    description: 'After your pilot',
    price: '$1,500',
    period: '/ month',
    minutes: '6,000 minutes included',
    features: [
      'Real-time dashboard',
      '24/7 AI coverage',
      'Weekly optimization',
      '48hr setup',
      'Custom agent training',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    description: 'After your pilot',
    badge: '★ Peak Season',
    price: '$2,200',
    period: '/ month',
    minutes: '10,000 minutes included',
    features: [
      'Everything in Standard',
      'Priority support',
      'Spike season ready',
      'Rotate back anytime',
    ],
    popular: true,
  },
]

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-cards',
          start: 'top 80%',
          once: true,
        },
      })

      // Popular badge pulse
      const badge = document.querySelector('.popular-badge')
      if (badge) {
        gsap.to(badge, {
          scale: 1.03,
          duration: 3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: 'var(--void-2)',
        padding: '128px 0',
        borderTop: '1px solid var(--void-border)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <RevealText className="mb-6">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textAlign: 'center',
              }}
            >
              Transparent Pricing
            </p>
          </RevealText>

          <RevealText className="mb-0">
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                lineHeight: 1.0,
                letterSpacing: '-0.01em',
                color: 'var(--cream)',
                textAlign: 'center',
              }}
            >
              AI Calling Plans
            </h2>
          </RevealText>
        </div>

        <div className="pricing-cards">
          <style>{`
            .pricing-cards {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .pricing-cards {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (min-width: 1024px) {
              .pricing-cards {
                grid-template-columns: repeat(3, 1fr);
              }
            }
          `}</style>
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>

        <RevealText className="mt-12">
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '13px',
              lineHeight: 1.7,
              color: 'var(--cream-muted)',
              textAlign: 'center',
            }}
          >
            No setup fees. No contracts. Cancel anytime.
            Rotate between plans as your season demands.
          </p>
        </RevealText>
      </div>
    </section>
  )
}

function PricingCard({ plan }: { plan: typeof plans[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      boxShadow: '0 0 60px rgba(201,168,76,0.12)',
      borderColor: 'rgba(201,168,76,0.6)',
      duration: 0.4,
    })
  }

  const handleMouseLeave = () => {
    if (plan.popular) return
    gsap.to(cardRef.current, {
      boxShadow: 'none',
      borderColor: 'var(--void-border)',
      duration: 0.4,
    })
  }

  return (
    <div
      ref={cardRef}
      className="pricing-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'var(--void-3)',
        border: `1px solid ${plan.popular ? 'rgba(201,168,76,0.4)' : 'var(--void-border)'}`,
        padding: '48px 40px',
        position: 'relative',
        boxShadow: plan.popular ? '0 0 40px rgba(201,168,76,0.08)' : 'none',
        transition: 'border-color 0.3s',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        {plan.badge && (
          <span
            className="popular-badge"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '10px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: plan.popular ? 'var(--void)' : 'var(--gold)',
              background: plan.popular ? 'var(--gold)' : 'rgba(201,168,76,0.08)',
              padding: '4px 12px',
              marginBottom: '20px',
              border: plan.popular ? 'none' : '1px solid rgba(201,168,76,0.3)',
            }}
          >
            {plan.badge}
          </span>
        )}

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--cream-muted)',
            marginBottom: plan.description ? '4px' : '8px',
          }}
        >
          {plan.name}
        </p>

        {plan.description && (
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '12px',
              fontWeight: 500,
            }}
          >
            {plan.description}
          </p>
        )}

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
          <span
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(40px, 6vw, 64px)',
              fontWeight: 600,
              lineHeight: 1,
              color: 'var(--cream)',
            }}
          >
            {plan.price}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '14px',
              color: 'var(--cream-muted)',
            }}
          >
            {plan.period}
          </span>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '13px',
            color: 'var(--gold)',
            marginBottom: '32px',
          }}
        >
          {plan.minutes}
        </p>

        <div
          style={{
            height: '1px',
            background: 'var(--void-border)',
            marginBottom: '24px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
          {plan.features.map((f, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: 'var(--gold)', fontSize: '12px' }}>→</span>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '13px',
                  color: 'var(--cream-muted)',
                  lineHeight: 1.5,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <MagneticButton href="/contact">{plan.ctaText || 'Get Started →'}</MagneticButton>
        {plan.finePrint && (
          <p
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontSize: '11px',
              color: 'var(--cream-dim)',
              textAlign: 'center',
              marginTop: '16px',
              letterSpacing: '0.02em',
              marginBottom: 0,
            }}
          >
            {plan.finePrint}
          </p>
        )}
      </div>
    </div>
  )
}
