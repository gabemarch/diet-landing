'use client';
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { FaUtensils, FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';

const AppInfo: React.FC = () => {
  const t = useTranslations('AppInfo');
  const { scrollToSection } = useSmoothScroll();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const handleNewsletterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    scrollToSection('#newsletter');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      ref={container}
      className="relative py-24 px-4 overflow-hidden min-h-screen perspective-1000 flex flex-col justify-center"
      id="features"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{
          y,
          scale,
          backgroundImage: 'url(/vegetables.jpg)',
          zIndex: -1,
          backgroundSize: 'cover',
          willChange: 'transform',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url(/vegetables.jpg)',
          zIndex: -1,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-montserrat mb-6 text-white">
            <span className="px-4 py-2">
              {t('whatIs')}
            </span>
            <span className="bg-[#97dbc5] text-gray-900 px-4 py-2 rounded-lg inline-block">
              IRresistible
            </span>
            <span className="px-4 py-2">
              {t('application')}
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#97dbc5] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mb-16 border border-white/20"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">{t('descriptionTitle')}</h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUtensils className="w-8 h-8" />,
              title: t('healthyRecipesTitle'),
              description: t('healthyRecipesDescription')
            },
            {
              icon: <FaCalendarAlt className="w-8 h-8" />,
              title: t('mealPlanningTitle'),
              description: t('mealPlanningDescription')
            },
            {
              icon: <FaShoppingCart className="w-8 h-8" />,
              title: t('shoppingListsTitle'),
              description: t('shoppingListsDescription')
            }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="absolute -top-6 left-8 bg-[#97dbc5] p-4 rounded-xl text-white transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 flex justify-center"
        >
          <button
            onClick={handleNewsletterClick}
            className="button text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('downloadButton')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppInfo; 