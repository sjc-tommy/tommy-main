import React from 'react';
import { Stethoscope, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { EXPERTS } from '../data/mockData';

interface VetAdvisorySectionProps {
  onViewExpertsPage: () => void;
}

export const VetAdvisorySection: React.FC<VetAdvisorySectionProps> = ({ onViewExpertsPage }) => {
  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-2">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Veterinary Medical & Behavioral Panel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
              Backed by Board-Certified Specialists
            </h2>
            <p className="text-sm text-[#6B7269] mt-2 max-w-2xl">
              Every rotor calibration, stainless steel surface, and water filtration cartridge is clinically verified by practicing veterinarians and animal behavioral consultants.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={onViewExpertsPage}
              className="text-xs font-bold text-[#0F3D2E] bg-white hover:bg-[#E8F3EE] px-4 py-2.5 rounded-xl border border-[#E5E2DB] shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Full Credentials & Testing Protocols</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF7A45]" />
            </button>
          </div>
        </div>

        {/* 3 Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERTS.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl p-6 border border-[#E5E2DB] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.avatar}
                    alt={exp.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-[#0F3D2E] shadow-sm"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-[#0F3D2E]">{exp.name}</h3>
                    <p className="text-xs font-bold text-[#FF7A45]">{exp.title}</p>
                    <span className="text-[10px] font-mono text-emerald-800 bg-[#E8F3EE] px-1.5 py-0.5 rounded block mt-0.5">
                      Lic. {exp.licenseNumber}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#6B7269] font-medium border-b border-[#E5E2DB] pb-3">
                  {exp.credentials}
                </p>

                <p className="text-xs text-[#1A1D1B] leading-relaxed italic bg-[#FAF7F2] p-3 rounded-xl border border-[#E5E2DB]/60">
                  "{exp.quote}"
                </p>

                <p className="text-xs text-[#6B7269] leading-relaxed">
                  {exp.bio}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5E2DB] flex items-center gap-1.5 text-[11px] font-semibold text-[#0F3D2E]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Specialty: {exp.specialty}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
