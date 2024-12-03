import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77',
    title: 'TREINO COMPLETO',
    subtitle: 'Musculação, Cardio e Aulas',
  },
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
    title: 'PLANOS FLEXÍVEIS',
    subtitle: 'Escolha o melhor para você',
  },
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
    title: 'ESTRUTURA PREMIUM',
    subtitle: 'Equipamentos de última geração',
  },
];

export const Hero = () => {
  return (
    <div className="h-screen relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-4 uppercase tracking-wider">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-center mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <button className="btn-primary">
                  COMECE AGORA
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};