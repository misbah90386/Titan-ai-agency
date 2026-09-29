import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { TitanIcon } from './TitanLogo';

export const FinalCTA: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent("Hello TITAN AI AGENCY, let's discuss building our next business solution.");

  return (
    <section id="final-cta-section" className="relative py-20 sm:py-28 overflow-hidden bg-[#04142E] text-white">
      {/* Subtle Digital Background Grids & Ambient Lighting */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0B1F4B]/90 to-[#04142E]/90 border border-[#00D1FF]/25 p-8 sm:p-14 text-center shadow-[0_20px_60px_rgba(4,20,46,0.8)] backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D1FF]/10 border border-[#00D1FF]/30 text-xs font-mono text-[#00D1FF] mb-6 uppercase tracking-wider">
            <TitanIcon className="w-4 h-4" />
            <span>Ready to Transform Your Business?</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 max-w-3xl mx-auto uppercase">
            LET’S BUILD YOUR NEXT <span className="text-[#00D1FF]">BUSINESS SOLUTION.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#8FA0BA] max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
            Tell us what operational friction your business faces. Founder Saad Naeem will analyze your constraints and provide an actionable technical blueprint.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-start-conversation-btn"
              className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold"
            >
              <MessageCircle className="w-5 h-5 stroke-[2.5]" />
              <span>Start WhatsApp Consultation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <Link
              to="/services"
              id="cta-explore-services-btn"
              className="btn-titan-secondary-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold"
            >
              <span>Explore All Services</span>
            </Link>
          </div>

          {/* Trust Metrics */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-[#8FA0BA]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              Direct WhatsApp Founder Response
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3BA9FF]" />
              30 Days Free Support on Launched Projects
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
              100% Client Code & IP Ownership
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
