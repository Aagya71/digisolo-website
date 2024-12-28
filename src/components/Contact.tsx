import React from 'react';
import { Mail, Phone, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
          Contact Us
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700/50">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-6">
                <a href="mailto:resabvai71@gmail.com" className="flex items-center text-gray-400 hover:text-violet-400 transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  resabvai71@gmail.com
                </a>
                <a href="tel:+918207234480" className="flex items-center text-gray-400 hover:text-violet-400 transition-colors">
                  <Phone className="h-5 w-5 mr-3" />
                  +91 8207234480
                </a>
                <a href="https://www.instagram.com/yabakuu/profilecard/?igsh=YjQzeTh1N25uN2Jh" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-violet-400 transition-colors">
                  <Instagram className="h-5 w-5 mr-3" />
                  Follow Us on Instagram
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="mt-1 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white focus:ring-violet-500 focus:border-violet-500" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="mt-1 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white focus:ring-violet-500 focus:border-violet-500" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="mt-1 block w-full rounded-lg bg-gray-700/50 border-gray-600 text-white focus:ring-violet-500 focus:border-violet-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium hover:from-violet-700 hover:to-pink-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}