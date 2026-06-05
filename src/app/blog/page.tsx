'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import GoldLine from '@/components/ui/GoldLine'

const posts = [
  {
    slug: 'how-ai-calling-agents-reduced-missed-calls',
    date: 'May 2025',
    category: 'AI Calling',
    title: 'How AI Calling Agents Reduced Missed Calls from 32% to 5% at a Mid-Size CPA Firm',
    excerpt: 'A detailed breakdown of the 60-day engagement: what we deployed, how the agent was trained, and the exact revenue recovery numbers.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80',
  },
  {
    slug: 'why-tax-season-is-worst-time',
    date: 'April 2025', 
    category: 'Industry',
    title: 'Why Tax Season Is the Worst Time to Have a Human Answering Your Phones',
    excerpt: 'Call volume spikes 340% in February-April. Here\'s what that means for your front desk, your client relationships, and your bottom line.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    slug: 'architecture-behind-production-ai-calling-agent',
    date: 'March 2025',
    category: 'Technology',
    title: 'The Architecture Behind a Production AI Calling Agent: What Actually Runs When Your Phone Rings',
    excerpt: 'A technical deep-dive into latency, model selection, voice synthesis, and the real-time decision tree that determines how calls are handled.',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
  },
]

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.blog-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 85%',
          once: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)' }}>
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'flex-end', padding: '128px 0 80px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="container" style={{ width: '100%' }}>
          <RevealText className="mb-4">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Insights & Analysis
            </p>
          </RevealText>
          <RevealText>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '24px' }}>
              Blog
            </h1>
          </RevealText>
        </div>
      </section>

      <section style={{ padding: '128px 0' }}>
        <div className="container">
          {/* 3-Column Blog Grid */}
          <div className="blog-grid">
            {posts.map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="blog-card premium-card" style={{ textDecoration: 'none', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden', marginBottom: '20px', borderRadius: '8px' }}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="blog-image"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.4) 0%, transparent 100%)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '11px', fontFamily: 'var(--font-dm-sans), sans-serif', letterSpacing: '0.1em' }}>
                    {post.category}
                  </span>
                  <span style={{ color: 'var(--cream-dim)', fontSize: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {post.date}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 500, color: 'var(--cream)', marginBottom: '12px', lineHeight: 1.25 }}>
                  {post.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.6, color: 'var(--cream-muted)', marginBottom: '24px' }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ color: 'var(--cream-dim)', fontSize: '12px', fontFamily: 'var(--font-dm-sans), sans-serif' }}>
                    {post.readTime}
                  </span>
                  <span className="read-more-text" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', transition: 'color 0.3s' }}>
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Centered Email Capture */}
          <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px' }}>
            <RevealText className="mb-4">
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.3, textAlign: 'center' }}>
                Subscribe to our Insights.
              </p>
            </RevealText>
            <RevealText className="mb-12">
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', lineHeight: 1.7, color: 'var(--cream-muted)', textAlign: 'center' }}>
                We're preparing articles on AI calling infrastructure, missed revenue recovery, and the future of professional services automation. Subscribe to be notified when we publish.
              </p>
            </RevealText>

            <GoldLine className="mb-12" />

            {submitted ? (
              <RevealText>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '24px', color: 'var(--cream)', textAlign: 'center' }}>
                  You're on the list. We'll be in touch.
                </p>
              </RevealText>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                style={{ display: 'flex', gap: '0', maxWidth: '480px', margin: '0 auto' }}
              >
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'var(--void-2)',
                    border: '1px solid var(--void-border)',
                    borderRight: 'none',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '14px',
                    padding: '14px 16px',
                    borderRadius: '8px 0 0 8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--gold)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}
                />
                <button
                  type="submit"
                  style={{
                    fontFamily: 'var(--font-dm-sans), sans-serif',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--void)',
                    background: 'var(--gold)',
                    border: '1px solid var(--gold)',
                    padding: '14px 24px',
                    borderRadius: '0 8px 8px 0',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 80px;
        }
        @media (min-width: 768px) {
          .blog-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .blog-card {
          border: 1px solid var(--void-border);
          padding: 32px;
          background: var(--void-2);
          transition: border-color 0.3s;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .blog-card:hover .blog-image {
          transform: scale(1.06) !important;
        }
        .blog-card:hover .read-more-text {
          color: var(--cream) !important;
        }
      `}</style>
    </div>
  )
}
