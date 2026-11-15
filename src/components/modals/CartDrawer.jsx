import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = subtotal > 500 || subtotal === 0 ? 0 : 49;
  const total = subtotal + delivery;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-[#141F16] border-l border-white/10 h-full flex flex-col shadow-2xl animate-slide-left">
        {/* Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#1F2D21] border border-white/10 flex items-center justify-center text-emerald-400">
              <ShoppingBag size={18} />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Botanical Cart</h3>
              <p className="text-xs text-white/50">{cartItems.length} species selected</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-6 py-3 bg-[#1B2A1E]/60 border-b border-white/5 text-xs text-emerald-300 flex items-center gap-2">
          <ShieldCheck size={14} className="shrink-0" />
          <span>
            {subtotal >= 500
              ? 'Complimentary climate-controlled nursery shipping applied!'
              : `Add Rs. ${500 - subtotal}/- more for free nursery shipping`}
          </span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <ShoppingBag size={28} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-serif font-semibold text-white">Your cart is empty</h4>
                <p className="text-xs text-white/50 max-w-xs">
                  Discover our curated air-purifying plants and bring restorative green life home.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Browse Plants
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-3.5 flex items-center gap-3.5 border border-white/10"
              >
                <div className="w-16 h-16 rounded-xl bg-[#182319] p-1.5 flex items-center justify-center shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
                  <p className="text-xs text-emerald-400 font-mono">
                    Rs. {item.price}/- <span className="text-white/40">each</span>
                  </p>

                  <div className="flex items-center gap-2.5 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-md glass-button flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-mono font-bold text-white w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-md glass-button flex items-center justify-center text-white/80 hover:text-white cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                <div className="text-right flex flex-col justify-between items-end h-16">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-white/40 hover:text-red-400 transition-colors p-1 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                  <span className="text-sm font-bold font-serif text-white">
                    Rs. {item.price * item.quantity}/-
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#0E160F] space-y-4">
            <div className="space-y-1.5 text-xs text-white/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-white font-semibold">Rs. {subtotal}/-</span>
              </div>
              <div className="flex justify-between">
                <span>Climate Insulated Delivery</span>
                <span className="font-mono text-white font-semibold">
                  {delivery === 0 ? 'FREE' : `Rs. ${delivery}/-`}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 text-base font-serif font-bold text-white">
                <span>Total Due</span>
                <span className="font-mono text-emerald-300">Rs. {total}/-</span>
              </div>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 rounded-full bg-white hover:bg-emerald-300 text-[#121B13] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-white/20"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
