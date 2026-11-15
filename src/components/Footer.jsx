import React, { useState } from 'react';
import LeafIcon from '../assets/leaf.png';
import { Mail, ArrowRight, CheckCircle2, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer id="footer" className="bg-[#0D140E] border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#5E8356]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Bio */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <img
                src={LeafIcon}
                alt="Planto Leaf"
                className="w-8 h-8 object-contain transition-transform group-hover:rotate-12 duration-300"
              />
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Planto<span className="text-[#5E8356]">.</span>
              </span>
            </a>

            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
              We curate resilient, air-purifying indoor plants nurtured in organic biological compost. Bringing restorative greenery and calm balance to urban sanctuaries.
            </p>

            <div className="pt-2 text-xs text-emerald-400/90 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Certified Sustainable Nursery Network</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/60 font-light">
              <li>
                <a href="#home" className="hover:text-emerald-300 transition-colors">
                  Home Sanctuary
                </a>
              </li>
              <li>
                <a href="#trendy-plants" className="hover:text-emerald-300 transition-colors">
                  Trendy Botanical Types
                </a>
              </li>
              <li>
                <a href="#top-selling" className="hover:text-emerald-300 transition-colors">
                  Top Selling Favorites
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-emerald-300 transition-colors">
                  O2 Oxygen Series
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-300 transition-colors">
                  Customer Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Botanical Gazette
            </h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Subscribe to receive weekly seasonal care schedules, humidity tips, and exclusive access to rare releases.
            </p>

            <form onSubmit={handleSubscribe} className="relative mt-2">
              <div className="flex items-center glass-card rounded-full overflow-hidden border border-white/20 p-1.5 focus-within:border-emerald-400 transition-colors">
                <div className="pl-3 text-white/40">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-white text-[#121B13] hover:bg-emerald-300 font-bold text-xs tracking-wider uppercase transition-all duration-300 shrink-0 cursor-pointer"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <div className="absolute -bottom-8 left-2 flex items-center gap-1.5 text-xs text-emerald-300 animate-fade-in">
                  <CheckCircle2 size={14} />
                  <span>Thank you! 15% discount code sent.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 Planto Inc. All rights reserved. Crafted with care for plant lovers.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Care</span>
            <span className="hover:text-white cursor-pointer transition-colors">Shipping Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
