import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useContentStore } from '../../store/contentStore';
import type { CarouselSlide } from '../../types';

export const CarouselManager = () => {
  const { carouselSlides, addCarouselSlide, removeCarouselSlide } = useContentStore();
  const [newSlide, setNewSlide] = useState<Partial<CarouselSlide>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSlide.image && newSlide.title && newSlide.subtitle) {
      addCarouselSlide({
        id: Date.now().toString(),
        image: newSlide.image,
        title: newSlide.title,
        subtitle: newSlide.subtitle,
      });
      setNewSlide({});
    }
  };

  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <h3 className="text-xl font-bold text-white mb-6">Gerenciar Carousel</h3>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            URL da Imagem
          </label>
          <input
            type="url"
            value={newSlide.image || ''}
            onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
            className="input-field"
            placeholder="https://exemplo.com/imagem.jpg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Título
          </label>
          <input
            type="text"
            value={newSlide.title || ''}
            onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
            className="input-field"
            placeholder="Título do slide"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subtítulo
          </label>
          <input
            type="text"
            value={newSlide.subtitle || ''}
            onChange={(e) => setNewSlide({ ...newSlide, subtitle: e.target.value })}
            className="input-field"
            placeholder="Subtítulo do slide"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Adicionar Slide
        </button>
      </form>

      <div className="space-y-4">
        {carouselSlides.map((slide) => (
          <div
            key={slide.id}
            className="flex items-center gap-4 p-4 bg-brand-black rounded-lg"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-24 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-medium text-white">{slide.title}</h4>
              <p className="text-sm text-gray-400">{slide.subtitle}</p>
            </div>
            <button
              onClick={() => removeCarouselSlide(slide.id)}
              className="p-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};