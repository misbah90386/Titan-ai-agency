import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { TitanLogo } from './TitanLogo';

interface NavItem {
  name: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-vision' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
          ? 'bg-[#04142E]/95 backdrop-blur-md border-b border-[#00D1FF]/20 shadow-[0_8px_30px_rgba(4,20,46,0.5)]'
          : 'bg-[#04142E]/85 backdrop-blur-sm border-b border-white/[0.08]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Lockup - Slightly increased for wordmark legibility */}
        <Link
          to="/"
          id="nav-brand-logo"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#00D1FF]/50 rounded-lg p-1 transition-transform hover:scale-[1.01]"
        >
          <TitanLogo
            variant="dark"
            iconClassName="w-12 h-12 sm:w-[50px] sm:h-[50px] drop-shadow-[0_0_16px_rgba(0,209,255,0.4)]"
            titleClassName="text-[22px] sm:text-[24px] md:text-[26px] tracking-[0.16em]"
            subtitleClassName="text-[12px] sm:text-[13px] tracking-[0.28em]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                  isActive
                    ? 'text-[#00D1FF] bg-[#0B1F4B]/80 border border-[#00D1FF]/30 shadow-[0_0_15px_rgba(0,209,255,0.15)]'
                    : 'text-[#EAF7FF]/80 hover:text-white hover:bg-white/[0.06]'
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

        {/* Right Action Zone: Clear hierarchy - Start Your Project is strongest CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/966534182945?text=Hello%20TITAN%20AI%20AGENCY,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-btn"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-slate-400 hover:text-white text-xs font-normal tracking-wide transition-colors group"
            title="Chat with TITAN on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00D1FF] transition-colors" />
            <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200 transition-colors">+966 53 418 2945</span>
          </a>

          <Link
            to="/contact"
            id="nav-get-started-btn"
            className="btn-titan-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold shadow-[0_4px_16px_rgba(0,209,255,0.3)] hover:shadow-[0_6px_24px_rgba(0,209,255,0.5)] transition-all"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex items-center gap-2 lg:hidden">
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
            Start Project
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#04142E] border-b border-[#00D1FF]/20 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {NAV_ITEMS.map((item) => {
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
              <span>WhatsApp: +966 53 418 2945</span>
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-titan-primary flex items-center justify-center gap-2 w-full py-3 text-base"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
