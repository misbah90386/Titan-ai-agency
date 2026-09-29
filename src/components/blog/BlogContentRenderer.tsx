import React from 'react';

interface BlogContentRendererProps {
  content: string;
}

export const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ content }) => {
  if (!content) return null;

  // Check if content contains HTML tags
  const isHtml = /<[a-z][\s\S]*>/i.test(content);

  if (isHtml) {
    return (
      <div
        className="blog-prose space-y-6 text-[#2A3B50] text-base sm:text-lg leading-relaxed
          [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-[#071A33] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-slate-200 [&_h2]:pb-3
          [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#071A33] [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:tracking-tight
          [&_h4]:text-lg [&_h4]:font-display [&_h4]:font-semibold [&_h4]:text-[#071A33] [&_h4]:mt-6 [&_h4]:mb-2
          [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-[#2A3B50]
          [&_strong]:text-[#071A33] [&_strong]:font-bold
          [&_a]:text-[#0088CC] [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold [&_a]:hover:text-[#00D1FF] [&_a]:transition-colors
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2.5 [&_ul]:my-6 [&_ul]:text-[#2A3B50]
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2.5 [&_ol]:my-6 [&_ol]:text-[#2A3B50]
          [&_li]:pl-1 [&_li::marker]:text-[#00D1FF]
          [&_blockquote]:border-l-4 [&_blockquote]:border-[#00D1FF] [&_blockquote]:bg-[#EAF7FF]/70 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-xl [&_blockquote]:my-8 [&_blockquote]:text-[#071A33] [&_blockquote]:font-medium [&_blockquote]:italic
          [&_aside]:my-8 [&_aside]:p-6 [&_aside]:rounded-2xl [&_aside]:bg-[#F4F9FF] [&_aside]:border [&_aside]:border-[#3BA9FF]/30 [&_aside_h2]:text-[#071A33] [&_aside_h2]:mt-0 [&_aside_h2]:border-b-0
          [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:text-sm [&_table]:rounded-xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-slate-200
          [&_th]:bg-[#071A33] [&_th]:text-white [&_th]:p-3.5 [&_th]:text-left [&_th]:font-bold
          [&_td]:p-3.5 [&_td]:border-b [&_td]:border-slate-200 [&_td]:text-[#2A3B50]
          [&_code]:text-emerald-700 [&_code]:bg-slate-100 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:border [&_code]:border-slate-200
          [&_pre]:bg-[#090d16] [&_pre]:p-5 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre_code]:text-emerald-400 [&_pre_code]:bg-transparent [&_pre_code]:border-0
          [&_img]:rounded-2xl [&_img]:border [&_img]:border-slate-200 [&_img]:my-8 [&_img]:w-full [&_img]:shadow-md
          [&_.callout-card]:p-6 [&_.callout-card]:rounded-2xl [&_.callout-card]:bg-[#04142E] [&_.callout-card]:text-white [&_.callout-card]:border [&_.callout-card]:border-[#00D1FF]/40 [&_.callout-card]:my-8 [&_.callout-card]:shadow-lg
          [&_.callout-quote]:text-xl [&_.callout-quote]:sm:text-2xl [&_.callout-quote]:font-bold [&_.callout-quote]:text-[#00D1FF] [&_.callout-quote]:leading-snug
          [&_.highlight-box]:p-5 [&_.highlight-box]:rounded-xl [&_.highlight-box]:bg-[#EAF7FF] [&_.highlight-box]:border-l-4 [&_.highlight-box]:border-[#00D1FF] [&_.highlight-box]:my-6 [&_.highlight-box]:text-[#071A33]
          [&_.cta-banner]:p-8 [&_.cta-banner]:rounded-2xl [&_.cta-banner]:bg-gradient-to-br [&_.cta-banner]:from-[#04142E] [&_.cta-banner]:via-[#071A33] [&_.cta-banner]:to-[#0B1F4B] [&_.cta-banner]:text-white [&_.cta-banner]:border [&_.cta-banner]:border-[#00D1FF]/40 [&_.cta-banner]:my-10"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // If plain markdown / paragraphs
  const paragraphs = content.split('\n\n').filter((p) => p.trim() !== '');

  return (
    <div className="space-y-6 text-[#2A3B50] text-base sm:text-lg leading-relaxed">
      {paragraphs.map((para, i) => {
        const trimmed = para.trim();
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl sm:text-2xl font-display font-bold text-[#071A33] mt-8 mb-3">
              {trimmed.replace(/^###\s+/, '')}
            </h3>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl sm:text-3xl font-display font-bold text-[#071A33] mt-12 mb-4 border-b border-slate-200 pb-3">
              {trimmed.replace(/^##\s+/, '')}
            </h2>
          );
        }
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={i} className="text-3xl font-display font-bold text-[#071A33] mt-12 mb-4">
              {trimmed.replace(/^#\s+/, '')}
            </h2>
          );
        }
        if (trimmed.startsWith('> ')) {
          return (
            <blockquote key={i} className="border-l-4 border-[#00D1FF] bg-[#EAF7FF]/70 py-4 px-6 rounded-r-xl my-8 text-[#071A33] italic font-medium">
              {trimmed.replace(/^>\s+/, '')}
            </blockquote>
          );
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').map((l) => l.replace(/^[-*]\s+/, ''));
          return (
            <ul key={i} className="list-disc pl-6 space-y-2.5 my-6 text-[#2A3B50]">
              {items.map((item, idx) => (
                <li key={idx} className="pl-1 marker:text-[#00D1FF]">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed text-[#2A3B50]">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};
