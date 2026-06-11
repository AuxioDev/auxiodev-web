'use client'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-28 px-6 md:px-16 lg:px-24">
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
          className="text-5xl md:text-7xl font-bold tracking-tightest leading-[1.05] mb-8 max-w-4xl"
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
            className="bg-bright text-bg font-semibold px-6 py-3 rounded-sm hover:bg-white transition-colors text-sm"
          >
            View our work
          </a>
          <a
            href="#contact"
            className="border border-white/15 text-dim px-6 py-3 rounded-sm hover:border-white/40 hover:text-white transition-colors text-sm flex items-center gap-2"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </AnimateIn>
      </div>

      <div className="border-t border-white/[0.08] mt-20" />
    </section>
  )
}
