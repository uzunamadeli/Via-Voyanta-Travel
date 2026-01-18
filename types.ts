export enum ServiceType {
  HOTEL = 'HOTEL',
  TOUR = 'TOUR',
  FLIGHT = 'FLIGHT',
  HONEYMOON = 'HONEYMOON'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  type: ServiceType;
  location: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}