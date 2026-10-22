import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4";
const POSTER_URL = "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg";

interface CinematicVideoHeroProps {
  onGetQuote?: () => void;
}

export const CinematicVideoHero: React.FC<CinematicVideoHeroProps> = ({ onGetQuote }) => {
  const { language, isRtl, t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const whatsappMessage = language === 'ar'
    ? 'مرحباً وكالة تيتان، أود طلب استشارة وعرض سعر مجاني لمشروعي.'
    : 'Hello TITAN AI AGENCY, I would like to request a free quote for my business.';

  const whatsappUrl = 'https://wa.me/966534182945?text=' + encodeURIComponent(whatsappMessage);

  // IntersectionObserver to play/pause video when scrolling in/out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Page visibility listener
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video) return;
      if (document.hidden) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative min-h-[90svh] w-full flex flex-col justify-center overflow-hidden bg-[#02060F] text-white pt-20 pb-10 select-none"
    >
      {/* 1. Background Video / Poster with Deep Navy Veil */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER_URL}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* Dark Navy Veil & Radial Gradient behind headline */}
        <div className="absolute inset-0 bg-[#02060F]/75 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02060F] via-transparent to-[#02060F]/60 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#00D1FF]/15 via-[#3BA9FF]/12 to-[#00D1FF]/15 rounded-full blur-[130px] pointer-events-none" />

        {/* Subtle Geometric HUD Vector Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-8 sm:left-16 w-24 h-24 border-l border-t border-[#00D1FF]" />
          <div className="absolute top-1/4 right-8 sm:right-16 w-24 h-24 border-r border-t border-[#00D1FF]" />
          <div className="absolute bottom-1/4 left-8 sm:left-16 w-24 h-24 border-l border-b border-[#00D1FF]" />
          <div className="absolute bottom-1/4 right-8 sm:right-16 w-24 h-24 border-r border-b border-[#00D1FF]" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center my-auto space-y-8">
        
        {/* Headline */}
        <div className="space-y-3 max-w-3xl">
          <h1 className="font-display text-2xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-tight">
            <span className="block hero-reveal-headline">
              {t.hero.headlineLine1}
            </span>
            <span className="block hero-reveal-headline mt-1.5 text-transparent bg-clip-text bg-gradient-to-r from-[#9FE0FF] via-[#60BFFF] to-[#00D1FF]">
              {t.hero.headlineLine2}
            </span>
          </h1>

          <p className="hero-reveal-desc text-base sm:text-lg lg:text-xl text-[#C5D2E2] font-normal leading-relaxed max-w-2xl mx-auto pt-2">
            {t.hero.supportingText}
          </p>
        </div>

        {/* Glass CTA & Secondary Link */}
        <div className="hero-reveal-buttons flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target={onGetQuote ? undefined : "_blank"}
            rel={onGetQuote ? undefined : "noopener noreferrer"}
            id="hero-glass-cta-btn"
            onClick={(e) => {
              if (onGetQuote) {
                e.preventDefault();
                onGetQuote();
              }
            }}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-white text-base font-semibold shadow-[0_8px_30px_rgba(0,209,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,209,255,0.4)] transition-all duration-250 cursor-pointer active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,209,255,0.15) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(159, 224, 255, 0.4)',
            }}
          >
            {/* Top highlight line */}
            <span className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none" />
            <span>{t.hero.primaryButton}</span>
            <ArrowRight className={`w-4 h-4 text-[#9FE0FF] ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-200`} />
          </a>

          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('portfolio') || document.getElementById('services-preview-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-6 py-4 rounded-full text-sm font-medium text-[#C5D2E2] hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/20 bg-white/[0.04]"
          >
            <span>{t.hero.secondaryButton}</span>
          </a>
        </div>

        {/* Compact Service Row */}
        <div className="hero-reveal-services pt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#C5D2E2]/95 tracking-wide">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
            {t.hero.serviceLine.websites}
          </span>
          <span className="text-[#00D1FF]/50">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3BA9FF]" />
            {t.hero.serviceLine.seo}
          </span>
          <span className="text-[#00D1FF]/50">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
            {t.hero.serviceLine.aiAgents}
          </span>
          <span className="text-[#00D1FF]/50">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3BA9FF]" />
            {t.hero.serviceLine.callAgents}
          </span>
          <span className="text-[#00D1FF]/50">/</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1FF]" />
            {t.hero.serviceLine.aiVideo}
          </span>
        </div>

      </div>

      {/* Bottom Footer Section of Hero: Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-[#C5D2E2]/80">
        <div className="text-left font-mono tracking-wider">
          {language === 'ar' ? 'استكشف ما يمكن لتيتان بنائه لأعمالك.' : 'Explore what Titan can build for your business.'}
        </div>

        <div>
          {/* Scroll cue linked to services */}
          <a
            href="#services-preview-section"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('services-preview-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-1 cursor-pointer"
            aria-label="Scroll to services"
          >
            <div className="w-px h-6 bg-gradient-to-b from-[#00D1FF] to-transparent group-hover:h-8 transition-all" />
            <ChevronDown className="w-3.5 h-3.5 text-[#00D1FF] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
