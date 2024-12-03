import React from 'react';
import { Link } from 'react-router-dom';
import { ActivityCard } from './ActivityCard';
import { activities } from '../data/activities';

export const Activities = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/activities" className="btn-primary">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
};