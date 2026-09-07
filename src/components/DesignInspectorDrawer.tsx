import React, { useState } from 'react';
import { DESIGN_TOKENS } from '../data/content';
import { X, Copy, Check, Palette, Sparkles, Layers, Type } from 'lucide-react';

interface DesignInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DesignInspectorDrawer: React.FC<DesignInspectorDrawerProps> = ({
  isOpen,
  onClose
}) => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Color Palette');

  if (!isOpen) return null;

  const handleCopy = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const selectedTokenGroup = DESIGN_TOKENS.find(t => t.category === activeCategory) || DESIGN_TOKENS[0];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#141413]/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      {/* Drawer Container */}
      <div className="w-full max-w-xl bg-[#FCFBFA] text-[#141413] h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-[#141413]/10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#F3F0EE] border-b border-[#141413]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#141413] text-white flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#F79E1B]" />
            </div>
            <div>
              <h2 className="text-xl font-medium tracking-tight-mc text-[#141413]">
                Design System Inspector
              </h2>
              <p className="text-xs text-[#696969] font-mc-body">
                Mastercard Specification Reference & Token Inspector
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white hover:bg-[#141413] hover:text-white flex items-center justify-center border border-[#141413]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-[#141413]/10 overflow-x-auto p-3 bg-white gap-2">
          {DESIGN_TOKENS.map((group) => {
            const isActive = group.category === activeCategory;
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(group.category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#141413] text-[#FCFBFA]'
                    : 'text-[#141413]/70 hover:bg-[#F3F0EE]'
                }`}
              >
                {group.category}
              </button>
            );
          })}
        </div>

        {/* Tokens List Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-4 flex-1">
          {selectedTokenGroup.tokens.map((token) => (
            <div
              key={token.name}
              className="p-4 bg-white rounded-[20px] border border-[#141413]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#CF4500]/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                {token.hex && (
                  <div
                    className="w-8 h-8 rounded-full border border-black/10 shrink-0 mt-0.5"
                    style={{ backgroundColor: token.hex }}
                  />
                )}
                <div>
                  <div className="text-sm font-bold text-[#141413] flex items-center gap-2">
                    <span>{token.name}</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#F3F0EE] text-[#9A3A0A]">
                      {token.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#696969] font-mc-body mt-1">
                    {token.usage}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(token.value, token.name)}
                className="self-end sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F3F0EE] hover:bg-[#141413] hover:text-white text-xs font-medium text-[#141413] transition-colors shrink-0"
              >
                {copiedToken === token.name ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          ))}

          {/* Quick Component Spec Copy */}
          <div className="mt-8 p-6 bg-[#141413] rounded-[24px] text-white space-y-3">
            <div className="text-xs font-bold uppercase tracking-eyebrow text-[#F79E1B]">
              • TAILWIND UTILITY QUICK SNIPPET
            </div>
            <pre className="text-xs font-mono bg-black/50 p-3 rounded-xl overflow-x-auto text-[#D1CDC7]">
{`/* Primary Ink Pill Button */
className="bg-[#141413] text-[#F3F0EE] rounded-[20px] px-6 py-2.5 font-medium tracking-tight-mc hover:scale-[1.02]"

/* Floating Nav Pill */
className="bg-white/95 rounded-[999px] shadow-mc-nav px-8 py-4"

/* Circular Portrait Satellite CTA */
className="w-14 h-14 rounded-full bg-white text-[#141413] shadow-lg absolute -bottom-2 -right-2"`}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#F3F0EE] border-t border-[#141413]/10 text-center text-xs text-[#696969] font-mc-body">
          Mastercard Editorial Design System Guidelines
        </div>

      </div>
    </div>
  );
};
