import React from 'react';

export const PressWall: React.FC = () => {
  const pressLogos = [
    { name: 'Forbes', subtitle: 'The Future of Pet IoT Hardware', italic: true },
    { name: 'WIRECUTTER', subtitle: 'Top Pick: 2026 Smart Feeders', italic: false },
    { name: 'CNN', subtitle: 'Best Camera & Treat Dispenser', italic: false },
    { name: 'TheSprucePets', subtitle: 'Veterinary Approved Cat Hydration', italic: true },
    { name: 'PetAge Global', subtitle: 'Leading Global OEM/ODM Exporter', italic: false },
  ];

  return (
    <section className="py-10 bg-white border-y border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold text-[#6B7269] uppercase tracking-[0.25em] text-center lg:text-left flex-shrink-0">
            As seen in reputable publications & clinical panels
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {pressLogos.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center group cursor-default transition-all"
              >
                <span className={`text-xl sm:text-2xl font-black tracking-tighter text-[#6B7269]/40 group-hover:text-[#0F3D2E] transition-colors duration-200 ${item.italic ? 'italic' : ''}`}>
                  {item.name}
                </span>
                <span className="text-[10px] text-[#6B7269]/70 font-medium mt-0.5 group-hover:text-[#FF7A45] transition-colors">
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

