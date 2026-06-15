export const brand = {
  name: 'Auxiodev',
  tagline: 'We build intelligent digital products\nfor modern businesses.',
}

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export type Service = {
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks, optimized for performance, SEO, and scalability.',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile apps for iOS and Android using React Native and modern tooling.',
  },
  {
    number: '03',
    title: 'Brand Identity',
    description:
      'Comprehensive brand systems: logo design, typography, color palettes, and usage guidelines.',
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description:
      'User-centered design processes that transform complex workflows into intuitive interfaces.',
  },
  {
    number: '05',
    title: 'Digital Strategy',
    description:
      'Data-driven strategies to grow your digital presence and convert visitors into customers.',
  },
  {
    number: '06',
    title: 'Technical Consulting',
    description:
      'Architecture reviews, technology selection, and roadmap planning for your next venture.',
  },
]

export type Stat = {
  value: number
  label: string
  suffix?: string
}

export const aboutStats: Stat[] = [
  { value: 48, label: 'Projects delivered' },
  { value: 32, label: 'Happy clients' },
  { value: 12, label: 'Team members' },
]

export type Project = {
  title: string
  description: string
  videoSrc?: string
  iframeSrc?: string
  href?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Scuola Italiana Baku',
    description:
      'Multilingual platform for Baku\'s Italian language school — AZ/EN/IT, dark mode, static export, full-text search, and CEFR A1–C2 course structure.',
    iframeSrc: 'https://litad.az',
    href: 'https://litad.az',
    tags: ['Next.js', 'Multilingual', 'Education'],
  },
  {
    title: 'Detalgo',
    description:
      'E-commerce platform for automotive spare parts — product catalog, search, and ordering experience built for Azerbaijani market.',
    iframeSrc: 'https://detalgo.az',
    href: 'https://detalgo.az',
    tags: ['E-commerce', 'React', 'Automotive'],
  },
]

export const partners = [
  'Microsoft',
  'Google',
  'Stripe',
  'Vercel',
  'AWS',
  'Figma',
]

export type ContactInfo = {
  type: 'address' | 'email' | 'phone'
  label: string
  value: string
}

export const contactInfo: ContactInfo[] = [
  { type: 'address', label: 'Address', value: 'Baku, Azerbaijan' },
  { type: 'email', label: 'Email', value: 'info@auxiodev.com' },
  { type: 'phone', label: 'Phone', value: '+994 10 365 99 23' },
]

export const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

export const footerNav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
