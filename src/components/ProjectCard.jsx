import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  Bot,
  ExternalLink,
  Film,
  GitBranch,
  Leaf,
  Trophy,
} from 'lucide-react';

const projectIcons = {
  'plant-disease': Leaf,
  'cattle-breed': BrainCircuit,
  'movie-recommendation': Film,
  'ipl-win': Trophy,
  kitabkhana: BookOpen,
  'rag-agent': Bot,
  'diwali-sales': BarChart3,
};

const ProjectCard = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10, scale: 1.01, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
      className={`project-card group relative flex flex-col overflow-hidden rounded-3xl glass-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_18px_55px_rgba(0,0,0,0.25)] ${isFeatured ? 'border-primary/30 bg-[#e8eee1] shadow-[0_20px_80px_rgba(38,80,50,0.14)]' : ''}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-1/2 z-0 bg-[linear-gradient(115deg,transparent_38%,rgba(215,255,79,0.24),transparent_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        animate={{ x: ['-35%', '35%'] }}
        transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
      />
      <div className={`absolute left-0 right-0 top-0 h-1 bg-linear-to-r from-primary via-cyan-300 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100 ${isFeatured ? 'h-1.5' : ''}`} />
      {isFeatured && (
        <div className="absolute left-8 top-6 z-10 flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
          Spotlight project
        </div>
      )}
      <div className="relative z-10 flex h-full flex-col justify-center p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <motion.span
                whileHover={{ rotate: 12, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[rgba(215,255,79,0.55)] text-emerald-900 shadow-[4px_4px_0_rgba(16,20,19,0.12)]"
              >
                {React.createElement(projectIcons[project.id] || BrainCircuit, { size: 21, strokeWidth: 1.8 })}
              </motion.span>
              <h3 className="text-2xl font-bold leading-tight text-textPrimary transition-colors group-hover:text-primary">
                {project.title}
              </h3>
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} title="View on GitHub" className="rounded-full p-2 text-textSecondary glass-card transition-colors hover:text-white">
                <GitBranch size={20} aria-hidden="true" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo for ${project.title}`} title="Open live demo" className="rounded-full p-2 text-textSecondary glass-card transition-colors hover:text-white">
                <ExternalLink size={20} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-6 text-base leading-relaxed text-textSecondary">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mb-8 grid gap-2 text-sm text-textSecondary sm:grid-cols-2">
            {project.highlights.slice(0, 4).map((hl, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                {hl}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="rounded-lg bg-white/5 px-3 py-1 text-xs font-mono text-textPrimary">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default ProjectCard;
