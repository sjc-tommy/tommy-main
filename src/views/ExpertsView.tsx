import React from 'react';
import { Stethoscope, Award, ShieldCheck, CheckCircle2, FileCheck, Sparkles, ArrowRight } from 'lucide-react';
import { EXPERTS } from '../data/mockData';

interface ExpertsViewProps {
  onExploreProducts: () => void;
}

export const ExpertsView: React.FC<ExpertsViewProps> = ({ onExploreProducts }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200">
            <Stethoscope className="w-3.5 h-3.5 text-[#FF7A45]" /> Scientific Board of Veterinary Advisors
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Medical Rigor Behind Every Hardware Micro-Portion
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7269]">
            We do not manufacture generic gadgets. Every Petora product undergoes strict animal welfare and clinical biosecurity review before commercial release.
          </p>
        </div>

        {/* EEAT Direct Trust Box */}
        <div className="tldr-box max-w-4xl mx-auto p-6 rounded-2xl text-xs sm:text-sm text-[#0F3D2E] leading-relaxed shadow-sm">
          <span className="font-extrabold uppercase tracking-wide text-[10px] block mb-1">
            ⚡ Veterinary Review Standard:
          </span>
          All Petora smart appliances are validated against American Association of Feline Practitioners (AAFP) feeding frequency standards and FDA Title 21 food contact safety protocols. Every product page and clinical paper is signed by actively licensed doctors of veterinary medicine.
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTS.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-3xl p-8 border border-[#E5E2DB] shadow-md space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={expert.avatar}
                    alt={expert.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0F3D2E] shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0F3D2E]">{expert.name}</h3>
                    <p className="text-xs font-bold text-[#FF7A45]">{expert.title}</p>
                    <span className="text-[10px] font-mono text-emerald-800 bg-[#E8F3EE] px-2 py-0.5 rounded block mt-1">
                      License #{expert.licenseNumber}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#6B7269] font-medium border-b border-[#E5E2DB] pb-3 space-y-1">
                  <p className="text-[#0F3D2E] font-bold">Specialty: {expert.specialty}</p>
                  <p>{expert.credentials}</p>
                </div>

                <blockquote className="text-xs text-[#1A1D1B] italic bg-[#FAF7F2] p-4 rounded-xl border border-[#E5E2DB] leading-relaxed">
                  "{expert.quote}"
                </blockquote>

                <p className="text-xs text-[#6B7269] leading-relaxed">
                  {expert.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E2DB] space-y-2 text-[11px] text-[#0F3D2E]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Annual Independent Lab Audit Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Authored 12+ Peer-Reviewed Studies</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Laboratory Testing Protocols */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl font-extrabold text-[#0F3D2E]">
              Our 4-Stage Clinical Testing Protocol
            </h2>
            <p className="text-xs text-[#6B7269] mt-1">
              Ensuring zero mechanical failures and 100% bio-safe pet interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-2">
              <span className="text-xs font-bold text-[#FF7A45] uppercase">Phase 1</span>
              <h4 className="text-sm font-extrabold text-[#0F3D2E]">Material Passivation</h4>
              <p className="text-xs text-[#6B7269]">
                Spectrometric testing of SUS304 stainless steel and non-toxic food-grade silicone seals under acidic saliva exposure.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-2">
              <span className="text-xs font-bold text-[#FF7A45] uppercase">Phase 2</span>
              <h4 className="text-sm font-extrabold text-[#0F3D2E]">100,000 Cycle Anti-Jam</h4>
              <p className="text-xs text-[#6B7269]">
                Continuous kibble and freeze-dried food rotor stress testing at varied humidity levels (30% to 90% RH).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-2">
              <span className="text-xs font-bold text-[#FF7A45] uppercase">Phase 3</span>
              <h4 className="text-sm font-extrabold text-[#0F3D2E]">Acoustic Decibel Tuning</h4>
              <p className="text-xs text-[#6B7269]">
                Calibrating ultra-quiet magnetic pumps and dispensing gates below 20dB to prevent startle reflexes in skittish pets.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB] space-y-2">
              <span className="text-xs font-bold text-[#FF7A45] uppercase">Phase 4</span>
              <h4 className="text-sm font-extrabold text-[#0F3D2E]">Biometric Multi-Cat AI</h4>
              <p className="text-xs text-[#6B7269]">
                Precision strain-gauge sensors accurate to ±1g to monitor daily feline metabolic shifts and water intake curves.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
