import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-white">
            Digi Solo
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-[#F8A5C2] transition-colors">Services</a>
            <a href="#pricing" className="text-white hover:text-[#F8A5C2] transition-colors">Pricing</a>
            <a href="#testimonials" className="text-white hover:text-[#F8A5C2] transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-[#F8A5C2] transition-colors">Contact</a>
            <button className="bg-[#F8A5C2] text-black px-6 py-2 rounded-lg hover:bg-[#F6E58D] transition-colors">
              Book a 15-min call
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-white hover:text-[#F8A5C2] transition-colors">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-white hover:text-[#F8A5C2] transition-colors">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-white hover:text-[#F8A5C2] transition-colors">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#F8A5C2] transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;