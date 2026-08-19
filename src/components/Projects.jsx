import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = useMemo(() => [
    'All',
    ...new Set(portfolioData.projects.map(project => project.category))
  ], []);

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">Selected builds</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Featured Work</h2>
            <div className="mt-6 h-1 w-20 rounded-full bg-primary" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-textSecondary">
              Practical AI systems, data products, and web experiences built from idea to implementation.
            </p>
          </div>

          <div className="lg:max-w-xl">
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-textSecondary">
              Filter projects <span className="text-primary">/ {filteredProjects.length}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 interactive ${activeFilter === category
                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                    : 'glass-card text-textSecondary hover:bg-white/10 hover:text-textPrimary'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/10 px-6 py-16 text-center text-textSecondary">
            No projects in this category yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
