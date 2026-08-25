import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Factory, Check, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, isB2b: boolean) => void;
  onViewProduct: (slug: string) => void;
  onOpenRFQ: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onViewProduct,
  onOpenRFQ,
}) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [isHovered, setIsHovered] = useState(false);

  const displayImage = isHovered && product.gallery[1] ? product.gallery[1] : product.image;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl border border-[#E5E2DB] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Image Stage */}
        <div 
          onClick={() => onViewProduct(product.slug)}
          className="relative aspect-square bg-[#FAF7F2] overflow-hidden p-6 cursor-pointer border-b border-[#E5E2DB]/60 flex items-center justify-center"
        >
          <img
            src={displayImage}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-4/5 h-4/5 object-contain group-hover:scale-108 transition-transform duration-500"
          />

          {/* Product Badge */}
          {product.tag && (
            <div className="absolute top-3 left-3">
              <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs ${
                product.tag === 'Bestseller' ? 'bg-[#FF7A45] text-white' :
                product.tag === 'Vet-Choice' ? 'bg-[#0F3D2E] text-white' :
                'bg-emerald-600 text-white'
              }`}>
                {product.tag}
              </span>
            </div>
          )}

          {/* Quick Hover Overlay */}
          <div className="absolute inset-0 bg-[#0F3D2E]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-white/95 text-[#0F3D2E] text-xs font-bold px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-[#FF7A45]" /> Quick View
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5 space-y-3">
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#6B7269] font-medium text-[11px] uppercase tracking-wider">
              {product.categoryName}
            </span>
            <div className="flex items-center gap-1 text-[#F5A623]">
              <Star className="w-3.5 h-3.5 fill-[#F5A623]" />
              <span className="font-bold text-[#1A1D1B] text-xs">{product.rating}</span>
              <span className="text-[#6B7269] text-[11px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onViewProduct(product.slug)}
            className="text-base font-bold text-[#0F3D2E] group-hover:text-[#FF7A45] transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#6B7269] line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Color Swatches */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-1">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(c.name);
                  }}
                  className={`w-4 h-4 rounded-full border transition-transform ${
                    selectedColor === c.name ? 'scale-125 ring-2 ring-[#0F3D2E]' : 'border-gray-300 hover:scale-110'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
              <span className="text-[10px] text-[#6B7269] ml-1.5">{selectedColor}</span>
            </div>
          )}

          {/* Pricing Row (DTC + B2B Wholesale Tier) */}
          <div className="pt-2 border-t border-[#E5E2DB]/80 flex items-baseline justify-between">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-extrabold text-[#0F3D2E]">${product.price}</span>
                {product.comparePrice && (
                  <span className="text-xs text-[#6B7269] line-through">${product.comparePrice}</span>
                )}
              </div>
              <span className="text-[10px] text-emerald-700 font-semibold block">In Stock · Fast Dispatch</span>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-[#6B7269] font-medium block">Wholesale from</span>
              <span className="text-xs font-bold text-[#FF7A45] block">
                ${product.b2bPriceTiers[product.b2bPriceTiers.length - 1]?.pricePerUnit || product.price * 0.4}/pc
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 pb-5 pt-1 grid grid-cols-2 gap-2">
        <button
          onClick={() => onAddToCart(product, 1, false)}
          className="bg-[#0F3D2E] hover:bg-[#165641] text-white py-2.5 px-2 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#FF7A45]" />
          <span>Add To Cart</span>
        </button>

        <button
          onClick={onOpenRFQ}
          className="bg-[#FAF7F2] hover:bg-[#E8F3EE] text-[#0F3D2E] border border-[#E5E2DB] py-2.5 px-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
        >
          <Factory className="w-3.5 h-3.5 text-[#FF7A45]" />
          <span>B2B RFQ</span>
        </button>
      </div>
    </div>
  );
};
