"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronDown } from "lucide-react"
import { profile, heroStats, marqueeItems } from "@/lib/portfolio-data"

function RotatingRole() {
  const [index, setIndex] = useState(0)
  const roles = ["Athlete.", "Performer.", "Builder.", "Entrepreneur."]

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [roles.length])

  return (
    <span className="relative inline-flex h-[1.2em] items-baseline overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-gradient-ocean font-serif italic"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
    >
      {/* Ocean & sky glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-16 h-[38rem] w-[38rem] rounded-full bg-blue-400/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-300/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/3 -top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-200/30 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-10 pb-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Left: typography block */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                La Paz, Bolivia
              </span>
              <span className="rounded-full border border-border bg-card/70 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-md">
                Portfolio · Class of {profile.graduation}
              </span>
            </motion.div>

            <h1 className="font-display font-black uppercase leading-[0.86] tracking-tighter">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-[clamp(4rem,15vw,11.5rem)] text-foreground"
              >
                Iker
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-stroke block text-[clamp(4rem,15vw,11.5rem)]"
              >
                Torrico
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-6 max-w-xl font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
            >
              I&apos;m an <RotatingRole />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.intro}
            </motion.p>
          </div>

          {/* Right: portrait collage with glossy bezel */}
          <motion.div
            initial={{ opacity: 0, y: 32, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative order-1 mx-auto w-full max-w-xs sm:max-w-sm lg:order-2"
          >
            <div className="relative rounded-[1.35rem] bg-gradient-to-br from-sky-300/70 via-white/40 to-blue-600/40 p-[3px] shadow-[0_24px_60px_-16px_rgba(30,64,175,0.5)]">
              <div className="relative overflow-hidden rounded-[1.15rem] bg-card">
                <img
                  src="/images/sports/trophy-mvp.jpg"
                  alt="Iker Torrico holding a golden MVP trophy and certificate in a gymnasium"
                  className="aspect-[4/5] w-full object-cover"
                  fetchPriority="high"
                />
                <div className="gloss-sheen" aria-hidden="true" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-blue-950/85 via-blue-900/30 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">MVP — Club Basketball</p>
                  <p className="text-xs text-white/80">Club de Tenis La Paz</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute -bottom-8 -left-8 hidden w-36 rotate-[-6deg] overflow-hidden rounded-xl border-4 border-card shadow-[0_18px_40px_-14px_rgba(30,64,175,0.5)] sm:block lg:-left-14 lg:w-44"
            >
              <img
                src="/images/guitar/hard-rock-cafe.jpg"
                alt="Iker performing guitar live at Hard Rock Cafe La Paz"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
              <p className="bg-card/90 px-2 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
                Hard Rock Cafe
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip — frosted glass */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_40px_-24px_rgba(37,99,235,0.35)] backdrop-blur-md sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5 px-4 py-5 sm:px-6">
              <dt className="order-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#story"
        aria-label="Scroll to the story section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-40 right-6 hidden flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent lg:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>

      {/* Ocean marquee ribbon */}
      <div
        className="relative border-y border-white/10 bg-ocean-gradient py-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
        aria-hidden="true"
      >
        <div className="flex overflow-hidden">
          <div className="animate-marquee-slow flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em]">
                {item}
                <span className="text-sky-200">✦</span>
              </span>
            ))}
          </div>
          <div className="animate-marquee-slow flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`b-${i}`} className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em]">
                {item}
                <span className="text-sky-200">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
