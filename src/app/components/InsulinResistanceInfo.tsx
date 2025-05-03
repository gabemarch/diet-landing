import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const InsulinResistanceInfo: React.FC = () => {
  const t = useTranslations('InsulinResistanceInfo');
  return (
    <section id="about-ir" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{t('insulinResistanceTitle')}</h2>
        
        <div className="space-y-16">
          {/* First Card - Right Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">What is Insulin Resistance?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Insulin resistance is a condition where your body's cells don't respond properly to insulin, 
                  a hormone that helps regulate blood sugar levels. This can lead to higher blood sugar levels 
                  and eventually type 2 diabetes if not managed properly.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/insulin-resistance.jpg"
                  alt="Understanding insulin resistance"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Second Card - Left Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/healthy-food.jpg"
                  alt="Healthy food choices"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Common Symptoms</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Fatigue and low energy levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Increased hunger and cravings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Difficulty losing weight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>High blood sugar levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Dark patches on skin (acanthosis nigricans)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Third Card - Right Aligned */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">How Our App Can Help</h3>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Our app provides personalized tools and guidance to help you manage insulin resistance through:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Customized meal planning based on your needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Blood sugar tracking and monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Educational resources about insulin resistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Progress tracking and goal setting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Community support and expert advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/healthy-food.jpg"
                  alt="App features and benefits"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsulinResistanceInfo; 