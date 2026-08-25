import React, { useState } from 'react';
import { 
  RotateCw, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Video, 
  BatteryCharging, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Factory,
  Layers
} from 'lucide-react';
import { feederImg } from '../data/mockData';
import { Product } from '../types';

interface Showcase360Props {
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onOpenRFQ: () => void;
  onViewProductDetail: (slug: string) => void;
  product: Product;
}

export const Showcase360: React.FC<Showcase360Props> = ({
  onAddToCart,
  onOpenRFQ,
  onViewProductDetail,
  product
}) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [selectedColor, setSelectedColor] = useState('Arctic Matte White');

  const hotspots = [
    {
      id: 0,
      title: '2K QHD AI Camera & Two-Way Voice',
      desc: '145° ultra-wide angle with 3D noise reduction and automatic infrared night vision. Allows voice interaction and meal alerts.',
      icon: Video,
      pos: 'top-1/4 left-1/2 -translate-x-1/2',
    },
    {
      id: 1,
      title: 'Patented Quad Fresh-Lock & Desiccant',
      desc: 'Triple silicone perimeter gasket with automatic sealing dispensing gate locks out air, moisture, and pests.',
      icon: Lock,
      pos: 'top-1/2 left-1/4',
    },
    {
      id: 2,
      title: 'Medical SUS304 Dishwasher-Safe Bowl',
      desc: 'Heavy-gauge antibacterial stainless steel prevents chin acne (contact dermatitis) and is 100% dishwasher safe.',
      icon: ShieldCheck,
      pos: 'bottom-1/4 left-1/2 -translate-x-1/2',
    },
    {
      id: 3,
      title: 'Dual Power Blackout Guard (180 Days)',
      desc: 'USB-C line power + 4x D-Cell alkaline battery backup ensures feedings never miss a beat during storms or outages.',
      icon: BatteryCharging,
      pos: 'bottom-1/3 right-1/4',
    },
  ];

  return (
    <section id="showcase-360" className="py-20 bg-white border-b border-[#E5E2DB] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A45]" /> Flagship Engineering Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Petora Vision Pro™ 360° Interactive Anatomy
          </h2>
          <p className="text-sm sm:text-base text-[#6B7269] mt-3">
            Drag the rotation dial or click the interactive anatomy pins to inspect our patented anti-jam rotor, hermetic quad-lock seal, and medical stainless steel dispensing tray.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Center 360 Viewer Canvas */}
          <div className="lg:col-span-7 bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border border-[#E5E2DB] relative flex flex-col items-center justify-center">
            
            {/* Interactive Image Stage */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <img
                src={feederImg}
                alt="Petora Vision Pro 360 View"
                referrerPolicy="no-referrer"
                style={{
                  transform: `rotateY(${rotationAngle * 0.4}deg) scale(${1 + Math.abs(Math.sin((rotationAngle * Math.PI) / 180)) * 0.05})`,
                  transition: 'transform 0.15s ease-out'
                }}
                className="w-4/5 h-4/5 object-contain filter drop-shadow-2xl select-none pointer-events-none"
              />

              {/* Hotspot Pins */}
              {hotspots.map((spot) => {
                const Icon = spot.icon;
                const isActive = activeHotspot === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot.id)}
                    className={`absolute ${spot.pos} z-20 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#FF7A45] text-white scale-125 ring-4 ring-[#FF7A45]/30' 
                        : 'bg-[#0F3D2E] text-white hover:scale-110'
                    }`}
                    title={spot.title}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="sr-only">{spot.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Rotation Controls */}
            <div className="w-full max-w-sm mt-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#0F3D2E]">
                <span className="flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5 text-[#FF7A45]" /> 360° Studio Rotation Angle
                </span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border text-[#0F3D2E]">{rotationAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-full h-2 bg-[#E5E2DB] rounded-lg appearance-none cursor-pointer accent-[#FF7A45]"
              />
              <div className="flex justify-between text-[11px] text-[#6B7269]">
                <button onClick={() => setRotationAngle(0)} className="hover:text-[#0F3D2E]">0° Front</button>
                <button onClick={() => setRotationAngle(90)} className="hover:text-[#0F3D2E]">90° Side</button>
                <button onClick={() => setRotationAngle(180)} className="hover:text-[#0F3D2E]">180° Rear</button>
                <button onClick={() => setRotationAngle(270)} className="hover:text-[#0F3D2E]">270° Port</button>
              </div>
            </div>

            {/* Active Hotspot Callout Box */}
            {activeHotspot !== null && (
              <div className="w-full mt-6 p-4 rounded-xl bg-white border border-emerald-200 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#E8F3EE] text-[#0F3D2E] flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#FF7A45]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F3D2E]">{hotspots[activeHotspot].title}</h4>
                    <p className="text-xs text-[#6B7269] mt-1">{hotspots[activeHotspot].desc}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Spec & Dual Tier DTC / B2B Commercial Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FF7A45] text-white">Bestseller</span>
                <span className="text-xs font-semibold text-emerald-700">★ 4.9 (428 reviews)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E] mt-2">
                {product.name}
              </h3>
              <p className="text-xs text-[#6B7269] mt-1">{product.subtitle}</p>
            </div>

            {/* Price & Wholesale Comparison Box */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-4">
              <div className="flex items-baseline justify-between border-b border-[#E5E2DB] pb-3">
                <div>
                  <span className="text-xs text-[#6B7269] uppercase font-bold tracking-wider">DTC Retail Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-[#0F3D2E]">${product.price}</span>
                    <span className="text-sm text-[#6B7269] line-through">${product.comparePrice}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Save $40 Today
                  </span>
                </div>
              </div>

              {/* B2B Wholesale Tier Pricing Table */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#0F3D2E]">
                  <span className="flex items-center gap-1"><Factory className="w-3.5 h-3.5 text-[#FF7A45]" /> B2B Wholesale Tier Rates</span>
                  <span className="text-[11px] text-[#6B7269]">FOB Shenzhen/Ningbo</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {product.b2bPriceTiers.map((tier, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-white border border-[#E5E2DB]">
                      <div className="font-bold text-[#0F3D2E]">{tier.minUnits}+ units</div>
                      <div className="text-[#FF7A45] font-extrabold text-sm">${tier.pricePerUnit}</div>
                      <div className="text-[10px] text-[#6B7269]">{tier.leadTimeDays}d lead time</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Color Switcher */}
            <div>
              <span className="text-xs font-bold text-[#1A1D1B] block mb-2">Color Finish: {selectedColor}</span>
              <div className="flex items-center gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedColor === c.name 
                        ? 'border-[#0F3D2E] bg-[#E8F3EE] text-[#0F3D2E] font-bold shadow-sm' 
                        : 'border-[#E5E2DB] bg-white text-[#6B7269] hover:border-gray-400'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border border-gray-300" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bullet Proof Points */}
            <div className="space-y-2 text-xs text-[#1A1D1B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>30-Day In-Home Trial with 100% Free US/EU Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>FCC ID, CE-RED, RoHS 2.0 & FDA Food-Contact Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Free Cloud Video Streaming (Zero Mandatory Subscriptions)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onAddToCart(product, 1, false)}
                className="flex-1 bg-[#FF7A45] hover:bg-[#e86935] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all text-center cursor-pointer"
              >
                Add To Cart · ${product.price}
              </button>
              <button
                onClick={onOpenRFQ}
                className="flex-1 bg-[#0F3D2E] hover:bg-[#165641] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Factory className="w-4 h-4 text-[#FF7A45]" />
                <span>Request B2B Sample</span>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => onViewProductDetail(product.slug)}
                className="text-xs font-semibold text-[#0F3D2E] hover:underline"
              >
                View Full Technical Specifications & Documentation →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
