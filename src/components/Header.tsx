import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <header className="relative bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] mix-blend-overlay opacity-20 bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Digi Solo
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Crafting Digital Experiences That Leave a Lasting Impression
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 text-lg border-2 border-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch 
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </header>
  );
}