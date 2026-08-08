import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <p className="font-heading text-2xl tracking-wide">
            <span className="text-brand-red">IdunZ</span>{' '}
            <span className="text-white">Website</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Personal website Luqman Syahdan Aulia (Idun) — game, oprek, editing &amp; coding.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-nav text-xs uppercase tracking-wide text-muted-foreground">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/profile" className="hover:text-white">Profile</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/article" className="hover:text-white">Article</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
      <div className="border-t border-white/10 py-3">
        <p className="text-center text-xs text-muted-foreground">
          idunz.my.id — dibuat dengan santai oleh Idun.
        </p>
      </div>
    </footer>
  )
}
