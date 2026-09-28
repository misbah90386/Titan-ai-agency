import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent("Hello TITAN AI AGENCY, let's discuss building our next business solution.");

  return (
    <section id="final-cta-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#06080d]">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0a0f1d]/90 border border-blue-500/25 p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(37,99,235,0.15)] backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Take Action</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto uppercase">
            LET’S BUILD YOUR NEXT BUSINESS SOLUTION.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
            Tell us what your business needs. We’ll help you define the right next step.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-start-conversation-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/services"
              id="cta-explore-services-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white font-medium text-base border border-white/10 transition-all duration-200"
            >
              <span>Explore All Services</span>
            </Link>
          </div>

          {/* Direct Communication Note */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Direct WhatsApp response
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              30 days free support on launched projects
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Transparent, scope-based pricing
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
