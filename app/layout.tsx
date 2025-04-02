import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fremont Hacks',
  description: 'Created by Fremont Hacks',
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
