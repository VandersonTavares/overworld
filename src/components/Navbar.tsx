import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-black py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-extrabold text-white">
            OVER<span className="text-brand-yellow">WORLD</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-brand-yellow transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-brand-yellow transition-colors uppercase font-medium">
              Home
            </Link>
            <Link to="/activities" className="text-white hover:text-brand-yellow transition-colors uppercase font-medium">
              Activities
            </Link>
            <Link to="/gallery" className="text-white hover:text-brand-yellow transition-colors uppercase font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="text-white hover:text-brand-yellow transition-colors uppercase font-medium">
              Contact
            </Link>
            <Link to="/admin" className="btn-primary">
              Admin
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-brand-yellow transition-colors uppercase font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/activities"
              className="text-white hover:text-brand-yellow transition-colors uppercase font-medium"
              onClick={() => setIsOpen(false)}
            >
              Activities
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-brand-yellow transition-colors uppercase font-medium"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-brand-yellow transition-colors uppercase font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/admin"
              className="btn-primary inline-block text-center"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};