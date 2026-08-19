import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{portfolioData.about.heading}</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-textSecondary space-y-6"
          >
            <p>
              I am a <strong className="text-textPrimary">Computer Engineering student</strong> and 
              <strong className="text-textPrimary"> Machine Learning Engineer</strong> with a strong focus 
              on building practical, intelligent systems and modern applications.
            </p>
            <p>
              My expertise spans across designing deep learning architectures, analyzing complex datasets, 
              and engineering robust full-stack web platforms. I thrive at the intersection of AI models and 
              user-centric product development.
            </p>
            
            <div className="pt-8 mt-8 border-t border-white/10">
              <div className="flex items-start gap-4 p-6 glass-card rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-3 bg-primary/20 rounded-lg text-primary relative z-10">
                  <GraduationCap size={24} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-textPrimary mb-1">
                    {portfolioData.about.education.degree}
                  </h3>
                  <p className="text-primary mb-2">{portfolioData.about.education.institution}</p>
                  <div className="flex items-center gap-4 text-sm font-mono text-textSecondary">
                    <span className="bg-white/5 px-2 py-1 rounded">CGPA: {portfolioData.about.education.cgpa}</span>
                    <span>{portfolioData.about.education.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end">
             {/* Reusing profile image in editorial style as per requirements */}
            <div className="relative w-64 h-80 md:w-80 md:h-[28rem]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 border-2 border-primary/30 rounded-3xl translate-x-4 translate-y-4"
              />
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 rounded-3xl overflow-hidden glass-card z-10"
              >
                <img
                  src={portfolioData.profileImage}
                  alt="Editorial Portrait"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
