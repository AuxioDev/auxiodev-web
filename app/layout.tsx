import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MotionProvider } from '@/components/MotionProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Auxiodev — Digital Solutions',
  description: 'We build intelligent digital products for modern businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-bg text-bright antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
