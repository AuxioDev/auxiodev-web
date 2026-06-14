import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What we build</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-accent/10">
          {services.map((service, index) => (
            <AnimateIn key={service.number} delay={index * 0.07}>
              <div className="border-b border-r border-accent/10 p-7 hover:bg-accent/[0.04] hover:-translate-y-0.5 transition-all duration-200 group h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono text-accent/40 tracking-widest">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  />
                </div>
                <h3 className="text-base md:text-lg font-semibold tracking-tight text-bright mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
