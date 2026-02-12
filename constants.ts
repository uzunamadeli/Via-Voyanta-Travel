import { ServiceItem, ServiceType } from './types';

export const TOURS_DATA: ServiceItem[] = [
  {
    id: 'tour-1',
    title: {
      tr: 'Kapadokya Sıcak Hava Balonu Turu',
      en: 'Cappadocia Hot Air Balloon Tour Over Fairychimneys'
    },
    description: {
      tr: 'Peri bacalarının üzerinde unutulmaz bir balon deneyimi. Gün doğumunda gökyüzünden Kapadokya\'nın büyüleyici manzarasını keşfedin.',
      en: 'An unforgettable balloon experience over the fairy chimneys. Discover the enchanting landscape of Cappadocia from the sky at sunrise.'
    },
    price: 55,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Göreme, Kapadokya',
    duration: { tr: '2 - 3 Saat', en: '2 - 3 Hours' },
    slug: 'cappadocia-hot-air-balloon-tour-over-fairychimneys'
  },
  {
    id: 'tour-2',
    title: {
      tr: 'Kapadokya Gün Doğumu Balon İzleme Turu',
      en: 'Cappadocia Sunrise Hot Air Balloon Watching Tour With Audio Guide'
    },
    description: {
      tr: 'Sesli rehber eşliğinde en iyi fotoğraf noktalarından balon izleme deneyimi. Profesyonel fotoğraf çekimi dahil.',
      en: 'Balloon watching experience from the best photo spots with audio guide. Professional photography included.'
    },
    price: 15,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2583836/pexels-photo-2583836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-sunrise-hot-air-balloon-watching-tour-with-audio-guide'
  },
  {
    id: 'tour-3',
    title: {
      tr: 'Kapadokya Kırmızı Tur – Tam Gün Rehberli Macera',
      en: 'Cappadocia Red Tour – Full-Day Guided Adventure'
    },
    description: {
      tr: 'Göreme Açık Hava Müzesi, Paşabağları, Devrent Vadisi ve daha fazlasını profesyonel rehber eşliğinde keşfedin.',
      en: 'Explore Goreme Open Air Museum, Pasabag, Devrent Valley and more with a professional guide.'
    },
    price: 28,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/13127423/pexels-photo-13127423.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '7 - 8 Saat', en: '7 - 8 Hours' },
    slug: 'cappadocia-red-tour-full-day-guided-adventure'
  },
  {
    id: 'tour-4',
    title: {
      tr: 'Kapadokya Havalimanı Transferleri – Kayseri & Nevşehir',
      en: 'Cappadocia Airport Transfers – Kayseri & Nevsehir (Private / Shared)'
    },
    description: {
      tr: 'Kayseri ve Nevşehir havalimanlarından otelinize özel veya paylaşımlı konforlu transfer hizmeti.',
      en: 'Comfortable private or shared transfer service from Kayseri and Nevsehir airports to your hotel.'
    },
    price: 11,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 - 2 Saat', en: '1 - 2 Hours' },
    slug: 'cappadocia-airport-transfers-kayseri-nevsehir-private-shared'
  },
  {
    id: 'tour-5',
    title: {
      tr: 'Kapadokya Erciyes Kayak Turu – Kış Macerası',
      en: 'Cappadocia Full-Day Erciyes Ski Tour – Winter Adventure with Hotel Pickup'
    },
    description: {
      tr: 'Erciyes Dağı\'nda tam gün kayak deneyimi. Otel transferi, ekipman ve rehber dahil.',
      en: 'Full day skiing experience at Mount Erciyes. Hotel transfer, equipment and guide included.'
    },
    price: 40,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '7 - 8 Saat', en: '7 - 8 Hours' },
    slug: 'cappadocia-full-day-erciyes-ski-tour-winter-adventure-with-hotel-pickup'
  },
  {
    id: 'tour-6',
    title: {
      tr: 'Kapadokya ATV Turu – Vadileri ve Gizli Patikalar',
      en: 'Cappadocia Guided ATV Tour – Explore Valleys & Hidden Trails by Quad Bike'
    },
    description: {
      tr: 'ATV ile Kapadokya\'nın vadilerini, tepelerini ve gizli patikalarını keşfedin. Heyecan dolu bir macera!',
      en: 'Explore Cappadocia\'s valleys, hills and hidden trails by ATV. An exciting adventure!'
    },
    price: 13,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/5359802/pexels-photo-5359802.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-guided-atv-tour-explore-valleys-hidden-trails-by-quad-bike'
  },
  {
    id: 'tour-7',
    title: {
      tr: 'Kapadokya Üç Güzeller ATV Turu',
      en: 'Cappadocia Three Beauties ATV Tour (1-2 Hour Option)'
    },
    description: {
      tr: 'Üç Güzeller bölgesinde 1-2 saatlik ATV macerası. Muhteşem vadi manzaraları eşliğinde.',
      en: '1-2 hour ATV adventure in the Three Beauties area. Accompanied by stunning valley views.'
    },
    price: 12,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/5007065/pexels-photo-5007065.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 - 2 Saat', en: '1 - 2 Hours' },
    slug: 'cappadocia-three-beauties-atv-tour-1-2-hour-option'
  },
  {
    id: 'tour-8',
    title: {
      tr: 'Kapadokya Deve Binme Turu – Gün Doğumu & Batımı Safari',
      en: 'Cappadocia Camel Ride Tour – Sunrise, Sunset & Daytime Safari Experience'
    },
    description: {
      tr: 'Gün doğumu veya gün batımında deve üzerinde Kapadokya\'nın eşsiz manzaralarının tadını çıkarın.',
      en: 'Enjoy the unique landscapes of Cappadocia on a camel at sunrise or sunset.'
    },
    price: 42,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 Saat', en: '1 Hour' },
    slug: 'cappadocia-camel-ride-tour-sunrise-sunset-daytime-safari-experience'
  },
  {
    id: 'tour-9',
    title: {
      tr: 'Kapadokya At Binme Turu – Güzel Atlar Diyarı',
      en: 'Cappadocia Horseback Riding Tour – Explore the Land of Beautiful Horses'
    },
    description: {
      tr: 'Kapadokya\'nın büyüleyici vadilerinde at sırtında unutulmaz bir deneyim. Tüm seviyeler için uygun.',
      en: 'An unforgettable horseback riding experience through the enchanting valleys of Cappadocia. Suitable for all levels.'
    },
    price: 12,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1125062/pexels-photo-1125062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-horseback-riding-tour-explore-the-land-of-beautiful-horses'
  },
  {
    id: 'tour-10',
    title: {
      tr: 'Kapadokya Yeşil Tur – Tam Gün Rehberli Macera',
      en: 'Cappadocia Green Tour – Full-Day Guided Adventure'
    },
    description: {
      tr: 'Ihlara Vadisi, Derinkuyu Yeraltı Şehri ve Selime Manastırı\'nı keşfedin. Öğle yemeği dahil.',
      en: 'Explore Ihlara Valley, Derinkuyu Underground City and Selime Monastery. Lunch included.'
    },
    price: 40,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '7 - 8 Saat', en: '7 - 8 Hours' },
    slug: 'cappadocia-green-tour-full-day-guided-adventure'
  },
  {
    id: 'tour-11',
    title: {
      tr: 'Kapadokya Sema Gösterisi – Semazen Seremonisi',
      en: 'Cappadocia Whirling Dervishes Show – Spiritual Sema Ceremony with Audio Guide'
    },
    description: {
      tr: 'Sesli rehber eşliğinde mistik Sema seremonisini deneyimleyin. Ruhani bir yolculuk.',
      en: 'Experience the mystical Sema ceremony with audio guide. A spiritual journey.'
    },
    price: 25,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/8276361/pexels-photo-8276361.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 Saat', en: '1 Hour' },
    slug: 'cappadocia-whirling-dervishes-show-spiritual-sema-ceremony-with-audio-guide'
  },
  {
    id: 'tour-12',
    title: {
      tr: 'Kapadokya Akşam Turu – Yemekli',
      en: 'Cappadocia: Evening Tour with Dinner and Hotel Pickup'
    },
    description: {
      tr: 'Kapadokya\'nın büyüleyici gün batımını izleyin ve geleneksel Türk yemeği ile akşamınızı taçlandırın.',
      en: 'Watch the enchanting sunset of Cappadocia and crown your evening with a traditional Turkish dinner.'
    },
    price: 40,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '5 Saat', en: '5 Hours' },
    slug: 'cappadocia-evening-tour-with-dinner-and-hotel-pickup'
  },
  {
    id: 'tour-13',
    title: {
      tr: 'Kapadokya Jeep Safari Turu – Off-Road Macera',
      en: 'Cappadocia Jeep Safari Tour – Off-Road Adventure Through Valleys & Panoramic Hills'
    },
    description: {
      tr: 'Vadiler ve panoramik tepeler boyunca heyecan verici bir off-road macerası. Doğanın kalbinde keşif.',
      en: 'An exciting off-road adventure through valleys and panoramic hills. Discovery in the heart of nature.'
    },
    price: 60,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-jeep-safari-tour-off-road-adventure-through-valleys-panoramic-hills'
  },
  {
    id: 'tour-14',
    title: {
      tr: 'Kapadokya Günlük Mix Yerel Tur',
      en: 'Cappadocia Daily Mix Local Area Tour'
    },
    description: {
      tr: 'Kapadokya\'nın en önemli noktalarını tek bir günde keşfedin. Yerel rehber eşliğinde kapsamlı tur.',
      en: 'Discover the most important spots of Cappadocia in a single day. Comprehensive tour with a local guide.'
    },
    price: 45,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '7 - 8 Saat', en: '7 - 8 Hours' },
    slug: 'cappadocia-daily-mix-local-area-tour'
  },
  {
    id: 'tour-15',
    title: {
      tr: 'Kapadokya Özel Şarap Tadımı Turu',
      en: 'Cappadocia Private Wine Tasting Tour – 3 Hours of Fine Wines & Gourmet Bites'
    },
    description: {
      tr: '3 saatlik özel şarap tadımı deneyimi. Seçkin şaraplar ve gurme atıştırmalıklar eşliğinde.',
      en: '3-hour private wine tasting experience. Accompanied by select wines and gourmet bites.'
    },
    price: 90,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-private-wine-tasting-tour-3-hours-of-fine-wines-gourmet-bites'
  },
  {
    id: 'tour-16',
    title: {
      tr: 'Kapadokya Arıcılık Deneyimi – Taze Bal Hasadı',
      en: 'Cappadocia Beekeeping Experience – Harvest Fresh Honey & Taste Nature\'s Sweetest Secret'
    },
    description: {
      tr: 'Taze bal hasadı yapın ve doğanın en tatlı sırrını tadın. Eşsiz bir deneyim.',
      en: 'Harvest fresh honey and taste nature\'s sweetest secret. A unique experience.'
    },
    price: 52,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/1406958/pexels-photo-1406958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 - 2 Saat', en: '1 - 2 Hours' },
    slug: 'cappadocia-beekeeping-experience-harvest-fresh-honey-taste-natures-sweetest-secret'
  },
  {
    id: 'tour-17',
    title: {
      tr: 'Kapadokya Türk Hamamı Deneyimi',
      en: 'Cappadocia Turkish Bath & Hammam Experience – Rejuvenate Your Body and Soul'
    },
    description: {
      tr: 'Geleneksel Türk hamamında bedeninizi ve ruhunuzu yenileyin. Köpük masajı ve peeling dahil.',
      en: 'Rejuvenate your body and soul in a traditional Turkish bath. Foam massage and peeling included.'
    },
    price: 28,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '1 Saat', en: '1 Hour' },
    slug: 'cappadocia-turkish-bath-hammam-experience-rejuvenate-your-body-and-soul'
  },
  {
    id: 'tour-18',
    title: {
      tr: 'Kapadokya Mozaik Lamba Atölyesi',
      en: 'Cappadocia Mosaic Lamp Workshop – Create Your Own Fairy Chimney-Inspired Lamp'
    },
    description: {
      tr: 'Peri bacası ilhamlı kendi mozaik lambanızı yapın. Eğlenceli ve yaratıcı bir atölye deneyimi.',
      en: 'Create your own fairy chimney-inspired mosaic lamp. A fun and creative workshop experience.'
    },
    price: 38,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-mosaic-lamp-workshop-create-your-own-fairy-chimney-inspired-lamp'
  },
  {
    id: 'tour-19',
    title: {
      tr: 'Kapadokya Türk Gecesi Şovu – Yemekli & Sınırsız İçecek',
      en: 'Cappadocia Turkish Night Show with Dinner & Unlimited Drinks'
    },
    description: {
      tr: 'Geleneksel Türk gecesi şovu, zengin akşam yemeği ve sınırsız içecek ile unutulmaz bir gece.',
      en: 'An unforgettable night with traditional Turkish night show, rich dinner and unlimited drinks.'
    },
    price: 50,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-turkish-night-show-with-dinner-unlimited-drinks'
  },
  {
    id: 'tour-20',
    title: {
      tr: 'Kapadokya Ev Yemekleri Deneyimi – Pişir, Tat, Keşfet',
      en: 'Cappadocia Home Cooking Experience – Cook, Taste & Discover Local Life'
    },
    description: {
      tr: 'Yerel bir evde geleneksel Türk yemekleri pişirin, tadın ve yerel yaşamı keşfedin.',
      en: 'Cook traditional Turkish dishes in a local home, taste and discover local life.'
    },
    price: 100,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-home-cooking-experience-cook-taste-discover-local-life'
  },
  {
    id: 'tour-21',
    title: {
      tr: 'Kapadokya Microlight Uçuş Aktivitesi',
      en: 'Cappadocia Microlight Flight Activity'
    },
    description: {
      tr: 'Microlight uçak ile Kapadokya\'nın üzerinde uçun! Adrenalin dolu bir gökyüzü macerası.',
      en: 'Fly over Cappadocia with a microlight aircraft! An adrenaline-packed sky adventure.'
    },
    price: 200,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '30 dk - 1 Saat', en: '30 min - 1 Hour' },
    slug: 'cappadocia-microlight-flight-activity'
  },
  {
    id: 'tour-22',
    title: {
      tr: 'Kapadokya Kumda Türk Kahvesi & Fal Atölyesi',
      en: 'Cappadocia Turkish Coffee Making on Sand & Fortune Telling Workshop'
    },
    description: {
      tr: 'Kumda geleneksel Türk kahvesi yapımını öğrenin ve kahve falı deneyimi yaşayın.',
      en: 'Learn traditional Turkish coffee making on sand and experience coffee fortune telling.'
    },
    price: 35,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-turkish-coffee-making-on-sand-fortune-telling-workshop'
  },
  {
    id: 'tour-23',
    title: {
      tr: 'Kapadokya Gün Doğumu & Batımı Piknik Deneyimi',
      en: 'Cappadocia Sunrise & Sunset Picnic Experience'
    },
    description: {
      tr: 'Kapadokya\'nın en güzel noktalarında gün doğumu veya batımında özel piknik deneyimi.',
      en: 'Private picnic experience at the most beautiful spots of Cappadocia at sunrise or sunset.'
    },
    price: 100,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '3 Saat', en: '3 Hours' },
    slug: 'cappadocia-sunrise-sunset-picnic-experience'
  },
  {
    id: 'tour-24',
    title: {
      tr: 'Kapadokya Klasik Araba Turu',
      en: 'Cappadocia Classic Car Tour'
    },
    description: {
      tr: 'Klasik bir arabayla Kapadokya\'nın büyüleyici manzaralarını keşfedin. Stil ve macera bir arada!',
      en: 'Discover the enchanting landscapes of Cappadocia in a classic car. Style and adventure combined!'
    },
    price: 100,
    rating: 5.0,
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    type: ServiceType.TOUR,
    location: 'Kapadokya',
    duration: { tr: '2 Saat', en: '2 Hours' },
    slug: 'cappadocia-classic-car-tour'
  }
];

