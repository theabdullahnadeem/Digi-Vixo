'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import MagneticButton from '@/components/ui/MagneticButton'
import GoldLine from '@/components/ui/GoldLine'

const coreServices = [
  {
    label: 'Flagship Service',
    title: 'AI Calling Agent',
    subtitle: 'Missed call recovery, 24/7 coverage',
    body: 'We engineer, deploy, and manage bespoke voice AI calling agents integrated directly into your existing business lines. Built with state-of-the-art Large Language Models (LLMs) custom-trained on your specific industry terminology and workflow cycles, our calling agents run at an industry-leading latency of under 800ms. They instantly answer, resolve standard queries, qualify leads, and schedule appointments directly on your calendar, handing off to humans only for high-value issues. Reduce missed inbound opportunities from 32% to under 5%. Live in 48 hours.',
    highlight: true,
    features: ['24/7 client response', 'Sub-800ms voice latency', 'Calendly/Cal.com sync', 'Automatic CRM data log', 'Custom tone of voice'],
    type: 'calling'
  },
  {
    label: 'Core Service',
    title: 'Custom Web & SaaS Development',
    subtitle: 'End-to-end custom software',
    body: 'We design and build clean, secure, and highly scalable cloud software architectures tailored to your operational goals. Avoiding generic templates, we engineer custom client portals, accounting workflow platforms, and database interfaces using React, Next.js 16, TypeScript, and Python. We manage database replication, secure API designs, and multi-tenant systems optimized for high throughput, guaranteeing long-term viability, zero dependency locks, and complete ownership of your intellectual property.',
    highlight: false,
    features: ['React & Next.js 16', 'TypeScript & Node.js', 'REST & GraphQL APIs', 'AWS/Vercel Serverless', 'PostgreSQL / Prisma'],
    type: 'saas'
  },
  {
    label: 'Core Service',
    title: 'AI & Business Automation',
    subtitle: 'LLMs, agents, and custom APIs',
    body: 'We eliminate repetitive manual processes by building intelligent background pipelines that connect your emails, CRM, and documents. Our custom data extraction systems parse PDF tax files, invoices, and client intake forms using optical character recognition and generative AI. We wire webhook events to automate reporting, trigger alerts, and sync data across your entire tech stack, boosting your administrative productivity and freeing up billable hours for your senior staff.',
    highlight: false,
    features: ['Custom LLM integrations', 'PDF & Doc data extraction', 'Auto client reporting', 'Webhook pipeline hooks', 'Make/Zapier custom coding'],
    type: 'automation'
  },
  {
    label: 'Core Service',
    title: 'Conversion-Focused Websites',
    subtitle: 'High-performance frontends',
    body: 'We engineer digital front doors that turn passive visitors into qualified sales opportunities. Utilizing advanced static generation, optimized image assets, and GSAP page transitions, we construct highly polished websites that load in under 1.5 seconds. Every structural detail, from copy layout hierarchy to interactive booking triggers, is systematically optimized for search engines and user conversion rates.',
    highlight: false,
    features: ['Sub-1.5s load times', 'Lighthouse 100/100 score', 'GSAP scroll visual motion', 'SEO schema structures', 'Responsive mobile layout'],
    type: 'website'
  },
]

