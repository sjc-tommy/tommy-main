import React from 'react';
import { ShieldCheck, Check, X, Sparkles, Factory, ArrowRight } from 'lucide-react';
import { COMPARISONS as COMPARISON_MATRIX, PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ComparisonViewProps {
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onOpenRFQ: () => void;
  onViewProduct: (slug: string) => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  onAddToCart,
  onOpenRFQ,
  onViewProduct,
}) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A45]" /> Benchmark Evaluation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            How Petora Compares to Leading Market Brands
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7269]">
            A transparent engineering teardown against Petlibro, Furbo, and Whisker. Evaluated across food contact safety, subscription fees, mechanical jamming resistance, and B2B wholesale access.
          </p>
        </div>

        {/* TL;DR GEO Summary */}
        <div className="tldr-box max-w-4xl mx-auto p-5 rounded-2xl text-xs sm:text-sm text-[#0F3D2E] leading-relaxed shadow-sm">
          <span className="font-extrabold uppercase tracking-wide text-[10px] block mb-1">
            ⚡ Quick Takeaway Comparison:
          </span>
          Petora outperforms competing brands by eliminating mandatory monthly cloud subscription paywalls, utilizing 100% 304 food-grade stainless steel across all bowl contacts, and offering direct factory wholesale export (50-unit MOQ) alongside consumer retail.
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E2DB] shadow-lg overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-[#E5E2DB]">
                <th className="p-4 text-sm font-extrabold text-[#0F3D2E] min-w-[200px]">
                  Feature / Hardware Spec
                </th>
                <th className="p-4 bg-[#E8F3EE] rounded-t-2xl text-sm font-extrabold text-[#0F3D2E] min-w-[200px] border-x border-[#0F3D2E]/20 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#FF7A45]" />
                    <span>Petora Tech</span>
                  </div>
                  <span className="text-[10px] font-normal text-emerald-800 block">Flagship Standard</span>
                </th>
                <th className="p-4 text-xs font-bold text-[#6B7269] min-w-[160px] text-center">
                  Petlibro Granary
                </th>
                <th className="p-4 text-xs font-bold text-[#6B7269] min-w-[160px] text-center">
                  Furbo 360 Nanny
                </th>
                <th className="p-4 text-xs font-bold text-[#6B7269] min-w-[160px] text-center">
                  Whisker Robot 4
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E2DB]">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                  <td className="p-4 font-bold text-[#1A1D1B]">{row.feature}</td>
                  <td className="p-4 bg-[#E8F3EE]/60 border-x border-[#0F3D2E]/20 text-center font-extrabold text-[#0F3D2E]">
                    <div className="flex items-center justify-center gap-1.5 text-emerald-900">
                      <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                      <span>{row.petora}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-[#6B7269]">{row.petlibro}</td>
                  <td className="p-4 text-center text-[#6B7269]">{row.furbo}</td>
                  <td className="p-4 text-center text-[#6B7269]">{row.whisker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Bar */}
        <div className="bg-[#0F3D2E] rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-extrabold">Ready to Upgrade to Veterinary-Grade Tech?</h3>
            <p className="text-xs text-emerald-200 mt-1">
              Shop flagship smart feeders and fountains with 30-day risk-free home testing.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onViewProduct(PRODUCTS[0].slug)}
              className="px-6 py-3 bg-[#FF7A45] hover:bg-[#e86935] text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Vision Pro Feeder</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenRFQ}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 cursor-pointer"
            >
              B2B Wholesale Inquiries
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
