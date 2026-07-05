import React from 'react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-[var(--hairline-strong)]" data-testid="site-footer">
      <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)]">
          © {new Date().getFullYear()} {personalInfo.name} · Built quietly in {personalInfo.location.split(',')[0]}
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] underline-fx"
          data-testid="footer-back-to-top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
