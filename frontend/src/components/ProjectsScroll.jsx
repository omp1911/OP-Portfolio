import React, { useEffect, useRef, useState, useCallback } from 'react';
import { projects } from '../data/mockData';

const ProjectsScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [slideDirection, setSlideDirection] = useState('up');
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const isTransitioning = useRef(false);
  const scrollAccumulator = useRef(0);
  const touchStartY = useRef(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check if sticky element is at top of viewport (desktop only)
  const isStuck = useCallback(() => {
    if (isMobile) return false;
    if (!stickyRef.current || !sectionRef.current) return false;
    const stickyRect = stickyRef.current.getBoundingClientRect();
    const sectionRect = sectionRef.current.getBoundingClientRect();
    return stickyRect.top <= 5 && sectionRect.bottom > window.innerHeight;
  }, [isMobile]);

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

  // Navigate to next/previous item
  const navigateToItem = useCallback((direction) => {
    if (isTransitioning.current) return false;
    
    const canGoNext = currentIndex < projects.length - 1;
    const canGoPrev = currentIndex > 0;
    
    if (direction === 'next' && canGoNext) {
      isTransitioning.current = true;
      setSlideDirection('up');
      setCurrentIndex(prev => prev + 1);
      setTimeout(() => { isTransitioning.current = false; }, 500);
      return true;
    } else if (direction === 'prev' && canGoPrev) {
      isTransitioning.current = true;
      setSlideDirection('down');
      setCurrentIndex(prev => prev - 1);
      setTimeout(() => { isTransitioning.current = false; }, 500);
      return true;
    }
    return false;
  }, [currentIndex]);

  // Desktop wheel event
  useEffect(() => {
    if (isMobile) return;
    
    const handleWheel = (e) => {
      if (!isStuck()) return;
      
      const canGoNext = currentIndex < projects.length - 1;
      const canGoPrev = currentIndex > 0;
      
      if ((e.deltaY > 0 && canGoNext) || (e.deltaY < 0 && canGoPrev)) {
        e.preventDefault();
        
        if (isTransitioning.current) return;
        
        scrollAccumulator.current += Math.abs(e.deltaY);
        
        if (scrollAccumulator.current >= 80) {
          scrollAccumulator.current = 0;
          navigateToItem(e.deltaY > 0 ? 'next' : 'prev');
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentIndex, isStuck, navigateToItem, isMobile]);

  const handleDotClick = (index) => {
    if (index !== currentIndex && !isTransitioning.current) {
      isTransitioning.current = true;
      setSlideDirection(index > currentIndex ? 'up' : 'down');
      setCurrentIndex(index);
      setTimeout(() => { isTransitioning.current = false; }, 500);
    }
  };

  // Mobile touch handlers
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isTransitioning.current) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;
    const minSwipeDistance = 50;
    
    if (Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY > 0) {
        navigateToItem('next');
      } else {
        navigateToItem('prev');
      }
    }
  };

  const currentProject = projects[currentIndex];
  
  // Desktop: use sticky with spacer height
  // Mobile: simple min-height screen
  const spacerHeight = isMobile ? 0 : (projects.length - 1) * 100;

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="bg-[#0f0f0f] relative"
      style={{ minHeight: isMobile ? '100vh' : `${100 + spacerHeight}vh` }}
    >
      <div 
        ref={stickyRef}
        className={`${isMobile ? '' : 'sticky top-0'} h-screen flex items-center overflow-hidden`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Section Title */}
          <div
            className={`mb-4 md:mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
          </div>

          {/* Desktop Dot Indicators */}
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

          {/* Mobile Dot Indicators - positioned below title */}
          <div className="flex md:hidden justify-center gap-3 mb-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-gray-600 w-2'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* Single Project Content */}
          <div className="max-w-6xl mx-auto overflow-hidden">
            <div 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center transition-all duration-500 ease-out ${
                currentIndex % 2 === 0 ? '' : 'lg:grid-flow-dense'
              } ${
                slideDirection === 'up' 
                  ? 'animate-slide-from-bottom' 
                  : 'animate-slide-from-top'
              }`}
              key={currentIndex}
            >
              {/* Image */}
              <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                <div className="relative max-w-sm md:max-w-md mx-auto">
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
              <div className={`${currentIndex % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'} text-center lg:text-left`}>
                <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                  <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                    {currentProject.title}
                  </span>
                </h3>

                <p className="text-sm md:text-lg text-gray-400 leading-relaxed mb-4 md:mb-6 px-2 md:px-0">
                  {currentProject.description}
                </p>

                <div className="mt-4 md:mt-6">
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2 md:mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {currentProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 md:px-3 py-1 text-gray-300 text-xs md:text-sm border border-white/10 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-gray-500 text-sm mt-4">
            {currentIndex + 1} / {projects.length}
          </div>
          
          {/* Mobile swipe hint */}
          {isMobile && (
            <div className="text-center text-gray-600 text-xs mt-2">
              Swipe up/down or tap dots to navigate
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsScroll;
