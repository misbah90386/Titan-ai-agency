import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, Globe } from 'lucide-react';
import { TitanLogo } from './TitanLogo';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, isRtl, setLanguage, toggleLanguage, t } = useLanguage();
  const { openQuote } = useQuote();

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
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-16 sm:h-20'}`}>
        {/* Brand Logo Lockup */}
        <Link
          to="/"
          id="nav-brand-logo"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 rounded-lg p-1 transition-transform duration-300 hover:scale-[1.01] whitespace-nowrap shrink-0"
        >
          <TitanLogo
            variant="light"
            iconClassName={`transition-all duration-300 drop-shadow-[0_0_12px_rgba(0,209,255,0.3)] ${scrolled ? 'h-9 sm:h-10 w-auto' : 'h-10 sm:h-11 w-auto'}`}
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

          <button
            type="button"
            id="nav-get-started-btn"
            onClick={() => openQuote()}
            className="group btn-titan-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold shadow-[0_4px_16px_rgba(0,209,255,0.25)] hover:shadow-[0_0_22px_rgba(0,209,255,0.45)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300 cursor-pointer"
          >
            <span>{language === 'ar' ? 'طلب عرض سعر' : 'Get a Quote'}</span>
            <ArrowRight className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform duration-200`} />
          </button>
        </div>

        {/* Mobile Header: Hamburger Menu Button Only */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 sm:p-2.5 rounded-xl text-[#EAF7FF] hover:text-[#00D1FF] bg-white/[0.06] hover:bg-white/[0.12] border border-[#00D1FF]/30 focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#00D1FF]" />
            ) : (
              <Menu className="w-6 h-6 text-[#EAF7FF]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with smooth opening and closing animations */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`lg:hidden bg-[#04142E] border-b border-[#00D1FF]/20 shadow-2xl overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'max-h-[calc(100vh-4rem)] opacity-100 py-4 px-4 sm:px-6 translate-y-0 pointer-events-auto overflow-y-auto'
            : 'max-h-0 opacity-0 py-0 px-4 sm:px-6 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="space-y-4 pb-2">
          {/* Navigation Links: Home, Services, Pricing, Our Work, About, Contact */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? 'text-[#00D1FF] bg-[#0B1F4B] border border-[#00D1FF]/40 shadow-[0_0_15px_rgba(0,209,255,0.15)]'
                      : 'text-[#EAF7FF]/85 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* In-Drawer Language Switcher: English / العربية */}
          <div className="pt-3 pb-1 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-[#8FA0BA] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#00D1FF]" />
              <span>Language / اللغة</span>
            </span>
            <div
              className="flex items-center rounded-lg bg-white/[0.06] border border-[#00D1FF]/30 p-0.5 text-xs font-bold"
              role="group"
              aria-label="Mobile Language selection / اختيار اللغة"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#00D1FF] text-[#04142E] font-bold shadow-sm'
                    : 'text-[#EAF7FF]/70 hover:text-white'
                }`}
                aria-pressed={language === 'en'}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1.5 rounded-md transition-all font-arabic cursor-pointer ${
                  language === 'ar'
                    ? 'bg-[#00D1FF] text-[#04142E] font-bold shadow-sm'
                    : 'text-[#EAF7FF]/70 hover:text-white'
                }`}
                aria-pressed={language === 'ar'}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Prominent CTA: Start Your Project */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openQuote();
              }}
              className="btn-titan-primary flex items-center justify-center gap-2 w-full py-3.5 px-6 text-base font-bold uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(0,209,255,0.35)] hover:shadow-[0_0_25px_rgba(0,209,255,0.55)] transition-all cursor-pointer"
            >
              <span>{t.nav.startProject}</span>
              <ArrowRight className={`w-4 h-4 stroke-[2.5] ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
