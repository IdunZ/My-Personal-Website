'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

const SUB_NAV = [
  { label: 'Abbout Me', href: '/article' },
  { label: 'Games', href: '/article/games' },
  { label: 'Phone Modding', href: '/article/phone-modding' },
  { label: 'Editing', href: '/article/editing' },
]

function isActive(pathname: string, href: string) {
  if (href === '/article') {
    return pathname === '/article'
  }
  return pathname.startsWith(href)
}

export function ArticleShell({
  title,
  eyebrow = 'Article',
  children,
}: {
  title: string
  eyebrow?: string
  children: ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="grid gap-8 md:grid-cols-[220px_1fr] md:gap-12">
      {/* Sub-navigation */}
      <aside className="md:sticky md:top-24 md:self-start">
        <p className="mb-3 font-nav text-xs uppercase tracking-[0.3em] text-brand-red">
          Kategori
        </p>
        <nav aria-label="Navigasi artikel">
          <ul className="flex flex-wrap gap-2 md:flex-col">
            {SUB_NAV.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-md px-4 py-2 font-nav text-sm uppercase tracking-wide transition-colors ${
                      active
                        ? 'bg-active text-white'
                        : 'bg-card text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <article className="min-w-0">
        <p className="mb-2 font-nav text-xs uppercase tracking-[0.3em] text-brand-red">
          {eyebrow}
        </p>
        <h1 className="font-heading text-4xl tracking-wide text-balance md:text-5xl">
          {title}
        </h1>
        <div className="mt-3 mb-8 h-1 w-16 rounded-full bg-brand-red" />
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-foreground/90">
          {children}
        </div>
      </article>
    </div>
  )
}
