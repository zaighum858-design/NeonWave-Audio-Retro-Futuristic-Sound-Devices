/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PRODUCTS, Product } from './data/products';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { OurStorySection } from './components/OurStorySection';
import { AboutUsSection } from './components/AboutUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { SupportSection } from './components/SupportSection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Seed with 1 flagship item to showcase cart functionality right away
    { product: PRODUCTS[0], quantity: 1, selectedColor: 'Neon Magenta' },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (product: Product, selectedColor?: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedColor: selectedColor || product.colors[0]?.name,
        },
      ];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const topOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col font-['Poppins']">
      {/* Continuous Looping HTML5 Background Video with dark overlay for clear text readability */}
      <BackgroundVideo overlayOpacity={0.42} />

      {/* Floating Navbar with top padding/margin (NOT stuck to absolute top) */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Sections (In Exact Specified Order) */}
      <main className="flex-grow z-10 space-y-8 sm:space-y-16">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('products')}
          onOpenFeaturedProduct={() => setActiveModalProduct(PRODUCTS[0])}
        />

        {/* 2. Products Section (Headphones, Neckbands, Airbuds, Handsfree) */}
        <ProductsSection
          products={PRODUCTS}
          onAddToCart={(product) => handleAddToCart(product)}
          onOpenQuickView={(product) => setActiveModalProduct(product)}
        />

        {/* 3. Our Story Section */}
        <OurStorySection />

        {/* 4. About Us Section */}
        <AboutUsSection />

        {/* 5. Customer Reviews Section */}
        <ReviewsSection />

        {/* 6. Support Section (FAQ Accordion & Contact Form) */}
        <SupportSection />
      </main>

      {/* 7. Footer Section */}
      <FooterSection />

      {/* Shopping Bag Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Quick View Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
