import React, { useState } from 'react';
import { 
  X, 
  Factory, 
  Calculator, 
  CheckCircle2, 
  Download, 
  Send, 
  Globe2, 
  Box, 
  ShieldCheck, 
  Sparkles,
  FileSpreadsheet,
  FileCheck,
  Building2,
  Lock
} from 'lucide-react';
import { PRODUCTS, EU_RESPONSIBLE_PERSON } from '../data/mockData';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RFQModal: React.FC<RFQModalProps> = ({ isOpen, onClose }) => {
  const [selectedProductSlug, setSelectedProductSlug] = useState(PRODUCTS[0].slug);
  const [orderUnits, setOrderUnits] = useState(100);
  const [incoterm, setIncoterm] = useState('FOB-SZ');
  const [customLogo, setCustomLogo] = useState(true);
  const [customBox, setCustomBox] = useState(false);
  const [customApp, setCustomApp] = useState(false);

  // Compliance selection
  const [needFcc, setNeedFcc] = useState(true);
  const [needCeRed, setNeedCeRed] = useState(true);
  const [needGpsrDoc, setNeedGpsrDoc] = useState(true);
  const [needUlEtl, setNeedUlEtl] = useState(true);
  const [needFoodContact, setNeedFoodContact] = useState(true);
  const [needBsci, setNeedBsci] = useState(false);
  const [needCoi, setNeedCoi] = useState(false);

  // Form Fields
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [country, setCountry] = useState('United States');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [downloadingPI, setDownloadingPI] = useState(false);

  if (!isOpen) return null;

  const currentProd = PRODUCTS.find((p) => p.slug === selectedProductSlug) || PRODUCTS[0];

  // Calculate tier pricing
  let unitPrice = currentProd.price * 0.45;
  if (orderUnits >= 1000) {
    unitPrice = currentProd.b2bPriceTiers[2]?.pricePerUnit || currentProd.price * 0.32;
  } else if (orderUnits >= 200) {
    unitPrice = currentProd.b2bPriceTiers[1]?.pricePerUnit || currentProd.price * 0.38;
  } else if (orderUnits >= 50) {
    unitPrice = currentProd.b2bPriceTiers[0]?.pricePerUnit || currentProd.price * 0.42;
  }

  // Customization add-on estimations
  const logoCost = customLogo ? (orderUnits >= 500 ? 0 : 0.8) : 0;
  const boxCost = customBox ? (orderUnits >= 1000 ? 0 : 1.2) : 0;
  const finalUnitPrice = (unitPrice + logoCost + boxCost).toFixed(2);
  const totalGoodsValue = (parseFloat(finalUnitPrice) * orderUnits).toFixed(2);

  // Logistics estimations
  const cartonCount = Math.ceil(orderUnits / (currentProd.b2bSpecs?.cartonQty || 4));
  const estimatedCBM = (cartonCount * 0.08).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadPI = () => {
    setDownloadingPI(true);
    setTimeout(() => {
      setDownloadingPI(false);
      alert(`Official Proforma Invoice PI-${Math.floor(100000 + Math.random() * 900000)} & Lab Compliance Dossier downloaded successfully.`);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E5E2DB] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0F3D2E] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A45] flex items-center justify-center text-white">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold tracking-tight">Direct Factory B2B & OEM/ODM RFQ Portal</h2>
                <span className="text-[10px] font-mono bg-white/20 text-emerald-200 px-2 py-0.5 rounded">
                  ISO9001 · GPSR 2023/988 Ready
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                Instant Tier Pricing · Unredacted Lab Reports · EU/UK RP Authorized · 4-Hour Response
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A45]">Proforma Quotation Generated</span>
                <h3 className="text-2xl font-extrabold text-[#0F3D2E]">
                  RFQ #{Math.floor(100000 + Math.random() * 900000)} Submitted Successfully!
                </h3>
              </div>
              <p className="text-xs text-[#6B7269] max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-[#0F3D2E]">{contactName || 'Valued Partner'}</span> from <span className="font-bold text-[#0F3D2E]">{companyName || 'your enterprise'}</span>. Our International Regulatory & Export Director has received your request. A formal Proforma Invoice (PI) with unredacted FCC/CE/GPSR compliance certificates and sea/air freight quotes has been dispatched to <span className="font-bold text-[#0F3D2E]">{email}</span>.
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] max-w-lg mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-[#E5E2DB] pb-2">
                  <span className="text-[#6B7269]">Hardware SKU:</span>
                  <span className="font-bold text-[#0F3D2E]">{currentProd.name}</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2DB] pb-2">
                  <span className="text-[#6B7269]">Volume Tier:</span>
                  <span className="font-bold text-[#0F3D2E]">{orderUnits} Units ({cartonCount} Cartons, {estimatedCBM} CBM)</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2DB] pb-2">
                  <span className="text-[#6B7269]">Est. Unit Price:</span>
                  <span className="font-bold text-[#FF7A45]">${finalUnitPrice} USD / Unit</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2DB] pb-2">
                  <span className="text-[#6B7269]">Est. Total FOB Value:</span>
                  <span className="font-extrabold text-[#0F3D2E]">${totalGoodsValue} USD</span>
                </div>
                <div className="flex justify-between border-b border-[#E5E2DB] pb-2">
                  <span className="text-[#6B7269]">Incoterm & Destination:</span>
                  <span className="font-bold text-[#0F3D2E]">{incoterm} ({country})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6B7269]">EU GPSR Responsible Person:</span>
                  <span className="font-semibold text-emerald-800">{EU_RESPONSIBLE_PERSON.companyName}</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap justify-center gap-3">
                <button
                  onClick={handleDownloadPI}
                  disabled={downloadingPI}
                  className="px-6 py-3 bg-[#FF7A45] hover:bg-[#e86935] text-white rounded-xl text-xs font-bold shadow flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadingPI ? 'Generating PDF...' : 'Download Proforma Invoice & Compliance Pack (.PDF)'}</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#0F3D2E] hover:bg-[#165641] text-white rounded-xl text-xs font-bold shadow cursor-pointer"
                >
                  Return to Storefront
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Step 1: Live Interactive Tier Estimator */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F3D2E]">
                  <Calculator className="w-4 h-4 text-[#FF7A45]" />
                  <span>Step 1: Real-Time Volume & Tier Pricing Calculation</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Select Product */}
                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Select Hardware SKU:</label>
                    <select
                      value={selectedProductSlug}
                      onChange={(e) => setSelectedProductSlug(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E5E2DB] rounded-xl text-xs font-medium text-[#1A1D1B] focus:ring-2 focus:ring-[#0F3D2E]"
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name} (Retail ${p.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-semibold text-[#1A1D1B]">Order Quantity:</label>
                      <span className="text-xs font-extrabold text-[#FF7A45] bg-white px-2 py-0.5 rounded border border-[#E5E2DB]">
                        {orderUnits} Units
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="2500"
                      step="50"
                      value={orderUnits}
                      onChange={(e) => setOrderUnits(Number(e.target.value))}
                      className="w-full h-2 bg-[#E5E2DB] rounded-lg appearance-none cursor-pointer accent-[#FF7A45]"
                    />
                    <div className="flex justify-between text-[10px] text-[#6B7269] mt-1">
                      <span>50 (MOQ Trial)</span>
                      <span>200 (Popular)</span>
                      <span>500 (Container Tier)</span>
                      <span>1000+ (Max OEM Tier)</span>
                    </div>
                  </div>
                </div>

                {/* Customization Checkboxes */}
                <div className="pt-2 border-t border-[#E5E2DB]/80 space-y-2">
                  <span className="text-xs font-semibold text-[#1A1D1B] block">OEM / Customization Scope:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E2DB] cursor-pointer hover:bg-[#E8F3EE]">
                      <input
                        type="checkbox"
                        checked={customLogo}
                        onChange={(e) => setCustomLogo(e.target.checked)}
                        className="rounded text-[#0F3D2E] focus:ring-0"
                      />
                      <span>Custom Silk/Laser Logo</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E2DB] cursor-pointer hover:bg-[#E8F3EE]">
                      <input
                        type="checkbox"
                        checked={customBox}
                        onChange={(e) => setCustomBox(e.target.checked)}
                        className="rounded text-[#0F3D2E] focus:ring-0"
                      />
                      <span>Custom Color Packaging</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 bg-white rounded-xl border border-[#E5E2DB] cursor-pointer hover:bg-[#E8F3EE]">
                      <input
                        type="checkbox"
                        checked={customApp}
                        onChange={(e) => setCustomApp(e.target.checked)}
                        className="rounded text-[#0F3D2E] focus:ring-0"
                      />
                      <span>White-Label App SDK</span>
                    </label>
                  </div>
                </div>

                {/* Instant Calculation Output Summary Box */}
                <div className="p-4 rounded-xl bg-[#0F3D2E] text-white grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase block">Est. Unit Price</span>
                    <span className="text-lg font-extrabold text-[#FF7A45]">${finalUnitPrice}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase block">Est. Total (FOB)</span>
                    <span className="text-lg font-extrabold text-white">${totalGoodsValue}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase block">Cartons / CBM</span>
                    <span className="text-sm font-bold text-emerald-100">{cartonCount}ctns ({estimatedCBM}m³)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-300 uppercase block">Production Lead Time</span>
                    <span className="text-sm font-bold text-emerald-100">12 - 18 Days</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Compliance Dossier Selection */}
              <div className="p-5 rounded-2xl bg-white border border-[#E5E2DB] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F3D2E]">
                    <ShieldCheck className="w-4 h-4 text-[#FF7A45]" />
                    <span>Step 2: Required Lab Certifications & Regulatory Dossiers</span>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-semibold">100% Pre-Certified</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needFcc} onChange={e => setNeedFcc(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>FCC Part 15C/B</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needCeRed} onChange={e => setNeedCeRed(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>CE-RED (EN 18031)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needGpsrDoc} onChange={e => setNeedGpsrDoc(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>EU GPSR 2023/988 DoC</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needUlEtl} onChange={e => setNeedUlEtl(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>cETLus 62368-1</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needFoodContact} onChange={e => setNeedFoodContact(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>FDA / LFGB Food Contact</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needBsci} onChange={e => setNeedBsci(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>BSCI / Sedex Audit</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 rounded-lg bg-[#FAF7F2] border border-[#E5E2DB] cursor-pointer">
                    <input type="checkbox" checked={needCoi} onChange={e => setNeedCoi(e.target.checked)} className="rounded text-[#0F3D2E]" />
                    <span>$5M COI (Additional Insured)</span>
                  </label>
                </div>
              </div>

              {/* Step 3: Commercial Company Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F3D2E]">
                  <Globe2 className="w-4 h-4 text-[#FF7A45]" />
                  <span>Step 3: Enterprise & Delivery Logistics Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Company / Organization Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pacific Pet Distribution GmbH"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Contact Name & Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Hayes (Procurement Lead)"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@pacificpet.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">WhatsApp / Direct Phone</label>
                    <input
                      type="text"
                      placeholder="e.g. +1 (555) 234-5678"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Destination Country / Region *</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    >
                      <option value="United States">United States 🇺🇸 (LA / Long Beach Port / DDP Amazon FBA)</option>
                      <option value="Germany">Germany 🇩🇪 (Hamburg / Rotterdam / DDP)</option>
                      <option value="United Kingdom">United Kingdom 🇬🇧 (Felixstowe / London)</option>
                      <option value="Canada">Canada 🇨🇦 (Vancouver / Toronto)</option>
                      <option value="Netherlands">Netherlands 🇳🇱 (Rotterdam Port)</option>
                      <option value="France">France 🇫🇷 (Le Havre / Paris)</option>
                      <option value="Australia">Australia 🇦🇺 (Sydney / Melbourne)</option>
                      <option value="Other">Other Global Destination</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">Target Trade Incoterm</label>
                    <select
                      value={incoterm}
                      onChange={(e) => setIncoterm(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                    >
                      <option value="FOB-SZ">FOB Shenzhen Port (Standard)</option>
                      <option value="FOB-NB">FOB Ningbo Port</option>
                      <option value="CIF">CIF (Port of Destination)</option>
                      <option value="DDP">DDP Landed (Door-to-Door Duty Paid)</option>
                      <option value="EXW">EXW Factory (Self Pickup)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#1A1D1B] block mb-1">
                    Special Customization Requirements / Sample Testing Needs:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe any custom firmware requirements, color Pantone matches, barcoding needs, or request for 2 evaluation test units..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 border-t border-[#E5E2DB] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6B7269]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strict NDA Protected · Direct Factory Pricing</span>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 rounded-xl border border-[#E5E2DB] text-xs font-bold text-[#6B7269] hover:bg-gray-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-[#FF7A45] hover:bg-[#e86935] text-white text-xs font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Request & Generate Official PI</span>
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
