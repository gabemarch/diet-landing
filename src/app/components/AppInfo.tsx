import React from 'react';
import { getTranslations } from 'next-intl/server';

const AppInfo: React.FC = async () => {
  const t = await getTranslations('AppInfo');
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">{t('title')}</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{t('descriptionTitle')}</h3>
            <p className="text-gray-700">
              {t('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('healthyRecipesTitle')}</h3>
              <p className="text-gray-700">
                {t('healthyRecipesDescription')}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('mealPlanningTitle')}</h3>
              <p className="text-gray-700">
                {t('mealPlanningDescription')}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('shoppingListsTitle')}</h3>
              <p className="text-gray-700">
                {t('shoppingListsDescription')}
              </p>
            </div>
          </div>

          <div className="text-center mt-8 flex justify-center">
            <button className="button">
              {t('downloadButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppInfo; 