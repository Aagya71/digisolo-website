import React from 'react';
import { Globe, Megaphone, BarChart3, Code } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-14 h-14 bg-[#2E86DE]/10 rounded-lg flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-[#2E86DE]" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Dental Website Development",
      description: "Custom-built, modern websites specifically designed for dental practices, featuring appointment scheduling, patient testimonials, and service showcases."
    },
    {
      icon: Megaphone,
      title: "Social Media Management",
      description: "Strategic social media management to enhance your dental practice's online presence, engage with patients, and showcase your expertise."
    },
    {
      icon: BarChart3,
      title: "Google Ads Services",
      description: "Targeted Google Ads campaigns to attract new patients, promote special offers, and increase visibility for your dental practice in local searches."
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies tailored for dental practices, including SEO optimization and local business listings."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services for Dental Practices
          </h2>
          <p className="text-xl text-gray-600">
            Specialized digital solutions to help your dental practice grow online
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;