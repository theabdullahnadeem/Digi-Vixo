'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from '@/lib/gsap'
import Link from 'next/link'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(9,9,9,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--void-border)' : 'none',
          height: 'var(--nav-height)',
        }}
      >
        {/* Use the .container class for consistent left/right padding matching rest of site */}
        <div
          className="container flex items-center justify-between"
          style={{ height: 'var(--nav-height)' }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--cream)',
              letterSpacing: '0.08em',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            DIGIVIXO
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div
              className="flex items-center gap-4 xl:gap-7 overflow-x-auto no-scrollbar py-1"
              style={{
                maxWidth: 'calc(100vw - 400px)',
                scrollbarWidth: 'none',
              }}
            >
              <style>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .nav-link {
                  font-family: var(--font-dm-sans), sans-serif;
                  font-size: 12px;
                  letter-spacing: 0.1em;
                  text-transform: uppercase;
                  color: var(--cream-muted);
                  text-decoration: none;
                  transition: color 0.3s;
                  flex-shrink: 0;
                  padding: 4px 0;
                  position: relative;
                }
                .nav-link::after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 0;
                  height: 1px;
                  background: var(--gold);
                  transition: width 0.3s ease;
                }
                .nav-link:hover {
                  color: var(--cream);
                }
                .nav-link:hover::after {
                  width: 100%;
                }
              `}</style>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                padding: '10px 22px',
                borderRadius: '8px',
                background: 'transparent',
                textDecoration: 'none',
                transition: 'all 0.3s',
                flexShrink: 0,
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
              Book a Call →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none' }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: 'var(--cream)',
                transition: 'all 0.3s',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: 'var(--cream)',
                transition: 'all 0.3s',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1px',
                background: 'var(--cream)',
                transition: 'all 0.3s',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[999] lg:hidden flex flex-col justify-start items-center gap-8 transition-all duration-500"
        style={{
          background: 'var(--void)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)',
          zIndex: 999,
          overflowY: 'auto',
          paddingTop: 'calc(var(--nav-height) + 40px)',
          paddingBottom: '60px',
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: 400,
              color: 'var(--cream)',
              textDecoration: 'none',
              letterSpacing: '-0.01em',
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: 'var(--font-dm-sans), sans-serif',
            fontSize: '12px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            padding: '12px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            marginTop: '16px',
            flexShrink: 0,
          }}
        >
          Book a Call →
        </Link>
      </div>
    </>
  )
}
