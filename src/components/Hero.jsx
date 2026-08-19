import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative overflow-hidden bg-background">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            Salaam!
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            I'm {portfolioData.name}.
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-copy">
            <p className="hero-role">{portfolioData.role}</p>
            <p className="hero-introduction">{portfolioData.introduction}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden interactive flex items-center gap-2 transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">View my work</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={portfolioData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 glass-card text-textPrimary rounded-full font-medium interactive flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              <span>View Resume</span>
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.a variants={itemVariants} href="#about" className="hero-scroll interactive" aria-label="Scroll to about section">
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
