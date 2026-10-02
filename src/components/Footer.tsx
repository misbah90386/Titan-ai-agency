import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Instagram } from 'lucide-react';
import { TitanLogo } from './TitanLogo';
import { FadeIn } from './motion/MotionComponents';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-[#04142E] border-t border-[#00D1FF]/20 relative z-10 text-white">
      {/* Decorative cyan/sky accent divider line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#00D1FF]/50 to-transparent" />

      <FadeIn direction="none" duration={0.6}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
            {/* Column 1: Agency Brand & Identity */}
            <div className="lg:col-span-2 space-y-4">
              <Link to="/" className="inline-block group">
                <TitanLogo variant="dark" showTagline={true} iconClassName="w-11 h-11 drop-shadow-[0_0_14px_rgba(0,209,255,0.4)]" />
              </Link>

              <p className="text-sm text-[#8FA0BA] max-w-sm leading-relaxed mt-2">
                Founded by Saad Naeem. We engineer high-performance websites, AI agents, and intelligent workflows that help businesses scale inquiries, accelerate response times, and eliminate repetitive operational bottlenecks.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Titan AI Agency on Instagram"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#00D1FF]/10 border border-white/10 hover:border-[#00D1FF]/40 text-xs font-mono text-[#EAF7FF] hover:text-[#00D1FF] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#3BA9FF]" />
                  <span>@titanaiagency.sa</span>
                </a>
              </div>

            <div className="pt-1 text-xs text-[#8FA0BA]">
              Transparent scoping · 30 days post-launch support · Complete client ownership
            </div>
          </div>

          {/* Column 2: Solutions / Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-[#8FA0BA]">
              <li>
                <Link to="/services/website-design" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  AI-Powered Websites
                </Link>
              </li>
              <li>
                <Link to="/services/seo" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  SEO & AI Search
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  Custom AI Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-call-agents" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  AI Call Agents
                </Link>
              </li>
              <li>
                <Link to="/services/ai-video-creation" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  AI Video Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-[#8FA0BA]">
              <li>
                <Link to="/" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  About Saad & TITAN
                </Link>
              </li>
              <li>
                <Link to="/mission-vision" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  Blog Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00D1FF] transition-colors footer-link-motion">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8FA0BA]">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#00D1FF] shrink-0" />
                <a
                  href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D1FF] text-[#EAF7FF] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono text-xs">+966 53 418 2945</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00D1FF]/15 text-[#00D1FF] font-mono font-medium">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#3BA9FF] shrink-0" />
                <a
                  href="https://www.instagram.com/titanaiagency.sa?stkn=MWZsZHR5d2Q1Zzdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D1FF] text-[#EAF7FF] transition-colors flex items-center gap-1.5 text-xs font-mono"
                >
                  <span>@titanaiagency.sa</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D1FF] hover:text-[#3BA9FF] uppercase tracking-wider transition-colors"
                >
                  <span>Start WhatsApp Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8FA0BA]">
          <div>
            © {new Date().getFullYear()} TITAN AI AGENCY. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[#8FA0BA]">
            <span>Direct Founder Engineering</span>
            <span>30 Days Free Launch Support</span>
            <span>100% Client IP & Code Ownership</span>
          </div>
        </div>
      </div>
      </FadeIn>
    </footer>
  );
};
