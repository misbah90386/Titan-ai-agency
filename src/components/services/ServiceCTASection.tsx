import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TitanIcon } from '../TitanLogo';

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
    <section className="relative py-20 sm:py-28 bg-[#04142E] text-white border-t border-[#00D1FF]/20 overflow-hidden">
      {/* Background glow and digital grid */}
      <div className="absolute inset-0 bg-digital-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D1FF]/10 to-[#3BA9FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest">
          <TitanIcon className="w-4 h-4" />
          <span>Project Consultation</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Ready to Discuss Your <span className="text-[#00D1FF]">{serviceTitle}</span> Project?
        </h2>

        <p className="text-base sm:text-lg text-[#8FA0BA] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-titan-primary inline-flex items-center gap-2.5 px-8 py-4 text-base font-bold"
          >
            <MessageCircle className="w-5 h-5 stroke-[2.5]" />
            <span>Discuss on WhatsApp</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          <Link
            to="/services"
            className="btn-titan-secondary-dark inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-[#00D1FF]" />
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8FA0BA]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00D1FF]" />
            <span>Agreed Scope & Fixed Milestones</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#3BA9FF]" />
            <span>Includes 30 Days Free Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
