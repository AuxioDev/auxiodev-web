'use client'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { brand, navLinks } from '@/lib/content'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('no-scroll')
      menuRef.current?.focus()
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-bg/80 border-b border-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between h-14">
        <a href="#" className="text-bright font-bold text-sm tracking-tight">
          {brand.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === id ? 'text-accent' : 'text-dim hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <button
          className="md:hidden text-dim hover:text-white transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-bg/95 backdrop-blur-sm border-b border-accent/10 px-6 pb-6 pt-4 flex flex-col gap-5"
          >
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base transition-colors ${
                    activeSection === id ? 'text-white' : 'text-dim'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
