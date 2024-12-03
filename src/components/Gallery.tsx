import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
  'https://images.unsplash.com/photo-1517963879433-6ad2b056d712',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
  'https://images.unsplash.com/photo-1576678927484-cc907957088c',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
  'https://images.unsplash.com/photo-1591117507412-8dbea960b952',
];

export const Gallery = () => {
  return (
    <section className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-neon-blue mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};