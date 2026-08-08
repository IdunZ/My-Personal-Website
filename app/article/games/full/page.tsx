import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageShell } from '@/components/page-shell'
import { ArticleShell } from '@/components/article-shell'

export const metadata: Metadata = {
  title: 'Article Game (Selengkapnya) — IdunZ Website',
}

export default function GamesFullArticlePage() {
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
          seru karena aku bisa bertahan hidup sekaligus bebas berkreasi.
        </p>
        <p>
          Lalu ada Call of Duty Mobile (CODM), khususnya mode Multiplayer. Kalau
          Delta Force itu menantang dengan nuansa perang, dan Minecraft lebih ke
          survival kreatif, CODM justru seru karena temponya cepat dan intens.
          Setiap match bikin adrenalinku naik, refleks teruji, dan kerjasama tim
          jadi kunci biar bisa menang.
        </p>
        <p>
          Kalau dipikir-pikir, tiga game ini punya karakter yang beda-beda, tapi
          justru itu yang bikin aku betah main. Dari Delta Force aku belajar
          strategi, dari Minecraft aku belajar kreativitas dan bertahan hidup,
          sementara dari CODM aku belajar refleks cepat dan kerja sama tim.
        </p>
        <p>
          Buatku, game itu bukan cuma hiburan, tapi juga cara aku belajar hal-hal
          baru dengan cara yang seru. Dan uniknya, justru dari hobi main game
          inilah aku jadi kepo sama dunia coding. Aku sering mikir, &ldquo;Gimana
          ya caranya developer bikin game sekeren ini?&rdquo; Dari situ muncul
          keinginanku buat belajar pemrograman.
        </p>
        <p>
          Siapa tahu suatu hari nanti aku bisa bikin game sendiri. Mungkin nggak
          langsung sebesar Minecraft atau CODM, tapi setidaknya game sederhana
          yang bisa aku mainin sendiri. Itu pasti jadi pengalaman yang luar biasa.
        </p>

        <div className="pt-2">
          <Link
            href="/article/games"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-4" />
            Lebih sedikit...
          </Link>
        </div>
      </ArticleShell>
    </PageShell>
  )
}
