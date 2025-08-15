'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, User, Palette, Type, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  thumbnail: string;
  images: string[];
  problem: string;
  solution: string;
  colors: string[];
  fonts: string[];
  year: string;
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/portfolio">
          <motion.button
            whileHover={{ x: -5 }}
            className="inline-flex items-center text-primary hover:text-secondary font-medium transition-colors duration-300 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Portfolio
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src={project.images[0] || project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary border border-primary/30">
                  <Tag size={14} />
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-900/80 text-gray-300 border border-gray-600">
                  <Calendar size={14} />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-900/80 text-gray-300 border border-gray-600">
                  <User size={14} />
                  {project.client}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Problem & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                      The Challenge
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                      The Solution
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Project Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-poppins font-bold text-white mb-8">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className="relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-poppins font-bold text-white mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Client</p>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Category</p>
                    <p className="text-white font-medium">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Year</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>
              </motion.div>

              {/* Color Palette */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-poppins font-bold text-white mb-6 flex items-center gap-2">
                  <Palette size={20} />
                  Colors
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-full h-16 rounded-lg mb-2 border border-gray-600"
                        style={{ backgroundColor: color }}
                      />
                      <p className="text-gray-400 text-xs font-mono">{color}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Typography */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-gray-700"
              >
                <h3 className="text-xl font-poppins font-bold text-white mb-6 flex items-center gap-2">
                  <Type size={20} />
                  Typography
                </h3>
                <div className="space-y-3">
                  {project.fonts.map((font, index) => (
                    <div key={index} className="p-3 bg-gray-800 rounded-lg">
                      <p className="text-white font-medium" style={{ fontFamily: font }}>
                        {font}
                      </p>
                      <p className="text-gray-400 text-sm">Aa Bb Cc</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* External Link */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <ExternalLink size={18} />
                  View Live Project
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}