'use client'

import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Projects from '@/components/Projects'
import Writing from '@/components/Writing'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Nav page="home" />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Stack />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Writing preview />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Contact />
      <Footer />
    </>
  )
}
