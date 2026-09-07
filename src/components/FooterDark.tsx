import React from 'react';
import { Phone, CreditCard, MapPin, HelpCircle, ArrowUpRight, Globe } from 'lucide-react';

interface FooterDarkProps {
  onOpenRegionModal: () => void;
  onOpenInspector: () => void;
}

export const FooterDark: React.FC<FooterDarkProps> = ({
  onOpenRegionModal,
  onOpenInspector
}) => {
  return (
    <footer className="bg-[#141413] text-white pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-t border-black/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Large Conversational Headline */}
        <div className="pb-16 border-b border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="relative flex items-center gap-2 mb-4">
              {/* Mastercard overlapping mark */}
              <div className="relative flex items-center justify-center w-8 h-6">
                <div className="w-5 h-5 rounded-full bg-[#EB001B] absolute -left-0.5 opacity-90" />
                <div className="w-5 h-5 rounded-full bg-[#F79E1B] absolute -right-0.5 opacity-90 mix-blend-multiply" />
              </div>
              <span className="text-xs font-bold uppercase tracking-eyebrow text-[#F79E1B]">
                • ALWAYS CONNECTED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight-mc text-[#FCFBFA] max-w-2xl">
              We’re always here when you need us.
            </h2>
          </div>

          <button
            onClick={onOpenInspector}
            className="self-start md:self-auto bg-white/10 hover:bg-white/20 text-white rounded-[20px] px-6 py-2.5 text-sm font-medium border border-white/20 transition-all"
          >
            Inspect Design Tokens
          </button>
        </div>

        {/* 4-Column Link Grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Need Help */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-[#696969]">
              NEED HELP?
            </h3>
            <ul className="space-y-3 text-sm font-mc-body text-white/90">
              <li>
                <a href="#contact" className="hover:text-[#F79E1B] transition-colors flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#F37338]" />
                  <span>24/7 Global Card Support</span>
                </a>
              </li>
              <li>
                <a href="#report-lost" className="hover:text-[#F79E1B] transition-colors flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-[#F37338]" />
                  <span>Report Lost or Stolen Card</span>
                </a>
              </li>
              <li>
                <a href="#atm-locator" className="hover:text-[#F79E1B] transition-colors flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#F37338]" />
                  <span>Find an ATM Near You</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F79E1B] transition-colors flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#F37338]" />
                  <span>Frequently Asked Questions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-[#696969]">
              SOLUTIONS
            </h3>
            <ul className="space-y-2.5 text-sm font-mc-body text-white/90">
              <li><a href="#for-business" className="hover:text-[#F79E1B] transition-colors">Tap to Phone SoftPOS</a></li>
              <li><a href="#for-business" className="hover:text-[#F79E1B] transition-colors">Decision Intelligence AI</a></li>
              <li><a href="#for-business" className="hover:text-[#F79E1B] transition-colors">Carbon Calculator API</a></li>
              <li><a href="#for-innovators" className="hover:text-[#F79E1B] transition-colors">Mastercard Engage Developers</a></li>
              <li><a href="#for-innovators" className="hover:text-[#F79E1B] transition-colors">Open Banking Account Rails</a></li>
            </ul>
          </div>

          {/* Column 3: About Mastercard */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-[#696969]">
              ABOUT MASTERCARD
            </h3>
            <ul className="space-y-2.5 text-sm font-mc-body text-white/90">
              <li><a href="#about" className="hover:text-[#F79E1B] transition-colors">Our Company & Leadership</a></li>
              <li><a href="#investors" className="hover:text-[#F79E1B] transition-colors flex items-center gap-1">Investor Relations <ArrowUpRight className="w-3.5 h-3.5 text-[#696969]" /></a></li>
              <li><a href="#careers" className="hover:text-[#F79E1B] transition-colors flex items-center gap-1">Global Careers <ArrowUpRight className="w-3.5 h-3.5 text-[#696969]" /></a></li>
              <li><a href="#newsroom" className="hover:text-[#F79E1B] transition-colors">Global Newsroom</a></li>
              <li><a href="#priceless" className="hover:text-[#F79E1B] transition-colors">Priceless Experiences</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Governance */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-eyebrow text-[#696969]">
              LEGAL & GOVERNANCE
            </h3>
            <ul className="space-y-2.5 text-sm font-mc-body text-white/90">
              <li><a href="#privacy" className="hover:text-[#F79E1B] transition-colors">Global Privacy Notice</a></li>
              <li><a href="#terms" className="hover:text-[#F79E1B] transition-colors">Terms of Use</a></li>
              <li><a href="#binding" className="hover:text-[#F79E1B] transition-colors">Binding Corporate Rules</a></li>
              <li><a href="#cyber-security" className="hover:text-[#F79E1B] transition-colors">Cyber Security Center</a></li>
              <li><a href="#esg" className="hover:text-[#F79E1B] transition-colors">Sustainability & ESG</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row Divider & Copyright */}
        <div className="pt-10 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#696969] font-mc-body">
          
          <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} Mastercard. All rights reserved.</span>
            <span>•</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Choices</a>
            <span>•</span>
            <a href="#site-map" className="hover:text-white transition-colors">Site Map</a>
          </div>

          {/* Regional Selector Pill Button in Footer */}
          <button
            onClick={onOpenRegionModal}
            className="inline-flex items-center gap-2 bg-[#141413] text-white border border-white/30 hover:border-white rounded-full px-4 py-1.5 text-xs font-medium transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#F79E1B]" />
            <span>Global / English</span>
          </button>

        </div>

      </div>
    </footer>
  );
};
