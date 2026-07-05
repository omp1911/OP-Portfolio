import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navSections, personalInfo } from '../data/mockData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const easing = [0.16, 1, 0.3, 1];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-dark-base/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
        data-testid="site-header"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-medium text-lg text-dark-text hover:text-accent-beige transition-colors duration-300"
            data-testid="brand-link"
          >
            Om Patel
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" data-testid="desktop-nav">
            {navSections.map((s, i) => (
              <motion.button
                key={s.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5, ease: easing }}
                onClick={() => scrollTo(s.id)}
                className="text-sm font-body text-dark-secondary hover:text-dark-text transition-colors duration-300"
                data-testid={`nav-${s.id}`}
              >
                {s.label}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: easing }}
              href={personalInfo.resumeMailto}
              className="btn-primary text-sm py-2.5 px-5"
              data-testid="resume-request-btn"
            >
              Resume
            </motion.a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-dark-text hover:text-accent-orange transition-colors"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easing }}
            className="fixed inset-0 z-40 bg-dark-base/95 backdrop-blur-xl pt-24 px-6 md:hidden"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-8">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: easing }}
                  onClick={() => scrollTo(s.id)}
                  className="text-2xl font-heading font-medium text-left text-dark-text hover:text-accent-orange transition-colors"
                  data-testid={`mobile-nav-${s.id}`}
                >
                  {s.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: easing }}
                href={personalInfo.resumeMailto}
                className="btn-primary mt-4 w-fit"
                data-testid="mobile-resume-btn"
              >
                Request Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
