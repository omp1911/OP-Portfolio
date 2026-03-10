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
    <section id="hero" className="min-h-screen bg-[#0f0f0f] flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Side - Text Content */}
          <div
            className={`space-y-6 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center gap-2 text-gray-500 text-base tracking-wide">
              <span>HI THERE</span>
              <span className="text-xl">👋</span>
              <span>I'M</span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title */}
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-400">
              {personalInfo.title}
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-6 text-base rounded-full transition-all duration-300"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Side - Simple Image (No 3D) */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-xl">
              <img
                src="https://customer-assets.emergentagent.com/job_animoji-folio/artifacts/i4rd77tj_Adobe%20Express%20-%20file.png"
                alt="Professional portrait"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className={`text-gray-600 hover:text-white transition-all duration-500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } delay-1000`}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default Hero;
