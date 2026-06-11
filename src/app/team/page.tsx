'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'

const team = [
  {
    name: 'Abdullah',
    title: 'CEO & Co-Founder',
    bio: 'A strategic architect of technical ecosystems and high-performance software. Abdullah leads product vision, client strategy, and growth at Digivixo. He translates complex business problems into precise technical solutions that deliver measurable outcomes.',
    image: '/images/team/abdullah.png',
    focus: ['Product Vision', 'Client Strategy', 'Technical Architecture', 'Business Development'],
  },
  {
    name: 'Hassan',
    title: 'COO & Co-Founder',
    bio: 'The technical backbone of Digivixo. Hassan engineers seamless digital architectures and leads delivery, operations, and infrastructure. His approach is methodical, thorough, and relentlessly focused on quality.',
    image: '/images/team/hassan.png',
    focus: ['Engineering Leadership', 'Delivery Operations', 'System Architecture', 'Quality Standards'],
  },
]

export default function TeamPage() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-card', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.team-cards', start: 'top 80%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} style={{ background: 'var(--void)' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: 'var(--nav-height)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="/images/team/hero_bg.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.2 }} sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,0.2) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <RevealText className="mb-4"><p className="label">The Founders</p></RevealText>
          <RevealText>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(52px, 8vw, 110px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '24px' }}>
              Meet the Team
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Team cards */}
      <section className="section-pad" style={{ borderTop: '1px solid var(--void-border)' }}>
        <div className="container">
          <div className="team-cards grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {team.map((member, i) => (
              <div key={i} className="team-card" style={{ border: '1px solid var(--void-border)', overflow: 'hidden', background: 'var(--void-2)', transition: 'border-color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}>
                {/* Photo */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(15%) brightness(0.65)', transition: 'transform 0.6s' }} sizes="(max-width: 900px) 100vw, 50vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 60%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '32px' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '40px', fontWeight: 500, color: 'var(--cream)', lineHeight: 1 }}>{member.name}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '6px' }}>{member.title}</p>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px 36px 40px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.75, color: 'var(--cream-muted)', marginBottom: '24px' }}>{member.bio}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {member.focus.map((f) => (
                      <span key={f} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-muted)', border: '1px solid var(--void-border)', padding: '4px 10px' }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div style={{ textAlign: 'center' }}>
            <RevealText className="mb-8">
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontStyle: 'italic', color: 'var(--cream-muted)', maxWidth: '600px', margin: '0 auto' }}>
                "We don't scale by hiring fast. We scale by building systems that work."
              </p>
            </RevealText>
            <MagneticButton href="/contact">Work With Us →</MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
