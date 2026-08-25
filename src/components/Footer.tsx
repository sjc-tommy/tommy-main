import React from 'react';
import { Sparkles, ShieldCheck, Factory, Globe2, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

interface FooterProps {
  onNavigate: (view: string, param?: string) => void;
  onOpenRFQ: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRFQ }) => {
  return (
    <footer className="bg-[#0F3D2E] text-white pt-16 pb-12 border-t border-[#0F3D2E]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Factory Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0F3D2E] shadow-md">
                <Sparkles className="w-5 h-5 text-[#FF7A45]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold tracking-tight text-white">PETORA</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E8F3EE] text-[#0F3D2E] uppercase">Tech</span>
                </div>
                <p className="text-[10px] text-emerald-300 tracking-wider uppercase font-medium">Smart Pet Care · Global Export</p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/70 leading-relaxed max-w-sm">
              Petora Tech is a premier manufacturer and exporter of veterinary-approved smart pet appliances. Serving pet parents and B2B wholesale partners across North America, Europe, Australia, and East Asia.
            </p>

            {/* Global Hubs */}
            <div className="space-y-1.5 text-xs text-emerald-200/90 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A45] flex-shrink-0" />
                <span>US Hub: 19800 S Vermont Ave, Torrance, CA 90502</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF7A45] flex-shrink-0" />
                <span>EU Logistics: Westblaak 180, 3012 KN Rotterdam, Netherlands</span>
              </div>
              <div className="flex items-center gap-2">
                <Factory className="w-3.5 h-3.5 text-[#FF7A45] flex-shrink-0" />
                <span>Manufacturing Base: Hi-Tech Park, Baoan District, Shenzhen, China</span>
              </div>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#FF7A45] uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => onNavigate('category', cat.slug)}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Research & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#FF7A45] uppercase tracking-wider">Research & Board</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button onClick={() => onNavigate('blogs')} className="hover:text-white hover:underline">
                  Veterinary Nutrition Guides
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experts')} className="hover:text-white hover:underline">
                  Vet Advisory Board (DVM)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('compare')} className="hover:text-white hover:underline">
                  Model Comparison Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('help')} className="hover:text-white hover:underline">
                  2-Year Warranty & Registration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('help')} className="hover:text-white hover:underline">
                  App Setup & Firmware Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: B2B Wholesale & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#FF7A45] uppercase tracking-wider">B2B & Compliance</h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <button onClick={onOpenRFQ} className="text-[#FF7A45] font-bold hover:underline">
                  Request B2B Wholesale Quote
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('certifications')} className="text-emerald-200 font-bold hover:text-white hover:underline flex items-center gap-1">
                  <span>Certifications & GPSR Dossier</span>
                  <span className="text-[9px] bg-emerald-700 text-white px-1.5 py-0.2 rounded font-mono">13 Lab Reports</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-white hover:underline">
                  OEM / ODM White-Labeling
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('b2b')} className="hover:text-white hover:underline">
                  FOB / DDP Logistics Specs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('help')} className="hover:text-white hover:underline">
                  Privacy Policy & CCPA/GDPR
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Middle Certifications & Compliance Badges */}
        <div className="py-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-200">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-white flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#FF7A45]" /> Certified Export Compliance:
            </span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">FCC ID US</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">CE-RED (EU)</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">RoHS 2.0</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">FDA Food Contact</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">BPA Free</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-[11px] font-mono">ISO9001:2015</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-emerald-300">
            <span>Secure 256-Bit SSL Checkout · Wire T/T · L/C · PayPal · Stripe</span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-100/60 gap-4">
          <p>© 2026 Petora Tech Co., Ltd. All rights reserved. Designed for the pets you love.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => onNavigate('help')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('help')} className="hover:text-white transition-colors">Terms of Service</button>
            <button onClick={() => onNavigate('help')} className="hover:text-white transition-colors">Shipping & Returns</button>
            <button onClick={() => onNavigate('help')} className="hover:text-white transition-colors">Export Inquiries</button>
          </div>
        </div>

      </div>

      {/* Sleek Operational Live Status Bar */}
      <div className="mt-8 bg-[#09261D] border-t border-emerald-950 py-3 px-4 sm:px-8 text-[11px] font-semibold uppercase tracking-widest text-emerald-300/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="flex items-center gap-2 text-white">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Cloud Systems: 100% Operational
            </span>
            <span className="text-emerald-700 hidden sm:inline">•</span>
            <span>Factory Hub: Shenzhen, CN</span>
            <span className="text-emerald-700 hidden sm:inline">•</span>
            <span>US Logistics: Torrance, CA</span>
            <span className="text-emerald-700 hidden sm:inline">•</span>
            <span>EU Logistics: Rotterdam, NL</span>
          </div>
          <div className="text-[10px] text-emerald-400/60">
            TLS 1.3 • AES-256 Cloud Telemetry
          </div>
        </div>
      </div>
    </footer>
  );
};
