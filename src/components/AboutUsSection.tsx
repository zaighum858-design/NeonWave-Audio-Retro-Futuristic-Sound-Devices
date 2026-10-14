import React from 'react';
import { Target, Eye, Cpu, Radio, Award, Shield } from 'lucide-react';

export const AboutUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Planar & Beryllium Drivers',
      color: 'text-pink-400',
      description:
        'We design custom ultra-thin acoustic diaphragms from scratch. Our 50mm planar magnetic and pure beryllium foils react instantly to micro-transients, delivering expansive soundscapes free of harmonic breakup.',
    },
    {
      icon: Radio,
      title: 'Zero-Jitter Wireless Links',
      color: 'text-cyan-400',
      description:
        'Equipped with state-of-the-art Bluetooth 5.4 silicon transceivers running lossless LDAC and aptX codecs at full 24-bit/96kHz bitrates, preserving every nuance as captured in master studio recordings.',
    },
    {
      icon: Shield,
      title: 'Aerospace Cyber-Build',
      color: 'text-purple-400',
      description:
        'Crafted with CNC milled aviation-grade magnesium, liquid silicone neckbands, and titanium memory wires that withstand extreme humidity, coastal salt breeze, and years of relentless daily wear.',
    },
    {
      icon: Award,
      title: 'Modular & Repairable Design',
      color: 'text-amber-400',
      description:
        'We stand against planned obsolescence. Every headphone features magnetic quick-swap earpads, user-serviceable battery modules, and detachable braided MMCX/2-pin analog cables.',
    },
  ];

  const stats = [
    { value: '40+', label: 'Years Sound Heritage', note: 'Since 1986' },
    { value: '99.4%', label: 'Acoustic Satisfaction', note: 'Over 45,000+ units' },
    { value: '0ms', label: 'Wired Analog Latency', note: 'Lossless studio feed' },
    { value: '65h', label: 'Continuous Endurance', note: 'Flagship ANC battery' },
  ];

  return (
    <section id="about-us" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3 neon-glow-cyan">
          <Target className="w-4 h-4 text-cyan-400" />
          <span>PURPOSE & PHILOSOPHY</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white mb-6">
          ABOUT <span className="text-cyan-400 neon-glow-cyan">US</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed sm:leading-loose">
          We exist to liberate audio from plastic mediocrity. Our hardware fuses retro-futuristic
          analog passion with 21st-century cybernetic acoustic engineering.
        </p>
      </div>

      {/* Mission & Vision Twin Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Mission Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#14062a]/85 border border-pink-500/35 backdrop-blur-xl shadow-[0_0_30px_rgba(255,42,133,0.18)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-pink-400 font-bold mb-4">
              <div className="p-2 rounded-xl bg-pink-500/20 border border-pink-500/40">
                <Target className="w-5 h-5 text-pink-400" />
              </div>
              <span className="text-sm font-mono tracking-widest uppercase text-pink-300">
                OUR MISSION
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4 tracking-wide">
              Rekindling the Emotional Soul of Sound
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
              To engineer acoustic instruments that transport you into sonic realms where analog warmth,
              physical bass texture, and crystalline frequencies collide. We refuse sterile compression,
              building products that make every drum beat feel alive.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-900/30 text-xs font-mono text-pink-300/80 tracking-wider">
            ACOUSTIC FIDELITY · DURABLE MATERIALS · ANALOG WARMTH
          </div>
        </div>

        {/* Vision Statement */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#14062a]/85 border border-cyan-500/35 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.18)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-cyan-400 font-bold mb-4">
              <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40">
                <Eye className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-mono tracking-widest uppercase text-cyan-300">
                OUR VISION
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4 tracking-wide">
              The Retro-Futuristic Standard for 2099
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
              A world where personal electronics are no longer disposable junk thrown into landfills after
              a single season, but timeless pieces of industrial art you cherish and rely on every day,
              combining timeless aesthetic romance with cutting-edge signal processing.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-900/30 text-xs font-mono text-cyan-300/80 tracking-wider">
            TIMELESS INDUSTRIAL ART · ZERO DISPOSABILITY · FUTURE-PROOF
          </div>
        </div>
      </div>

      {/* Engineering Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-[#120524]/85 border border-purple-900/40 hover:border-pink-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Icon className={`w-8 h-8 ${p.color} mb-4`} />
                <h4 className="font-heading font-bold text-base text-white mb-2 tracking-wide">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
                  {p.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Acoustic Lab Key Stats Ticker (Unboxed metadata) */}
      <div className="rounded-3xl bg-[#130526]/85 border border-purple-800/40 p-8 backdrop-blur-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-pink-400 via-purple-300 to-amber-300 bg-clip-text text-transparent neon-glow-pink">
                {s.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 mt-1 tracking-wide">
                {s.label}
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-0.5 tracking-wider">
                {s.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
