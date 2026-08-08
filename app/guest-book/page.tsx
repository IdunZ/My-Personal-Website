'use client'

import { useState, type FormEvent } from 'react'
import { PageShell, PageTitle } from '@/components/page-shell'

const inputClass =
  'w-full rounded-md border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand-red'
const labelClass = 'mb-2 block font-nav text-sm uppercase tracking-wide text-white/90'

export default function GuestBookPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
  }

  return (
    <PageShell>
      <PageTitle eyebrow="Tinggalkan Pesan">Guest Book</PageTitle>

      <div className="mx-auto max-w-2xl">
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          className="rounded-xl border border-white/10 bg-card p-6 md:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="nama" className={labelClass}>
                Nama
              </label>
              <input id="nama" name="nama" type="text" placeholder="Nama kamu" required className={inputClass} />
            </div>

            <div>
              <label htmlFor="alamat" className={labelClass}>
                Alamat
              </label>
              <input id="alamat" name="alamat" type="text" placeholder="Alamat" className={inputClass} />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input id="email" name="email" type="email" placeholder="email@contoh.com" className={inputClass} />
            </div>

            <fieldset>
              <legend className={labelClass}>Kelamin</legend>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2 text-foreground">
                  <input type="radio" name="kelamin" value="Laki-Laki" className="size-4 accent-[var(--brand-red)]" />
                  Laki-Laki
                </label>
                <label className="flex items-center gap-2 text-foreground">
                  <input type="radio" name="kelamin" value="Perempuan" className="size-4 accent-[var(--brand-red)]" />
                  Perempuan
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="komentar" className={labelClass}>
                Komentar
              </label>
              <textarea id="komentar" name="komentar" rows={5} placeholder="Tulis komentar kamu di sini..." className={inputClass} />
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-brand-red px-6 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-active focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                Submit
              </button>
              <button
                type="reset"
                className="inline-flex items-center rounded-md border border-white/20 px-6 py-3 font-nav text-sm uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Reset
              </button>
            </div>

            {submitted && (
              <p
                role="status"
                className="rounded-md border border-brand-red/40 bg-active/15 px-4 py-3 text-sm text-foreground"
              >
                Terima kasih sudah mengisi guest book! Catatan: form ini belum
                terhubung ke database, jadi pesan belum benar-benar tersimpan.
              </p>
            )}
          </div>
        </form>
      </div>
    </PageShell>
  )
}
