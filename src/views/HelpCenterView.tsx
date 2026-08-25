import React, { useState } from 'react';
import { 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  FileCheck, 
  Search, 
  CheckCircle2, 
  Download, 
  Mail, 
  Phone,
  Sparkles
} from 'lucide-react';
import { GENERAL_FAQS } from '../data/mockData';

export const HelpCenterView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [registered, setRegistered] = useState(false);

  const filteredFaqs = GENERAL_FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRegisterWarranty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialNumber) return;
    setRegistered(true);
  };

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 animate-in fade-in duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF7A45]" /> Petora Global Support Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            How Can We Assist You Today?
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7269]">
            Register your 24-month replacement warranty, download firmware user manuals, or review export compliance dossiers.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search help articles (e.g., 'Wi-Fi connection', 'desiccant', 'warranty')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3.5 pl-11 text-xs bg-white border border-[#E5E2DB] rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
            />
            <Search className="w-4 h-4 text-[#6B7269] absolute left-4 top-4" />
          </div>
        </div>

        {/* 3 Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-[#E5E2DB] shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] mx-auto">
              <ShieldCheck className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F3D2E]">2-Year Warranty Portal</h3>
            <p className="text-xs text-[#6B7269]">
              Activate your hardware serial number for full instant replacement coverage.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E5E2DB] shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] mx-auto">
              <Truck className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F3D2E]">Shipping & Tracking</h3>
            <p className="text-xs text-[#6B7269]">
              Track your US / EU parcel dispatch or FOB/DDP marine container bill of lading.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-[#E5E2DB] shadow-sm space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] mx-auto">
              <RotateCcw className="w-6 h-6 text-[#FF7A45]" />
            </div>
            <h3 className="text-base font-extrabold text-[#0F3D2E]">30-Day Risk-Free Trial</h3>
            <p className="text-xs text-[#6B7269]">
              Simple hassle-free returns within 30 days if your pet doesn't love their new feeder.
            </p>
          </div>
        </div>

        {/* 2-Year Warranty Registration Box */}
        <div className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#FF7A45]" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-[#0F3D2E]">Register Your 24-Month Replacement Warranty</h2>
              <p className="text-xs text-[#6B7269]">Located on the bottom label barcode of your Petora hardware unit</p>
            </div>
          </div>

          {registered ? (
            <div className="p-5 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center gap-3 animate-in zoom-in-95">
              <CheckCircle2 className="w-6 h-6 text-emerald-700 flex-shrink-0" />
              <div>
                <span className="text-xs font-extrabold block">Warranty Registered Successfully!</span>
                <span className="text-[11px]">Your serial number #{serialNumber} is active through February 2028 with VIP priority technician support.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegisterWarranty} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                placeholder="Enter 12-character Serial No. (e.g., PT-VP-2026-8941)"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                className="flex-1 px-4 py-3 text-xs bg-[#FAF7F2] border border-[#E5E2DB] rounded-xl focus:ring-2 focus:ring-[#0F3D2E]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0F3D2E] hover:bg-[#165641] text-white rounded-xl text-xs font-bold shadow cursor-pointer transition-all flex items-center justify-center gap-1.5"
              >
                <span>Activate 2-Year Warranty</span>
              </button>
            </form>
          )}
        </div>

        {/* Help FAQs */}
        <div className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-sm space-y-6">
          <h2 className="text-xl font-extrabold text-[#0F3D2E]">Support Knowledge Base</h2>
          <div className="space-y-3">
            {filteredFaqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#0F3D2E]">{faq.question}</h4>
                <p className="text-xs text-[#6B7269] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
