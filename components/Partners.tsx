import { partners } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Partners() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-16 lg:px-24 border-t border-accent/10">
      <div className="max-w-7xl mx-auto">
        <AnimateIn>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-8">Trusted by</p>
        </AnimateIn>

        <div className="flex gap-6 flex-wrap items-center justify-center md:justify-start">
          {partners.map((name, i) => (
            <AnimateIn key={name} delay={i * 0.07} direction="left">
              <div
                className="w-24 h-8 bg-accent/[0.07] border border-accent/10 rounded-sm flex items-center justify-center hover:bg-accent/15 hover:scale-105 transition-all duration-200 cursor-default"
                role="img"
                aria-label={name}
              >
                <span className="text-[10px] text-accent/50 font-mono tracking-widest">{name}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
