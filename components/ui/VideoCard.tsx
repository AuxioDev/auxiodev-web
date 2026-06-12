'use client'
import { useRef } from 'react'

interface Props {
  title: string
  description: string
  videoSrc?: string
  iframeSrc?: string
  href?: string
  tags?: string[]
}

export function VideoCard({ title, description, videoSrc, iframeSrc, href, tags }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  const inner = (
    <>
      {iframeSrc ? (
        <div style={{ height: '480px', overflow: 'hidden', position: 'relative' }}>
          <iframe
            src={iframeSrc}
            title={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none', display: 'block' }}
          />
        </div>
      ) : (
        <div className="relative w-full h-52 md:h-64 overflow-hidden bg-surface">
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-bg/40 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      )}
      <div className="p-6 border-t border-white/[0.08]">
        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-bright transition-colors">
          {title}
        </h3>
        <p className="text-white/40 text-xs leading-relaxed mb-3">{description}</p>
        {tags && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[10px] text-white/25 border border-white/[0.08] px-2 py-0.5 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-bg group cursor-pointer overflow-hidden block"
    >
      {inner}
    </a>
  ) : (
    <div
      className="bg-bg group cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </div>
  )
}
