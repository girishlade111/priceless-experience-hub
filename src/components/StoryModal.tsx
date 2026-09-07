import React from 'react';
import { CarouselStory } from '../types';
import { X, Clock, Share2, BookOpen } from 'lucide-react';

interface StoryModalProps {
  story: CarouselStory | null;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose }) => {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#FCFBFA] rounded-[32px] max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#141413]/10 relative animate-in zoom-in-95 duration-200">
        
        {/* Cover Image Header */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-[32px]">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#141413] backdrop-blur-md flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="bg-[#CF4500] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-eyebrow">
              {story.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight-mc text-white">
              {story.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-4 text-xs text-[#696969] pb-4 border-b border-[#141413]/10">
            <span className="flex items-center gap-1.5 font-bold text-[#141413]">
              <Clock className="w-3.5 h-3.5 text-[#F79E1B]" />
              {story.readTime}
            </span>
            <span>•</span>
            <span className="bg-[#F3F0EE] px-2.5 py-0.5 rounded-full font-medium text-[#141413]">
              Audience: {story.audience}
            </span>
          </div>

          <p className="text-[#141413] font-mc-body text-base leading-relaxed">
            {story.subtitle}
          </p>

          <div className="bg-[#F3F0EE] rounded-[20px] p-6 text-sm font-mc-body text-[#141413] leading-relaxed border border-[#141413]/10">
            <BookOpen className="w-5 h-5 text-[#CF4500] mb-3" />
            {story.content}
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => alert('Article link copied to clipboard!')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-[#141413] hover:text-[#CF4500]"
            >
              <Share2 className="w-4 h-4" />
              Share Article
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-[20px] bg-[#141413] text-white text-sm font-medium hover:bg-[#262627]"
            >
              Done Reading
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
