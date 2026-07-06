import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <footer 
      className="py-8 px-6 border-t border-white/5 bg-dark-base" 
      data-testid="site-footer"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="text-xs text-[#FFFFFF] opacity-50"
        >
          © {new Date().getFullYear()} {personalInfo.name}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: easing }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-xs text-[#FFFFFF] opacity-50 hover:text-[#D96C4A] hover:opacity-100 transition-all duration-300"
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
