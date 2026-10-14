import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Star, Zap, Battery, Radio, ShieldCheck, Check, ShoppingBag } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedColor?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#090214]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#130526]/95 border border-pink-500/40 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(255,42,133,0.3)] z-10 text-slate-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-purple-900/40 hover:bg-pink-500/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Image and sound graph */}
          <div>
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0a0214] border border-white/10 mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130526] via-transparent to-transparent opacity-60" />
              {product.badge && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#0e031c]/80 border border-pink-500/50 text-[10px] font-mono tracking-widest text-pink-300 font-bold backdrop-blur-md">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Sound Signature Frequency bars */}
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs">
              <span className="font-mono text-pink-400 font-bold uppercase tracking-wider block mb-2">
                Acoustic Curve Signature
              </span>
              <div className="space-y-1.5">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                    <span>Sub-Bass Depth (10-80Hz)</span>
                    <span className="font-mono text-pink-400">96%</span>
                  </div>
                  <div className="w-full h-1.5 bg-purple-950 rounded-full overflow-hidden">
                    <div className="w-[96%] h-full bg-gradient-to-r from-pink-500 to-amber-400 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                    <span>Midrange Vocal Presence (1-4kHz)</span>
                    <span className="font-mono text-cyan-400">98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-purple-950 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-0.5">
                    <span>Treble Air & Synth Harmonics (8-24kHz)</span>
                    <span className="font-mono text-amber-400">94%</span>
                  </div>
                  <div className="w-full h-1.5 bg-purple-950 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-amber-400 to-rose-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specs, features, and buy action */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-pink-400 uppercase tracking-widest mb-1">
                <span>{product.category}</span>
                <span aria-hidden="true">·</span>
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-slate-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>
              <h3 className="font-heading font-black text-2xl text-white tracking-wide">
                {product.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price line */}
            <div className="flex items-baseline gap-3 pb-3 border-b border-purple-900/40">
              <span className="font-heading font-black text-3xl text-white">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-xs text-emerald-400 font-mono ml-auto">
                In Stock · Ships in 24h
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed tracking-wide">
              {product.description}
            </p>

            {/* Color selection */}
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                Color Way: <strong className="text-pink-300">{selectedColor}</strong>
              </label>
              <div className="flex items-center gap-2.5">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-pink-500 bg-pink-500/20 text-white shadow-[0_0_12px_rgba(255,42,133,0.4)]'
                        : 'border-purple-800/40 bg-purple-950/30 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Hardware Specs Matrix */}
            <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-800/40 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Zap className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-slate-400">Driver Unit:</span>
                <span className="font-medium text-white">{product.specs.driver}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-400">Battery Life:</span>
                <span className="font-medium text-white">{product.specs.batteryLife}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Radio className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-slate-400">Connectivity:</span>
                <span className="font-medium text-white">{product.specs.connectivity}</span>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              onClick={handleAdd}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                added
                  ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                  : 'bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-slate-950 shadow-[0_0_25px_rgba(255,42,133,0.5)] hover:shadow-[0_0_35px_rgba(255,42,133,0.7)]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>ADDED TO SONIC VAULT!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>ADD TO CART · ${product.price}</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Includes 3-Year NeonCare™ Replacement Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
