'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { aboutStats } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!isInView) return
    const duration = 1200
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-5xl font-bold tracking-tightest text-bright">
      {count}
      {suffix}
    </span>
  )
}

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <AnimateIn>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">About us</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              Built for the long run
            </h2>
            <p className="text-dim text-sm leading-relaxed max-w-md">
              We are a small, senior team of designers and engineers who believe in doing fewer
              things better. Every project is a long-term partnership — we design systems that
              scale, code that lasts, and brands that endure.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15} className="flex flex-col gap-5">
            {[
              {
                label: 'Mission',
                text: 'Eliminate the gap between great ideas and great software. We turn ambitious visions into products people love using.',
              },
              {
                label: 'Vision',
                text: 'A world where every business — regardless of size — has access to software crafted with the same care as the best products.',
              },
              {
                label: 'Approach',
                text: 'Deep discovery, rapid iteration, honest feedback. We ship fast and refine continuously, treating every release as a hypothesis.',
              },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-white/10 pl-4">
                <p className="text-xs font-semibold tracking-tight text-white mb-1">{item.label}</p>
                <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </AnimateIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/[0.08] pt-12">
          {aboutStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08}>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-2">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
