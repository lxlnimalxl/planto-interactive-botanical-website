import React from 'react';
import Avatar1 from '../assets/avatar-1.png';
import Avatar2 from '../assets/avatar-2.png';
import Avatar3 from '../assets/avatar-3.png';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Maxine Powell',
      role: 'Interior Architect',
      avatar: Avatar1,
      rating: 5,
      content:
        'Planto exceeded all my expectations! The Calathea arrived vibrant, healthy, and packaged in fully recyclable insulated materials. Their team clearly loves plants.',
    },
    {
      id: 2,
      name: 'Lina Vance',
      role: 'Creative Director',
      avatar: Avatar2,
      rating: 5,
      content:
        'The air quality difference in our studio apartment was immediate. The minimalist glass pots and straightforward care routine turned my black thumb into a green one.',
    },
    {
      id: 3,
      name: 'Oliver King',
      role: 'Design Lead',
      avatar: Avatar3,
      rating: 5,
      content:
        'Ordering rare botanicals online used to worry me, but Planto’s vitality guarantee and white-glove shipping have made me a loyal botanical enthusiast.',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#141F16] relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#5E8356]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2A3B2C]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            <Sparkles size={14} />
            <span>Community Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Customer Review
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-light">
            Real feedback from botanical lovers, architects, and indoor sanctuary builders worldwide.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-[32px] p-8 relative flex flex-col justify-between group hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>
                  <Quote size={28} className="text-white/20 group-hover:text-emerald-400/40 transition-colors" />
                </div>

                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed italic mb-8">
                  "{rev.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-white/50">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
