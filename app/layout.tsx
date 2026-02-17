import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Manish Jha - Executive Editor & War Correspondent | International Journalist',
  description: 'Award-winning war correspondent and Executive Editor at TV9 Bharatvarsh. 20+ years covering international conflicts, diplomacy, and global affairs from 25+ countries. Honored with Russia\'s Honest View Award 2025.',
  keywords: [
    'Manish Jha',
    'War Correspondent',
    'Executive Editor TV9 Bharatvarsh',
    'Journalist',
    'Conflict Reporter',
    'International News Reporter',
    'Geopolitics Journalist',
    'Defense Journalist',
    'War Reporting',
    'TV9 Journalist',
    'Global Affairs Analyst',
    'Security Analyst',
    'International Assignments',
    'Honest View Award 2025',
  ],
  authors: [{ name: 'Manish Jha' }],
  creator: 'Manish Jha',
  publisher: 'Manish Jha',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.manishjha.org',
    siteName: 'Manish Jha - War Correspondent & Journalist',
    title: 'Manish Jha - Executive Editor & War Correspondent',
    description: 'Award-winning war correspondent and Executive Editor at TV9 Bharatvarsh covering global conflicts, diplomacy, and international affairs.',
    images: [
      {
        url: 'https://www.manishjha.org/images/photo-1-press.jpg',
        width: 1200,
        height: 630,
        alt: 'Manish Jha - War Correspondent',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ManishJha',
    creator: '@ManishJha',
    title: 'Manish Jha - Executive Editor & War Correspondent',
    description: 'Award-winning journalist covering international conflicts and global affairs from 25+ countries.',
    images: ['https://www.manishjha.org/images/photo-1-press.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  canonical: 'https://www.manishjha.org',
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://www.manishjha.org" />
        <link rel="alternate" hrefLang="en" href="https://www.manishjha.org" />
        <link rel="alternate" type="application/rss+xml" href="https://www.manishjha.org/feed.xml" />
        <StructuredData />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
