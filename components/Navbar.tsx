import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const partners = [
    "Göreme Açık Hava Müzesi",
    "Kaymaklı Yeraltı Şehri",
    "Uçhisar Kalesi",
    "Paşabağ Rahipler Vadisi"
  ];

  return (
    <>
      <nav className="fixed w-full z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Via Voyanta Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              
              <div className="hidden relative w-12 h-12 flex items-center justify-center">
                 <div className="absolute inset-0 bg-blue-950 dark:bg-sky-600 rounded-full transition-colors"></div>
                 <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-6 h-6 text-blue-950 dark:text-sky-500 transform -rotate-45" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                 </div>
              </div>
              
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-blue-950 dark:text-white leading-none tracking-tight">VIA</span>
                <span className="font-bold text-sm text-sky-500 tracking-widest leading-none">VOYANTA TRAVEL</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Ana Sayfa</a>
              <a href="#tours" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Turlar</a>
              <a href="#hotels" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Oteller</a>
              <a href="#tours" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">Balayı</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">İletişim</a>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                ) : (
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
            </div>

            <div className="hidden md:flex">
              <button className="bg-blue-950 dark:bg-sky-600 text-white px-6 py-3 rounded-full font-medium hover:bg-sky-600 dark:hover:bg-sky-500 transition-all duration-300 shadow-lg hover:shadow-sky-500/30">
                Rezervasyon Yap
              </button>
            </div>
            
            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
               <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-600 dark:text-slate-300"
               >
                  {isDarkMode ? (
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  ) : (
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  )}
               </button>
               <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 dark:text-slate-300 p-2 relative z-50"
               >
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  )}
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 md:hidden ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-blue-950/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar Content */}
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-500 ease-out transform flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Header - Circular Logo Section */}
          <div className="pt-16 pb-10 flex flex-col items-center justify-center border-b border-slate-100 dark:border-slate-800">
             <div className="relative w-32 h-32 rounded-full bg-blue-950 dark:bg-sky-600 flex flex-col items-center justify-center p-4 shadow-xl border-4 border-white dark:border-slate-800 transform hover:scale-105 transition-transform">
                <div className="absolute inset-1 border border-white/20 rounded-full pointer-events-none"></div>
                <span className="font-black text-3xl text-white mb-1">VIA</span>
                <span className="font-bold text-[10px] text-sky-400 tracking-[0.2em] text-center leading-tight">VOYANTA TRAVEL</span>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
            
            {/* Main Links */}
            <div className="space-y-4">
              <a 
                href="#hotels" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-bold text-blue-950 dark:text-white hover:text-sky-500 transition-colors p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">🏨</span>
                Oteller
              </a>
              <a 
                href="#tours" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-bold text-blue-950 dark:text-white hover:text-sky-500 transition-colors p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">🎈</span>
                Turlar
              </a>
              <a 
                href="#tours" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-4 text-xl font-bold text-blue-950 dark:text-white hover:text-sky-500 transition-colors p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <span className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">💖</span>
                Balayı
              </a>
            </div>

            {/* Partners Section */}
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">ANLAŞMALI YERLER</h4>
              <div className="grid grid-cols-1 gap-2">
                {partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all hover:bg-sky-50 dark:hover:bg-sky-900/20">
                    <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Socials Section */}
            <div id="mobile-contact">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 ml-2">İLETİŞİM</h4>
              <div className="space-y-4 bg-blue-950 dark:bg-slate-950 p-6 rounded-3xl text-white shadow-inner">
                <div className="space-y-3">
                  <a href="tel:+902125550000" className="flex items-center gap-3 text-sm hover:text-sky-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +90 (212) 555 00 00
                  </a>
                  <a href="mailto:info@viavoyanta.com" className="flex items-center gap-3 text-sm hover:text-sky-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    info@viavoyanta.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Göreme, Nevşehir
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex justify-between">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-all text-xs font-bold">IG</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-all text-xs font-bold">TW</a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition-all text-xs font-bold">FB</a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6">
            <button className="w-full bg-sky-500 text-white py-4 rounded-2xl font-bold shadow-xl shadow-sky-500/20 active:scale-95 transition-transform">
              Rezervasyon Yap
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;