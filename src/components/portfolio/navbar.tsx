"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#story", label: "Story" },
  { href: "#sports", label: "Sports" },
  { href: "#community", label: "Community" },
  { href: "#business", label: "Business" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass backdrop-blur-xl backdrop-saturate-150 border-b border-border/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <Link
          href="#top"
          className="group flex items-baseline gap-1 font-display text-lg font-extrabold tracking-tight uppercase"
          aria-label="Iker Torrico — back to top"
        >
          <span className="text-foreground">Iker</span>
          <span className="text-accent">Torrico</span>
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" aria-hidden="true" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="btn-glossy hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-40 bg-background/90 backdrop-blur-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border py-4 font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-6 w-6 text-accent" aria-hidden="true" />
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.32, duration: 0.3 }}
                className="pt-6"
              >
                <a
                  href="mailto:Ikertorricot@gmail.com"
                  className="btn-glossy inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  Ikertorricot@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
