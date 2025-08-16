'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import { 
  Palette, 
  Monitor, 
  Zap, 
  Layers, 
  Play,
  Download,
  Award,
  Coffee,
  Heart
} from 'lucide-react';

export default function About() {
  const skills = [
    {
      icon: <Palette size={32} />,
      title: 'Graphic Design',
      description: 'Creating compelling visual designs that communicate effectively and leave lasting impressions.',
      level: 95
    },
    {
      icon: <Monitor size={32} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences that solve problems and delight users.',
      level: 92
    },
    {
      icon: <Zap size={32} />,
      title: 'Branding',
      description: 'Building strong brand identities that resonate with target audiences.',
      level: 88
    },
    {
      icon: <Layers size={32} />,
      title: 'Prototyping',
      description: 'Creating interactive prototypes to test and validate design concepts.',
      level: 85
    },
    {
      icon: <Play size={32} />,
      title: 'Motion Graphics',
      description: 'Bringing designs to life with engaging animations and micro-interactions.',
      level: 80
    }
  ];

  const tools = [
    { name: 'Figma', level: 95, color: '#F24E1E' },
    { name: 'Adobe XD', level: 90, color: '#FF61F6' },
    { name: 'Photoshop', level: 92, color: '#31A8FF' },
    { name: 'Illustrator', level: 88, color: '#FF9A00' },
    { name: 'Canva', level: 85, color: '#00C4CC' },
    { name: 'After Effects', level: 75, color: '#9999FF' }
  ];

  const stats = [
  { number: '30+', label: 'Projects Completed', icon: <Award size={24} /> },
    { number: '30+', label: 'Happy Clients', icon: <Heart size={24} /> },
    { number: '3+', label: 'Years Experience', icon: <Coffee size={24} /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Zap size={24} /> }
  ];

  return (
    <main>
      <Hero
        title="About Me"
        subtitle="Get to know me"
        description="Discover my journey, skills, and passion for creating meaningful design experiences."
        backgroundImage="/images/profile.jpg"
      />

      {/* Bio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Ojo Oluwatimileyin"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-poppins font-bold mb-6">
                  <span className="text-white">Creative</span>{' '}
                  <span className="gradient-text">Designer</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  I'm a passionate creative with a love for blending art and technology. From branding to interactive UI/UX design, I bring ideas to life with precision, creativity, and a deep understanding of visual storytelling.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  With experience designing for businesses across industries, I focus on making designs that don't just look great — they solve problems and tell stories. Every project is an opportunity to create something meaningful and impactful.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/Resume-Oluwatimileyin-Ojo.pdf"
                  download
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What I Do"
            title="My Skills"
            description="A comprehensive set of skills that enable me to deliver exceptional design solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl card-hover border border-gray-700"
              >
                <div className="text-primary mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>
                
                {/* Skill Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Design Tools"
            title="Tools I Use"
            description="Proficiency in industry-standard design tools and software."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-gray-700 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-poppins font-bold text-white">
                    {tool.name}
                  </h3>
                  <span className="text-primary font-medium">{tool.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">
              My Journey in Numbers
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Every project is a milestone in my creative journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-white mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-poppins font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-200 font-medium text-sm md:text-base">
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