import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { LineChart, ExternalLink } from 'lucide-react';

const Kaggle = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.a
          href={portfolioData.socialLinks.kaggle}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group block relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden hover:border-primary/50 transition-colors"
        >
          {/* Abstract Data Background */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-primary stroke-1 fill-none opacity-50">
              <path d="M0,40 Q10,20 20,35 T40,25 T60,15 T80,30 T100,10" className="opacity-50" />
              <path d="M0,50 Q15,40 25,25 T50,30 T75,10 T100,20" />
              <path d="M0,30 Q20,10 40,30 T80,10 T100,40" className="opacity-30" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <LineChart size={32} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors">
                  Explore My Data Work
                </h3>
                <p className="text-textSecondary font-mono">kaggle.com/balwa1</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-6 py-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
              View Datasets & Notebooks
              <ExternalLink size={18} />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default Kaggle;