const additionalServices = [
  { title: 'Shopify E-commerce', body: 'Custom headless storefronts, advanced database integrations, and customized checkout conversion optimization.' },
  { title: 'Amazon Optimization', body: 'Brand presence strategy, listing optimization, structured advertising, and store dashboard metrics.' },
  { title: 'WordPress Development', body: 'Fully custom theme designs, plugin development, database cleanup, and legacy site migrations.' },
  { title: 'Digital & Growth Marketing', body: 'Paid lead acquisition, content strategy, targeted SEO structures, and automated client email flows.' },
]

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core service row entries
      gsap.from('.core-service-row', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.core-services-list',
          start: 'top 80%',
          once: true,
        },
      })

      // Additional capabilities grid cards
      gsap.from('.additional-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.additional-grid',
          start: 'top 85%',
          once: true,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: 'var(--void)' }}>
      {/* Hero */}
      <section
        style={{
          minHeight: '72vh',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '160px 0 96px',
          borderBottom: '1px solid var(--void-border)',
        }}
      >
        <div className="container">
          <RevealText className="mb-4">
            <p
              style={{
                fontFamily: 'var(--font-dm-sans), sans-serif',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              What We Build
            </p>
          </RevealText>
          <RevealText>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(56px, 8vw, 110px)',
                fontWeight: 700,
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: '24px',
              }}
            >
              Services
            </h1>
          </RevealText>
        </div>
      </section>

      {/* Core services */}
      <section className="core-services-list" style={{ padding: '40px 0 120px' }}>
        <div className="container">
          {coreServices.map((service, i) => {
            const textDiv = (
              <div key="text" className="flex flex-col justify-center">
                <RevealText className="mb-3">
                  <p
                    style={{
                      fontFamily: 'var(--font-dm-sans), sans-serif',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: service.highlight ? 'var(--gold)' : 'var(--cream-muted)',
                    }}
                  >
                    {service.label}
                  </p>
                </RevealText>
                <RevealText className="mb-3">
                  <h2
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 'clamp(28px, 4vw, 52px)',
                      fontWeight: 600,
                      lineHeight: 1.05,
                      color: 'var(--cream)',
                    }}
                  >
                    {service.title}
                  </h2>
                </RevealText>
                <RevealText className="mb-6">
                  <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'var(--cream-muted)', maxWidth: '540px', marginBottom: '24px' }}>
                    {service.body}
                  </p>
                </RevealText>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
                  {service.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontFamily: 'var(--font-dm-sans), sans-serif',
                        fontSize: '11px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: service.highlight ? 'var(--gold)' : 'var(--cream-muted)',
                        border: `1px solid ${service.highlight ? 'rgba(201,168,76,0.3)' : 'var(--void-border)'}`,
                        borderRadius: '6px',
                        padding: '6px 14px',
                        background: service.highlight ? 'rgba(201,168,76,0.02)' : 'transparent',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div style={{ alignSelf: 'flex-start' }}>
                  <MagneticButton href="/contact">Discuss This Service →</MagneticButton>
                </div>
              </div>
            )

            const visualDiv = (
              <div key="visual" className="flex items-center justify-center w-full">
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    border: `1px solid ${service.highlight ? 'rgba(201,168,76,0.35)' : 'var(--void-border)'}`,
                    background: service.highlight ? 'rgba(201,168,76,0.03)' : 'var(--void-2)',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '32px',
                    boxShadow: service.highlight ? '0 20px 40px rgba(0,0,0,0.4), inset 0 0 30px rgba(201,168,76,0.03)' : '0 20px 40px rgba(0,0,0,0.3)',
                  }}
                >
                  {/* Glowing background grid */}
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: 'linear-gradient(rgba(201,168,76,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.02) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      opacity: service.highlight ? 1 : 0.5,
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Rendering custom graphic representations */}
                  {service.type === 'calling' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
                      {/* Simulated VoIP Dialer Layout */}
                      <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'rgba(201,168,76,0.15)' }}>
                        <div className="flex items-center gap-3">
                          <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                          </span>
                          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '12px', letterSpacing: '0.05em', color: 'var(--cream-muted)', textTransform: 'uppercase' }}>
                            AI Agent Online
                          </span>
                        </div>
                        <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                          Latency: 720ms
                        </span>
                      </div>

                      {/* Caller Information panel */}
                      <div className="flex-1 flex flex-col justify-center gap-4">
                        <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--void-border)', padding: '16px', borderRadius: '8px' }}>
                          <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--cream-dim)', marginBottom: '4px' }}>Inbound Caller</p>
                          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontWeight: 500 }}>Sarah Mitchell (CFO)</p>
                        </div>

                        {/* Animated waveform mock */}
                        <div className="flex items-center justify-center gap-1.5 py-2">
                          {[25, 45, 15, 60, 85, 30, 70, 95, 40, 20, 55, 75, 10, 65, 80, 35].map((val, idx) => (
                            <div 
                              key={idx} 
                              className="bg-amber-500/40 rounded-full" 
                              style={{ 
                                width: '3px', 
                                height: `${val * 0.4}px`, 
                                background: service.highlight ? 'var(--gold)' : 'var(--cream-muted)',
                                opacity: 0.6 + (idx % 3) * 0.15,
                                transition: 'height 0.3s ease-in-out'
                              }} 
                            />
                          ))}
                        </div>

                        {/* Live transcripts and state panel */}
                        <div className="flex items-center justify-between" style={{ fontSize: '12px', fontFamily: 'var(--font-dm-sans), sans-serif', color: 'var(--cream-muted)' }}>
                          <span>Intent: Tax Query / Booking</span>
                          <span style={{ color: '#34d399', fontWeight: 500 }}>✓ Appointment Scheduled</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.type === 'saas' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
                      {/* IDE Mockup frame */}
                      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--void-border)' }}>
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                        </div>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-dm-sans), sans-serif', color: 'var(--cream-dim)' }}>src/app/api/portal/route.ts</span>
                      </div>

                      {/* Code content */}
                      <div className="flex-1 flex flex-col justify-center font-mono text-left" style={{ fontSize: '11px', lineHeight: 1.6, color: 'var(--cream-muted)' }}>
                        <p><span style={{ color: 'var(--gold)' }}>import</span> &#123; NextRequest, NextResponse &#125; <span style={{ color: 'var(--gold)' }}>from</span> <span style={{ color: '#a89f91' }}>'next/server'</span>;</p>
                        <p><span style={{ color: 'var(--gold)' }}>export async function</span> <span style={{ color: 'var(--gold-light)' }}>POST</span>(req: NextRequest) &#123;</p>
                        <p className="pl-4"><span style={{ color: 'var(--gold)' }}>const</span> payload = <span style={{ color: 'var(--gold)' }}>await</span> req.json();</p>
                        <p className="pl-4"><span style={{ color: 'var(--gold)' }}>const</span> status = <span style={{ color: 'var(--gold)' }}>await</span> db.client.update(&#123;</p>
                        <p className="pl-8">where: &#123; id: payload.clientId &#125;,</p>
                        <p className="pl-8">data: &#123; activeAgent: <span style={{ color: 'var(--gold-light)' }}>true</span> &#125;</p>
                        <p className="pl-4">&#125;);</p>
                        <p className="pl-4"><span style={{ color: 'var(--gold)' }}>return</span> NextResponse.json(&#123; status: <span style={{ color: '#34d399' }}>'deployed_success'</span> &#125;);</p>
                        <p>&#125;</p>
                      </div>

                      <div className="flex items-center justify-between border-t pt-3" style={{ borderColor: 'var(--void-border)', fontSize: '12px' }}>
                        <span className="text-emerald-500">✓ Type-safe Build Complete</span>
                        <span style={{ color: 'var(--cream-dim)' }}>ESLint Passed</span>
                      </div>
                    </div>
                  )}

                  {service.type === 'automation' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyItems: 'center', zIndex: 1 }}>
                      {/* Flow Diagram */}
                      <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', textTransform: 'uppercase', color: 'var(--cream-dim)', letterSpacing: '0.1em', marginBottom: '20px' }}>
                        Active Automation Pipeline
                      </p>
                      
                      <div className="flex-1 flex flex-col justify-center gap-3">
                        {/* Node 1 */}
                        <div className="flex items-center justify-between border p-3 rounded-lg" style={{ background: 'var(--void-3)', borderColor: 'var(--void-border)' }}>
                          <span style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 500 }}>Trigger: Inbound Invoice Received</span>
                          <span style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Webhook</span>
                        </div>

                        {/* Connection arrow */}
                        <div className="flex justify-center py-1">
                          <svg className="w-4 h-4 text-amber-500/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                          </svg>
                        </div>

                        {/* Node 2 */}
                        <div className="flex items-center justify-between border p-3 rounded-lg" style={{ background: 'var(--void-3)', borderColor: 'var(--void-border)' }}>
                          <span style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 500 }}>Process: Generative AI Document Parse</span>
                          <span style={{ fontSize: '10px', color: '#34d399', letterSpacing: '0.05em', textTransform: 'uppercase' }}>LLM Node</span>
                        </div>

                        {/* Connection arrow */}
                        <div className="flex justify-center py-1">
                          <svg className="w-4 h-4 text-amber-500/40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                          </svg>
                        </div>

                        {/* Node 3 */}
                        <div className="flex items-center justify-between border p-3 rounded-lg" style={{ background: 'var(--void-3)', borderColor: 'var(--void-border)' }}>
                          <span style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 500 }}>Action: Auto Sync to CRM & Notify</span>
                          <span style={{ fontSize: '10px', color: 'var(--cream-dim)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Integrations</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.type === 'website' && (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 1 }}>
                      {/* Website analytics report mock */}
                      <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--void-border)' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--cream)' }}>Performance Report</span>
                        <span style={{ fontSize: '11px', color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Production</span>
                      </div>

                      <div className="flex-1 flex items-center justify-around gap-6">
                        {/* Circle Score */}
                        <div className="flex flex-col items-center gap-2">
                          <div className="relative w-24 h-24 rounded-full flex items-center justify-center border-4" style={{ borderColor: 'rgba(52,211,153,0.3)', borderTopColor: '#10b981' }}>
                            <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', fontWeight: 700, color: '#34d399' }}>100</span>
                          </div>
                          <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--cream-muted)', letterSpacing: '0.05em' }}>Lighthouse</span>
                        </div>

                        {/* Speed stats */}
                        <div className="flex flex-col gap-4 text-left">
                          <div>
                            <p style={{ fontSize: '11px', color: 'var(--cream-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>First Contentful Paint</p>
                            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontWeight: 500 }}>0.4 seconds</p>
                          </div>
                          <div>
                            <p style={{ fontSize: '11px', color: 'var(--cream-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Speed Index</p>
                            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontWeight: 500 }}>0.9 seconds</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-3 flex justify-between items-center" style={{ borderColor: 'var(--void-border)', fontSize: '11px', color: 'var(--cream-muted)' }}>
                        <span>SEO Indexing: Structured</span>
                        <span>Interactive: 1.1s</span>
                      </div>
                    </div>
                  )}

                  <p
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '18px',
                      color: 'var(--gold)',
                      opacity: 0.25,
                      fontStyle: 'italic',
                      position: 'absolute',
                      bottom: '24px',
                      right: '32px',
                      zIndex: 0,
                    }}
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>
            )

            return (
              <div
                key={i}
                className="core-service-row grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 py-16 md:py-24 border-b border-void-border items-center"
                style={{ borderBottom: '1px solid var(--void-border)' }}
              >
                {i % 2 === 0 ? (
                  <>
                    {textDiv}
                    {visualDiv}
                  </>
                ) : (
                  <>
                    {visualDiv}
                    {textDiv}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Additional services */}
      <section
        style={{
          padding: '128px 0',
          background: 'var(--void-2)',
          borderTop: '1px solid var(--void-border)',
        }}
      >
        <div className="container">
          <RevealText className="mb-16">
            <h2
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(28px, 4vw, 52px)',
                fontWeight: 600,
                color: 'var(--cream)',
              }}
            >
              Additional Capabilities
            </h2>
          </RevealText>

          <div className="additional-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((s, i) => (
              <div
                key={i}
                className="additional-card"
                style={{
                  border: '1px solid var(--void-border)',
                  borderRadius: '8px',
                  padding: '36px',
                  background: 'var(--void-3)',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--void-border)')}
              >
                <RevealText className="mb-3">
                  <h3
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: '24px',
                      fontWeight: 500,
                      color: 'var(--cream)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    {s.title}
                    <span style={{ color: 'var(--gold)', fontSize: '16px', transition: 'transform 0.3s' }}>→</span>
                  </h3>
                </RevealText>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '14px', lineHeight: 1.7, color: 'var(--cream-muted)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
