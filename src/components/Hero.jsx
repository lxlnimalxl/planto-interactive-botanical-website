import React, { useState } from 'react';
import BgHero from '../assets/bg-hero.jpg';
import PlantHero from '../assets/plant-hero.png';
import Avatar1 from '../assets/avatar-1.png';
import { Play, ArrowRight, ArrowLeft, ShoppingBag, Star, Sparkles } from 'lucide-react';

export default function Hero({ onOpenVideo, onAddToCart, onBuyNow }) {
  const [slide, setSlide] = useState(1);

  const heroSlides = [
    {
      id: 1,
      badge: 'Trendy House Plant',
      name: 'Calathea plant',
      price: 'Rs. 359/-',
      desc: 'Air-purifying foliage with striking ornamental patterns.',
      image: PlantHero,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[920px] pt-32 pb-20 flex items-center overflow-hidden bg-[#121B13]"
    >
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={BgHero}
          alt="Dark Forest Plants Background"
          className="w-full h-full object-cover object-center opacity-35"
        />
        {/* Gradients to blend seamlessly into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121B13] via-[#121B13]/70 to-[#121B13]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121B13] via-transparent to-[#121B13]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines & Actions */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Sparkles size={14} />
            <span>Premium Natural Botanical Living</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white leading-[1.08]">
            Breath <span className="italic font-normal text-[#9DBF94]">Natural</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-xl font-light leading-relaxed">
            Elevate your living space with our handcrafted collection of indoor plants, designed to purify your atmosphere and restore nature’s calm.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a
              href="#trendy-plants"
              className="px-8 py-3.5 rounded-full border border-white/50 bg-white/10 hover:bg-white hover:text-[#121B13] text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-white/20 cursor-pointer"
            >
              Explore Plants
            </a>

            <button
              onClick={onOpenVideo}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#5E8356] transition-all">
                <Play size={18} className="fill-current ml-0.5" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Watch Video Tour
              </span>
            </button>
          </div>

          {/* Mini Review Card on Left (Figma Node 22:47) */}
          <div className="pt-8 border-t border-white/10 max-w-md">
            <div className="flex items-center gap-3.5">
              <img
                src={Avatar1}
                alt="Alena Patel"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/30"
              />
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </div>
                <h4 className="text-sm font-bold text-white">Alena Patel</h4>
                <p className="text-xs text-white/60">
                  "Received a stunning Calathea plant in perfect packaging!"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Floating Glass Card (Figma Node 17:167 / 22:105) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[420px]">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-[#5E8356]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Plant Cutout Overflowing outside card */}
            <div className="relative z-20 flex justify-center -mb-28 pointer-events-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]">
              <img
                src={PlantHero}
                alt="Calathea Plant"
                className="w-[340px] sm:w-[380px] h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Frosted Glass Base Card */}
            <div className="glass-card rounded-[36px] pt-32 pb-7 px-7 relative z-10">
              <div className="space-y-1.5 mb-4">
                <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Trendy House Plant
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">Calathea plant</h3>
                <p className="text-xs text-white/60 leading-relaxed">
                  Ornamental foliage with signature purple undersides and air-purifying qualities.
                </p>
              </div>

              {/* Price & Buy Now CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-[11px] text-white/50 block">Special Offer</span>
                  <span className="text-xl font-bold text-white font-serif">Rs. 359/-</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: 1,
                        name: 'Calathea plant',
                        price: 359,
                        image: PlantHero,
                      })
                    }
                    className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingBag size={16} />
                  </button>

                  <button
                    onClick={() =>
                      onBuyNow({
                        id: 1,
                        name: 'Calathea plant',
                        price: 359,
                        image: PlantHero,
                      })
                    }
                    className="px-5 py-2.5 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Buy Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10 text-xs text-white/50 font-mono">
                <span>01 / 03</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
