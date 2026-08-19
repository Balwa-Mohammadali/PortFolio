import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProfileImage = ({ src, alt, variant = 'hero' }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  if (variant === 'about') {
    return (
      <div className="relative w-64 h-64 mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10"
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center filter contrast-125 saturate-50"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-primary/30 rounded-full blur-[80px]"
      />
      
      {/* Outer rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] rounded-full border border-dashed border-white/20"
      />

      {/* Main Image Container */}
      <motion.div 
        style={{ y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-full rounded-full p-2 glass-card"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover filter contrast-[1.1] hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
        </div>
      </motion.div>

      {/* Floating System Labels */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute top-10 -right-10 glass-card px-3 py-1.5 rounded text-[10px] font-mono text-primary flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        SYSTEM ONLINE
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-16 -left-8 glass-card px-3 py-1.5 rounded text-[10px] font-mono text-textSecondary"
      >
        MODEL: ACTIVE
      </motion.div>
    </div>
  );
};

export default ProfileImage;
