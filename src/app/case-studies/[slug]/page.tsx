'use client'
import { use, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import GoldLine from '@/components/ui/GoldLine'

const caseStudyData = {
  'ai-calling-agent-deployment': {
    category: 'AI',
    industry: 'Professional Services / Accounting',
    label: 'Verified Results — Client Name Withheld',
    title: 'AI Calling Agent Deployment',
    problem: 'Accounting firm losing 32% of inbound calls to voicemail during tax season.',
    metric: '5%',
    metricLabel: 'Missed call rate (down from 32%)',
    secondary: '+13% Revenue',
    timeline: '60 days',
    content: (
      <>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Executive Summary</h2>
        <p style={{ marginBottom: '20px' }}>
          During the intense pressure of the annual filing season, CPA and tax advisory firms face an enormous influx of phone traffic. This case study covers the deployment of a low-latency conversational AI calling agent for a prominent mid-sized accounting firm. Within 60 days, the firm successfully recovered thousands in missed consultations, automated booking, and reduced its missed call rate to less than 5%.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Challenge</h2>
        <p style={{ marginBottom: '20px' }}>
          The client firm, which serves over 3,500 active business clients, struggled with front-desk capacity from February through April. Call volume spikes of up to 300% regularly overwhelmed receptionists, leading to:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '10px' }}>An average inbound call abandonment rate of 32% as lines remained busy.</li>
          <li style={{ marginBottom: '10px' }}>High receptionist burnout, leading to administrative errors in document processing.</li>
          <li style={{ marginBottom: '10px' }}>Voicemail boxes filling up daily with unstructured inquiries, delaying response times by up to 48 hours.</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Strategy & Solution</h2>
        <p style={{ marginBottom: '20px' }}>
          Digivixo designed and deployed a custom voice AI agent running on the firm's main office lines. By connecting a low-latency transcription engine directly to an accounting-fine-tuned LLM, the agent answered every call in under 1.5 seconds.
        </p>
        <p style={{ marginBottom: '20px' }}>
          The agent was configured to:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '10px' }}>Identify the caller's intent (e.g., status checks, booking consultations, or document submission queries).</li>
          <li style={{ marginBottom: '10px' }}>Access calendar availability in real-time to book qualified leads into the appropriate CPA's calendar.</li>
          <li style={{ marginBottom: '10px' }}>Resolve basic FAQs on tax deadlines, office hours, and file drop-off locations.</li>
          <li style={{ marginBottom: '10px' }}>Log summary transcripts and user profiles directly to HubSpot via automated webhooks.</li>
        </ul>

        <div style={{ background: 'var(--void-2)', borderLeft: '3px solid var(--gold)', padding: '24px 32px', margin: '40px 0', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.5 }}>
            "The AI agent handled 90% of scheduling queries without a single human touch. The volume of tax consultations booked increased by 40% year-over-year, saving senior staff hours of administrative work."
          </p>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', fontWeight: 600 }}>
            — Managing Partner, Client Firm
          </p>
        </div>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Technical Implementation</h2>
        <p style={{ marginBottom: '20px' }}>
          Built with an advanced STT/TTS pipeline, voice latency was kept under 800ms to ensure conversations felt smooth and responsive. We implemented custom interruption safety blocks: if a caller speaks over the AI, the agent halts its output generation instantly, preventing conversational collisions. All data transit utilized SOC2/HIPAA-compliant channels to guarantee client confidentiality.
        </p>
      </>
    )
  },
  'ecommerce-replatforming': {
    category: 'Web/SaaS',
    industry: 'E-commerce',
    label: 'Case Study',
    title: 'E-Commerce Replatforming',
    problem: 'Legacy platform causing poor conversion and slow page speeds.',
    metric: '34%',
    metricLabel: 'Conversion rate increase',
    secondary: '60% faster',
    timeline: '90 days',
    content: (
      <>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Executive Summary</h2>
        <p style={{ marginBottom: '20px' }}>
          Page speeds are directly correlated with buyer conversion. This case study details how we migrated a growing direct-to-consumer brand from a monolithic, sluggish backend to a modern, headless Shopify storefront built with React and Next.js.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Challenge</h2>
        <p style={{ marginBottom: '20px' }}>
          The client's legacy WooCommerce store had accumulated massive database debt, leading to product load speeds of over 5.2 seconds on mobile. The slower load speed resulted in checkout bounce rates of 64% and prevented successful scaling of paid marketing channels.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Solution</h2>
        <p style={{ marginBottom: '20px' }}>
          We constructed a headless Next.js frontend integrated with Shopify's GraphQL Storefront API. Pages were statically pre-rendered to achieve near-instantaneous load times (under 1.5 seconds) globally.
        </p>

        <div style={{ background: 'var(--void-2)', borderLeft: '3px solid var(--gold)', padding: '24px 32px', margin: '40px 0', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.5 }}>
            "Migrating to a headless storefront immediately unlocked new growth. Our pages are lightning fast, and we saw checkout conversions increase by 34% in the first month."
          </p>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', fontWeight: 600 }}>
            — Director of E-commerce
          </p>
        </div>
      </>
    )
  },
  'saas-architecture-overhaul': {
    category: 'Web/SaaS',
    industry: 'SaaS',
    label: 'Case Study',
    title: 'SaaS Architecture Overhaul',
    problem: 'Monolithic architecture blocking deployment velocity and scale.',
    metric: '80%',
    metricLabel: 'Faster deployments',
    secondary: '5x user growth',
    timeline: '120 days',
    content: (
      <>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Executive Summary</h2>
        <p style={{ marginBottom: '20px' }}>
          When software architectures become too complex, scaling bottlenecks and slower feature shipping hurt business growth. This technical case study documents the refactoring of a SaaS application's core backend.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Challenge</h2>
        <p style={{ marginBottom: '20px' }}>
          An enterprise customer billing platform was built as a single monolith. Adding simple fields required re-deploying the entire database schema, leading to system downtime and a feature release queue that lagged by months.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Solution</h2>
        <p style={{ marginBottom: '20px' }}>
          We re-architected the monolith into containerized serverless microservices on AWS, using TypeScript, Prisma, and PostgreSQL. We implemented database replication, robust API gateways, and integrated CI/CD deployment pipelines.
        </p>

        <div style={{ background: 'var(--void-2)', borderLeft: '3px solid var(--gold)', padding: '24px 32px', margin: '40px 0', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.5 }}>
            "The refactored code has transformed our engineering velocity. We deploy multiple updates daily with complete peace of mind, and the site scales effortlessly."
          </p>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', fontWeight: 600 }}>
            — Chief Technology Officer
          </p>
        </div>
      </>
    )
  },
  'ai-inventory-automation': {
    category: 'AI',
    industry: 'Logistics',
    label: 'Case Study',
    title: 'AI Inventory Automation',
    problem: 'Manual inventory processes causing stockouts and anomalies.',
    metric: '40%',
    metricLabel: 'Processing time reduction',
    secondary: 'Zero anomalies',
    timeline: '45 days',
    content: (
      <>
        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Executive Summary</h2>
        <p style={{ marginBottom: '20px' }}>
          Manual processes are prone to data errors. This case study details how we automated data extraction and processing for an international logistics provider.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Challenge</h2>
        <p style={{ marginBottom: '20px' }}>
          The client processed over 250 complex custom manifests daily. Staff manually copied codes into an inventory database, resulting in an error rate of 6% and causing expensive stockouts at warehouse hubs.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Solution</h2>
        <p style={{ marginBottom: '20px' }}>
          We developed a customized OCR document extraction engine using computer vision and private generative models. Transcribed data is audited against a rule system and synced automatically to the inventory CRM.
        </p>

        <div style={{ background: 'var(--void-2)', borderLeft: '3px solid var(--gold)', padding: '24px 32px', margin: '40px 0', borderRadius: '0 8px 8px 0' }}>
          <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '20px', color: 'var(--cream)', fontStyle: 'italic', marginBottom: '8px', lineHeight: 1.5 }}>
            "Automation has freed our teams from hours of manual copying. The error rate dropped to zero, and we handle inventories 40% faster."
          </p>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', fontWeight: 600 }}>
            — Operations Manager
          </p>
        </div>
      </>
    )
  }
}

