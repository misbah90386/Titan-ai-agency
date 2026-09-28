import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCTASectionProps {
  serviceTitle: string;
  whatsappMessage: string;
  subtitle?: string;
}

export const ServiceCTASection: React.FC<ServiceCTASectionProps> = ({
  serviceTitle,
  whatsappMessage,
  subtitle = 'Discuss your goals, project constraints, and technical specifications directly with our engineering team on WhatsApp.',
}) => {
  const whatsappUrl = `https://wa.me/966534182945?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-[#060912] to-[#04060b] border-t border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
          <span>Project Consultation</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Ready to Discuss Your {serviceTitle} Project?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-200 group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Discuss Your Project on WhatsApp</span>
          </a>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 hover:text-white border border-white/10 text-sm font-semibold transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Agreed Scope & Fixed Milestones</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Includes 30 Days Post-Launch Support</span>
          </div>
          <div>
            <span>Serving Riyadh & Remote Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};
