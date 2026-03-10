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
      { threshold: 0.1 }
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

  return (
    <div
      ref={cardRef}
      className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
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
    <section id="tech-stack" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
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
