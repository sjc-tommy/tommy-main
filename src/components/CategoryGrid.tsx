import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface CategoryGridProps {
  onSelectCategory: (slug: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered For Every Pet Scenario</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Explore Our Smart Tech Ecosystem
            </h2>
            <p className="text-[#6B7269] text-base mt-2 max-w-2xl">
              From veterinary-guided timed feeding to robotic self-cleaning litter care and 2K AI monitoring, find the exact solution tailored to your companion.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-semibold text-[#0F3D2E] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full border border-emerald-200">
              6 Core Categories · Direct Factory OEM Ready
            </span>
          </div>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E5E2DB] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#FAF7F2] border border-[#E5E2DB]/60">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-bold text-[#0F3D2E] shadow-sm">
                    {cat.count} SKUs
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F3D2E] group-hover:text-[#FF7A45] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-[#6B7269] leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="px-6 py-4 bg-[#FAF7F2] border-t border-[#E5E2DB]/60 flex items-center justify-between group-hover:bg-[#E8F3EE] transition-colors">
                <span className="text-xs font-bold text-[#0F3D2E]">Explore Models</span>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0F3D2E] group-hover:bg-[#FF7A45] group-hover:text-white transition-all shadow-sm">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
