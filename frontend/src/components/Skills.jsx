import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/mockData';

const Skills = () => {
  const categoryIcons = {
    'Data Engineering': '⚙️',
    'Analytics': '📊',
    'Cloud & DevOps': '☁️',
  };

  return (
    <section id="skills" className="section bg-neo-base" data-testid="skills-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label">Skills</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-medium tracking-tight text-neo-text">
            Technical <span className="gradient-text">toolkit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="neo-card p-6"
              data-testid={`skill-category-${categoryIndex}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{categoryIcons[category] || '💻'}</span>
                <h3 className="font-mono text-xs tracking-widest uppercase text-neo-cyan">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="skill-tile"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
