'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  Dribbble,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'ojooluwatimileyin18@gmail.com',
      href: 'mailto:ojooluwatimileyin18@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
  content: '+234 816 034 7305',
  href: 'https://wa.me/2348160347305',
  target: '_blank',
  rel: 'noopener noreferrer',
  isWhatsApp: true
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Lagos, Nigeria',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/oluwatimileyinojo/',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      href: 'https://instagram.com/ojodesigns',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Dribbble',
      icon: <Dribbble size={24} />,
      href: 'https://dribbble.com/ojodesigns',
      color: 'hover:bg-pink-500'
    }
  ];

  return (
    <main>
      <Hero
        title="Let's Work Together"
        subtitle="Contact Me"
        description="Ready to bring your ideas to life? Let's discuss your next project and create something amazing together."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop&crop=center"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Send Message"
                description="Fill out the form below and I'll get back to you as soon as possible."
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-vertical"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                  >
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                  >
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-white mb-8">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      {...(info.target ? { target: info.target } : {})}
                      {...(info.rel ? { rel: info.rel } : {})}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border border-gray-700 hover:border-primary/30 transition-colors duration-300 group"
                    >
                      <div className="text-primary group-hover:text-secondary transition-colors">
                        {info.icon}
                      </div>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-gray-400 text-sm">{info.title}</p>
                          <p className="text-white font-medium">{info.content}</p>
                        </div>
                        {info.isWhatsApp && (
                          <span className="ml-2 inline-flex items-center gap-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .08 5.29.08 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.37-1.66A11.92 11.92 0 0 0 12 23.92c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.15-3.4-8.52zM12 21.92c-2.07 0-4.02-.58-5.69-1.57l-.41-.25-3.78.98.99-3.67-.26-.4A9.92 9.92 0 0 1 2.08 11.92 9.92 9.92 0 0 1 12 2.0c5.52 0 10 4.48 10 9.92S17.52 21.92 12 21.92z" />
                              <path d="M17.3 14.2c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.2-.7.1-.6-.2-1.6-.6-2.6-1.6-.9-1-1.4-2-1.6-2.6-.1-.3 0-.5.1-.7.1-.3.6-1.7.8-2 .2-.4 0-.6-.1-.7-.1-.1-.7-1.7-1-2.3-.3-.6-.7-.5-1-.5-.3 0-.7 0-1 0s-1 .1-1.5.7C6.1 6 6.1 7 6 7.3c0 .3 0 .7.1 1.1.1.4.6 1.1 1 1.6.4.4 1 .9 1.6 1.5.6.6 1.2 1 1.6 1.4.4.4.9.9 1.4 1.6.5.7 1.1 1.3 1.6 1.6.5.4 1.1.8 1.6 1 .5.2 1.1.4 1.6.4.5 0 1.1 0 1.6-.1.5-.1 1.1-.3 1.6-.6.5-.3.9-.7 1.3-1.1.3-.3.6-.6.9-.9.3-.4.3-.9.1-1.3-.2-.4-.7-.9-1-1.3-.2-.4-.4-.8-.6-1.1s-.4-.6-.6-1z" />
                            </svg>
                            <span>WhatsApp</span>
                          </span>
                        )}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-poppins font-bold text-white mb-8">
                  Follow Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-gray-700 hover:border-transparent transition-all duration-300 ${social.color}`}
                    >
                      <div className="text-primary mb-3">
                        {social.icon}
                      </div>
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-primary p-8 rounded-xl text-center"
              >
                <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Let's discuss your vision and bring it to life with exceptional design.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Schedule a Call
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}