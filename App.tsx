import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ViaChatbot from './components/ViaChatbot';
import ReservationModal from './components/ReservationModal';
import { TOURS_DATA, MOCK_SERVICES } from './constants';
import { ServiceType, Language } from './types';
import { TRANSLATIONS } from './translations';

function App() {
  const [activeTab, setActiveTab] = useState<'ALL' | ServiceType>('ALL');
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'tr' ? 'tr' : 'en';
    }
    return 'tr';
  });

  const t = TRANSLATIONS[language];

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Combined data: tours + hotels + honeymoon
  const allServices = [...TOURS_DATA, ...MOCK_SERVICES];

  const filteredServices = activeTab === 'ALL'
    ? allServices
    : allServices.filter(s => s.type === activeTab);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onOpenReservation={() => setIsReservationOpen(true)}
        language={language}
        setLanguage={setLanguage}
      />

      <main className="dark:text-slate-100">
        <Hero language={language} />

        {/* Tours Section */}
        <section id="tours" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sky-600 dark:text-sky-400 font-bold tracking-wide uppercase mb-3">{t.services.sectionTitle}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6">{t.services.mainTitle}</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 inline-flex transition-colors duration-300 overflow-x-auto no-scrollbar max-w-full">
              <button
                onClick={() => setActiveTab('ALL')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'ALL' ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {t.services.tabs.all}
              </button>
              <button
                onClick={() => setActiveTab(ServiceType.TOUR)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.TOUR ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {t.services.tabs.tours}
              </button>
              <button
                onClick={() => setActiveTab(ServiceType.HOTEL)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.HOTEL ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {t.services.tabs.hotels}
              </button>
              <button
                onClick={() => setActiveTab(ServiceType.HONEYMOON)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.HONEYMOON ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {t.services.tabs.honeymoon}
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((item, index) => (
              <ServiceCard key={item.id} item={item} index={index} language={language} />
            ))}
          </div>
        </section>

        {/* Feature/Why Us Section - Dark Navy Background */}
        <section className="bg-blue-950 dark:bg-slate-900 py-24 text-white overflow-hidden relative transition-colors duration-300">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2 animate-pulse" style={{animationDuration: '4s'}}></div>

           <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="md:w-1/2">
                 <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-sky-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                        alt="Cappadocia"
                        className="relative rounded-2xl shadow-2xl border border-blue-900 dark:border-slate-800 w-full"
                    />
                 </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-sky-400 font-bold tracking-wider uppercase mb-2 block">{t.features.whyUs}</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{t.features.title}</h2>
                <div className="space-y-8">
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{t.features.f1Title}</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">{t.features.f1Desc}</p>
                      </div>
                   </div>
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{t.features.f2Title}</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">{t.features.f2Desc}</p>
                      </div>
                   </div>
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">{t.features.f3Title}</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">{t.features.f3Desc}</p>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-blue-950 dark:bg-slate-950 text-blue-200 dark:text-slate-400 py-12 px-4 border-t border-blue-900 dark:border-slate-800 transition-colors duration-300">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-4">
                    <img
                      src="/logo.png"
                      alt="Via Voyanta Logo"
                      className="h-10 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white rounded-full"></div>
                         <svg className="w-4 h-4 text-blue-950 relative z-10 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </div>

                    <span className="font-bold text-xl text-white">VIA <span className="text-sky-500">VOYANTA</span></span>
                 </div>
                 <p className="max-w-sm mb-4">
                    {t.footer.desc}
                 </p>
                 <div className="flex gap-4 items-center">
                    <a href="https://www.instagram.com/kapadokya_tour" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      <span className="font-semibold text-sm">@kapadokya_tour</span>
                    </a>
                 </div>
              </div>
              <div>
                 <h4 className="text-white font-bold mb-4">{t.footer.quickLinks}</h4>
                 <ul className="space-y-2">
                    <li><a href="#" className="hover:text-sky-400 transition-colors">{t.nav.home}</a></li>
                    <li><a href="#tours" className="hover:text-sky-400 transition-colors">{t.nav.tours}</a></li>
                    <li><a href="#tours" className="hover:text-sky-400 transition-colors">{t.nav.hotels}</a></li>
                    <li><a href="#tours" className="hover:text-sky-400 transition-colors">{t.nav.honeymoon}</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="text-white font-bold mb-4">{t.footer.contact}</h4>
                 <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      <a href="tel:+905335058965" className="hover:text-sky-400 transition-colors">+90 533 505 89 65</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      <a href="https://www.instagram.com/kapadokya_tour" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">@kapadokya_tour</a>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span>Göreme, Nevşehir, Türkiye</span>
                    </li>
                 </ul>
              </div>
           </div>
           <div className="border-t border-blue-900 dark:border-slate-800 pt-8 text-center text-sm">
              {t.footer.rights}
           </div>
        </footer>
      </main>

      {/* AI Assistant */}
      <ViaChatbot language={language} />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        language={language}
      />
    </div>
  );
}

export default App;
