import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';

export default function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    handleSubmit,
    handleChange
  } = useContactForm();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-gray-600">
              Ready to transform your online presence? Get in touch with us today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone & WhatsApp</h3>
                  <a href="tel:+918207234470" className="text-blue-600 hover:underline">+91 820-723-4470</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    Naya Bazar, Kurseong<br />
                    Raj Bari Rani Koop<br />
                    PIN: 734203
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                  <a 
                    href="https://www.instagram.com/yabakuu/profilecard/?igsh=YjQzeTh1N25uN2Jh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Follow us on Instagram
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Opening messaging apps...' : 'Send Message'}
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-2">
                This will open WhatsApp and your email client
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}