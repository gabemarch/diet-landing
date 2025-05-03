import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieBanner from './components/CookieBanner'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IRresistible - Your Insulin Resistance Companion',
  description: 'Manage insulin resistance with personalized meal plans, healthy recipes, and smart shopping lists.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}