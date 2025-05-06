'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   { icon: <FaInstagram />, href: '#' },
  //   { icon: <FaFacebook />, href: '#' },
  //   { icon: <FaTwitter />, href: '#' },
  // ];

  // const appLinks = [
  //   { icon: <FaApple />, href: '#', text: 'App Store' },
  //   { icon: <FaGooglePlay />, href: '#', text: 'Google Play' },
  // ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-[#97dbc5] text-gray-900 px-3 py-1 rounded-lg">
                IRresistible
              </span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('description')}
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#97dbc5] hover:text-gray-900 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-[#97dbc5] transition-colors duration-300">
                  {t('features')}
                </a>
              </li>
              <li>
                <a href="#about-ir" className="text-gray-400 hover:text-[#97dbc5] transition-colors duration-300">
                  {t('aboutIR')}
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-400 hover:text-[#97dbc5] transition-colors duration-300">
                  {t('newsletter')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contactUs')}</h4>
            <div className="space-y-4">
              <a 
                href="mailto:contact@irresistibleapp.com" 
                className="flex items-center space-x-3 text-gray-400 hover:text-[#97dbc5] transition-colors duration-300"
              >
                <FaEnvelope className="text-[#97dbc5]" />
                <span>contact@irresistibleapp.com</span>
              </a>
              {/* <div className="flex flex-col space-y-3">
                {appLinks.map((app, index) => (
                  <motion.a
                    key={index}
                    href={app.href}
                    className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-[#97dbc5] hover:text-gray-900 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {app.icon}
                    <span>{app.text}</span>
                  </motion.a>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center mb-4 md:mb-0">
            {t('copyright', { currentYear })}
            <FaHeart className="mx-2 text-[#97dbc5] animate-pulse" />
          </p>
          {/* <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#97dbc5] transition-colors duration-300">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-[#97dbc5] transition-colors duration-300">
              {t('termsOfService')}
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 