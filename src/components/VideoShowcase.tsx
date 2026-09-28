import React, { useRef, useState } from 'react';
import { Play, Volume2, Maximize2, MessageCircle, AlertCircle, Sparkles, Film, CheckCircle2 } from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const whatsappMessage =
    'Hello TITAN AI AGENCY, I watched your real estate video demo and would like to discuss a promotional video for my business.';
  const whatsappUrl = `https://wa.me/966534182945?text=${encodeURIComponent(whatsappMessage)}`;

  const handleStartPlay = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If playback couldn't start (e.g. file pending placement), set error state gracefully
          setHasError(true);
        });
    }
  };

  return (
    <section
      id="video-showcase"
      className="relative py-20 sm:py-28 bg-[#050811] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Video Showcase</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Real Estate Promotional Video
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Demo Project
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A property promotional concept combining animated property imagery, clean titles, background music, and agency branding.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] bg-[#03060d] shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
            {/* Top Browser/Player Chrome Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900/90 border-b border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-slate-400 hidden xs:inline-block">
                  Titan_Real_Estate_Promo.mp4
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  1920 × 1080 (16:9)
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  0:24
                </span>
              </div>
            </div>

            {/* 16:9 Video Canvas Frame */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              {/* HTML5 Video Element */}
              <video
                ref={videoRef}
                id="titan-promo-video-player"
                src="/Titan_Real_Estate_Promo.mp4"
                playsInline
                preload="metadata"
                controls={isPlaying || isLoaded}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedMetadata={() => {
                  setIsLoaded(true);
                  setHasError(false);
                }}
                onError={() => {
                  setHasError(true);
                  setIsLoaded(false);
                }}
                className={`w-full h-full object-contain ${hasError ? 'hidden' : 'block'}`}
              >
                <source src="/Titan_Real_Estate_Promo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Clean Play Screen (shown prior to playback or when video is ready to start) */}
              {!isPlaying && !hasError && (
                <div
                  onClick={handleStartPlay}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/90 via-black/60 to-black/80 cursor-pointer p-6 transition-all duration-300 hover:bg-black/50"
                  role="button"
                  tabIndex={0}
                  aria-label="Play Real Estate Promotional Video"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleStartPlay();
                    }
                  }}
                >
                  {/* Glowing Play Trigger */}
                  <div className="relative mb-5 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 hover:bg-blue-500 border border-blue-400/40 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  <div className="text-center space-y-1.5">
                    <span className="text-white font-display text-base sm:text-lg font-bold tracking-tight">
                      Watch Real Estate Promo Video
                    </span>
                    <p className="text-slate-400 text-xs sm:text-sm font-mono">
                      1080p Full HD · 24 Seconds · Sound & Music
                    </p>
                  </div>
                </div>
              )}

              {/* Clean Graceful Standby Screen if the user hasn't copied the physical MP4 into public/ yet */}
              {hasError && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-950 via-[#060a14] to-slate-950">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                    <Film className="w-8 h-8" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 uppercase mb-3">
                    Video Asset Configured
                  </span>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                    Real Estate Promotional Video Demo
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mb-4 leading-relaxed">
                    Permanent asset path configured at <code className="text-blue-300 bg-white/[0.06] px-1.5 py-0.5 rounded font-mono">/Titan_Real_Estate_Promo.mp4</code>.
                  </p>

                  <div className="text-[11px] sm:text-xs text-slate-400 font-mono bg-black/50 border border-white/[0.08] rounded-xl px-4 py-3 max-w-md">
                    Place <span className="text-emerald-400">Titan_Real_Estate_Promo.mp4</span> into the project's <span className="text-white">public/</span> directory to enable instant video streaming and permanent Netlify build distribution.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar: Player Features & Small Note */}
            <div className="px-4 sm:px-6 py-3.5 bg-slate-950/80 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <p className="text-slate-400 font-normal italic">
                Illustrative property visuals. Not footage of an actual property tour.
              </p>
              <div className="flex items-center gap-3 text-slate-500 text-[11px] font-mono shrink-0">
                <span>Sound & Captions</span>
                <span>•</span>
                <span>Fullscreen Support</span>
                <span>•</span>
                <span>Inline Mobile Playback</span>
              </div>
            </div>
          </div>

          {/* Action Button Below the Player */}
          <div className="mt-8 text-center flex flex-col items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="request-similar-video-btn"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Request a Similar Video</span>
            </a>

            <p className="mt-3 text-xs text-slate-400 font-mono">
              Direct consultation via WhatsApp • Agreed scope & concept prior to production
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