export default function CaseStudySlugPage({ params }: { params: any }) {
  // Safe param resolution for Next.js versions where params is a Promise
  const resolvedParams = params && typeof params.then === 'function' ? use(params) : params
  const slug = resolvedParams?.slug as keyof typeof caseStudyData
  const study = caseStudyData[slug]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.study-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.study-body', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15
      })
    }, containerRef)
    return () => ctx.revert()
  }, [slug])

  if (!study) {
    return (
      <div style={{ background: 'var(--void)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--cream)', fontSize: '20px', marginBottom: '16px' }}>Case study not found.</p>
        <Link href="/case-studies" style={{ color: 'var(--gold)', textDecoration: 'none', border: '1px solid var(--gold)', padding: '10px 24px', borderRadius: '8px' }}>
          Back to Case Studies
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Back button & Header */}
      <section style={{ padding: '144px 0 64px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/case-studies" className="study-header" style={{ color: 'var(--cream-muted)', textDecoration: 'none', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream-muted)'}>
            ← Back to Case Studies
          </Link>
          
          <div className="study-header">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '11px', fontFamily: 'var(--font-dm-sans), sans-serif', letterSpacing: '0.15em' }}>
                {study.category}
              </span>
              <span style={{ color: 'var(--cream-dim)', fontSize: '12px' }}>
                {study.industry} · {study.timeline}
              </span>
            </div>
            
            <h1
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: 'clamp(32px, 5vw, 56px)',
                fontWeight: 600,
                lineHeight: 1.1,
                color: 'var(--cream)',
                letterSpacing: '-0.01em',
                marginBottom: '24px'
              }}
            >
              {study.title}
            </h1>

            <p style={{ color: 'var(--gold)', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 500 }}>
              {study.label}
            </p>
          </div>
        </div>
      </section>

      {/* Main content body */}
      <section style={{ padding: '64px 0 128px' }}>
        <div className="px-6 md:px-12 study-body" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'var(--cream-muted)' }}>
          
          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-2 gap-8 p-8 mb-12 border border-void-border" style={{ background: 'var(--void-2)', borderRadius: '12px' }}>
            <div>
              <p style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontFamily: 'var(--font-cormorant), serif', color: 'var(--cream)', fontWeight: 600, lineHeight: 1 }}>
                {study.metric}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--cream-muted)', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {study.metricLabel}
              </p>
            </div>
            <div className="flex flex-col justify-end">
              <p style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontFamily: 'var(--font-cormorant), serif', color: 'var(--gold)', fontWeight: 500, lineHeight: 1 }}>
                {study.secondary}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--cream-dim)', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Secondary Outcome
              </p>
            </div>
          </div>

          {study.content}
          
          <GoldLine className="my-16" />
          
          {/* Bottom callout */}
          <div style={{ background: 'var(--void-2)', border: '1px solid var(--void-border)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', marginBottom: '12px', fontWeight: 500 }}>
              Replicate these outcomes in your operations
            </h3>
            <p style={{ color: 'var(--cream-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              Every engagement starts with a technical review of your existing channels. Schedule a direct call to see what results we can guarantee.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--void)', background: 'var(--gold)', border: '1px solid var(--gold)', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.borderColor = 'var(--gold-light)' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}>
              Discuss This Case Study →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
