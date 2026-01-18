import { ServiceItem, ServiceType } from './types';

// Using picsum seeds that somewhat resemble nature/travel/interiors
export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'h1',
    title: 'Mystic Cave Suites',
    description: 'Tarihi mağara odalarda lüks konaklama deneyimi. Göreme manzaralı teras.',
    price: 4500,
    rating: 4.8,
    image: 'https://picsum.photos/id/1040/800/600', 
    type: ServiceType.HOTEL,
    location: 'Göreme, Kapadokya'
  },
  {
    id: 'h2',
    title: 'Argos in Cappadocia',
    description: 'Eşsiz mimari ve yeraltı tünelleriyle bezeli, ödüllü bir otel deneyimi.',
    price: 8200,
    rating: 4.9,
    image: 'https://picsum.photos/id/164/800/600',
    type: ServiceType.HOTEL,
    location: 'Uçhisar, Kapadokya'
  },
  {
    id: 't1',
    title: 'Sıcak Hava Balonu Turu',
    description: 'Gün doğumunda Kapadokya\'nın peri bacalarını gökyüzünden izleyin.',
    price: 3500,
    rating: 5.0,
    image: 'https://picsum.photos/id/1015/800/600',
    type: ServiceType.TOUR,
    location: 'Aşk Vadisi'
  },
  {
    id: 'b1',
    title: 'Romantik Mağara Esintisi',
    description: 'Balayı çiftlerine özel süslenmiş VIP mağara süiti, özel teras yemeği ve şampanya ikramı.',
    price: 12500,
    rating: 4.9,
    image: 'https://picsum.photos/id/1031/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Ürgüp'
  },
  {
    id: 'b2',
    title: 'Bulutların Üstünde Aşk',
    description: 'Baş başa binilebilen özel balon turu, havada keman dinletisi ve profesyonel fotoğraf çekimi.',
    price: 18000,
    rating: 5.0,
    image: 'https://picsum.photos/id/1020/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kapadokya Semaları'
  },
  {
    id: 'b3',
    title: 'Vadi Işıkları Seremonisi',
    description: 'Kızılçukur vadisinde gün batımına karşı butik şarap tadımı ve 2 gece lüks konaklama.',
    price: 9800,
    rating: 4.7,
    image: 'https://picsum.photos/id/1050/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kızılçukur'
  },
  {
    id: 'b4',
    title: 'Efsanevi Aşk Rotası',
    description: '3 gün süren tamamen VIP araçlı bölge turu, at binme aktivitesi ve yeraltı şehri keşfi.',
    price: 15400,
    rating: 4.9,
    image: 'https://picsum.photos/id/1067/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kapadokya Geneli'
  },
  {
    id: 't2',
    title: 'Kırmızı Tur (Bölge Gezisi)',
    description: 'Açık hava müzesi, Paşabağları ve Devrent vadisi profesyonel rehber eşliğinde.',
    price: 1200,
    rating: 4.7,
    image: 'https://picsum.photos/id/1036/800/600',
    type: ServiceType.TOUR,
    location: 'Kapadokya Geneli'
  },
  {
    id: 't3',
    title: 'ATV Gün Batımı Turu',
    description: 'Kılıçlar Vadisi ve Kızılçukur\'da heyecan dolu bir ATV macerası.',
    price: 950,
    rating: 4.6,
    image: 'https://picsum.photos/id/1064/800/600',
    type: ServiceType.TOUR,
    location: 'Çavuşin'
  }
];

export const BAD_WORDS = [
  'küfür', 'aptal', 'salak', 'gerizekalı', 'mal', 'şerefsiz', 'lan', 'mk', 'amk', 'bok'
];