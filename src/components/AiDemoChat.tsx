import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot, User, RefreshCw, ChevronRight } from 'lucide-react';
import { DEMO_PROPERTIES, DemoProperty } from '../data/demoProperties';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  type?: 'text' | 'property';
  data?: DemoProperty;
  quickReplies?: { label: string; action: string }[];
}

export const AiDemoChat: React.FC = () => {
  const { language, isRtl, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatStage, setChatStage] = useState<'welcome' | 'searching' | 'negotiating'>('welcome');
  const [context, setContext] = useState<Partial<DemoProperty>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message based on language
    const welcomeText = language === 'ar' 
      ? "أهلاً! أنا مساعد تيتان للذكاء الاصطناعي. يمكنني مساعدتك في استكشاف العقارات، الإجابة عن استفساراتك، وتجربة كيف يعمل دعم العملاء الذكي. كيف يمكنني مساعدتك اليوم؟"
      : "Hello! I'm Titan's AI Assistant. I can help you explore example properties, answer questions, and see how AI customer support works. What would you like to do?";
    
    setMessages([{ 
      id: 'welcome', 
      sender: 'ai', 
      text: welcomeText,
      quickReplies: [
        { label: language === 'ar' ? 'البحث عن عقار' : 'Find a Property', action: 'find' },
        { label: language === 'ar' ? 'استكشاف خيارات الإيجار' : 'Explore Rental Options', action: 'rent' },
        { label: language === 'ar' ? 'مقارنة العقارات' : 'Compare Properties', action: 'compare' },
        { label: language === 'ar' ? 'طرح سؤال' : 'Ask a Question', action: 'help' }
      ]
    }]);
  }, [language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string, action?: string) => {
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: [...messages, userMsg] })
        });
        
        // Handle non-200 status codes
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Final check for expected response structure
        if (!data || typeof data.response !== 'string') {
            throw new Error('Invalid response format received from server');
        }

        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: data.response }]);
    } catch (err: any) {
        const errorText = err.message || (language === 'ar' ? 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.' : 'Sorry, an error occurred. Please try again.');
        setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: errorText }]);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[650px] border border-slate-200 rounded-3xl bg-white shadow-xl overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Chat Header */}
      <div className="p-5 border-b border-slate-100 bg-[#04142E] text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#00D1FF]/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-[#00D1FF]" />
          </div>
          <div>
            <h3 className="font-bold">Titan AI Assistant</h3>
            <p className="text-[10px] text-[#00D1FF] uppercase tracking-widest">Demo Mode</p>
          </div>
        </div>
        <button onClick={() => window.location.reload()} className="p-2 hover:bg-white/10 rounded-full transition">
          <RefreshCw className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F8FAFF]">
        {messages.map(msg => (
          <div key={msg.id} className={`flex flex-col gap-2 ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl shadow-sm ${msg.sender === 'user' ? 'bg-[#00D1FF] text-[#04142E] rounded-br-none' : 'bg-white border border-slate-100 rounded-bl-none'}`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
            </div>
            
            {msg.type === 'property' && msg.data && (
                <div className="w-full max-w-[300px] bg-white p-4 rounded-2xl border border-slate-200 shadow-md">
                    <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400" alt="property" className="w-full h-32 object-cover rounded-xl mb-3" />
                    <h4 className="font-bold text-sm">{msg.data.name}</h4>
                    <p className="text-xs text-slate-500 mb-2">{msg.data.neighborhood} • {msg.data.type}</p>
                    <p className="font-bold text-sky-600 mb-2">{msg.data.price.toLocaleString()} SAR</p>
                    <button className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition">View Details</button>
                </div>
            )}

            {msg.quickReplies && (
                <div className="flex flex-wrap gap-2 mt-2">
                    {msg.quickReplies.map((qr, i) => (
                        <button key={i} onClick={() => handleSendMessage(qr.label, qr.action)} className="px-4 py-2 bg-white border border-[#00D1FF]/30 text-sky-700 text-xs font-bold rounded-full hover:bg-[#EAF7FF] transition">
                            {qr.label}
                        </button>
                    ))}
                </div>
            )}
          </div>
        ))}
        {isLoading && (
            <div className="flex items-center gap-2 text-slate-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-xs">{language === 'ar' ? 'جاري الكتابة...' : 'Titan is typing...'}</span>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Composer */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex gap-2">
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
            placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Type your message...'}
            className="flex-1 p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#00D1FF] transition"
            />
            <button onClick={() => handleSendMessage(input)} disabled={!input.trim()} className="bg-[#04142E] text-white p-4 rounded-2xl hover:bg-[#0B1F4B] disabled:opacity-50 disabled:cursor-not-allowed">
            <Send className="w-5 h-5" />
            </button>
        </div>
        <p className="text-center text-[9px] text-slate-400 mt-2">
            {language === 'ar' ? 'هذا عرض تجريبي باستخدام بيانات عقارية خيالية.' : 'This is a demonstration using fictional property information.'}
        </p>
      </div>
    </div>
  );
};
