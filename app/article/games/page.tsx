import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ArticleShell } from '@/components/article-shell'

export const metadata: Metadata = {
  title: 'Article Game — IdunZ Website',
}

export default function GamesArticlePage() {
  return (
    <PageShell>
      <ArticleShell title="Article Game" eyebrow="Games">
        <p>
          Halo! Aku Luqman Syahdan Aulia, dan aku pengen cerita tentang hobiku
          yang paling sering aku lakuin, yaitu main game. Dari sekian banyak game
          yang pernah aku coba, ada tiga yang bener-bener jadi favoritku: Delta
          Force Mobile, Minecraft, dan Call of Duty Mobile.
        </p>
        <p>
          Awalnya aku kenal game-game ini cuma buat hiburan. Tapi makin sering
          main, aku sadar kalau tiap game ternyata punya pengalaman berbeda dan
          ngajarin hal yang unik.
        </p>
        <p>
          Misalnya, di Delta Force Mobile, aku ngerasain serunya dunia warfare.
          Suasananya realistis banget, kayak bener-bener ikut operasi militer.
          Setiap misi bikin aku harus serius mikir strategi, karena salah langkah
          dikit aja bisa bikin gagal. Dari game ini aku belajar fokus dan sabar.
        </p>
        <p>
          Berbeda banget sama Minecraft, terutama mode Survival yang sering aku
          mainin. Kalau di Delta Force aku berhadapan dengan musuh bersenjata, di
          Minecraft aku harus berhadapan dengan dunia luas yang penuh tantangan.
          Mulai dari nyari makanan, bikin rumah, sampai lawan monster. Rasanya
          seru karena aku bisa bertahan hidup sekaligus bebas berkre...
        </p>

        <div className="pt-2">
          <Link
            href="/article/games/full"
            className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
          >
            Baca selengkapnya
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </ArticleShell>
    </PageShell>
  )
}
