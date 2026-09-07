import React, { useState } from 'react';
import { X, Check, Globe } from 'lucide-react';

interface RegionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegionModal: React.FC<RegionModalProps> = ({ isOpen, onClose }) => {
  const [selectedRegion, setSelectedRegion] = useState('Global (English)');

  if (!isOpen) return null;

  const regions = [
    { name: 'Global (English)', flag: '🌐', currency: 'USD ($)' },
    { name: 'United States (English)', flag: '🇺🇸', currency: 'USD ($)' },
    { name: 'Europe (English)', flag: '🇪🇺', currency: 'EUR (€)' },
    { name: 'United Kingdom (English)', flag: '🇬🇧', currency: 'GBP (£)' },
    { name: 'Latin America & Caribbean (Español)', flag: '🇲🇽', currency: 'USD ($)' },
    { name: 'Asia Pacific (English)', flag: '🇸🇬', currency: 'SGD ($)' },
    { name: 'Middle East & Africa (English)', flag: '🇦🇪', currency: 'AED' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141413]/70 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-[#FCFBFA] rounded-[32px] max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#141413]/10 relative animate-in zoom-in-95 duration-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#141413]/10 mb-6">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#CF4500]" />
            <h3 className="text-lg font-bold tracking-tight-mc text-[#141413]">
              Select Region & Currency
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F3F0EE] flex items-center justify-center hover:bg-[#141413] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2 mb-6 max-h-80 overflow-y-auto">
          {regions.map((reg) => {
            const isSelected = selectedRegion === reg.name;
            return (
              <button
                key={reg.name}
                onClick={() => setSelectedRegion(reg.name)}
                className={`w-full flex items-center justify-between p-3.5 rounded-[16px] text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#141413] text-white'
                    : 'bg-[#F3F0EE] text-[#141413] hover:bg-[#E8E2DA]'
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg">{reg.flag}</span>
                  <span>{reg.name}</span>
                </span>

                <div className="flex items-center gap-2">
                  <span className={`text-xs ${isSelected ? 'text-[#F79E1B]' : 'text-[#696969]'}`}>
                    {reg.currency}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-[#F79E1B]" />}
                </div>
              </button>
            );
          })}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-[#141413] text-[#FCFBFA] rounded-[20px] font-medium text-sm hover:bg-[#262627] transition-all"
        >
          Confirm Regional Preference
        </button>

      </div>
    </div>
  );
};
