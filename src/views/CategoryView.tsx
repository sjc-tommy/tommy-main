import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/mockData';
import { Product } from '../types';
import { 
  Filter, 
  SlidersHorizontal, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  HelpCircle,
  Factory
} from 'lucide-react';

interface CategoryViewProps {
  currentCategorySlug?: string;
  onSelectCategory: (slug: string) => void;
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onViewProduct: (slug: string) => void;
  onOpenRFQ: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  currentCategorySlug = 'all',
  onSelectCategory,
  onAddToCart,
  onViewProduct,
  onOpenRFQ
}) => {
  const [selectedCategory, setSelectedCategory] = useState(currentCategorySlug);
  const [priceMax, setPriceMax] = useState(500);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  // Keep the internal filter in sync when navigating to a new category externally.
  useEffect(() => {
    setSelectedCategory(currentCategorySlug);
  }, [currentCategorySlug]);

  const currentCatObj = CATEGORIES.find(c => c.slug === selectedCategory);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (p.price > priceMax) return false;
    if (selectedTag !== 'all' && p.tag !== selectedTag) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Category Header Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Veterinary Approved Hardware Catalog</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
                {currentCatObj ? currentCatObj.name : 'All Smart Pet Care Hardware'}
              </h1>
              <p className="text-xs sm:text-sm text-[#6B7269] mt-1 max-w-2xl">
                {currentCatObj
                  ? currentCatObj.description
                  : 'Explore our complete product line of precision portion feeders, wireless induction fountains, robotic litter boxes, and 2K cameras.'}
              </p>
            </div>

            {/* Quick B2B Action */}
            <button
              onClick={onOpenRFQ}
              className="bg-[#0F3D2E] hover:bg-[#165641] text-white px-5 py-3 rounded-xl font-bold text-xs shadow flex items-center gap-2 cursor-pointer"
            >
              <Factory className="w-4 h-4 text-[#FF7A45]" />
              <span>Request Wholesale Volume Pricing</span>
            </button>
          </div>

          {/* GEO TL;DR Direct Answer Box */}
          <div className="tldr-box p-4 rounded-xl text-xs sm:text-sm text-[#0F3D2E] leading-relaxed">
            <span className="font-extrabold uppercase tracking-wide text-[10px] block mb-0.5 text-[#0F3D2E]">
              ⚡ Clinical TL;DR Recommendation:
            </span>
            {currentCatObj
              ? currentCatObj.tldr
              : 'Petora smart appliances utilize medical SUS304 food-grade stainless steel and bi-directional anti-pinch motors to ensure 100% feeding consistency and optimal hydration.'}
          </div>
        </div>

        {/* Main Category Filter & Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Filter Sidebar */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[#E5E2DB] shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E2DB] pb-3">
                <span className="text-xs font-bold text-[#0F3D2E] flex items-center gap-1.5 uppercase tracking-wider">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF7A45]" /> Filters
                </span>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceMax(500);
                    setSelectedTag('all');
                  }}
                  className="text-[11px] text-[#6B7269] hover:text-[#0F3D2E] font-medium underline"
                >
                  Reset
                </button>
              </div>

              {/* Category selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1A1D1B] block">Category</label>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => { setSelectedCategory('all'); onSelectCategory('all'); }}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === 'all' ? 'bg-[#0F3D2E] text-white font-bold' : 'hover:bg-[#E8F3EE] text-[#6B7269]'
                    }`}
                  >
                    All Categories ({PRODUCTS.length})
                  </button>
                  {CATEGORIES.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => { setSelectedCategory(c.slug); onSelectCategory(c.slug); }}
                      className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === c.slug ? 'bg-[#0F3D2E] text-white font-bold' : 'hover:bg-[#E8F3EE] text-[#6B7269]'
                      }`}
                    >
                      {c.name} ({c.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Max Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-[#1A1D1B]">
                  <span>Max Price</span>
                  <span className="text-[#FF7A45]">${priceMax} USD</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="500"
                  step="10"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E5E2DB] rounded-lg accent-[#FF7A45] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#6B7269]">
                  <span>$30</span>
                  <span>$500</span>
                </div>
              </div>

              {/* Tag / Collection Badge */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1A1D1B] block">Badges</label>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {['all', 'Bestseller', 'Vet-Choice', 'OEM Popular', 'New'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTag(t)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition-all ${
                        selectedTag === t
                          ? 'bg-[#0F3D2E] text-white border-[#0F3D2E]'
                          : 'bg-white text-[#6B7269] border-[#E5E2DB] hover:border-gray-400'
                      }`}
                    >
                      {t === 'all' ? 'All' : t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Compliance Badges in sidebar */}
              <div className="pt-4 border-t border-[#E5E2DB] space-y-2 text-[11px] text-[#6B7269]">
                <div className="flex items-center gap-2 font-medium text-[#0F3D2E]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>FCC ID & CE-RED Ready</span>
                </div>
                <div className="flex items-center gap-2 font-medium text-[#0F3D2E]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>30-Day Risk-Free Trial</span>
                </div>
                <div className="flex items-center gap-2 font-medium text-[#0F3D2E]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>2-Year Global Factory Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Grid Column */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Top Bar Sort & Count */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E2DB] flex items-center justify-between text-xs">
              <span className="font-bold text-[#0F3D2E]">
                Showing {filteredProducts.length} Results
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[#6B7269] font-medium">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#FAF7F2] border border-[#E5E2DB] text-xs font-semibold rounded-lg px-3 py-1.5 text-[#0F3D2E] focus:ring-1 focus:ring-[#0F3D2E]"
                >
                  <option value="featured">Featured Picks</option>
                  <option value="rating">Highest Rated (4.8+)</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#E5E2DB] space-y-3">
                <p className="text-sm font-bold text-[#0F3D2E]">No products match the selected filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceMax(500); setSelectedTag('all'); }}
                  className="px-4 py-2 bg-[#0F3D2E] text-white text-xs font-bold rounded-xl"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Bottom 1000+ Word Clinical Buying Guide & Comparison Table (SEO & GEO Booster) */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6 mt-12">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A45] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Comprehensive 2026 Buying Guide & Clinical Standards</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F3D2E]">
                How to Choose the Right Smart Pet Hardware for Your Household
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#6B7269] leading-relaxed">
                <p>
                  When selecting automated pet hardware, veterinary science emphasizes three paramount criteria: food contact biocompatibility, mechanical jam-proof torque integrity, and power blackout fail-safes. Cheap generic models constructed from recycled polycarbonates often develop microscopic abrasions that foster bacterial biofilm colonization within 48 hours, causing feline folliculitis and canine chin acne.
                </p>
                <p>
                  Petora hardware is constructed from heavy-gauge SUS304 food-grade stainless steel with mirror-finish passivation. Our automatic feeders incorporate reverse-torque planetary gears that instantaneously detect kibble resistance above 1.2Nm, preventing motor stall and ensuring uninterrupted daily nutrition.
                </p>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs border border-[#E5E2DB] rounded-xl overflow-hidden">
                  <thead className="bg-[#E8F3EE] text-[#0F3D2E] font-bold">
                    <tr>
                      <th className="p-3">Specification Criteria</th>
                      <th className="p-3">Petora Medical Standard</th>
                      <th className="p-3">Standard White-Label Generic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E2DB]">
                    <tr>
                      <td className="p-3 font-semibold text-[#1A1D1B]">Food Basin Contact Material</td>
                      <td className="p-3 text-emerald-800 font-bold">SUS304 Medical Stainless (Dishwasher Safe)</td>
                      <td className="p-3 text-[#6B7269]">Porous Recycled ABS / Polypropylene</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1A1D1B]">Motor Anti-Jam Technology</td>
                      <td className="p-3 text-emerald-800 font-bold">Bi-Directional Auto-Reverse IR Sensor</td>
                      <td className="p-3 text-[#6B7269]">Unidirectional (High Jam Rate)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1A1D1B]">Airtight Freshness Preservative</td>
                      <td className="p-3 text-emerald-800 font-bold">Quad-Lock Silicone + Auto Dispense Gate</td>
                      <td className="p-3 text-[#6B7269]">Open Chute (Exposed to Pests)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-[#1A1D1B]">Blackout Power Guard</td>
                      <td className="p-3 text-emerald-800 font-bold">Dual Power Guard (180-Day D-Cell Battery)</td>
                      <td className="p-3 text-[#6B7269]">AC Wall Adapter Only (Zero Backup)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Category FAQs */}
              <div className="pt-4 border-t border-[#E5E2DB] space-y-3">
                <h4 className="text-base font-extrabold text-[#0F3D2E]">Frequently Asked Questions:</h4>
                <div className="space-y-2 text-xs text-[#1A1D1B]">
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB]">
                    <span className="font-bold text-[#0F3D2E] block">Q: Can I use freeze-dried raw nuggets in Petora smart feeders?</span>
                    <span className="text-[#6B7269] mt-1 block">A: Yes. Petora Vision Pro dual hoppers accommodate dry kibble, air-dried morsels, and freeze-dried cubes up to 16mm in diameter without clogging.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB]">
                    <span className="font-bold text-[#0F3D2E] block">Q: How do you prevent multi-cat food stealing?</span>
                    <span className="text-[#6B7269] mt-1 block">A: Our dual-hopper models allow individualized portion calibration, dispensing separate dietary formulations into dual bowls at micro-staggered intervals.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
