import React from 'react';
import { ServiceItem, ServiceType } from '../types';

interface ServiceCardProps {
  item: ServiceItem;
  index?: number; // Added to stagger animations
}

const ServiceCard: React.FC<ServiceCardProps> = ({ item, index = 0 }) => {
  // Stagger animation delay based on index
  const animationDelay = `${index * 1.5}s`;

  const getTypeLabel = (type: ServiceType) => {
    switch (type) {
      case ServiceType.HOTEL: return 'Otel';
      case ServiceType.TOUR: return 'Tur';
      case ServiceType.HONEYMOON: return 'Balayı Paketi';
      default: return 'Hizmet';
    }
  };

  const getTypeColor = (type: ServiceType) => {
    switch (type) {
      case ServiceType.HONEYMOON: return 'bg-rose-500/90 text-white';
      case ServiceType.TOUR: return 'bg-sky-500/90 text-white';
      default: return 'bg-white/90 dark:bg-slate-900/90 text-blue-950 dark:text-white';
    }
  };

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
          alt={item.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute top-4 left-4 z-20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm border border-white/20 ${getTypeColor(item.type)}`}>
          {getTypeLabel(item.type)}
        </div>
        <div className="absolute bottom-4 right-4 z-20 bg-sky-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-sm font-bold shadow-lg flex items-center gap-1">
          <span>★</span> {item.rating}
        </div>
      </div>
      
      <div className="p-7 flex flex-col flex-grow relative bg-white dark:bg-slate-800">
        <div className="text-sm text-sky-600 dark:text-sky-400 font-semibold mb-3 flex items-center gap-1.5">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {item.location}
        </div>
        <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3 transition-colors">{item.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed transition-colors">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-700 mt-auto">
          <div>
            <span className="block text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">Başlangıç Fiyatı</span>
            <span className="text-2xl font-extrabold text-blue-950 dark:text-white transition-colors">{item.price} ₺</span>
          </div>
          <button className="px-6 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-blue-950 dark:hover:bg-sky-600 hover:text-white dark:hover:text-white text-slate-900 dark:text-slate-200 font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
            İncele
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;