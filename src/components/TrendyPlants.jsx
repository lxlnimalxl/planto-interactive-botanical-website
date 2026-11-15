import React from 'react';
import PlantTrendy1 from '../assets/plant-trendy-1.png';
import PlantTrendy2 from '../assets/plant-trendy-2.png';
import { ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function TrendyPlants({ onAddToCart, onBuyNow }) {
  const trendyItems = [
    {
      id: 101,
      name: 'Small Desk Botanical Plant',
      tagline: 'Compact & Air Purifying',
      price: 599,
      formattedPrice: 'Rs. 599/-',
      description:
        'Lush green foliage compact enough for work desks and shelves. Thrives in low-to-medium indirect light with minimal watering needs.',
      image: PlantTrendy1,
      features: ['Low Light Tolerant', 'Slow Growth', 'Easy Maintenance'],
    },
    {
      id: 102,
      name: 'Interior Oxygen Plant',
      tagline: 'High Oxygen Yield',
      price: 499,
      formattedPrice: 'Rs. 499/-',
      description:
        'Broad architectural foliage that continually releases clean oxygen into your bedroom or living space, filtering airborne toxins.',
      image: PlantTrendy2,
      features: ['Air Purifying', 'Pet Friendly', 'Humidifying'],
    },
  ];

  return (
    <section id="trendy-plants" className="py-24 bg-[#141F16] relative overflow-hidden">
      {/* Background Subtle Ambient Circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#5E8356]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#2A3B2C]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Sparkles size={14} />
            <span>Curated Selection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Our Trendy Plants
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Selected by our master botanists for their resilience, architectural elegance, and superior indoor air quality benefits.
          </p>
        </div>

        {/* 2 Featured Trendy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          {trendyItems.map((item, idx) => (
            <div
              key={item.id}
              className="glass-card rounded-[36px] p-8 sm:p-10 relative flex flex-col justify-between group hover:border-white/30 transition-all duration-500 overflow-visible"
            >
              {/* Plant Image floating outside/top */}
              <div className="relative -mt-24 mb-6 flex justify-center drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-64 sm:w-72 h-72 sm:h-80 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant Details */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {item.name}
                  </h3>
                </div>

                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-300 bg-[#1B2A1E]/80 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      <Check size={12} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Actions Bottom Bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-white/50 block font-mono">Retail Price</span>
                  <span className="text-2xl font-serif font-bold text-white">
                    {item.formattedPrice}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-11 h-11 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingBag size={18} />
                  </button>

                  <button
                    onClick={() => onBuyNow(item)}
                    className="px-6 py-3 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-white/20"
                  >
                    <span>Explore More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
