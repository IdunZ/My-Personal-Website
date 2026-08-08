'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { PageShell } from '@/components/page-shell'

const inputClass =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-red'
const labelClass = 'mb-2 block font-nav text-sm uppercase tracking-wide text-white/90'

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageShell>
      <section className="mx-auto flex max-w-md flex-col items-center py-6">
        <h1 className="font-heading text-5xl tracking-wide text-white">Login</h1>
        <p className="mt-2 font-nav text-sm uppercase tracking-wide text-muted-foreground">
          Please enter your account
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 w-full rounded-xl border border-white/10 bg-card p-6 md:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="username" className={labelClass}>
                Username
              </label>
              <input id="username" name="username" type="text" placeholder="Username" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <input id="password" name="password" type="password" placeholder="Password" required className={inputClass} />
            </div>

            <button
              type="submit"
              className="mt-1 inline-flex w-full items-center justify-center rounded-md bg-brand-red px-6 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            >
              Login
            </button>

            {submitted && (
              <p role="status" className="text-center text-sm text-muted-foreground">
                Catatan: login ini belum terhubung ke sistem autentikasi.
              </p>
            )}

            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="text-brand-red hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </section>
    </PageShell>
  )
}
