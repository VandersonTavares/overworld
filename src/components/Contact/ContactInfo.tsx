import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-brand-yellow mb-6">
          Informações de Contato
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Localização</p>
              <p className="text-gray-400">
                Av. Principal, 1000 - Centro
                <br />
                São Paulo - SP, 01234-567
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Telefone</p>
              <p className="text-gray-400">(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-gray-400">contato@overworld.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-brand-yellow shrink-0 mt-1" />
            <div>
              <p className="text-white font-medium">Horário de Funcionamento</p>
              <p className="text-gray-400">
                Segunda à Sexta: 06h às 23h
                <br />
                Sábados: 08h às 20h
                <br />
                Domingos: 08h às 14h
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-brand-yellow mb-6">
          Redes Sociais
        </h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center hover:bg-brand-light-gray transition-colors"
          >
            <img
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/instagram.svg"
              alt="Instagram"
              className="w-6 h-6 invert"
            />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center hover:bg-brand-light-gray transition-colors"
          >
            <img
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 invert"
            />
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center hover:bg-brand-light-gray transition-colors"
          >
            <img
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6 invert"
            />
          </a>
        </div>
      </div>
    </div>
  );
};