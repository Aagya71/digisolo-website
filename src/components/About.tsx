import React from 'react';
import { Award, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Digi Solo
          </h2>
          <p className="text-lg text-gray-600">
            Founded by Resab Chettri, Digi Solo specializes in creating powerful digital solutions 
            for healthcare professionals. We understand the unique needs of dental practices and 
            veterinary clinics, crafting websites that not only look professional but also drive 
            real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p className="text-gray-600">
              Specialized in healthcare web development with a focus on user experience and conversion optimization.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Client-Focused</h3>
            <p className="text-gray-600">
              We work closely with you to understand your goals and create solutions that exceed expectations.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Passion</h3>
            <p className="text-gray-600">
              Dedicated to helping healthcare professionals succeed in the digital space with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}