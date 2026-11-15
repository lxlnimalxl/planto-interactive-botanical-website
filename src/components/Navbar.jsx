import React, { useState } from 'react';
import LeafIcon from '../assets/leaf.png';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenCart, onOpenSearch, cartCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Plants Type', href: '#trendy-plants' },
    { label: 'Top Selling', href: '#top-selling' },
    { label: 'O2 Collection', href: '#collection' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#footer' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121B13]/70 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
          <img
            src={LeafIcon}
            alt="Planto Leaf"
            className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300"
          />
          <span className="font-serif text-2xl font-bold tracking-tight text-white">
            Planto<span className="text-[#5E8356]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors tracking-wide hover:underline decoration-[#5E8356] underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white cursor-pointer"
            title="Search plants"
          >
            <Search size={18} strokeWidth={2.2} />
          </button>

          {/* Cart Bag Button */}
          <button
            onClick={onOpenCart}
            className="relative w-10 h-10 rounded-full glass-button flex items-center justify-center text-white/90 hover:text-white cursor-pointer"
            title="Shopping cart"
          >
            <ShoppingBag size={18} strokeWidth={2.2} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#5E8356] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-[#121B13] animate-scale-in">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full glass-button flex items-center justify-center text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#182319]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-white/90 hover:text-white py-1.5 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
