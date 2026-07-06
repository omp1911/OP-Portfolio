import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Contact = () => {
  const easing = [0.34, 1.56, 0.64, 1]; // back-out: physical object settles with slight bounce

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/om-patel', href: personalInfo.linkedin },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="section bg-dark-base py-20 md:py-28" data-testid="contact-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, ease: easing }}
            className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4"
          >
            Contact
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: easing }}
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6"
          >
            Let&apos;s connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2, ease: easing }}
            className="text-lg sm:text-xl text-white/70 leading-relaxed mb-12"
          >
            Got data stuck and need to have it{' '}
            <span className="text-[#D96C4A]">transformed</span> with{' '}
            <span className="text-[#D96C4A]">analytics</span>?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3, ease: easing }}
            className="neo-card p-6 sm:p-8 mb-8"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: easing }}
                    className="flex items-center gap-4 text-left"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-dark-surface-hover flex items-center justify-center border border-white/5">
                      <Icon size={18} className="text-[#D96C4A]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs tracking-wide uppercase text-white/50 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-white/70 hover:text-[#D96C4A] transition-colors text-sm break-all"
                          data-testid={`contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p 
                          className="text-white/70 text-sm"
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
              className="btn-primary inline-flex items-center gap-2"
              data-testid="contact-resume-btn"
            >
              <Send size={16} />
              Request Resume
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5, ease: easing }}
            className="text-white/50 text-sm"
          >
            Open to full-time roles, freelance data platform work, and interesting engineering problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
