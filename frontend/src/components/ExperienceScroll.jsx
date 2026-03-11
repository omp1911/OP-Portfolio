import React, { useEffect, useRef, useState } from 'react';
import { experiences } from '../data/mockData';

const ExperienceScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInSection, setIsInSection] = useState(false);
  const [slideDirection, setSlideDirection] = useState('up');
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isTransitioning = useRef(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInSection(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
      if (!containerRef.current || !isInSection) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      
      if (isInView && !isTransitioning.current) {
        const now = Date.now();
        const timeDelta = now - lastScrollTime.current;
        lastScrollTime.current = now;

        // Prevent default if we're not at boundaries
        const canScrollUp = currentIndex > 0;
        const canScrollDown = currentIndex < experiences.length - 1;
        
        if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
          e.preventDefault();
          
          // Accumulate scroll delta
          scrollAccumulator.current += Math.abs(e.deltaY);
          
          // Require significant scroll accumulation before transitioning (reduces lag)
          const scrollThreshold = 100;
          
          if (scrollAccumulator.current >= scrollThreshold) {
            scrollAccumulator.current = 0;
            isTransitioning.current = true;
            
            if (e.deltaY > 0 && canScrollDown) {
              // Scrolling down
              setSlideDirection('up');
              setCurrentIndex(prev => prev + 1);
            } else if (e.deltaY < 0 && canScrollUp) {
              // Scrolling up
              setSlideDirection('down');
              setCurrentIndex(prev => prev - 1);
            }
            
            // Reduced transition lock time for smoother experience
            setTimeout(() => {
              isTransitioning.current = false;
            }, 600);
          }
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isInSection, currentIndex]);

  const handleDotClick = (index) => {
    if (index !== currentIndex && !isTransitioning.current) {
      isTransitioning.current = true;
      setSlideDirection(index > currentIndex ? 'up' : 'down');
      setCurrentIndex(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 600);
    }
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section id="experience" ref={sectionRef} className="bg-[#0f0f0f] py-16 relative min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20" ref={containerRef}>
        {/* Section Title - Fixed */}
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

        {/* Dot Indicators - Clickable */}
        {isInSection && (
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer hover:bg-gray-400 ${
                  idx === currentIndex ? 'bg-white h-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Single Experience - Slides from page end */}
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div
            className={`text-center py-8 transition-all duration-700 ease-out ${
              slideDirection === 'up' 
                ? 'animate-slide-from-bottom' 
                : 'animate-slide-from-top'
            }`}
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
