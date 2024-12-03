import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-gray pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Social Media */}
        <div className="text-center mb-12">
          <Link
            to="/"
            className="text-3xl font-extrabold text-white inline-block mb-8"
          >
            OVER<span className="text-brand-yellow">WORLD</span>
          </Link>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-yellow transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Site Map */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Equipe
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Atividades</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/activities"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Todas as Atividades
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Horários
                </Link>
              </li>
              <li>
                <Link
                  to="/trainers"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Professores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-brand-yellow"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                Q.05 N/Brazlândia- DF
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 text-brand-yellow" />
                (61) 9 8135-8742
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-brand-yellow" />
                contato@overworld.com
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mb-12 h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d403.77814973029587!2d-48.195697970741165!3d-15.676546499881633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1spt-BR!2sbr!4v1733190894460!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} OverWorld. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
