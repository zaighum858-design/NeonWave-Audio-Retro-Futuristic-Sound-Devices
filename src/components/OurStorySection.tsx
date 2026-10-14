import React from 'react';
import { History, Sparkles, Compass, Flame } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  const milestones = [
    {
      year: '1986',
      title: 'The Underground Genesis',
      location: 'Akihabara, Tokyo',
      description:
        'In a cramped subterranean electronics lab beneath the glowing neon alleyways of Tokyo, a collective of synth engineers and analog purists hand-wound the first ultra-thin planar ribbon driver. Frustrated by muddy cassette players and sterile studio monitors, they engineered acoustic chambers capable of delivering visceral sub-bass without blurring the crystalline highs of Yamaha DX7 synthesizers.',
    },
    {
      year: '1998',
      title: 'The Coastal Sunset Drift',
      location: 'Miami & Pacific Coast',
      description:
        'The sound of NeonWave migrated to open coastal highways. Cruising along ocean shorelines at golden hour with the top down inspired our distinct acoustic profile: warm analog resonance, holographic stereo width, and effortless dynamic headroom tuned to the pulse of drum machines and tape echo.',
    },
    {
      year: '2019',
      title: 'Aero-Titanium Hardware',
      location: 'Berlin & Kyoto Labs',
      description:
        'Transitioning into modern cybernetic standards, our acoustic architects introduced aerospace memory titanium and liquid silicone ergonomics to neckbands and in-ear monitors—allowing continuous uninterrupted music through rain, road trips, and studio marathon sessions.',
    },
    {
      year: '2026',
      title: 'The Cyber-Planar Era',
      location: 'Global Cybernetic Sound',
      description:
        'Today, NeonWave manufactures sound artifacts for those who refuse the boring, disposable plastic audio trend. Every pair of headphones, neckband, and handsfree set is calibrated to awaken emotion, spark nostalgia, and blast your favorite frequencies straight into tomorrow.',
    },
  ];

  return (
    <section id="our-story" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-amber-400 uppercase mb-3 neon-glow-gold">
          <History className="w-4 h-4 text-amber-400" />
          <span>CHRONICLES OF SOUND</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white mb-6">
          OUR <span className="text-pink-400 neon-glow-pink">STORY</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 tracking-wider leading-relaxed sm:leading-loose">
          Born where the neon glow of retro synthesizers meets the boundless horizon of an ocean sunset.
          We design acoustic artifacts for listeners who believe audio should be felt in the soul.
        </p>
      </div>

      {/* Narrative Origin Feature Block (Extremely generous line & word spacing) */}
      <div className="relative rounded-3xl bg-[#14062a]/85 border border-pink-500/30 p-8 sm:p-12 mb-16 backdrop-blur-xl shadow-[0_0_35px_rgba(255,42,133,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 text-slate-200">
            <div className="flex items-center gap-2 text-pink-400 font-mono text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>THE ACOUSTIC CONSTITUTION</span>
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-wide">
              Forged in Nostalgia, Engineered for Tomorrow
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-normal tracking-wide leading-loose">
              NeonWave was not born in a corporate boardroom. It was sparked in a world of blinking VU meters,
              glowing vacuum tubes, and synth arpeggios bouncing across midnight neon avenues. Most modern consumer
              headphones compress audio into lifeless, flat streams. We rebelled against that monotony.
            </p>
            <p className="text-sm sm:text-base text-slate-300 font-normal tracking-wide leading-loose">
              We spent four decades refining our proprietary acoustic chambers—tuning acoustic ports, selecting
              aerospace beryllium foils, and custom-braiding low-capacitance pure silver wiring. The result is an audio
              experience that hits with seismic low-end depth yet maintains surgical, panoramic separation across
              every synthesizer track, vocal harmony, and guitar chord.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-purple-950/60 border border-purple-800/40 backdrop-blur-md">
              <div className="flex items-center gap-3 text-pink-400 font-bold mb-2">
                <Compass className="w-5 h-5 text-pink-400" />
                <span className="text-sm uppercase tracking-widest">Tokyo & Miami Lineage</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
                Hardware engineered in Japan’s precision audio capitals and sonic character sculpted along
                sun-drenched ocean speedways.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/60 border border-amber-500/30 backdrop-blur-md">
              <div className="flex items-center gap-3 text-amber-400 font-bold mb-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <span className="text-sm uppercase tracking-widest">Analog Heart, Digital Brain</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
                Seamless Bluetooth 5.4 wireless freedom powered by audiophile digital-to-analog converters and
                custom-tuned acoustic damping.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Milestones Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {milestones.map((m) => (
          <div
            key={m.year}
            className="p-7 rounded-2xl bg-[#120524]/85 border border-purple-900/50 hover:border-pink-500/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,133,0.25)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-black text-2xl sm:text-3xl bg-gradient-to-r from-pink-400 to-amber-400 bg-clip-text text-transparent neon-glow-pink">
                  {m.year}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase">
                  {m.location}
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-3 tracking-wide">
                {m.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed sm:leading-loose tracking-wide">
                {m.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
