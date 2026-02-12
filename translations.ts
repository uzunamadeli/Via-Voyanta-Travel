import { Language, ServiceType } from './types';

export const TRANSLATIONS = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      tours: 'Turlar',
      hotels: 'Oteller',
      honeymoon: 'Balayı',
      contact: 'İletişim',
      book: 'Rezervasyon Yap',
      partners: 'ANLAŞMALI YERLER'
    },
    hero: {
      badge: 'Via Voyanta ile Keşfetmeye Hazır Mısın?',
      titleLine1: 'Hayalinizdeki Tatil',
      titleLine2: 'Bir Adım Uzakta',
      subtitle: 'Peri bacalarının büyüleyici atmosferinde, balon turları ve mağara otelleriyle unutulmaz bir deneyim yaşayın.',
      searchBtn: 'Yeni Bir Arama Yap',
      searchWhere: 'NEREYE',
      searchDate: 'TARİH',
      searchPerson: 'KİŞİ',
      searchAction: 'Ara',
      phWhere: 'Kapadokya, Göreme...',
      phDate: 'Tarih Seçin',
      phPerson: '2 Yetişkin'
    },
    services: {
      sectionTitle: 'TURLARIMIZ',
      mainTitle: 'Kapadokya\'nın En İyi Turları',
      subtitle: "Balon turlarından ATV maceralarına, kültür turlarından gastronomi deneyimlerine kadar Kapadokya'nın en popüler aktiviteleri.",
      tabs: {
        all: 'Tümü',
        tours: 'Turlar',
        hotels: 'Oteller',
        honeymoon: 'Balayı Paketleri'
      },
      card: {
        startPrice: 'BAŞLANGIÇ FİYATI',
        review: 'İncele',
        types: {
          [ServiceType.HOTEL]: 'Otel',
          [ServiceType.TOUR]: 'Tur',
          [ServiceType.HONEYMOON]: 'Balayı Paketi',
          [ServiceType.FLIGHT]: 'Uçuş'
        }
      }
    },
    features: {
      whyUs: 'NEDEN BİZ?',
      title: 'Her Detayı Düşünülmüş Eşsiz Bir Deneyim',
      f1Title: 'VIP Transfer',
      f1Desc: 'Havalimanından otelinize kadar konforlu araçlarla özel transfer hizmeti.',
      f2Title: '7/24 Destek & VIA Asistan',
      f2Desc: 'Yapay zeka destekli VİA asistanımız ile günün her saati sorularınıza anında yanıt.',
      f3Title: 'Güvenli Ödeme',
      f3Desc: 'Tüm banka kartlarıyla uyumlu, %100 güvenli ödeme altyapısı.'
    },
    footer: {
      desc: "Kapadokya'nın seçkin turizm acentası. Unutulmaz anılar biriktirmeniz için buradayız.",
      quickLinks: 'Hızlı Erişim',
      contact: 'İletişim',
      rights: '© 2024 Via Voyanta Travel. Tüm hakları saklıdır.'
    },
    modal: {
      step1: '📝 Rezervasyon Bilgileri',
      step2: '💳 Güvenli Ödeme',
      step3: '✅ İşlem Başarılı',
      name: 'Adınız',
      surname: 'Soyadınız',
      email: 'E-posta',
      phone: 'Telefon',
      serviceType: 'Hizmet Tipi',
      personCount: 'Kişi Sayısı',
      nextBtn: 'Ödemeye Geç',
      cardNum: 'Kart Numarası',
      expiry: 'Son Kullanma (Ay/Yıl)',
      cvv: 'CVV',
      cardHolder: 'Kart Sahibi',
      backBtn: 'Geri',
      payBtn: 'Ödemeyi Tamamla',
      processing: 'İşleniyor...',
      successTitle: 'Rezervasyonunuz Alındı!',
      successDesc: 'Teşekkür ederiz. Rezervasyon detaylarınız ve e-faturanız e-posta adresinize gönderilmiştir.',
      closeBtn: 'Kapat'
    },
    chat: {
      welcome: 'Merhaba! Ben VİA, Via Voyanta Travel asistanıyım. Kapadokya seyahatiniz için size nasıl yardımcı olabilirim?',
      placeholder: 'Bir soru sorun...',
      online: 'Çevrimiçi',
      disclaimer: 'AI cevapları hatalı olabilir. Kontrol ediniz.',
      warning: 'Lütfen üslubunuzu düzeltiniz.',
      error: 'Bir hata oluştu, lütfen tekrar deneyin.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      tours: 'Tours',
      hotels: 'Hotels',
      honeymoon: 'Honeymoon',
      contact: 'Contact',
      book: 'Book Now',
      partners: 'PARTNERS'
    },
    hero: {
      badge: 'Ready to Explore with Via Voyanta?',
      titleLine1: 'Your Dream Vacation',
      titleLine2: 'Is Just a Step Away',
      subtitle: 'Experience an unforgettable journey with balloon tours and cave hotels in the enchanting atmosphere of fairy chimneys.',
      searchBtn: 'New Search',
      searchWhere: 'WHERE',
      searchDate: 'DATE',
      searchPerson: 'GUESTS',
      searchAction: 'Search',
      phWhere: 'Cappadocia, Goreme...',
      phDate: 'Select Date',
      phPerson: '2 Adults'
    },
    services: {
      sectionTitle: 'OUR TOURS',
      mainTitle: 'Best Tours in Cappadocia',
      subtitle: "From balloon tours to ATV adventures, cultural tours to gastronomy experiences - Cappadocia's most popular activities.",
      tabs: {
        all: 'All',
        tours: 'Tours',
        hotels: 'Hotels',
        honeymoon: 'Honeymoon Packages'
      },
      card: {
        startPrice: 'STARTING PRICE',
        review: 'View',
        types: {
          [ServiceType.HOTEL]: 'Hotel',
          [ServiceType.TOUR]: 'Tour',
          [ServiceType.HONEYMOON]: 'Honeymoon',
          [ServiceType.FLIGHT]: 'Flight'
        }
      }
    },
    features: {
      whyUs: 'WHY US?',
      title: 'A Unique Experience with Every Detail Considered',
      f1Title: 'VIP Transfer',
      f1Desc: 'Private transfer service with comfortable vehicles from the airport to your hotel.',
      f2Title: '24/7 Support & VIA Assistant',
      f2Desc: 'Instant answers to your questions at any time of the day with our AI-powered VIA assistant.',
      f3Title: 'Secure Payment',
      f3Desc: '100% secure payment infrastructure compatible with all credit cards.'
    },
    footer: {
      desc: "Cappadocia's exclusive tourism agency. We are here for you to collect unforgettable memories.",
      quickLinks: 'Quick Access',
      contact: 'Contact',
      rights: '© 2024 Via Voyanta Travel. All rights reserved.'
    },
    modal: {
      step1: '📝 Reservation Details',
      step2: '💳 Secure Payment',
      step3: '✅ Success',
      name: 'First Name',
      surname: 'Last Name',
      email: 'Email',
      phone: 'Phone',
      serviceType: 'Service Type',
      personCount: 'Number of Guests',
      nextBtn: 'Proceed to Payment',
      cardNum: 'Card Number',
      expiry: 'Expiry (MM/YY)',
      cvv: 'CVV',
      cardHolder: 'Card Holder',
      backBtn: 'Back',
      payBtn: 'Complete Payment',
      processing: 'Processing...',
      successTitle: 'Reservation Received!',
      successDesc: 'Thank you. Your reservation details and e-invoice have been sent to your email address.',
      closeBtn: 'Close'
    },
    chat: {
      welcome: 'Hello! I am VIA, your Via Voyanta Travel assistant. How can I help you with your Cappadocia trip?',
      placeholder: 'Ask a question...',
      online: 'Online',
      disclaimer: 'AI responses can be inaccurate. Please verify.',
      warning: 'Please adjust your tone.',
      error: 'An error occurred, please try again.'
    }
  }
};