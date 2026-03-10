import React, { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { techStack } from '../data/mockData';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Frontend':
      return <Code2 size={20} />;
    case 'Backend':
      return <Code2 size={20} />;
    case 'Database':
      return <Database size={20} />;
    case 'Cloud':
      return <Cloud size={20} />;
    case 'DevOps':
      return <Wrench size={20} />;
    default:
      return <Code2 size={20} />;
  }
};

const TechCard = ({ tech, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 ease-out hover:transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/10 transform ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 transition-all duration-300 hover:bg-blue-500/20 hover:rotate-12">
          {getCategoryIcon(tech.category)}
        </div>
        <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
        <span className="text-xs text-gray-500 uppercase tracking-wider">{tech.category}</span>
      </div>
    </div>
  );
};

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="tech-stack" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
