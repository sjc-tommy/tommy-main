import React from 'react';
import { 
  Factory, 
  Globe2, 
  ShieldCheck, 
  Box, 
  FileSpreadsheet, 
  CheckCircle2, 
  Download, 
  Award, 
  ArrowRight,
  Calculator,
  Ship,
  Sparkles,
  FileCheck,
  Building2,
  Lock
} from 'lucide-react';
import { PRODUCTS, EU_RESPONSIBLE_PERSON } from '../data/mockData';

interface B2BExportViewProps {
  onOpenRFQ: () => void;
  onViewProduct: (slug: string) => void;
  onNavigate?: (view: string, slug?: string) => void;
}

export const B2BExportView: React.FC<B2BExportViewProps> = ({ onOpenRFQ, onViewProduct, onNavigate }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-[#0F3D2E] rounded-3xl p-8 sm:p-12 text-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF7A45] text-white">
              <Factory className="w-3.5 h-3.5" /> B2B Global Trade & OEM/ODM Division
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Direct Smart Pet Appliance Factory Wholesale & Custom Manufacturing
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-2xl">
              Exporting high-performance smart pet feeders, stainless water fountains, and self-cleaning litter boxes directly from our ISO9001-audited facility to North America, Europe, Australia, and worldwide retail chains. Fully compliant with US FCC, OSHA UL/ETL, and EU GPSR 2023/988 regulations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenRFQ}
                className="px-6 py-3.5 bg-[#FF7A45] hover:bg-[#e86935] text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 cursor-pointer transition-transform active:scale-95"
              >
                <Calculator className="w-4 h-4" />
                <span>Launch Interactive B2B Quotation Calculator</span>
              </button>
              <button
                onClick={() => onNavigate?.('certifications')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <FileCheck className="w-4 h-4 text-[#FF7A45]" />
                <span>View Full Certifications & GPSR Hub</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-xs rounded-2xl p-6 border border-white/15 space-y-3 text-xs">
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FF7A45]" /> Factory Capability Snapshot
            </h3>
            <div className="space-y-2 text-emerald-100">
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Monthly Production:</span>
                <span className="font-bold text-white">120,000 Units</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Factory Footprint:</span>
                <span className="font-bold text-white">18,500 m² (ISO9001)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Low MOQ Starter:</span>
                <span className="font-bold text-[#FF7A45]">50 Units</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>Lead Time (Ready Stock):</span>
                <span className="font-bold text-white">7 - 14 Days</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1">
                <span>OEM Lead Time:</span>
                <span className="font-bold text-white">20 - 30 Days</span>
              </div>
              <div className="flex justify-between">
                <span>EU GPSR Mandate:</span>
                <span className="font-bold text-[#FF7A45]">Active & Authorized</span>
              </div>
            </div>
          </div>
        </div>

        {/* EU GPSR & Legal Compliance Notice */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-600/20 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] flex-shrink-0">
              <Building2 className="w-6 h-6 text-[#0F3D2E]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[#0F3D2E]">EU GPSR (2023/988) Authorized Responsible Person Included</h3>
                <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">Dec 2024 Enforced</span>
              </div>
              <p className="text-xs text-[#6B7269] mt-1 max-w-3xl">
                Every wholesale order for the European Union is backed by our official EU Responsible Person entity (<strong className="text-[#0F3D2E]">{EU_RESPONSIBLE_PERSON.companyName}, Amsterdam</strong>) with complete 10-year digital technical files, preventing Amazon EU listing suspensions.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate?.('certifications')}
            className="px-5 py-2.5 rounded-xl bg-[#0F3D2E] text-white text-xs font-bold hover:bg-[#165641] transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-xs"
          >
            <span>Inspect Compliance Dossier</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Core Services: Low-MOQ Brand Wholesale / Private Label OEM / Full Custom ODM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E]">
              <Box className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0F3D2E]">1. Low-MOQ Brand Wholesale</h3>
            <p className="text-xs text-[#6B7269] leading-relaxed">
              Order Petora retail-ready inventory starting at just 50 units. Fast fulfillment from our Los Angeles and Rotterdam distribution warehouses or FOB Shenzhen.
            </p>
            <ul className="space-y-1.5 text-xs text-[#0F3D2E] font-medium pt-2 border-t border-[#E5E2DB]">
              <li className="flex items-center gap-2">✓ MOQ 50 Units</li>
              <li className="flex items-center gap-2">✓ Full English Retail Packaging</li>
              <li className="flex items-center gap-2">✓ 2-Year Global Warranty Included</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#0F3D2E] shadow-lg ring-1 ring-[#0F3D2E]/20 space-y-4 relative">
            <span className="absolute -top-3 right-6 bg-[#FF7A45] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs">
              Most Requested
            </span>
            <div className="w-12 h-12 rounded-2xl bg-[#0F3D2E] flex items-center justify-center text-white">
              <Factory className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0F3D2E]">2. Private Label (OEM)</h3>
            <p className="text-xs text-[#6B7269] leading-relaxed">
              Apply your brand's laser-engraved or silk-screened logo, customize Pantone chassis colors, print branded gift boxes, and configure localized user manuals.
            </p>
            <ul className="space-y-1.5 text-xs text-[#0F3D2E] font-medium pt-2 border-t border-[#E5E2DB]">
              <li className="flex items-center gap-2">✓ MOQ 200 - 500 Units</li>
              <li className="flex items-center gap-2">✓ Free Die-Cut Packaging Templates</li>
              <li className="flex items-center gap-2">✓ Barcode & Amazon FBA Prep Ready</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E]">
              <Sparkles className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-lg font-extrabold text-[#0F3D2E]">3. Full Customization (ODM)</h3>
            <p className="text-xs text-[#6B7269] leading-relaxed">
              Proprietary tooling injection, custom circuit board (PCB) layouts, white-label iOS/Android app SDK deployment, and exclusive regional territorial rights.
            </p>
            <ul className="space-y-1.5 text-xs text-[#0F3D2E] font-medium pt-2 border-t border-[#E5E2DB]">
              <li className="flex items-center gap-2">✓ MOQ 1,000+ Units</li>
              <li className="flex items-center gap-2">✓ White-Label Cloud IoT SDK</li>
              <li className="flex items-center gap-2">✓ Exclusive Regional Distribution</li>
            </ul>
          </div>

        </div>

        {/* Logistics & Shipping Container Specifications Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A45] uppercase tracking-wider">
                <Ship className="w-4 h-4" />
                <span>Export Logistics & Container Capacity Planning</span>
              </div>
              <h2 className="text-2xl font-extrabold text-[#0F3D2E] mt-1">
                FOB & DDP Packaging Master Matrix
              </h2>
            </div>
            <button
              onClick={onOpenRFQ}
              className="px-5 py-2.5 bg-[#0F3D2E] text-white text-xs font-bold rounded-xl shadow cursor-pointer hover:bg-[#165641]"
            >
              Get Landed DDP Quote
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-[#E5E2DB] rounded-2xl overflow-hidden">
              <thead className="bg-[#E8F3EE] text-[#0F3D2E] font-bold">
                <tr>
                  <th className="p-3">Model Name</th>
                  <th className="p-3">Units / Ctn</th>
                  <th className="p-3">Carton Size (cm)</th>
                  <th className="p-3">Gross Wt (kg)</th>
                  <th className="p-3">20GP Container Qty</th>
                  <th className="p-3">40HQ Container Qty</th>
                  <th className="p-3">Compliance Dossiers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E2DB]">
                {PRODUCTS.map((prod) => (
                  <tr key={prod.id} className="hover:bg-[#FAF7F2]">
                    <td className="p-3 font-bold text-[#0F3D2E]">{prod.name}</td>
                    <td className="p-3">{prod.b2bSpecs?.cartonQty || 4} pcs</td>
                    <td className="p-3 font-mono">{prod.b2bSpecs?.cartonDimensions || '48x42x45'}</td>
                    <td className="p-3 font-mono">{prod.b2bSpecs?.cartonWeight || '14.5 kg'}</td>
                    <td className="p-3 font-extrabold text-[#0F3D2E]">{prod.b2bSpecs?.container20GP || 600} units</td>
                    <td className="p-3 font-extrabold text-[#FF7A45]">{prod.b2bSpecs?.container40HQ || 1400} units</td>
                    <td className="p-3 text-emerald-800 font-semibold">FCC, CE-RED, EN 18031, GPSR ✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Global Compliance & Certification Gallery */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0F3D2E]">
                Fully Certified for US, EU & UK Import Customs
              </h2>
              <p className="text-xs text-[#6B7269] mt-1">
                Zero customs delays. Official laboratory test reports available for instant download.
              </p>
            </div>
            <button
              onClick={() => onNavigate?.('certifications')}
              className="text-xs font-bold text-[#FF7A45] hover:underline flex items-center gap-1 cursor-pointer"
            >
              View all 13 certificates <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1">
              <span className="text-lg font-black text-[#0F3D2E]">FCC Part 15C</span>
              <p className="text-[11px] text-[#6B7269]">Federal Communications Commission (US)</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1">
              <span className="text-lg font-black text-[#0F3D2E]">CE-RED / EN 18031</span>
              <p className="text-[11px] text-[#6B7269]">Radio Equipment & IoT Cyber (EU)</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1">
              <span className="text-lg font-black text-[#0F3D2E]">EU GPSR 2023/988</span>
              <p className="text-[11px] text-[#6B7269]">Authorized Responsible Person Dossier</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1">
              <span className="text-lg font-black text-[#0F3D2E]">cETLus 62368-1</span>
              <p className="text-[11px] text-[#6B7269]">NRTL Safety (Amazon US / Retail)</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
