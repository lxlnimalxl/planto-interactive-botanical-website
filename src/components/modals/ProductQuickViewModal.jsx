import React, { useState } from 'react';
import { X, Check, ShieldCheck, Truck, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';

export default function ProductQuickViewModal({ plant, isOpen, onClose, onAddToCart }) {
  const [selectedPot, setSelectedPot] = useState('Nordic Matte Charcoal');
  const [qty, setQty] = useState(1);
  const [purchased, setPurchased] = useState(false);

  if (!isOpen || !plant) return null;

  const potColors = ['Nordic Matte Charcoal', 'Frosted Sage Green', 'Raw Sandstone Ceramic'];

  const handleCompleteOrder = () => {
    setPurchased(true);
    setTimeout(() => {
      setPurchased(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-[#141F16] border border-white/20 rounded-[36px] overflow-hidden shadow-2xl animate-scale-in">
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
        >
          <X size={18} />
        </button>

        {purchased ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Order Confirmed!</h3>
            <p className="text-sm text-white/70 max-w-sm mx-auto font-light">
              Your {plant.name} will be carefully packaged with moisture-retaining moss and dispatched within 24 hours.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
            {/* Left Image View */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#182319] rounded-3xl p-6 relative">
              <div className="w-48 h-56 flex items-center justify-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform"
                />
              </div>
              <span className="mt-4 text-[11px] font-mono uppercase text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                100% Live Arrival Guarantee
              </span>
            </div>

            {/* Right Form Details */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Botanical Quick Adoption
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">{plant.name}</h3>
                <div className="text-2xl font-serif font-bold text-white mt-2">
                  Rs. {plant.price * qty}/-
                </div>
              </div>

              {/* Pot Color Option */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-white/60 tracking-wider">
                  Select Artisan Planter Pot
                </label>
                <div className="flex flex-wrap gap-2">
                  {potColors.map((pot) => (
                    <button
                      key={pot}
                      onClick={() => setSelectedPot(pot)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                        selectedPot === pot
                          ? 'bg-emerald-500 text-white font-semibold'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {pot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Value Props */}
              <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <Truck size={14} className="text-emerald-400" />
                  <span>Climate insulated delivery across all regions</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  <span>Includes organic potting soil and 30-day fertilizer</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onAddToCart({ ...plant, quantity: qty });
                    onClose();
                  }}
                  className="px-4 py-3 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
                  title="Add to cart"
                >
                  <ShoppingBag size={18} />
                </button>

                <button
                  onClick={handleCompleteOrder}
                  className="flex-1 py-3.5 rounded-full bg-white hover:bg-emerald-300 text-[#121B13] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/20"
                >
                  <span>Instant Checkout</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
