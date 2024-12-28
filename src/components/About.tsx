import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
          About Digi Solo
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700/50">
          <p className="text-lg text-gray-300 leading-relaxed">
            At Digi Solo, we specialize in designing, maintaining, and optimizing websites for startups 
            and small to medium-sized firms. Our goal is to create visually stunning, responsive, and 
            SEO-friendly websites that elevate your business's online presence.
          </p>
        </div>
      </div>
    </section>
  );
}