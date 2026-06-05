'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import GoldLine from '@/components/ui/GoldLine'

const sections = [
  {
    title: 'Information We Collect',
    body: 'We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This may include your name, email address, company name, phone number, and any other information you choose to provide.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use the information we collect to provide, maintain, and improve our services; to respond to your inquiries and requests; to send you technical notices and support messages; and to comply with legal obligations. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.',
  },
  {
    title: 'Call Recording and AI Processing',
    body: 'If you engage our AI Calling Agent service, calls processed through our system are recorded and analyzed to deliver the service. Call transcripts and recordings are accessible only to you through your client dashboard. We process call data with enterprise-grade encryption. Data retention follows the terms outlined in your service agreement.',
  },
  {
    title: 'Data Security',
    body: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.',
  },
  {
    title: 'Cookies',
    body: 'We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.',
  },
  {
    title: 'Third-Party Services',
    body: 'Our services may contain links to third-party websites or services. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions about this Privacy Policy, please contact us at hello@digivixo.com.',
  },
]

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.policy-section-item', {
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
            Privacy Policy
          </h1>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: 'var(--cream-dim)' }}>
            Effective Date: January 1, 2025
          </p>
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {sections.map((section, i) => (
            <div key={i} className="policy-section-item" style={{ marginBottom: '48px' }}>
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
