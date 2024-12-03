import React from 'react';

const products = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1594735822307-9854f6286b06',
    category: 'Suplementos',
    name: 'Whey Protein Premium',
    description: 'Suplemento proteico de alta qualidade para seus treinos',
    price: 'R$ 149,90'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    category: 'Vestuário',
    name: 'Camiseta Performance',
    description: 'Camiseta esportiva com tecnologia dry-fit',
    price: 'R$ 79,90'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    category: 'Acessórios',
    name: 'Garrafa Térmica',
    description: 'Garrafa térmica de alta qualidade 500ml',
    price: 'R$ 49,90'
  }
];

export const Shop = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Nossa Loja</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-brand-gray rounded-lg overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="text-brand-yellow text-sm font-medium mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{product.price}</span>
                  <button className="btn-secondary">
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};