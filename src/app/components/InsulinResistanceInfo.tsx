'use client'
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
const InsulinResistanceInfo: React.FC = () => {
  const t = useTranslations('InsulinResistanceInfo');
  const { scrollToSection } = useSmoothScroll();

  const handleNewsletterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSection('#newsletter');
  };
  return (
    <section id="about-ir" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('insulinResistanceTitle')}</h2>

        <div className="space-y-16">
          {/* First Card - Right Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 heading-text">{t('insulinResistanceCardTitle')}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('insulinResistanceDescription')}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/insulin-resistance.jpg"
                  alt="Understanding insulin resistance"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
            </div>
          </div>

          {/* Second Card - Left Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/healthy-food.jpg"
                  alt="Healthy food choices"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 heading-text">{t('symptomsTitle')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t('symptomsFatigue')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t('symptomsIncreasedHunger')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t('symptomsDifficultyLosingWeight')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{t('symptomsHighBloodSugar')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Card - Right Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 heading-text">{t('howOurAppCanHelp')}</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    {t('howOurAppCanHelpDescription')}
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{t('howOurAppCanHelpRecipes')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{t('howOurAppCanHelpRecipesNutritionalInfo')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{t('howOurAppCanHelpCustomizedMealPlanning')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{t('howOurAppCanHelpShoppingList')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{t('howOurAppCanHelpEducationalResources')}</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 text-xs italic">{t('disclaimer')}</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/food.jpg"
                  alt="App features and benefits"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsulinResistanceInfo; 