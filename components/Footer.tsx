import { MessageCircle, Camera, Link2, Code } from 'lucide-react'
import { brand, footerNav, socialLinks } from '@/lib/content'
import { AnimateIn } from '@/components/ui/AnimateIn'

const socialIcons = {
  Twitter: MessageCircle,
  Instagram: Camera,
  LinkedIn: Link2,
  GitHub: Code,
}

export function Footer() {
  return (
    <footer className="border-t border-accent/10 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <AnimateIn delay={0}>
            <p className="text-bright font-bold text-sm tracking-tight mb-3">{brand.name}</p>
            <p className="text-dim text-xs leading-relaxed max-w-xs">
              Building intelligent digital products for modern businesses — web, mobile, and brand.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-dim text-xs hover:text-white transition-colors group relative inline-block pb-0.5 w-fit"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-px w-full bg-white/30 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Social</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="w-8 h-8 flex items-center justify-center rounded-sm bg-accent/[0.05] border border-accent/10 text-dim hover:text-accent hover:bg-accent/[0.10] hover:border-accent/25 hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={13} />
                  </a>
                )
              })}
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.25}>
          <div className="border-t border-accent/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
            </p>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
