import React, { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '../motion/MotionComponents';

interface ServiceVisualDemoProps {
  serviceId: string;
}

export const ServiceVisualDemo: React.FC<ServiceVisualDemoProps> = ({ serviceId }) => {
  const reducedMotion = usePrefersReducedMotion();
  const [cycleState, setCycleState] = useState(0);

  // Periodic cycling effect when visible (playing for 4s, pausing for 2s)
  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setCycleState((prev) => (prev + 1) % 2);
    }, 4500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  switch (serviceId) {
    case 'ai-websites':
    case 'websites':
      return (
        <div className="my-5 h-[120px] rounded-xl bg-[#04142E] border border-sky-300/40 p-3.5 shadow-md overflow-hidden relative group-hover:border-[#00D1FF] group-hover:shadow-[0_8px_20px_rgba(0,209,255,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <span className="text-[#00D1FF] font-semibold tracking-wide">AI Website Builder</span>
          </div>

          <div className="space-y-2 py-1">
            <div className="h-3 w-4/5 rounded bg-gradient-to-r from-[#00D1FF]/70 to-[#3BA9FF]/40 animate-pulse" />
            <div className="grid grid-cols-3 gap-2">
              <div className={`h-8 rounded bg-white/10 border border-sky-400/30 flex items-center justify-center text-[10px] font-mono text-sky-200 transition-all duration-500 ${cycleState === 1 ? 'scale-105 bg-[#00D1FF]/20 border-[#00D1FF]' : ''}`}>
                Hero UI
              </div>
              <div className={`h-8 rounded bg-white/10 border border-sky-400/30 flex items-center justify-center text-[10px] font-mono text-sky-200 transition-all duration-500 ${cycleState === 1 ? 'scale-105 bg-[#3BA9FF]/25 border-sky-300' : ''}`}>
                AI Chat
              </div>
              <div className={`h-8 rounded bg-white/10 border border-sky-400/30 flex items-center justify-center text-[10px] font-mono text-sky-200 transition-all duration-500 ${cycleState === 1 ? 'scale-105 bg-[#00D1FF]/20 border-[#00D1FF]' : ''}`}>
                Lead Flow
              </div>
            </div>
          </div>
        </div>
      );

    case 'ai-agents':
      return (
        <div className="my-5 h-[120px] rounded-xl bg-[#04142E] border border-sky-300/40 p-3.5 shadow-md overflow-hidden relative group-hover:border-[#00D1FF] group-hover:shadow-[0_8px_20px_rgba(0,209,255,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-300">
            <span className="text-[#00D1FF] font-semibold">Autonomous Node AI</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Active
            </span>
          </div>

          <div className="flex items-center justify-between px-2 py-1">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-[10px] font-mono text-[#00D1FF]">
              IN
            </div>
            {/* Pulsing travel line */}
            <div className="flex-1 mx-2 h-1 bg-white/10 rounded-full relative overflow-hidden">
              <div className="absolute inset-y-0 bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] w-1/2 rounded-full animate-workflow-travel" />
            </div>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[10px] font-mono text-emerald-300">
              OUT
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-300 text-center bg-white/5 py-1 rounded border border-white/10">
            Client query processed & routed successfully
          </div>
        </div>
      );

    case 'ai-call-agents':
    case 'ai-voice-agents':
      return (
        <div className="my-5 h-[120px] rounded-xl bg-[#04142E] border border-sky-300/40 p-3.5 shadow-md overflow-hidden relative group-hover:border-[#00D1FF] group-hover:shadow-[0_8px_20px_rgba(0,209,255,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-300">
            <span className="text-[#00D1FF] font-semibold">AI Call Assistant</span>
            <span className="text-sky-300 font-mono">24/7 Voice</span>
          </div>

          <div className="py-2 flex items-center justify-center gap-1.5 h-12">
            <span className="w-1.5 bg-[#00D1FF] rounded-full animate-wave-1 h-4" />
            <span className="w-1.5 bg-[#3BA9FF] rounded-full animate-wave-2 h-10" />
            <span className="w-1.5 bg-[#0284C7] rounded-full animate-wave-3 h-6" />
            <span className="w-1.5 bg-[#00D1FF] rounded-full animate-wave-4 h-12" />
            <span className="w-1.5 bg-[#3BA9FF] rounded-full animate-wave-5 h-8" />
            <span className="w-1.5 bg-[#00D1FF] rounded-full animate-wave-6 h-5" />
          </div>

          <div className="text-[10px] font-mono text-slate-300 text-center">
            Answering inbound calls & booking slots
          </div>
        </div>
      );

    case 'seo':
    case 'seo-optimization':
      return (
        <div className="my-5 h-[120px] rounded-xl bg-[#04142E] border border-sky-300/40 p-3.5 shadow-md overflow-hidden relative group-hover:border-[#00D1FF] group-hover:shadow-[0_8px_20px_rgba(0,209,255,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-300">
            <span className="text-[#00D1FF] font-semibold">Search Ranking Boost</span>
            <span className="text-emerald-400 font-mono">Top Results</span>
          </div>

          <div className="space-y-2 py-0.5">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-[#0284C7] to-[#00D1FF] rounded-full transition-all duration-1000 ${cycleState === 1 ? 'w-full' : 'w-3/5'}`} />
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-[#3BA9FF] to-[#00D1FF] rounded-full transition-all duration-1000 ${cycleState === 1 ? 'w-11/12' : 'w-2/4'}`} />
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-300">
            <span>AI Search Index</span>
            <span className="text-[#00D1FF]">Verified Discovery</span>
          </div>
        </div>
      );

    case 'ai-video':
    case 'ai-video-creation':
      return (
        <div className="my-5 h-[120px] rounded-xl bg-[#04142E] border border-sky-300/40 p-3.5 shadow-md overflow-hidden relative group-hover:border-[#00D1FF] group-hover:shadow-[0_8px_20px_rgba(0,209,255,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono text-slate-300">
            <span className="text-[#00D1FF] font-semibold">AI Video Production</span>
            <span className="text-sky-300 font-mono">Rendering</span>
          </div>

          <div className="py-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[#00D1FF]/25 border border-[#00D1FF] flex items-center justify-center text-[#00D1FF] shadow-[0_0_10px_#00D1FF]">
              ▶
            </div>
          </div>

          <div className="space-y-1">
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] rounded-full transition-all duration-1000 ${cycleState === 1 ? 'w-full' : 'w-1/2'}`} />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-400">
              <span>0:00</span>
              <span className="text-[#00D1FF]">Marketing Reel</span>
              <span>0:30</span>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
