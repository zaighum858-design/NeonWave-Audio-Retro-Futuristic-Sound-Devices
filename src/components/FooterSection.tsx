import React, { useState } from 'react';
import { Music2, ArrowUp, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-12 border-t border-pink-500/30 bg-[#0c0318]/80 backdrop-blur-2xl text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Newsletter & Brand summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-purple-900/40 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 p-[1.5px] shadow-[0_0_12px_rgba(255,42,133,0.7)]">
                <div className="w-full h-full rounded-full bg-[#120424] flex items-center justify-center">
                  <Music2 className="w-4 h-4 text-pink-400" />
                </div>
              </div>
              <span className="font-heading font-black tracking-widest text-xl text-white neon-glow-pink">
                NEONWAVE AUDIO
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed tracking-wide">
              Meticulously engineered audio hardware crafted for purists, producers, and midnight
              cruisers. Blending 80s analog warmth with 2099 cyberpunk fidelity.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-pink-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Hi-Res Audio Certified</span>
              </span>
              <span aria-hidden="true" className="text-purple-600">·</span>
              <span>LDAC 990kbps</span>
              <span aria-hidden="true" className="text-purple-600">·</span>
              <span>aptX Lossless</span>
            </div>
          </div>

          {/* Quick Links Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-pink-400">
              EXPLORE GEAR
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-pink-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-pink-300 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#products" className="hover:text-pink-300 transition-colors">Products Catalog</a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-pink-300 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-pink-300 transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#support" className="hover:text-pink-300 transition-colors">Support & Warranty</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-amber-400">
              THE MIDNIGHT FREQUENCY
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
              Subscribe for private batch drops, custom retro synth firmware presets, and 15% off your first hardware order.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-pink-500/20 border border-pink-500/50 flex items-center gap-2.5 text-xs text-pink-200">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>VIP code generated: Use <strong className="text-amber-300">SYNTH15</strong> at checkout!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800/50 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-slate-950 font-semibold text-xs tracking-wider transition-all cursor-pointer flex items-center gap-1 shadow-[0_0_15px_rgba(255,42,133,0.4)]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} NeonWave Audio Corporation. All rights reserved.
            Engineered with passion for retro-futuristic soundscapes.
          </div>

          <div className="flex items-center gap-6">
            <a href="#support" className="hover:text-pink-300 transition-colors">Privacy Policy</a>
            <a href="#support" className="hover:text-pink-300 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-pink-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
