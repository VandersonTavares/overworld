import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <section className="py-20 bg-dark-blue">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-neon-blue mb-12">Contact Us</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-neon-blue mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-black/50 rounded-lg text-white focus:ring-2 focus:ring-neon-blue"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-neon-blue mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-black/50 rounded-lg text-white focus:ring-2 focus:ring-neon-blue"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-neon-blue mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-3 bg-black/50 rounded-lg text-white focus:ring-2 focus:ring-neon-blue"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-neon-blue text-dark-blue py-3 rounded-lg hover:bg-light-blue transition-colors"
            >
              Send Message
            </button>
            
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};