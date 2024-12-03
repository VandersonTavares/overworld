export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
}

export interface AdminCredentials {
  username: string;
  password: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface Activity {
  id: number;
  name: string;
  image: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

export interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface Product {
  id: string;
  image: string;
  category: string;
  name: string;
  description: string;
  price: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}