import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-textSecondary text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.name}
        </p>
        <div className="flex items-center gap-2 text-sm text-textSecondary font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          SYSTEM ONLINE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
