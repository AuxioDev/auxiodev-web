import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Partners } from '@/components/Partners'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
