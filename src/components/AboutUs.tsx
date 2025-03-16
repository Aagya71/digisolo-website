import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-32">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          {...fadeIn}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Bot className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About Digi Solo</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in building powerful online presence for businesses across India
          </p>
        </motion.div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Mission & Vision */}
          <motion.div 
            {...fadeIn}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower small businesses across India with custom, visually stunning, and high-performing websites that drive real results. We're committed to helping businesses thrive in the digital world through innovative solutions and excellence in service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading digital transformation partner for small businesses in India, helping them build and maintain a powerful online presence that drives growth and success in the digital age.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Story & Values */}
          <motion.div 
            {...fadeIn}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600">
                At Digi Solo, we understand that every business is unique. We specialize in website design, maintenance, and SEO, helping small businesses across India—hotels, restaurants, cafés, dental clinics, and more—thrive in the digital world. With a passion for innovation and a commitment to excellence, Digi Solo ensures that your business stands out—one website at a time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Innovation in Digital Solutions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Customer-Centric Approach
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Excellence in Delivery
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Commitment to Results
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          {...fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Build Something Amazing Together!</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Whether you're looking to attract more customers, improve your online visibility, or simply refresh your brand's digital identity, we've got you covered.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <img 
                src="https://ui-avatars.com/api/?name=Resab+Chettri&background=0D8ABC&color=fff&size=128&rounded=true&bold=true" 
                alt="Resab Chettri" 
                className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resab Chettri</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 