import React from 'react';
import { SolutionItem } from '../types';
import { X, CheckCircle, ArrowRight, ShieldCheck, Briefcase, BarChart3, Globe } from 'lucide-react';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenPlayground: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({
  solution,
  onClose,
  onOpenPlayground
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="bg-[#FCFBFA] text-[#141413] rounded-[40px] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#141413]/10 relative flex flex-col justify-between animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white hover:bg-[#141413] hover:text-white flex items-center justify-center border border-[#141413]/10 z-20 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Hero Header */}
        <div className="p-8 sm:p-12 bg-[#F3F0EE] border-b border-[#141413]/10 relative overflow-hidden">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-[#CF4500] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F37338]" />
            <span>{solution.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight-mc text-[#141413] max-w-xl mb-4">
            {solution.title}
          </h2>

          <p className="text-base font-mc-body text-[#696969] max-w-xl leading-relaxed">
            {solution.description}
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#141413]/10">
            {solution.stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-4 rounded-[20px] border border-[#141413]/10">
                <div className="text-2xl sm:text-3xl font-bold tracking-tight-mc text-[#141413]">
                  {stat.value}
                </div>
                <div className="text-xs text-[#696969] font-mc-body mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body Content */}
        <div className="p-8 sm:p-12 space-y-8">
          
          {/* Key Capabilities */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-eyebrow text-[#141413] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CF4500]" />
              Core Technical Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {solution.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-[16px] bg-[#F3F0EE] text-sm font-mc-body text-[#141413]">
                  <CheckCircle className="w-4 h-4 text-[#F79E1B] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Case Study Card */}
          <div className="bg-[#141413] text-white rounded-[32px] p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#F79E1B] font-bold uppercase tracking-eyebrow">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#F37338]" />
                GLOBAL IMPACT CASE STUDY
              </span>
              <span>{solution.fullCaseStudy.client}</span>
            </div>

            <div>
              <div className="text-xs text-[#D1CDC7] font-semibold mb-1">CHALLENGE:</div>
              <p className="text-sm text-[#FCFBFA] font-mc-body">{solution.fullCaseStudy.challenge}</p>
            </div>

            <div>
              <div className="text-xs text-[#D1CDC7] font-semibold mb-1">SOLUTION DEPLOYED:</div>
              <p className="text-sm text-[#FCFBFA] font-mc-body">{solution.fullCaseStudy.solution}</p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-bold">
              <span>IMPACT:</span>
              <span>{solution.fullCaseStudy.impact}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#F3F0EE] border-t border-[#141413]/10 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-[20px] bg-white border border-[#141413] text-[#141413] font-medium text-sm hover:bg-[#141413] hover:text-white transition-colors"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenPlayground();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[20px] bg-[#141413] text-[#FCFBFA] font-medium text-sm hover:bg-[#262627] transition-all"
          >
            <span>Test in Fintech Simulator</span>
            <ArrowRight className="w-4 h-4 text-[#F79E1B]" />
          </button>
        </div>

      </div>
    </div>
  );
};
