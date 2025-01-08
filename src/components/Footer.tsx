import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B4F72] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Digi Solo</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses with innovative digital solutions. We transform ideas into impactful online experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+918207234470" className="hover:text-[#74B9FF] transition-colors">
                  +91 820 723 4470
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:resabvai71@gmail.com" className="hover:text-[#74B9FF] transition-colors">
                  resabvai71@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#74B9FF] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="mailto:resabvai71@gmail.com"
                  className="hover:text-[#74B9FF] transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digi Solo. All rights reserved.</p>
          <p className="mt-2">
            Owner and Senior Developer: Resab Chettri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;