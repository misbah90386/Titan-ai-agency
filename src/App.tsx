import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebsiteDesignPage } from './pages/services/WebsiteDesignPage';
import { SEOOptimizationPage } from './pages/services/SEOOptimizationPage';
import { AIAgentsPage } from './pages/services/AIAgentsPage';
import { AIChatbotsPage } from './pages/services/AIChatbotsPage';
import { AIVoiceAgentsPage } from './pages/services/AIVoiceAgentsPage';
import { BusinessAutomationPage } from './pages/services/BusinessAutomationPage';
import { AIVideoCreationPage } from './pages/services/AIVideoCreationPage';
import { AboutPage } from './pages/AboutPage';
import { MissionVisionPage } from './pages/MissionVisionPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogArticlePage } from './pages/BlogArticlePage';
import { PageTransition } from './components/motion/MotionComponents';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F8FAFF] text-[#071A33] antialiased selection:bg-[#00D1FF] selection:text-[#04142E]">
        <Navbar />
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
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
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
