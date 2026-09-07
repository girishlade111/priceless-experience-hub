import React, { useState } from 'react';
import { CardTier, TokenSimState } from '../types';
import { CreditCard, Cpu, ShieldCheck, TreePine, Sparkles, RefreshCw, CheckCircle2, Lock } from 'lucide-react';

export const InnovationPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'card-sim' | 'carbon-sim'>('card-sim');
  
  // Card Tokenization Simulator State
  const [selectedTier, setSelectedTier] = useState<CardTier>('World Elite');
  const [cardholderName, setCardholderName] = useState('ALEXANDER R. MORGAN');
  const [simState, setSimState] = useState<TokenSimState>({
    merchantName: 'Priceless Global Travel',
    amount: 148.50,
    tokenizedPan: '4802-99XX-XXXX-3891',
    cryptogram: '3F8B-91E2-AA04-7C88',
    expiry: '08/30',
    biometricStatus: 'Verified',
    isTapActive: true,
    history: [
      {
        timestamp: '10:42:15',
        merchant: 'Metropolitan Rail Transit',
        amount: 4.50,
        status: 'Success',
        token: '4802-99XX-XXXX-1102'
      },
      {
        timestamp: '09:15:02',
        merchant: 'Artisan Espresso Bar',
        amount: 8.20,
        status: 'Success',
        token: '4802-99XX-XXXX-4491'
      }
    ]
  });
  const [isSimulating, setIsSimulating] = useState(false);

  // Carbon Calculator Simulator State
  const [travelSpend, setTravelSpend] = useState(450);
  const [diningSpend, setDiningSpend] = useState(300);
  const [retailSpend, setRetailSpend] = useState(600);

  // Carbon calculation logic (~0.25 kg CO2e per dollar spent)
  const totalSpend = travelSpend + diningSpend + retailSpend;
  const calculatedCarbonKg = Math.round((travelSpend * 0.45 + diningSpend * 0.22 + retailSpend * 0.18));
  const treesRestored = Math.max(1, Math.floor(calculatedCarbonKg / 15));

  const handleSimulatePayment = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const randomAmount = +(Math.random() * 120 + 15).toFixed(2);
      const merchants = ['BioMarket Express', 'Apex Cyber Cafe', 'Global Air Shuttle', 'EcoBoutique Paris'];
      const randomMerchant = merchants[Math.floor(Math.random() * merchants.length)];
      const newCryptogram = Math.random().toString(16).substring(2, 10).toUpperCase() + '-' + Math.random().toString(16).substring(2, 6).toUpperCase();
      const newPan = `4802-99XX-XXXX-${Math.floor(1000 + Math.random() * 9000)}`;

      setSimState(prev => ({
        ...prev,
        amount: randomAmount,
        merchantName: randomMerchant,
        cryptogram: newCryptogram,
        tokenizedPan: newPan,
        history: [
          {
            timestamp: new Date().toLocaleTimeString(),
            merchant: randomMerchant,
            amount: randomAmount,
            status: 'Success',
            token: newPan
          },
          ...prev.history
        ]
      }));
      setIsSimulating(false);
    }, 600);
  };

  return (
    <section id="for-innovators" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Container: Lifted Cream Surface */}
      <div className="bg-[#FCFBFA] rounded-[40px] p-6 sm:p-10 md:p-14 shadow-mc-card border border-[#141413]/10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-8 border-b border-[#141413]/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-eyebrow text-[#CF4500] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#F37338]" />
              <span>FINTECH LAB & SIMULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight-mc text-[#141413]">
              Experience Mastercard innovation in real time.
            </h2>
          </div>

          {/* Selector Switcher Pills */}
          <div className="inline-flex p-1.5 bg-[#F3F0EE] rounded-[999px] border border-[#141413]/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('card-sim')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-[20px] text-sm font-medium transition-all ${
                activeTab === 'card-sim'
                  ? 'bg-[#141413] text-[#FCFBFA] shadow-sm'
                  : 'text-[#141413]/70 hover:text-[#141413]'
              }`}
            >
              <Cpu className="w-4 h-4 text-[#F79E1B]" />
              <span>Tokenization & Card Lab</span>
            </button>

            <button
              onClick={() => setActiveTab('carbon-sim')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-[20px] text-sm font-medium transition-all ${
                activeTab === 'carbon-sim'
                  ? 'bg-[#141413] text-[#FCFBFA] shadow-sm'
                  : 'text-[#141413]/70 hover:text-[#141413]'
              }`}
            >
              <TreePine className="w-4 h-4 text-[#F37338]" />
              <span>Carbon Footprint API</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CARD TOKENIZATION & TAP-TO-PHONE SIMULATOR */}
        {activeTab === 'card-sim' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Card Customizer Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-eyebrow text-[#696969] mb-3">
                  • SELECT CARD TIER
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'World', 'World Elite'] as CardTier[]).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setSelectedTier(tier)}
                      className={`py-2.5 px-3 rounded-[20px] text-xs font-semibold transition-all border ${
                        selectedTier === tier
                          ? 'bg-[#141413] text-white border-[#141413]'
                          : 'bg-white text-[#141413] border-[#141413]/15 hover:border-[#141413]'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-eyebrow text-[#696969] mb-2">
                  • CARDHOLDER NAME
                </label>
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                  className="w-full bg-white border border-[#141413]/20 rounded-[20px] px-4 py-2.5 text-sm font-medium text-[#141413] focus:outline-none focus:border-[#CF4500]"
                />
              </div>

              {/* Security Feature Toggles */}
              <div className="bg-white rounded-[24px] p-4 border border-[#141413]/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-medium text-[#141413]">
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#CF4500]" />
                    Biometric Passkey Authentication
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#141413]/5 text-[#141413] font-bold">ACTIVE</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-[#141413]">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#F79E1B]" />
                    MDES Cryptographic Token
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#141413]/5 text-[#141413] font-bold">256-BIT</span>
                </div>
              </div>

              {/* Simulation Action Button */}
              <button
                onClick={handleSimulatePayment}
                disabled={isSimulating}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#141413] hover:bg-[#262627] text-[#FCFBFA] rounded-[20px] py-3.5 font-medium text-base shadow-md transition-all active:scale-[0.99] disabled:opacity-50"
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#F79E1B]" />
                    <span>Encrypting Cryptogram...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#F79E1B]" />
                    <span>Simulate Tap-to-Phone Payment</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Live Interactive Card Preview & Token Log */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center">
              
              {/* Card Surface Visualizer */}
              <div className="w-full max-w-sm aspect-[1.586/1] rounded-[24px] p-6 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/20"
                style={{
                  background: selectedTier === 'World Elite' 
                    ? 'linear-gradient(135deg, #141413 0%, #262627 50%, #0d0d0c 100%)'
                    : selectedTier === 'World'
                    ? 'linear-gradient(135deg, #9A3A0A 0%, #CF4500 60%, #F37338 100%)'
                    : 'linear-gradient(135deg, #3860BE 0%, #1e3a8a 100%)'
                }}
              >
                {/* Metallic shine texture */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                {/* Card Top: Chip & Contactless Signal */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-8 rounded-md bg-gradient-to-r from-yellow-200 to-yellow-500 border border-yellow-600/50 flex items-center justify-center">
                      <div className="w-6 h-5 border border-yellow-800/40 rounded-sm" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                      {selectedTier}
                    </span>
                  </div>

                  <span className="text-xs font-mono tracking-widest text-white/90">
                    {simState.isTapActive ? '((( )))' : ''}
                  </span>
                </div>

                {/* Card Number (Tokenized) */}
                <div className="relative z-10 my-auto pt-4">
                  <div className="text-xs text-white/60 mb-1">MDES TOKENIZED PAN</div>
                  <div className="text-lg font-mono tracking-widest font-semibold text-white">
                    {simState.tokenizedPan}
                  </div>
                </div>

                {/* Card Bottom: Holder Name & Authentic Mastercard Logo */}
                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-white/60">CARDHOLDER</div>
                    <div className="text-sm font-medium tracking-wide text-white font-mono">
                      {cardholderName || 'VALUED CUSTOMER'}
                    </div>
                  </div>

                  {/* Mastercard Mark */}
                  <div className="relative flex items-center justify-center w-12 h-9">
                    <div className="w-7 h-7 rounded-full bg-[#EB001B] absolute -left-1 opacity-90" />
                    <div className="w-7 h-7 rounded-full bg-[#F79E1B] absolute -right-1 opacity-90 mix-blend-multiply" />
                  </div>
                </div>
              </div>

              {/* Real-time Tokenization Output Console */}
              <div className="w-full bg-[#141413] rounded-[24px] p-5 text-[#FCFBFA] font-mono text-xs space-y-3 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-[#F37338]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    CRYPTOGRAM TELEMETRY
                  </span>
                  <span>LIVE SDK</span>
                </div>

                <div>
                  <span className="text-[#696969]">MERCHANT:</span>
                  <div className="text-white font-bold">{simState.merchantName}</div>
                </div>

                <div>
                  <span className="text-[#696969]">AUTHORIZED AMOUNT:</span>
                  <div className="text-[#F79E1B] font-bold text-sm">${simState.amount.toFixed(2)} USD</div>
                </div>

                <div>
                  <span className="text-[#696969]">DYN CRYPTOGRAM:</span>
                  <div className="text-emerald-400 break-all">{simState.cryptogram}</div>
                </div>

                <div className="pt-2 border-t border-white/10 text-[10px] text-[#D1CDC7]">
                  Recent auths: {simState.history.length} successful
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: CARBON FOOTPRINT CALCULATOR API */}
        {activeTab === 'carbon-sim' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-300">
            
            {/* Left: Monthly Spending Sliders */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm font-mc-body text-[#696969]">
                Adjust monthly category spend to evaluate calculated CO₂ footprint metrics powered by Mastercard’s Åland Index engine.
              </p>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-[#141413]">✈️ Travel & Transport</span>
                  <span className="font-bold text-[#CF4500]">${travelSpend}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="25"
                  value={travelSpend}
                  onChange={(e) => setTravelSpend(+e.target.value)}
                  className="w-full accent-[#CF4500] bg-[#E8E2DA] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-[#141413]">🍽️ Dining & Restaurants</span>
                  <span className="font-bold text-[#CF4500]">${diningSpend}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="25"
                  value={diningSpend}
                  onChange={(e) => setDiningSpend(+e.target.value)}
                  className="w-full accent-[#CF4500] bg-[#E8E2DA] h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-[#141413]">🛍️ Retail & Apparel</span>
                  <span className="font-bold text-[#CF4500]">${retailSpend}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2500"
                  step="25"
                  value={retailSpend}
                  onChange={(e) => setRetailSpend(+e.target.value)}
                  className="w-full accent-[#CF4500] bg-[#E8E2DA] h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Right: Calculated Footprint & Restoration Impact */}
            <div className="lg:col-span-6 bg-[#F3F0EE] rounded-[32px] p-6 sm:p-8 border border-[#141413]/10 space-y-6 text-center md:text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-eyebrow text-[#696969]">
                  • ESTIMATED FOOTPRINT
                </span>
                <span className="px-3 py-1 rounded-full bg-[#141413] text-white text-xs font-bold">
                  Åland Index v3.1
                </span>
              </div>

              <div className="flex items-baseline justify-center md:justify-start gap-2">
                <span className="text-5xl sm:text-6xl font-bold tracking-tight-mc text-[#141413]">
                  {calculatedCarbonKg}
                </span>
                <span className="text-lg font-medium text-[#696969]">kg CO₂e / mo</span>
              </div>

              <div className="p-4 bg-white rounded-[20px] border border-[#141413]/10 flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-full bg-[#F37338]/15 flex items-center justify-center shrink-0">
                  <TreePine className="w-6 h-6 text-[#CF4500]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#141413]">
                    Priceless Planet Coalition Impact
                  </div>
                  <div className="text-xs font-mc-body text-[#696969]">
                    Your micro-contribution of $0.05/purchase restores approx <strong className="text-[#9A3A0A]">{treesRestored} trees</strong> every month.
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
