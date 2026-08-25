import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { RFQModal } from './components/RFQModal';
import { SEOJsonLd } from './components/SEOJsonLd';

// Views
import { HomeView } from './views/HomeView';
import { CategoryView } from './views/CategoryView';
import { ProductDetailView } from './views/ProductDetailView';
import { ComparisonView } from './views/ComparisonView';
import { BlogView } from './views/BlogView';
import { ExpertsView } from './views/ExpertsView';
import { B2BExportView } from './views/B2BExportView';
import { CertificationsView } from './views/CertificationsView';
import { HelpCenterView } from './views/HelpCenterView';

import { CartItem, Product } from './types';
import { PRODUCTS } from './data/mockData';

export function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0],
      quantity: 1,
      selectedColor: 'Matte Alpine White',
      selectedCapacity: '5.0L Dual Hopper',
      unitPrice: PRODUCTS[0].price,
      isB2b: false,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // B2B RFQ Modal State
  const [isRFQOpen, setIsRFQOpen] = useState<boolean>(false);

  // Storefront Currency State
  const [currency, setCurrency] = useState<string>('USD');

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, viewParam]);

  const handleNavigate = (view: string, param?: string) => {
    setCurrentView(view);
    setViewParam(param);
  };

  const handleAddToCart = (product: Product, quantity: number, isB2b: boolean) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id && item.isB2b === isB2b
    );

    const unitPrice = isB2b
      ? product.b2bPriceTiers[0]?.pricePerUnit || product.price * 0.5
      : product.price;

    if (existingIndex > -1) {
      const updated = [...cartItems];
      updated[existingIndex].quantity += quantity;
      setCartItems(updated);
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}`,
        product,
        quantity,
        selectedColor: product.colors[0]?.name || 'Standard',
        selectedCapacity: product.capacities[0] || 'Standard',
        unitPrice,
        isB2b,
      };
      setCartItems([...cartItems, newItem]);
    }

    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1D1B] font-sans antialiased flex flex-col justify-between selection:bg-[#FF7A45]/20 selection:text-[#0F3D2E]">
      
      {/* Dynamic SEO JSON-LD Schemas (Article, Product, FAQPage, Organization) */}
      <SEOJsonLd view={currentView} selectedSlug={viewParam} />

      <div>
        {/* Top Trust & B2B Switch Announcement Bar */}
        <AnnouncementBar
          onOpenRFQ={() => setIsRFQOpen(true)}
          currency={currency}
          onCurrencyChange={setCurrency}
        />

        {/* Sticky Glass Navbar */}
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenRFQ={() => setIsRFQOpen(true)}
        />

        {/* Dynamic Route View Switcher */}
        <main>
          {currentView === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onAddToCart={handleAddToCart}
              onOpenRFQ={() => setIsRFQOpen(true)}
            />
          )}

          {(currentView === 'category' || currentView === 'categories') && (
            <CategoryView
              currentCategorySlug={viewParam || 'all'}
              onSelectCategory={(slug) => handleNavigate('category', slug)}
              onAddToCart={handleAddToCart}
              onViewProduct={(slug) => handleNavigate('product', slug)}
              onOpenRFQ={() => setIsRFQOpen(true)}
            />
          )}

          {currentView === 'product' && (
            <ProductDetailView
              slug={viewParam || PRODUCTS[0].slug}
              onAddToCart={handleAddToCart}
              onOpenRFQ={() => setIsRFQOpen(true)}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'compare' && (
            <ComparisonView
              onAddToCart={handleAddToCart}
              onOpenRFQ={() => setIsRFQOpen(true)}
              onViewProduct={(slug) => handleNavigate('product', slug)}
            />
          )}

          {currentView === 'blogs' && (
            <BlogView
              initialSlug={viewParam}
              onViewProduct={(slug) => handleNavigate('product', slug)}
              onAddToCart={handleAddToCart}
            />
          )}

          {currentView === 'experts' && (
            <ExpertsView
              onExploreProducts={() => handleNavigate('categories')}
            />
          )}

          {currentView === 'b2b' && (
            <B2BExportView
              onOpenRFQ={() => setIsRFQOpen(true)}
              onViewProduct={(slug) => handleNavigate('product', slug)}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'certifications' && (
            <CertificationsView
              onOpenRFQ={() => setIsRFQOpen(true)}
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'help' && (
            <HelpCenterView />
          )}
        </main>
      </div>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenRFQ={() => setIsRFQOpen(true)}
      />

      {/* Slide-out Cart Drawer with Coupon & Free Shipping Progress */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
        onOpenRFQ={() => {
          setIsCartOpen(false);
          setIsRFQOpen(true);
        }}
      />

      {/* Interactive B2B Wholesale & OEM/ODM RFQ Quotation Modal */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={() => setIsRFQOpen(false)}
      />

    </div>
  );
}

export default App;
