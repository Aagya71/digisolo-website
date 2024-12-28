import React from 'react';
import { services } from '../data/services';
import { gradientText, sectionContainer, contentWrapper, glassCard } from '../styles/common';

export function Services() {
  return (
    <section id="services" className={sectionContainer}>
      <div className={contentWrapper}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${gradientText}`}>
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className={`${glassCard} group transition-all duration-300 hover:-translate-y-1 hover:bg-gray-800/70`}
            >
              <service.icon className={`h-12 w-12 ${gradientText} mb-4`} />
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}