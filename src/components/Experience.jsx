import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey So Far</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group-hover:border-white/20 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-textPrimary mb-1">{exp.role}</h3>
                    <p className="text-lg font-mono text-primary flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.company} <span className="text-textSecondary text-sm">— {exp.location}</span>
                    </p>
                  </div>
                  <div className="px-3 py-1 glass-card rounded text-sm text-textSecondary whitespace-nowrap self-start">
                    {exp.date}
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {exp.description.map((item, i) => (
                    <li 
                      key={i}
                      className="px-3 py-1.5 bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors rounded-lg text-sm text-textSecondary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
