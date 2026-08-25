import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Award, Factory, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenRFQ: () => void;
  currency: string;
  onCurrencyChange: (c: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenRFQ, currency, onCurrencyChange }) => {
  const [msgIndex, setMsgIndex] = useState(0);

  const messages = [
    { text: 'Free U.S. & E.U. Shipping Over $49 · 30-Day Risk-Free Home Trial · 2-Year Global Warranty', icon: Truck },
    { text: 'Direct Factory B2B Wholesale & OEM/ODM Customization · MOQ 50 Units · Fast Global Export', icon: Factory },
    { text: 'Vet-Approved Clinical Nutrition & Hydration Tech · Certified FCC, CE-RED, RoHS & BPA-Free', icon: ShieldCheck },
    { text: '2026 Pet Tech Innovation Award Winner · Trusted by 100,000+ Pet Families in 45 Countries', icon: Award },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [messages.length]);

  const CurrentIcon = messages[msgIndex].icon;

  return (
    <div className="bg-[#0F3D2E] text-white text-xs font-medium py-2 px-4 border-b border-[#0F3D2E]/30 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* B2B Direct Access */}
        <div className="hidden lg:flex items-center space-x-3 text-emerald-200">
          <span className="flex items-center gap-1 font-semibold text-white">
            <Factory className="w-3.5 h-3.5 text-[#FF7A45]" /> B2B Portal:
          </span>
          <button 
            onClick={onOpenRFQ}
            className="hover:text-white underline underline-offset-2 transition-colors flex items-center gap-1 cursor-pointer"
          >
            Request OEM/Wholesale Catalog <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Cycling Center Message */}
        <div className="flex items-center justify-center space-x-2 text-center transition-all duration-300">
          <CurrentIcon className="w-3.5 h-3.5 text-[#FF7A45] flex-shrink-0 animate-pulse" />
          <span className="tracking-wide text-[11px] sm:text-xs text-white/95">
            {messages[msgIndex].text}
          </span>
        </div>

        {/* Currency & Language selector */}
        <div className="flex items-center space-x-3 text-white/80">
          <div className="flex items-center space-x-1">
            <span className="text-[10px] text-white/60 uppercase">Currency:</span>
            <select
              value={currency}
              onChange={(e) => onCurrencyChange(e.target.value)}
              className="bg-transparent text-white border-none text-xs font-semibold focus:outline-none cursor-pointer hover:text-white"
            >
              <option value="USD" className="bg-[#0F3D2E] text-white">$ USD</option>
              <option value="EUR" className="bg-[#0F3D2E] text-white">€ EUR</option>
              <option value="GBP" className="bg-[#0F3D2E] text-white">£ GBP</option>
              <option value="CAD" className="bg-[#0F3D2E] text-white">$ CAD</option>
            </select>
          </div>
          <span className="text-white/30">|</span>
          <span className="text-[11px] text-emerald-300 font-medium">US & EU Warehouses</span>
        </div>
      </div>
    </div>
  );
};
