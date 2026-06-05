'use client'
import { useState, useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import GoldLine from '@/components/ui/GoldLine'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '58fb3621-7163-4392-bfd5-98a4fee1d780',
          name: form.name,
          email: form.email,
          company: form.company || '—',
          service: form.service || '—',
          message: form.message,
          subject: `New Enquiry from ${form.name} — Digivixo`,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-grid-col', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.15,
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--void-2)',
    border: '1px solid var(--void-border)',
    borderRadius: '8px',
    color: 'var(--cream)',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    fontSize: '14px',
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--cream)',
    marginBottom: '6px',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--gold)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--void-border)'
  }

  return (
    <div ref={containerRef} style={{ background: 'var(--void)' }}>
      <section style={{ minHeight: '100vh', padding: '160px 0 120px' }}>
        <div className="container">
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Get In Touch
            </p>
          </RevealText>
          <RevealText className="mb-0">
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '64px' }}>
              Let&apos;s Build Something.
            </h1>
          </RevealText>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-[64px]">

            {/* ── Form ── */}
            <div className="contact-grid-col">
              {status === 'success' ? (
                <div
                  style={{
                    border: '1px solid rgba(201,168,76,0.3)',
                    padding: '48px',
                    background: 'rgba(201,168,76,0.02)',
                    borderRadius: '12px',
                    textAlign: 'center',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '36px', fontWeight: 500, color: 'var(--cream)', marginBottom: '12px' }}>
                    Message Sent ✓
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', color: 'var(--cream-muted)', lineHeight: 1.7 }}>
                    Thanks for reaching out. We&apos;ll reply to <span style={{ color: 'var(--gold)' }}>{form.email || 'your inbox'}</span> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Name */}
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label style={labelStyle}>Company / Firm Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle}>Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' } as React.CSSProperties}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    >
                      <option value="" style={{ background: 'var(--void-2)' }}>Select a service</option>
                      <option value="AI Calling Agent" style={{ background: 'var(--void-2)' }}>AI Calling Agent</option>
                      <option value="Custom Web / SaaS" style={{ background: 'var(--void-2)' }}>Custom Web / SaaS</option>
                      <option value="AI & Automation" style={{ background: 'var(--void-2)' }}>AI &amp; Automation</option>
                      <option value="Conversion Website" style={{ background: 'var(--void-2)' }}>Conversion Website</option>
                      <option value="Shopify E-commerce" style={{ background: 'var(--void-2)' }}>Shopify E-commerce</option>
                      <option value="Other" style={{ background: 'var(--void-2)' }}>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, current challenges, or questions..."
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-dm-sans), sans-serif' } as React.CSSProperties}
                      onFocus={onFocus}
                      onBlur={onBlur}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', color: '#f87171', lineHeight: 1.6 }}>
                      Something went wrong. Please email us directly at{' '}
                      <a href="mailto:contact@digivixo.com" style={{ color: 'var(--gold)' }}>contact@digivixo.com</a>
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: status === 'loading' ? 'var(--cream-dim)' : 'var(--gold)',
                      border: `1px solid ${status === 'loading' ? 'var(--void-border)' : 'var(--gold)'}`,
                      background: 'transparent',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s',
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                    onMouseEnter={(e) => {
                      if (status === 'loading') return
                      e.currentTarget.style.background = 'var(--gold)'
                      e.currentTarget.style.color = 'var(--void)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = status === 'loading' ? 'var(--cream-dim)' : 'var(--gold)'
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <span
                          style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            border: '1.5px solid var(--cream-dim)',
                            borderTopColor: 'var(--gold)',
                            borderRadius: '50%',
                            animation: 'spin 0.7s linear infinite',
                          }}
                        />
                        Sending…
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* ── Info panel ── */}
            <div className="contact-grid-col" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>

              {/* Email */}
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '8px' }}>
                  Email
                </p>
                <a
                  href="mailto:contact@digivixo.com"
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', color: 'var(--gold)', textDecoration: 'none', transition: 'opacity 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  contact@digivixo.com
                </a>
              </div>

              {/* LinkedIn */}
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '8px' }}>
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/digivixo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', color: 'var(--cream)', textDecoration: 'none', transition: 'color 0.3s', display: 'flex', alignItems: 'center', gap: '10px' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  linkedin.com/company/digivixo
                </a>
              </div>

              {/* Response time */}
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '8px' }}>
                  Response Time
                </p>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', color: 'var(--cream)' }}>
                  Within 24 hours
                </p>
              </div>

              {/* Book a Call */}
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--cream-muted)', marginBottom: '16px' }}>
                  Book a Call Directly
                </p>
                <div
                  style={{
                    border: '1px solid var(--void-border)',
                    padding: '32px',
                    background: 'var(--void-2)',
                    borderRadius: '12px',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '24px', fontWeight: 500, color: 'var(--cream)', marginBottom: '8px' }}>
                    AI Calling — Free Strategy Call
                  </p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--cream-muted)', marginBottom: '20px' }}>
                    20 minutes. We show you exactly how many calls you&apos;re losing and what recovery looks like for your firm.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://www.linkedin.com/company/digivixo/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      border: '1px solid var(--gold)',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      display: 'inline-block',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold)'
                      e.currentTarget.style.color = 'var(--void)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = 'var(--gold)'
                    }}
                  >
                    Schedule a Call →
                  </a>
                </div>
              </div>

              <GoldLine />

              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'var(--cream-muted)' }}>
                  No obligation. No hard sell. We&apos;ll tell you whether our solution is the right fit for you — even if it isn&apos;t us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
