import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import heroImage from '../assets/hero-om-converted.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      data-testid="hero-section"
    >
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neo-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neo-purple/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Typography */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label mb-6"
            >
              {personalInfo.tagline}
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-neo-text mb-4"
              data-testid="hero-headline"
            >
              Hi, I&apos;m <span className="gradient-text font-medium">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-neo-secondary mb-8"
            >
              Architecting Data Flows.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-neo-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10"
              data-testid="hero-summary"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={personalInfo.resumeMailto}
                className="btn-neo"
                data-testid="hero-resume-btn"
              >
                Request Resume
              </a>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost flex items-center gap-2"
                data-testid="hero-scroll-btn"
              >
                View Pipeline
                <ChevronDown size={18} className="animate-bounce" />
              </button>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="hero-image-wrapper relative">
              {/* Floating data nodes decoration */}
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-neo-cyan shadow-[0_0_15px_#00f2fe]"
              />
              <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/4 -left-6 w-3 h-3 rounded-full bg-neo-purple shadow-[0_0_12px_#9d4cdd]"
              />
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-1/4 -right-6 w-2 h-2 rounded-full bg-neo-cyan shadow-[0_0_10px_#00f2fe]"
              />
              
              {/* Main image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden neo-card p-1">
                <img
                  src={heroImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-xl"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
