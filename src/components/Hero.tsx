import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Creating Digital Excellence for Healthcare Professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Specialized web solutions for dentists, veterinarians, and pet care businesses. Transform your online presence with websites that attract and engage your ideal clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-lg"
              >
                View Our Services
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
              alt="Modern dental clinic" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}