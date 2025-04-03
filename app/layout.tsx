import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fremont Hacks',
  description: 'Created by Fremont Hacks',
  openGraph: {
    title: 'Fremont Hacks',
    description: 'The BEST High School Bay Area Summer Hackathon 2025',
    url: 'https://fremonthacks.org',
    siteName: 'Fremont Hacks',
    images: [
      {
        url: 'https://fremonthacks.org/metadatapic.png',
        width: 1200,
        height: 630,
        alt: 'Preview Image',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
