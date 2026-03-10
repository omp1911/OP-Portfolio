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
    <section id="hero" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle ambient glow - no grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-black to-purple-500/5"></div>
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          
          {/* Large Animoji with Overlay Text */}
          <div className="relative mb-12">
            {/* Big Animoji */}
            <div
              className={`text-[20rem] md:text-[25rem] leading-none transform transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
            >
              {personalInfo.animoji}
            </div>
            
            {/* Overlaid Text on Animoji */}
            <div
              className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1500 delay-300 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="text-center px-8">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                  {personalInfo.name}
                </h1>
                <p className="text-xl md:text-2xl text-blue-400 font-semibold drop-shadow-lg">
                  {personalInfo.title}
                </p>
              </div>
            </div>
          </div>

          {/* Brief About Section */}
          <div
            className={`text-center max-w-3xl transform transition-all duration-1500 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className={`mt-16 text-white/60 hover:text-blue-400 transition-all duration-500 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } delay-1000 animate-bounce-slow hover:scale-110`}
          >
            <ChevronDown size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
