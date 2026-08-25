import React, { useState } from 'react';
import { 
  Smartphone, 
  Clock, 
  Video, 
  Activity, 
  Sparkles, 
  Volume2, 
  Wifi, 
  Battery, 
  Check, 
  ChevronRight,
  RotateCcw,
  HeartPulse,
  Flame,
  Award
} from 'lucide-react';

export const AppEcosystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'camera' | 'health' | 'litter'>('feed');
  const [feedGrams, setFeedGrams] = useState(25);
  const [treatDispensed, setTreatDispensed] = useState(false);
  const [voicePlaying, setVoicePlaying] = useState(false);

  const handleDispenseTreat = () => {
    setTreatDispensed(true);
    setTimeout(() => setTreatDispensed(false), 3000);
  };

  const handlePlayVoice = () => {
    setVoicePlaying(true);
    setTimeout(() => setVoicePlaying(false), 2500);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] border-b border-[#E5E2DB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0F3D2E] text-white tracking-wide mb-3">
            <Smartphone className="w-3.5 h-3.5 text-[#FF7A45]" /> Petora Cloud IoT System
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Total Health Control in the Palm of Your Hand
          </h2>
          <p className="text-sm sm:text-base text-[#6B7269] mt-3">
            One unified iOS & Android application synchronizes your smart feeders, 2K pet cameras, water fountains, and robotic litter boxes. No hidden subscription tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Feature Navigator Tabs */}
          <div className="lg:col-span-6 space-y-4">
            
            <div
              onClick={() => setActiveTab('feed')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'feed'
                  ? 'bg-white border-[#0F3D2E] shadow-lg ring-1 ring-[#0F3D2E]/20'
                  : 'bg-white/60 border-[#E5E2DB] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'feed' ? 'bg-[#0F3D2E] text-[#FF7A45]' : 'bg-[#E8F3EE] text-[#0F3D2E]'}`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0F3D2E]">Precision Micro-Portion Scheduling</h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Local Memory</span>
                  </div>
                  <p className="text-xs text-[#6B7269] mt-1">
                    Set up to 10 automated daily meals with gram-level accuracy (5g to 100g). Stores schedules onboard so meals dispense even during internet dropouts.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('camera')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'camera'
                  ? 'bg-white border-[#0F3D2E] shadow-lg ring-1 ring-[#0F3D2E]/20'
                  : 'bg-white/60 border-[#E5E2DB] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'camera' ? 'bg-[#0F3D2E] text-[#FF7A45]' : 'bg-[#E8F3EE] text-[#0F3D2E]'}`}>
                  <Video className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0F3D2E]">2K Live Stream & Remote Treat Tossing</h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-orange-100 text-[#FF7A45]">AI Vision</span>
                  </div>
                  <p className="text-xs text-[#6B7269] mt-1">
                    Check in on your pets with ultra-clear 2K HDR night vision, talk through noise-canceled two-way audio, and dispense rewarding treats on demand.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('health')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'health'
                  ? 'bg-white border-[#0F3D2E] shadow-lg ring-1 ring-[#0F3D2E]/20'
                  : 'bg-white/60 border-[#E5E2DB] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'health' ? 'bg-[#0F3D2E] text-[#FF7A45]' : 'bg-[#E8F3EE] text-[#0F3D2E]'}`}>
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0F3D2E]">Clinical Nutrition & Weight Curves</h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">Veterinary Telemetry</span>
                  </div>
                  <p className="text-xs text-[#6B7269] mt-1">
                    Automatically track daily caloric consumption against veterinary target weight curves. Receive instant warnings if food remains uneaten.
                  </p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setActiveTab('litter')}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeTab === 'litter'
                  ? 'bg-white border-[#0F3D2E] shadow-lg ring-1 ring-[#0F3D2E]/20'
                  : 'bg-white/60 border-[#E5E2DB] hover:bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${activeTab === 'litter' ? 'bg-[#0F3D2E] text-[#FF7A45]' : 'bg-[#E8F3EE] text-[#0F3D2E]'}`}>
                  <Activity className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0F3D2E]">Robotic Litter Cycle & Health Alerts</h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800">Multi-Cat ID</span>
                  </div>
                  <p className="text-xs text-[#6B7269] mt-1">
                    Differentiates multiple cats by weight, logging bathroom duration, frequency, and waste bin capacity with auto plasma odor neutralization.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Smartphone Simulator Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[320px] sm:w-[350px] h-[660px] bg-[#1A1D1B] rounded-[48px] p-3.5 shadow-2xl border-4 border-gray-800 ring-1 ring-white/20">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0F3D2E]/80 mr-2" />
                <div className="w-8 h-1 rounded-full bg-gray-800" />
              </div>

              {/* Inside Screen */}
              <div className="w-full h-full bg-[#FAF7F2] rounded-[38px] overflow-hidden flex flex-col justify-between pt-8 pb-4 px-4 text-[#1A1D1B] relative">
                
                {/* App Status Header */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#6B7269] pb-2 border-b border-[#E5E2DB]">
                    <span className="text-[#0F3D2E] flex items-center gap-1 font-extrabold">
                      <Sparkles className="w-3 h-3 text-[#FF7A45]" /> Petora App
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Wifi className="w-3 h-3 text-emerald-600" />
                      <Battery className="w-3.5 h-3.5 text-emerald-600" />
                      <span>98%</span>
                    </div>
                  </div>

                  {/* Active Pet Switcher */}
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&auto=format&fit=crop&q=80"
                        alt="Active Pet Milo"
                        referrerPolicy="no-referrer"
                        className="w-9 h-9 rounded-full object-cover border-2 border-[#0F3D2E]"
                      />
                      <div>
                        <h4 className="text-xs font-extrabold text-[#0F3D2E]">Milo (Golden Cat)</h4>
                        <p className="text-[10px] text-emerald-700 font-semibold">● Online · Living Room Feeder</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-white px-2 py-1 rounded-full border text-[#6B7269] font-medium">4.2 kg</span>
                  </div>
                </div>

                {/* Dynamic Screen Tab Content */}
                <div className="flex-1 py-2 overflow-y-auto space-y-3">
                  
                  {activeTab === 'feed' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="p-3 bg-white rounded-xl border border-[#E5E2DB] shadow-sm">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0F3D2E] mb-2">
                          <span>Next Meal in 1h 24m</span>
                          <span className="text-[#FF7A45] font-extrabold">{feedGrams}g portion</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="80"
                          step="5"
                          value={feedGrams}
                          onChange={(e) => setFeedGrams(Number(e.target.value))}
                          className="w-full h-1.5 bg-[#E5E2DB] rounded-lg accent-[#FF7A45] cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] text-[#6B7269] mt-1">
                          <span>10g (Snack)</span>
                          <span>40g (Standard)</span>
                          <span>80g (Dual Cat)</span>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-[11px] font-bold text-[#6B7269] uppercase">Today's Meal Log</p>
                        <div className="p-2 rounded-lg bg-white border text-xs flex items-center justify-between">
                          <span className="font-semibold text-[#0F3D2E]">07:30 AM · Morning Fuel</span>
                          <span className="text-emerald-700 font-bold">25g Dispensed ✓</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border text-xs flex items-center justify-between">
                          <span className="font-semibold text-[#0F3D2E]">01:00 PM · Afternoon Snack</span>
                          <span className="text-emerald-700 font-bold">15g Dispensed ✓</span>
                        </div>
                        <div className="p-2 rounded-lg bg-[#E8F3EE] border border-emerald-200 text-xs flex items-center justify-between">
                          <span className="font-bold text-[#0F3D2E]">07:00 PM · Dinner Main</span>
                          <span className="text-[#FF7A45] font-extrabold">{feedGrams}g Scheduled</span>
                        </div>
                      </div>

                      {/* Interactive Manual Feed Button */}
                      <button
                        onClick={handlePlayVoice}
                        className="w-full py-2.5 bg-[#0F3D2E] hover:bg-[#165641] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow cursor-pointer transition-all"
                      >
                        <Volume2 className={`w-3.5 h-3.5 ${voicePlaying ? 'text-[#FF7A45] animate-spin' : ''}`} />
                        <span>{voicePlaying ? 'Playing: "Milo, Dinner Time!"' : 'Play 10s Voice Call & Dispense'}</span>
                      </button>
                    </div>
                  )}

                  {activeTab === 'camera' && (
                    <div className="space-y-3 animate-in fade-in duration-200">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black border shadow-inner flex items-center justify-center">
                        <img
                          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80"
                          alt="Camera Live Stream"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-85"
                        />
                        <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 animate-pulse">
                          <div className="w-1.5 h-1.5 rounded-full bg-white" /> REC · 2K 30FPS
                        </div>
                        {treatDispensed && (
                          <div className="absolute inset-0 bg-[#0F3D2E]/80 backdrop-blur-xs flex flex-col items-center justify-center text-white animate-in zoom-in-95">
                            <Sparkles className="w-8 h-8 text-[#FF7A45] animate-bounce" />
                            <span className="text-xs font-bold mt-1">Treat Tossed Successfully!</span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={handleDispenseTreat}
                          className="py-2.5 bg-[#FF7A45] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow cursor-pointer"
                        >
                          <Flame className="w-3.5 h-3.5" />
                          <span>Toss Treat (3m)</span>
                        </button>
                        <button className="py-2.5 bg-white border border-[#E5E2DB] text-[#0F3D2E] rounded-xl text-xs font-bold flex items-center justify-center gap-1">
                          <Volume2 className="w-3.5 h-3.5 text-[#0F3D2E]" />
                          <span>Hold To Talk</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'health' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="p-3 bg-white rounded-xl border">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0F3D2E]">
                          <span>Weekly Caloric Intake</span>
                          <span className="text-emerald-700">98% on target</span>
                        </div>
                        <div className="flex items-end gap-1.5 h-16 pt-2">
                          {[65, 80, 70, 95, 85, 90, 88].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                              <div
                                style={{ height: `${h}%` }}
                                className={`w-full rounded-t ${i === 6 ? 'bg-[#FF7A45]' : 'bg-[#0F3D2E]/70'}`}
                              />
                              <span className="text-[8px] text-[#6B7269]">
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#E8F3EE] rounded-xl text-[11px] text-[#0F3D2E] font-medium border border-emerald-200">
                        <span className="font-bold">Veterinary Insight:</span> Milo’s eating velocity is healthy (avg 4.2 mins per meal).
                      </div>
                    </div>
                  )}

                  {activeTab === 'litter' && (
                    <div className="space-y-2.5 animate-in fade-in duration-200">
                      <div className="p-3 bg-white rounded-xl border">
                        <div className="flex items-center justify-between text-xs font-bold text-[#0F3D2E]">
                          <span>WhisperClean Litter Status</span>
                          <span className="text-emerald-700">Ready (Odors 0%)</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2 text-center text-xs">
                          <div className="p-2 bg-[#FAF7F2] rounded-lg">
                            <span className="text-[10px] text-[#6B7269] block">Waste Bin</span>
                            <span className="font-extrabold text-[#0F3D2E]">25% (11 days left)</span>
                          </div>
                          <div className="p-2 bg-[#FAF7F2] rounded-lg">
                            <span className="text-[10px] text-[#6B7269] block">Visits Today</span>
                            <span className="font-extrabold text-[#FF7A45]">3 times (Normal)</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-[#0F3D2E] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1">
                        <RotateCcw className="w-3.5 h-3.5" /> Start Instant Cycle
                      </button>
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Mock */}
                <div className="pt-2 border-t border-[#E5E2DB] grid grid-cols-4 gap-1 text-center text-[9px] font-semibold text-[#6B7269]">
                  <button onClick={() => setActiveTab('feed')} className={`py-1 ${activeTab === 'feed' ? 'text-[#0F3D2E] font-bold' : ''}`}>Feed</button>
                  <button onClick={() => setActiveTab('camera')} className={`py-1 ${activeTab === 'camera' ? 'text-[#0F3D2E] font-bold' : ''}`}>Camera</button>
                  <button onClick={() => setActiveTab('health')} className={`py-1 ${activeTab === 'health' ? 'text-[#0F3D2E] font-bold' : ''}`}>Health</button>
                  <button onClick={() => setActiveTab('litter')} className={`py-1 ${activeTab === 'litter' ? 'text-[#0F3D2E] font-bold' : ''}`}>Litter</button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
