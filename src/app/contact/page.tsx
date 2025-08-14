'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:baruna.pasha98@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.open(mailtoLink, '_blank');
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'baruna.pasha98@gmail.com',
      href: 'mailto:baruna.pasha98@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+62 857-1762-3720',
      href: 'tel:+6285717623720',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-brand-purple via-purple-600 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white leading-relaxed">
              Ready to work together? Let&apos;s discuss your project and bring your ideas to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Let&apos;s Connect</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-4 p-6 bg-white dark:bg-black/80 rounded-2xl shadow-lg border border-gray-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="p-4 bg-brand-purple/10 rounded-full group-hover:bg-brand-purple/20 transition-colors">
                      <info.icon className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{info.title}</h3>
                      <p className="text-gray-600 dark:text-white">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-8 bg-gradient-to-br from-brand-purple/5 via-purple-400/5 to-brand-purple/5 dark:from-brand-purple/10 dark:via-purple-400/10 dark:to-brand-purple/10 rounded-2xl border border-gray-200 dark:border-blue-800"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Why Work With Me?</h3>
                <ul className="space-y-4 text-gray-600 dark:text-white">
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Fast response time and clear communication</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Modern, responsive, and accessible designs</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Clean, maintainable, and scalable code</span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Ongoing support and maintenance</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Send Message</h2>
              <div className="bg-white dark:bg-black/80 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-blue-800">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple dark:bg-black/80 dark:text-white transition-colors text-lg"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple dark:bg-black/80 dark:text-white transition-colors text-lg"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple dark:bg-black/80 dark:text-white transition-colors text-lg"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 dark:border-blue-800 rounded-xl focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple dark:bg-black/80 dark:text-white transition-colors resize-none text-lg"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-8 bg-gradient-to-r from-brand-purple to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-brand-purple/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg ${
                      isSubmitting || isSubmitted ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading"></div>
                        <span>Sending...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FiCheck className="w-5 h-5" />
                        <span>Email Client Opened!</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        <span>Open Email Client</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
