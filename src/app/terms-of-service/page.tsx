'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import GoldLine from '@/components/ui/GoldLine'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using the services provided by Digivixo ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.',
  },
  {
    title: 'Description of Services',
    body: 'Digivixo provides AI calling infrastructure, custom software development, web design, and related digital services. The specific scope of services for each client is defined in individual service agreements or statements of work.',
  },
  {
    title: 'AI Calling Agent Services',
    body: 'Our AI Calling Agent service operates on your existing telephone number. By subscribing, you authorize Digivixo to configure and manage AI systems on your behalf. You are responsible for ensuring that your use of the service complies with applicable laws, including those governing call recording and consent in your jurisdiction.',
  },
  {
    title: 'Payment Terms',
    body: 'Monthly subscription fees are billed in advance. Project-based work is billed according to the agreed payment schedule in your statement of work. All fees are non-refundable unless otherwise stated. Late payments may result in service suspension.',
  },
  {
    title: 'Intellectual Property',
    body: 'Upon full payment, custom code and designs created exclusively for your project become your intellectual property. Digivixo retains rights to generic components, frameworks, and methodologies used across multiple engagements. Our AI systems and proprietary infrastructure remain our property.',
  },
  {
    title: 'Confidentiality',
    body: 'Both parties agree to keep confidential any proprietary information shared during the engagement. This obligation survives termination of the agreement for a period of three years.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Digivixo\'s total liability to you for any claims arising from or related to these terms or the services shall not exceed the total fees paid by you in the three months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages.',
  },
  {
    title: 'Termination',
    body: 'Either party may terminate a monthly subscription with 30 days written notice. Project agreements may be terminated per the terms outlined in the specific statement of work. Upon termination, we will provide reasonable transition assistance.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms are governed by the laws of the jurisdiction in which Digivixo is registered, without regard to conflict of law provisions.',
  },
  {
    title: 'Contact',
    body: 'For questions about these Terms, contact us at hello@digivixo.com.',
  },
]

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.terms-section-item', {
        opacity: 0,
        y: 25,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)', minHeight: '100vh' }}>
      <section style={{ padding: '128px 0 96px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
            Legal
          </p>
          <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.01em', color: 'var(--cream)', marginBottom: '24px' }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--cream-dim)' }}>
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {sections.map((section, i) => (
            <div key={i} className="terms-section-item" style={{ marginBottom: '48px' }}>
              {i > 0 && <GoldLine className="mb-10" />}
              <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 500, color: 'var(--cream)', marginBottom: '16px' }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.8, color: 'var(--cream-muted)' }}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
