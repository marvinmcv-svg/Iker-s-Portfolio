"use client"

import { motion } from "framer-motion"
import { GraduationCap, Languages, Trophy, PlayCircle } from "lucide-react"
import { profile, awards, introVideo } from "@/lib/portfolio-data"

const quickFacts = [
  {
    icon: GraduationCap,
    label: "Education",
    value: `${profile.school} — U.S. & Bolivian diploma, Class of ${profile.graduation}`,
  },
  {
    icon: Languages,
    label: "Languages",
    value: "Spanish (fluent) · English (fluent)",
  },
  {
    icon: PlayCircle,
    label: "Also into",
    value: "Guitar · C++ · Arduino · Set construction",
  },
  {
    icon: Trophy,
    label: "Athletics",
    value: "Varsity basketball, soccer & volleyball — captain since U10 club level",
  },
]

export function Story() {
  return (
    <section id="story" aria-label="The story" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* Left: sticky chapter intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
                The story
              </p>
              <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl">
                Jump right in.
                <br />
                <span className="font-serif font-normal italic text-accent">Connect with people.</span>
                <br />
                Learn by doing.
              </h2>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 space-y-5"
            >
              {quickFacts.map((fact) => (
                <li key={fact.label} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card/80 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] backdrop-blur-sm">
                    <fact.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">{fact.value}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right: narrative + video + awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="space-y-5 text-lg leading-relaxed text-foreground/90"
            >
              <p className="font-serif text-2xl italic leading-snug text-foreground sm:text-[1.7rem]">
                &ldquo;{profile.intro}&rdquo;
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.introTwo}</p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{profile.introThree}</p>
            </motion.div>

            {/* Video */}
            <motion.figure
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="rounded-2xl bg-gradient-to-br from-sky-300/60 via-white/25 to-blue-600/40 p-[2px] shadow-[0_32px_64px_-24px_rgba(30,64,175,0.45)]">
                <div className="relative aspect-video w-full overflow-hidden rounded-[14px] bg-foreground">
                  <iframe
                    src={`https://drive.google.com/file/d/${introVideo.driveId}/preview`}
                    title={introVideo.caption}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {introVideo.caption} — height, weight, and game footage
              </figcaption>
            </motion.figure>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Honors & awards
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {awards.map((award) => (
                  <li
                    key={award}
                    className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {award}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
