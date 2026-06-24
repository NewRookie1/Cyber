'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Courses />
      <CTA />
      <Footer />
    </main>
  )
}
