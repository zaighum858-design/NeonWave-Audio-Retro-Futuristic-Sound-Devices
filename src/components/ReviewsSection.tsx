import React, { useState } from 'react';
import { REVIEWS } from '../data/products';
import { Star, MessageSquareQuote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [likes, setLikes] = useState<Record<string, number>>({
    'rev-1': 48,
    'rev-2': 32,
    'rev-3': 77,
    'rev-4': 54,
  });
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    if (likedMap[id]) {
      setLikes((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedMap((prev) => ({ ...prev, [id]: false }));
    } else {
      setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedMap((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <section id="reviews" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-pink-400 uppercase mb-3 neon-glow-pink">
          <MessageSquareQuote className="w-4 h-4 text-pink-400" />
          <span>VERIFIED TESTIMONIALS</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white mb-6">
          CUSTOMER <span className="text-pink-400 neon-glow-pink">REVIEWS</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed sm:leading-loose">
          Read candid impressions from synthwave producers, competitive esports athletes, audio engineers,
          and nocturnal commuters experiencing NeonWave hardware worldwide.
        </p>
      </div>

      {/* Testimonial Cards Grid with Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {REVIEWS.map((rev) => {
          const isLiked = likedMap[rev.id];
          return (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-[#14062a]/85 border border-pink-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(255,42,133,0.15)] hover:border-pink-500/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Buyer Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>VERIFIED PURCHASE</span>
                  </div>
                </div>

                {/* Review Text with Generous Line Height and Letter Spacing */}
                <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed sm:leading-loose tracking-wide mb-6 italic">
                  "{rev.comment}"
                </p>

                {/* Reviewed Product Name */}
                <div className="text-xs font-mono text-pink-300/90 mb-6 flex items-center gap-2">
                  <span className="text-slate-400">Reviewing:</span>
                  <span className="font-semibold underline decoration-pink-500/50">{rev.product}</span>
                </div>
              </div>

              {/* Author Footer info */}
              <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-11 h-11 rounded-full object-cover border border-pink-500/40"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white tracking-wide">
                      {rev.author}
                    </h4>
                    <p className="text-xs text-slate-400">{rev.role}</p>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      {rev.date}
                    </span>
                  </div>
                </div>

                {/* Helpful Like Button */}
                <button
                  onClick={() => toggleLike(rev.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer border ${
                    isLiked
                      ? 'bg-pink-500/30 border-pink-500 text-pink-200'
                      : 'bg-purple-950/40 border-purple-800/40 text-slate-400 hover:text-slate-200'
                  }`}
                  title="Mark review as helpful"
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'text-pink-400' : ''}`} />
                  <span>{likes[rev.id] || 0}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aggregate rating badge */}
      <div className="mt-14 max-w-md mx-auto text-center p-6 rounded-2xl bg-purple-950/30 border border-purple-800/30 backdrop-blur-md">
        <div className="flex items-center justify-center gap-2 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-sm font-semibold text-white tracking-wider block">
          4.89 OUT OF 5 OVERALL RATING
        </span>
        <span className="text-xs text-slate-400">
          Based on 1,420+ authentic customer submissions worldwide
        </span>
      </div>
    </section>
  );
};
