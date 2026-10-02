import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  PhoneCall,
  Users,
  Workflow,
  FolderOpen,
  ArrowRight,
  MessageCircle,
  Mail,
  Calendar,
  Sparkles,
  Bot
} from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { useIsDesktop, usePrefersReducedMotion } from '../motion/MotionComponents';

export const HeroRobotVisual: React.FC = () => {
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Subtle mouse parallax on desktop only
  useEffect(() => {
    if (!isDesktop || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Gentle parallax displacement (max ~4-6px)
      const deltaX = ((e.clientX - centerX) / (rect.width / 2 || 1)) * 5;
      const deltaY = ((e.clientY - centerY) / (rect.height / 2 || 1)) * 4;

      setMouseOffset({ x: deltaX, y: deltaY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop, reducedMotion]);

  const pTransform = (factor: number) => {
    if (!isDesktop || reducedMotion) return 'none';
    return `translate3d(${mouseOffset.x * factor}px, ${mouseOffset.y * factor}px, 0)`;
  };

  return (
    <div
      ref={containerRef}
      id="hero-robot-concept-container"
      className="relative w-full max-w-[650px] lg:max-w-[720px] xl:max-w-[760px] mx-auto select-none py-1"
    >
      {/* 1. Deep Ambient Cyan & Electric Blue Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#00D1FF]/22 via-[#3BA9FF]/12 to-transparent rounded-full blur-[110px] pointer-events-none" />

      {/* 2. Thin Glowing Circuit Connector Lines & Nodes (Desktop Only) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block opacity-65"
        viewBox="0 0 740 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3BA9FF" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Path to Website Automation (top-left) */}
        <path d="M 310 240 L 220 180 L 150 120" stroke="url(#cyanLineGrad)" strokeWidth="1" strokeDasharray="3 4" filter="url(#glowFilter)" />
        {/* Path to AI Call Agent (top-right) */}
        <path d="M 430 230 L 510 170 L 580 110" stroke="url(#cyanLineGrad)" strokeWidth="1" strokeDasharray="3 4" filter="url(#glowFilter)" />
        {/* Path to Lead Capture (mid-right) */}
        <path d="M 440 280 L 520 270 L 590 260" stroke="url(#cyanLineGrad)" strokeWidth="1" strokeDasharray="3 4" filter="url(#glowFilter)" />
        {/* Path to Smart Workflows (bottom-left) */}
        <path d="M 300 330 L 210 380 L 150 420" stroke="url(#cyanLineGrad)" strokeWidth="1" strokeDasharray="3 4" filter="url(#glowFilter)" />
        {/* Path to Case Study Demo (bottom-right) */}
        <path d="M 430 350 L 520 400 L 580 430" stroke="url(#cyanLineGrad)" strokeWidth="1" strokeDasharray="3 4" filter="url(#glowFilter)" />

        {/* Pulsing Circuit Nodes */}
        <circle cx="310" cy="240" r="3" fill="#00D1FF" className="animate-node-pulse" />
        <circle cx="430" cy="230" r="3" fill="#3BA9FF" className="animate-node-pulse" />
        <circle cx="440" cy="280" r="3" fill="#00D1FF" className="animate-node-pulse" />
        <circle cx="300" cy="330" r="3" fill="#3BA9FF" className="animate-node-pulse" />
        <circle cx="430" cy="350" r="3" fill="#00D1FF" className="animate-node-pulse" />
      </svg>

      {/* 3. CENTRAL STAGE: 3D Robot AI Assistant on High-Visibility Illuminated Platform */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px] lg:min-h-[520px]"
        style={{ transform: pTransform(0.35) }}
      >
        {/* Robot Character with gentle floating movement (5-7px) */}
        <div className="relative animate-robot-float flex flex-col items-center">
          
          {/* Subtle cyan halo behind robot's upper body */}
          <div className="absolute top-2 w-80 h-80 bg-gradient-to-b from-[#00D1FF]/25 via-[#3BA9FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* 3D Robot Artwork - Enlarged 25-35% as focal centerpiece */}
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px] xl:w-[470px] animate-robot-breathe rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,10,30,0.92)] border border-[#00D1FF]/35 bg-gradient-to-b from-[#04142E]/95 via-[#020B1A]/95 to-[#010814]">
            <img
              src="/images/titan_robot_focal.jpg"
              alt="TITAN AI Assistant Robot"
              className="w-full h-auto object-cover object-center transform scale-[1.01] hover:scale-[1.03] transition-transform duration-700"
              loading="eager"
            />

            {/* Futuristic Tech Overlay Badges on Character Frame */}
            <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#020B1A]/85 border border-[#00D1FF]/45 text-[10px] font-mono font-medium text-[#00D1FF] backdrop-blur-md shadow-[0_0_14px_rgba(0,209,255,0.3)]">
              <Bot className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>TITAN AI CORE</span>
            </div>

            <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#020B1A]/85 border border-emerald-400/40 text-[10px] font-mono font-medium text-emerald-400 backdrop-blur-md shadow-[0_0_14px_rgba(52,211,153,0.3)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot" />
              <span>SYSTEM ACTIVE</span>
            </div>

            {/* Sleek Pedestal Front Face with Glowing TITAN AI AGENCY Branding */}
            <div className="absolute bottom-2.5 inset-x-0 mx-auto text-center pointer-events-none">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#020B1A]/90 border border-[#00D1FF]/60 text-[10px] font-mono font-bold tracking-[0.24em] text-[#00D1FF] uppercase shadow-[0_0_18px_rgba(0,209,255,0.5)] backdrop-blur-md">
                <TitanIcon className="w-3 h-3" />
                TITAN AI AGENCY
              </span>
            </div>
          </div>

          {/* ==============================================
              FUTURISTIC CIRCULAR ROTATING PLATFORM / HUD
             ============================================== */}
          <div className="relative w-[360px] sm:w-[440px] md:w-[480px] lg:w-[500px] h-[90px] mt-[-24px] pointer-events-none flex items-center justify-center">
            
            {/* Soft Ambient Blue / Cyan Ground Reflection */}
            <div className="absolute inset-x-4 top-3 h-16 bg-gradient-to-b from-[#00D1FF]/30 via-[#3BA9FF]/18 to-transparent blur-xl rounded-full" />

            {/* 3D Perspective HUD Stage */}
            <div
              className="relative w-full h-full flex items-center justify-center"
              style={{ perspective: '600px' }}
            >
              <div
                className="relative w-[340px] sm:w-[420px] md:w-[450px] h-[130px] flex items-center justify-center"
                style={{ transform: 'rotateX(68deg)' }}
              >
                {/* 1. Outer Slow Rotating Clockwise Circular Ring with HUD Notches */}
                <div className="absolute inset-0 rounded-full border border-[#00D1FF]/45 border-dashed animate-hud-cw shadow-[0_0_24px_rgba(0,209,255,0.4)]">
                  {/* Outer Orbit Dots */}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#00D1FF] shadow-[0_0_10px_#00D1FF]" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#3BA9FF] shadow-[0_0_10px_#3BA9FF]" />
                  <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00D1FF] shadow-[0_0_10px_#00D1FF]" />
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#3BA9FF] shadow-[0_0_10px_#3BA9FF]" />
                </div>

                {/* 2. Inner Counter-Rotating Circular Ring with Coordinate Markings */}
                <div className="absolute inset-4 rounded-full border border-[#3BA9FF]/40 border-dotted animate-hud-ccw">
                  <span className="absolute top-2 right-8 w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
                  <span className="absolute bottom-2 left-8 w-1.5 h-1.5 rounded-full bg-[#3BA9FF]" />
                </div>

                {/* 3. High-Intensity Glowing Cyan Pedestal Core Ring */}
                <div className="absolute inset-8 rounded-full border-2 border-[#00D1FF] shadow-[0_0_35px_rgba(0,209,255,0.85),inset_0_0_20px_rgba(0,209,255,0.5)] animate-pedestal-glow" />

                {/* 4. Concentric Disc Surface */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-[#00D1FF]/25 via-[#3BA9FF]/10 to-transparent blur-[3px]" />
              </div>
            </div>

            {/* Glowing Floor Horizon Line */}
            <div className="absolute bottom-4 w-[300px] sm:w-[380px] h-2 mx-auto rounded-[100%] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-95 blur-[1.5px]" />
          </div>

        </div>
      </div>

      {/* =========================================================================
          4. THE 5 HOLOGRAPHIC FLOATING AI PANELS (Asymmetric Futuristic Layout)
             Positioned with safe margins to stay completely visible on laptops
         ========================================================================= */}

      {/* PANEL 1: Website Automation (Upper-Left of Robot) */}
      <div
        style={{ transform: pTransform(0.85) }}
        className="hidden sm:block absolute top-1 -left-2 md:-left-4 lg:-left-5 z-20 w-[215px] md:w-[225px] lg:w-[235px] animate-hologram-1"
      >
        <Link
          to="/services/website-design"
          className="group block rounded-2xl bg-[#051428]/85 backdrop-blur-[16px] border border-[rgba(60,200,255,0.35)] hover:border-[#00D1FF] p-3.5 shadow-[0_8px_32px_rgba(0,12,30,0.7),0_0_16px_rgba(60,200,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,209,255,0.4)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF]">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-display text-[13px] font-bold text-white group-hover:text-[#00D1FF] transition-colors leading-tight">
                  Website Automation
                </div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#04142E] transition-all">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-snug my-2 text-left">
            High-performance websites with AI integration.
          </p>

          {/* Mini Mockup Canvas with Scanning Light Beam */}
          <div className="relative rounded-lg bg-[#020B1A]/90 border border-white/[0.1] p-2 overflow-hidden">
            <div className="absolute inset-x-0 h-4 bg-gradient-to-b from-transparent via-[#00D1FF]/25 to-transparent pointer-events-none animate-scan-beam" />
            <div className="flex items-center gap-1 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="h-1.5 w-16 bg-white/20 rounded ml-1" />
            </div>
            <div className="space-y-1">
              <div className="h-2 w-3/4 bg-[#00D1FF]/45 rounded" />
              <div className="h-1.5 w-full bg-white/15 rounded" />
            </div>
          </div>
        </Link>
      </div>

      {/* PANEL 2: AI Call Agent (Upper-Right of Robot) */}
      <div
        style={{ transform: pTransform(0.8) }}
        className="hidden sm:block absolute top-0 -right-2 md:-right-4 lg:-right-5 z-20 w-[215px] md:w-[225px] lg:w-[235px] animate-hologram-2"
      >
        <Link
          to="/services/ai-call-agents"
          className="group block rounded-2xl bg-[#051428]/85 backdrop-blur-[16px] border border-[rgba(60,200,255,0.35)] hover:border-[#00D1FF] p-3.5 shadow-[0_8px_32px_rgba(0,12,30,0.7),0_0_16px_rgba(60,200,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,209,255,0.4)]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF]">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-display text-[13px] font-bold text-white group-hover:text-[#00D1FF] transition-colors leading-tight">
                  AI Call Agent
                </div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#04142E] transition-all">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-snug my-2 text-left">
            24/7 AI voice agents that answer, qualify and book.
          </p>

          {/* Animated 6-bar Audio Waveform */}
          <div className="rounded-lg bg-[#020B1A]/90 border border-white/[0.1] p-2 flex items-center justify-between gap-1 h-9">
            <span className="text-[9.5px] font-mono text-[#00D1FF] font-bold">LIVE AUDIO</span>
            <div className="flex items-center gap-1 h-5">
              <span className="w-1 bg-[#00D1FF] rounded-full animate-wave-1" />
              <span className="w-1 bg-[#3BA9FF] rounded-full animate-wave-2" />
              <span className="w-1 bg-[#00D1FF] rounded-full animate-wave-3" />
              <span className="w-1 bg-[#3BA9FF] rounded-full animate-wave-4" />
              <span className="w-1 bg-[#00D1FF] rounded-full animate-wave-5" />
              <span className="w-1 bg-[#3BA9FF] rounded-full animate-wave-6" />
            </div>
          </div>
        </Link>
      </div>

      {/* PANEL 3: Lead Capture (Middle-Right of Robot) */}
      <div
        style={{ transform: pTransform(0.7) }}
        className="hidden sm:block absolute top-[44%] -translate-y-1/2 -right-3 md:-right-5 lg:-right-6 z-20 w-[205px] md:w-[215px] lg:w-[225px] animate-hologram-3"
      >
        <Link
          to="/services/ai-agents"
          className="group block rounded-2xl bg-[#051428]/85 backdrop-blur-[16px] border border-[rgba(60,200,255,0.35)] hover:border-[#00D1FF] p-3.5 shadow-[0_8px_32px_rgba(0,12,30,0.7),0_0_16px_rgba(60,200,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,209,255,0.4)]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#3BA9FF]/15 border border-[#3BA9FF]/30 flex items-center justify-center text-[#3BA9FF]">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-display text-[13px] font-bold text-white group-hover:text-[#00D1FF] transition-colors leading-tight">
                  Lead Capture
                </div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#04142E] transition-all">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-snug my-2 text-left">
            Turn visitors into qualified leads automatically.
          </p>

          {/* Mini Bar Chart Indicator */}
          <div className="rounded-lg bg-[#020B1A]/90 border border-white/[0.1] p-2 flex items-center justify-between">
            <span className="text-[9.5px] font-mono text-emerald-400 font-bold">+140% INBOUND</span>
            <div className="flex items-end gap-1 h-4">
              <span className="w-1.5 bg-[#00D1FF] rounded-t-sm animate-bar-1" />
              <span className="w-1.5 bg-[#3BA9FF] rounded-t-sm animate-bar-2" />
              <span className="w-1.5 bg-[#00D1FF] rounded-t-sm animate-bar-3" />
              <span className="w-1.5 bg-emerald-400 rounded-t-sm animate-bar-4" />
            </div>
          </div>
        </Link>
      </div>

      {/* PANEL 4: Smart Workflows (Lower-Left of Robot) - Raised upward to prevent fold cutoff */}
      <div
        style={{ transform: pTransform(0.75) }}
        className="hidden sm:block absolute bottom-8 lg:bottom-10 -left-2 md:-left-4 lg:-left-5 z-20 w-[215px] md:w-[225px] lg:w-[235px] animate-hologram-4"
      >
        <Link
          to="/services/business-automation"
          className="group block rounded-2xl bg-[#051428]/85 backdrop-blur-[16px] border border-[rgba(60,200,255,0.35)] hover:border-[#00D1FF] p-3.5 shadow-[0_8px_32px_rgba(0,12,30,0.7),0_0_16px_rgba(60,200,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,209,255,0.4)]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center text-[#00D1FF]">
                <Workflow className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-display text-[13px] font-bold text-white group-hover:text-[#00D1FF] transition-colors leading-tight">
                  Smart Workflows
                </div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#04142E] transition-all">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-snug my-2 text-left">
            Automate enquiries, follow-ups and internal processes.
          </p>

          {/* Connected App Icons: WhatsApp, Mail, Calendar with Pulse Travel */}
          <div className="relative flex items-center justify-between pt-1 text-xs">
            <div className="relative flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="w-6 h-6 rounded-md bg-[#EA4335]/20 border border-[#EA4335]/40 flex items-center justify-center text-[#EA4335]">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="w-6 h-6 rounded-md bg-[#4285F4]/20 border border-[#4285F4]/40 flex items-center justify-center text-[#4285F4]">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              {/* Subtle light pulse line */}
              <div className="absolute -bottom-1 inset-x-0 h-0.5 bg-gradient-to-r from-[#25D366]/40 via-[#00D1FF] to-[#4285F4]/40 rounded-full animate-workflow-travel" />
            </div>
            <span className="text-[10px] font-mono text-[#00D1FF] font-semibold">Synced</span>
          </div>
        </Link>
      </div>

      {/* PANEL 5: Case Study Demo (Lower-Right of Robot) - Raised upward to prevent fold cutoff */}
      <div
        style={{ transform: pTransform(0.8) }}
        className="hidden sm:block absolute bottom-6 lg:bottom-8 -right-2 md:-right-4 lg:-right-5 z-20 w-[215px] md:w-[225px] lg:w-[235px] animate-hologram-5"
      >
        <a
          href="#featured-work"
          className="group block rounded-2xl bg-[#051428]/85 backdrop-blur-[16px] border border-[rgba(60,200,255,0.35)] hover:border-[#00D1FF] p-3.5 shadow-[0_8px_32px_rgba(0,12,30,0.7),0_0_16px_rgba(60,200,255,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(0,209,255,0.4)]"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/[0.1]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#3BA9FF]/15 border border-[#3BA9FF]/30 flex items-center justify-center text-[#3BA9FF]">
                <FolderOpen className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="font-display text-[13px] font-bold text-white group-hover:text-[#00D1FF] transition-colors leading-tight">
                  Case Study Demo
                </div>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center text-[#00D1FF] group-hover:bg-[#00D1FF] group-hover:text-[#04142E] transition-all">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-snug my-2 text-left">
            See real working examples built by TITAN.
          </p>

          {/* Mini Portfolio Preview Thumbnails */}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="h-6 rounded bg-[#071A33] border border-white/15 flex items-center justify-center text-[8.5px] font-mono font-medium text-slate-200">
              Property
            </div>
            <div className="h-6 rounded bg-[#071A33] border border-white/15 flex items-center justify-center text-[8.5px] font-mono font-medium text-slate-200">
              Bakery
            </div>
            <div className="h-6 rounded bg-[#071A33] border border-white/15 flex items-center justify-center text-[8.5px] font-mono font-medium text-slate-200">
              Dining
            </div>
          </div>
        </a>
      </div>

      {/* =========================================================================
          5. MOBILE RESPONSIVE STACK (<640px): Clean flow below robot
         ========================================================================= */}
      <div className="sm:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 px-1">
        {/* Mobile Card 1 */}
        <Link
          to="/services/website-design"
          className="rounded-xl bg-[#051428]/90 backdrop-blur-[14px] border border-[rgba(60,200,255,0.35)] p-3 text-left shadow-[0_4px_16px_rgba(0,10,25,0.5)]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#00D1FF]/15 text-[#00D1FF] flex items-center justify-center">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-xs text-white">Website Automation</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            High-performance websites with AI integration.
          </p>
        </Link>

        {/* Mobile Card 2 */}
        <Link
          to="/services/ai-call-agents"
          className="rounded-xl bg-[#051428]/90 backdrop-blur-[14px] border border-[rgba(60,200,255,0.35)] p-3 text-left shadow-[0_4px_16px_rgba(0,10,25,0.5)]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#00D1FF]/15 text-[#00D1FF] flex items-center justify-center">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-xs text-white">AI Call Agent</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            24/7 AI voice agents that answer, qualify and book.
          </p>
        </Link>

        {/* Mobile Card 3 */}
        <Link
          to="/services/ai-agents"
          className="rounded-xl bg-[#051428]/90 backdrop-blur-[14px] border border-[rgba(60,200,255,0.35)] p-3 text-left shadow-[0_4px_16px_rgba(0,10,25,0.5)]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#3BA9FF]/15 text-[#3BA9FF] flex items-center justify-center">
                <Users className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-xs text-white">Lead Capture</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            Turn visitors into qualified leads automatically.
          </p>
        </Link>

        {/* Mobile Card 4 */}
        <Link
          to="/services/business-automation"
          className="rounded-xl bg-[#051428]/90 backdrop-blur-[14px] border border-[rgba(60,200,255,0.35)] p-3 text-left shadow-[0_4px_16px_rgba(0,10,25,0.5)]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#00D1FF]/15 text-[#00D1FF] flex items-center justify-center">
                <Workflow className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-xs text-white">Smart Workflows</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            Automate enquiries, follow-ups and internal processes.
          </p>
        </Link>

        {/* Mobile Card 5 */}
        <a
          href="#featured-work"
          className="rounded-xl bg-[#051428]/90 backdrop-blur-[14px] border border-[rgba(60,200,255,0.35)] p-3 text-left shadow-[0_4px_16px_rgba(0,10,25,0.5)]"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#3BA9FF]/15 text-[#3BA9FF] flex items-center justify-center">
                <FolderOpen className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-xs text-white">Case Study Demo</span>
            </div>
            <ArrowRight className="w-3 h-3 text-[#00D1FF]" />
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            See real working examples built by TITAN.
          </p>
        </a>
      </div>

    </div>
  );
};
