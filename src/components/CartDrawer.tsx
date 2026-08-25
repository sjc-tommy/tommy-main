import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOpenRFQ: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenRFQ
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const discountAmount = subtotal * (discountPercent / 100);
  const finalTotal = Math.max(0, subtotal - discountAmount);

  const freeShippingThreshold = 49;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'PETORA10') {
      setDiscountPercent(10);
      setCouponApplied(true);
    } else {
      alert('Invalid coupon. Try "PETORA10" for 10% off!');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#E5E2DB]">
          
          {/* Cart Header */}
          <div className="p-5 border-b border-[#E5E2DB] flex items-center justify-between bg-[#FAF7F2]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#0F3D2E]" />
              <h2 className="text-base font-extrabold text-[#0F3D2E]">
                Shopping Cart ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#E8F3EE] text-[#6B7269] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="p-4 bg-[#E8F3EE] border-b border-emerald-200 text-xs">
            <div className="flex items-center justify-between font-bold text-[#0F3D2E] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FF7A45]" />
                {amountToFreeShipping === 0
                  ? '🎉 You unlocked FREE U.S. & E.U. Shipping!'
                  : `Add $${amountToFreeShipping.toFixed(2)} more for FREE Shipping`}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-emerald-200">
              <div
                style={{ width: `${progressPercent}%` }}
                className="h-full bg-[#FF7A45] rounded-full transition-all duration-300"
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutComplete ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0F3D2E]">Order Placed Successfully!</h3>
                <p className="text-xs text-[#6B7269] max-w-xs mx-auto">
                  Thank you for ordering with Petora. A confirmation email with tracking numbers and setup guides has been sent.
                </p>
                <button
                  onClick={() => {
                    setCheckoutComplete(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#0F3D2E] text-white rounded-xl text-xs font-bold"
                >
                  Continue Shopping
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border flex items-center justify-center mx-auto text-[#6B7269]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-sm font-bold text-[#0F3D2E]">Your cart is currently empty</p>
                <p className="text-xs text-[#6B7269] max-w-xs mx-auto">
                  Explore our smart feeders, stainless fountains, and self-cleaning litter boxes.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#0F3D2E] text-white text-xs font-bold shadow hover:bg-[#165641]"
                >
                  Explore Best Sellers
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-xl border border-[#E5E2DB] bg-[#FAF7F2]/50 hover:bg-white transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-18 h-18 rounded-lg object-contain bg-white border border-[#E5E2DB] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-[#0F3D2E] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#6B7269] hover:text-red-600 transition-colors p-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-[#6B7269]">
                      Color: {item.selectedColor} {item.selectedCapacity ? `· ${item.selectedCapacity}` : ''}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#E5E2DB] rounded-lg bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs text-[#6B7269] hover:text-[#0F3D2E]"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-[#0F3D2E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs text-[#6B7269] hover:text-[#0F3D2E]"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#0F3D2E]">
                          ${(item.unitPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && !checkoutComplete && (
            <div className="p-5 border-t border-[#E5E2DB] bg-[#FAF7F2] space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (try 'PETORA10')"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-2 text-xs bg-white border border-[#E5E2DB] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0F3D2E]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-[#0F3D2E] text-white rounded-lg text-xs font-bold hover:bg-[#165641]"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Coupon PETORA10 Applied (10% Off)
                </div>
              )}

              {/* Totals Calculation */}
              <div className="space-y-1.5 text-xs text-[#6B7269]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-[#1A1D1B]">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount (10%):</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping:</span>
                  <span className="text-emerald-700 font-semibold">
                    {amountToFreeShipping === 0 ? 'FREE' : '$4.99'}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#0F3D2E] pt-2 border-t border-[#E5E2DB]">
                  <span>Total:</span>
                  <span>${finalTotal.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#FF7A45] hover:bg-[#e86935] text-white py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Processing Secure Checkout...</span>
                ) : (
                  <>
                    <span>Proceed to Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* B2B Wholesale Notice */}
              <div className="text-center pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenRFQ();
                  }}
                  className="text-[11px] font-semibold text-[#0F3D2E] hover:underline"
                >
                  Ordering for a Store or Clinic? Switch to Wholesale Tier RFQ →
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
