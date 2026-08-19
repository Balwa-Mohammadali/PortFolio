import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { BrainCircuit, Code2, Database, Monitor, Server, Sparkles, Wrench } from 'lucide-react';

const categoryIcons = {
  programming: Code2,
  machineLearning: BrainCircuit,
  data: Database,
  backend: Server,
  frontend: Monitor,
  tools: Wrench,
};

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'machineLearning', label: 'Machine Learning / AI' },
  { id: 'programming', label: 'Programming' },
  { id: 'data', label: 'Data' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'tools', label: 'Tools' }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const getSkills = () => {
    if (activeCategory === 'all') {
      return Object.entries(portfolioData.skills).flatMap(([cat, skills]) =>
        skills.map(skill => ({ skill, category: cat }))
      );
    }
    return portfolioData.skills[activeCategory].map(skill => ({ skill, category: activeCategory }));
  };

  const displayedSkills = getSkills();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Ecosystem</h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 interactive ${activeCategory === cat.id
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  : 'glass-card text-textSecondary hover:text-textPrimary hover:bg-white/10'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="flex flex-wrap gap-4">
          <AnimatePresence>
            {displayedSkills.map((item, index) => (
              (() => {
                const SkillIcon = categoryIcons[item.category] || Sparkles;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    key={`${item.skill}-${activeCategory}`}
                    className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-xl border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <motion.span
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 14 }}
                      className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(215,255,79,0.58)] text-emerald-900"
                    >
                      <SkillIcon size={15} strokeWidth={2} aria-hidden="true" />
                    </motion.span>
                    <span className="relative z-10 text-textPrimary font-mono font-medium">
                      {item.skill}
                    </span>

                    {/* Micro-animation dots */}
                    <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  </motion.div>
                );
              })()
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
