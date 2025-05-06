import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import CookieBanner from './components/CookieBanner'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: 'IRresistible - Az Inzulinrezisztencia társad',
  description: 'Személyre szabható étrendek, egészséges receptek és bevásárlólista az inzulinrezisztencia kezeléséhez.',
  keywords: 'inzulinrezisztencia, étrend, egészséges étel, receptek, bevásárlólista, diéta, cukorbetegség, egészséges életmód',
  authors: [{ name: 'MarchDesign' }],
  creator: 'MarchDesign',
  publisher: 'MarchDesign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://irresistibleapp.com'),
  alternates: {
    canonical: '/',
    languages: {
      'hu-HU': '/hu',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'IRresistible - Az Inzulinrezisztencia társad',
    description: 'Személyre szabható étrendek, egészséges receptek és bevásárlólista az inzulinrezisztencia kezeléséhez.',
    url: 'https://irresistibleapp.com',
    siteName: 'IRresistible',
    locale: 'hu_HU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IRresistible - Inzulinrezisztencia Kezelő Alkalmazás',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRresistible - Az Inzulinrezisztencia társad',
    description: 'Személyre szabható étrendek, egészséges receptek és bevásárlólista az inzulinrezisztencia kezeléséhez.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={`${montserrat.variable} font-montserrat`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}