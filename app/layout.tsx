import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Oswald, Sansation } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nav',
})

const sansation = Sansation({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'IdunZ Website',
  description:
    'Personal website Luqman Syahdan Aulia (Idun) — pelajar yang tertarik pada game, oprek, editing, dan coding.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#333333',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${oswald.variable} ${sansation.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
