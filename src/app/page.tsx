import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Values } from '@/components/sections/Values'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" id="main-content">
      <Header />
      <Hero />
      <Services />
      <About />
      <Values />
      <Contact />
      <Footer />
    </main>
  )
}
