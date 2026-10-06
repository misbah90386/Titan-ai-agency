import React from 'react';
import {
  Bot,
  PhoneCall,
  Globe,
  Users,
  Workflow,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { TitanIcon } from '../TitanLogo';

export const TitanHeroDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      {/* Soft Blurred Light Blue Ambient Glow behind dashboard */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#00D1FF]/15 sm:bg-[#3BA9FF]/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-sky-100/60 rounded-full blur-[70px] pointer-events-none" />

      {/* Main Glass Dashboard Card with gentle floating animation */}
      <div className="relative bg-white/90 backdrop-blur-xl border border-sky-100/90 shadow-[0_20px_50px_rgba(2,132,199,0.12),0_1px_3px_rgba(0,0,0,0.04)] rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 animate-float-slow">
        
        {/* 1. Top OS Window Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#071A33] tracking-wide">
              <TitanIcon className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>TITAN OS</span>
              <span className="text-[10px] text-slate-400 font-normal">v4.2</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono font-medium text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE SYSTEM
            </span>
          </div>
        </div>

        {/* 2. Status Modules Grid (The 5 Required Modules) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 py-4">
          
          {/* Module 1: AI Agent -> ● Active */}
          <div className="p-3 rounded-xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200/80 transition-all duration-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center text-[#0284C7]">
                <Bot className="w-4 h-4" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>
            <div className="text-xs font-bold text-[#071A33]">AI Agent</div>
            <div className="text-[10.5px] text-slate-500 truncate">Smart triage & qualify</div>
          </div>

          {/* Module 2: AI Voice Agent -> ● Ready */}
          <div className="p-3 rounded-xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200/80 transition-all duration-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-sky-100/70 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                Ready
              </span>
            </div>
            <div className="text-xs font-bold text-[#071A33]">AI Voice Agent</div>
            {/* Animated mini audio waveform */}
            <div className="flex items-center gap-1 h-3 mt-1">
              <span className="w-1 bg-[#00D1FF] rounded-full animate-wave-1 h-2" />
              <span className="w-1 bg-[#3BA9FF] rounded-full animate-wave-2 h-3" />
              <span className="w-1 bg-[#0284C7] rounded-full animate-wave-3 h-2" />
              <span className="w-1 bg-[#00D1FF] rounded-full animate-wave-4 h-2.5" />
              <span className="text-[9.5px] font-mono text-slate-400 pl-1">24/7 Voice</span>
            </div>
          </div>

          {/* Module 3: Website -> ● Online */}
          <div className="p-3 rounded-xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200/80 transition-all duration-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100/60 border border-emerald-200/70 flex items-center justify-center text-emerald-700">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Online
              </span>
            </div>
            <div className="text-xs font-bold text-[#071A33]">Website</div>
            <div className="text-[10.5px] text-slate-500 truncate">99.9% Uptime • Global CDN</div>
          </div>

          {/* Module 4: Leads -> ● Captured */}
          <div className="p-3 rounded-xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200/80 transition-all duration-200">
            <div className="flex items-center justify-between mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-[#00D1FF]/15 border border-[#00D1FF]/30 flex items-center justify-center text-[#0284C7]">
                <Users className="w-3.5 h-3.5" />
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#0284C7] bg-sky-50 px-1.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-pulse" />
                Captured
              </span>
            </div>
            <div className="text-xs font-bold text-[#071A33]">Leads</div>
            <div className="text-[10.5px] font-mono font-semibold text-emerald-600 truncate">+148 Inquiries Qualified</div>
          </div>

          {/* Module 5: Automation -> ● Running */}
          <div className="p-3 rounded-xl bg-slate-50/70 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200/80 transition-all duration-200 col-span-2 sm:col-span-2">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-sky-100/70 border border-sky-200 flex items-center justify-center text-[#0284C7]">
                  <Workflow className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#071A33]">Automation</div>
                  <div className="text-[10.5px] text-slate-500">Auto-routes to WhatsApp & CRM</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                Running
              </span>
            </div>
          </div>

        </div>

        {/* 3. Small Analytics Graph & Connected AI Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
          
          {/* Analytics Graph (7 cols on desktop) */}
          <div className="sm:col-span-7 p-3 rounded-xl bg-slate-50/60 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#071A33]">
                <Activity className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Conversion Velocity</span>
              </div>
              <span className="text-[10.5px] font-mono font-bold text-emerald-600 flex items-center">
                +312% <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            
            {/* SVG Minimalist Analytics Chart */}
            <div className="relative h-18 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 240 70" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradLight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3BA9FF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference lines */}
                <line x1="0" y1="20" x2="240" y2="20" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
                <line x1="0" y1="45" x2="240" y2="45" stroke="#E2E8F0" strokeDasharray="3 3" strokeWidth="1" />
                
                {/* Filled area */}
                <path
                  d="M 0 55 Q 40 50, 70 38 T 130 32 T 180 18 T 240 10 L 240 70 L 0 70 Z"
                  fill="url(#chartGradLight)"
                />
                {/* Line path */}
                <path
                  d="M 0 55 Q 40 50, 70 38 T 130 32 T 180 18 T 240 10"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Glowing Nodes on the line */}
                <circle cx="70" cy="38" r="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <circle cx="130" cy="32" r="3" fill="#FFFFFF" stroke="#00D1FF" strokeWidth="2" />
                <circle cx="180" cy="18" r="3" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2" />
                <circle cx="240" cy="10" r="4" fill="#00D1FF" stroke="#FFFFFF" strokeWidth="2" />
              </svg>
            </div>
            
            <div className="flex items-center justify-between text-[9.5px] font-mono text-slate-400 pt-1">
              <span>Day 1</span>
              <span>Automated Pipeline Active</span>
              <span className="text-[#0284C7] font-semibold">Scale</span>
            </div>
          </div>

          {/* Connected AI Architecture Nodes (5 cols on desktop) */}
          <div className="sm:col-span-5 p-3 rounded-xl bg-slate-50/60 border border-slate-100 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-[#071A33]">Connected AI Nodes</span>
              <span className="w-2 h-2 rounded-full bg-[#00D1FF] animate-ping" />
            </div>

            {/* Architecture Node Map with Moving Connection Lines */}
            <div className="relative py-1">
              {/* SVG connection lines with light beam animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 160 50" fill="none">
                <path d="M 24 25 L 75 25 L 135 25" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 24 25 L 75 25 L 135 25" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="6 12" className="animate-network-flow" />
              </svg>

              <div className="relative z-10 flex items-center justify-between">
                {/* Node 1: Web */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700">
                    <Globe className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 pt-1">Web</span>
                </div>

                {/* Node 2: Titan Core */}
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0284C7] to-[#00D1FF] shadow-sm flex items-center justify-center text-white ring-2 ring-sky-100">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-[#0284C7] pt-1">AI Core</span>
                </div>

                {/* Node 3: CRM / WhatsApp */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 pt-1">CRM</span>
                </div>
              </div>
            </div>

            {/* Minimal Status Indicators */}
            <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Latency: <strong className="text-[#071A33]">24ms</strong></span>
              <span className="text-emerald-600 font-semibold">100% Synced</span>
            </div>
          </div>

        </div>

        {/* 4. Bottom Micro Status Indicators */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Enterprise Security • SOC2 Compliant</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>Riyadh GCC Edge</span>
          </div>
        </div>

      </div>
    </div>
  );
};
