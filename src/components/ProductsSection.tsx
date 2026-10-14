import React, { useState, useMemo } from 'react';
import { Product, CATEGORIES } from '../data/products';
import { ShoppingBag, Eye, Star, Zap, Check, Battery, Radio, Sparkles } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onOpenQuickView: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onAddToCart,
  onOpenQuickView,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSearch =
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1600);
  };

  const getBorderClass = (color: Product['accentColor']) => {
    switch (color) {
      case 'cyan':
        return 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]';
      case 'purple':
        return 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]';
      case 'orange':
        return 'border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]';
      case 'pink':
      default:
        return 'border-pink-500/40 hover:border-pink-400 hover:shadow-[0_0_25px_rgba(255,42,133,0.45)]';
    }
  };

  const getGlowTagColor = (color: Product['accentColor']) => {
    switch (color) {
      case 'cyan':
        return 'text-cyan-400';
      case 'purple':
        return 'text-purple-300';
      case 'orange':
        return 'text-amber-400';
      case 'pink':
      default:
        return 'text-pink-400';
    }
  };

  return (
    <section id="products" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-[0.25em] text-pink-400 uppercase mb-3 neon-glow-pink">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>CYBERNETIC CATALOG</span>
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight text-white mb-6">
          TRANSCENDENT <span className="text-pink-400 neon-glow-pink">AUDIO GEAR</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 tracking-wide leading-relaxed">
          Four distinct form factors engineered without compromise. Over-ear planar flagships,
          ergonomic memory titanium neckbands, true-wireless spatial airbuds, and zero-loss analog handsfree.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-purple-900/40">
        {/* Category Filter Tabs (Interactive buttons allowed per constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#17062e]/70 border border-pink-500/30 rounded-2xl backdrop-blur-md">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(255,42,133,0.6)] font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-purple-900/30'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search models, specs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 md:w-56 px-3.5 py-2 rounded-xl bg-purple-950/40 border border-purple-700/40 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/80 backdrop-blur-md transition-colors"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-700/40 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-pink-500/80 backdrop-blur-md cursor-pointer"
          >
            <option value="featured" className="bg-[#120424]">Featured</option>
            <option value="price-asc" className="bg-[#120424]">Price: Low to High</option>
            <option value="price-desc" className="bg-[#120424]">Price: High to Low</option>
            <option value="rating" className="bg-[#120424]">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-3xl bg-purple-950/30 border border-purple-800/30 backdrop-blur-md">
          <p className="text-slate-300 text-base mb-3">No sonic devices match your current filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2 text-xs font-semibold text-pink-300 hover:text-white bg-pink-500/20 border border-pink-500/40 rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];
            const borderStyling = getBorderClass(product.accentColor);
            const tagColor = getGlowTagColor(product.accentColor);

            return (
              <div
                key={product.id}
                className={`group relative rounded-3xl bg-[#140628]/85 backdrop-blur-xl border ${borderStyling} p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Top Image & Quick View trigger */}
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#0c0318] mb-5 border border-white/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 contrast-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay for synthwave depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#140628] via-transparent to-transparent opacity-60" />

                    {/* Badge if present (Subtle text kicker) */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0e031c]/80 border border-pink-500/40 text-[10px] font-mono tracking-widest text-pink-300 font-bold backdrop-blur-md">
                        {product.badge}
                      </div>
                    )}

                    {/* Quick View Button overlay */}
                    <button
                      onClick={() => onOpenQuickView(product)}
                      className="absolute bottom-3 right-3 p-2.5 rounded-full bg-slate-900/85 hover:bg-pink-600 text-slate-200 hover:text-white border border-white/20 transition-all duration-200 cursor-pointer shadow-lg group-hover:scale-105"
                      title="Quick Spec Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clean Metadata line: Category & Rating (Zero-pill text) */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="uppercase tracking-widest font-mono text-[11px] font-semibold text-pink-300/90">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-300">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-slate-200">{product.rating}</span>
                      <span className="text-slate-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-pink-300 transition-colors mb-2">
                    {product.name}
                  </h3>

                  {/* Tagline / Subtitle with generous line height */}
                  <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed tracking-wide mb-4">
                    {product.tagline}
                  </p>

                  {/* Key Hardware Specs highlights */}
                  <div className="space-y-1.5 py-2.5 my-2 border-y border-purple-900/30 text-[11px] text-slate-300">
                    <div className="flex items-center gap-2">
                      <Zap className={`w-3.5 h-3.5 ${tagColor}`} />
                      <span className="truncate">{product.specs.driver}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{product.specs.batteryLife}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="truncate">{product.specs.connectivity}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Pricing & Add to Cart button */}
                <div className="pt-3 mt-2 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading font-black text-2xl text-white">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-pink-300/80 uppercase font-mono tracking-wider">
                      Free Global Express
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                        : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(255,42,133,0.4)] hover:shadow-[0_0_25px_rgba(255,42,133,0.6)] active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>ADDED</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
