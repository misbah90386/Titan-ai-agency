import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { TitanIcon } from '../TitanLogo';

export const BlogCTA: React.FC = () => {
  return (
    <section className="relative my-16 sm:my-24 overflow-hidden rounded-3xl border border-[#00D1FF]/25 bg-gradient-to-b from-[#0B1F4B] to-[#04142E] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D1FF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3BA9FF]/10 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-[#00D1FF] text-xs font-mono font-bold uppercase tracking-widest">
          <TitanIcon className="w-4 h-4" />
          <span>ENTERPRISE AI ARCHITECTURE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Ready to Grow Your Business With <span className="text-[#00D1FF]">AI?</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#EAF7FF]/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Discover how TITAN AI Agency can help automate your business, generate more leads, improve customer experiences, and build powerful AI solutions.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20an%20AI%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-titan-secondary-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold"
          >
            <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
