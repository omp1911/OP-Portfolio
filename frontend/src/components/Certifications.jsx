import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/mockData';

const CertificationCard = ({ cert, index }) => {
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

  return (
    <div
      ref={cardRef}
      className={`p-6 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm rounded-xl border border-white/[0.05] hover:border-cyan-500/20 transition-all duration-500 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 flex-shrink-0 transition-all duration-300">
          <Award size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
          <div className="text-gray-400 text-sm mb-1">{cert.issuer}</div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-gray-600 text-xs">{cert.date}</span>
            <button className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-xs flex items-center gap-1">
              <ExternalLink size={14} />
              Verify
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-700 font-mono">
            ID: {cert.credentialId}
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="min-h-screen bg-[#0f0f0f] py-32 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-gray-500 text-lg">
            Professional certifications and accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
