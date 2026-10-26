"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Story } from "@/components/portfolio/story"
import { GallerySection } from "@/components/portfolio/gallery-section"
import { ChapterSection } from "@/components/portfolio/chapter"
import { WhatsNext, Contact, Footer } from "@/components/portfolio/sections"
import { chapters } from "@/lib/portfolio-data"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="bg-ocean-gradient fixed inset-x-0 top-0 z-[70] h-1 origin-left"
    />
  )
}

export default function PortfolioPage() {
  return (
    <div className="ambient-ocean flex min-h-screen flex-col text-foreground">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Story />
        <GallerySection />
        {chapters.map((chapter, i) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            flipped={i % 2 === 1}
          />
        ))}
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
