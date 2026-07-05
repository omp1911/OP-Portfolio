import React, { useEffect, useState } from 'react';
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200' : 'bg-transparent'
        }`}
        data-testid="site-header"
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-bold text-lg tracking-tight"
            data-testid="brand-link"
          >
            {personalInfo.name}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-zinc-600 hover:text-black transition-colors"
                data-testid={`nav-${s.id}`}
              >
                {s.label}
              </button>
            ))}
            <a
              href="mailto:patelomr07@gmail.com?subject=Requesting%20Resume%20-%20Data%20Engineer%20Role&body=Hi%20Om,%0A%0AI%20was%20reviewing%20your%20portfolio%20and%20would%20love%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0A%0ABest,"
              className="btn btn-primary text-xs"
              data-testid="resume-request-btn"
            >
              Request Resume
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden" data-testid="mobile-menu">
          <nav className="flex flex-col gap-6">
            {navSections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-2xl font-heading font-semibold text-left"
                data-testid={`mobile-nav-${s.id}`}
              >
                {s.label}
              </button>
            ))}
            <a
              href="mailto:patelomr07@gmail.com?subject=Requesting%20Resume%20-%20Data%20Engineer%20Role&body=Hi%20Om,%0A%0AI%20was%20reviewing%20your%20portfolio%20and%20would%20love%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0A%0ABest,"
              className="btn btn-primary mt-4 w-fit"
              data-testid="mobile-resume-btn"
            >
              Request Resume
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
