import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/mockData';

const ExperienceScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView) {
        e.preventDefault();
        
        if (e.deltaY > 0) {
          // Scrolling down
          setCurrentIndex(prev => {
            if (prev < experiences.length - 1) {
              return prev + 1;
            }
            return prev;
          });
        } else {
          // Scrolling up
          setCurrentIndex(prev => {
            if (prev > 0) {
              return prev - 1;
            }
            return prev;
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const currentExperience = experiences[currentIndex];

  return (
    <section id="experience" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={containerRef}>
        {/* Section Title */}
        <div
          className={`mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        {/* Dot Indicators - Left Side */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
          {experiences.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-white h-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Single Experience - Replaces on Scroll */}
        <div className="max-w-4xl mx-auto">
          <div
            className="text-center py-8 transform transition-all duration-700 ease-out"
            key={currentIndex}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                {currentExperience.role}
              </span>
            </h3>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">{currentExperience.company}</div>
            <div className="text-base text-gray-400 mb-6">{currentExperience.duration}</div>
            
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              {currentExperience.description}
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {currentExperience.technologies.map((tech, idx) => (
                <span key={idx} className="text-gray-300 text-base">
                  {tech}{idx < currentExperience.technologies.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </div>

            {currentIndex === 0 && currentExperience.project && (
              <div className="mt-8">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">ENTERPRISE PROJECT</div>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-3">{currentExperience.project.name}</h4>
                <p className="text-base text-gray-400 leading-relaxed">{currentExperience.project.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceScroll;
