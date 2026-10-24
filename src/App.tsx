import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { QuoteProvider } from './context/QuoteContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { PageTransition, InitialPageLoader, DesktopCursorGlow } from './components/motion/MotionComponents';

// Lazy-loaded pages for fast initial bundle rendering
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const WebsiteDesignPage = lazy(() => import('./pages/services/WebsiteDesignPage').then(m => ({ default: m.WebsiteDesignPage })));
const SEOOptimizationPage = lazy(() => import('./pages/services/SEOOptimizationPage').then(m => ({ default: m.SEOOptimizationPage })));
const AIAgentsPage = lazy(() => import('./pages/services/AIAgentsPage').then(m => ({ default: m.AIAgentsPage })));
const AIChatbotsPage = lazy(() => import('./pages/services/AIChatbotsPage').then(m => ({ default: m.AIChatbotsPage })));
const AIVoiceAgentsPage = lazy(() => import('./pages/services/AIVoiceAgentsPage').then(m => ({ default: m.AIVoiceAgentsPage })));
const BusinessAutomationPage = lazy(() => import('./pages/services/BusinessAutomationPage').then(m => ({ default: m.BusinessAutomationPage })));
const AIVideoCreationPage = lazy(() => import('./pages/services/AIVideoCreationPage').then(m => ({ default: m.AIVideoCreationPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const MissionVisionPage = lazy(() => import('./pages/MissionVisionPage').then(m => ({ default: m.MissionVisionPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage').then(m => ({ default: m.BlogArticlePage })));

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#00D1FF] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <QuoteProvider>
        <Router>
          <InitialPageLoader />
          <DesktopCursorGlow />
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-[#F8FAFF] text-[#071A33] antialiased selection:bg-[#00D1FF] selection:text-[#04142E]">
            <Navbar />
            <main className="flex-grow">
              <PageTransition>
                <Suspense fallback={<PageFallback />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/services/website-design" element={<WebsiteDesignPage />} />
                    <Route path="/services/websites" element={<Navigate to="/services/website-design" replace />} />
                    <Route path="/services/ai-websites" element={<Navigate to="/services/website-design" replace />} />
                    <Route path="/services/seo" element={<SEOOptimizationPage />} />
                    <Route path="/services/seo-optimization" element={<Navigate to="/services/seo" replace />} />
                    <Route path="/services/ai-agents" element={<AIAgentsPage />} />
                    <Route path="/services/custom-ai-agents" element={<Navigate to="/services/ai-agents" replace />} />
                    <Route path="/services/ai-call-agents" element={<AIVoiceAgentsPage />} />
                    <Route path="/services/ai-voice-agents" element={<AIVoiceAgentsPage />} />
                    <Route path="/services/ai-video-creation" element={<AIVideoCreationPage />} />
                    <Route path="/services/ai-video" element={<Navigate to="/services/ai-video-creation" replace />} />
                    <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
                    <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/mission-vision" element={<MissionVisionPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogArticlePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/ai-demo" element={<Navigate to="/services" replace />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </PageTransition>
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
        </Router>
      </QuoteProvider>
    </LanguageProvider>
  );
}
