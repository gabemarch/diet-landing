import AppInfo from '@/components/AppInfo';
import Hero from '@/components/Hero';
import InsulinResistanceInfo from '@/components/InsulinResistanceInfo';
import NewsletterSignup from '@/components/NewsletterSignup';
import {getTranslations} from 'next-intl/server';
 
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