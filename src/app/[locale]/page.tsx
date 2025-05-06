import AppInfo from '@/components/AppInfo';
import Hero from '@/components/Hero';
import InsulinResistanceInfo from '@/components/InsulinResistanceInfo';
import NewsletterSignup from '@/components/NewsletterSignup';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('HomePage');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://irresistibleapp.com',
      type: 'website',
    },
  };
}

export default async function HomePage() {
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