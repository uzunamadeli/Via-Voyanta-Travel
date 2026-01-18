import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import ViaChatbot from './components/ViaChatbot';
import { MOCK_SERVICES } from './constants';
import { ServiceType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'ALL' | ServiceType>('ALL');
  
  // Initialize state based on system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Listen for system changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Toggle Dark Mode Class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const filteredServices = activeTab === 'ALL' 
    ? MOCK_SERVICES 
    : MOCK_SERVICES.filter(s => s.type === activeTab);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="dark:text-slate-100">
        <Hero />
        
        {/* Services Section */}
        <section id="tours" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sky-600 dark:text-sky-400 font-bold tracking-wide uppercase mb-3">Hizmetlerimiz</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6">Unutulmaz Bir Tatil Planlayın</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kapadokya'nın eşsiz coğrafyasında en iyi oteller, en heyecanlı turlar ve size özel deneyimler.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-white dark:bg-slate-800 p-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 inline-flex transition-colors duration-300 overflow-x-auto no-scrollbar max-w-full">
              <button 
                onClick={() => setActiveTab('ALL')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === 'ALL' ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                Tümü
              </button>
              <button 
                onClick={() => setActiveTab(ServiceType.TOUR)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.TOUR ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                Turlar
              </button>
              <button 
                onClick={() => setActiveTab(ServiceType.HOTEL)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.HOTEL ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                Oteller
              </button>
              <button 
                onClick={() => setActiveTab(ServiceType.HONEYMOON)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${activeTab === ServiceType.HONEYMOON ? 'bg-blue-950 text-white shadow-md transform scale-105' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                Balayı Paketleri
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredServices.map((item, index) => (
              <ServiceCard key={item.id} item={item} index={index} />
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
                        src="https://picsum.photos/id/1029/600/800" 
                        alt="Cityscape" 
                        className="relative rounded-2xl shadow-2xl border border-blue-900 dark:border-slate-800 w-full"
                    />
                 </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-sky-400 font-bold tracking-wider uppercase mb-2 block">Neden Biz?</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Her Detayı Düşünülmüş Eşsiz Bir Deneyim</h2>
                <div className="space-y-8">
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">VIP Transfer</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">Havalimanından otelinize kadar konforlu araçlarla özel transfer hizmeti.</p>
                      </div>
                   </div>
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">7/24 Destek & VIA Asistan</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">Yapay zeka destekli VİA asistanımız ile günün her saati sorularınıza anında yanıt.</p>
                      </div>
                   </div>
                   <div className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-sky-600/20 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                         <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Güvenli Ödeme</h4>
                        <p className="text-blue-200 dark:text-slate-400 leading-relaxed">Tüm banka kartlarıyla uyumlu, %100 güvenli ödeme altyapısı.</p>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-950 dark:bg-slate-950 text-blue-200 dark:text-slate-400 py-12 px-4 border-t border-blue-900 dark:border-slate-800 transition-colors duration-300">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-4">
                    {/* Footer Logo */}
                    <img 
                      src="/logo.png" 
                      alt="Via Voyanta Logo" 
                      className="h-10 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                     {/* Fallback CSS Logo */}
                    <div className="hidden relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white rounded-full"></div>
                         <svg className="w-4 h-4 text-blue-950 relative z-10 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </div>

                    <span className="font-bold text-xl text-white">VIA <span className="text-sky-500">VOYANTA</span></span>
                 </div>
                 <p className="max-w-sm mb-4">
                    Kapadokya'nın seçkin turizm acentası. Unutulmaz anılar biriktirmeniz için buradayız.
                 </p>
                 <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                 </div>
              </div>
              <div>
                 <h4 className="text-white font-bold mb-4">Hızlı Erişim</h4>
                 <ul className="space-y-2">
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Hakkımızda</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Turlar</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Oteller</a></li>
                    <li><a href="#" className="hover:text-sky-400 transition-colors">Balayı</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="text-white font-bold mb-4">İletişim</h4>
                 <ul className="space-y-2">
                    <li>info@viavoyanta.com</li>
                    <li>+90 (212) 555 00 00</li>
                    <li>Göreme, Nevşehir, Türkiye</li>
                 </ul>
              </div>
           </div>
           <div className="border-t border-blue-900 dark:border-slate-800 pt-8 text-center text-sm">
              &copy; 2024 Via Voyanta Travel. Tüm hakları saklıdır.
           </div>
        </footer>
      </main>

      {/* AI Assistant */}
      <ViaChatbot />
    </div>
  );
}

export default App;