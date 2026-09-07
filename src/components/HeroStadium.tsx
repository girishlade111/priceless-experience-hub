import React, { useState } from 'react';
import { Play, Pause, ArrowRight, ShieldCheck, Globe2, Sparkles } from 'lucide-react';

interface HeroStadiumProps {
  onExploreClick: () => void;
  onOpenPlayground: () => void;
}

export const HeroStadium: React.FC<HeroStadiumProps> = ({
  onExploreClick,
  onOpenPlayground
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      eyebrow: '• GLOBAL FINANCIAL NETWORK',
      title: 'Connecting people to priceless possibilities.',
      subtitle: 'Engineered on warm editorial principles, cutting-edge AI security, and borderless payment connectivity across 210 countries.',
      tag: 'Next-Gen Commerce',
      bgGradient: 'from-[#141413]/90 via-[#141413]/70 to-[#141413]/95'
    },
    {
      eyebrow: '• CYBER & INTELLIGENCE',
      title: 'Protecting 143 billion transactions every year.',
      subtitle: 'Predictive neural networks detect fraudulent vectors in under 42 milliseconds with continuous device biometrics.',
      tag: 'Autonomous AI Security',
      bgGradient: 'from-[#141413]/90 via-[#9A3A0A]/40 to-[#141413]/95'
    },
    {
      eyebrow: '• SUSTAINABLE HORIZONS',
      title: 'Building a sustainable digital economy for all.',
      subtitle: 'Priceless Planet Coalition unites global banks and cardholders to restore 100 million trees across critical ecosystems.',
      tag: 'Net Zero Action',
      bgGradient: 'from-[#141413]/90 via-[#262627]/80 to-[#141413]/95'
    }
  ];

  const current = heroSlides[activeSlide];

  return (
    <section id="hero" className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Stadium Frame */}
      <div className="relative rounded-[40px] overflow-hidden min-h-[520px] md:min-h-[600px] flex flex-col justify-between p-8 sm:p-12 md:p-16 text-white shadow-mc-card border border-black/10">
        
        {/* Background Artwork & Motion Layers */}
        <div className="absolute inset-0 z-0 bg-[#141413]">
          {/* High resolution background image */}
          <img
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80"
            alt="Mastercard Global Financial Network"
            className={`w-full h-full object-cover opacity-40 transition-all duration-1000 transform ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          
          {/* Dynamic Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${current.bgGradient}`} />

          {/* Decorative Orbital Arc in Light Signal Orange */}
          <svg className="absolute -right-20 top-1/4 w-96 h-96 opacity-30 pointer-events-none animate-orbital" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#F37338" strokeWidth="2" strokeDasharray="6 8" />
          </svg>
        </div>

        {/* Top Eyebrow & Pill Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold uppercase tracking-eyebrow text-[#F79E1B]">
            <span className="w-2 h-2 rounded-full bg-[#F37338] animate-ping" />
            {current.eyebrow}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[#D1CDC7] hidden sm:inline-block">
              {current.tag}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
          </div>
        </div>

        {/* Center Content Area */}
        <div className="relative z-10 max-w-3xl my-auto py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight-mc leading-[1.05] text-[#FCFBFA] mb-6">
            {current.title}
          </h1>
          
          <p className="text-lg sm:text-xl font-mc-body text-[#D1CDC7] leading-relaxed mb-8 max-w-2xl">
            {current.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2.5 bg-[#FCFBFA] hover:bg-white text-[#141413] rounded-[20px] px-7 py-3.5 font-medium text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#CF4500]" />
            </button>

            <button
              onClick={onOpenPlayground}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-[#FCFBFA] border border-white/30 rounded-[20px] px-6 py-3.5 font-medium text-base backdrop-blur-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#F79E1B]" />
              <span>Interactive Simulator</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Slide Switchers & Key Metrics */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all rounded-full ${
                  activeSlide === idx
                    ? 'w-8 h-2.5 bg-[#F37338]'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Key Metric Chips */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#D1CDC7]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F79E1B]" />
              <span>Zero Liability Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#F37338]" />
              <span>210+ Countries & Territories</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
