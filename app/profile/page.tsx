import type { Metadata } from 'next'
import Image from 'next/image'
import { PageShell, PageTitle } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Profile — IdunZ Website',
}

export default function ProfilePage() {
  return (
    <PageShell>
      <PageTitle eyebrow="Tentang Aku">Profile</PageTitle>

      <div className="grid items-start gap-10 md:grid-cols-[1fr_360px] md:gap-12">
        <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
          <p>
            Halo semuanya, perkenalkan nama aku Luqman Syahdan Aulia, bisa
            dipanggil <span className="text-brand-red">Luqman</span> atau{' '}
            <span className="text-brand-red">Idun</span>. Aku adalah seorang
            pelajar yang ingin belajar coding dan sekarang aku bersekolah di SMKN
            2 Yogyakarta, aku lahir di Yogyakarta pada tanggal 11 Mei 2009, jadi
            sekarang umurku 16 tahun di tahun ini.
          </p>
          <p>
            Aku punya beberapa hobi diantaranya adalah bermain game dan sedikit
            editing.
          </p>
          <p>
            Mungkin cukup segitu aja jika masih ingin tau kalian bisa hubungi aku
            lewat Instagram, WhatsApp, ataupun Telegram, terimakasih
            semuanyaaa.......
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-base sm:max-w-md">
            <div>
              <dt className="font-nav text-xs uppercase tracking-wide text-brand-red">
                Nama
              </dt>
              <dd className="mt-1 text-foreground">Luqman Syahdan Aulia</dd>
            </div>
            <div>
              <dt className="font-nav text-xs uppercase tracking-wide text-brand-red">
                Panggilan
              </dt>
              <dd className="mt-1 text-foreground">Luqman / Idun</dd>
            </div>
            <div>
              <dt className="font-nav text-xs uppercase tracking-wide text-brand-red">
                Lahir
              </dt>
              <dd className="mt-1 text-foreground">Yogyakarta, 11 Mei 2009</dd>
            </div>
            <div>
              <dt className="font-nav text-xs uppercase tracking-wide text-brand-red">
                Sekolah
              </dt>
              <dd className="mt-1 text-foreground">SMKN 2 Yogyakarta</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl md:sticky md:top-24">
          <div className="absolute inset-0 bg-gradient-to-tr from-active/30 via-transparent to-secondary/30" />
          <Image
            src="/img/rani.png"
            alt="Foto profil IdunZ Website"
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </PageShell>
  )
}
