import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderComplete, setOrderComplete] = useState<boolean>(false);
  const [trackingId, setTrackingId] = useState<string>('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 15;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'SYNTH15' || clean === 'SYNTH80' || clean === 'RETRO20') {
      const rate = clean === 'SYNTH15' ? 0.15 : 0.2;
      setAppliedDiscount(rate);
      setPromoMessage(`Voucher applied! ${rate * 100}% off total`);
    } else {
      setPromoMessage('Invalid voucher code. Try SYNTH15');
    }
  };

  const handleCompleteCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      const generatedId = 'NW-' + Math.random().toString(36).substring(2, 8).toUpperCase() + '-2026';
      setTrackingId(generatedId);
      setIsCheckingOut(false);
      setOrderComplete(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#090214]/75 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Slide-over panel */}
      <div className="relative w-full max-w-md bg-[#130526]/95 border-l border-pink-500/30 backdrop-blur-2xl h-full flex flex-col justify-between shadow-[0_0_50px_rgba(255,42,133,0.35)] z-10 text-slate-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-purple-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <h3 className="font-heading font-black text-lg text-white tracking-wider">
              YOUR SONIC VAULT
            </h3>
            <span className="text-xs font-mono text-pink-300 px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/30">
              {items.reduce((acc, it) => acc + it.quantity, 0)} items
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-purple-900/40 hover:bg-pink-500/30 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
          {orderComplete ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="font-heading font-black text-xl text-white">ORDER TRANSMITTED!</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your high-fidelity hardware has been scheduled for priority dispatch from our
                cleanroom lab.
              </p>
              <div className="p-3.5 rounded-xl bg-purple-950/50 border border-pink-500/40 font-mono text-xs text-pink-300">
                Tracking Telemetry: <strong className="text-white block mt-1">{trackingId}</strong>
              </div>
              <button
                onClick={() => {
                  setOrderComplete(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold tracking-wider cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <p className="text-sm font-medium">Your sonic vault is currently empty.</p>
              <p className="text-xs text-slate-400">
                Explore our flagship headphones, neckbands, airbuds, or handsfree gear.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-pink-500/20 text-pink-300 border border-pink-500/40 text-xs font-semibold hover:bg-pink-500/30 transition-colors"
              >
                Discover Sound Waves
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="p-3.5 rounded-2xl bg-[#180830]/70 border border-purple-800/40 flex gap-3.5 items-center justify-between"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-heading font-bold text-white truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-[11px] text-pink-300 font-mono">
                    ${item.product.price}
                    {item.selectedColor && (
                      <span className="text-slate-400 ml-2">· {item.selectedColor}</span>
                    )}
                  </div>

                  {/* Quantity adjustment */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded-md bg-purple-900/40 hover:bg-purple-900/70 text-slate-300"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono font-bold px-1 text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded-md bg-purple-900/40 hover:bg-purple-900/70 text-slate-300"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="p-2 text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {!orderComplete && items.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-purple-900/40 bg-[#0f041e]/90 space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (e.g. SYNTH15)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-800/40 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-pink-500 font-mono"
              />
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-xs font-semibold text-pink-300 border border-pink-500/30 cursor-pointer"
              >
                Apply
              </button>
            </form>
            {promoMessage && (
              <span className="text-[11px] text-amber-300 block font-mono -mt-2">
                {promoMessage}
              </span>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-purple-900/30">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono">${subtotal}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-pink-400">
                  <span>Voucher Discount</span>
                  <span className="font-mono">-${discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Express Worldwide Shipping</span>
                <span className="font-mono text-emerald-400">
                  {shipping === 0 ? 'FREE' : `$${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-purple-900/40">
                <span>Total</span>
                <span className="font-heading font-black text-pink-400">${total}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={handleCompleteCheckout}
              disabled={isCheckingOut}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs tracking-widest uppercase text-slate-950 bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 hover:from-pink-400 hover:to-amber-300 shadow-[0_0_25px_rgba(255,42,133,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <span>SYNCHRONIZING TELEMETRY...</span>
              ) : (
                <>
                  <span>PROCEED TO CYBER CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>256-bit Encrypted Transaction · 30-Day Sonic Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
