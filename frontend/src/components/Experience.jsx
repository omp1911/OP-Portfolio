import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/mockData';

const ExperienceItem = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
      data-testid={`experience-${index}`}
    >
      {/* Timeline dot */}
      <div className="timeline-dot top-1" />
      
      {/* Content card */}
      <div className="neo-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
          <div>
            <h3 className="font-heading text-xl font-medium text-neo-text">
              {exp.role}
            </h3>
            <p className="text-neo-cyan font-mono text-sm">{exp.company}</p>
          </div>
          <p className="font-mono text-xs text-neo-muted">{exp.duration}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.highlights.map((item, i) => (
            <li 
              key={i} 
              className="text-neo-secondary text-sm leading-relaxed pl-4 border-l-2 border-neo-purple/30"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span key={tech} className="skill-tile text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section bg-neo-surface/30" data-testid="experience-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Experience</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-neo-text">
            Where I&apos;ve <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line" />
          
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceItem exp={exp} index={i} key={exp.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
