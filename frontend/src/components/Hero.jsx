import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import heroImage from '../assets/hero-om-converted.jpg';

const Hero = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-dark-base to-dark-surface opacity-50" />
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-32 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Typography */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing }}
              className="section-label mb-6"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easing }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-dark-text mb-6"
              data-testid="hero-headline"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easing }}
              className="text-dark-secondary text-lg leading-relaxed max-w-lg mb-10"
              data-testid="hero-summary"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easing }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={personalInfo.resumeMailto}
                className="btn-primary"
                data-testid="hero-resume-btn"
              >
                Request Resume
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
                data-testid="hero-contact-btn"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right: Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easing }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="avatar-glow">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden neo-card border-2 border-white/10">
                <img
                  src={heroImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-muted tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-dark-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
