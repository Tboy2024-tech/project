'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  showCTA = false,
  ctaText = 'View My Work',
  ctaHref = '/portfolio',
  backgroundImage,
}: HeroProps) {
  const titleWords = title.split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-top opacity-65 transform-gpu"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: 'center 18%'}}
          />
        )}
        {/* overlay: very light at top for navbar, subtle mid tone, stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/55" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-primary text-lg font-medium mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold mb-6">
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * index,
                  ease: "easeOut"
                }}
                className={`inline-block mr-4 ${
                  index % 2 === 0 ? 'text-white' : 'gradient-text'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href={ctaHref}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
                >
                  {ctaText}
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <a
                href="/Resume-Oluwatimileyin-Ojo.pdf"
                download
                className="border border-gray-600 hover:border-primary text-gray-300 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [2, 10, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}