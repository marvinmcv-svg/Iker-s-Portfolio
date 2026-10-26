"use client"

import { useState, useCallback } from "react"
import { PortfolioGallery } from "@/components/ui/portfolio-gallery"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { galleryImages } from "@/lib/portfolio-data"

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleImageClick = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null

  return (
    <>
      <PortfolioGallery
        title="Browse my library"
        archiveButton={{ text: "Explore the chapters", href: "#sports" }}
        images={galleryImages}
        onImageClick={handleImageClick}
      />

      <Dialog open={activeImage !== null} onOpenChange={(open) => !open && setActiveIndex(null)}>
        <DialogContent className="max-w-4xl border-border bg-card p-0 sm:rounded-2xl">
          <div className="overflow-hidden rounded-xl">
            {activeImage && (
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[75vh] w-full object-contain bg-background"
              />
            )}
          </div>
          <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4">
            <DialogTitle className="text-left font-display text-base font-bold tracking-tight text-foreground">
              {activeImage?.alt}
            </DialogTitle>
            <DialogDescription className="m-0 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {activeIndex !== null ? `${String(activeIndex + 1).padStart(2, "0")} / ${String(galleryImages.length).padStart(2, "0")}` : ""}
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
