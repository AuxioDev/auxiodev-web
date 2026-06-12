import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { VideoCard } from '@/components/ui/VideoCard'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Selected work</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <AnimateIn key={project.title} delay={index * 0.08}>
              <VideoCard
                title={project.title}
                description={project.description}
                videoSrc={project.videoSrc}
                iframeSrc={project.iframeSrc}
                href={project.href}
                tags={project.tags}
              />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-white/15 text-dim px-6 py-3 rounded-sm hover:border-white/40 hover:text-white transition-colors text-sm"
          >
            View all projects <ArrowRight size={14} />
          </a>
        </AnimateIn>
      </div>
    </section>
  )
}
