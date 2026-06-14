'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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
      {count}{suffix}
    </span>
  )
}

const items = [
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
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-accent/10">
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

          <div className="flex flex-col gap-5">
            {items.map((item, i) => (
              <AnimateIn key={item.label} delay={0.15 + i * 0.12}>
                <div className="relative pl-4">
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 origin-top"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <p className="text-xs font-semibold tracking-tight text-accent mb-1">{item.label}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-accent/10 pt-12">
          {aboutStats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.08}>
              <CountUp target={stat.value} suffix={stat.suffix} />
              <motion.p
                className="text-[10px] uppercase tracking-[0.2em] text-muted mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 + 0.4, duration: 0.4 }}
              >
                {stat.label}
              </motion.p>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
