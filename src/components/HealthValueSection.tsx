import React from 'react';
import { Stethoscope, CheckCircle2, TrendingUp, ShieldAlert, FileText, ArrowRight } from 'lucide-react';

interface HealthValueSectionProps {
  onExploreGuides: () => void;
  onViewExperts: () => void;
}

export const HealthValueSection: React.FC<HealthValueSectionProps> = ({
  onExploreGuides,
  onViewExperts
}) => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Clinical Stats & Authority */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200">
              <Stethoscope className="w-3.5 h-3.5 text-[#FF7A45]" /> Evidence-Based Veterinary Science
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight leading-tight">
              Transforming Daily Nutrition into Preventive Medicine
            </h2>

            <p className="text-base text-[#6B7269] leading-relaxed">
              Clinical studies from the AVMA and APOP confirm that over 60% of domestic pets suffer from obesity, renal stress, or gastric bloat due to free-feeding and stagnant plastic bowls. Petora solves root causes through precision hardware engineering.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB]">
                <div className="p-2 rounded-lg bg-[#0F3D2E] text-white">
                  <TrendingUp className="w-5 h-5 text-[#FF7A45]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F3D2E]">+38% Higher Daily Feline Hydration</h4>
                  <p className="text-xs text-[#6B7269] mt-0.5">
                    Oxygenated continuous stream with SUS304 antibacterial basin protects cats from lethal chronic kidney disease (CKD).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E5E2DB]">
                <div className="p-2 rounded-lg bg-[#0F3D2E] text-white">
                  <ShieldAlert className="w-5 h-5 text-[#FF7A45]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F3D2E]">Zero Feline Chin Acne (Folliculitis)</h4>
                  <p className="text-xs text-[#6B7269] mt-0.5">
                    Medical non-porous 304 stainless steel resists bacterial biofilm adhesion, unlike porous plastic alternatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onExploreGuides}
                className="text-xs font-bold text-[#0F3D2E] bg-[#E8F3EE] hover:bg-emerald-200 px-4 py-2.5 rounded-xl border border-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0F3D2E]" /> Read Clinical Research Papers
              </button>

              <button
                onClick={onViewExperts}
                className="text-xs font-bold text-[#FF7A45] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Meet the Vet Advisory Board <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Vet Card with Endorsement */}
          <div className="lg:col-span-6 bg-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-lg relative">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&auto=format&fit=crop&q=80"
                alt="Dr. Sarah Jenkins DVM"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0F3D2E] shadow-md"
              />
              <div>
                <h4 className="text-base font-extrabold text-[#0F3D2E]">Dr. Sarah Jenkins</h4>
                <p className="text-xs font-semibold text-[#FF7A45]">Chief Veterinary Officer · DVM, DACVIM</p>
                <p className="text-[11px] text-[#6B7269]">Cornell Feline Health Center · License #NY-VET-482910</p>
              </div>
            </div>

            <blockquote className="text-sm text-[#1A1D1B] italic leading-relaxed border-l-4 border-[#0F3D2E] pl-4 py-1 mb-6 bg-white/70 rounded-r-xl">
              "When pet parents switch to automated portioning with airtight freshness gates, we see an immediate reduction in morning gastric bilious vomiting and rapid normalization of feline blood glucose levels. Petora’s engineering precision meets the highest clinical standards."
            </blockquote>

            <div className="grid grid-cols-2 gap-3 text-xs pt-4 border-t border-[#E5E2DB]">
              <div className="flex items-center gap-2 text-[#0F3D2E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>AAFP Guidelines Met</span>
              </div>
              <div className="flex items-center gap-2 text-[#0F3D2E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>FDA Food-Contact Safe</span>
              </div>
              <div className="flex items-center gap-2 text-[#0F3D2E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Microplastics</span>
              </div>
              <div className="flex items-center gap-2 text-[#0F3D2E] font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Peer-Reviewed Studies</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
