import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/mockData';
import { Button } from './ui/button';

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
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-20 text-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
        </div>

        {/* Single Project - Centered */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center transform transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            key={currentIndex}
          >
            {/* Project Image */}
            <div className="mb-12 overflow-hidden rounded-2xl">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Project Title */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
                {currentProject.title}
              </span>
            </h3>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-8">
              {currentProject.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 justify-center">
              {currentProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-gray-400 text-lg"
                >
                  {tech}{idx < currentProject.technologies.length - 1 ? ' •' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              onClick={goToPrev}
              variant="outline"
              size="icon"
              className="border-white/20 hover:border-white text-gray-400 hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </Button>
            <div className="text-gray-500">
              {currentIndex + 1} / {projects.length}
            </div>
            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="border-white/20 hover:border-white text-gray-400 hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
