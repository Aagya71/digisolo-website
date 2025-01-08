import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in Digi Solo's dental website services.\n\nName:\nNumber:\nEmail:\nDental Practice Name:"
    );
    window.open(`https://wa.me/918207234470?text=${message}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-white mb-6">
            We develop <span className="text-[#F8A5C2]">sales-boosting</span> websites for dental practices.
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We create websites that bring in visitors, turn them into patients, and help your dental practice grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center px-8 py-4 bg-[#F8A5C2] hover:bg-[#F6E58D] text-black rounded-lg transition-colors duration-300 font-medium"
            >
              Book a 15-min call
            </button>
          </div>
          <p className="mt-4 text-gray-400">Fixed Prices. No long-term contracts.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;