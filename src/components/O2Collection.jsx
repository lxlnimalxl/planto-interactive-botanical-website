import React, { useState } from 'react';
import PlantO2 from '../assets/plant-o2-large.png';
import { ArrowRight, ShoppingBag, ShieldCheck, Wind, Droplets, SunMedium, Sparkles } from 'lucide-react';

export default function O2Collection({ onAddToCart, onBuyNow }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const featuredO2 = {
    id: 201,
    name: 'Architectural O2 Monstera',
    scientificName: 'Monstera Deliciosa O2+',
    price: 689,
    formattedPrice: 'Rs. 689/-',
    image: PlantO2,
    benefits: [
      {
        icon: <Wind size={18} className="text-emerald-400" />,
        title: 'Continuous Oxygen Release',
        desc: 'Releases pure oxygen continuously, optimizing your restorative sleep cycles.',
      },
      {
        icon: <Droplets size={18} className="text-emerald-400" />,
        title: 'Natural Ambient Humidifier',
        desc: 'Evaporates micro-moisture through broad leaves, balancing dry conditioned indoor air.',
      },
      {
        icon: <ShieldCheck size={18} className="text-emerald-400" />,
        title: 'VOC & Toxin Absorption',
        desc: 'Actively absorbs benzene and formaldehyde commonly emitted by modern furniture.',
      },
      {
        icon: <SunMedium size={18} className="text-emerald-400" />,
        title: 'Adaptive Light Tolerant',
        desc: 'Flourishes under artificial office lighting as easily as indirect window sunshine.',
      },
    ],
  };

  return (
    <section id="collection" className="py-24 bg-[#121B13] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#5E8356]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Showcase Glass Banner */}
        <div className="glass-card rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Showcase Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider text-emerald-300 uppercase">
                <Sparkles size={14} />
                <span>Signature Biosphere</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight leading-[1.1]">
                Our Best <span className="italic font-normal text-emerald-300">O2</span> Living Collection
              </h2>

              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Botanically calibrated to maximize oxygen volume per square meter. Ideal for master bedrooms, executive studios, and creative sanctuaries.
              </p>

              {/* Benefit Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                {featuredO2.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-3.5">
                    <div className="p-2 rounded-xl bg-[#1B2A1E] border border-white/10 shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">{b.title}</h4>
                      <p className="text-[11px] text-white/60 leading-tight font-light">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA & Stepper */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-white/50 block font-mono">Curated Price</span>
                  <span className="text-2xl font-serif font-bold text-white">
                    {featuredO2.formattedPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onAddToCart(featuredO2)}
                    className="w-11 h-11 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingBag size={18} />
                  </button>

                  <button
                    onClick={() => onBuyNow(featuredO2)}
                    className="px-6 py-3 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Adopt Plant</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Showcase Image */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[460px] flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute w-[380px] h-[380px] rounded-full border border-white/10 animate-pulse pointer-events-none" />
                <div className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-white/5 pointer-events-none" />

                <img
                  src={featuredO2.image}
                  alt={featuredO2.name}
                  className="w-full max-h-[460px] object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)] transform hover:scale-105 transition-transform duration-500 relative z-10"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-4 glass-card rounded-2xl px-4 py-3 border border-white/20 flex items-center gap-3 shadow-xl z-20">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-white tracking-wider">
                    99.4% O2 Purity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
