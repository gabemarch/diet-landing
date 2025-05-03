'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Navigation');

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };

  const handleLanguageChange = (locale: string) => {
    setIsLangMenuOpen(false);
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
    window.location.href = `/${locale}${pathWithoutLocale}`;
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About IR', href: '#about-ir' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">IRresistible</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.href ? 'text-green-600 border-b-2 border-green-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              onClick={(e) => handleScroll(e, '#newsletter')}
              className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
            >
              {t('subscribe')}
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                <span className="mr-1">🌐</span>
                {pathname.startsWith('/en') ? 'EN' : 'HU'}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('hu')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Magyar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Selector for Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center text-gray-700 hover:text-green-600 p-2 rounded-md"
              >
                <span className="mr-1">🌐</span>
                {pathname.startsWith('/en') ? 'EN' : 'HU'}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      English
                    </button>
                    <button
                      onClick={() => handleLanguageChange('hu')}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Magyar
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#newsletter"
              onClick={(e) => handleScroll(e, '#newsletter')}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
            >
              {t('subscribe')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 