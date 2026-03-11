import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mockData';

const ProjectsCarousel = () => {
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
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
        </div>

        {/* Project with side arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Project Content */}
          <div className="max-w-5xl mx-auto px-16">
            <div
              className={`text-center transform transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              key={currentIndex}
            >
              {/* Smaller Project Image */}
              <div className="mb-8 overflow-hidden rounded-2xl max-w-2xl mx-auto">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                  {currentProject.title}
                </span>
              </h3>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-6">
                {currentProject.description}
              </p>

              {/* Technologies Section */}
              <div className="mt-8">
                <div className="text-sm text-gray-600 uppercase tracking-wider mb-4">TECHNOLOGIES USED</div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {currentProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-gray-300 text-base border border-white/10 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Next project"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
