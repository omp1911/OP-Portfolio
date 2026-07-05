import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/mockData';

const Certifications = () => {
  return (
    <section id="certifications" className="section bg-neo-surface/30" data-testid="certifications-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="section-label">Certifications</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-neo-text">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="neo-card p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform"
              data-testid={`certification-${index}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neo-surface flex items-center justify-center">
                <Award size={20} className="text-neo-purple" />
              </div>
              <p className="text-sm font-medium text-neo-text">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
