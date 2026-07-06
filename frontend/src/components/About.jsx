import React from 'react';
import { motion } from 'framer-motion';
import { Database, Workflow, Server, Brain, BarChart3 } from 'lucide-react';

const DataPipelineVisualization = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <div className="w-full py-6" data-testid="data-pipeline-diagram">
      <svg
        viewBox="0 0 600 200"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection lines */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D96C4A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Main horizontal line: Extract -> Transform -> Load */}
        <path
          d="M 80 80 L 200 80 L 320 80"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
        />
        
        {/* Fork lines from Load */}
        <path
          d="M 320 80 L 400 80 L 480 50"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
        />
        <path
          d="M 320 80 L 400 80 L 480 110"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
        />

        {/* Animated packets - Main line */}
        <motion.circle
          r="4"
          fill="#D96C4A"
          initial={{ cx: 80, cy: 80, opacity: 0 }}
          animate={{
            cx: [80, 200, 320, 400],
            cy: [80, 80, 80, 80],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
        
        {/* Animated packet - Fork to AI/ML */}
        <motion.circle
          r="3"
          fill="#FFFFFF"
          initial={{ cx: 400, cy: 80, opacity: 0 }}
          animate={{
            cx: [400, 440, 480],
            cy: [80, 65, 50],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            delay: 2.5,
            repeatDelay: 2.5,
          }}
        />
        
        {/* Animated packet - Fork to Analyze */}
        <motion.circle
          r="3"
          fill="#FFFFFF"
          initial={{ cx: 400, cy: 80, opacity: 0 }}
          animate={{
            cx: [400, 440, 480],
            cy: [80, 95, 110],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            delay: 2.8,
            repeatDelay: 2.5,
          }}
        />

        {/* Node circles */}
        {/* Extract */}
        <circle cx="80" cy="80" r="28" fill="#131316" stroke="#D96C4A" strokeWidth="1" opacity="0.8" />
        {/* Transform */}
        <circle cx="200" cy="80" r="28" fill="#131316" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Load */}
        <circle cx="320" cy="80" r="28" fill="#131316" stroke="#D96C4A" strokeWidth="1" opacity="0.8" />
        {/* AI/ML */}
        <circle cx="480" cy="50" r="24" fill="#131316" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        {/* Analyze */}
        <circle cx="480" cy="110" r="24" fill="#131316" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      </svg>

      {/* Labels positioned with flexbox */}
      <div className="flex justify-between items-start px-2 -mt-2">
        <div className="flex flex-col items-center" style={{ width: '80px' }}>
          <Database size={16} className="text-[#D96C4A] mb-1" />
          <span className="text-[10px] text-white/70 text-center">Extract</span>
        </div>
        <div className="flex flex-col items-center" style={{ width: '80px' }}>
          <Workflow size={16} className="text-white/70 mb-1" />
          <span className="text-[10px] text-white/70 text-center">Transform</span>
        </div>
        <div className="flex flex-col items-center" style={{ width: '80px' }}>
          <Server size={16} className="text-[#D96C4A] mb-1" />
          <span className="text-[10px] text-white/70 text-center">Load</span>
        </div>
        <div className="flex flex-col items-center gap-6" style={{ width: '80px' }}>
          <div className="flex flex-col items-center">
            <Brain size={14} className="text-white/70 mb-1" />
            <span className="text-[10px] text-white/70 text-center">AI/ML</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart3 size={14} className="text-white/70 mb-1" />
            <span className="text-[10px] text-white/70 text-center">Analyze</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const easing = [0.16, 1, 0.3, 1];

  return (
    <section id="about" className="section bg-dark-base" data-testid="about-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4"
        >
          About
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white mb-12"
        >
          Building data infrastructure that scales
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easing }}
            className="space-y-6"
          >
            <p className="text-white/70 leading-relaxed">
              With 5+ years designing and shipping production data platforms across GCP and Azure, 
              I specialize in building pipelines that transform raw chaos into actionable insights.
            </p>
            <p className="text-white/70 leading-relaxed">
              Currently at EllisDon, I contribute to multi-cloud ETL/ELT pipelines processing 
              GBs to TBs of data daily. My focus includes zero-downtime migrations, real-time 
              streaming with Kafka and Datastream, and dimensional modeling.
            </p>
            <p className="text-white/70 leading-relaxed">
              I believe in monitoring that catches issues before they become incidents, 
              and infrastructure that scales without sacrificing reliability.
            </p>
          </motion.div>

          {/* Right: Pipeline Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: easing }}
            className="neo-card p-6 sm:p-8"
          >
            <p className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-2">Data Flow</p>
            <p className="text-sm text-white/50 mb-4">How I architect data pipelines</p>
            <DataPipelineVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
