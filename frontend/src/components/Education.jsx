import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/mockData';

const Education = () => {
  return (
    <section id="education" className="section bg-neo-base" data-testid="education-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="section-label">Education</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neo-text">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="neo-card p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
              data-testid={`education-${index}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neo-surface flex items-center justify-center">
                <GraduationCap size={20} className="text-neo-cyan" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base font-medium text-neo-text truncate">
                  {edu.institution}
                </h3>
                <p className="text-sm text-neo-secondary truncate">
                  {edu.degree}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
