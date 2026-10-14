import React from 'react';
import { ArrowDown, Disc3, ShieldCheck, Zap } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenFeaturedProduct: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onOpenFeaturedProduct,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-32 pb-20 text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Unboxed clean kicker (Zero-pill per design rules) */}
        <div className="flex items-center gap-3 text-xs md:text-sm font-semibold tracking-[0.25em] text-pink-300 uppercase mb-6 neon-glow-pink">
          <Disc3 className="w-4 h-4 text-pink-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>NEO-TOKYO ACOUSTIC ARCHITECTURE</span>
          <span aria-hidden="true" className="text-pink-500">·</span>
          <span className="text-amber-300">EST. 1986</span>
        </div>

        {/* Catchy Synthwave Headline */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6">
          <span className="block text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
            FEEL THE SOUND OF
          </span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text text-transparent neon-glow-pink">
            NEON HORIZONS
          </span>
        </h1>

        {/* Generously spaced subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-100 font-normal tracking-wide leading-relaxed md:leading-loose mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Immerse your senses in precision-crafted acoustic hardware. Where rich 1980s analog warmth
          unites with 2099 cyberpunk fidelity across our flagship headphones, memory neckbands,
          transparent airbuds, and zero-loss handsfree gear.
        </p>

        {/* Prominent Glowing Call-to-Action Buttons (Styled exactly per user screenshot) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 w-full max-w-lg mb-8">
          {/* 1. EXPLORE SOUND WAVES (Pill button with gradient & triple wave icon) */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto min-w-[240px] px-8 py-3.5 rounded-full font-bold tracking-wider text-white bg-gradient-to-r from-[#ff1e83] via-[#9d4edd] to-[#ffaa00] hover:from-[#ff3392] hover:via-[#af62ee] hover:to-[#ffbb1a] shadow-[0_0_35px_rgba(255,30,131,0.65)] hover:shadow-[0_0_50px_rgba(255,30,131,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3.5 cursor-pointer group"
          >
            {/* Triple stacked wavy lines icon from user's image */}
            <svg
              className="w-5 h-5 text-amber-200 shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M3 8c2.5-1.5 4.5 1.5 7 0s4.5-1.5 7 0 3 0 4 0" />
              <path d="M3 12c2.5-1.5 4.5 1.5 7 0s4.5-1.5 7 0 3 0 4 0" />
              <path d="M3 16c2.5-1.5 4.5 1.5 7 0s4.5-1.5 7 0 3 0 4 0" />
            </svg>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-black tracking-[0.18em] uppercase">
                EXPLORE
              </span>
              <span className="text-xs sm:text-sm font-black tracking-[0.18em] uppercase">
                SOUND WAVES
              </span>
            </div>
          </button>

          {/* 2. VIEW FLAGSHIP PRO X (Translucent violet pill with layered typography) */}
          <button
            onClick={onOpenFeaturedProduct}
            className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 rounded-full text-white bg-[#1f073a]/80 hover:bg-[#2c0b52]/90 border border-pink-500/40 hover:border-pink-400 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(255,42,133,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group"
          >
            <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
              View
            </span>
            <span className="text-sm font-bold text-white tracking-wide">
              Flagship Pro
            </span>
            <span className="text-xs font-bold text-pink-300 group-hover:text-pink-200">
              X
            </span>
          </button>
        </div>

        {/* Live Audio Visualizer Bars (Synthwave equalizer visual accent) */}
        <div className="mt-8 flex items-end justify-center gap-1.5 h-12 py-1">
          {[24, 45, 68, 35, 90, 75, 42, 85, 100, 70, 55, 88, 62, 40, 78, 95, 50, 30].map(
            (heightPercent, idx) => (
              <div
                key={idx}
                className="w-1.5 sm:w-2 rounded-t-full bg-gradient-to-t from-pink-500 via-purple-500 to-amber-300 transition-all duration-500"
                style={{
                  height: `${heightPercent}%`,
                  animation: `bounceWave 1.4s ease-in-out infinite alternate`,
                  animationDelay: `${idx * 0.08}s`,
                  boxShadow: '0 0 8px rgba(255, 42, 133, 0.5)',
                }}
              />
            )
          )}
        </div>

        {/* Core Specs Ticker (Unboxed metadata with separators) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-200 tracking-wide font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-1.5 text-pink-300">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>50mm Planar Drivers</span>
          </div>
          <span aria-hidden="true" className="text-purple-400">·</span>
          <div className="flex items-center gap-1.5 text-slate-100">
            <span>24-bit / 96kHz Lossless LDAC</span>
          </div>
          <span aria-hidden="true" className="text-purple-400">·</span>
          <div className="flex items-center gap-1.5 text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>3-Year Replacement Guarantee</span>
          </div>
        </div>

        {/* Down Scroll indicator */}
        <button
          onClick={onExploreClick}
          aria-label="Scroll to Products section"
          className="mt-10 text-slate-300 hover:text-pink-400 transition-colors cursor-pointer animate-bounce"
        >
          <ArrowDown className="w-5 h-5 mx-auto" />
        </button>
      </div>

      <style>{`
        @keyframes bounceWave {
          0% { transform: scaleY(0.3); opacity: 0.5; }
          100% { transform: scaleY(1.15); opacity: 1; }
        }
      `}</style>
    </section>
  );
};
