"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, MapPin, ArrowUpRight, ArrowUp } from "lucide-react"
import { profile, stats } from "@/lib/portfolio-data"

export function WhatsNext() {
  return (
    <section aria-label="What's next" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ocean band */}
      <div className="absolute inset-0 bg-ocean-gradient" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-white/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[22rem] w-[38rem] rounded-full bg-sky-300/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
            What&apos;s next
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl">
            New place.
            <br />
            <span className="text-stroke-accent">New people.</span>
            <br />
            New challenges.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-serif text-xl italic leading-snug text-white/85 sm:text-2xl">
            If there&apos;s one thing I&apos;ve learned so far, it&apos;s that you grow the most when you get involved
            and stay committed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mx-auto mt-10 grid max-w-3xl gap-5 text-base leading-relaxed text-white/75 sm:grid-cols-2 sm:text-lg"
        >
          <p>
            I&apos;ve grown through high-level athletic competition, built long-term community service initiatives,
            gained hands-on business experience, and taken on responsibilities that have pushed me to think and act
            independently.
          </p>
          <p>
            College is more than the next step in my education. It&apos;s a chance to meet people who challenge my
            perspective, join competitive teams and campus projects, and make the most of everything university life
            has to offer. I&apos;m coming in ready to participate, contribute, and take on new challenges — I don&apos;t
            want to sit on the sidelines.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/20 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-white/10 px-5 py-6 backdrop-blur-sm">
              <dd className="font-display text-3xl font-black tracking-tight text-sky-300 sm:text-4xl">
                {stat.value}
              </dd>
              <dt className="text-sm font-semibold text-white">{stat.label}</dt>
              <p className="text-xs text-white/60">{stat.detail}</p>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-accent">Get in touch</p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl">
            Let&apos;s build something
            <span className="font-serif font-normal italic text-accent"> worth remembering.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Recruiting, collaborations, or just a good conversation about sports, music, or community projects —
            my inbox is always open.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="btn-glossy inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass backdrop-blur-xl inline-flex items-center gap-2.5 rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-all hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              Connect on LinkedIn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-display text-sm font-extrabold uppercase tracking-tight text-foreground">
            Iker <span className="text-accent">Torrico</span>
          </p>
          <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {profile.location} · {profile.school}
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Iker Torrico. Designed with energy, discipline, and a little bit of La Paz.
        </p>
      </div>
    </footer>
  )
}
