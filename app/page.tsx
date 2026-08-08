import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Gamepad2, Wrench, Clapperboard } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export default function HomePage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <p className="mb-4 font-nav text-xs uppercase tracking-[0.3em] text-brand-red">
            Personal Website
          </p>
          <h1 className="font-heading text-5xl leading-[0.95] tracking-wide text-balance md:text-7xl">
            Hay, aku <span className="text-brand-red">Luqman Syahdan</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/90">
            Siswa yang tertarik pada Game, Oprek dan Editing.
          </p>
          <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">
            Website ini aku buat sebagai tempat untuk berbagi cerita, pengalaman
            belajar, dan hal-hal yang aku pelajari sepanjang perjalanan ini.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/article"
              className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Baca Article
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Tentang Aku
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-card shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-active/30 via-transparent to-secondary/30" />
            <Image
              src="/img/rani.png"
              alt="Ilustrasi personal IdunZ Website"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="mt-16 md:mt-24" aria-labelledby="interests-title">
        <h2
          id="interests-title"
          className="font-heading text-3xl tracking-wide md:text-4xl"
        >
          Yang aku suka
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InterestCard
            icon={<Gamepad2 className="size-6" />}
            title="Game"
            desc="Delta Force Mobile, Minecraft, dan Call of Duty Mobile — sekaligus tempat belajar strategi."
            href="/article/games"
          />
          <InterestCard
            icon={<Wrench className="size-6" />}
            title="Oprek"
            desc="Utak-atik sistem, custom ROM, dan eksplorasi fitur tersembunyi di perangkat."
            href="/article/phone-modding"
          />
          <InterestCard
            icon={<Clapperboard className="size-6" />}
            title="Editing"
            desc="Bikin video gameplay lebih seru pakai Alight Motion, Node Video, dan CapCut."
            href="/article/editing"
          />
        </div>
      </section>
    </PageShell>
  )
}

function InterestCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-white/10 bg-card p-6 transition-colors hover:border-brand-red/60"
    >
      <span className="flex size-12 items-center justify-center rounded-lg bg-active/20 text-brand-red">
        {icon}
      </span>
      <h3 className="mt-4 font-nav text-lg uppercase tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-nav text-xs uppercase tracking-wide text-brand-red">
        Selengkapnya
        <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
