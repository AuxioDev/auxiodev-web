import { MessageCircle, Camera, Link2, Code } from 'lucide-react'
import { brand, footerNav, socialLinks } from '@/lib/content'

const socialIcons = {
  Twitter: MessageCircle,
  Instagram: Camera,
  LinkedIn: Link2,
  GitHub: Code,
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-bright font-bold text-sm tracking-tight mb-3">{brand.name}</p>
            <p className="text-dim text-xs leading-relaxed max-w-xs">
              Building intelligent digital products for modern businesses — web, mobile, and brand.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-dim text-xs hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
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
                    className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/[0.04] border border-white/[0.08] text-dim hover:text-white hover:bg-white/[0.08] transition-colors"
                  >
                    <Icon size={13} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/25">Building since {brand.year}</p>
        </div>
      </div>
    </footer>
  )
}
