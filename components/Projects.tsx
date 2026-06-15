'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { VideoCard } from '@/components/ui/VideoCard'

const PAGE_SIZE = 4

export function Projects() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(projects.length / PAGE_SIZE)
  const pageItems = projects.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-accent/10">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Selected work</h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pageItems.map((project, index) => (
            <AnimateIn
              key={project.title}
              delay={index * 0.08}
              className={pageItems.length % 2 !== 0 && index === pageItems.length - 1 ? 'md:col-span-2' : undefined}
            >
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

        {totalPages > 1 && (
          <AnimateIn className="flex items-center gap-4 mb-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous page"
              className="p-2 border border-accent/20 rounded-sm text-dim hover:border-accent/50 hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === page ? 'bg-accent' : 'bg-accent/20 hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label="Next page"
              className="p-2 border border-accent/20 rounded-sm text-dim hover:border-accent/50 hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight size={16} />
            </button>

            <span className="text-[10px] text-muted tracking-wide ml-1">
              {page + 1} / {totalPages}
            </span>
          </AnimateIn>
        )}
      </div>
    </section>
  )
}
