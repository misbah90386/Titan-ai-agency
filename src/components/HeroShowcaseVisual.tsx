import React from 'react';
import { Globe, MessageSquare, Workflow, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { TitanIcon } from './TitanLogo';

export const HeroShowcaseVisual: React.FC = () => {
  return (
    <div
      id="hero-showcase-visual"
      className="relative w-full max-w-[560px] mx-auto select-none"
    >
      {/* Subtle Ambient Backlight */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#00D1FF]/15 via-transparent to-[#3BA9FF]/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="card-titan-dark relative bg-[#04142E]/95 border border-[#00D1FF]/25 shadow-[0_20px_50px_rgba(4,20,46,0.8)] p-4 sm:p-5 space-y-4 backdrop-blur-md">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-[11px] font-mono text-[#8FA0BA]">
          <div className="flex items-center gap-2">
            <TitanIcon className="w-5 h-5 shrink-0" />
            <span className="text-white font-bold tracking-wider">TITAN WORK PREVIEW</span>
          </div>
          <span className="text-[#8FA0BA] text-[10px]">Enterprise Digital Solutions</span>
        </div>

        {/* 1. Website Preview Card */}
        <div className="rounded-xl bg-[#0B1F4B] border border-white/[0.08] overflow-hidden">
          {/* Mock Browser Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-black/25 border-b border-white/[0.06] text-[10px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-2.5 py-0.5 rounded bg-black/40 text-slate-200 text-[10px] flex items-center gap-1.5 truncate max-w-[190px]">
              <Globe className="w-2.5 h-2.5 text-[#00D1FF] shrink-0" />
              <span>yourbusiness.com</span>
            </div>
            <span className="text-[9px] text-[#00D1FF] font-semibold hidden sm:inline">Active Production</span>
          </div>

          {/* Mock Website Body */}
          <div className="p-3.5 sm:p-4 space-y-2.5 text-white">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white tracking-wide">ENTERPRISE PORTFOLIO</span>
              <span className="text-[10px] font-bold text-[#04142E] bg-[#00D1FF] px-2 py-0.5 rounded">
                Instant Inquiries
              </span>
            </div>
            <div className="space-y-1">
              <div className="text-sm sm:text-base font-bold text-white leading-tight">
                High-Performance Web Architecture
              </div>
              <p className="text-[11px] sm:text-xs text-[#8FA0BA] line-clamp-2">
                Engineered for lightning-fast responsiveness, SEO rankings, and integrated WhatsApp qualification workflows.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
              <div className="p-2 rounded bg-white/[0.04] border border-white/[0.06]">
                <div className="font-semibold text-white">Direct WhatsApp Sync</div>
                <div className="text-[#8FA0BA] text-[9px]">Zero enquiry drop-off</div>
              </div>
              <div className="p-2 rounded bg-white/[0.04] border border-white/[0.06]">
                <div className="font-semibold text-white">Clean Custom Code</div>
                <div className="text-[#8FA0BA] text-[9px]">100% Client IP ownership</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Sample Customer Conversation */}
        <div className="rounded-xl bg-[#071A33] border border-white/[0.08] p-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] text-[#8FA0BA] border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <MessageSquare className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>AI Chatbot & Voice Assistant Demo</span>
            </div>
            <span className="text-[10px] font-mono text-[#00D1FF] font-medium">Available 24/7/365</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Customer Message */}
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] px-3 py-2 text-[#04142E] font-medium shadow-sm">
                <p className="text-[11px] leading-relaxed">
                  Hi, can we schedule a consultation to discuss website development and AI automation for our firm?
                </p>
              </div>
            </div>

            {/* Assistant Reply */}
            <div className="flex justify-start">
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-[#0B1F4B] border border-[#00D1FF]/20 px-3 py-2 text-white shadow-sm">
                <p className="text-[11px] leading-relaxed">
                  Certainly. We have consultation slots open tomorrow at 11:00 AM and 3:00 PM. Shall I reserve a slot and notify your team?
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-[9px] font-mono text-[#8FA0BA]">
                  <Clock className="w-2.5 h-2.5 text-[#00D1FF]" />
                  <span>Sub-second automated qualification</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Workflow Automation Pipeline */}
        <div className="rounded-xl bg-[#071A33] border border-white/[0.08] p-3.5 space-y-2">
          <div className="flex items-center justify-between text-[11px] text-[#8FA0BA] border-b border-white/[0.06] pb-2">
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Workflow className="w-3.5 h-3.5 text-[#3BA9FF]" />
              <span>Automated Backend Operations</span>
            </div>
            <span className="text-[10px] font-mono text-[#3BA9FF]">Triggered Instantly</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="text-[9px] font-mono text-[#00D1FF] font-bold">01 INQUIRY</div>
              <div className="text-[11px] text-white font-medium">Customer Reaches Out</div>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="text-[9px] font-mono text-[#3BA9FF] font-bold">02 AI QUALIFY</div>
              <div className="text-[11px] text-white font-medium">Data Synced to CRM</div>
            </div>
            <div className="p-2 rounded bg-white/[0.03] border border-white/[0.06] space-y-1">
              <div className="text-[9px] font-mono text-emerald-400 font-bold">03 ROUTE</div>
              <div className="text-[11px] text-white font-medium">Team Alerted</div>
            </div>
          </div>
        </div>

        {/* Bottom Verification Note */}
        <div className="flex items-center justify-between text-[10px] font-mono text-[#8FA0BA] pt-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" />
            <span>Built by Saad Naeem · TITAN AI AGENCY</span>
          </div>
          <span className="text-[#3BA9FF]">Tailored Architecture</span>
        </div>

      </div>
    </div>
  );
};
