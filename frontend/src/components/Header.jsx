import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'hero' },
    { label: 'Work Experience', id: 'experience' },
    { label: 'Skills', id: 'tech-stack' },
    { label: 'Portfolio', id: 'projects' },
    { label: 'Achievements', id: 'certifications' },
    { label: 'Get in Touch', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-white hover:text-cyan-400 transition-all duration-300"
          >
            AR
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:block w-10"></div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-cyan-400 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu with backdrop */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-black/95 backdrop-blur-xl z-40">
            <div className="container mx-auto px-6 py-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-lg border-b border-white/5"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    animation: `slideIn 0.3s ease-out ${index * 50}ms both`
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
