import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { experiences } from '../data/mockData';

const ExperienceCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

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

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-20 relative flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Section Title */}
        <div
          className={`mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        {/* Experience with side arrows - fixed position */}
        <div className="relative min-h-[500px] flex items-center">
          {/* Left Arrow - Fixed */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Previous experience"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Experience Content */}
          <div className="max-w-4xl mx-auto px-16 w-full">
            <div
              className={`text-center py-8 transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              key={currentIndex}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                  {currentExperience.role}
                </span>
              </h3>
              <div className="text-2xl md:text-3xl text-gray-300 mb-3">{currentExperience.company}</div>
              <div className="text-lg text-gray-400 mb-8">{currentExperience.duration}</div>
              
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8">
                {currentExperience.description}
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {currentExperience.technologies.map((tech, idx) => (
                  <span key={idx} className="text-gray-300 text-lg">
                    {tech}{idx < currentExperience.technologies.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>

              {currentIndex === 0 && currentExperience.project && (
                <div className="mt-12">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">ENTERPRISE PROJECT</div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-white mb-4">{currentExperience.project.name}</h4>
                  <p className="text-lg text-gray-400 leading-relaxed">{currentExperience.project.description}</p>
                </div>
              )}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to experience ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Arrow - Fixed */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Next experience"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
