'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { Search, Filter, Grid3X3, Grid2X2, List } from 'lucide-react';
import projectsData from '@/data/projects.json';

type ViewMode = 'grid-3' | 'grid-2' | 'list';
type FilterCategory = 'All' | 'Branding' | 'UI-UX' | 'Graphic Design';

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid-2');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories: FilterCategory[] = ['All', 'Branding', 'UI-UX', 'Graphic Design'];

  useEffect(() => {
    let filtered = projectsData;

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(project => project.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, activeFilter]);

  const gridClasses = {
    'grid-3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    'grid-2': 'grid-cols-1 md:grid-cols-2',
    'list': 'grid-cols-1',
  };

  return (
    <main>
      <Hero
        title="My Portfolio"
        subtitle="Creative Work"
        description="Explore my collection of design projects, from branding and UI/UX to graphic design solutions."
        backgroundImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1600&h=900&fit=crop&crop=center"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="All Projects"
            description="Browse through my diverse range of creative projects and case studies."
          />

          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-card border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid-3')}
                className={`p-2 rounded ${viewMode === 'grid-3' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid-2')}
                className={`p-2 rounded ${viewMode === 'grid-2' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <Grid2X2 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-gray-400">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className={`grid ${gridClasses[viewMode]} gap-8`}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-poppins font-bold text-white mb-4">
                No projects found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}