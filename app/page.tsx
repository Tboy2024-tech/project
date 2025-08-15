'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { ArrowRight, Palette, Monitor, Zap, Users } from 'lucide-react';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 4);

  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Graphic Design',
      description: 'Creating visual concepts that communicate ideas and captivate audiences through typography, imagery, and color.',
    },
    {
      icon: <Monitor size={40} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive digital experiences that solve problems and delight users across all devices.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Branding',
      description: 'Building comprehensive brand identities that tell your story and connect with your target audience.',
    },
    {
      icon: <Users size={40} />,
      title: 'Consultation',
      description: 'Providing strategic design guidance to help businesses make informed creative decisions.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Ojo Oluwatimileyin"
        subtitle="Graphic Designer & UI/UX Designer"
        description="Transforming ideas into visually stunning and user-friendly experiences."
        showCTA={true}
        ctaText="View My Work"
        ctaHref="/portfolio"
        backgroundImage="/images/profile.jpg"
      />

      {/* Services Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What I Do"
            title="My Services"
            description="I offer a comprehensive range of design services to help bring your vision to life."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl card-hover border border-gray-700"
              >
                <div className="text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Recent Work"
            title="Featured Projects"
            description="A selection of my most impactful design projects showcasing creativity and problem-solving."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 mx-auto text-lg px-8 py-4"
              >
                View All Projects
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '3+', label: 'Years Experience' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-200 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}