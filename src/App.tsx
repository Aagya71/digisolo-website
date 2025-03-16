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
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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

  const HomePage = () => (
    <>
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
            Transform Your Small Business with AI-Powered Digital Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Streamline operations, boost customer engagement, and grow your business with cutting-edge technology
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
                title: "Business Website Development",
                description: "Professional, responsive websites designed for small businesses."
              },
              {
                icon: <MessageSquareMore className="w-12 h-12 text-blue-600" />,
                title: "Customer Support Chatbot",
                description: "24/7 automated customer service with intelligent chatbot solutions."
              },
              {
                icon: <Brain className="w-12 h-12 text-blue-600" />,
                title: "Business AI Assistant",
                description: "Smart AI tools for inventory, scheduling, and customer management."
              },
              {
                icon: <Search className="w-12 h-12 text-blue-600" />,
                title: "Local SEO Optimization",
                description: "Improve local visibility and attract more customers."
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
                title: "Business Website",
                price: "₹25,000",
                description: "Professional website with mobile optimization."
              },
              {
                title: "Customer Support Chatbot",
                price: "₹15,000",
                description: "24/7 automated customer service solution."
              },
              {
                title: "Business AI Assistant",
                price: "₹50,000",
                description: "Comprehensive AI tools for business automation."
              },
              {
                title: "Local SEO Package",
                price: "₹7,000",
                description: "Targeted local search optimization strategy."
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
                Empowering small businesses with innovative digital solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    <motion.span whileHover={{ x: 5 }}>About Us</motion.span>
                  </Link>
                </li>
                <li>
                  <Link to="/#services" className="text-gray-400 hover:text-white">
                    <motion.span whileHover={{ x: 5 }}>Services</motion.span>
                  </Link>
                </li>
                <li>
                  <Link to="/#contact" className="text-gray-400 hover:text-white">
                    <motion.span whileHover={{ x: 5 }}>Contact Us</motion.span>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white">
                    <motion.span whileHover={{ x: 5 }}>Privacy Policy</motion.span>
                  </Link>
                </li>
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
                  href="https://www.instagram.com/yatowants5yen?igsh=MWR0aDY5bWxtdmN3dQ==" 
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }} 
                  href="https://www.linkedin.com/in/resab-chettri-24b0341b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
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
    </>
  );

  return (
    <Router>
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
                <Link to="/" className="text-2xl font-bold text-gray-800">Digi Solo</Link>
              </motion.div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-600 hover:text-blue-600">
                  <motion.span whileHover={{ scale: 1.05 }}>Home</motion.span>
                </Link>
                <Link to="/about" className="text-gray-600 hover:text-blue-600">
                  <motion.span whileHover={{ scale: 1.05 }}>About Us</motion.span>
                </Link>
                <Link to="/#services" className="text-gray-600 hover:text-blue-600">
                  <motion.span whileHover={{ scale: 1.05 }}>Services</motion.span>
                </Link>
                <Link to="/#pricing" className="text-gray-600 hover:text-blue-600">
                  <motion.span whileHover={{ scale: 1.05 }}>Pricing</motion.span>
                </Link>
                <Link to="/#contact" className="text-gray-600 hover:text-blue-600">
                  <motion.span whileHover={{ scale: 1.05 }}>Contact Us</motion.span>
                </Link>
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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;