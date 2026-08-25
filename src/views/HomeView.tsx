import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PressWall } from '../components/PressWall';
import { CategoryGrid } from '../components/CategoryGrid';
import { Showcase360 } from '../components/Showcase360';
import { ValueBand } from '../components/ValueBand';
import { AppEcosystem } from '../components/AppEcosystem';
import { HealthValueSection } from '../components/HealthValueSection';
import { B2BWholesaleBand } from '../components/B2BWholesaleBand';
import { BestSellersSection } from '../components/BestSellersSection';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { VetAdvisorySection } from '../components/VetAdvisorySection';
import { InstagramWall } from '../components/InstagramWall';
import { FAQSection } from '../components/FAQSection';
import { EmailCapture } from '../components/EmailCapture';
import { Product } from '../types';
import { PRODUCTS } from '../data/mockData';

interface HomeViewProps {
  onNavigate: (view: string, param?: string) => void;
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onOpenRFQ: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onAddToCart,
  onOpenRFQ,
}) => {
  const flagshipProduct = PRODUCTS[0];

  const handleScrollTo360 = () => {
    const el = document.getElementById('showcase-360');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEcosystem = () => {
    onNavigate('product', flagshipProduct.slug);
  };

  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      {/* 1. Hero Section */}
      <HeroSection
        onShopClick={() => onNavigate('categories')}
        onOpenRFQ={onOpenRFQ}
        onScrollTo360={handleScrollTo360}
        onExploreEcosystem={handleScrollToEcosystem}
      />

      {/* 2. Press Logo Wall */}
      <PressWall />

      {/* 3. Category Grid */}
      <CategoryGrid
        onSelectCategory={(slug) => onNavigate('category', slug)}
      />

      {/* 4. Flagship 360 Interactive Showcase */}
      <Showcase360
        product={flagshipProduct}
        onAddToCart={onAddToCart}
        onOpenRFQ={onOpenRFQ}
        onViewProductDetail={(slug) => onNavigate('product', slug)}
      />

      {/* 5. 4-Icon Value Band */}
      <ValueBand />

      {/* 6. Interactive App Ecosystem */}
      <AppEcosystem />

      {/* 7. Health & Clinical Prevention Section */}
      <HealthValueSection
        onExploreGuides={() => onNavigate('blogs')}
        onViewExperts={() => onNavigate('experts')}
      />

      {/* 8. B2B Wholesale & Factory Export Band */}
      <B2BWholesaleBand
        onOpenRFQ={onOpenRFQ}
        onViewB2BPage={() => onNavigate('b2b')}
      />

      {/* 9. Best Sellers Filterable Grid */}
      <BestSellersSection
        onAddToCart={onAddToCart}
        onViewProduct={(slug) => onNavigate('product', slug)}
        onOpenRFQ={onOpenRFQ}
        onViewAllCatalog={() => onNavigate('categories')}
      />

      {/* 10. Verified Testimonials */}
      <TestimonialCarousel />

      {/* 11. Vet Advisory Board */}
      <VetAdvisorySection
        onViewExpertsPage={() => onNavigate('experts')}
      />

      {/* 12. Instagram UGC Wall */}
      <InstagramWall />

      {/* 13. General FAQ Accordion */}
      <FAQSection />

      {/* 14. Email Capture & Catalog Download */}
      <EmailCapture />
    </div>
  );
};
