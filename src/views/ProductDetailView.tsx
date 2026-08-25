import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Factory, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Sliders, 
  Layers, 
  FileText, 
  Stethoscope, 
  HelpCircle,
  Plus,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, EXPERTS, REVIEWS } from '../data/mockData';
import { Product } from '../types';

interface ProductDetailViewProps {
  slug: string;
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onOpenRFQ: () => void;
  onNavigate: (view: string, param?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  slug,
  onAddToCart,
  onOpenRFQ,
  onNavigate,
}) => {
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(product.image);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacities?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [purchaseMode, setPurchaseMode] = useState<'dtc' | 'b2b'>('dtc');
  const [activeTab, setActiveTab] = useState<'specs' | 'b2b' | 'vet' | 'reviews' | 'faq'>('specs');
  const [bundleAdded, setBundleAdded] = useState(false);

  const expert = EXPERTS.find((e) => e.id === product.expertReviewer?.id) || EXPERTS[0];

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-10 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Bar */}
        <nav className="flex items-center gap-2 text-xs text-[#6B7269]">
          <button onClick={() => onNavigate('home')} className="hover:text-[#0F3D2E]">Home</button>
          <ChevronRight className="w-3.5 h-3.5" />
          <button onClick={() => onNavigate('category', product.category)} className="hover:text-[#0F3D2E]">
            {product.categoryName}
          </button>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-[#0F3D2E] truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Gallery & 360 Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-sm aspect-square flex items-center justify-center relative overflow-hidden">
              <img
                src={activeImage}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="max-h-[85%] max-w-[85%] object-contain transition-all duration-300 hover:scale-105"
              />
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-[#0F3D2E] text-white shadow-xs">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveImage(product.image)}
                className={`w-20 h-20 rounded-2xl bg-white border p-2 flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                  activeImage === product.image ? 'border-2 border-[#0F3D2E] ring-2 ring-[#0F3D2E]/20' : 'border-[#E5E2DB]'
                }`}
              >
                <img src={product.image} alt="Main Angle" referrerPolicy="no-referrer" className="max-h-full object-contain" />
              </button>
              {product.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-20 h-20 rounded-2xl bg-white border p-2 flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
                    activeImage === imgUrl ? 'border-2 border-[#0F3D2E] ring-2 ring-[#0F3D2E]/20' : 'border-[#E5E2DB]'
                  }`}
                >
                  <img src={imgUrl} alt={`Angle ${i + 1}`} referrerPolicy="no-referrer" className="max-h-full object-contain" />
                </button>
              ))}
            </div>

            {/* TL;DR Clinical Recommendation Box */}
            <div className="tldr-box p-5 rounded-2xl text-xs sm:text-sm text-[#0F3D2E] leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] mb-1">
                <Sparkles className="w-4 h-4 text-[#FF7A45]" />
                <span>Veterinary Clinical Summary (TL;DR):</span>
              </div>
              <p>{product.tldr}</p>
            </div>
          </div>

          {/* Right: Buy Box & Configuration */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E2DB] shadow-lg space-y-6">
            
            {/* Purchase Mode Toggle: DTC vs B2B Wholesale */}
            <div className="flex p-1 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB] text-xs font-bold">
              <button
                onClick={() => setPurchaseMode('dtc')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  purchaseMode === 'dtc' ? 'bg-[#0F3D2E] text-white shadow-xs' : 'text-[#6B7269] hover:text-[#0F3D2E]'
                }`}
              >
                Retail / Direct (1 - 5 units)
              </button>
              <button
                onClick={() => setPurchaseMode('b2b')}
                className={`flex-1 py-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                  purchaseMode === 'b2b' ? 'bg-[#FF7A45] text-white shadow-xs' : 'text-[#6B7269] hover:text-[#0F3D2E]'
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>B2B Wholesale (50+ MOQ)</span>
              </button>
            </div>

            {/* Title & Star Rating */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-[#6B7269]">
                  {product.categoryName}
                </span>
                <div className="flex items-center gap-1 text-[#F5A623] text-xs font-bold">
                  <Star className="w-4 h-4 fill-[#F5A623]" />
                  <span>{product.rating}</span>
                  <span className="text-[#6B7269]">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E] tracking-tight">
                {product.name}
              </h1>

              <p className="text-xs text-[#6B7269] leading-relaxed">
                {product.subtitle}
              </p>
            </div>

            {/* Price Presentation */}
            {purchaseMode === 'dtc' ? (
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#0F3D2E]">${product.price}</span>
                    {product.comparePrice && (
                      <span className="text-sm text-[#6B7269] line-through">${product.comparePrice}</span>
                    )}
                  </div>
                  <span className="text-xs text-emerald-700 font-bold block mt-0.5">
                    ✓ In Stock · Ready to Dispatch in 24h
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#6B7269]">
                  <span>Free Shipping on Orders $49+</span>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#FF7A45]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F3D2E]">Factory Tiered Wholesale Pricing:</span>
                  <span className="text-[10px] uppercase font-bold text-[#FF7A45] bg-orange-100 px-2 py-0.5 rounded">FOB Shenzhen</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {product.b2bPriceTiers.map((tier, i) => (
                    <div key={i} className="p-2 rounded-xl bg-white border border-[#E5E2DB]">
                      <span className="text-[10px] text-[#6B7269] block font-medium">{tier.quantity}+ pcs</span>
                      <span className="text-sm font-extrabold text-[#FF7A45]">${tier.pricePerUnit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#1A1D1B] block">
                Color: <span className="text-[#0F3D2E] font-normal">{selectedColor}</span>
              </label>
              <div className="flex items-center gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-[#0F3D2E] bg-[#E8F3EE] text-[#0F3D2E] ring-1 ring-[#0F3D2E]'
                        : 'border-[#E5E2DB] bg-white text-[#6B7269] hover:bg-gray-50'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded-full border" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Capacity Selector */}
            {product.capacities && product.capacities.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#1A1D1B] block">Capacity Specification:</label>
                <div className="flex flex-wrap gap-2">
                  {product.capacities.map((cap) => (
                    <button
                      key={cap}
                      onClick={() => setSelectedCapacity(cap)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedCapacity === cap
                          ? 'bg-[#0F3D2E] text-white border-[#0F3D2E]'
                          : 'bg-white text-[#6B7269] border-[#E5E2DB] hover:border-gray-400'
                      }`}
                    >
                      {cap}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#E5E2DB] rounded-xl bg-[#FAF7F2] p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-[#0F3D2E] shadow-xs"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xs font-extrabold text-[#0F3D2E]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white flex items-center justify-center font-bold text-[#0F3D2E] shadow-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(product, quantity, purchaseMode === 'b2b')}
                  className="flex-1 bg-[#FF7A45] hover:bg-[#e86935] text-white py-3.5 rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add To Cart · ${(product.price * quantity).toFixed(2)}</span>
                </button>
              </div>

              <button
                onClick={onOpenRFQ}
                className="w-full bg-[#0F3D2E] hover:bg-[#165641] text-white py-3 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Factory className="w-4 h-4 text-[#FF7A45]" />
                <span>Request B2B Wholesale / Sample PI Quote</span>
              </button>
            </div>

            {/* Trust Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E5E2DB] text-[11px] text-[#0F3D2E] font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>2-Year Full Replacement</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>30-Day Risk-Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>US & EU Hub Fast Dispatch</span>
              </div>
              <button 
                onClick={() => onNavigate?.('certifications')}
                className="flex items-center gap-2 text-left hover:underline text-emerald-700 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>FCC, CE, GPSR Dossier →</span>
              </button>
            </div>

          </div>

        </div>

        {/* "How It Works in 3 Steps" Visual Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#FF7A45] uppercase tracking-wider">Effortless Smart Setup</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E] mt-1">
              How {product.name} Works in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] text-white flex items-center justify-center font-black text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-[#0F3D2E]">One-Touch 2.4/5GHz Pairing</h3>
              <p className="text-xs text-[#6B7269] leading-relaxed">
                Scan the QR code on the packaging with the Petora App (iOS/Android). Auto-syncs to your home Wi-Fi in under 30 seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] text-white flex items-center justify-center font-black text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-[#0F3D2E]">Set Clinical Portions or Schedules</h3>
              <p className="text-xs text-[#6B7269] leading-relaxed">
                Choose your pet's target weight. The app automatically calculates veterinary caloric requirements and dispenses micro-meals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] text-white flex items-center justify-center font-black text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-[#0F3D2E]">Sit Back & Monitor Health Telemetry</h3>
              <p className="text-xs text-[#6B7269] leading-relaxed">
                Enjoy real-time meal confirmation alerts, live 2K camera check-ins, and weekly intake analytics stored securely on local memory.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Specs / B2B Export / Vet Clinical Review / Reviews / FAQ */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-8">
          {/* Tab Nav Buttons */}
          <div className="flex border-b border-[#E5E2DB] gap-4 overflow-x-auto pb-2">
            {[
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'b2b', label: 'B2B Export & Carton Specs' },
              { id: 'vet', label: 'Clinical Vet Endorsement' },
              { id: 'reviews', label: `Verified Reviews (${product.reviewsCount})` },
              { id: 'faq', label: 'Product FAQ' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#0F3D2E] text-[#0F3D2E]'
                    : 'border-transparent text-[#6B7269] hover:text-[#0F3D2E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Engineering Specs */}
          {activeTab === 'specs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs animate-in fade-in duration-200">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="p-4 rounded-xl bg-[#FAF7F2] border flex justify-between">
                  <span className="text-[#6B7269] font-medium">{key}:</span>
                  <span className="font-bold text-[#0F3D2E]">
                    {Array.isArray(val) ? val.join(', ') : String(val)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: B2B Export Specs */}
          {activeTab === 'b2b' && (
            <div className="space-y-4 text-xs animate-in fade-in duration-200">
              <div className="p-4 rounded-2xl bg-[#E8F3EE] border border-emerald-300 text-[#0F3D2E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold">Standard Master Shipping Carton Specifications</h4>
                  <p className="text-xs text-[#6B7269]">Optimized for 20GP & 40HQ Sea Containers · Full FCC / CE-RED / GPSR Ready</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigate?.('certifications')}
                    className="px-3.5 py-2 bg-white border border-[#0F3D2E] text-[#0F3D2E] hover:bg-emerald-50 rounded-xl font-bold text-xs cursor-pointer"
                  >
                    View GPSR / Lab Reports
                  </button>
                  <button
                    onClick={onOpenRFQ}
                    className="px-4 py-2 bg-[#0F3D2E] hover:bg-[#165641] text-white rounded-xl font-bold shadow text-xs cursor-pointer"
                  >
                    Download Spec PI
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border flex justify-between">
                  <span className="text-[#6B7269] font-medium">Master Carton Packing Qty:</span>
                  <span className="font-bold text-[#0F3D2E]">{product.b2bSpecs?.cartonQty || 4} units / ctn</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border flex justify-between">
                  <span className="text-[#6B7269] font-medium">Carton Dimensions:</span>
                  <span className="font-bold text-[#0F3D2E]">{product.b2bSpecs?.cartonDimensions || '48 x 42 x 45 cm'}</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border flex justify-between">
                  <span className="text-[#6B7269] font-medium">Carton Gross Weight:</span>
                  <span className="font-bold text-[#0F3D2E]">{product.b2bSpecs?.cartonWeight || '14.5 kg'}</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] border flex justify-between">
                  <span className="text-[#6B7269] font-medium">Customization Minimum (MOQ):</span>
                  <span className="font-bold text-[#FF7A45]">{product.b2bSpecs?.customizationMOQ || 200} units</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Clinical Endorsement */}
          {activeTab === 'vet' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB]">
                <img
                  src={expert.avatar}
                  alt={expert.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#0F3D2E]"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F3D2E]">{expert.name}</h4>
                  <p className="text-xs font-semibold text-[#FF7A45]">{expert.title}</p>
                  <p className="text-[11px] text-[#6B7269]">{expert.credentials} · Lic. #{expert.licenseNumber}</p>
                </div>
              </div>

              <blockquote className="p-4 rounded-xl bg-white border-l-4 border-[#0F3D2E] text-xs sm:text-sm text-[#1A1D1B] italic leading-relaxed">
                "{product.expertReviewer?.quote || expert.quote}"
              </blockquote>
            </div>
          )}

          {/* Tab 4: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              {REVIEWS.map((rev) => (
                <div key={rev.id} className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0F3D2E]">{rev.author}</span>
                      {rev.verified && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#6B7269]">{rev.date}</span>
                  </div>
                  <div className="flex text-[#F5A623]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623]" />
                    ))}
                  </div>
                  <h5 className="text-xs font-bold text-[#0F3D2E]">{rev.title}</h5>
                  <p className="text-xs text-[#6B7269] leading-relaxed italic">"{rev.content}"</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 5: FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-3 text-xs animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border">
                <span className="font-bold text-[#0F3D2E] block">Q: Does the feeder retain feeding schedules if Wi-Fi disconnects?</span>
                <span className="text-[#6B7269] mt-1 block">A: Yes. All scheduled timings and portion configurations are saved directly to the hardware's onboard EEPROM chip. Meals will continue to dispense at the scheduled hour even without internet.</span>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border">
                <span className="font-bold text-[#0F3D2E] block">Q: How often do I need to replace the desiccant cartridge?</span>
                <span className="text-[#6B7269] mt-1 block">A: We recommend replacing the food-grade silicone desiccant bag every 30 days to maintain maximum crunchiness and prevent moisture buildup.</span>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
