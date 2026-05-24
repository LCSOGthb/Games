import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Games',
  description: 'A collection of games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
