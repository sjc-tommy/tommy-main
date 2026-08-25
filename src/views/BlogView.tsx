import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Stethoscope, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft,
  Share2,
  FileText
} from 'lucide-react';
import { BLOG_POSTS, EXPERTS, PRODUCTS } from '../data/mockData';
import { BlogPost, Product } from '../types';

interface BlogViewProps {
  initialSlug?: string;
  onViewProduct: (slug: string) => void;
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  initialSlug,
  onViewProduct,
  onAddToCart,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null);
  const [activeCategory, setActiveCategory] = useState('All');

  const selectedPost = BLOG_POSTS.find((p) => p.slug === selectedSlug);

  const filteredPosts = BLOG_POSTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  if (selectedPost) {
    const expert = EXPERTS.find((e) => e.name === selectedPost.author) || EXPERTS[0];
    const relatedProduct = PRODUCTS.find((p) => p.slug === selectedPost.relatedProductSlug) || PRODUCTS[0];

    return (
      <div className="bg-[#FAF7F2] min-h-screen py-10 animate-in fade-in duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back button */}
          <button
            onClick={() => setSelectedSlug(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F3D2E] hover:underline cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Back to All Research Guides
          </button>

          {/* Article Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-full font-bold bg-[#E8F3EE] text-[#0F3D2E] uppercase">
                {selectedPost.category}
              </span>
              <span className="text-[#6B7269] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
              </span>
              <span className="text-[#6B7269] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl sm:leading-tight font-extrabold text-[#0F3D2E]">
              {selectedPost.title}
            </h1>

            {/* Author Credential Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAF7F2] border border-[#E5E2DB]">
              <img
                src={expert.avatar}
                alt={expert.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-xl object-cover border border-[#0F3D2E]"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-[#0F3D2E]">{selectedPost.author}</span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded">
                    DVM Peer-Reviewed
                  </span>
                </div>
                <p className="text-[11px] text-[#FF7A45] font-semibold">{selectedPost.authorRole}</p>
                <p className="text-[10px] text-[#6B7269]">Cornell Feline Health Center · License #{expert.licenseNumber}</p>
              </div>
            </div>

            {/* GEO TL;DR Direct Answer Box */}
            <div className="tldr-box p-5 rounded-2xl text-xs sm:text-sm text-[#0F3D2E] leading-relaxed shadow-sm">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] mb-1">
                <Sparkles className="w-4 h-4 text-[#FF7A45]" />
                <span>⚡ AI Overview & Clinical TL;DR:</span>
              </div>
              <p>{selectedPost.tldr}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-[#E5E2DB] aspect-video">
            <img
              src={selectedPost.coverImage}
              alt={selectedPost.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Main Body */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E2DB] shadow-sm space-y-6 text-sm text-[#1A1D1B] leading-relaxed">
            
            <h2 className="text-xl font-extrabold text-[#0F3D2E]">The Epidemic of Free-Feeding and Feline Obesity</h2>
            <p className="text-[#6B7269]">
              According to nationwide veterinary epidemiological surveys, over 59% of domestic cats and 55% of dogs in the United States are clinically overweight or obese. Free-feeding (leaving open dry food bowls 24/7) dysregulates leptin and ghrelin signaling in predatory carnivores, leading to hepatic lipidosis, insulin resistance (Type 2 Feline Diabetes), and severe osteoarthritis.
            </p>

            <h2 className="text-xl font-extrabold text-[#0F3D2E]">How Micro-Portioning Restores Natural Metabolic Rhythms</h2>
            <p className="text-[#6B7269]">
              Feline digestive physiology is anatomically optimized for 4 to 8 small, protein-rich meals spread over a 24-hour cycle. Automatic feeders equipped with gram-precise calibration (5g to 15g micro-dispensing) allow owners to mimic natural nocturnal hunting intervals. This completely eliminates early morning stomach bile regurgitation and prevents rapid insulin spikes.
            </p>

            {/* Embedded Clinical Product Recommendation Card */}
            <div className="p-6 rounded-2xl bg-[#E8F3EE] border border-emerald-300 flex flex-col sm:flex-row items-center gap-6 my-8">
              <img
                src={relatedProduct.image}
                alt={relatedProduct.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 object-contain bg-white rounded-xl p-2 border border-emerald-200"
              />
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-bold text-[#FF7A45] uppercase">Veterinary Tested Solution</span>
                <h4 className="text-sm font-extrabold text-[#0F3D2E]">{relatedProduct.name}</h4>
                <p className="text-xs text-[#6B7269]">{relatedProduct.subtitle}</p>
                <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <button
                    onClick={() => onViewProduct(relatedProduct.slug)}
                    className="px-4 py-1.5 bg-[#0F3D2E] text-white text-xs font-bold rounded-lg hover:bg-[#165641]"
                  >
                    View Specs & Pricing (${relatedProduct.price})
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-[#0F3D2E]">Scientific Peer-Reviewed References</h2>
            <ul className="space-y-1.5 text-xs text-[#6B7269] list-disc list-inside bg-[#FAF7F2] p-4 rounded-xl border border-[#E5E2DB]">
              <li>Lund, E. M., et al. (2024). "Prevalence and Risk Factors for Obesity in Adult Cats." <em>Journal of Feline Medicine & Surgery</em>.</li>
              <li>Sparkes, A. H., et al. (2025). "ISFM Consensus Guidelines on Feline Hydration and Feeding Frequency."</li>
              <li>Cornell Feline Health Center. "Feline Dental Health & Chin Acne Bacterial Colonization Protocols."</li>
            </ul>

          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E8F3EE] text-[#0F3D2E] border border-emerald-200">
            <BookOpen className="w-3.5 h-3.5 text-[#FF7A45]" /> Veterinary Science & Nutrition Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Evidence-Based Pet Health & Hardware Guides
          </h1>
          <p className="text-xs sm:text-sm text-[#6B7269]">
            Written and reviewed by board-certified veterinarians (DACVIM) and feline behavior consultants.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {['All', 'Nutrition', 'Hydration', 'Litter Health', 'Behavior'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0F3D2E] text-white shadow-xs'
                    : 'bg-white border border-[#E5E2DB] text-[#6B7269] hover:text-[#0F3D2E]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Pillar Article */}
        {filteredPosts[0] && (
          <div
            onClick={() => setSelectedSlug(filteredPosts[0].slug)}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E2DB] shadow-md hover:shadow-xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-video bg-[#FAF7F2]">
              <img
                src={filteredPosts[0].coverImage}
                alt={filteredPosts[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-extrabold text-[#FF7A45] uppercase tracking-wider">
                ★ Flagship Pillar Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F3D2E] hover:text-[#FF7A45] transition-colors leading-tight">
                {filteredPosts[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7269] line-clamp-3 leading-relaxed">
                {filteredPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#6B7269] pt-2 border-t border-[#E5E2DB]">
                <span className="font-semibold text-[#0F3D2E]">By {filteredPosts[0].author}</span>
                <span>· {filteredPosts[0].readTime}</span>
                <span className="text-[#FF7A45] font-bold flex items-center gap-1 ml-auto">
                  Read Full Clinical Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedSlug(post.slug)}
              className="bg-white rounded-2xl border border-[#E5E2DB] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="aspect-video bg-[#FAF7F2] overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A45]">
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold text-[#0F3D2E] hover:text-[#FF7A45] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#6B7269] line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#6B7269] border-t border-[#E5E2DB]/60">
                <span className="font-medium text-[#0F3D2E]">{post.author}</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
