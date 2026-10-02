import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Bot,
  PhoneCall,
  Search,
  Video,
  ArrowRight,
  MessageCircle,
  Play,
  Volume2,
  CheckCircle2,
  Sparkles,
  PhoneForwarded,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  Clock,
  Shield,
  Send
} from 'lucide-react';
import { TitanIcon } from '../TitanLogo';
import { FadeIn } from '../motion/MotionComponents';

export const TitanInActionSection: React.FC = () => {
  // Card 2 Interactive AI Agent State
  const [activeChatMessage, setActiveChatMessage] = useState<number>(0);
  const chatDialogue = [
    { sender: 'customer', text: 'Do you provide website design for real estate companies?' },
    { sender: 'ai', text: 'Yes. TITAN can create a professional real estate website with property listings, lead capture, WhatsApp integration and AI-powered customer assistance.' },
    { sender: 'customer', text: 'Can I request a consultation?' },
    { sender: 'ai', text: 'Absolutely. I can help you start your project or connect you with the TITAN team.' }
  ];

  // Card 4 SEO active tab
  const [activeSeoTab, setActiveSeoTab] = useState<'tech' | 'visibility' | 'schema'>('visibility');

  return (
    <section id="see-titan-in-action" className="relative py-20 sm:py-28 bg-[#04142E] text-white border-t border-[#00D1FF]/20 overflow-hidden">
      {/* Background Ambience & Digital Grid */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00D1FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>Interactive Technology Showcases</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              SEE TITAN IN ACTION
            </h2>

            <p className="text-base sm:text-lg text-[#8FA0BA] leading-relaxed font-normal">
              Explore how TITAN uses websites, AI, search technology, voice systems and video to solve real business problems.
            </p>
          </div>
        </FadeIn>

        {/* 5 Premium Interactive Demo Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ========================================================= */}
          {/* CARD 1: AI-Powered Website (Col 7 on Desktop) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1} direction="up" distance={25}>
              <div className="group h-full rounded-3xl bg-gradient-to-b from-[#0B1F4B]/80 to-[#04142E]/90 border border-white/10 hover:border-[#00D1FF]/50 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,209,255,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] font-semibold">
                      <Globe className="w-3.5 h-3.5" />
                      <span>DEMO 01 · AI-POWERED WEBSITE</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8FA0BA]">Interactive Preview</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">
                    AI Website Experience
                  </h3>

                  <p className="text-sm text-[#8FA0BA] leading-relaxed mb-6">
                    See how TITAN creates modern business websites designed to build trust, capture leads and connect with intelligent tools.
                  </p>

                  {/* Browser Mockup */}
                  <div className="rounded-2xl bg-[#020B18] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-[#071731] border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      </div>
                      <div className="px-3 py-0.5 rounded-md bg-[#020B18]/70 border border-white/5 text-[10px] font-mono text-[#8FA0BA] max-w-[200px] truncate">
                        https://client-demo.titanaiagency.com
                      </div>
                      <div className="w-3 h-3" />
                    </div>

                    {/* Mock Website Canvas */}
                    <div className="p-5 sm:p-6 bg-gradient-to-b from-[#06152B] to-[#041022] space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="h-4 w-28 bg-[#00D1FF]/30 rounded" />
                        <div className="flex gap-2">
                          <span className="h-2 w-10 bg-white/20 rounded" />
                          <span className="h-2 w-10 bg-white/20 rounded" />
                          <span className="h-2 w-14 bg-[#00D1FF]/50 rounded" />
                        </div>
                      </div>

                      <div className="py-2 space-y-2">
                        <div className="h-6 w-3/4 bg-white/90 rounded font-display" />
                        <div className="h-3 w-5/6 bg-white/30 rounded" />
                        <div className="h-3 w-1/2 bg-white/20 rounded" />
                      </div>

                      {/* Mock Lead Capture & Chat Widget Callout */}
                      <div className="p-3 rounded-xl bg-white/[0.04] border border-[#00D1FF]/30 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-[#EAF7FF]">
                          <Bot className="w-4 h-4 text-[#00D1FF]" />
                          <span>AI Chatbot & WhatsApp Active</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Instant Lead Routing
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Labels */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      'Responsive Design',
                      'Lead Capture',
                      'AI Integration',
                      'WhatsApp',
                      'Booking',
                      'SEO Ready'
                    ].map((label, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-[#EAF7FF]"
                      >
                        ✓ {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services/website-design"
                    className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/link"
                  >
                    <span>VIEW WEBSITE DEMO</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-[#8FA0BA] font-mono hidden sm:inline">Built in React & Tailwind</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: Custom AI Agent (Col 5 on Desktop) */}
          {/* ========================================================= */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} direction="up" distance={25}>
              <div className="group h-full rounded-3xl bg-gradient-to-b from-[#0B1F4B]/80 to-[#04142E]/90 border border-white/10 hover:border-[#00D1FF]/50 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,209,255,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] font-semibold">
                      <Bot className="w-3.5 h-3.5" />
                      <span>DEMO 02 · CUSTOM AI AGENT</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#00D1FF]/15 text-[#00D1FF] border border-[#00D1FF]/30">
                      Interactive Demo
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">
                    Talk to a TITAN AI Agent
                  </h3>

                  <p className="text-sm text-[#8FA0BA] leading-relaxed mb-6">
                    Experience how a custom AI assistant can answer questions, understand business information and guide potential customers.
                  </p>

                  {/* Chatbox Simulation */}
                  <div className="rounded-2xl bg-[#020B18] border border-white/10 p-4 space-y-3 shadow-inner">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-[#EAF7FF]">TITAN Real Estate AI Agent</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8FA0BA]">24/7 Active</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      {chatDialogue.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] p-3 rounded-2xl ${
                              msg.sender === 'customer'
                                ? 'bg-[#0B1F4B] text-white border border-[#00D1FF]/30 rounded-tr-none'
                                : 'bg-white/[0.08] text-[#EAF7FF] border border-white/10 rounded-tl-none'
                            }`}
                          >
                            <span className="block text-[10px] font-mono uppercase text-[#00D1FF] mb-1 font-bold">
                              {msg.sender === 'customer' ? 'Customer' : 'TITAN AI Agent'}
                            </span>
                            <p className="leading-relaxed">{msg.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                      <div className="flex-1 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-[#8FA0BA] font-mono flex items-center justify-between">
                        <span>Ask: "Can I book a consultation?"</span>
                        <Send className="w-3.5 h-3.5 text-[#00D1FF]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services/ai-agents"
                    className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/link"
                  >
                    <span>TRY AI AGENT</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono text-emerald-400">Strict Factual Guardrails</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ========================================================= */}
          {/* CARD 3: AI Call Agent (Col 4 on Desktop) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.1} direction="up" distance={25}>
              <div className="group h-full rounded-3xl bg-gradient-to-b from-[#0B1F4B]/80 to-[#04142E]/90 border border-white/10 hover:border-[#00D1FF]/50 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,209,255,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] font-semibold">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>DEMO 03 · AI CALL AGENT</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Visual Showcase
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">
                    Hear an AI Call Agent
                  </h3>

                  <p className="text-sm text-[#8FA0BA] leading-relaxed mb-6">
                    See how an AI voice agent can assist with customer inquiries, qualification and appointment booking.
                  </p>

                  {/* Realistic Phone Call Interface */}
                  <div className="rounded-2xl bg-[#020B18] border border-white/10 p-5 space-y-4">
                    {/* Call Status Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                        <span className="text-xs font-mono font-bold text-white">Incoming Call · Connected</span>
                      </div>
                      <span className="text-xs font-mono text-[#00D1FF]">00:42</span>
                    </div>

                    {/* Audio Waveform Animation */}
                    <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-center gap-1.5 h-12">
                      <span className="w-1 bg-[#00D1FF] rounded-full h-3 animate-pulse" />
                      <span className="w-1 bg-[#00D1FF] rounded-full h-6 animate-pulse" style={{ animationDelay: '0.1s' }} />
                      <span className="w-1 bg-[#00D1FF] rounded-full h-9 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1 bg-[#3BA9FF] rounded-full h-5 animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <span className="w-1 bg-[#00D1FF] rounded-full h-8 animate-pulse" style={{ animationDelay: '0.15s' }} />
                      <span className="w-1 bg-[#00D1FF] rounded-full h-4 animate-pulse" style={{ animationDelay: '0.25s' }} />
                      <span className="w-1 bg-[#3BA9FF] rounded-full h-7 animate-pulse" style={{ animationDelay: '0.35s' }} />
                    </div>

                    {/* Dialogue Scenario */}
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/5">
                        <span className="text-[10px] font-mono text-[#8FA0BA] block mb-0.5">Caller Request:</span>
                        <p className="text-white italic">&ldquo;I want to book an appointment for tomorrow.&rdquo;</p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0B1F4B] border border-[#00D1FF]/30">
                        <span className="text-[10px] font-mono text-[#00D1FF] block mb-0.5">AI Voice Response:</span>
                        <p className="text-[#EAF7FF]">&ldquo;I can help with that. What time works best for you?&rdquo;</p>
                      </div>
                    </div>

                    {/* Human Handoff Option */}
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#8FA0BA]">
                      <div className="flex items-center gap-1.5">
                        <PhoneForwarded className="w-3.5 h-3.5 text-[#00D1FF]" />
                        <span>Human handoff available anytime</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    disabled
                    className="px-5 py-3 rounded-xl bg-white/[0.06] text-[#8FA0BA] border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-not-allowed"
                    title="Audio demonstration is in production"
                  >
                    <Volume2 className="w-4 h-4 text-[#8FA0BA]" />
                    <span>DEMO COMING SOON</span>
                  </button>

                  <Link
                    to="/services/ai-call-agents"
                    className="text-xs text-[#00D1FF] hover:underline font-mono"
                  >
                    View Specs →
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ========================================================= */}
          {/* CARD 4: SEO & AI Search (Col 4 on Desktop) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.2} direction="up" distance={25}>
              <div className="group h-full rounded-3xl bg-gradient-to-b from-[#0B1F4B]/80 to-[#04142E]/90 border border-white/10 hover:border-[#00D1FF]/50 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,209,255,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] font-semibold">
                      <Search className="w-3.5 h-3.5" />
                      <span>DEMO 04 · SEO & AI SEARCH</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Audit Dashboard</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">
                    Grow Your Search Visibility
                  </h3>

                  <p className="text-sm text-[#8FA0BA] leading-relaxed mb-6">
                    Show how TITAN improves the technical and content foundations that help businesses become easier to discover online.
                  </p>

                  {/* Clean SEO Dashboard-Style Preview */}
                  <div className="rounded-2xl bg-[#020B18] border border-white/10 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-[#00D1FF]" />
                        <span className="text-xs font-mono font-bold text-white">Search Health & Readiness</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">Score: 98/100</span>
                    </div>

                    {/* Progress indicators */}
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-[#8FA0BA]">Technical & Core Web Vitals</span>
                          <span className="text-white font-bold">100%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#00D1FF] rounded-full w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-[#8FA0BA]">Structured Data & Schema.org</span>
                          <span className="text-white font-bold">Verified</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full w-[96%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-mono mb-1">
                          <span className="text-[#8FA0BA]">AI Search Optimization (GEO)</span>
                          <span className="text-white font-bold">Active</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-[#3BA9FF] rounded-full w-[92%]" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono text-[#8FA0BA]">
                      <span className="px-2 py-1 rounded bg-white/[0.04]">✓ Page Optimization</span>
                      <span className="px-2 py-1 rounded bg-white/[0.04]">✓ Local Search Map</span>
                      <span className="px-2 py-1 rounded bg-white/[0.04]">✓ Content Strategy</span>
                      <span className="px-2 py-1 rounded bg-white/[0.04]">✓ Search Console</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services/seo"
                    className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/link"
                  >
                    <span>EXPLORE SEO</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[11px] font-mono text-[#8FA0BA]">No False #1 Claims</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ========================================================= */}
          {/* CARD 5: AI Video Creation (Col 4 on Desktop) */}
          {/* ========================================================= */}
          <div className="lg:col-span-4">
            <FadeIn delay={0.3} direction="up" distance={25}>
              <div className="group h-full rounded-3xl bg-gradient-to-b from-[#0B1F4B]/80 to-[#04142E]/90 border border-white/10 hover:border-[#00D1FF]/50 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-[0_16px_40px_rgba(0,209,255,0.18)] hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] font-semibold">
                      <Video className="w-3.5 h-3.5" />
                      <span>DEMO 05 · AI VIDEO CREATION</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8FA0BA]">Marketing Assets</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00D1FF] transition-colors">
                    AI Video for Business
                  </h3>

                  <p className="text-sm text-[#8FA0BA] leading-relaxed mb-6">
                    Professional AI-assisted video content for products, services, social media and digital campaigns.
                  </p>

                  {/* Cinematic Video Preview Card */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#020B18] aspect-video flex flex-col justify-between p-4 group/video">
                    {/* Background visual texture */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#04142E] via-[#0B1F4B] to-[#00D1FF]/20 opacity-80" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/50 text-[#00D1FF] border border-[#00D1FF]/30">
                        1080p FHD · 9:16 & 16:9
                      </span>
                      <span className="text-[10px] font-mono text-white/70">Studio Render</span>
                    </div>

                    <div className="relative z-10 text-center my-auto">
                      <div className="w-12 h-12 rounded-full bg-[#00D1FF]/20 border border-[#00D1FF] text-[#00D1FF] flex items-center justify-center mx-auto mb-2 shadow-[0_0_20px_rgba(0,209,255,0.4)] group-hover/video:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                      <span className="text-xs font-mono text-white font-bold block">
                        Promotional Reel Preview
                      </span>
                    </div>

                    <div className="relative z-10 text-[10px] font-mono text-[#8FA0BA] flex justify-between">
                      <span>Neural Voiceover</span>
                      <span>Synced Captions</span>
                    </div>
                  </div>

                  {/* Included Formats */}
                  <div className="mt-5 grid grid-cols-2 gap-1.5 text-xs text-[#CBD5E1]">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" /> Promotional</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" /> Product Demos</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" /> Service Explainers</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#00D1FF]" /> Social Reels</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to="/services/ai-video-creation"
                    className="btn-titan-primary inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider group/link"
                  >
                    <span>WATCH VIDEO DEMO</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-mono text-amber-300">Video Demo Coming Soon</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
