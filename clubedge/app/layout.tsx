import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Clubedge - Modern Community Platform',
  description: 'Connect, collaborate, and build amazing things together with Clubedge',
  keywords: ['community', 'platform', 'collaboration', 'clubedge'],
  openGraph: {
    title: 'Clubedge - Modern Community Platform',
    description: 'Connect, collaborate, and build amazing things together',
    type: 'website',
    url: 'https://clubedge.com',
    siteName: 'Clubedge',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
