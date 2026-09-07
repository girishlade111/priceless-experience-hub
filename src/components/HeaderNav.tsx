import React, { useState } from 'react';
import { Search, Globe, Menu, X, SlidersHorizontal } from 'lucide-react';

interface HeaderNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenInspector: () => void;
  onOpenRegionModal: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenInspector,
  onOpenRegionModal
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'for-you', label: 'For you' },
    { id: 'for-business', label: 'For business' },
    { id: 'for-world', label: 'For the world' },
    { id: 'for-innovators', label: 'For innovators' },
    { id: 'news-trends', label: 'News & trends' }
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Nav Pill Container */}
      <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 md:pt-6 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <nav className="bg-white/95 backdrop-blur-md rounded-[999px] shadow-mc-nav border border-[#141413]/5 px-4 md:px-8 py-3 md:py-3.5 flex items-center justify-between transition-all duration-300">
            
            {/* Brand Logo */}
            <button 
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Mastercard Home"
            >
              {/* Mastercard overlapping circles mark */}
              <div className="relative flex items-center justify-center w-9 h-7">
                <div className="w-6 h-6 rounded-full bg-[#EB001B] absolute -left-1 opacity-90 transition-transform group-hover:scale-105" />
                <div className="w-6 h-6 rounded-full bg-[#F79E1B] absolute -right-1 opacity-90 mix-blend-multiply transition-transform group-hover:scale-105" />
                <div className="w-2.5 h-6 bg-[#FF5F00] absolute rounded-full opacity-80" />
              </div>
              <span className="font-medium text-lg tracking-tight-mc text-[#141413] hidden sm:inline-block">
                mastercard
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-base font-medium transition-colors relative py-1 px-3 rounded-[20px] ${
                      isActive 
                        ? 'text-[#141413] bg-[#F3F0EE] font-semibold' 
                        : 'text-[#141413]/80 hover:text-[#141413] hover:bg-[#F3F0EE]/50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action Tools */}
            <div className="flex items-center gap-2 md:gap-3">
              
              {/* Expandable Search Input */}
              <div className="relative flex items-center">
                {isSearchOpen ? (
                  <div className="flex items-center bg-[#F3F0EE] rounded-[999px] px-3 py-1.5 border border-[#141413]/20 animate-in fade-in duration-200">
                    <Search className="w-4 h-4 text-[#696969] mr-2" />
                    <input
                      type="text"
                      placeholder="Search solutions, APIs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="bg-transparent text-sm text-[#141413] placeholder-[#696969] focus:outline-none w-36 md:w-48"
                    />
                    <button 
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="text-[#696969] hover:text-[#141413] p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[#141413] hover:bg-[#F3F0EE] transition-colors"
                    title="Search"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Language / Region Pill */}
              <button
                onClick={onOpenRegionModal}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#141413] bg-[#F3F0EE] hover:bg-[#E8E2DA] rounded-[999px] transition-colors"
                title="Change Region"
              >
                <Globe className="w-3.5 h-3.5 text-[#696969]" />
                <span>Global / EN</span>
              </button>

              {/* Design System Inspector Trigger */}
              <button
                onClick={onOpenInspector}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#141413] bg-[#141413]/5 hover:bg-[#141413]/10 border border-[#141413]/10 rounded-[999px] transition-colors"
                title="Design System Inspector"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#F37338]" />
                <span className="hidden sm:inline">Design System</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#141413] hover:bg-[#F3F0EE] transition-colors"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#141413]/90 backdrop-blur-lg pt-28 px-6 pb-12 flex flex-col justify-between lg:hidden animate-in fade-in duration-300">
          <div className="space-y-4">
            <div className="text-xs uppercase font-bold text-[#F37338] tracking-eyebrow mb-4">
              • NAVIGATION
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left text-2xl font-medium text-[#F3F0EE] hover:text-[#F79E1B] py-2 transition-colors border-b border-white/10"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenRegionModal(); }}
              className="flex items-center justify-between w-full text-left text-sm text-[#F3F0EE] py-2"
            >
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#F79E1B]" />
                Region & Currency
              </span>
              <span className="text-xs text-[#D1CDC7] bg-white/10 px-2.5 py-1 rounded-full">Global (EN)</span>
            </button>

            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenInspector(); }}
              className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#141413] font-medium rounded-[20px]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#CF4500]" />
              Inspect Design Tokens
            </button>
          </div>
        </div>
      )}
    </>
  );
};
