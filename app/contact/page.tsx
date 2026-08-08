import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export const metadata: Metadata = {
  title: 'Contact — IdunZ Website',
}

export default function ContactPage() {
  return (
    <PageShell>
      <section className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="font-nav text-xs uppercase tracking-[0.3em] text-brand-red">
          Contact
        </p>
        <p className="mt-6 font-body text-2xl text-foreground/90">Hi, I&apos;m</p>
        <h1 className="mt-2 font-heading text-6xl tracking-wide text-brand-red md:text-8xl">
          Luqman Syahdan
        </h1>
        <p className="mt-4 font-body text-2xl text-foreground/90">Im a Student</p>

        <a
          href="https://taplink.cc/idunzproject"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand-red px-6 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          Hubungi lewat Taplink
          <ExternalLink className="size-4" />
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          taplink.cc/idunzproject
        </p>
      </section>
    </PageShell>
  )
}
