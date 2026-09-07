import React, { useState } from 'react';
import { STORIES_DATA } from '../data/content';
import { CarouselStory } from '../types';
import { ChevronLeft, ChevronRight, Clock, ArrowUpRight } from 'lucide-react';

interface PillCarouselProps {
  onSelectStory: (story: CarouselStory) => void;
}

export const PillCarousel: React.FC<PillCarouselProps> = ({ onSelectStory }) => {
  const [selectedAudience, setSelectedAudience] = useState<'All' | 'Consumer' | 'Enterprise' | 'Fintech'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredStories = STORIES_DATA.filter(story => 
    selectedAudience === 'All' ? true : story.audience === selectedAudience
  );

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  return (
    <section id="news-trends" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-[#141413] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F37338]" />
            <span>NEWS & TRENDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight-mc text-[#141413]">
            Stories from the forefront of global payments.
          </h2>
        </div>

        {/* Audience Filter Pills & Carousel Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex p-1 bg-white rounded-full border border-[#141413]/10">
            {(['All', 'Consumer', 'Enterprise', 'Fintech'] as const).map((audience) => (
              <button
                key={audience}
                onClick={() => {
                  setSelectedAudience(audience);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedAudience === audience
                    ? 'bg-[#141413] text-white'
                    : 'text-[#141413]/70 hover:text-[#141413]'
                }`}
              >
                {audience}
              </button>
            ))}
          </div>

          {/* Carousel Controls (Icon-Only 40px Circle Buttons) */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#141413] flex items-center justify-center text-[#141413] hover:bg-[#141413] hover:text-white transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#141413] flex items-center justify-center text-[#141413] hover:bg-[#141413] hover:text-white transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Pill Cards Grid / Carousel View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredStories.slice(currentIndex, currentIndex + 3).concat(
          filteredStories.slice(0, Math.max(0, (currentIndex + 3) - filteredStories.length))
        ).map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectStory(story)}
            className="group cursor-pointer rounded-[40px] overflow-hidden bg-white shadow-mc-card border border-[#141413]/10 flex flex-col justify-between h-[420px] relative transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/60 to-transparent" />
            </div>

            {/* Top Pill Chip Tag */}
            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="bg-white/90 backdrop-blur-md text-[#141413] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                {story.tag}
              </span>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#141413] transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="relative z-10 p-8 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#D1CDC7]">
                <Clock className="w-3.5 h-3.5 text-[#F79E1B]" />
                <span>{story.readTime}</span>
                <span>•</span>
                <span>{story.audience}</span>
              </div>

              <h3 className="text-xl font-medium tracking-tight-mc text-[#FCFBFA] group-hover:text-[#F79E1B] transition-colors line-clamp-2">
                {story.title}
              </h3>

              <p className="text-sm font-mc-body text-[#D1CDC7] line-clamp-2">
                {story.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
