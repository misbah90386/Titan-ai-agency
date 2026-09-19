import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Database, Network, ShieldCheck, Zap, Activity } from 'lucide-react';

export const AbstractTechHeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none"
    >
      {/* Background Soft Blue Glow */}
      <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-[70px] pointer-events-none" />

      {/* Outer Rotating Architectural Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-4 rounded-full border border-blue-500/15 border-dashed pointer-events-none"
      />

      {/* Middle Orbit Ring with Technical Pointers */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-14 rounded-full border border-white/10 pointer-events-none"
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
      </motion.div>

      {/* SVG Circuit & Data Pathways Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="blueLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
          <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Central Geometric Grid Lines */}
        <line x1="250" y1="60" x2="250" y2="440" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
        <line x1="60" y1="250" x2="440" y2="250" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

        {/* Diagonal Routing Traces */}
        <path d="M 120 150 L 190 150 L 250 210 L 310 210 L 380 150" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />
        <path d="M 120 350 L 190 350 L 250 290 L 310 290 L 380 350" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1.5" />

        {/* Dynamic Data Flow Pulses */}
        <motion.circle
          r="3"
          fill="#60a5fa"
          filter="url(#subtleGlow)"
          animate={{
            cx: [120, 190, 250, 310, 380],
            cy: [150, 150, 210, 210, 150],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          r="3"
          fill="#38bdf8"
          filter="url(#subtleGlow)"
          animate={{
            cx: [380, 310, 250, 190, 120],
            cy: [350, 290, 290, 350, 350],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </svg>

      {/* Layered Perspective Floating Structure */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`
        }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        className="relative z-10 w-full h-full flex items-center justify-center p-8"
      >
        {/* Central Core Glass Hub */}
        <div className="relative w-44 h-44 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1220]/95 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.2)] flex flex-col items-center justify-center p-4 transition-all duration-300 group">
          {/* Inner pulsating core element */}
          <div className="relative w-16 h-16 rounded-xl bg-blue-950/70 border border-blue-400/40 flex items-center justify-center mb-3 shadow-[inset_0_0_15px_rgba(59,130,246,0.3)]">
            <Cpu className="w-8 h-8 text-blue-400" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
          </div>

          <div className="text-center">
            <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-semibold block">
              TITAN CORE ENGINE
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-tight">
              Enterprise Logic
            </span>
          </div>

          {/* Micro telemetry indicator */}
          <div className="mt-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono text-blue-300">
            <Activity className="w-2.5 h-2.5 animate-pulse text-blue-400" />
            <span>LATENCY: 12ms</span>
          </div>
        </div>

        {/* Floating Peripheral Node 1: AI Agents & Logic */}
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 right-8 px-3 py-2 rounded-xl bg-slate-900/85 border border-white/10 backdrop-blur-md shadow-lg flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">AI Agent Mesh</div>
            <div className="text-[9px] text-slate-400 font-mono">Autonomous Execution</div>
          </div>
        </motion.div>

        {/* Floating Peripheral Node 2: Web & API Infrastructure */}
        <motion.div
          animate={{ y: [4, -4, 4] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-10 left-6 px-3 py-2 rounded-xl bg-slate-900/85 border border-white/10 backdrop-blur-md shadow-lg flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
            <Network className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">Digital Systems</div>
            <div className="text-[9px] text-slate-400 font-mono">High-Availability</div>
          </div>
        </motion.div>

        {/* Floating Peripheral Node 3: Telemetry & Security */}
        <motion.div
          animate={{ y: [-3, 5, -3] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-12 right-10 px-3 py-2 rounded-xl bg-slate-900/85 border border-white/10 backdrop-blur-md shadow-lg flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">Enterprise Guardrails</div>
            <div className="text-[9px] text-slate-400 font-mono">Verified Integrity</div>
          </div>
        </motion.div>

        {/* Floating Peripheral Node 4: Data Pipelines */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-12 left-10 px-3 py-2 rounded-xl bg-slate-900/85 border border-white/10 backdrop-blur-md shadow-lg flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
            <Database className="w-4 h-4 text-indigo-400" />
          </div>
          <div>
            <div className="text-[11px] font-semibold text-white">Automation Stream</div>
            <div className="text-[9px] text-slate-400 font-mono">Synchronized ETL</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
