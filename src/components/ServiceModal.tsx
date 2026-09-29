import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Layers, Clock, Cpu, Globe, PhoneCall, MessageSquare, Workflow, Video, MessageCircle } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappServiceUrl =
    'https://wa.me/966534182945?text=' +
    encodeURIComponent(
      `Hello TITAN AI AGENCY, I would like to enquire about ${service.title} for my business.`
    );

  const renderIcon = () => {
    switch (service.id) {
      case 'websites':
        return <Globe className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-agents':
        return <Cpu className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-6 h-6 text-[#00D1FF]" />;
      case 'business-automation':
        return <Workflow className="w-6 h-6 text-[#00D1FF]" />;
      case 'ai-video-creation':
        return <Video className="w-6 h-6 text-[#00D1FF]" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-6 h-6 text-[#00D1FF]" />;
    }
  };

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#04142E]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#04142E] border border-[#00D1FF]/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-service-modal-btn"
          aria-label="Close service modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[#8FA0BA] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-11 h-11 rounded-xl bg-[#0B1F4B] border border-[#00D1FF]/30 flex items-center justify-center">
            {renderIcon()}
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-[#00D1FF] uppercase tracking-widest block">
              {service.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-[#8FA0BA] text-base leading-relaxed mb-6">
          {service.overview}
        </p>

        {/* Subcategories Breakdown */}
        <div className="mb-6 p-4 rounded-xl bg-[#0B1F4B]/60 border border-white/[0.08]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#00D1FF] font-bold mb-3">
            Service Coverage & Capabilities
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.subcategories.map((sub, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] text-[#EAF7FF] border border-white/10 text-xs font-medium"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Features & Engineering Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#3BA9FF] font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D1FF]" />
              Core Capabilities
            </h4>
            <ul className="space-y-2">
              {service.features.map((feat, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#CBD5E1] flex items-start gap-2">
                  <span className="text-[#00D1FF] font-mono">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#3BA9FF] font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00D1FF]" />
              Standard Deliverables
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="text-xs sm:text-sm text-[#CBD5E1] flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack and Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/[0.08]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8FA0BA] block mb-1">
              Primary Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-[#EAF7FF]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#8FA0BA] block mb-1">
              Delivery & Support
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EAF7FF]">
              <Clock className="w-4 h-4 text-[#00D1FF]" />
              <span>Includes 30 Days Dedicated Support</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="text-xs text-[#8FA0BA] font-mono">
            TITAN AI AGENCY
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-sm text-[#8FA0BA] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              Close
            </button>
            <a
              href={whatsappServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
