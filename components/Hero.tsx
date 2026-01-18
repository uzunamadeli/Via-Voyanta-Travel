import React, { useState, useEffect } from 'react';

const HERO_IMAGES = [
  "https://picsum.photos/id/1036/1920/1080", // Winter/Snowy landscape
  "https://picsum.photos/id/1015/1920/1080", // River/Valley
  "https://picsum.photos/id/1040/1920/1080"  // Castle/Fortress
];

const Hero: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scroll to make search bar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        // Automatically collapse when back at top if preferred, or keep state
        if (window.scrollY < 100) {
            setIsExpanded(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const toggleSearch = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0 bg-blue-950">
        {HERO_IMAGES.map((src, index) => (
            <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <img 
                  src={src} 
                  alt={`Cappadocia Landscape ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
            </div>
        ))}
        {/* Navy blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-950/30 to-slate-50 dark:to-slate-950 transition-colors duration-300 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 w-full">
        <span className="inline-block py-1 px-3 rounded-full bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-50 font-semibold mb-6 animate-fade-in-up">
          Via Voyanta ile Keşfetmeye Hazır Mısın?
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
          Hayalinizdeki Tatil <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-sky-400">
            Bir Adım Uzakta
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Peri bacalarının büyüleyici atmosferinde, balon turları ve mağara otelleriyle unutulmaz bir deneyim yaşayın.
        </p>

        {/* 
            ANIMATED SEARCH BAR WIDGET 
            Uses fixed positioning when sticky, otherwise static within flow but expandable
        */}
        <div className={`
            transition-all duration-500 ease-in-out z-50
            ${isSticky 
                ? 'fixed top-24 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto shadow-2xl scale-100 md:scale-100' 
                : 'relative w-full max-w-3xl mx-auto'
            }
        `}>
             <div className={`
                bg-blue-950/95 backdrop-blur-xl dark:bg-slate-900/95 
                rounded-2xl md:rounded-full transition-all duration-500 overflow-hidden
                border border-white/20 shadow-2xl
                ${isExpanded || !isSticky 
                    ? 'p-2' 
                    : 'p-1.5'
                }
             `}>
                
                {/* Collapsed State (Just Button) - Only visible when NOT expanded AND sticky (optional logic, but here we toggle) */}
                {(!isExpanded && isSticky) ? (
                    <button 
                        onClick={toggleSearch}
                        className="flex items-center justify-center gap-3 px-6 py-3 md:py-2 text-white hover:text-sky-300 transition-colors w-full md:w-auto"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <span className="font-semibold whitespace-nowrap">Yeni Bir Arama Yap</span>
                    </button>
                ) : (
                    /* Expanded / Default State */
                    <div className="flex flex-col md:flex-row gap-2 animate-fade-in">
                        
                        <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-blue-800 dark:border-slate-700">
                            <label className="block text-xs font-bold text-sky-300 dark:text-slate-400 uppercase tracking-wider mb-1 text-left">Nereye</label>
                            <input 
                                type="text" 
                                placeholder="Kapadokya, Göreme..." 
                                className="w-full outline-none text-white placeholder-blue-200/50 dark:placeholder-slate-500 bg-transparent text-left" 
                            />
                        </div>
                        
                        <div className="flex-1 px-6 py-3 border-b md:border-b-0 md:border-r border-blue-800 dark:border-slate-700">
                            <label className="block text-xs font-bold text-sky-300 dark:text-slate-400 uppercase tracking-wider mb-1 text-left">Tarih</label>
                            <input 
                                type="text" 
                                placeholder="Tarih Seçin" 
                                className="w-full outline-none text-white placeholder-blue-200/50 dark:placeholder-slate-500 bg-transparent text-left" 
                            />
                        </div>
                        
                        <div className="flex-1 px-6 py-3">
                            <label className="block text-xs font-bold text-sky-300 dark:text-slate-400 uppercase tracking-wider mb-1 text-left">Kişi</label>
                            <input 
                                type="number" 
                                placeholder="2 Yetişkin" 
                                className="w-full outline-none text-white placeholder-blue-200/50 dark:placeholder-slate-500 bg-transparent text-left" 
                            />
                        </div>

                        <div className="p-1">
                             <button className="h-full w-full md:w-auto bg-sky-500 hover:bg-sky-400 text-white rounded-xl md:rounded-full px-8 py-3 font-semibold transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                {isSticky ? '' : 'Ara'}
                            </button>
                        </div>
                        
                        {/* Close Button only when sticky and expanded */}
                        {isSticky && (
                             <button onClick={toggleSearch} className="md:hidden absolute top-2 right-2 text-white/50 p-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                             </button>
                        )}
                    </div>
                )}
             </div>
        </div>

        {/* Placeholder to prevent layout shift when search bar becomes fixed */}
        {isSticky && <div className="h-20 w-full"></div>}

      </div>
    </div>
  );
};

export default Hero;