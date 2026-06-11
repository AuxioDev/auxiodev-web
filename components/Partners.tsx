import { partners } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Partners() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-16 lg:px-24 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-8">Trusted by</p>
        </AnimateIn>

        <AnimateIn direction="left" className="flex gap-10 flex-wrap items-center justify-center md:justify-start">
          {partners.map((name) => (
            <div
              key={name}
              className="w-24 h-8 bg-white/10 rounded-sm flex items-center justify-center hover:bg-white/15 transition-colors"
              role="img"
              aria-label={name}
            >
              <span className="text-[10px] text-white/30 font-mono tracking-widest">{name}</span>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}
