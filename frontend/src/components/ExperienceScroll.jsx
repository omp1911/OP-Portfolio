import React, { useEffect, useRef, useState, useCallback } from 'react';
import { experiences } from '../data/mockData';

const ExperienceScroll = () => {
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
    
    const canGoNext = currentIndex < experiences.length - 1;
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
      
      const canGoNext = currentIndex < experiences.length - 1;
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

  const currentExperience = experiences[currentIndex];
  
  // Desktop: use sticky with spacer height
  // Mobile: simple min-height screen
  const spacerHeight = isMobile ? 0 : (experiences.length - 1) * 100;

  return (
    <section 
      id="experience" 
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
            className={`mb-6 md:mb-8 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
          </div>

          {/* Desktop Dot Indicators */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-3">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-500 cursor-pointer hover:bg-gray-400 ${
                  idx === currentIndex ? 'bg-white h-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
                data-testid={`experience-dot-${idx}`}
              />
            ))}
          </div>

          {/* Mobile Dot Indicators - positioned below title */}
          <div className="flex md:hidden justify-center gap-3 mb-6">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-gray-600 w-2'
                }`}
                aria-label={`Go to experience ${idx + 1}`}
              />
            ))}
          </div>

          {/* Single Experience Content */}
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div
              className={`text-center py-4 md:py-8 transition-all duration-500 ease-out ${
                slideDirection === 'up' 
                  ? 'animate-slide-from-bottom' 
                  : 'animate-slide-from-top'
              }`}
              key={currentIndex}
            >
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">
                <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                  {currentExperience.role}
                </span>
              </h3>
              <div className="text-lg md:text-2xl text-gray-300 mb-1 md:mb-2">{currentExperience.company}</div>
              <div className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">{currentExperience.duration}</div>
              
              <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-4 md:mb-6 px-4 md:px-0">
                {currentExperience.description}
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-4 md:mb-6">
                {currentExperience.technologies.map((tech, idx) => (
                  <span key={idx} className="text-gray-300 text-sm md:text-base">
                    {tech}{idx < currentExperience.technologies.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>

              {currentIndex === 0 && currentExperience.project && (
                <div className="mt-6 md:mt-8">
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mb-2">ENTERPRISE PROJECT</div>
                  <h4 className="text-lg md:text-2xl font-semibold text-white mb-2 md:mb-3">{currentExperience.project.name}</h4>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed px-4 md:px-0">{currentExperience.project.description}</p>
                </div>
              )}
            </div>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-gray-500 text-sm mt-4">
            {currentIndex + 1} / {experiences.length}
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

export default ExperienceScroll;
