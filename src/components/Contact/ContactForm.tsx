import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { ContactFormData } from '../../types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isSubmitting: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSubmitting }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmitForm = async (data: ContactFormData) => {
    await onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-white font-medium mb-2">
          Nome
        </label>
        <input
          {...register('name', { required: 'Nome é obrigatório' })}
          type="text"
          id="name"
          className="input-field"
          placeholder="Seu nome completo"
        />
        {errors.name && (
          <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-white font-medium mb-2">
          Email
        </label>
        <input
          {...register('email', {
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          type="email"
          id="email"
          className="input-field"
          placeholder="seu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-white font-medium mb-2">
          Telefone
        </label>
        <input
          {...register('phone', {
            pattern: {
              value: /^\(\d{2}\) \d{5}-\d{4}$/,
              message: 'Formato: (99) 99999-9999',
            },
          })}
          type="tel"
          id="phone"
          className="input-field"
          placeholder="(99) 99999-9999"
        />
        {errors.phone && (
          <p className="mt-1 text-red-400 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-white font-medium mb-2">
          Mensagem
        </label>
        <textarea
          {...register('message', { required: 'Mensagem é obrigatória' })}
          id="message"
          rows={4}
          className="input-field resize-none"
          placeholder="Como podemos ajudar?"
        />
        {errors.message && (
          <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </>
        )}
      </button>
    </form>
  );
};