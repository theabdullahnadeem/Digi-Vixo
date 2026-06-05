'use client'
import { useRef, useEffect, useState } from 'react'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'

const faqs = [
  {
    q: "What if the AI can't handle a complex call?",
    a: "It transfers to you instantly with a brief summary of the conversation so you're never caught off guard.",
  },
  {
    q: 'Do I need to change my phone number?',
    a: 'No. We configure the agent on your existing number. Nothing changes for your clients.',
  },
  {
    q: 'How long does setup take?',
    a: '48 hours from our discovery call to going live.',
  },
  {
    q: 'Is my client data secure?',
    a: 'All calls are processed with enterprise-grade encryption. No data is stored beyond call logs visible to you.',
  },
  {
    q: 'What happens after the spike season ends?',
    a: 'We rotate you back to the Standard plan automatically or on request. No penalties, no friction.',
  },
  {
    q: 'Can I see exactly what the AI says on calls?',
    a: 'Yes. Full transcripts and recordings are available in your dashboard for every call.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="section-pad"
      style={{
        background: 'var(--void)',
        borderTop: '1px solid var(--void-border)',
      }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', margin: '0 auto 64px' }}>
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
              Common Questions
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
              Questions & Answers
            </h2>
          </RevealText>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { q: string; a: string }
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  const bodyRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return

    if (isOpen) {
      gsap.set(el, { height: 'auto', display: 'block' })
      const h = el.offsetHeight
      gsap.from(el, { height: 0, duration: 0.4, ease: 'power3.inOut' })
      gsap.to(iconRef.current, { rotation: 45, duration: 0.3 })
    } else {
      gsap.to(el, {
        height: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => { gsap.set(el, { display: 'none' }) },
      })
      gsap.to(iconRef.current, { rotation: 0, duration: 0.3 })
    }
  }, [isOpen])

  return (
    <div
      style={{
        borderBottom: '1px solid var(--void-border)',
        padding: '0',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cormorant), serif',
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: 400,
            color: 'var(--cream)',
            lineHeight: 1.3,
          }}
        >
          {faq.q}
        </span>
        <span
          ref={iconRef}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '20px',
            color: 'var(--gold)',
            flexShrink: 0,
            lineHeight: 1,
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>

      <div
        ref={bodyRef}
        style={{
          height: 0,
          overflow: 'hidden',
          display: 'none',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            lineHeight: 1.7,
            color: 'var(--cream-muted)',
            paddingBottom: '24px',
            maxWidth: '600px',
          }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  )
}
