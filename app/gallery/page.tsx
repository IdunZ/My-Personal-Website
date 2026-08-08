import type { Metadata } from 'next'
import { PageShell, PageTitle } from '@/components/page-shell'
import { GalleryView, type GalleryImage } from '@/components/gallery-view'

export const metadata: Metadata = {
  title: 'Playing With Friends — Gallery — IdunZ Website',
}

const IMAGES: GalleryImage[] = [
  { src: '/img/playing-1.png', alt: 'Momen main game bareng teman - 1' },
  { src: '/img/playing-2.png', alt: 'Momen main game bareng teman - 2' },
  { src: '/img/playing-3.png', alt: 'Momen main game bareng teman - 3' },
  { src: '/img/playing-4.png', alt: 'Momen main game bareng teman - 4' },
]

export default function GalleryPage() {
  return (
    <PageShell>
      <PageTitle eyebrow="Gallery">Playing With Friends</PageTitle>
      <GalleryView activeHref="/gallery" images={IMAGES} />
    </PageShell>
  )
}
