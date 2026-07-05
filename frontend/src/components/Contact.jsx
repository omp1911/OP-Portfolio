import React from 'react';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mockData';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  return (
    <section id="contact" className="section" data-testid="contact-section">
      <div className="rail">Contact · 07</div>
      <div className="container-wide">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div ref={ref} className={`md:col-span-6 reveal ${visible ? 'is-visible' : ''}`}>
            <p className="section-label mb-6">Contact</p>
            <h2 className="display text-[42px] md:text-[64px]">
              Got a pipeline worth building? <span style={{ color: 'var(--accent)' }}>Let&apos;s talk.</span>
            </h2>
            <p className="mt-6 text-[16.5px] max-w-[500px] text-[var(--ink-2)]">
              Open to full-time roles, freelance data-platform work, and interesting engineering
              problems. Fastest reply is email.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 underline-fx font-serif text-[19px]"
                data-testid="contact-email"
              >
                <Mail size={18} /> {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 underline-fx font-serif text-[19px]"
                data-testid="contact-phone"
              >
                <Phone size={18} /> {personalInfo.phone}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 underline-fx font-serif text-[19px]"
                data-testid="contact-linkedin"
              >
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Skeuo accent #3 — business card */}
          <div className={`md:col-span-6 reveal reveal-delay-2 ${visible ? 'is-visible' : ''}`} data-testid="business-card">
            <div className="business-card">
              <div className="emboss">Data Engineer</div>
              <div className="relative z-10">
                <p className="font-mono text-[10px] tracking-[0.32em] text-[var(--muted)] uppercase mb-4">
                  ・ ID · 2020
                </p>
                <div className="name">Om Patel</div>
                <div className="title-line">Pipelines · Streaming · Warehouses</div>

                <div className="mt-10 grid grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-1">Email</p>
                    <p className="font-serif">{personalInfo.email}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-1">Phone</p>
                    <p className="font-serif">{personalInfo.phone}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-1">Location</p>
                    <p className="font-serif">{personalInfo.location}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--muted)] mb-1">Cloud</p>
                    <p className="font-serif">GCP · Azure · AWS</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-dashed border-[var(--hairline-strong)] flex items-center justify-between">
                  <span className="font-hand text-[24px]" style={{ color: 'var(--sig-blue)' }}>Om Patel</span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--muted)]">Since 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
