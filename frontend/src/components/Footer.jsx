import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer 
      className="py-8 px-6 border-t border-white/5 bg-neo-base" 
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-neo-muted"
        >
          © {new Date().getFullYear()} <span className="text-neo-secondary">{personalInfo.name}</span> · Built with React
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-mono text-xs text-neo-muted hover:text-neo-cyan transition-colors"
          data-testid="footer-back-to-top"
        >
          Back to top
          <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
