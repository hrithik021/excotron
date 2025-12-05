import React from 'react';
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Excotron Solutions - Leading IT Consultancy',
  description: 'Transform your business with enterprise-grade IT solutions. Cloud migration, cybersecurity, digital transformation, and 24/7 support.',
  keywords: 'IT consultancy, cloud solutions, cybersecurity, digital transformation, software development',
  authors: [{ name: 'Excotron Solutions' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}