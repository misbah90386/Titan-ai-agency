import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '+966 53 418 2945';
  const whatsappLink = 'https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions.';

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-[calc(5.75rem+env(safe-area-inset-bottom,0px))] sm:right-6 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Expanded Quick Message Bubble */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 max-h-[calc(100vh-12rem)] overflow-y-auto rounded-2xl bg-[#090d16] border border-emerald-500/30 p-4 shadow-[0_10px_35px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">TITAN AI AGENCY</div>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Direct WhatsApp Line
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300 leading-relaxed">
            Have a project in mind? Contact TITAN directly on WhatsApp for consultation and quotes.
            <div className="mt-2 font-mono text-emerald-300 font-semibold text-[11px] bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/20">
              {whatsappNumber}
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-open-chat-btn"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button & Desktop Number Tag */}
      <div className="pointer-events-auto flex items-center gap-2">
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0f1c]/95 border border-emerald-500/30 text-xs text-slate-200 shadow-lg backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-emerald-300">{whatsappNumber}</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-whatsapp-trigger-btn"
          aria-expanded={isOpen}
          aria-label="Contact TITAN on WhatsApp"
          className="w-12 h-12 sm:w-13 sm:h-13 p-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.65)] hover:scale-105 transition-all duration-200 flex items-center justify-center relative group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#06080d]" />
        </button>
      </div>
    </div>
  );
};
