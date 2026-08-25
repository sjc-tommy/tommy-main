import React from 'react';
import { Factory, Globe2, ShieldCheck, Box, FileSpreadsheet, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

interface B2BWholesaleBandProps {
  onOpenRFQ: () => void;
  onViewB2BPage: () => void;
}

export const B2BWholesaleBand: React.FC<B2BWholesaleBandProps> = ({
  onOpenRFQ,
  onViewB2BPage
}) => {
  return (
    <section className="py-20 bg-[#0F3D2E] text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF7A45] text-white">
                B2B Direct Wholesale & OEM/ODM
              </span>
              <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                <Globe2 className="w-3.5 h-3.5" /> Worldwide Export Ready
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Direct Factory Supply for Global Pet Brands, Retailers & Veterinary Chains
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed">
              Export high-margin smart pet technology from our ISO9001-audited smart factory. We provide flexible low-MOQ brand wholesale, custom color & laser logo customization, white-label app SDK deployment, and DDP landed sea/air freight to North America and Europe.
            </p>

            {/* Core Export Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div className="text-2xl font-black text-[#FF7A45]">50 Units</div>
                <div className="text-xs text-white font-bold mt-0.5">Low MOQ Starter</div>
                <p className="text-[10px] text-emerald-200 mt-1">Neutral or Petora retail pack</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div className="text-2xl font-black text-[#FF7A45]">7-14 Days</div>
                <div className="text-xs text-white font-bold mt-0.5">Rapid Turnaround</div>
                <p className="text-[10px] text-emerald-200 mt-1">Ready stock for fast dispatch</p>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-[#FF7A45]">100% Passed</div>
                <div className="text-xs text-white font-bold mt-0.5">FCC & CE-RED Lab</div>
                <p className="text-[10px] text-emerald-200 mt-1">Full compliance docs included</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onOpenRFQ}
                className="bg-[#FF7A45] hover:bg-[#e86935] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <Factory className="w-4 h-4" />
                <span>Instant B2B Quotation Calculator</span>
              </button>

              <button
                onClick={onViewB2BPage}
                className="bg-transparent hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Factory & Logistics Specs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Logistics & Compliance Box */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 text-[#1A1D1B] shadow-2xl border border-white/20 space-y-5">
            <div className="flex items-center justify-between border-b border-[#E5E2DB] pb-4">
              <div>
                <h3 className="text-base font-extrabold text-[#0F3D2E]">Global Export Spec Sheet</h3>
                <p className="text-xs text-[#6B7269]">Shenzhen / Ningbo Port Dispatch</p>
              </div>
              <span className="p-2 bg-[#E8F3EE] rounded-xl text-[#0F3D2E]">
                <Box className="w-5 h-5 text-[#FF7A45]" />
              </span>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#E5E2DB]/60">
                <span className="text-[#6B7269] font-medium">Incoterms Supported:</span>
                <span className="font-bold text-[#0F3D2E]">FOB, CIF, CFR, DDP, DDU, EXW</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E2DB]/60">
                <span className="text-[#6B7269] font-medium">Main Export Ports:</span>
                <span className="font-bold text-[#0F3D2E]">Shenzhen, Ningbo, Shanghai</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E2DB]/60">
                <span className="text-[#6B7269] font-medium">Factory Quality System:</span>
                <span className="font-bold text-[#0F3D2E]">ISO9001:2015, BSCI Social Audit</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E2DB]/60">
                <span className="text-[#6B7269] font-medium">Customization Services:</span>
                <span className="font-bold text-[#0F3D2E]">Silk Logo, Custom App UI, OEM Box</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E2DB]/60">
                <span className="text-[#6B7269] font-medium">Fulfillment Hubs:</span>
                <span className="font-bold text-[#0F3D2E]">Los Angeles (USA) & Rotterdam (EU)</span>
              </div>
            </div>

            {/* Trust Checklist */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1.5 text-[11px] text-[#0F3D2E]">
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Sample unit costs 100% credited back upon bulk order</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>NDA Protected & Complete intellectual property safety</span>
              </div>
            </div>

            <button
              onClick={onOpenRFQ}
              className="w-full py-3 rounded-xl bg-[#0F3D2E] hover:bg-[#165641] text-white text-xs font-bold shadow flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-[#FF7A45]" />
              <span>Download 2026 Wholesale Price Catalog (.PDF)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
