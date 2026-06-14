'use client'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export function AnimateIn({ children, delay = 0, className, direction = 'up' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: shouldReduce ? 1 : 0,
          y: shouldReduce || direction !== 'up' ? 0 : 32,
          x: shouldReduce || direction !== 'left' ? 0 : -24,
        },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: shouldReduce ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            delay: shouldReduce ? 0 : delay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
