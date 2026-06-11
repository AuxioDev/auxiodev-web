'use client'
import { useRef } from 'react'

interface Props {
  title: string
  description: string
  videoSrc: string
  tags?: string[]
}

export function VideoCard({ title, description, videoSrc, tags }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  return (
    <div
      className="bg-bg group cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
    </div>
  )
}
