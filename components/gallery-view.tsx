'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type GalleryImage = { src: string; alt: string }

const TABS = [
  { label: 'Playing With Friends', href: '/gallery' },
  { label: 'Healing With Friends', href: '/gallery/healing' },
]

export function GalleryView({
  activeHref,
  images,
}: {
  activeHref: string
  images: GalleryImage[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight')
        setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + images.length) % images.length,
        )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, images.length])

  return (
    <div>
      {/* Sub-navigation tabs */}
      <div
        className="mb-8 inline-flex flex-wrap gap-2 rounded-lg border border-white/10 bg-card p-1"
        role="tablist"
        aria-label="Kategori Gallery"
      >
        {TABS.map((tab) => {
          const active = tab.href === activeHref
          return (
            <Link
              key={tab.href}
              href={tab.href}
              role="tab"
              aria-selected={active}
              className={`rounded-md px-4 py-2 font-nav text-sm uppercase tracking-wide transition-colors ${
                active
                  ? 'bg-active text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            aria-label={`Perbesar gambar: ${img.alt}`}
          >
            <Image
              src={img.src || '/placeholder.svg'}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-md p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Tutup"
            onClick={() => setOpenIndex(null)}
          >
            <X className="size-7" />
          </button>

          <button
            type="button"
            className="absolute left-2 rounded-md p-2 text-white transition-colors hover:bg-white/10 md:left-6"
            aria-label="Sebelumnya"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) =>
                i === null ? i : (i - 1 + images.length) % images.length,
              )
            }}
          >
            <ChevronLeft className="size-8" />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex].src || '/placeholder.svg'}
              alt={images[openIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            className="absolute right-2 rounded-md p-2 text-white transition-colors hover:bg-white/10 md:right-6"
            aria-label="Berikutnya"
            onClick={(e) => {
              e.stopPropagation()
              setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))
            }}
          >
            <ChevronRight className="size-8" />
          </button>
        </div>
      )}
    </div>
  )
}
