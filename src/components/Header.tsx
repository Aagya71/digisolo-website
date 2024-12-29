import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">Digi Solo</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            <a href="tel:+918207234470" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              <Phone size={18} />
              <span>+91 820-723-4470</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:+918207234470" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                <Phone size={18} />
                <span>+91 820-723-4470</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}