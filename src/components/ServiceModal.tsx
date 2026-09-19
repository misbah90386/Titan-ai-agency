import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Layers, Clock, Cpu, Globe, PhoneCall, MessageSquare, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const renderIcon = () => {
    switch (service.id) {
      case 'websites':
        return <Globe className="w-6 h-6 text-blue-400" />;
      case 'ai-agents':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'ai-voice-agents':
        return <PhoneCall className="w-6 h-6 text-blue-400" />;
      case 'ai-chatbots':
        return <MessageSquare className="w-6 h-6 text-blue-400" />;
      case 'business-automation':
        return <Workflow className="w-6 h-6 text-blue-400" />;
      case 'custom-ai-solutions':
      default:
        return <Layers className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090d16] border border-blue-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-left text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-service-modal-btn"
          aria-label="Close service modal"
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            {renderIcon()}
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest block">
              {service.category}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        <p className="text-slate-300 text-base leading-relaxed mb-6">
          {service.overview}
        </p>

        {/* Subcategories Breakdown */}
        <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-3">
            Service Coverage & Modalities
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.subcategories.map((sub, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs font-medium"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Features & Engineering Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Technical Capabilities
            </h4>
            <ul className="space-y-2">
              {service.features.map((feat, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-blue-400 font-mono">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              Standard Deliverables
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-mono">✓</span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack and Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/[0.06]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Primary Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Typical Delivery Cycle
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>{service.typicalTimeline}</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
          <div className="text-xs text-slate-500 font-mono">
            TITAN DIGITAL SOLUTIONS
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              Close
            </button>
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-colors"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
