'use client'
import { useState } from 'react'
import Link from 'next/link'
import GoldLine from '@/components/ui/GoldLine'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer
      style={{
        background: 'var(--void)',
        borderTop: '1px solid var(--void-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 75%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '80px', paddingBottom: '0' }}>
        {/* Gold divider line at the top */}
        <div style={{ marginBottom: '72px' }}>
          <GoldLine />
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10" style={{ marginBottom: '72px' }}>
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '28px',
                  fontWeight: 600,
                  color: 'var(--cream)',
                  letterSpacing: '0.06em',
                  marginBottom: '20px',
                }}
              >
                DIGIVIXO
              </p>
              <p
                style={{
                  color: 'var(--cream-muted)',
                  fontSize: '14px',
                  lineHeight: 1.8,
                  maxWidth: '300px',
                  marginBottom: '24px',
                }}
              >
                AI calling infrastructure for modern accounting firms. Recover missed revenue, 24/7 — without adding headcount.
              </p>

              {/* Operational Status */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(34,197,94,0.06)',
                  border: '1px solid rgba(34,197,94,0.15)',
                  padding: '8px 16px',
                  borderRadius: '30px',
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    color: '#34d399',
                    textTransform: 'uppercase',
                  }}
                >
                  All Systems Operational
                </span>
              </div>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-muted)',
                  fontWeight: 600,
                  marginBottom: '4px',
                }}
              >
                Connect
              </p>
              <a
                href="mailto:contact@digivixo.com"
                className="footer-link"
                style={{
                  color: 'var(--gold)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@digivixo.com
              </a>
              <a
                href="https://www.linkedin.com/company/digivixo/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{
                  color: 'var(--cream-muted)',
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--cream-muted)',
                marginBottom: '28px',
                fontWeight: 600,
              }}
            >
              Navigation
            </p>
            <div className="flex flex-col gap-4">
              {['About', 'Services', 'Case Studies', 'Industries', 'Pricing', 'Team', 'Blog'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="footer-link"
                  style={{
                    color: 'var(--cream-muted)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-2">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--cream-muted)',
                marginBottom: '28px',
                fontWeight: 600,
              }}
            >
              Legal
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms-of-service' },
                { label: 'Contact Us', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                  style={{
                    color: 'var(--cream-muted)',
                    fontSize: '14px',
                    textDecoration: 'none',
                    lineHeight: 1.5,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--cream-muted)',
                  marginBottom: '20px',
                  fontWeight: 600,
                }}
              >
                Join Our Newsletter
              </p>
              <p
                style={{
                  color: 'var(--cream-muted)',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  maxWidth: '320px',
                }}
              >
                Strategies on voice AI, workflow automation, and CPA revenue recovery — delivered monthly.
              </p>

              {subscribed ? (
                <p
                  style={{
                    color: 'var(--gold)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  ✓ Thank you — you&apos;re on the list.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '340px' }}>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'var(--void-2)',
                      border: '1px solid var(--void-border)',
                      borderRadius: '8px',
                      color: 'var(--cream)',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '13px',
                      padding: '12px 16px',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}
                  />
                  <button
                    type="submit"
                    style={{
                      background: 'var(--gold)',
                      border: '1px solid var(--gold)',
                      borderRadius: '8px',
                      color: 'var(--void)',
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontWeight: 600,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      padding: '12px 20px',
                      cursor: 'pointer',
                      transition: 'background 0.3s',
                      width: 'fit-content',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
                  >
                    Subscribe →
                  </button>
                </form>
              )}
            </div>

            {/* Quick CTA */}
            <div
              style={{
                background: 'rgba(201,168,76,0.03)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '12px',
                padding: '24px',
                maxWidth: '340px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: '20px',
                  color: 'var(--cream)',
                  marginBottom: '8px',
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                Ready to recover missed revenue?
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--cream-muted)',
                  lineHeight: 1.6,
                  marginBottom: '16px',
                }}
              >
                Book a free 30-minute call. No commitment required.
              </p>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--void)',
                  background: 'var(--gold)',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
              >
                Book a Free Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          style={{
            borderTop: '1px solid var(--void-border)',
            padding: '32px 0 40px',
          }}
        >
          <p style={{ color: 'var(--cream-dim)', fontSize: '12px' }}>
            Digivixo © 2025 — All rights reserved.
          </p>
          <p
            style={{
              color: 'var(--cream-dim)',
              fontSize: '12px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            AI Calling Infrastructure for Modern Accounting Firms
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .footer-link:hover {
          color: var(--cream) !important;
          transform: translateX(5px);
        }
      `}</style>
    </footer>
  )
}
