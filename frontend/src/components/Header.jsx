import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navSections, personalInfo } from '../data/mockData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'scrolled' : ''}`}
        data-testid="site-header"
      >
        <div className="container-wide flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
            data-testid="brand-link"
          >
            <span className="w-8 h-8 rounded-full bg-[var(--ink)] text-[var(--canvas)] font-serif text-sm flex items-center justify-center">
              OP
            </span>
            <span className="hidden md:flex flex-col leading-tight text-left">
              <span className="font-serif text-[15px]">{personalInfo.name}</span>
              <span className="eyebrow" style={{ fontSize: '9.5px' }}>{personalInfo.title}</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navSections.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                className="underline-fx text-[13.5px] tracking-wide"
                data-testid={`nav-${s.id}`}
              >
                {s.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => go('contact')}
                className="btn btn-primary"
                data-testid="header-cta"
              >
                Get in touch
              </button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="md:hidden w-10 h-10 rounded-full border border-[var(--hairline-strong)] flex items-center justify-center"
              aria-label={open ? 'Close menu' : 'Open menu'}
              data-testid="mobile-menu-toggle"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''} md:hidden`} data-testid="mobile-drawer">
        <nav className="flex flex-col gap-6">
          {navSections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(s.id)}
              className="text-left font-serif text-3xl"
              data-testid={`mobile-nav-${s.id}`}
            >
              {s.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => go('contact')}
            className="btn btn-primary self-start mt-6"
            data-testid="mobile-cta"
          >
            Get in touch
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
