import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CarouselSlide, Product, Service, Activity } from '../types';

interface ContentState {
  carouselSlides: CarouselSlide[];
  products: Product[];
  services: Service[];
  activities: Activity[];
  addCarouselSlide: (slide: CarouselSlide) => void;
  removeCarouselSlide: (id: string) => void;
  updateProduct: (product: Product) => void;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateService: (service: Service) => void;
  addService: (service: Service) => void;
  removeService: (id: string) => void;
  updateActivity: (activity: Activity) => void;
  addActivity: (activity: Activity) => void;
  removeActivity: (id: number) => void;
}

export const useContentStore = create<ContentState>()(
  persist(
    (set) => ({
      carouselSlides: [
        {
          id: '1',
          image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77',
          title: 'TREINO COMPLETO',
          subtitle: 'Musculação, Cardio e Aulas',
        },
        {
          id: '2',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
          title: 'PLANOS FLEXÍVEIS',
          subtitle: 'Escolha o melhor para você',
        },
        {
          id: '3',
          image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
          title: 'ESTRUTURA PREMIUM',
          subtitle: 'Equipamentos de última geração',
        },
      ],
      products: [],
      services: [],
      activities: [],
      addCarouselSlide: (slide) =>
        set((state) => ({
          carouselSlides: [...state.carouselSlides, slide],
        })),
      removeCarouselSlide: (id) =>
        set((state) => ({
          carouselSlides: state.carouselSlides.filter((slide) => slide.id !== id),
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === product.id ? product : p
          ),
        })),
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      removeProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
      updateService: (service) =>
        set((state) => ({
          services: state.services.map((s) =>
            s.id === service.id ? service : s
          ),
        })),
      addService: (service) =>
        set((state) => ({
          services: [...state.services, service],
        })),
      removeService: (id) =>
        set((state) => ({
          services: state.services.filter((s) => s.id !== id),
        })),
      updateActivity: (activity) =>
        set((state) => ({
          activities: state.activities.map((a) =>
            a.id === activity.id ? activity : a
          ),
        })),
      addActivity: (activity) =>
        set((state) => ({
          activities: [...state.activities, activity],
        })),
      removeActivity: (id) =>
        set((state) => ({
          activities: state.activities.filter((a) => a.id !== id),
        })),
    }),
    {
      name: 'content-storage',
    }
  )
);