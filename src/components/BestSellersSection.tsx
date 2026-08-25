import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { Sparkles, ArrowRight } from 'lucide-react';

interface BestSellersSectionProps {
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onViewProduct: (slug: string) => void;
  onOpenRFQ: () => void;
  onViewAllCatalog: () => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = ({
  onAddToCart,
  onViewProduct,
  onOpenRFQ,
  onViewAllCatalog,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'feeders' | 'fountains' | 'litter' | 'cameras'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'feeders') return p.category === 'smart-feeders';
    if (selectedFilter === 'fountains') return p.category === 'water-fountains';
    if (selectedFilter === 'litter') return p.category === 'self-cleaning-litter-boxes';
    if (selectedFilter === 'cameras') return p.category === 'pet-cameras';
    return true;
  });

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Veterinary Top Ranked Hardware</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Featured Flagship Models
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7269] mt-1">
              Engineered with 304 food-grade stainless steel, airtight silicone locks, and whisper-quiet motors.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Models' },
              { id: 'feeders', label: 'Smart Feeders' },
              { id: 'fountains', label: 'Water Fountains' },
              { id: 'litter', label: 'Litter Boxes' },
              { id: 'cameras', label: 'Pet Cameras' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#0F3D2E] text-white shadow-sm'
                    : 'bg-white border border-[#E5E2DB] text-[#6B7269] hover:text-[#0F3D2E] hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onViewProduct={onViewProduct}
              onOpenRFQ={onOpenRFQ}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAllCatalog}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-[#E5E2DB] hover:bg-[#E8F3EE] text-[#0F3D2E] font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Explore All 6 Product Categories</span>
            <ArrowRight className="w-4 h-4 text-[#FF7A45]" />
          </button>
        </div>

      </div>
    </section>
  );
};
