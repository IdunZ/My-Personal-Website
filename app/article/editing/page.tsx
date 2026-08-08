import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { ArticleShell } from '@/components/article-shell'

export const metadata: Metadata = {
  title: 'Article Editing — IdunZ Website',
}

export default function EditingArticlePage() {
  return (
    <PageShell>
      <ArticleShell title="Article Editing" eyebrow="Editing">
        <p>
          Selain suka coding dan main game, aku juga punya hobi editing game.
          Biasanya aku pakai aplikasi Alight Motion, Node Video, dan CapCut untuk
          bikin video gameplay jadi lebih menarik. Awalnya aku cuma iseng edit
          video saat main game, tapi lama-lama aku jadi enjoy prosesnya.
        </p>
        <p>
          Editing game itu seru karena aku bisa mengubah momen biasa di gameplay
          jadi kelihatan lebih keren dengan efek, musik, atau transisi yang pas.
          Dari situ aku juga belajar sabar, detail, dan kreatif, karena satu video
          pendek aja bisa butuh banyak ide dan waktu.
        </p>
        <p>
          Bagi aku, editing game bukan cuma hiburan, tapi juga cara buat
          mengabadikan momen bermain dan berbagi ke orang lain. Ke depannya, aku
          pengen terus ningkatin skill editing biar hasilnya makin bagus, siapa
          tahu bisa jadi konten yang lebih serius dan bermanfaat.
        </p>
      </ArticleShell>
    </PageShell>
  )
}
