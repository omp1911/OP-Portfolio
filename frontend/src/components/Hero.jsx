import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import { Button } from './ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-[#0a0a0a] flex items-center relative overflow-hidden">
      {/* Clean background - no shapes */}
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Side - Text Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center gap-2 text-gray-400 text-lg">
              <span>HI THERE</span>
              <span className="text-2xl">👋</span>
              <span>I'M</span>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              {personalInfo.name}
            </h1>

            {/* Title with gradient */}
            <div className="text-2xl md:text-3xl font-semibold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {personalInfo.title}
              </span>
              <span className="text-cyan-400"> 👨‍💻</span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={() => scrollToNext()}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Side - Professional Photo */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Animated gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse"></div>
              
              {/* Professional Photo with transparent background effect */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-full">
                  <img
                    src="https://customer-assets.emergentagent.com/job_animoji-folio/artifacts/ll8qcwg7_IMG_3290.jpg"
                    alt="Professional portrait"
                    className="relative w-full h-auto object-cover shadow-2xl shadow-cyan-500/30 transition-all duration-500 hover:scale-105"
                    style={{
                      mixBlendMode: 'lighten',
                      filter: 'contrast(1.15) brightness(1.1) saturate(1.2)',
                      maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                    }}
                  />
                </div>
                
                {/* Glowing border ring */}
                <div className="absolute inset-0 rounded-full border-4 border-cyan-400/40 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className={`text-white/40 hover:text-cyan-400 transition-all duration-500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } delay-1000 animate-bounce-slow hover:scale-110`}
        >
          <ChevronDown size={40} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
