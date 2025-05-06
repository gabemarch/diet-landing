'use client'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Navigation from './Navigation'
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export default function Hero() {
  const t = useTranslations('Hero');
  const { scrollToSection } = useSmoothScroll();

  const handleNewsletterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSection('#newsletter');
  };

  return (
    <>
        <Navigation />
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t('heroDescription')}
          </p>
          <button 
            onClick={handleNewsletterClick}
            className="button"
          >
            {t('heroButton')}
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-1/2 w-full"
        >
          <div className="relative aspect-[4/3] w-full rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Healthy food and meal planning"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
              quality={90}
            />
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}