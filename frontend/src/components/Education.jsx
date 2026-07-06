import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/mockData';

const Education = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="education" className="section bg-dark-base" data-testid="education-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="mb-8"
        >
          <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4">Education</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-[#FFFFFF]">
            Academic background
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: easing }}
              className="neo-card p-5 flex items-center gap-5"
              data-testid={`education-${index}`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-surface-hover flex items-center justify-center border border-white/5">
                <GraduationCap size={20} className="text-[#D96C4A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base font-medium text-[#FFFFFF] truncate">
                  {edu.institution}
                </h3>
                <p className="text-sm text-[#FFFFFF] opacity-60 truncate">
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
