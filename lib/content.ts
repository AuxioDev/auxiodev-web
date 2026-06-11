export const brand = {
  name: 'Auxiodev',
  tagline: 'We build intelligent digital products\nfor modern businesses.',
  year: 2024,
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
  { value: 5, label: 'Years active', suffix: '+' },
  { value: 12, label: 'Team members' },
]

export type Project = {
  title: string
  description: string
  videoSrc: string
  tags: string[]
}

export const projects: Project[] = [
  {
    title: 'Nexus Platform',
    description:
      'B2B SaaS dashboard with real-time analytics and AI-powered insights for enterprise teams.',
    videoSrc: '/videos/project-1.mp4',
    tags: ['Next.js', 'TypeScript', 'Postgres'],
  },
  {
    title: 'Orbit Mobile',
    description:
      'Cross-platform mobile application with offline-first architecture and seamless sync.',
    videoSrc: '/videos/project-2.mp4',
    tags: ['React Native', 'Expo', 'GraphQL'],
  },
  {
    title: 'Helio Brand',
    description:
      'Full brand identity system for a fintech startup — logo, type, color, and motion.',
    videoSrc: '/videos/project-3.mp4',
    tags: ['Branding', 'Motion', 'Figma'],
  },
  {
    title: 'Strata Commerce',
    description:
      'High-performance e-commerce platform processing 50k+ daily transactions.',
    videoSrc: '/videos/project-4.mp4',
    tags: ['Commerce', 'Node.js', 'Redis'],
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
  { type: 'email', label: 'Email', value: 'hello@auxiodev.com' },
  { type: 'phone', label: 'Phone', value: '+994 55 000 00 00' },
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
