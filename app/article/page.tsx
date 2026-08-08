import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { ArticleShell } from '@/components/article-shell'

export const metadata: Metadata = {
  title: 'Article — IdunZ Website',
}

export default function ArticlePage() {
  return (
    <PageShell>
      <ArticleShell title="Abbout Me">
        <p>
          Halo, kenalin nama aku Luqman Syahdan Aulia, biasa dipanggil Luqman
          atau Idun. Aku lahir di Yogyakarta pada 11 Mei 2009, dan sekarang
          bersekolah di SMKN 2 Yogyakarta.
        </p>
        <p>
          Aku punya beberapa hobi yang cukup ngisi keseharianku. Yang pertama
          tentu saja main game. Game favoritku antara lain Delta Force Mobile
          (lebih ke warfare), Minecraft (mode survival), dan Call of Duty Mobile
          (mode multiplayer). Setiap game punya keseruan sendiri, dan sering jadi
          tempatku melepas penat sekaligus belajar strategi.
        </p>
        <p>
          Dari main game itu, aku jadi tertarik juga dengan editing. Aku sering
          ngedit video gameplay biar lebih seru dan menarik ditonton. Aplikasi
          yang biasa kupakai antara lain Alight Motion, Node Video, dan CapCut.
          Walaupun masih belajar, aku suka banget ketika video sederhana bisa
          berubah jadi keren dengan efek, transisi, dan musik.
        </p>
        <p>
          Selain itu, aku juga punya hobi oprek. Buatku, oprek itu seru banget
          karena bisa coba-coba custom ROM, utak-atik sistem, dan eksplorasi
          fitur tersembunyi di perangkat. Kadang bikin pusing, tapi justru di
          situlah letak keseruannya—selalu ada hal baru yang bisa dipelajari.
        </p>
        <p>
          Buatku, semua hobi ini saling melengkapi. Game bikin aku semangat,
          editing ngajarin kreativitas, dan oprek bikin aku lebih paham
          teknologi. Harapanku ke depan, aku bisa terus belajar dan ngembangin
          semua hobiku ini biar hasilnya makin maksimal.
        </p>
      </ArticleShell>
    </PageShell>
  )
}
