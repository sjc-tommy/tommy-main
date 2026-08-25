import React from 'react';
import { Instagram, Sparkles, Heart } from 'lucide-react';

export const InstagramWall: React.FC = () => {
  const posts = [
    {
      img: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=80',
      handle: '@oliver_the_corgi',
      likes: '1.4k',
      caption: 'Waiting patiently for the Petora Vision Pro 5pm dinner chime! 🐾'
    },
    {
      img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80',
      handle: '@lunathebengal',
      likes: '890',
      caption: 'Hydration game leveled up with the stainless PureFlow fountain 💦'
    },
    {
      img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&auto=format&fit=crop&q=80',
      handle: '@seattle_golden_duo',
      likes: '2.1k',
      caption: 'Mom checking on us from her office through the 2K camera! ❤️'
    },
    {
      img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&auto=format&fit=crop&q=80',
      handle: '@milo_ragdoll_life',
      likes: '954',
      caption: 'Zero litter odor in my apartment thanks to WhisperClean robotic box ✨'
    },
    {
      img: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=600&auto=format&fit=crop&q=80',
      handle: '@baxter_frenchie_la',
      likes: '3.2k',
      caption: 'B2B boutique evaluation sample: our customers love this tech! 🚀'
    },
    {
      img: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=600&auto=format&fit=crop&q=80',
      handle: '@cat_cafe_amsterdam',
      likes: '1.8k',
      caption: 'RoboRoll autonomous ball keeping all 12 cats entertained all day! 🎾'
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#FF7A45] uppercase tracking-wider mb-2">
            <Instagram className="w-3.5 h-3.5" />
            <span>Join Our Global Community</span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#0F3D2E] tracking-tight">
            Tag #PetoraSmartCare on Instagram
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7269] mt-2">
            Share your pet’s daily smart routine to be featured on our official global gallery and win free replacement filters.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((p, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#FAF7F2] border border-[#E5E2DB] shadow-xs cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0F3D2E]/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span>{p.handle}</span>
                  <span className="flex items-center gap-1 text-[#FF7A45]">
                    <Heart className="w-3 h-3 fill-[#FF7A45]" /> {p.likes}
                  </span>
                </div>
                <p className="text-[10px] text-emerald-100 line-clamp-2 italic">
                  "{p.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
