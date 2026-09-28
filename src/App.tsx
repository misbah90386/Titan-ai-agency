import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WebsiteDesignPage } from './pages/services/WebsiteDesignPage';
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#06080d] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/website-design" element={<WebsiteDesignPage />} />
            <Route path="/services/websites" element={<Navigate to="/services/website-design" replace />} />
            <Route path="/services/ai-agents" element={<AIAgentsPage />} />
            <Route path="/services/ai-chatbots" element={<AIChatbotsPage />} />
            <Route path="/services/ai-voice-agents" element={<AIVoiceAgentsPage />} />
            <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
            <Route path="/services/ai-video-creation" element={<AIVideoCreationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mission-vision" element={<MissionVisionPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
