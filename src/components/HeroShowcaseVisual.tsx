import React from 'react';
import { Globe, MessageSquare, Workflow, ArrowRight, CheckCircle2, Send, Clock, Sparkles } from 'lucide-react';

export const HeroShowcaseVisual: React.FC = () => {
  return (
    <div
      id="hero-showcase-visual"
      className="relative w-full max-w-[560px] mx-auto select-none"
    >
      {/* Subtle Ambient Backlight - restrained */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/10 via-transparent to-cyan-500/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl bg-[#090d16]/95 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-white font-medium">TITAN WORK PREVIEW</span>
          </div>
          <span className="text-slate-500">Demo Interface · Illustrative Preview</span>
        </div>

        {/* 1. Website Preview Card */}
        <div className="rounded-xl bg-[#0e1424] border border-white/[0.06] overflow-hidden">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-white/[0.03] border-b border-white/[0.04] text-[10px] font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/70" />
              <span className="w-2 h-2 rounded-full bg-amber-500/70" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
            </div>
            <div className="px-2 py-0.5 rounded bg-black/40 text-slate-400 text-[10px] flex items-center gap-1 truncate max-w-[180px]">
              <Globe className="w-2.5 h-2.5 text-blue-400 shrink-0" />
              <span>yourbusiness.com</span>
            </div>
            <span className="text-[9px] text-slate-500 hidden sm:inline">Website Demo</span>
          </div>

          {/* Mock Website Body */}
          <div className="p-3.5 sm:p-4 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white tracking-wide">METROPOLIS REALTY</span>
              <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                Book Consultation
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-sm sm:text-base font-bold text-white leading-tight">
                Modern Commercial Spaces Built for Growth
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-2">
                Explore curated property portfolios and schedule private viewings directly online.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-slate-300">
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <div className="font-semibold text-white">Central Heights</div>
                <div className="text-slate-400 text-[9px]">Financial District</div>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                <div className="font-semibold text-white">Oasis Plaza</div>
                <div className="text-slate-400 text-[9px]">Retail & Offices</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sample Customer Conversation */}
        <div className="rounded-xl bg-[#0c1220] border border-white/[0.06] p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.04] pb-2">
            <div className="flex items-center gap-1.5 font-medium text-slate-200">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI Chat Assistant Demo</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Available 24/7</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Customer Message */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-blue-600 px-3 py-2 text-white shadow-sm">
                <p className="text-[11px] leading-relaxed">
                  Hi, do you have availability this Thursday for a property viewing?
                </p>
              </div>
            </div>

            {/* Assistant Reply */}
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] px-3 py-2 text-slate-200 shadow-sm">
                <p className="text-[11px] leading-relaxed">
                  Yes, we have private slots open on Thursday at 2:00 PM and 4:30 PM. Would you like me to reserve one for you?
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono text-slate-400">
                  <Clock className="w-2.5 h-2.5 text-blue-400" />
                  <span>Responded in under 2 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Simple Automation Workflow */}
        <div className="rounded-xl bg-[#0b101c] border border-white/[0.06] p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/[0.04] pb-2">
            <div className="flex items-center gap-1.5 font-medium text-slate-200">
              <Workflow className="w-3.5 h-3.5 text-blue-400" />
              <span>Connected Business Workflow Demo</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400">Automated</span>
          </div>

          {/* 3 Step Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px]">
            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start gap-2">
              <div className="w-5 h-5 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-[9px]">
                1
              </div>
              <div>
                <div className="font-semibold text-white">New Enquiry</div>
                <div className="text-slate-400 text-[9px]">Customer submits details</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start gap-2">
              <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-[9px]">
                2
              </div>
              <div>
                <div className="font-semibold text-white">Instant Alert</div>
                <div className="text-slate-400 text-[9px]">WhatsApp alert to team</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-start gap-2">
              <div className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-[9px]">
                3
              </div>
              <div>
                <div className="font-semibold text-white">Record Saved</div>
                <div className="text-slate-400 text-[9px]">Synced to CRM/Sheet</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
