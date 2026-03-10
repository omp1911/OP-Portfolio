import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mockData';
import { Button } from './ui/button';

const getSocialIcon = (iconName) => {
  switch (iconName) {
    case 'github':
      return <Github size={20} />;
    case 'linkedin':
      return <Linkedin size={20} />;
    case 'twitter':
      return <Twitter size={20} />;
    case 'mail':
      return <Mail size={20} />;
    default:
      return null;
  }
};

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="min-h-screen bg-black py-20 md:py-32 flex items-center">
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="text-emerald-400" size={20} />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-emerald-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="text-emerald-400" size={20} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-16">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                size="icon"
                className="border-gray-700 hover:border-emerald-400 hover:text-emerald-400 text-gray-400 transition-all duration-300"
                onClick={() => window.open(social.url, '_blank')}
              >
                {getSocialIcon(social.icon)}
              </Button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Built with React & FastAPI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
