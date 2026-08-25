import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, Sparkles, FileSpreadsheet, Download } from 'lucide-react';

export const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'dtc' | 'b2b'>('dtc');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#E8F3EE] border-b border-[#E5E2DB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F3D2E] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FF7A45] text-white">
              <Sparkles className="w-3.5 h-3.5" /> Exclusive Pet Tech Briefing
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Get 10% Off Your First Order <br />
              <span className="text-[#FF7A45] font-semibold text-lg sm:text-2xl">& 2026 B2B Global Wholesale Catalog</span>
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100/80">
              Join 45,000+ veterinary clinics, pet retailers, and conscious pet owners receiving our weekly clinical nutrition briefings and hardware teardowns.
            </p>

            {/* Type Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setUserType('dtc')}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  userType === 'dtc' ? 'bg-[#FF7A45] text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                Pet Parent (10% Coupon)
              </button>
              <button
                type="button"
                onClick={() => setUserType('b2b')}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  userType === 'b2b' ? 'bg-[#FF7A45] text-white font-bold' : 'text-white/80 hover:text-white'
                }`}
              >
                Wholesale / B2B Export Catalog
              </button>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-500 text-white flex items-center justify-center gap-2 animate-in zoom-in-95">
                <CheckCircle2 className="w-5 h-5 text-[#FF7A45]" />
                <span className="text-xs font-bold">
                  {userType === 'dtc'
                    ? 'Success! Your 10% discount code PETORA10 has been dispatched to your inbox.'
                    : 'Success! The 2026 B2B Wholesale Export Spec Catalog (.PDF) is on its way to your email.'}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your corporate or personal email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 pl-10 text-xs rounded-xl bg-white text-[#1A1D1B] focus:outline-none focus:ring-2 focus:ring-[#FF7A45]"
                  />
                  <Mail className="w-4 h-4 text-[#6B7269] absolute left-3.5 top-3.5" />
                </div>
                <button
                  type="submit"
                  className="bg-[#FF7A45] hover:bg-[#e86935] text-white py-3.5 px-6 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0"
                >
                  <span>{userType === 'dtc' ? 'Claim 10% Off' : 'Download Catalog'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[10px] text-white/50 pt-1">
              Zero spam. Unsubscribe at any time. CCPA & GDPR compliant.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
