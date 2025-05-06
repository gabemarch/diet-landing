import AppInfo from '@/components/AppInfo';
import Hero from '@/components/Hero';
import InsulinResistanceInfo from '@/components/InsulinResistanceInfo';
import NewsletterSignup from '@/components/NewsletterSignup';
import {getTranslations} from 'next-intl/server';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IRresistible - Az Inzulinrezisztencia társad | Főoldal',
  description: 'Fedezd fel az IRresistible alkalmazást, amely segít az inzulinrezisztencia kezelésében személyre szabható étrendekkel, egészséges receptekkel és bevásárlólistával.',
  keywords: 'inzulinrezisztencia, étrend, egészséges étel, receptek, bevásárlólista, diéta, cukorbetegség, egészséges életmód, főoldal',
  openGraph: {
    title: 'IRresistible - Az Inzulinrezisztencia társad | Főoldal',
    description: 'Fedezd fel az IRresistible alkalmazást, amely segít az inzulinrezisztencia kezelésében személyre szabható étrendekkel, egészséges receptekkel és bevásárlólistával.',
    url: 'https://irresistibleapp.com',
    type: 'website',
  },
}

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <InsulinResistanceInfo />
        <AppInfo />
        <NewsletterSignup />
      </main>
    </div>
  );
}