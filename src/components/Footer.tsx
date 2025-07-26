
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () =>  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/d1ff1f98-774c-43f5-85f8-5c325f42a655.png" 
                alt="ADQ INFOTECH" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Transforming digital visions into reality through innovative web development, 
              stunning design, and exceptional user experiences.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a 
                  href="mailto:adqinfotech@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  adqinfotech@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a 
                  href="tel:+919787117544" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 9787117544
                </a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-6">
              <a 
                href="https://www.instagram.com/adqinfotech?igsh=MTdpeXJxMGV0bTdydA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/1ATGkHkFYK/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Web Designing</li>
              <li className="text-gray-300">UI/UX Designing</li>
              <li className="text-gray-300">Logo Designing</li>
              <li className="text-gray-300">Free Consultation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 ADQ INFOTECH. All rights reserved. Crafted with passion for digital excellence.
            </p>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
