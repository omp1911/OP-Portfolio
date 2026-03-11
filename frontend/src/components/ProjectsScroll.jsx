import React, { useEffect, useRef, useState, useCallback } from 'react';
import { projects } from '../data/mockData';

const ProjectsScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [slideDirection, setSlideDirection] = useState('up');
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const isTransitioning = useRef(false);
  const scrollAccumulator = useRef(0);

  // Check if we should lock scrolling based on sticky element position
  const checkLockStatus = useCallback(() => {
    if (!stickyRef.current || !sectionRef.current) return false;
    
    const stickyRect = stickyRef.current.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();
    
    // Lock when sticky element is at the top of viewport AND section hasn't scrolled past
    const isStuck = stickyRect.top <= 0 && sectionRect.bottom > window.innerHeight;
    return isStuck;
  }, []);

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

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldLock = checkLockStatus();
      setIsLocked(shouldLock);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [checkLockStatus]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!stickyRef.current) return;
      
      const stickyRect = stickyRef.current.getBoundingClientRect();
      const isAtTop = Math.abs(stickyRect.top) < 10;
      
      if (!isAtTop) return;
      
      const canScrollDown = currentIndex < projects.length - 1;
      const canScrollUp = currentIndex > 0;
      
      // Always prevent default when we're stuck and can navigate
      if ((e.deltaY > 0 && canScrollDown) || (e.deltaY < 0 && canScrollUp)) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isTransitioning.current) return;
        
        scrollAccumulator.current += Math.abs(e.deltaY);
        
        if (scrollAccumulator.current >= 80) {
          scrollAccumulator.current = 0;
          isTransitioning.current = true;
          
          if (e.deltaY > 0 && canScrollDown) {
            setSlideDirection('up');
            setCurrentIndex(prev => prev + 1);
          } else if (e.deltaY < 0 && canScrollUp) {
            setSlideDirection('down');
            setCurrentIndex(prev => prev - 1);
          }
          
          setTimeout(() => {
            isTransitioning.current = false;
          }, 500);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    if (index !== currentIndex && !isTransitioning.current) {
      isTransitioning.current = true;
      setSlideDirection(index > currentIndex ? 'up' : 'down');
      setCurrentIndex(index);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 500);
    }
  };

  const currentProject = projects[currentIndex];
  
  // Calculate spacer height: (number of items - 1) * viewport height
  const spacerHeight = (projects.length - 1) * 100;

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="bg-[#0f0f0f] relative"
      style={{ minHeight: `${100 + spacerHeight}vh` }}
    >
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Section Title */}
          <div
            className={`mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
          </div>

          {/* Dot Indicators - Clickable */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer hover:bg-gray-400 ${
                  idx === currentIndex ? 'bg-white h-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to project ${idx + 1}`}
                data-testid={`project-dot-${idx}`}
              />
            ))}
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 text-sm">
            {currentIndex + 1} / {projects.length}
          </div>

          {/* Single Project - Slides with animation */}
          <div className="max-w-6xl mx-auto overflow-hidden">
            <div 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-500 ease-out ${
                currentIndex % 2 === 0 ? '' : 'lg:grid-flow-dense'
              } ${
                slideDirection === 'up' 
                  ? 'animate-slide-from-bottom' 
                  : 'animate-slide-from-top'
              }`}
              key={currentIndex}
            >
              {/* Image with complete blend */}
              <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                <div className="relative max-w-md mx-auto">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto rounded-2xl"
                    style={{
                      opacity: 0.7,
                      maskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 40%, transparent 80%)'
                    }}
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                    {currentProject.title}
                  </span>
                </h3>

                <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                <div className="mt-6">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-gray-300 text-sm border border-white/10 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsScroll;
