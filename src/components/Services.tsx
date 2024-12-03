import React from 'react';
import { Dumbbell, Users, Heart, Trophy } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'Access to premium fitness equipment and dedicated training zones',
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'Dynamic group sessions with certified instructors',
  },
  {
    icon: Heart,
    title: 'Personal Training',
    description: 'Customized workout plans and one-on-one guidance',
  },
  {
    icon: Trophy,
    title: 'Nutrition Planning',
    description: 'Expert nutrition advice to maximize your results',
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Experience premium fitness services designed to help you achieve your goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 group hover:-translate-y-1"
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-primary-600/10 group-hover:bg-primary-600/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-dark-100 mb-2">
                {service.title}
              </h3>
              <p className="text-dark-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};