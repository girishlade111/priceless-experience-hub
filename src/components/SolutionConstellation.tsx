import React from 'react';
import { SolutionItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface SolutionConstellationProps {
  solutions: SolutionItem[];
  onSelectSolution: (solution: SolutionItem) => void;
}

export const SolutionConstellation: React.FC<SolutionConstellationProps> = ({
  solutions,
  onSelectSolution
}) => {
  return (
    <section id="for-business" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-[#141413] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CF4500]" />
            <span>GLOBAL FINANCIAL SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight-mc text-[#141413]">
            Shaping the constellation of modern commerce.
          </h2>
        </div>
        
        <p className="text-base font-mc-body text-[#696969] max-w-md">
          Explore our interconnected ecosystem of payment rails, autonomous cybersecurity models, and sustainable technology solutions.
        </p>
      </div>

      {/* Orbital Decorative Arcs Background (Light Signal Orange) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden z-0">
        <svg className="w-full h-full opacity-40 animate-orbital" viewBox="0 0 1200 800" fill="none">
          {/* Orbital Arc 1 */}
          <path
            d="M 150 250 Q 500 100 850 350"
            stroke="#F37338"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Orbital Arc 2 */}
          <path
            d="M 300 600 Q 750 700 1050 450"
            stroke="#F37338"
            strokeWidth="1.5"
          />
          <circle cx="850" cy="350" r="4" fill="#F37338" />
          <circle cx="300" cy="600" r="4" fill="#F37338" />
        </svg>
      </div>

      {/* Asymmetric Portrait Constellation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        {solutions.map((item, index) => {
          // Asymmetric vertical stagger offsets for editorial layout
          const staggerClass = index % 2 === 1 ? 'lg:translate-y-12' : 'lg:translate-y-0';

          return (
            <div
              key={item.id}
              className={`flex flex-col items-center md:items-start group cursor-pointer transition-all duration-300 ${staggerClass}`}
              onClick={() => onSelectSolution(item)}
            >
              {/* Ghost Watermark Text behind Portrait */}
              <div className="relative w-full flex flex-col items-center md:items-start mb-6">
                <span className="absolute -top-10 -left-4 text-6xl xl:text-7xl font-bold tracking-tight-mc text-[#141413]/[0.06] select-none pointer-events-none uppercase z-0">
                  {item.ghostWatermark}
                </span>

                {/* Circular Portrait Frame */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-mc-card border-4 border-white z-10 transition-transform duration-500 group-hover:scale-[1.03]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle inner cream gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Attached White Satellite Circular Micro-CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectSolution(item);
                  }}
                  className="absolute bottom-2 right-4 md:-right-2 w-14 h-14 rounded-full bg-white text-[#141413] shadow-lg flex items-center justify-center border border-[#141413]/10 z-20 transition-all duration-300 group-hover:bg-[#141413] group-hover:text-white group-hover:scale-110"
                  aria-label={`View details for ${item.title}`}
                >
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

              {/* Eyebrow Label with Accent Dot */}
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-eyebrow text-[#CF4500] mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F37338]" />
                <span>{item.eyebrow}</span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight-mc text-[#141413] text-center md:text-left mb-2 group-hover:text-[#CF4500] transition-colors">
                {item.title}
              </h3>

              {/* Tagline */}
              <p className="text-sm font-mc-body text-[#696969] text-center md:text-left line-clamp-2 max-w-xs">
                {item.tagline}
              </p>

              {/* Micro Metric Pill */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#141413]/10 text-xs font-medium text-[#141413]">
                <span className="text-[#9A3A0A] font-bold">{item.stats[0].value}</span>
                <span className="text-[#696969]">{item.stats[0].label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
