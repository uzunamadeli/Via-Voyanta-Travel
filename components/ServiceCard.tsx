import React from 'react';
import { ServiceItem, ServiceType, Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface ServiceCardProps {
  item: ServiceItem;
  index?: number;
  language: Language;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index = 0, language }) => {
  const t = TRANSLATIONS[language];
  const animationDelay = `${index * 1.5}s`;

  const getTypeLabel = (type: ServiceType) => {
    return t.services.card.types[type];
  };

  const getTypeColor = (type: ServiceType) => {
    switch (type) {
      case ServiceType.HONEYMOON: return 'bg-rose-500/90 text-white';
      case ServiceType.TOUR: return 'bg-sky-500/90 text-white';
      default: return 'bg-white/90 dark:bg-slate-900/90 text-blue-950 dark:text-white';
    }
  };

  const isTour = item.type === ServiceType.TOUR;

  return (
    <div
        className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col h-full animate-float"
        style={{
            animationDelay: animationDelay,
        }}
    >
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
        <img
          src={item.image}
          alt={item.title[language]}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute top-4 left-4 z-20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm border border-white/20 ${getTypeColor(item.type)}`}>
          {getTypeLabel(item.type)}
        </div>
        <div className="absolute bottom-4 right-4 z-20 bg-sky-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-lg flex items-center gap-1">
          <span>★</span> {item.rating}
        </div>
        {item.duration && (
          <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-blue-950 dark:text-white shadow-sm border border-white/20 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {item.duration[language]}
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col flex-grow relative bg-white dark:bg-slate-800">
        <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {item.location}
        </div>
        <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3 transition-colors leading-tight">{item.title[language]}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed transition-colors">
          {item.description[language]}
        </p>

        {isTour && (
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {language === 'tr' ? 'Ücretsiz İptal' : 'Free Cancellation'}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              {language === 'tr' ? 'Anında Onay' : 'Instant Confirmation'}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-700 mt-auto">
          <div>
            <span className="block text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">{t.services.card.startPrice}</span>
            <span className="text-2xl font-extrabold text-blue-950 dark:text-white transition-colors">
              {isTour ? `€${item.price}` : `${item.price} ₺`}
            </span>
            {isTour && <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">/ {language === 'tr' ? 'kişi' : 'person'}</span>}
          </div>
          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-blue-950 dark:hover:bg-sky-600 hover:text-white dark:hover:text-white text-slate-900 dark:text-slate-200 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
            {t.services.card.review}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
