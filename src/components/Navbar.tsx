import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Music2, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { synthAudio } from '../utils/audioSynth';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Products', href: '#products' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'Support', href: '#support' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleSynthMusic = () => {
    const active = synthAudio.toggle();
    setAmbientAudioActive(active);
  };

  return (
    <>
      {/* Floating Navbar Container with top margin */}
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full px-5 md:px-8 py-3 md:py-3.5 flex items-center justify-between border ${
            isScrolled
              ? 'bg-[#150528]/85 border-pink-500/50 backdrop-blur-xl shadow-[0_0_25px_rgba(255,42,133,0.35)]'
              : 'bg-[#16062b]/60 border-pink-500/30 backdrop-blur-lg shadow-[0_0_20px_rgba(255,42,133,0.2)]'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-400 p-[1.5px] shadow-[0_0_12px_rgba(255,42,133,0.6)] group-hover:shadow-[0_0_20px_rgba(255,42,133,0.9)] transition-all">
              <div className="w-full h-full rounded-full bg-[#140624] flex items-center justify-center">
                <Music2 className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-widest text-lg bg-gradient-to-r from-pink-400 via-purple-300 to-amber-300 bg-clip-text text-transparent neon-glow-pink">
                NEONWAVE
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-pink-300/80 -mt-1 font-mono">
                AUDIO CORP
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Clean typography, zero-pill per design rules) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-sm font-medium tracking-wide text-slate-200 hover:text-pink-300 transition-colors duration-200 relative py-1 group cursor-pointer"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-amber-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </div>

          {/* Action buttons: Ambient Synth Vibe toggle & Shopping Cart */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Ambient Synth Vibe Player button */}
            <button
              onClick={toggleSynthMusic}
              title={ambientAudioActive ? 'Mute Retro Synth Ambience' : 'Play Retro Synth Ambience'}
              className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                ambientAudioActive
                  ? 'bg-pink-500/25 border-pink-400 text-pink-200 shadow-[0_0_15px_rgba(255,42,133,0.5)]'
                  : 'bg-purple-950/40 border-purple-700/40 text-slate-300 hover:border-pink-500/50 hover:text-white'
              }`}
            >
              {ambientAudioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                  <span className="tracking-wider">SYNTH: LIVE</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  <span className="tracking-wider">SYNTH VIBE</span>
                </>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              aria-label="Open Shopping Cart"
              className="relative p-2 md:px-3.5 md:py-1.5 rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 hover:from-pink-600/50 hover:to-purple-600/50 border border-pink-500/40 text-pink-200 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,42,133,0.3)] cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-pink-300" />
              <span className="hidden md:inline text-xs font-semibold tracking-wider">BAG</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[10px] font-bold rounded-full bg-gradient-to-r from-pink-500 to-amber-500 text-slate-950 shadow-[0_0_10px_rgba(255,42,133,0.8)]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-full bg-purple-950/50 border border-pink-500/30 text-pink-300 hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center items-center p-6 bg-[#0e041d]/95 backdrop-blur-2xl transition-all duration-300">
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 p-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center gap-6 w-full max-w-sm text-center">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="font-heading font-black tracking-widest text-2xl text-pink-400 neon-glow-pink">
                NEONWAVE
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg font-medium text-slate-100 hover:text-pink-400 tracking-wider py-2 border-b border-purple-900/40 w-full transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            {/* Audio Toggle on Mobile */}
            <button
              onClick={toggleSynthMusic}
              className="mt-4 flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-purple-900/40 border border-pink-500/30 text-pink-200 text-sm font-semibold tracking-wider"
            >
              {ambientAudioActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-pink-400" />
                  <span>SYNTH AMBIENCE: ACTIVE</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span>PLAY SYNTH AMBIENCE</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
