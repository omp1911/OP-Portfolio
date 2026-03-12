import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mockData';

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
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-24">
          
          {/* Left Side - Text Content with bottom animation */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Greeting */}
            <div className="flex items-center gap-2 text-gray-500 text-base tracking-wide">
              <span>HI THERE</span>
              <span className="text-xl">👋</span>
              <span>I'M</span>
            </div>

            {/* Name with gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Title */}
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400">
              {personalInfo.title}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
              {personalInfo.bio}
            </p>
          </div>

          {/* Right Side - Simple Image with right animation */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1200 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
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
          className={`text-blue-500 hover:text-blue-400 transition-all duration-500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } delay-1000`}
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
