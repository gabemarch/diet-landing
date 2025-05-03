'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

const NewsletterSignup: React.FC = () => {
  const t = useTranslations('NewsletterSignup');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="newsletter" className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('title')}</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          {t('description')}
        </p>

        {status === 'success' ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">
            {t('successMessage')}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && (
              <p className="text-red-600 mt-2 text-sm">{errorMessage}</p>
            )}
          </form>
        )}

        <p className="text-sm text-gray-500 mt-4">
          {t('privacyMessage')}
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup; 