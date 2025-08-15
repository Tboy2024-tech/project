'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import ProjectLightbox from '@/components/ProjectLightbox';

interface Project {
  id: string;
  title: string;
  description: string;
  client: string;
  category: string;
  thumbnail: string;
  images?: string[];
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const categoryColors = {
    'Branding': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'UI-UX': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    'Graphic Design': 'bg-green-500/20 text-green-300 border-green-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <div className="bg-card rounded-xl overflow-hidden card-hover border border-gray-800">
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${
              categoryColors[project.category as keyof typeof categoryColors] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
            }`}>
              <Tag size={12} />
              {project.category}
            </span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-900/80 text-gray-300 border border-gray-600">
              <Calendar size={12} />
              {project.year}
            </span>
          </div>

          {/* View Project Link */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary hover:bg-primary/90 text-white p-2 rounded-full shadow-lg"
            >
              <ArrowUpRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="mb-2">
            <p className="text-primary text-sm font-medium">{project.client}</p>
          </div>
          
          <h3 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <motion.button
            onClick={() => setIsOpen(true)}
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-primary hover:text-secondary font-medium text-sm transition-colors duration-300 group"
          >
            View Case Study
            <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
      {isOpen && (
        <ProjectLightbox
          project={{
            id: project.id,
            title: project.title,
            images: project.images || [project.thumbnail],
          }}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  );
}