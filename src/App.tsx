import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroStadium } from './components/HeroStadium';
import { SolutionConstellation } from './components/SolutionConstellation';
import { InnovationPlayground } from './components/InnovationPlayground';
import { PillCarousel } from './components/PillCarousel';
import { DesignInspectorDrawer } from './components/DesignInspectorDrawer';
import { SolutionDetailModal } from './components/SolutionDetailModal';
import { RegionModal } from './components/RegionModal';
import { StoryModal } from './components/StoryModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';
import { FooterDark } from './components/FooterDark';
import { SOLUTIONS_DATA } from './data/content';
import { SolutionItem, CarouselStory } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('for-you');
  
  // Modals & Drawers State
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [isRegionModalOpen, setIsRegionModalOpen] = useState<boolean>(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedStory, setSelectedStory] = useState<CarouselStory | null>(null);

  const handleScrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F0EE] text-[#141413] flex flex-col justify-between selection:bg-[#F79E1B]/30 selection:text-[#141413]">
      
      {/* Floating Header Navigation */}
      <HeaderNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenInspector={() => setIsInspectorOpen(true)}
        onOpenRegionModal={() => setIsRegionModalOpen(true)}
      />

      {/* Main Page Layout */}
      <main className="flex-1 space-y-12">
        
        {/* Hero Stadium Section */}
        <HeroStadium
          onExploreClick={() => handleScrollToSection('for-business')}
          onOpenPlayground={() => handleScrollToSection('for-innovators')}
        />

        {/* Circular Portrait Solutions Constellation */}
        <SolutionConstellation
          solutions={SOLUTIONS_DATA}
          onSelectSolution={(sol) => setSelectedSolution(sol)}
        />

        {/* Fintech Innovation & Tokenization Simulator */}
        <InnovationPlayground />

        {/* News & Stories Pill Carousel */}
        <PillCarousel
          onSelectStory={(story) => setSelectedStory(story)}
        />

      </main>

      {/* Dark Footer */}
      <FooterDark
        onOpenRegionModal={() => setIsRegionModalOpen(true)}
        onOpenInspector={() => setIsInspectorOpen(true)}
      />

      {/* Design Tokens & Specification Inspector Drawer */}
      <DesignInspectorDrawer
        isOpen={isInspectorOpen}
        onClose={() => setIsInspectorOpen(false)}
      />

      {/* Solution Detail Modal */}
      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenPlayground={() => {
          setSelectedSolution(null);
          handleScrollToSection('for-innovators');
        }}
      />

      {/* Region & Currency Selector Modal */}
      <RegionModal
        isOpen={isRegionModalOpen}
        onClose={() => setIsRegionModalOpen(false)}
      />

      {/* Story Detail Modal */}
      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      {/* Cookie & Privacy Consent Banner */}
      <CookieConsentBanner />

    </div>
  );
}

export default App;
