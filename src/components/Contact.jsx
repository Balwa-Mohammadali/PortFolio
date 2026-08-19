import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Send, GitBranch, CircleUserRound, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert("Thanks for reaching out! I'll get back to you soon.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surfaceLight z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-[100%] blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text tracking-tight">Let's Build Something<br /><span className="text-primary">Interesting.</span></h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto mb-8">
            Whether you have a project in mind, want to discuss AI technologies, or just want to say hi, my inbox is always open.
          </p>
          <a
            href={`mailto:${portfolioData.socialLinks.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-full font-medium hover:bg-primary hover:text-white transition-all interactive"
          >
            <Send size={18} />
            {portfolioData.socialLinks.email}
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Connect</h3>

            <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="group glass-card p-6 rounded-2xl flex items-center justify-between hover:border-primary/50 transition-all interactive">
              <div className="flex items-center gap-4">
                <GitBranch size={24} className="text-textSecondary group-hover:text-primary transition-colors" />
                <span className="font-medium text-lg">GitHub</span>
              </div>
              <ExternalLink size={18} className="text-textSecondary group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
            </a>

            <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="group glass-card p-6 rounded-2xl flex items-center justify-between hover:border-primary/50 transition-all interactive">
              <div className="flex items-center gap-4">
                <CircleUserRound size={24} className="text-textSecondary group-hover:text-primary transition-colors" />
                <span className="font-medium text-lg">LinkedIn</span>
              </div>
              <ExternalLink size={18} className="text-textSecondary group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
            </a>

            <a href={portfolioData.socialLinks.kaggle} target="_blank" rel="noopener noreferrer" className="group glass-card p-6 rounded-2xl flex items-center justify-between hover:border-primary/50 transition-all interactive">
              <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-textSecondary group-hover:text-primary transition-colors"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.256c.141 0 .235.04.281.118.046.075.046.166 0 .269L12.6 14.746l6.225 8.844c.046.069.046.159 0 .269" /></svg>
                <span className="font-medium text-lg">Kaggle</span>
              </div>
              <ExternalLink size={18} className="text-textSecondary group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
            </a>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl flex flex-col gap-6 relative z-10">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-mono text-textSecondary mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-mono text-textSecondary mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-textSecondary mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 text-textPrimary focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white rounded-xl py-4 font-bold interactive flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
