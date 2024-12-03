import { Activity } from '../types/activity';

export const activities: Activity[] = [
  {
    id: 1,
    name: 'CrossFit Training',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5',
    duration: '60 min',
    intensity: 'Advanced',
    description: 'High-intensity functional movements combining gymnastics, weightlifting, and cardio.'
  },
  {
    id: 2,
    name: 'Yoga Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    duration: '45 min',
    intensity: 'Beginner',
    description: 'Harmonious flow of poses focusing on flexibility, balance, and mindfulness.'
  },
  {
    id: 3,
    name: 'HIIT Circuit',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712',
    duration: '30 min',
    intensity: 'Intermediate',
    description: 'Intense interval training alternating between high-intensity exercises and short rest periods.'
  }
];