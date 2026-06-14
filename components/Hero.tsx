'use client'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { brand } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

function SplitWords({ text, dim }: { text: string; dim?: boolean }) {
  return (
    <>
      {text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] ${dim ? 'text-white/30' : 'text-white'}`}
        >
          {word}
        </motion.span>
      ))}
    </>
  )
}

function AsteriskStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <line x1="20" y1="2" x2="20" y2="38" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1" />
      <line x1="5.86" y1="5.86" x2="34.14" y2="34.14" stroke="currentColor" strokeWidth="1" />
      <line x1="34.14" y1="5.86" x2="5.86" y2="34.14" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <AsteriskStar className="absolute top-10 right-10 md:right-20 w-10 h-10 text-accent/25 pointer-events-none" />
      <AsteriskStar className="absolute bottom-32 left-5 w-6 h-6 text-brand/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <AnimateIn delay={0} className="mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Innovating since {brand.year}
          </p>
        </AnimateIn>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tightest leading-[1.05] mb-8 max-w-4xl"
        >
          <span className="block">
            <SplitWords text="We craft digital" />
          </span>
          <span className="block">
            <SplitWords text="products that" dim />
            <SplitWords text="last." />
          </span>
        </motion.h1>

        <AnimateIn delay={0.4}>
          <p className="text-dim text-base max-w-xl leading-relaxed mb-10">
            Auxiodev is a digital solutions studio building ambitious web products,
            mobile applications, and brand systems for companies that care about craft.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.6} className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-accent text-white font-semibold px-6 py-3 rounded-sm hover:bg-brand transition-colors text-sm"
          >
            View our work
          </a>
          <a
            href="#contact"
            className="border border-accent/20 text-dim px-6 py-3 rounded-sm hover:border-accent/50 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </AnimateIn>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-accent/35 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>

      <div className="border-t border-accent/10 mt-20" />
    </section>
  )
}
