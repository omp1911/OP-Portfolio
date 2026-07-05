import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '../data/mockData';

const Certifications = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="certifications" className="section bg-dark-surface/30" data-testid="certifications-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="mb-8"
        >
          <p className="section-label">Certifications</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-dark-text">
            Professional credentials
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: easing }}
              className="neo-card neo-card-hover p-5 flex items-center gap-5"
              data-testid={`certification-${index}`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-surface-hover flex items-center justify-center border border-white/5">
                <Award size={20} className="text-accent-orange" />
              </div>
              <p className="text-sm font-medium text-dark-text break-words">
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
