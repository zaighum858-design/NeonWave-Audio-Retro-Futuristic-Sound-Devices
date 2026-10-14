import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { HelpCircle, ChevronDown, Send, CheckCircle, Mail, MessageSquare, PhoneCall } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deviceCategory: 'headphone',
    subject: '',
    message: '',
  });

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        deviceCategory: 'headphone',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="support" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase mb-3 neon-glow-cyan">
          <HelpCircle className="w-4 h-4 text-cyan-400" />
          <span>CYBERNETIC ASSISTANCE</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white mb-6">
          CUSTOMER <span className="text-cyan-400 neon-glow-cyan">SUPPORT</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed sm:leading-loose">
          Whether you need assistance with firmware updates, multipoint pairing, warranty coverage,
          or expedited courier dispatch, our audio specialists stand ready around the clock.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive FAQ Accordion */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 mb-2 text-pink-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <MessageSquare className="w-4 h-4 text-pink-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#15062c]/90 border-pink-500/50 shadow-[0_0_20px_rgba(255,42,133,0.25)]'
                    : 'bg-[#120524]/80 border-purple-900/50 hover:border-purple-700/60'
                } backdrop-blur-md overflow-hidden`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-white tracking-wide">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-purple-950/60 text-pink-400 border border-pink-500/30 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-pink-500/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed sm:leading-loose tracking-wide border-t border-purple-900/30 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {/* Direct channels callout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-center gap-3">
              <Mail className="w-5 h-5 text-pink-400" />
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-mono block">Direct Dispatch</span>
                <span className="text-xs text-white font-medium">support@neonwaveaudio.com</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 flex items-center gap-3">
              <PhoneCall className="w-5 h-5 text-cyan-400" />
              <div>
                <span className="text-[11px] text-slate-400 uppercase font-mono block">Hotline 24/7</span>
                <span className="text-xs text-white font-medium">+1 (800) 860-WAVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-5">
          <div className="p-7 sm:p-8 rounded-3xl bg-[#14062a]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.18)]">
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>TRANSMIT A MESSAGE</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 tracking-wide">
              Direct Sonic Inquiry
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed tracking-wide mb-6">
              Our acoustic technicians review every submission and reply in under two hours.
            </p>

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white">Transmission Received</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your ticket has been logged into the terminal. An acoustic specialist will dispatch
                  a response to your inbox shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2 text-xs font-semibold text-pink-300 hover:text-white bg-pink-500/20 border border-pink-500/40 rounded-xl"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-medium mb-1 tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kaelen Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-700/40 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kaelen@neonwave.io"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-700/40 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 tracking-wide">
                    Hardware Category
                  </label>
                  <select
                    value={formData.deviceCategory}
                    onChange={(e) => setFormData({ ...formData, deviceCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-700/40 text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                  >
                    <option value="headphone" className="bg-[#120424]">Over-Ear Headphones</option>
                    <option value="neckband" className="bg-[#120424]">Ergonomic Neckbands</option>
                    <option value="airbuds" className="bg-[#120424]">True Wireless Airbuds</option>
                    <option value="handsfree" className="bg-[#120424]">Handsfree Analog IEMs</option>
                    <option value="warranty" className="bg-[#120424]">Warranty & NeonCare™ Claim</option>
                    <option value="other" className="bg-[#120424]">General Inquiries / Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1 tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your question, pairing setup, or request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-purple-950/50 border border-purple-700/40 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl font-semibold text-xs sm:text-sm tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 hover:from-cyan-300 hover:to-amber-200 shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>TRANSMIT DISPATCH</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
