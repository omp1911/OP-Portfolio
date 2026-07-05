import React from 'react';
import { skills } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="skills" className="section" data-testid="skills-section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-12`}>
          <p className="section-label">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
            Technical toolkit
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={category} data-testid={`skill-category-${i}`}>
              <h3 className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-4">
                {category}
              </h3>
              <p className="text-sm text-zinc-700">
                {items.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
