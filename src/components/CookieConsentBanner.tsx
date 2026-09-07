import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mc_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('mc_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handlePreferences = () => {
    localStorage.setItem('mc_cookie_consent', 'custom');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-xl z-50 animate-in slide-in-from-bottom duration-500">
      <div className="bg-[#FCFBFA] rounded-[24px] p-5 shadow-2xl border border-[#141413]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        {/* Consent Copy */}
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#CF4500] shrink-0 mt-0.5" />
          <p className="text-xs font-mc-body text-[#262627] leading-normal">
            We use cookies to improve your experience and measure analytics. Respecting your privacy choice is central to our values.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
          {/* Secondary Clay Brown Link */}
          <button
            onClick={handlePreferences}
            className="text-xs font-semibold text-[#9A3A0A] hover:underline"
          >
            Preferences
          </button>

          {/* Primary Signal Orange Consent Pill (24px radius) */}
          <button
            onClick={handleAccept}
            className="bg-[#CF4500] hover:bg-[#a83800] text-white rounded-[24px] px-6 py-1.5 text-xs font-semibold tracking-wide transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>

      </div>
    </aside>
  );
};
