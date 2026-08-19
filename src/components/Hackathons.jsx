import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Terminal } from 'lucide-react';

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 relative bg-surfaceLight/30 border-y border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-mono text-sm mb-2 block tracking-widest uppercase">Built Under Pressure</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hackathons</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors" />
              
              <div className="mb-4 text-primary bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center relative z-10">
                <Trophy size={24} className="group-hover:scale-110 transition-transform" />
              </div>
              
              <h3 className="text-xl font-bold text-textPrimary mb-3 relative z-10 leading-tight">
                {hackathon.title}
              </h3>
              <p className="text-textSecondary text-sm relative z-10 leading-relaxed">
                {hackathon.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
