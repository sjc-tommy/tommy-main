import React from 'react';
import { Smartphone, ShieldCheck, Globe2, Lock } from 'lucide-react';

export const ValueBand: React.FC = () => {
  const values = [
    {
      icon: Smartphone,
      title: 'App Control',
      desc: 'Feed anytime, anywhere with zero fees',
      badge: 'IoT Cloud'
    },
    {
      icon: ShieldCheck,
      title: 'Vet Approved',
      desc: 'Health-first design by DVM panel',
      badge: 'Clinical'
    },
    {
      icon: Globe2,
      title: 'Global B2B',
      desc: 'China Export Ready · MOQ 50 pcs',
      badge: 'Factory'
    },
    {
      icon: Lock,
      title: 'Freshness Pro',
      desc: 'Triple-seal lock system & desiccant',
      badge: 'Patented'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-[#E8F3EE] p-5 rounded-2xl flex items-center gap-4 group hover:bg-[#0F3D2E] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0F3D2E] group-hover:bg-white/20 group-hover:text-white flex-shrink-0 transition-colors shadow-xs">
                  <Icon className="w-6 h-6 text-[#FF7A45] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold group-hover:text-white transition-colors">{v.title}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-60 group-hover:opacity-80">
                      {v.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7269] group-hover:text-emerald-100 transition-colors mt-0.5 leading-snug">
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

