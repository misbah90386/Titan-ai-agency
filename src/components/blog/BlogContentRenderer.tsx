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
        className="blog-prose space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed
          [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h2]:border-b [&_h2]:border-white/[0.06] [&_h2]:pb-3
          [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:tracking-tight
          [&_h4]:text-lg [&_h4]:font-display [&_h4]:font-semibold [&_h4]:text-white [&_h4]:mt-6 [&_h4]:mb-2
          [&_p]:leading-relaxed [&_p]:mb-6
          [&_strong]:text-white [&_strong]:font-semibold
          [&_a]:text-blue-400 [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-blue-300 [&_a]:transition-colors
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:my-6 [&_ul]:text-slate-300
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2 [&_ol]:my-6 [&_ol]:text-slate-300
          [&_li]:pl-1 [&_li::marker]:text-blue-400
          [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:bg-blue-500/[0.04] [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-xl [&_blockquote]:my-8 [&_blockquote]:text-slate-200 [&_blockquote]:italic [&_blockquote]:font-serif
          [&_code]:text-emerald-400 [&_code]:bg-[#0d1322] [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:border [&_code]:border-white/10
          [&_pre]:bg-[#090d16] [&_pre]:p-5 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:overflow-x-auto [&_pre]:my-6
          [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10 [&_img]:my-8 [&_img]:w-full [&_img]:shadow-2xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // If plain markdown / paragraphs
  const paragraphs = content.split('\n\n').filter((p) => p.trim() !== '');

  return (
    <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
      {paragraphs.map((para, i) => {
        const trimmed = para.trim();
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl sm:text-2xl font-display font-semibold text-white mt-8 mb-3">
              {trimmed.replace(/^###\s+/, '')}
            </h3>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl sm:text-3xl font-display font-bold text-white mt-12 mb-4 border-b border-white/[0.06] pb-3">
              {trimmed.replace(/^##\s+/, '')}
            </h2>
          );
        }
        if (trimmed.startsWith('# ')) {
          return (
            <h2 key={i} className="text-3xl font-display font-bold text-white mt-12 mb-4">
              {trimmed.replace(/^#\s+/, '')}
            </h2>
          );
        }
        if (trimmed.startsWith('> ')) {
          return (
            <blockquote key={i} className="border-l-4 border-blue-500 bg-blue-500/[0.04] py-4 px-6 rounded-r-xl my-8 text-slate-200 italic">
              {trimmed.replace(/^>\s+/, '')}
            </blockquote>
          );
        }
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          const items = trimmed.split('\n').map((l) => l.replace(/^[-*]\s+/, ''));
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 my-6 text-slate-300">
              {items.map((item, idx) => (
                <li key={idx} className="pl-1 marker:text-blue-400">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="leading-relaxed">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};
