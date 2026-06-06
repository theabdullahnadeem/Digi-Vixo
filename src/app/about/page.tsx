'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'
import GoldLine from '@/components/ui/GoldLine'

const timeline = [
  { year: '2021', title: 'Technical Foundations', body: 'Started as a boutique software consultancy building custom systems for SMEs across the UK and US.' },
  { year: '2022', title: 'Digital Service Expansion', body: 'Expanded to e-commerce platforms, SaaS MVPs, and cloud infrastructure for growth-stage companies.' },
  { year: '2023', title: 'Enterprise Solutions', body: 'Began serving enterprise-scale clients, delivering complex integrations and automation systems.' },
  { year: '2024', title: 'Process & Quality Excellence', body: 'Formalized internal standards, engineering best practices, and quality frameworks.' },
  { year: '2025', title: 'Integrated Digital Partner', body: 'Launched AI calling infrastructure — the flagship product that defines our next chapter.' },
]

const principles = [
  { name: 'Customer Obsession', body: 'Every decision starts with client impact. We work backwards from the outcome they need.' },
  { name: 'Ownership', body: 'We act like owners. If something is broken, we fix it — regardless of whose responsibility it is.' },
  { name: 'Invent & Simplify', body: 'Innovation with purpose. We challenge complexity at every turn and default to simple.' },
  { name: 'Bias for Action', body: 'Speed matters. We default to action over deliberation, and iterate from there.' },
  { name: 'Deliver Results', body: 'Outcomes, not outputs. We are tenacious about delivery and honest about results.' },
]

const founders = [
  {
    name: 'Abdullah',
    title: 'CEO & Co-Founder',
    bio: 'A strategic architect of technical ecosystems. Abdullah leads product vision, client strategy, and growth — translating complex business problems into precise solutions that deliver measurable outcomes.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
  },
  {
    name: 'Hassan',
    title: 'COO & Co-Founder',
    bio: 'The technical backbone of Digivixo. Hassan engineers seamless digital architectures, leads delivery and operations, and brings a relentless focus on quality to every engagement.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
]

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        opacity: 0,
        x: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-wrap', start: 'top 80%', once: true },
      })

      // Principles cards stagger animation
      gsap.from('.principle-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.principles-grid', start: 'top 80%', once: true },
      })

      // Founders cards stagger animation
      gsap.from('.founder-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.founders-grid', start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div style={{ background: 'var(--void)' }}>

      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingTop: 'var(--nav-height)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80" alt="" fill style={{ objectFit: 'cover', opacity: 0.25 }} sizes="100vw" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,1) 0%, rgba(8,8,8,0.5) 60%, rgba(8,8,8,0.2) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '80px' }}>
          <RevealText className="mb-4"><p className="label">About Digivixo</p></RevealText>
          <RevealText>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(52px, 9vw, 120px)', fontWeight: 700, lineHeight: 0.92, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: '24px' }}>
              We are DIGIVIXO.
            </h1>
          </RevealText>
          <RevealText delay={0.2} className="mt-8">
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.75, color: 'var(--cream-muted)', maxWidth: '560px' }}>
              Founded by engineers tired of watching businesses lose revenue to broken systems and unanswered calls. We build precision digital infrastructure — and the AI calling agents to protect every revenue touchpoint.
            </p>
          </RevealText>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section-pad" style={{ background: 'var(--void-2)', borderTop: '1px solid var(--void-border)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { label: 'Mission', headline: 'Build systems that recover revenue.', body: 'We deploy AI and software infrastructure that converts missed opportunities into measurable outcomes. Not theory. Results you can see in a dashboard.' },
              { label: 'Vision', headline: 'Every call answered. Every opportunity captured.', body: 'A world where no accounting firm loses a client to an unanswered phone — where AI works quietly in the background so professionals can focus on what they do best.' },
            ].map((card, i) => (
              <div key={i} style={{ border: '1px solid var(--void-border)', padding: '48px 40px', background: 'var(--void-3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--gold)', opacity: 0.4 }} />
                <RevealText className="mb-3"><p className="label">{card.label}</p></RevealText>
                <RevealText className="mb-4">
                  <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 500, lineHeight: 1.2, color: 'var(--cream)' }}>{card.headline}</h3>
                </RevealText>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.8, color: 'var(--cream-muted)' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: 'var(--void)', borderTop: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4"><p className="label">Our Journey</p></RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, lineHeight: 0.95, color: 'var(--cream)' }}>Five years. One direction.</h2>
          </RevealText>
          <div className="timeline-wrap">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="timeline-item timeline-item-grid"
                style={{
                  padding: '36px 0',
                  borderBottom: i < timeline.length - 1 ? '1px solid var(--void-border)' : 'none',
                }}
              >
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '36px', fontWeight: 600, color: 'var(--gold)', opacity: 0.5 }}>{item.year}</p>
                <div>
                  <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 500, color: 'var(--cream)', marginBottom: '8px' }}>{item.title}</p>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--cream-muted)', maxWidth: '500px' }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-pad" style={{ background: 'var(--void-2)', borderTop: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4"><p className="label">How We Operate</p></RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)' }}>Leadership Principles</h2>
          </RevealText>
          <div className="principles-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {principles.map((p, i) => (
              <div key={i} className="principle-card" style={{ border: '1px solid var(--void-border)', padding: '32px', background: 'var(--void-3)', transition: 'border-color 0.3s' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}>
                <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '22px', fontWeight: 500, color: 'var(--cream)', marginBottom: '12px' }}>{p.name}</p>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '13px', lineHeight: 1.7, color: 'var(--cream-muted)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-pad" style={{ background: 'var(--void)', borderTop: '1px solid var(--void-border)' }}>
        <div className="container">
          <RevealText className="mb-4"><p className="label">The Founders</p></RevealText>
          <RevealText className="mb-16">
            <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, color: 'var(--cream)' }}>Meet the Team</h2>
          </RevealText>

          <div className="founders-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            {founders.map((f, i) => (
              <div key={i} className="founder-card" style={{ border: '1px solid var(--void-border)', overflow: 'hidden', background: 'var(--void-2)' }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={f.image} alt={f.name} fill style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(20%) brightness(0.7)', transition: 'transform 0.5s' }} sizes="(max-width: 900px) 100vw, 50vw" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '32px' }}>
                    <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '36px', fontWeight: 500, color: 'var(--cream)', lineHeight: 1 }}>{f.name}</p>
                    <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '4px' }}>{f.title}</p>
                  </div>
                </div>
                <div style={{ padding: '28px 32px 36px' }}>
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.75, color: 'var(--cream-muted)' }}>{f.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: '48px', borderLeft: '2px solid rgba(201,168,76,0.4)', background: 'var(--void-2)' }}>
            <RevealText>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(20px, 2.5vw, 30px)', fontStyle: 'italic', lineHeight: 1.5, color: 'var(--cream)', marginBottom: '20px' }}>
                "Technical excellence is not just about writing code — it's about building systems that create real outcomes for the people who depend on them."
              </p>
            </RevealText>
            <MagneticButton href="/contact">Work With Us →</MagneticButton>
          </div>
        </div>
      </section>

      <style>{`
        .timeline-item-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .timeline-item-grid {
            grid-template-columns: 100px 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </div>
  )
}
