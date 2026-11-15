import React, { useState } from 'react';
import Plant1 from '../assets/plant-1.png';
import Plant2 from '../assets/plant-2.png';
import Plant3 from '../assets/plant-3.png';
import Plant4 from '../assets/plant-4.png';
import Plant5 from '../assets/plant-5.png';
import Plant6 from '../assets/plant-6.png';
import { ShoppingBag, Star, ArrowRight, Sparkles } from 'lucide-react';

export const ALL_PLANTS = [
  {
    id: 1,
    name: 'Calathea Roseopicta',
    category: 'Indoor',
    price: 359,
    formattedPrice: 'Rs. 359/-',
    rating: 4.9,
    reviewsCount: 142,
    image: Plant1,
    description: 'Vibrant decorative foliage with medallion patterning and air-purification.',
  },
  {
    id: 2,
    name: 'Fiddle Leaf Fig',
    category: 'Office',
    price: 549,
    formattedPrice: 'Rs. 549/-',
    rating: 4.8,
    reviewsCount: 98,
    image: Plant2,
    description: 'Statuesque violin-shaped leaves making a bold statement in living rooms.',
  },
  {
    id: 3,
    name: 'Sansevieria Trifasciata',
    category: 'Indoor',
    price: 289,
    formattedPrice: 'Rs. 289/-',
    rating: 5.0,
    reviewsCount: 215,
    image: Plant3,
    description: 'Hardy sword-like leaves that produce nighttime oxygen, perfect for bedrooms.',
  },
  {
    id: 4,
    name: 'Monstera Deliciosa',
    category: 'Outdoor',
    price: 429,
    formattedPrice: 'Rs. 429/-',
    rating: 4.9,
    reviewsCount: 176,
    image: Plant4,
    description: 'Iconic Swiss cheese perforated leaves adding a lush tropical jungle vibe.',
  },
  {
    id: 5,
    name: 'ZZ Zamioculcas',
    category: 'Office',
    price: 389,
    formattedPrice: 'Rs. 389/-',
    rating: 4.7,
    reviewsCount: 84,
    image: Plant5,
    description: 'Glossy dark green leaves virtually indestructible in low light spaces.',
  },
  {
    id: 6,
    name: 'Peace Lily Botanical',
    category: 'Indoor',
    price: 499,
    formattedPrice: 'Rs. 499/-',
    rating: 4.9,
    reviewsCount: 129,
    image: Plant6,
    description: 'Deep green foliage with elegant white spathes that signal when thirsty.',
  },
];

export default function TopSelling({ onAddToCart, onBuyNow }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Indoor', 'Outdoor', 'Office'];

  const filteredPlants =
    activeTab === 'All'
      ? ALL_PLANTS
      : ALL_PLANTS.filter((plant) => plant.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section id="top-selling" className="py-24 bg-[#121B13] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#5E8356]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Sparkles size={14} />
            <span>Best Sellers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Our Top Selling
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Loved by thousands of plant enthusiasts. Hand-selected, potted with organic nutrient soil, and delivered with care.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-white text-[#121B13] shadow-lg shadow-white/20'
                  : 'glass-button text-white/80 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
          {filteredPlants.map((plant) => (
            <div
              key={plant.id}
              className="glass-card rounded-[32px] p-6 pt-0 relative flex flex-col justify-between group hover:border-white/30 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Plant Image Pop-out */}
              <div className="relative -mt-16 mb-4 flex justify-center h-52 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="h-full w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant Details */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold uppercase tracking-wider">
                    {plant.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={12} className="fill-current" />
                    <span className="text-white/80 font-bold">{plant.rating}</span>
                    <span className="text-white/40">({plant.reviewsCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {plant.name}
                </h3>

                <p className="text-xs text-white/60 line-clamp-2 leading-relaxed font-light">
                  {plant.description}
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/50 block font-mono">Price</span>
                  <span className="text-xl font-serif font-bold text-white">
                    {plant.formattedPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onAddToCart(plant)}
                    className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>

                  <button
                    onClick={() => onBuyNow(plant)}
                    className="px-4 py-2 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-[11px] tracking-wider uppercase transition-all duration-300 flex items-center gap-1 cursor-pointer shadow-md"
                  >
                    <span>Buy</span>
                    <ArrowRight size={12} />
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
