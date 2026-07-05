import React from 'react';
import { personalInfo } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="section" data-testid="contact-section">
      <div className="container">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label">Contact</p>
          
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-6">
            Let's connect
          </h2>

          <p className="text-zinc-600 max-w-lg mb-10">
            Open to full-time roles, freelance data platform work, and interesting engineering problems.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-2">Email</p>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-lg hover:underline"
                data-testid="contact-email"
              >
                {personalInfo.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-2">Phone</p>
              <a 
                href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                className="text-lg hover:underline"
                data-testid="contact-phone"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-2">LinkedIn</p>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
                data-testid="contact-linkedin"
              >
                linkedin.com/in/om-patel
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-zinc-500 mb-2">Location</p>
              <p className="text-lg" data-testid="contact-location">{personalInfo.location}</p>
            </div>
          </div>

          <a
            href={personalInfo.resumeMailto}
            className="btn btn-primary"
            data-testid="contact-resume-btn"
          >
            Request Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
