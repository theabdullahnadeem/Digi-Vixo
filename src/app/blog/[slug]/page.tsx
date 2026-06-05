'use client'
import { use, useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/lib/gsap'
import RevealText from '@/components/ui/RevealText'
import GoldLine from '@/components/ui/GoldLine'

const blogData = {
  'how-ai-calling-agents-reduced-missed-calls': {
    date: 'May 2025',
    category: 'AI Calling',
    title: 'How AI Calling Agents Reduced Missed Calls from 32% to 5% at a Mid-Size CPA Firm',
    readTime: '6 min read',
    content: (
      <>
        <p className="lead" style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--cream)', marginBottom: '24px', fontStyle: 'italic' }}>
          During peak tax season, administrative bottlenecks cost firms substantial client goodwill and missed consulting fees. This technical report details how we integrated a customized conversational voice agent to handle inbound inquiries.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Challenge</h2>
        <p style={{ marginBottom: '20px' }}>
          A leading CPA firm with 14 full-time accountants experienced a 340% spike in inbound call volume from mid-February to April. The front-desk staff could only handle approximately 68% of these calls. The remaining 32% were sent to voicemail, but analytics showed that 62% of voicemail callers hung up without leaving a message, choosing instead to call competitors.
        </p>
        <p style={{ marginBottom: '20px' }}>
          This resulted in an estimated loss of over $12,500 in potential monthly pipeline value. The firm needed an automated answering system that was warm, conversational, knowledgeable about filing deadlines, and capable of booking qualified leads directly into accountant schedules.
        </p>

        <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '24px', margin: '32px 0', fontStyle: 'italic', color: 'var(--cream)' }}>
          "Voicemail is where client acquisition goes to die. In professional services, the first firm that answers the phone and qualifies the caller wins the engagement."
        </blockquote>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Our Strategy</h2>
        <p style={{ marginBottom: '20px' }}>
          We constructed a dedicated voice AI calling agent utilizing a low-latency WebRTC speech pipe. The agent was trained on a proprietary vector database containing the firm's scheduling guidelines, service offerings, pricing baselines, and frequently asked tax questions.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Key technical integrations included:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '10px' }}>Direct phone hook integration via SIP trunking, maintaining the firm's primary local number.</li>
          <li style={{ marginBottom: '10px' }}>Two-way real-time calendar synchronization using Calendly APIs to dynamically allocate appointments based on staff specialty.</li>
          <li style={{ marginBottom: '10px' }}>Automated caller qualification parsing (e.g., separating simple document drop-off queries from high-value consulting inquiries).</li>
          <li style={{ marginBottom: '10px' }}>Instant webhook syncing with HubSpot CRM to log call transcripts, phone records, and intent tags.</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Implementation</h2>
        <p style={{ marginBottom: '20px' }}>
          The system was deployed within 48 hours. During the initial 10-day testing phase, the agent ran in "co-pilot" mode, routing transcription analysis to a dashboard for rapid review. The LLM prompts were refined to capture a polite, professional, and reassuring tone appropriate for high-net-worth CPA clients.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Results</h2>
        <p style={{ marginBottom: '20px' }}>
          Over a 60-day operational period, the calling agent answered 1,420 calls. The results were immediate:
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '32px 0', fontSize: '14px', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--void-border)' }}>
              <th style={{ padding: '12px', color: 'var(--gold)', fontWeight: 600 }}>Metric Evaluated</th>
              <th style={{ padding: '12px', color: 'var(--gold)', fontWeight: 600 }}>Pre-Deployment</th>
              <th style={{ padding: '12px', color: 'var(--gold)', fontWeight: 600 }}>Post-Deployment</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--void-border)' }}>
              <td style={{ padding: '12px' }}>Inbound Missed Call Rate</td>
              <td style={{ padding: '12px' }}>32.4%</td>
              <td style={{ padding: '12px', color: '#34d399', fontWeight: 500 }}>4.8%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--void-border)' }}>
              <td style={{ padding: '12px' }}>Lead to Consultation Booking Rate</td>
              <td style={{ padding: '12px' }}>18.2%</td>
              <td style={{ padding: '12px', color: '#34d399', fontWeight: 500 }}>41.5%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--void-border)' }}>
              <td style={{ padding: '12px' }}>Average Answer Speed</td>
              <td style={{ padding: '12px' }}>15 seconds (or voicemail)</td>
              <td style={{ padding: '12px', color: '#34d399', fontWeight: 500 }}>&lt; 1.5 seconds</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--void-border)' }}>
              <td style={{ padding: '12px' }}>Estimated Pipeline Saved</td>
              <td style={{ padding: '12px' }}>N/A</td>
              <td style={{ padding: '12px', color: '#34d399', fontWeight: 500 }}>+$38,400 (60 days)</td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginBottom: '20px' }}>
          By handling administrative tasks and scheduling autonomously, the front-desk staff redirected their effort toward high-touch client relations, tax document processing, and administrative support. The firm successfully protected its brand reputation while maximizing billable consultations during their busiest season.
        </p>
      </>
    )
  },
  'why-tax-season-is-worst-time': {
    date: 'April 2025',
    category: 'Industry',
    title: 'Why Tax Season Is the Worst Time to Have a Human Answering Your Phones',
    readTime: '4 min read',
    content: (
      <>
        <p className="lead" style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--cream)', marginBottom: '24px', fontStyle: 'italic' }}>
          Human resource limitations represent the largest operational bottleneck for accounting firms during filing seasons. Relying solely on manual front-desk answering is a significant revenue leak.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Fatigue Bottleneck</h2>
        <p style={{ marginBottom: '20px' }}>
          During busy season, front-desk coordinators handle hundreds of incoming phone calls daily while checking in clients, preparing mailings, and sorting physical documentation. The physical and cognitive demand is extreme. Research indicates that after 4 hours of continuous multi-tasking, receptionist greeting warmth decreases and intake error rates spike by up to 28%.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Financial Cost of Voicemail</h2>
        <p style={{ marginBottom: '20px' }}>
          When multiple calls occur simultaneously, surplus callers are automatically routed to voicemail. For CPAs, a missed call is not just a missed conversation; it is a lost client. Prospective clients seeking immediate assistance for tax emergencies rarely wait for a callback. They immediately click the next listing on search results.
        </p>

        <blockquote style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '24px', margin: '32px 0', fontStyle: 'italic', color: 'var(--cream)' }}>
          "Over 60% of modern financial clients expect instant response. Voicemail is no longer an acceptable solution; it is a direct hand-off to your competition."
        </blockquote>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>How Voice AI Protects the Front Desk</h2>
        <p style={{ marginBottom: '20px' }}>
          By implementing conversational voice AI, CPA firms create an infinite digital queue. The AI calling agent handles simple document status checks, appointment reschedules, and basic filing inquiries. High-value incoming client problems are warm-transferred directly to accountant desks, while standard leads are qualified and scheduled in real-time. 
        </p>
        <p style={{ marginBottom: '20px' }}>
          This hybrid approach preserves the energy of the physical front-desk staff, allows them to focus on complex administrative tasks, and ensures that every single inbound call is answered instantly by a polished, professional voice.
        </p>
      </>
    )
  },
  'architecture-behind-production-ai-calling-agent': {
    date: 'March 2025',
    category: 'Technology',
    title: 'The Architecture Behind a Production AI Calling Agent: What Actually Runs When Your Phone Rings',
    readTime: '8 min read',
    content: (
      <>
        <p className="lead" style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--cream)', marginBottom: '24px', fontStyle: 'italic' }}>
          Building voice agents that feel natural and human requires resolving complex latency challenges. Here is a technical breakdown of our low-latency infrastructure.
        </p>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>The Voice Pipeline</h2>
        <p style={{ marginBottom: '20px' }}>
          Rethinking real-time voice calls requires chaining three primary computational nodes together in a highly synchronized loop:
        </p>
        <ol style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'decimal' }}>
          <li style={{ marginBottom: '10px' }}><strong>Speech-to-Text (STT)</strong>: Transcribing raw analog telephony audio streams into clean text tokens.</li>
          <li style={{ marginBottom: '10px' }}><strong>LLM Orchestration</strong>: Processing the text tokens, checking context buffers, fetching API data, and generating the text response.</li>
          <li style={{ marginBottom: '10px' }}><strong>Text-to-Speech (TTS)</strong>: Synthesizing the text response back into natural, expressive human audio.</li>
        </ol>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Solving the Latency Issue</h2>
        <p style={{ marginBottom: '20px' }}>
          Humans expect a response in conversation within 600ms to 1000ms. Traditional API chaining takes upwards of 3 seconds, leading to awkward pauses and overlapping speech. To minimize this latency, our calling agents implement the following optimizations:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '10px' }}><strong>Streaming Websockets</strong>: Telephony audio is streamed directly using WebRTC channels to prevent buffer-waiting pauses.</li>
          <li style={{ marginBottom: '10px' }}><strong>Semantic Interruption Detection</strong>: Utilizing voice-activity detection (VAD) models at the edge. If the caller speaks while the agent is answering, the agent instantly halts output generation and listens.</li>
          <li style={{ marginBottom: '10px' }}><strong>Token Streaming</strong>: The LLM streams tokens directly to the TTS synthesizer. The voice begins rendering the first syllables of a sentence before the full paragraph is finished computing.</li>
        </ul>

        <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', margin: '40px 0 16px' }}>Security & Compliance</h2>
        <p style={{ marginBottom: '20px' }}>
          Processing financial client details demands enterprise-grade security. All transit streams are fully encrypted using Secure Real-time Transport Protocol (SRTP). Telephony servers are housed within SOC2-compliant data centers. Personal identifiable information (PII) is dynamically redacted from call transcripts using specialized parser filters before being logged to standard databases.
        </p>
      </>
    )
  }
}

