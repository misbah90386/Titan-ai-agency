import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

export const BlogCTA: React.FC = () => {
  return (
    <section className="relative my-16 sm:my-24 overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0b1224] to-[#070b14] p-8 sm:p-12 lg:p-16 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENTERPRISE AI ARCHITECTURE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
          Ready to Grow Your Business With AI?
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Discover how TITAN AI Agency can help automate your business, generate more leads, improve customer experiences, and build powerful AI solutions.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.6)] transition-all duration-200"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20read%20your%20blog%20and%20would%20like%20to%20discuss%20an%20AI%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-base transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
