import React from 'react';
import { personalInfo } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center border-b border-zinc-200"
      ref={ref}
      data-testid="hero-section"
    >
      <div className="max-w-5xl mx-auto px-6 py-32">
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-6">
            {personalInfo.title} — {personalInfo.location}
          </p>
          
          <h1
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
            data-testid="hero-headline"
          >
            {personalInfo.name}
          </h1>
          
          <p
            className="text-lg sm:text-xl text-zinc-600 max-w-2xl leading-relaxed mb-12"
            data-testid="hero-summary"
          >
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:patelomr07@gmail.com?subject=Requesting%20Resume%20-%20Data%20Engineer%20Role&body=Hi%20Om,%0A%0AI%20was%20reviewing%20your%20portfolio%20and%20would%20love%20to%20request%20a%20copy%20of%20your%20latest%20resume.%0A%0ABest,"
              className="btn btn-primary"
              data-testid="hero-resume-btn"
            >
              Request Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn btn-outline"
              data-testid="hero-contact-btn"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
