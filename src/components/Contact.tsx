import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help your business grow
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-8 shadow-lg border border-gradient-to-r from-[#2E86DE] to-[#74B9FF]"
          >
            <div className="mb-6">
              <label 
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86DE] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label 
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86DE] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label 
                htmlFor="subject"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86DE] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label 
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E86DE] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#2E86DE] to-[#74B9FF] text-white py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;