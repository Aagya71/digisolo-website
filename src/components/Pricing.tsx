import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular = false }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 ${
    isPopular ? 'border-2 border-[#F8A5C2] transform scale-105' : ''
  }`}>
    {isPopular && (
      <span className="bg-[#F8A5C2] text-black px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mt-4">{title}</h3>
    <div className="mt-4">
      <span className="text-4xl font-bold">${price}</span>
      {price !== 149 && <span className="text-gray-600">/website</span>}
      {price === 149 && <span className="text-gray-600">/month</span>}
    </div>
    <ul className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-[#F8A5C2] mr-2" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 999,
      features: [
        'Custom Website Design',
        'Mobile Responsive',
        'Basic SEO Setup',
        '3 Pages',
        '2 Revisions',
        '1 Month Support'
      ]
    },
    {
      title: 'Premium',
      price: 1999,
      features: [
        'Premium Website Design',
        'Mobile Responsive',
        'Advanced SEO Setup',
        'Up to 5 Pages',
        'Unlimited Revisions',
        '3 Months Support',
        'Analytics Integration'
      ],
      isPopular: true
    },
    {
      title: 'Subscription',
      price: 149,
      features: [
        'Ongoing Website Management',
        'Monthly Updates',
        'Security Monitoring',
        'Performance Optimization',
        '24/7 Support',
        'Regular Backups'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your dental practice
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;