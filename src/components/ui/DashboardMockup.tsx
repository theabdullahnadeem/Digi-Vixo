'use client'
import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

const recentCalls = [
  { name: 'Sarah Mitchell', type: 'Tax Consultation', time: '2m ago', status: 'booked' },
  { name: 'Robert Chen', type: 'Audit Inquiry', time: '8m ago', status: 'booked' },
  { name: 'Jennifer Walsh', type: 'Business Filing', time: '14m ago', status: 'qualified' },
  { name: 'Mark Davidson', type: 'IRS Question', time: '21m ago', status: 'transferred' },
  { name: 'Lisa Park', type: 'Tax Return', time: '35m ago', status: 'booked' },
]

const statusColors: Record<string, string> = {
  booked: '#22c55e',
  qualified: '#C9A84C',
  transferred: '#60a5fa',
}

export default function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the stat bars
      barRefs.current.forEach((bar, i) => {
        if (!bar) return
        const widths = [94, 87, 99, 72, 88, 91, 78]
        gsap.from(bar, {
          scaleX: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5 + i * 0.08,
          transformOrigin: 'left',
        })
        gsap.to(bar, {
          width: `${widths[i % widths.length]}%`,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.5 + i * 0.08,
        })
      })

      // Live counter increment
      const liveEl = document.querySelector('.dash-live-count')
      if (liveEl) {
        const obj = { val: 124 }
        gsap.to(obj, {
          val: 131,
          duration: 8,
          ease: 'none',
          repeat: -1,
          onUpdate: () => {
            liveEl.textContent = Math.round(obj.val).toString()
          },
        })
      }

      // Subtle float animation
      gsap.to(containerRef.current, {
        y: -8,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: '460px',
        background: 'rgba(15,15,15,0.95)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.08)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Header bar */}
      <div
        style={{
          padding: '12px 16px',
          background: 'rgba(20,20,20,0.8)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['#ef4444', '#f59e0b', '#22c55e'].map((c) => (
              <div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.7 }} />
            ))}
          </div>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream-dim)', letterSpacing: '0.05em' }}>
            dashboard.digivixo.com
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ position: 'relative', width: '7px', height: '7px' }}>
            <div
              className="live-dot"
              style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', position: 'relative', zIndex: 1 }}
            />
          </div>
          <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: '#22c55e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Live
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {[
          { label: 'Calls Today', value: null, liveClass: 'dash-live-count', suffix: '' },
          { label: 'Answered', value: '98.2%', liveClass: null, suffix: '' },
          { label: 'Missed', value: '0', liveClass: null, suffix: '' },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '16px 14px',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontSize: '26px',
                fontWeight: 600,
                color: i === 2 ? '#22c55e' : 'var(--cream)',
                lineHeight: 1,
                marginBottom: '4px',
              }}
            >
              {stat.liveClass ? (
                <span className={stat.liveClass}>124</span>
              ) : (
                stat.value
              )}
            </p>
            <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'var(--cream-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: 'var(--cream-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Call Volume — Last 7 Days
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '10px', color: 'var(--gold)' }}>+18% vs last week</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '48px' }}>
          {[60, 75, 55, 85, 70, 90, 95].map((h, i) => (
            <div
              key={i}
              ref={(el) => { barRefs.current[i] = el }}
              style={{
                flex: 1,
                height: `${h}%`,
                background: i === 6 ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
                borderRadius: '2px 2px 0 0',
                transition: 'background 0.2s',
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            <p key={i} style={{ flex: 1, textAlign: 'center', fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '8px', color: 'var(--cream-dim)', letterSpacing: '0.05em' }}>
              {d}
            </p>
          ))}
        </div>
      </div>

      {/* Recent calls */}
      <div style={{ padding: '12px 0' }}>
        <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'var(--cream-dim)', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0 16px 10px' }}>
          Recent Calls
        </p>
        {recentCalls.map((call, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '7px 16px',
              borderBottom: i < recentCalls.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'var(--gold)', fontWeight: 500 }}>
                  {call.name[0]}
                </span>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '11px', color: 'var(--cream)', fontWeight: 500, lineHeight: 1.3 }}>
                  {call.name}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'var(--cream-dim)' }}>
                  {call.type}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontSize: '9px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: statusColors[call.status],
                  background: `${statusColors[call.status]}18`,
                  padding: '2px 7px',
                  borderRadius: '2px',
                }}
              >
                {call.status}
              </span>
              <p style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontSize: '9px', color: 'var(--cream-dim)' }}>
                {call.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
