"use client"

import { motion } from "framer-motion"
import type { Chapter } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

function Figure({
  src,
  alt,
  caption,
  className,
  imgClassName,
}: {
  src: string
  alt: string
  caption: string
  className?: string
  imgClassName?: string
}) {
  return (
    <figure className={cn("group relative", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_48px_-20px_rgba(37,99,235,0.35)]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
            imgClassName
          )}
        />
        <div className="gloss-sheen" aria-hidden="true" />
      </div>
      <figcaption className="mt-2.5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        {caption}
      </figcaption>
    </figure>
  )
}

export function ChapterSection({ chapter, flipped = false }: { chapter: Chapter; flipped?: boolean }) {
  return (
    <section id={chapter.id} aria-label={chapter.kicker} className="relative overflow-hidden py-24 sm:py-32">
      {/* Giant background index */}
      <span
        aria-hidden="true"
        className="text-stroke pointer-events-none absolute -top-6 right-0 select-none font-display text-[clamp(10rem,28vw,22rem)] font-black leading-none opacity-[0.07]"
      >
        {chapter.index}
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Chapter header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
            <span className="font-display text-base font-black tracking-normal text-accent">{chapter.index}</span>
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            {chapter.kicker}
          </p>
          <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {chapter.title}
          </h2>
          <p className="mt-6 font-serif text-xl italic leading-snug text-foreground/85 sm:text-2xl">
            {chapter.lead}
          </p>
        </motion.div>

        {/* Images + narrative */}
        <div className={cn("mt-14 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16", flipped && "lg:grid-cols-[1fr_1.35fr]")}>
          {/* Images column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn("space-y-4", flipped && "lg:order-2")}
          >
            <Figure
              src={chapter.images[0].src}
              alt={chapter.images[0].alt}
              caption={chapter.images[0].caption}
              imgClassName={chapter.images[0].orientation === "portrait" ? "aspect-[4/5]" : "aspect-[16/9]"}
            />
            {chapter.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {chapter.images.slice(1, 3).map((img) => (
                  <Figure
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    caption={img.caption}
                    imgClassName={img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}
                    className={img.orientation === "landscape" ? "col-span-2" : undefined}
                  />
                ))}
              </div>
            )}
            {chapter.images.length > 3 && (
              <div className="grid grid-cols-2 gap-4">
                {chapter.images.slice(3).map((img) => (
                  <Figure
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    caption={img.caption}
                    imgClassName={img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"}
                    className={img.orientation === "landscape" ? "col-span-2" : ""}
                  />
                ))}
              </div>
            )}
          </motion.div>

          {/* Narrative column */}
          <div className={cn(flipped && "lg:order-1")}>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-5"
            >
              {chapter.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.ol
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-10"
            >
              <li className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Highlights from my journey
              </li>
              {chapter.highlights.map((h, i) => (
                <li key={h.title} className="group border-t border-border py-5 transition-colors first:border-t-0 sm:first:border-t">
                  <div className="flex gap-4">
                    <span className="font-display text-sm font-black text-accent/70 transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-xl">
                        {h.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ol>

            {/* Stat callout */}
            {chapter.stat && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: 0.24 }}
                className="relative mt-8 flex items-baseline gap-4 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-card/70 to-card/90 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_16px_36px_-20px_rgba(37,99,235,0.4)] backdrop-blur-sm"
              >
                <span className="text-gradient-ocean font-display text-4xl font-black tracking-tight sm:text-5xl">
                  {chapter.stat.value}
                </span>
                <span className="max-w-[16rem] text-sm font-medium leading-snug text-foreground/80">
                  {chapter.stat.label}
                </span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Optional video */}
        {chapter.video && (
          <motion.figure
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-14 max-w-3xl"
          >
            <div className="rounded-2xl bg-gradient-to-br from-sky-300/60 via-white/25 to-blue-600/40 p-[2px] shadow-[0_32px_64px_-24px_rgba(30,64,175,0.45)]">
              <div className="relative aspect-video w-full overflow-hidden rounded-[14px] bg-foreground">
                <iframe
                  src={`https://drive.google.com/file/d/${chapter.video.driveId}/preview`}
                  title={chapter.video.caption}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
            <figcaption className="mt-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {chapter.video.caption}
            </figcaption>
          </motion.figure>
        )}
      </div>
    </section>
  )
}
