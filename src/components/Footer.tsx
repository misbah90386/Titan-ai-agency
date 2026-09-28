import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#030508] border-t border-white/[0.08] relative z-10">
      {/* Decorative subtle blue divider line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Agency Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/titan-logo.png"
                alt="Titan AI Agency - AI Automation & Digital Solutions"
                className="w-10 h-10 rounded-xl object-cover border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-lg text-white tracking-wide">
                TITAN AI AGENCY
              </span>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Founded by Saad Naeem. We build websites, AI assistants, and automated workflows that help businesses capture enquiries, respond faster, and reduce repetitive work.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Titan AI Agency on Instagram"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>@titanaiagency.sa</span>
              </a>
            </div>

            <div className="pt-1 text-xs text-slate-400">
              Transparent scoping · 30 days free post-launch support
            </div>
          </div>

          {/* Column 2: Solutions / Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/services/website-design" className="hover:text-blue-400 transition-colors">
                  Website Design & Dev
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="hover:text-blue-400 transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-chatbots" className="hover:text-blue-400 transition-colors">
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link to="/services/ai-voice-agents" className="hover:text-blue-400 transition-colors">
                  AI Voice Agents
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="hover:text-blue-400 transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/services/ai-video-creation" className="hover:text-blue-400 transition-colors">
                  AI Video Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Saad & TITAN
                </Link>
              </li>
              <li>
                <Link to="/mission-vision" className="hover:text-blue-400 transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Blog Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-slate-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono text-xs text-white hover:text-emerald-400">+966 53 418 2945</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 font-mono">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <span>@titanaiagency.sa</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-pink-500/15 text-pink-400 font-mono">Instagram</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 uppercase tracking-wider transition-colors"
                >
                  <span>Start WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} TITAN AI AGENCY. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span>Direct Founder Collaboration</span>
            <span>30 Days Free Launch Support</span>
            <span>100% Client Code Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
