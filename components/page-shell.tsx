import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 md:px-6 md:py-14">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export function PageTitle({
  children,
  eyebrow,
}: {
  children: ReactNode
  eyebrow?: string
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="mb-2 font-nav text-xs uppercase tracking-[0.3em] text-brand-red">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-heading text-4xl tracking-wide text-balance md:text-6xl">
        {children}
      </h1>
      <div className="mt-4 h-1 w-16 rounded-full bg-brand-red" />
    </div>
  )
}
