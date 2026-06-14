'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Mail, Phone, Check } from 'lucide-react'
import { contactInfo } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

const iconMap = {
  address: MapPin,
  email: Mail,
  phone: Phone,
}

type FormErrors = { name?: string; email?: string; message?: string }

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const validate = (): boolean => {
    const next: FormErrors = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  const inputClass =
    'bg-white/[0.04] border border-white/10 focus:border-white/25 text-white placeholder:text-white/20 rounded-sm px-4 py-3 text-sm outline-none w-full transition-colors'

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-3">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Let&apos;s build something
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <AnimateIn delay={0.1} className="flex flex-col gap-8">
            {contactInfo.map((item) => {
              const Icon = iconMap[item.type]
              return (
                <div key={item.type} className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/[0.04] border border-white/[0.08] flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-dim" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-bright">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-start gap-3 py-8"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Check size={18} className="text-bright" />
                  </div>
                  <p className="text-bright font-semibold">Message sent</p>
                  <p className="text-dim text-sm">
                    Thanks for reaching out — we&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                      aria-label="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                      aria-label="Email address"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Tell us about your project…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      aria-label="Project message"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {serverError && (
                    <p className="text-xs text-red-400">{serverError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-bright text-bg font-semibold px-6 py-3 rounded-sm hover:bg-white transition-colors text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending…' : 'Send message'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
