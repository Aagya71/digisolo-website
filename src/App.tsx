import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Globe2, 
  MessageSquareMore, 
  Search,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Bot
} from 'lucide-react';
import ContactForm from './components/ContactForm';

function App() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleContactClick = (service: string = '') => {
    setSelectedService(service);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        selectedService={selectedService}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <Bot className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Digi Solo</span>
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-gray-600 hover:text-blue-600">Home</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-gray-600 hover:text-blue-600">About Us</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-gray-600 hover:text-blue-600">Services</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-gray-600 hover:text-blue-600">Pricing</motion.a>
              <motion.a whileHover={{ scale: 1.05 }} href="#" className="text-gray-600 hover:text-blue-600">Contact Us</motion.a>
            </nav>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleContactClick()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started Now
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <motion.div 
          {...fadeIn}
          className="container mx-auto text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Transform Your Clinic's Digital Presence with AI-Driven Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Simplify operations, boost engagement, and grow your clinic with cutting-edge technology
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleContactClick()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            Request a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Services
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Globe2 className="w-12 h-12 text-blue-600" />,
                title: "Static Web Development",
                description: "Modern, responsive websites tailored to your clinic's needs."
              },
              {
                icon: <MessageSquareMore className="w-12 h-12 text-blue-600" />,
                title: "Chatbot Integration",
                description: "Automate patient engagement with intelligent chatbot solutions."
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "AI Agents",
                description: "Enhance efficiency with virtual AI assistants for scheduling and follow-ups."
              },
              {
                icon: <Search className="w-12 h-12 text-blue-600" />,
                title: "SEO Optimization",
                description: "Improve visibility and attract new patients with strategic SEO."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            {...fadeIn}
            className="text-4xl font-bold text-center mb-16"
          >
            Pricing Plans
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Static Web Development",
                price: "$500",
                description: "Responsive and SEO-friendly websites for clinics."
              },
              {
                title: "Chatbot Integration",
                price: "$600",
                description: "Smart chatbot solutions for 24/7 patient support."
              },
              {
                title: "AI Agents",
                price: "$1000",
                description: "Advanced AI assistants for clinic automation."
              },
              {
                title: "SEO Optimization",
                price: "$300",
                description: "Comprehensive SEO strategy and implementation."
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleContactClick(plan.title)}
                  className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Bot className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">Digi Solo</span>
              </div>
              <p className="text-gray-400">
                Transforming dental clinics with innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><motion.a whileHover={{ x: 5 }} href="#" className="text-gray-400 hover:text-white">About Us</motion.a></li>
                <li><motion.a whileHover={{ x: 5 }} href="#" className="text-gray-400 hover:text-white">Services</motion.a></li>
                <li><motion.a whileHover={{ x: 5 }} href="#" className="text-gray-400 hover:text-white">Contact Us</motion.a></li>
                <li><motion.a whileHover={{ x: 5 }} href="#" className="text-gray-400 hover:text-white">Privacy Policy</motion.a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="mailto:resabvai71@gmail.com" 
                    className="text-gray-400 hover:text-white"
                  >
                    resabvai71@gmail.com
                  </motion.a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <motion.a 
                    whileHover={{ x: 5 }}
                    href="tel:+918207234470" 
                    className="text-gray-400 hover:text-white"
                  >
                    +91 8207234470
                  </motion.a>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">
                    Naya Bazar Raj Bari Rani Kop, Kurseong
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  whileHover={{ scale: 1.2 }} 
                  href="#" 
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }} 
                  href="#" 
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }} 
                  href="#" 
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © Digi Solo 2025. All Rights Reserved.
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;