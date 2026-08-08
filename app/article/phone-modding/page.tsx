import type { Metadata } from 'next'
import { PageShell } from '@/components/page-shell'
import { ArticleShell } from '@/components/article-shell'

export const metadata: Metadata = {
  title: 'Article Phone Modding — IdunZ Website',
}

export default function PhoneModdingArticlePage() {
  return (
    <PageShell>
      <ArticleShell title="Article Phone Modding" eyebrow="Phone Modding">
        <p>
          Sejak lama aku punya kebiasaan ngoprek — entah itu gadget, sistem
          operasi, atau software yang aku pakai sehari-hari. Buatku, oprek bukan
          cuma sekadar hobi iseng, tapi cara untuk benar-benar paham gimana
          sesuatu bekerja dari dalam. Dari sekadar ganti tampilan dan optimasi
          performa, sampai modifikasi sistem dan eksperimen dengan custom ROM,
          semua prosesnya selalu ngasih pengalaman baru.
        </p>
        <p>
          Kadang hasilnya nggak selalu mulus — ada error, bootloop, bahkan
          perangkat yang sempat &ldquo;mati suri.&rdquo; Tapi justru dari situ aku
          belajar banyak tentang troubleshooting, logika sistem, dan pentingnya
          riset sebelum eksekusi. Buatku, setiap kali berhasil nemuin solusi atau
          bikin sesuatu berjalan lebih baik dari sebelumnya, ada rasa puas
          tersendiri yang susah dijelasin.
        </p>
        <p>
          Dunia oprek juga ngajarin aku buat lebih sabar, teliti, dan terus
          penasaran. Setiap update teknologi, versi OS baru, atau tool
          open-source terbaru selalu bikin aku pengin nyoba hal baru. Intinya,
          selama masih ada hal yang bisa diutak-atik, rasa ingin tahuku nggak akan
          pernah berhenti.
        </p>
      </ArticleShell>
    </PageShell>
  )
}
