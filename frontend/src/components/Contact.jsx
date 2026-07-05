import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/om-patel', href: personalInfo.linkedin },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="section bg-neo-base py-24 md:py-32" data-testid="contact-section">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-label"
          >
            Contact
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neo-text mb-6"
          >
            Let&apos;s <span className="gradient-text">connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-neo-secondary leading-relaxed mb-12"
          >
            Got data stuck and need to have it <span className="text-neo-cyan">transformed</span> with <span className="text-neo-purple">analytics</span>?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="neo-card p-8 md:p-10 mb-10"
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neo-surface flex items-center justify-center">
                      <Icon size={18} className="text-neo-cyan" />
                    </div>
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-neo-muted mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-neo-text hover:text-neo-cyan transition-colors text-sm md:text-base"
                          data-testid={`contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p 
                          className="text-neo-text text-sm md:text-base"
                          data-testid={`contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href={personalInfo.resumeMailto}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-neo inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              data-testid="contact-resume-btn"
            >
              <Send size={16} />
              Request Resume
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-neo-muted text-sm"
          >
            Open to full-time roles, freelance data platform work, and interesting engineering problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