export default function BlogSlugPage({ params }: { params: any }) {
  // Safe param resolution for Next.js versions where params is a Promise
  const resolvedParams = params && typeof params.then === 'function' ? use(params) : params
  const slug = resolvedParams?.slug as keyof typeof blogData
  const post = blogData[slug]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.article-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from('.article-body', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15
      })
    }, containerRef)
    return () => ctx.revert()
  }, [slug])

  if (!post) {
    return (
      <div style={{ background: 'var(--void)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--cream)', fontSize: '20px', marginBottom: '16px' }}>Post not found.</p>
        <Link href="/blog" style={{ color: 'var(--gold)', textDecoration: 'none', border: '1px solid var(--gold)', padding: '10px 24px', borderRadius: '8px' }}>
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div ref={containerRef} style={{ background: 'var(--void)', minHeight: '100vh' }}>
      {/* Back button & Header */}
      <section style={{ padding: '144px 0 64px', borderBottom: '1px solid var(--void-border)' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link href="/blog" className="article-header" style={{ color: 'var(--cream-muted)', textDecoration: 'none', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--cream-muted)'}>
            ← Back to Blog
          </Link>
          
          <div className="article-header">
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ color: 'var(--gold)', textTransform: 'uppercase', fontSize: '11px', fontFamily: 'var(--font-dm-sans), sans-serif', letterSpacing: '0.15em' }}>
                {post.category}
              </span>
              <span style={{ color: 'var(--cream-dim)', fontSize: '12px' }}>
                {post.date} · {post.readTime}
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
              }}
            >
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main content body */}
      <section style={{ padding: '64px 0 128px' }}>
        <div className="px-6 md:px-12 article-body" style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '15px', lineHeight: 1.8, color: 'var(--cream-muted)' }}>
          {post.content}
          
          <GoldLine className="my-16" />
          
          {/* Bottom callout */}
          <div style={{ background: 'var(--void-2)', border: '1px solid var(--void-border)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: '28px', color: 'var(--cream)', marginBottom: '12px', fontWeight: 500 }}>
              Want to see how this fits your firm?
            </h3>
            <p style={{ color: 'var(--cream-muted)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
              We build custom proof-of-concept voice agents for qualified accounting firms in under 48 hours. Let's discuss your calling bottlenecks.
            </p>
            <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--void)', background: 'var(--gold)', border: '1px solid var(--gold)', padding: '12px 28px', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.borderColor = 'var(--gold-light)' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}>
              Discuss Calling Agents →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
