import React from 'react';
import { Clock, Activity as ActivityIcon } from 'lucide-react';
import { Activity } from '../types/activity';

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Beginner':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Advanced':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="bg-brand-gray rounded-lg overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">{activity.name}</h3>
        
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-yellow" />
            <span className="text-gray-300">{activity.duration}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ActivityIcon className={`w-5 h-5 ${getIntensityColor(activity.intensity)}`} />
            <span className="text-gray-300">{activity.intensity}</span>
          </div>
        </div>
        
        <p className="text-gray-400 mb-6">{activity.description}</p>
        
        <button className="btn-secondary w-full">
          Learn More
        </button>
      </div>
    </div>
  );
};