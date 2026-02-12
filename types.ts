export enum ServiceType {
  HOTEL = 'HOTEL',
  TOUR = 'TOUR',
  FLIGHT = 'FLIGHT',
  HONEYMOON = 'HONEYMOON'
}

export interface LocalizedString {
  tr: string;
  en: string;
}

export interface ServiceItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  price: number;
  rating: number;
  image: string;
  type: ServiceType;
  location: string;
  duration?: LocalizedString;
  slug?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type Language = 'tr' | 'en';