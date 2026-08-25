import React, { useState } from 'react';
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const review = REVIEWS[currentIndex];

  return (
    <section className="py-20 bg-white border-b border-[#E5E2DB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#0F3D2E] uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-[#FF7A45] fill-[#FF7A45]" />
            <span>Real Pet Parents & B2B Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E] tracking-tight">
            Loved by 100,000+ Pets & Global Retailers
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-[#F5A623]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5A623]" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#1A1D1B]">4.9 out of 5 Stars</span>
            <span className="text-xs text-[#6B7269]">· Verified Independent Customer Reviews</span>
          </div>
        </div>

        {/* Carousel Box */}
        <div className="max-w-4xl mx-auto bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#E5E2DB] shadow-lg relative">
          <Quote className="w-12 h-12 text-[#FF7A45]/20 absolute top-6 right-8 pointer-events-none" />

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            {/* Customer Photo */}
            <img
              src={review.avatar}
              alt={review.author}
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-[#0F3D2E] shadow-md flex-shrink-0"
            />

            {/* Author Info */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-base font-extrabold text-[#0F3D2E]">{review.author}</h4>
                {review.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3 text-emerald-700" /> Verified Buyer
                  </span>
                )}
              </div>
              <p className="text-xs text-[#FF7A45] font-semibold">Pet: {review.petName} ({review.petType})</p>
              <p className="text-[11px] text-[#6B7269]">{review.productName} · {review.date}</p>
            </div>
          </div>

          {/* Review Content */}
          <div className="mt-6 space-y-2">
            <div className="flex text-[#F5A623]">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F5A623]" />
              ))}
            </div>
            <h3 className="text-lg font-bold text-[#0F3D2E]">{review.title}</h3>
            <p className="text-sm text-[#1A1D1B] leading-relaxed italic">
              "{review.content}"
            </p>
          </div>

          {/* Controls & Pagination Dots */}
          <div className="mt-8 pt-6 border-t border-[#E5E2DB] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-6 bg-[#0F3D2E]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white border border-[#E5E2DB] hover:bg-[#E8F3EE] flex items-center justify-center text-[#0F3D2E] shadow-xs transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-[#0F3D2E] hover:bg-[#165641] flex items-center justify-center text-white shadow-xs transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
