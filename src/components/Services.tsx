import React from 'react';
import { Globe, Search, BarChart } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive web solutions designed specifically for healthcare professionals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Globe className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Website Design & Development</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Custom, responsive designs</li>
              <li>✓ User-friendly appointment systems</li>
              <li>✓ Service showcases</li>
              <li>✓ Patient testimonials</li>
              <li>✓ Before/after galleries</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Search className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">SEO Optimization</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Local SEO strategies</li>
              <li>✓ Keyword optimization</li>
              <li>✓ Content optimization</li>
              <li>✓ Technical SEO</li>
              <li>✓ Performance optimization</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <BarChart className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Google Ads Management</h3>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Campaign strategy</li>
              <li>✓ Keyword research</li>
              <li>✓ Ad copywriting</li>
              <li>✓ Performance tracking</li>
              <li>✓ ROI optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}