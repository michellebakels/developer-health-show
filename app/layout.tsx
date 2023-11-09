import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const blob = localFont({
  src: '../public/Blob.woff2',
  display: 'swap',
  variable: '--font-blob',
})

export const metadata: Metadata = {
  title: 'The Developer Health Show',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${blob.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