// Keep old services for hotels and honeymoon
export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'h1',
    title: {
      tr: 'Mystic Cave Suites',
      en: 'Mystic Cave Suites'
    },
    description: {
      tr: 'Tarihi mağara odalarda lüks konaklama deneyimi. Göreme manzaralı teras.',
      en: 'Luxury accommodation experience in historic cave rooms. Terrace with Goreme view.'
    },
    price: 4500,
    rating: 4.8,
    image: 'https://picsum.photos/id/1040/800/600',
    type: ServiceType.HOTEL,
    location: 'Göreme, Kapadokya'
  },
  {
    id: 'h2',
    title: {
      tr: 'Argos in Cappadocia',
      en: 'Argos in Cappadocia'
    },
    description: {
      tr: 'Eşsiz mimari ve yeraltı tünelleriyle bezeli, ödüllü bir otel deneyimi.',
      en: 'An award-winning hotel experience adorned with unique architecture and underground tunnels.'
    },
    price: 8200,
    rating: 4.9,
    image: 'https://picsum.photos/id/164/800/600',
    type: ServiceType.HOTEL,
    location: 'Uçhisar, Kapadokya'
  },
  {
    id: 'b1',
    title: {
      tr: 'Romantik Mağara Esintisi',
      en: 'Romantic Cave Breeze'
    },
    description: {
      tr: 'Balayı çiftlerine özel süslenmiş VIP mağara süiti, özel teras yemeği ve şampanya ikramı.',
      en: 'VIP cave suite decorated specially for honeymoon couples, private terrace dinner and champagne service.'
    },
    price: 12500,
    rating: 4.9,
    image: 'https://picsum.photos/id/1031/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Ürgüp'
  },
  {
    id: 'b2',
    title: {
      tr: 'Bulutların Üstünde Aşk',
      en: 'Love Above the Clouds'
    },
    description: {
      tr: 'Baş başa binilebilen özel balon turu, havada keman dinletisi ve profesyonel fotoğraf çekimi.',
      en: 'Private balloon tour for two, violin recital in the air, and professional photo shoot.'
    },
    price: 18000,
    rating: 5.0,
    image: 'https://picsum.photos/id/1020/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kapadokya Semaları'
  },
  {
    id: 'b3',
    title: {
      tr: 'Vadi Işıkları Seremonisi',
      en: 'Valley Lights Ceremony'
    },
    description: {
      tr: 'Kızılçukur vadisinde gün batımına karşı butik şarap tadımı ve 2 gece lüks konaklama.',
      en: 'Boutique wine tasting against the sunset in Red Valley and 2 nights luxury accommodation.'
    },
    price: 9800,
    rating: 4.7,
    image: 'https://picsum.photos/id/1050/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kızılçukur'
  },
  {
    id: 'b4',
    title: {
      tr: 'Efsanevi Aşk Rotası',
      en: 'Legendary Love Route'
    },
    description: {
      tr: '3 gün süren tamamen VIP araçlı bölge turu, at binme aktivitesi ve yeraltı şehri keşfi.',
      en: '3-day fully VIP vehicle regional tour, horse riding activity, and underground city exploration.'
    },
    price: 15400,
    rating: 4.9,
    image: 'https://picsum.photos/id/1067/800/600',
    type: ServiceType.HONEYMOON,
    location: 'Kapadokya Geneli'
  }
];

export const BAD_WORDS = [
  'küfür', 'aptal', 'salak', 'gerizekalı', 'mal', 'şerefsiz', 'lan', 'mk', 'amk', 'bok'
];
