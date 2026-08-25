import React from 'react';
import { ArrowRight, ShieldCheck, Star, Factory, Sparkles, CheckCircle2, Play, Eye } from 'lucide-react';
import { heroImg } from '../data/mockData';

interface HeroSectionProps {
  onShopClick: () => void;
  onOpenRFQ: () => void;
  onScrollTo360: () => void;
  onExploreEcosystem: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopClick,
  onOpenRFQ,
  onScrollTo360,
  onExploreEcosystem,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            {/* Sleek Theme Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-[#E8F3EE] px-4 py-1.5 rounded-full text-[#0F3D2E] text-xs font-bold uppercase tracking-widest border border-emerald-200/80 shadow-xs">
                <span className="w-2 h-2 bg-[#FF7A45] rounded-full animate-pulse"></span>
                <span>New: Vision Pro Feeder · 2026 Tech</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#0F3D2E] text-white tracking-wider uppercase shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A45]" /> Vet Approved
              </span>
            </div>

            {/* Main Headline with italic accent */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0F3D2E] tracking-tight leading-[1.05]">
                Smart care for the <span className="text-[#FF7A45] italic">pets</span> you love.
              </h1>
              <p className="text-lg text-[#6B7269] max-w-xl font-normal leading-relaxed">
                Elevate your pet's lifestyle with vet-approved automation. Track nutrition, health, and activity with gram-accurate portioning and 2K live telemetry from anywhere in the world.
              </p>
            </div>

            {/* High Impact CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopClick}
                className="bg-[#FF7A45] hover:bg-[#e86935] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-[#FF7A45]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Shop Smart Feeders</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="border-2 border-[#0F3D2E] text-[#0F3D2E] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#0F3D2E] hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Factory className="w-4 h-4 text-[#FF7A45]" />
                <span>B2B Wholesale / RFQ</span>
              </button>

              <button
                onClick={onScrollTo360}
                className="px-6 py-4 rounded-xl font-bold text-sm text-[#0F3D2E] bg-white border border-[#E5E2DB] hover:bg-[#E8F3EE] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Eye className="w-4 h-4 text-[#FF7A45]" />
                <span>360° 3D Interactive</span>
              </button>
            </div>

            {/* Sleek Stats Divider */}
            <div className="pt-8 flex flex-wrap gap-8 sm:gap-12 border-t border-[#E5E2DB]">
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#0F3D2E]">100K+</span>
                <span className="text-xs text-[#6B7269] uppercase font-bold tracking-widest mt-0.5">Families</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#0F3D2E]">200+</span>
                <span className="text-xs text-[#6B7269] uppercase font-bold tracking-widest mt-0.5">DVM Partners</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#0F3D2E]">2-Year</span>
                <span className="text-xs text-[#6B7269] uppercase font-bold tracking-widest mt-0.5">Warranty</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#FF7A45]">45+</span>
                <span className="text-xs text-[#6B7269] uppercase font-bold tracking-widest mt-0.5">Export Ports</span>
              </div>
            </div>

            {/* Trust Rating */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#6B7269] pt-1">
              <div className="flex text-[#F5A623]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#F5A623]" />
                ))}
              </div>
              <span>4.9 / 5.0 Average Rating based on 1,480+ Verified Buyer Reviews</span>
            </div>
          </div>

          {/* Right Visual Column (Lifestyle Image & Sleek Floating Badges) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[5/4] bg-[#E8F3EE]">
              <img
                src={heroImg}
                alt="Petora Smart Pet Care Ecosystem in a Modern Living Room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D2E]/60 via-transparent to-transparent" />
              
              {/* Image Floating Meal Delivered Card */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#E5E2DB]">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#0F3D2E]">Meal Delivered</p>
                  <p className="text-[#6B7269]">12:00 PM • Healthy Mix</p>
                </div>
              </div>

              {/* Bottom Floating Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E]">
                      <Sparkles className="w-5 h-5 text-[#FF7A45]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F3D2E]">Petora Cloud App</h4>
                      <p className="text-[11px] text-[#6B7269]">Real-time portion telemetry & 2K stream</p>
                    </div>
                  </div>
                  <button 
                    onClick={onExploreEcosystem}
                    className="text-xs font-bold text-[#FF7A45] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View App <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Live Indicator Badge */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E5E2DB]">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-[#0F3D2E]">Live 2K Vision Feeder Online</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
