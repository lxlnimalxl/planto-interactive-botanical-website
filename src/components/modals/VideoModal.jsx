import React from 'react';
import { X, Play, Volume2, ShieldCheck, Sparkles } from 'lucide-react';
import BgHero from '../../assets/bg-hero.jpg';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Video Container Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#121B13] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl animate-scale-in">
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-[#182319]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Planto Botanical Nursery Film Tour
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full glass-button flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={BgHero}
            alt="Botanical Nursery Video Thumbnail"
            className="w-full h-full object-cover opacity-60 scale-105 group-hover:scale-100 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#121B13] via-transparent to-black/30" />

          {/* Center Play Button Graphic */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-emerald-500/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-emerald-400 transition-all cursor-pointer ring-8 ring-emerald-500/20">
              <Play size={32} className="fill-current ml-1" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Inside the Planto Sanctuary
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-md font-light">
                Discover how our botanists nurture rare tropical specimens in organic peat-free ecosystems.
              </p>
            </div>
          </div>

          {/* Video Controls Fake Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/80 font-mono bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10">
            <div className="flex items-center gap-3">
              <Play size={14} className="fill-current cursor-pointer text-emerald-400" />
              <span>01:24 / 04:30</span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 size={16} className="cursor-pointer" />
              <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 font-sans">1080p HD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
