import React from 'react';
import { AiDemoChat } from '../components/AiDemoChat';

export const AiDemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#071A33] mb-4">Try Our AI Agent</h1>
          <p className="text-lg text-[#536477]">Experience how an AI assistant can help businesses answer questions and manage customer inquiries.</p>
        </div>
        
        <AiDemoChat />

        <div className="mt-12 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-[#071A33] mb-4">Suggested Questions</h3>
            <div className="flex flex-wrap gap-2">
                {["Find an apartment in Riyadh", "Show properties under SAR 500,000", "Do you have rental properties?", "أبحث عن شقة للإيجار في الرياض"].map(q => (
                    <button key={q} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm hover:bg-[#EAF7FF] hover:border-[#00D1FF] transition">
                        {q}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
