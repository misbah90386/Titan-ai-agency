import React, { useState } from 'react';
import { X } from 'lucide-react';
import { TitanIcon } from './TitanLogo';

// Official WhatsApp Vector Icon for unmistakable recognition
const WhatsAppOfficialIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`fill-current shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 01-5.82 2.41h-.01c-1.47 0-2.9-.39-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.18 8.18 0 01-1.25-4.39c0-4.54 3.7-8.24 8.24-8.24zm-3.6 3.42c-.2 0-.44.07-.66.32-.23.25-.87.85-.87 2.08 0 1.22.89 2.41 1.02 2.58.12.17 1.73 2.65 4.2 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.45-.59 1.66-1.16.2-.57.2-1.07.14-1.16-.06-.1-.23-.17-.48-.29-.25-.12-1.45-.72-1.68-.8-.22-.09-.39-.13-.55.13-.17.25-.64.8-.78.96-.15.17-.3.19-.55.07-.25-.12-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.17.04-.32-.02-.44-.06-.13-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14 0-.3-.01-.46-.01z" />
  </svg>
);

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = '+966 53 418 2945';
  const whatsappLink = 'https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20digital%20solutions.';

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end pointer-events-none"
    >
      {/* Expanded Quick Message Bubble with TITAN Dark Theme & Official WhatsApp Green */}
      {isOpen && (
        <div className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 max-h-[calc(100vh-12rem)] overflow-y-auto rounded-2xl bg-[#031127]/98 border border-[#00D1FF]/30 p-4 shadow-[0_12px_40px_rgba(2,8,20,0.85),0_0_20px_rgba(0,209,255,0.2)] animate-in fade-in slide-in-from-bottom-3 duration-200 backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_12px_rgba(37,211,102,0.4)]">
                  <WhatsAppOfficialIcon className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#031127] flex items-center justify-center">
                  <TitanIcon className="w-3 h-3" />
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">TITAN AI AGENCY</div>
                <div className="text-[10px] font-mono text-[#00D1FF] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  Official WhatsApp Direct
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-[#C2D4EC] leading-relaxed">
            Have a project in mind? Connect directly with TITAN for immediate consultation, scoping, and enterprise quotes.
            <div className="mt-2.5 font-mono text-emerald-300 font-semibold text-[11px] bg-[#25D366]/10 px-3 py-2 rounded-lg border border-[#25D366]/30 flex items-center justify-between">
              <span>{whatsappNumber}</span>
              <span className="text-[9px] text-[#00D1FF] uppercase font-bold tracking-wider">Fast Reply</span>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-whatsapp-open-chat-btn"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all"
          >
            <WhatsAppOfficialIcon className="w-4 h-4 text-white" />
            <span>Open Direct WhatsApp Chat</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button - Sleek round button with hover tooltip to prevent any card overlap */}
      <div className="pointer-events-auto flex items-center gap-2 group relative">
        {!isOpen && (
          <div className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-full bg-[#031127]/95 border border-[#00D1FF]/40 text-xs text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.7)] backdrop-blur-md whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-[11px] font-mono text-[#A5B9D4]">
                Chat on WhatsApp: <span className="text-emerald-300 font-semibold">{whatsappNumber}</span>
              </span>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="floating-whatsapp-trigger-btn"
          aria-expanded={isOpen}
          aria-label="Contact TITAN on WhatsApp"
          className="w-12 h-12 sm:w-13 sm:h-13 p-1.5 rounded-full bg-[#031127] border-2 border-[#00D1FF]/40 hover:border-[#00D1FF] text-white shadow-[0_4px_20px_rgba(2,8,20,0.8),0_0_20px_rgba(0,209,255,0.3)] hover:shadow-[0_6px_25px_rgba(2,8,20,0.9),0_0_28px_rgba(0,209,255,0.55)] hover:scale-105 transition-all duration-200 flex items-center justify-center relative cursor-pointer"
        >
          {/* Inner Official WhatsApp Green Circle */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#25D366] group-hover:bg-[#20ba59] flex items-center justify-center text-white shadow-inner transition-colors">
            <WhatsAppOfficialIcon className="w-5 h-5 text-white" />
          </div>
          
          {/* Status Indicator Dot with Cyan Ring */}
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#031127] shadow-[0_0_6px_#25D366]" />
        </button>
      </div>
    </div>
  );
};
