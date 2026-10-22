import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, Globe } from 'lucide-react';
import { TitanLogo } from './TitanLogo';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, isRtl, setLanguage, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.pricing, path: '/pricing' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#04142E] backdrop-blur-xl border-b border-[#00D1FF]/25 shadow-[0_12px_32px_rgba(2,10,24,0.7)]'
          : 'bg-[#04142E]/70 backdrop-blur-md border-b border-white/[0.06]'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        {/* Brand Logo Lockup */}
        <Link
          to="/"
          id="nav-brand-logo"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 rounded-lg p-1 transition-transform duration-300 hover:scale-[1.01] whitespace-nowrap"
        >
          <TitanLogo
            variant="dark"
            iconClassName={`transition-all duration-300 drop-shadow-[0_0_16px_rgba(0,209,255,0.4)] ${scrolled ? 'w-10 h-10 sm:w-11 sm:h-11' : 'w-12 h-12 sm:w-[50px] sm:h-[50px]'}`}
            titleClassName="text-[22px] sm:text-[24px] md:text-[26px] tracking-[0.16em]"
            subtitleClassName="text-[12px] sm:text-[13px] tracking-[0.28em]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-link-${item.path === '/' ? 'home' : item.path.replace(/^\//, '').replace(/\//g, '-')}`}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                  isActive
                    ? 'text-[#00D1FF] bg-[#0B1F4B]/80 border border-[#00D1FF]/30 shadow-[0_0_15px_rgba(0,209,255,0.15)]'
                    : 'text-[#EAF7FF]/80 hover:text-[#00D1FF] hover:bg-white/[0.04] nav-link-motion'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-gradient-to-r from-[#00D1FF] to-[#3BA9FF] rounded-full shadow-[0_0_8px_#00D1FF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Zone: Language Switcher + Phone + Start Your Project CTA */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          {/* Visible "EN / العربية" language switch */}
          <div
            id="desktop-language-switcher"
            className="flex items-center rounded-xl bg-white/[0.06] border border-[#00D1FF]/25 p-0.5 text-xs font-bold shadow-inner"
            role="group"
            aria-label="Language selection / اختيار اللغة"
          >
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#00D1FF] text-[#04142E] shadow-[0_0_12px_rgba(0,209,255,0.4)]'
                  : 'text-[#EAF7FF]/70 hover:text-white'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer font-arabic ${
                language === 'ar'
                  ? 'bg-[#00D1FF] text-[#04142E] shadow-[0_0_12px_rgba(0,209,255,0.4)]'
                  : 'text-[#EAF7FF]/70 hover:text-white'
              }`}
              aria-pressed={language === 'ar'}
            >
              العربية
            </button>
          </div>

          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-slate-400 hover:text-white text-xs font-normal tracking-wide transition-colors duration-200 group"
            title="Chat with TITAN on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00D1FF] transition-colors duration-200" />
            <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors duration-200" dir="ltr">+966 53 418 2945</span>
          </a>

          <Link
            to="/contact"
            id="nav-get-started-btn"
            className="group btn-titan-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold shadow-[0_4px_16px_rgba(0,209,255,0.25)] hover:shadow-[0_0_22px_rgba(0,209,255,0.45)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300"
          >
            <span>Get a Quote</span>
            <ArrowRight className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-200`} />
          </Link>
        </div>

        {/* Mobile Header: Language Switcher, Phone, CTA & Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
          {/* Mobile Direct Language Toggle */}
          <button
            type="button"
            onClick={toggleLanguage}
            id="mobile-language-toggle-btn"
            aria-label="Toggle language between English and Arabic"
            className="px-2 py-1 rounded-lg bg-white/[0.08] border border-[#00D1FF]/30 text-xs font-bold text-[#00D1FF] hover:bg-[#00D1FF]/20 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'العربية' : 'EN'}
          </button>

          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-[#00D1FF] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <Link
            to="/contact"
            className="btn-titan-primary px-3 py-1.5 text-xs font-bold"
          >
            {t.nav.startProject}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg text-[#EAF7FF] hover:text-white hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00D1FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with smooth opening and closing animations */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`lg:hidden bg-[#04142E] border-b border-[#00D1FF]/20 shadow-2xl overflow-hidden transition-all duration-250 ease-out ${
          mobileMenuOpen
            ? 'max-h-[560px] opacity-100 py-3 px-4 translate-y-0 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 px-4 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="space-y-2">
          {/* Mobile In-Drawer Language Switch */}
          <div className="pb-2 border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-[#8FA0BA] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Language / اللغة</span>
            </span>
            <div className="flex items-center rounded-lg bg-white/[0.06] border border-[#00D1FF]/30 p-0.5 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md transition-all ${
                  language === 'en'
                    ? 'bg-[#00D1FF] text-[#04142E] font-bold shadow-sm'
                    : 'text-[#EAF7FF]/70'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded-md transition-all font-arabic ${
                  language === 'ar'
                    ? 'bg-[#00D1FF] text-[#04142E] font-bold shadow-sm'
                    : 'text-[#EAF7FF]/70'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-[#00D1FF] bg-[#0B1F4B] border border-[#00D1FF]/30'
                    : 'text-[#EAF7FF]/80 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-3 space-y-2.5">
            <a
              href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/[0.06] border border-[#3BA9FF]/30 text-[#EAF7FF] text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4 text-[#00D1FF]" />
              <span dir="ltr">WhatsApp: +966 53 418 2945</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-titan-primary flex items-center justify-center gap-2 w-full py-3 text-base"
            >
              <span>{t.nav.startProject}</span>
              <ArrowRight className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
