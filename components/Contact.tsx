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

function ContactValue({ type, value }: { type: string; value: string }) {
  const cls = 'text-sm text-bright hover:text-accent transition-colors'
  if (type === 'email') return <a href={`mailto:${value}`} className={cls}>{value}</a>
  if (type === 'phone') return <a href={`tel:${value.replace(/\s/g, '')}`} className={cls}>{value}</a>
  return <p className="text-sm text-bright">{value}</p>
}

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

  const handleReset = () => {
    setSubmitted(false)
    setForm({ name: '', email: '', message: '' })
    setErrors({})
  }

  const inputClass =
    'bg-accent/[0.04] border border-accent/15 focus:border-accent/50 text-white placeholder:text-white/20 rounded-sm px-4 py-3 text-sm outline-none w-full transition-colors'

  const labelClass = 'block text-[10px] uppercase tracking-[0.15em] text-muted mb-1.5'

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-accent/10">
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
                  <div className="w-8 h-8 flex items-center justify-center rounded-sm bg-accent/[0.06] border border-accent/10 flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-accent/60" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                      {item.label}
                    </p>
                    <ContactValue type={item.type} value={item.value} />
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
                  <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                    <Check size={18} className="text-accent" />
                  </div>
                  <p className="text-bright font-semibold">Message sent</p>
                  <p className="text-dim text-sm">
                    Thanks for reaching out — we&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="text-xs text-accent/60 hover:text-accent transition-colors mt-1"
                  >
                    Send another message →
                  </button>
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
                    <label htmlFor="contact-name" className={labelClass}>Your name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. John Smith"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className={inputClass}
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>Email address</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className={inputClass}
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>Your message</label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell us about your project…"
                      autoComplete="off"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  {serverError && <p className="text-xs text-red-400">{serverError}</p>}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-accent text-white font-semibold px-6 py-3 rounded-sm hover:bg-brand transition-colors text-sm mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
