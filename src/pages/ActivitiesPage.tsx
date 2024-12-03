import React from 'react';
import { ActivityCard } from '../components/ActivityCard';
import { activities } from '../data/activities';

export const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-brand-black pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title text-center mb-12">All Activities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};