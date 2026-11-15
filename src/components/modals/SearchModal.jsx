import React, { useState, useMemo } from 'react';
import { Search, X, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { ALL_PLANTS } from '../TopSelling';
import PlantTrendy1 from '../../assets/plant-trendy-1.png';
import PlantTrendy2 from '../../assets/plant-trendy-2.png';
import PlantO2 from '../../assets/plant-o2-large.png';
import PlantHero from '../../assets/plant-hero.png';

export default function SearchModal({ isOpen, onClose, onAddToCart, onBuyNow }) {
  const [searchTerm, setSearchTerm] = useState('');

  const fullPlantCatalog = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Calathea Signature Plant',
        category: 'Indoor',
        price: 359,
        formattedPrice: 'Rs. 359/-',
        image: PlantHero,
        description: 'Striking ornamental leaves that purifies indoor air and folds at night.',
      },
      {
        id: 101,
        name: 'Small Desk Botanical Plant',
        category: 'Trendy',
        price: 599,
        formattedPrice: 'Rs. 599/-',
        image: PlantTrendy1,
        description: 'Compact foliage ideal for office setups and cozy bookshelves.',
      },
      {
        id: 102,
        name: 'Interior Oxygen Plant',
        category: 'Trendy',
        price: 499,
        formattedPrice: 'Rs. 499/-',
        image: PlantTrendy2,
        description: 'High oxygen yield with broad leaves that actively cleans household air.',
      },
      {
        id: 201,
        name: 'Architectural O2 Monstera',
        category: 'O2 Collection',
        price: 689,
        formattedPrice: 'Rs. 689/-',
        image: PlantO2,
        description: 'Continuous oxygen release with dramatic split leaves.',
      },
      ...ALL_PLANTS,
    ];
  }, []);

  const results = useMemo(() => {
    if (!searchTerm.trim()) return fullPlantCatalog.slice(0, 4);
    const q = searchTerm.toLowerCase();
    return fullPlantCatalog.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchTerm, fullPlantCatalog]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#141F16] border border-white/15 rounded-[32px] shadow-2xl overflow-hidden animate-scale-in">
        {/* Search Header Bar */}
        <div className="p-5 border-b border-white/10 flex items-center gap-3">
          <Search size={20} className="text-emerald-400 shrink-0 ml-1" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search indoor plants, oxygen species, categories..."
            className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none font-light"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-white/40 hover:text-white p-1 text-xs cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white cursor-pointer ml-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Filter Suggestion Pills */}
        <div className="px-5 py-3 bg-[#182319]/80 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs text-white/70">
          <span className="text-[11px] text-white/40 font-mono">Popular:</span>
          {['Calathea', 'Monstera', 'Indoor', 'Oxygen', 'Office'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-[11px] border border-white/10 transition-colors shrink-0 cursor-pointer"
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-white/50 px-1 mb-2">
            <span>{searchTerm ? `Results for "${searchTerm}"` : 'Recommended Species'}</span>
            <span className="font-mono">{results.length} found</span>
          </div>

          {results.length === 0 ? (
            <div className="py-12 text-center text-white/50 text-sm">
              No plants matching "{searchTerm}". Try "Monstera" or "Calathea".
            </div>
          ) : (
            results.map((plant) => (
              <div
                key={plant.id + '-' + plant.name}
                className="glass-card rounded-2xl p-3.5 flex items-center justify-between gap-4 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-14 h-14 rounded-xl bg-[#1B2A1E] p-1 flex items-center justify-center shrink-0">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-white truncate">{plant.name}</h4>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">
                        {plant.category}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 truncate max-w-sm font-light mt-0.5">
                      {plant.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-bold font-serif text-white">
                    {plant.formattedPrice}
                  </span>

                  <button
                    onClick={() => {
                      onAddToCart(plant);
                    }}
                    className="w-9 h-9 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingBag size={15} />
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onBuyNow(plant);
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
