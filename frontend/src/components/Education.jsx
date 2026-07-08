import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/mockData";

const Education = () => {
  const easing = [0.34, 1.56, 0.64, 1]; // back-out: physical object settles with slight bounce

  return (
    <section
      id="education"
      className="section bg-dark-base"
      data-testid="education-section"
    >
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easing }}
          className="mb-8"
        >
          <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Education
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
            Academic background
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: easing }}
              className="neo-card p-5 flex items-center gap-5"
              data-testid={`education-${index}`}
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-dark-surface-hover flex items-center justify-center border border-white/5">
                <GraduationCap size={20} className="text-[#D96C4A]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base font-medium text-white truncate">
                  {edu.institution}
                </h3>
                <p className="text-sm text-white/50 truncate flex items-center flex-wrap gap-2">
                  <span>{edu.degree}</span>
                  {edu.status === "in-progress" && (
                    <span className="inline-block text-[10px] font-medium uppercase tracking-wide text-[#D96C4A] border border-[#D96C4A]/30 rounded-full px-2 py-0.5 align-middle">
                      In Progress
                    </span>
                  )}
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
