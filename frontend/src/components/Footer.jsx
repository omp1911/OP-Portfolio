import React from 'react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-zinc-200" data-testid="site-footer">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs text-zinc-500 hover:text-black transition-colors"
          data-testid="footer-back-to-top"
        >
          Back to top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
