import React from 'react';
import { motion } from 'framer-motion';
import { Database, Workflow, Server, Brain, BarChart3 } from 'lucide-react';

const DataPipelineVisualization = () => {
  return (
    <div className="relative w-full" data-testid="data-pipeline-diagram" style={{ height: '160px' }}>
      {/* SVG for dashed lines and animated packets */}
      <svg 
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 160"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradient for the dashed line */}
          <linearGradient id="dashLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D96C4A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="#D96C4A" stopOpacity="0.9" />
          </linearGradient>
          
          {/* Glow filter for particles */}
          <filter id="glowFilter" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main horizontal dashed line through icon centers: Extract(40) -> Transform(120) -> Load(200) */}
        <path
          d="M 40 55 L 200 55"
          stroke="#D96C4A"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="8 5"
          strokeLinecap="round"
        />
        
        {/* Fork line to AI/ML (upper branch) from Load center */}
        <path
          d="M 200 55 L 280 55 L 340 30"
          stroke="#D96C4A"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 5"
          strokeLinecap="round"
        />
        
        {/* Fork line to Analyze (lower branch) from Load center */}
        <path
          d="M 200 55 L 280 55 L 340 80"
          stroke="#D96C4A"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 5"
          strokeLinecap="round"
        />

        {/* Animated packets on main line (Extract -> Transform -> Load) */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`main-${i}`}
            r="5"
            fill="rgba(255,255,255,0.6)"
            opacity="70%"
            filter="url(#glowFilter)"
            initial={{ cx: 40, cy: 55, opacity: 0 }}
            animate={{
              cx: [40, 120, 200],
              cy: [55, 55, 55],
              opacity: [0, 1, 1, 0.7],
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.6,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 0,
            }}
          />
        ))}

        {/* Animated packets on upper fork (Load -> AI/ML) */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`upper-${i}`}
            r="4"
            fill="rgba(255,255,255,0.6)"
            opacity="70%"
            filter="url(#glowFilter)"
            initial={{ cx: 200, cy: 55, opacity: 0 }}
            animate={{
              cx: [200, 280, 340],
              cy: [55, 55, 30],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 1.8 + i * 0.8,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 0.4,
            }}
          />
        ))}

        {/* Animated packets on lower fork (Load -> Analyze) */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`lower-${i}`}
            r="4"
            fill="rgba(255,255,255,0.6)"
            opacity="70%"
            filter="url(#glowFilter)"
            initial={{ cx: 200, cy: 55, opacity: 0 }}
            animate={{
              cx: [200, 280, 340],
              cy: [55, 55, 80],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.2,
              delay: 2.1 + i * 0.8,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 0.4,
            }}
          />
        ))}
      </svg>

      {/* Icons positioned exactly where dashed line passes through their centers */}
      
      {/* Extract - x=40, y=55 center */}
      <div className="absolute flex flex-col items-center" style={{ left: '10%', top: '35px', transform: 'translateX(-50%)' }}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0C0C0E]">
          <Database size={20} className="text-[#D96C4A]" />
        </div>
        <span className="mt-3 text-[10px] font-medium text-white/70 uppercase tracking-wide">Extract</span>
      </div>

      {/* Transform - x=120, y=55 center */}
      <div className="absolute flex flex-col items-center" style={{ left: '30%', top: '35px', transform: 'translateX(-50%)' }}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0C0C0E]">
          <Workflow size={20} className="text-white/70" />
        </div>
        <span className="mt-3 text-[10px] font-medium text-white/70 uppercase tracking-wide">Transform</span>
      </div>

      {/* Load - x=200, y=55 center (fork point) */}
      <div className="absolute flex flex-col items-center" style={{ left: '50%', top: '35px', transform: 'translateX(-50%)' }}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0C0C0E]">
          <Server size={20} className="text-[#D96C4A]" />
        </div>
        <span className="mt-3 text-[10px] font-medium text-white/70 uppercase tracking-wide">Load</span>
      </div>

      {/* AI/ML - x=340, y=30 center (upper fork) */}
      <div className="absolute flex flex-col items-center" style={{ left: '85%', top: '10px', transform: 'translateX(-50%)' }}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0C0C0E]">
          <Brain size={20} className="text-white/70" />
        </div>
        <span className="mt-3 text-[10px] font-medium text-white/70 uppercase tracking-wide">AI/ML</span>
      </div>

      {/* Analyze - x=340, y=80 center (lower fork) */}
      <div className="absolute flex flex-col items-center" style={{ left: '85%', top: '60px', transform: 'translateX(-50%)' }}>
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0C0C0E]">
          <BarChart3 size={20} className="text-[#D96C4A]" />
        </div>
        <span className="mt-3 text-[10px] font-medium text-white/70 uppercase tracking-wide">Analyze</span>
      </div>
    </div>
  );
};

const About = () => {
  const easing = [0.34, 1.56, 0.64, 1]; // back-out: physical object settles with slight bounce

  return (
    <section id="about" className="section bg-dark-base" data-testid="about-section">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easing }}
          className="text-[#D96C4A] text-xs font-medium tracking-[0.2em] uppercase mb-4"
        >
          About
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
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
            viewport={{ once: false, amount: 0.3 }}
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
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
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
