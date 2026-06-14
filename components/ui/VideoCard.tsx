'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

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
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const isVideoInView = useInView(videoContainerRef, { amount: 0.5 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none)').matches)
  }, [])

  useEffect(() => {
    if (!isTouch || !videoRef.current) return
    if (isVideoInView) videoRef.current.play().catch(() => {})
    else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isVideoInView, isTouch])

  const handleMouseEnter = () => {
    if (!isTouch) videoRef.current?.play().catch(() => {})
  }

  const handleMouseLeave = () => {
    if (isTouch) return
    const v = videoRef.current
    if (v) { v.pause(); v.currentTime = 0 }
  }

  const media = iframeSrc ? (
    <div className="relative w-full overflow-hidden aspect-[4/3]">
      <iframe
        src={iframeSrc}
        title={title}
        loading="lazy"
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          border: 'none', pointerEvents: 'none', display: 'block',
        }}
      />
    </div>
  ) : (
    <div ref={videoContainerRef} className="relative w-full h-52 md:h-64 overflow-hidden bg-surface">
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
  )

  const info = (
    <div className="p-6 border-t border-accent/10">
      <h3 className="text-white font-semibold text-base mb-1 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed mb-3">{description}</p>
      {tags && (
        <div className="flex gap-2 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="text-[10px] text-accent/50 border border-accent/10 px-2 py-0.5 rounded-sm">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  const cardClass = 'bg-accent/[0.02] border border-accent/10 rounded-sm group overflow-hidden hover:border-accent/25 transition-colors'

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${cardClass} block cursor-pointer`}>
      {media}
      {info}
    </a>
  ) : (
    <div
      className={`${cardClass} cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {media}
      {info}
    </div>
  )
}
