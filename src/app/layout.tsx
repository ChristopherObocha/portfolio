import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['opsz'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Christopher Obocha — Senior Software Engineer',
  description: 'Senior Mobile & Full-Stack Engineer. Co-founder & CTO of Runwae. Lead Mobile Engineer at Hylark. Leeds, England.',
  openGraph: {
    title: 'Christopher Obocha — Senior Software Engineer',
    description: 'I build mobile and full-stack products that ship — from architecture to App Store.',
    url: 'https://obocha.dev',
    siteName: 'Christopher Obocha',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christopher Obocha — Senior Software Engineer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
