import React from 'react';
import { Globe, MessageSquare, Workflow, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { TitanIcon } from './TitanLogo';
import { TiltCard } from './motion/MotionComponents';

export const HeroShowcaseVisual: React.FC = () => {
  return (
    <TiltCard
      maxTilt={2}
      className="relative w-full max-w-[560px] mx-auto select-none"
    >
      <div id="hero-showcase-visual" className="relative w-full animate-float-slow">
        {/* Subtle Ambient Backlight */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#00D1FF]/15 via-transparent to-[#3BA9FF]/15 rounded-3xl blur-2xl pointer-events-none" />

        {/* Main Container Card - High-clarity deep navy frame with crisp border */}
        <div className="card-titan-dark relative bg-[#031127]/98 border border-[#00D1FF]/30 shadow-[0_20px_60px_rgba(2,8,20,0.85)] p-4 sm:p-5 space-y-3.5 backdrop-blur-md">
          
          {/* Top Header Label */}
          <div className="flex items-center justify-between border-b border-white/[0.12] pb-2.5 text-[11px] font-mono text-[#A0B3CC]">
            <div className="flex items-center gap-2">
              <TitanIcon className="w-5 h-5 shrink-0" />
              <span className="text-white font-bold tracking-wider">TITAN WORK PREVIEW</span>
            </div>
            
            {/* Live Performance Mini-Sparkline / Chart Indicator */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[9.5px]">
                <span className="text-[#8FA0BA]">SYSTEM HEALTH</span>
                <div className="flex items-end gap-0.5 h-3.5 w-6 pb-0.5">
                  <span className="w-1 bg-[#00D1FF] rounded-t-sm animate-bar-1" />
                  <span className="w-1 bg-[#3BA9FF] rounded-t-sm animate-bar-2" />
                  <span className="w-1 bg-[#00D1FF] rounded-t-sm animate-bar-3" />
                  <span className="w-1 bg-[#3BA9FF] rounded-t-sm animate-bar-4" />
                  <span className="w-1 bg-[#00D1FF] rounded-t-sm animate-bar-5" />
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF] animate-live-dot" />
                <span className="text-[#00D1FF] text-[10px] font-semibold tracking-wide">Enterprise Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* 1. Website Preview Card */}
          <div className="rounded-xl bg-[#07193B] border border-[#00D1FF]/25 overflow-hidden shadow-sm transition-all duration-300 hover:border-[#00D1FF]/45">
            {/* Mock Browser Header */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#020B1A] border-b border-white/[0.08] text-[10px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div className="px-2.5 py-0.5 rounded bg-black/60 border border-white/[0.08] text-slate-100 text-[10px] flex items-center gap-1.5 truncate max-w-[190px]">
                <Globe className="w-2.5 h-2.5 text-[#00D1FF] shrink-0" />
                <span className="font-medium">yourbusiness.com</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#00D1FF] font-bold hidden sm:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
                <span>Active Production</span>
              </div>
            </div>

            {/* Mock Website Body */}
            <div className="p-3.5 sm:p-4 space-y-2.5 text-white">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-white tracking-wider flex items-center gap-1.5">
                  <span>ENTERPRISE PORTFOLIO</span>
                </span>
                <span className="text-[10px] font-bold text-[#031127] bg-[#00D1FF] px-2 py-0.5 rounded font-mono shadow-sm flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Instant Inquiries</span>
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-sm sm:text-base font-bold text-white leading-tight">
                  High-Performance Web Architecture
                </div>
                <p className="text-[11.5px] sm:text-xs text-[#C2D4EC] leading-relaxed">
                  Engineered for lightning-fast responsiveness, SEO rankings, and integrated WhatsApp qualification workflows.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                <div className="p-2 rounded-lg bg-[#030F24]/80 border border-white/[0.1] hover:border-[#00D1FF]/40 transition-colors">
                  <div className="font-bold text-white text-[11px] flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#00D1FF]" />
                    <span>Direct WhatsApp Sync</span>
                  </div>
                  <div className="text-[#A5B9D4] text-[9.5px]">Zero enquiry drop-off</div>
                </div>
                <div className="p-2 rounded-lg bg-[#030F24]/80 border border-white/[0.1] hover:border-[#3BA9FF]/40 transition-colors">
                  <div className="font-bold text-white text-[11px] flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-[#3BA9FF]" />
                    <span>Clean Custom Code</span>
                  </div>
                  <div className="text-[#A5B9D4] text-[9.5px]">100% Client IP ownership</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Sample Customer Conversation */}
          <div className="rounded-xl bg-[#06152D] border border-[#00D1FF]/25 p-3.5 space-y-2.5 shadow-sm transition-all duration-300 hover:border-[#00D1FF]/45">
            <div className="flex items-center justify-between text-[11px] text-[#A0B3CC] border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <MessageSquare className="w-3.5 h-3.5 text-[#00D1FF]" />
                <span>AI Chatbot & Voice Assistant Demo</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00D1FF] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-live-dot" />
                <span>24/7/365 Active</span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              {/* Customer Message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] px-3.5 py-2 text-[#020F24] font-semibold shadow-sm transition-transform duration-200 hover:scale-[1.01]">
                  <p className="text-[11.5px] leading-relaxed">
                    Hi, can we schedule a consultation to discuss website development and AI automation for our firm?
                  </p>
                </div>
              </div>

              {/* Assistant Reply */}
              <div className="flex justify-start">
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#0B2046] border border-[#00D1FF]/30 px-3.5 py-2 text-white shadow-sm transition-transform duration-200 hover:scale-[1.01]">
                  <p className="text-[11.5px] leading-relaxed text-[#F0F5FD]">
                    Certainly. We have consultation slots open tomorrow at 11:00 AM and 3:00 PM. Shall I reserve a slot and notify your team?
                  </p>
                  <div className="mt-1.5 flex items-center justify-between text-[9.5px] font-mono text-[#A5B9D4]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-2.5 h-2.5 text-[#00D1FF]" />
                      <span>Sub-second automated qualification</span>
                    </div>
                    <div className="flex items-center gap-1 text-[#00D1FF]">
                      <span className="w-1 h-1 rounded-full bg-[#00D1FF] animate-pulse" />
                      <span className="text-[9px]">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Workflow Automation Pipeline */}
          <div className="rounded-xl bg-[#06152D] border border-[#00D1FF]/25 p-3.5 space-y-2 shadow-sm transition-all duration-300 hover:border-[#00D1FF]/45">
            <div className="flex items-center justify-between text-[11px] text-[#A0B3CC] border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Workflow className="w-3.5 h-3.5 text-[#3BA9FF]" />
                <span>Automated Backend Operations</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#3BA9FF] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3BA9FF] animate-node-pulse" />
                <span>Triggered Instantly</span>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div className="p-2 rounded-lg bg-[#030F24]/90 border border-white/[0.08] space-y-1 hover:border-[#00D1FF]/40 transition-colors">
                <div className="text-[9.5px] font-mono text-[#00D1FF] font-bold">01 INQUIRY</div>
                <div className="text-[11px] text-white font-bold leading-tight">Customer Reaches Out</div>
              </div>
              <div className="p-2 rounded-lg bg-[#030F24]/90 border border-white/[0.08] space-y-1 hover:border-[#3BA9FF]/40 transition-colors">
                <div className="text-[9.5px] font-mono text-[#3BA9FF] font-bold">02 AI QUALIFY</div>
                <div className="text-[11px] text-white font-bold leading-tight">Data Synced to CRM</div>
              </div>
              <div className="p-2 rounded-lg bg-[#030F24]/90 border border-white/[0.08] space-y-1 hover:border-emerald-400/40 transition-colors">
                <div className="text-[9.5px] font-mono text-emerald-400 font-bold">03 ROUTE</div>
                <div className="text-[11px] text-white font-bold leading-tight">Team Alerted</div>
              </div>
            </div>
            
            {/* Subtle Animated Data Movement Track */}
            <div className="pt-0.5 flex items-center justify-between text-[9px] font-mono text-[#7E95B3] px-1">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                Lead Event Ingested
              </span>
              <span className="text-[#00D1FF]">Pipeline Sync Active</span>
            </div>
          </div>

          {/* Bottom Verification Note */}
          <div className="flex items-center justify-between text-[10.5px] font-mono text-[#A0B3CC] pt-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Built by Saad Naeem · TITAN AI AGENCY</span>
            </div>
            <span className="text-[#00D1FF] font-semibold">Tailored Architecture</span>
          </div>

        </div>
      </div>
    </TiltCard>
  );
};

