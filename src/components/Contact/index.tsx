import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactFormData } from '../../types';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      // Here you would typically send the data to your backend
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-brand-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para ajudar! Envie sua mensagem e nossa equipe entrará em contato o mais breve possível.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-brand-gray p-8 rounded-lg">
            <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>

          <div className="bg-brand-gray p-8 rounded-lg">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};