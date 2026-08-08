import type { Metadata } from 'next'
import { PageShell, PageTitle } from '@/components/page-shell'
import { GalleryView, type GalleryImage } from '@/components/gallery-view'

export const metadata: Metadata = {
  title: 'Healing With Friends — Gallery — IdunZ Website',
}

const IMAGES: GalleryImage[] = [
  { src: '/img/healing-1.png', alt: 'Momen healing bareng teman - 1' },
  { src: '/img/healing-2.png', alt: 'Momen healing bareng teman - 2' },
  { src: '/img/healing-3.png', alt: 'Momen healing bareng teman - 3' },
  { src: '/img/healing-4.png', alt: 'Momen healing bareng teman - 4' },
]

export default function GalleryHealingPage() {
  return (
    <PageShell>
      <PageTitle eyebrow="Gallery">Healing With Friends</PageTitle>
      <GalleryView activeHref="/gallery/healing" images={IMAGES} />
    </PageShell>
  )
}
