import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-4 hover:bg-white/5 transition-colors group"
            >
              <div className="p-3 bg-white/5 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                <Award size={24} />
              </div>
              <div>
                <h3 className="font-bold text-textPrimary">{cert.title}</h3>
                <p className="text-sm font-mono text-textSecondary">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
