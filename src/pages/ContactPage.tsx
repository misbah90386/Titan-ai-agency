import React, { useState } from 'react';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, FileCheck, Code2, Rocket, MessageSquare } from 'lucide-react';
import { usePageSEO } from '../hooks/usePageSEO';
import { TitanIcon } from '../components/TitanLogo';
import { FadeIn } from '../components/motion/MotionComponents';

export const YOUR_WHATSAPP_NUMBER = '+966 53 418 2945';
const WHATSAPP_API_NUMBER = YOUR_WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

export const ContactPage: React.FC = () => {
  usePageSEO({
    title: 'Start Your Project & Contact | TITAN AI Agency',
    description:
      'Start your project with TITAN AI Agency. Tell us what you want to improve—AI-powered websites, SEO, AI agents, AI call agents, or AI video creation.',
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact TITAN AI Agency',
      url: 'https://titanaiagency.netlify.app/contact',
      description:
        'Start your project with TITAN AI Agency. Tell us what you want to improve—AI-powered websites, SEO, AI agents, AI call agents, or AI video creation.',
      mainEntity: {
        '@type': 'Organization',
        name: 'TITAN AI Agency',
        url: 'https://titanaiagency.netlify.app/',
        logo: 'https://titanaiagency.netlify.app/titan-logo.png',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+966534182945',
          contactType: 'sales',
          availableLanguage: ['English', 'Arabic'],
        },
      },
    },
  });

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: '',
    websiteUrl: '',
    neededService: 'AI-Powered Website',
    mainChallenge: '',
    budget: '$1,000 - $3,000',
    preferredContactMethod: 'WhatsApp'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*TITAN AI Project Inquiry*\n` +
      `*Name:* ${formData.name}\n` +
      `*Business:* ${formData.businessName} (${formData.businessType || 'N/A'})\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*Website:* ${formData.websiteUrl || 'None'}\n` +
      `*Needed Solution:* ${formData.neededService}\n` +
      `*Budget Range:* ${formData.budget}\n` +
      `*Contact Channel:* WhatsApp\n` +
      `*Challenge/Problem:* ${formData.mainChallenge}`;

    const targetUrl = `https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp after a brief delay or let user click directly
    setTimeout(() => {
      window.open(targetUrl, '_blank');
    }, 400);
  };

  const serviceOptions = [
    'AI-Powered Website',
    'SEO',
    'AI Agent',
    'AI Call Agent',
    'AI Video',
    'Not Sure'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000+',
    'Let’s Discuss'
  ];

  const trustSteps = [
    { num: '01', title: 'Review', desc: 'We review your request and business context.', icon: MessageSquare },
    { num: '02', title: 'Consultation', desc: 'We discuss your business and requirements.', icon: ShieldCheck },
    { num: '03', title: 'Proposal', desc: 'We propose the right solution and project scope.', icon: FileCheck },
    { num: '04', title: 'Build', desc: 'After approval, dedicated development begins.', icon: Code2 },
    { num: '05', title: 'Launch', desc: 'We test, launch and support the solution.', icon: Rocket }
  ];

  return (
    <div id="contact-page-root" className="min-h-screen bg-[#F8FAFF] text-[#071A33] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7FF] border border-[#3BA9FF]/30 text-xs font-mono text-[#0B1F4B] font-bold uppercase tracking-widest">
              <TitanIcon className="w-4 h-4" />
              <span>Project Scoping & Contact</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071A33] tracking-tight leading-tight">
              Start Your Project
            </h1>

            <p className="text-base sm:text-xl text-[#536477] font-normal leading-relaxed">
              Tell us what problem you want to solve. We’ll analyze your requirements and propose the right digital or AI solution.
            </p>
          </div>
        </FadeIn>

        {/* Project Form Container */}
        <FadeIn delay={0.1} direction="up" distance={25}>
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12 mb-16">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#071A33]">
                  Project Request Generated!
                </h3>
                <p className="text-sm text-[#536477] max-w-md mx-auto leading-relaxed">
                  Your inquiry is ready. If WhatsApp didn’t open automatically, click the button below to send your project details directly to founder Saad Naeem.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
                      `Hello TITAN AI AGENCY, my name is ${formData.name} from ${formData.businessName}. I would like to discuss ${formData.neededService}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-titan-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Contact & Business Details */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-4">
                    01 — Contact & Company Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Property Group"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Business Type
                      </label>
                      <input
                        type="text"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        placeholder="e.g. Real Estate, Clinic, Restaurant, Advisory"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#071A33] mb-1.5 font-mono uppercase">
                        Website URL <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. What do you need? */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-3">
                    02 — What Do You Need? *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {serviceOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, neededService: opt })}
                        className={`p-3 rounded-xl text-xs font-bold transition-all text-center border ${
                          formData.neededService === opt
                            ? 'bg-[#04142E] text-white border-[#00D1FF] shadow-md'
                            : 'bg-[#F8FAFF] hover:bg-slate-100 text-[#071A33] border-slate-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Main Business Challenge */}
                <div className="pt-4 border-t border-slate-100">
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold mb-2">
                    03 — Main Business Challenge *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mainChallenge}
                    onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                    placeholder="Tell us what problem you want to solve (e.g. 'We miss customer calls after hours', 'Our website does not generate leads', 'Employees spend hours answering repetitive inquiries')."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF] focus:ring-2 focus:ring-[#00D1FF]/20"
                  />
                </div>

                {/* 4. Budget & Contact Channel */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold mb-2">
                      Estimated Project Budget (Optional)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFF] border border-slate-200 text-sm text-[#071A33] focus:outline-none focus:border-[#00D1FF]"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-[#0B1F4B] font-bold mb-2">
                      Contact Channel
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#F8FAFF] border border-emerald-500/30 text-sm text-[#071A33]">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 fill-emerald-500/20" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-[#071A33] flex items-center gap-1.5">
                          <span>WhatsApp</span>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          <span className="text-[10px] text-emerald-600 font-mono font-medium">Direct Chat</span>
                        </div>
                        <div className="text-[11px] text-[#536477] font-mono truncate">
                          {YOUR_WHATSAPP_NUMBER}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Submit Button */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#8FA0BA] font-mono">
                    Direct Founder Review · Response within 24 hours
                  </div>

                  <button
                    type="submit"
                    id="submit-start-project-btn"
                    className="btn-titan-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 text-sm font-bold uppercase tracking-wider shadow-lg"
                  >
                    <span>START MY PROJECT</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>

              </form>
            )}

          </div>
        </FadeIn>

        {/* Trust Information Section (What happens after you contact TITAN?) */}
        <FadeIn delay={0.2} direction="up" distance={20}>
          <div className="rounded-3xl bg-[#04142E] text-white p-8 sm:p-12 border border-[#00D1FF]/25 shadow-xl mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00D1FF] font-bold">
                Clear Steps Ahead
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white uppercase">
                WHAT HAPPENS AFTER YOU CONTACT TITAN?
              </h2>
              <p className="text-xs sm:text-sm text-[#8FA0BA]">
                A disciplined, predictable process that eliminates project risk and uncertainty.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {trustSteps.map((st) => {
                const IconComp = st.icon;
                return (
                  <div key={st.num} className="p-4 rounded-2xl bg-[#0B1F4B]/60 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#00D1FF]">
                        Step {st.num}
                      </span>
                      <IconComp className="w-4 h-4 text-[#00D1FF]" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-white">
                      {st.title}
                    </h3>
                    <p className="text-xs text-[#8FA0BA] leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Minimal Direct WhatsApp Card Alternative */}
        <FadeIn delay={0.3} direction="up">
          <div className="max-w-md mx-auto text-center p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#071A33] mb-1">
              Prefer Direct Chat?
            </h3>
            <p className="text-xs text-[#536477] mb-4">
              Message founder Saad Naeem directly on WhatsApp for immediate scoping questions.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_API_NUMBER}?text=${encodeURIComponent(
                'Hello TITAN AI AGENCY, I would like to discuss a project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
            >
              <span>Chat on WhatsApp ({YOUR_WHATSAPP_NUMBER})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

      </div>
    </div>
  );
};
