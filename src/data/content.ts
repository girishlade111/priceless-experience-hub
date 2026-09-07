import { SolutionItem, CarouselStory, DesignToken } from '../types';

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: 'next-gen-payments',
    category: 'payments',
    eyebrow: '• NEXT-GEN PAYMENTS',
    title: 'Tap to Phone & Digital Tokenization',
    tagline: 'Transforming smartphones into contactless terminals with zero friction.',
    description: 'Mastercard Token Connectivity and Tap to Phone technology allow micro-merchants and enterprise networks to accept payments securely everywhere with hardware-grade cryptographic protection.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    ghostWatermark: 'PAYMENTS',
    stats: [
      { label: 'Global Acceptance Points', value: '100M+' },
      { label: 'Token Fraud Reduction', value: '-85%' },
      { label: 'Transaction Latency', value: '<250ms' }
    ],
    keyFeatures: [
      'Digital Card Tokenization (MDES) for Apple Pay, Google Pay & Wearables',
      'Software POS (SoftPOS) with EMV L1/L2 security certification',
      'Biometric authentication with Passkeys and FIDO2 integration',
      'Dynamic CVV and single-use virtual card numbers'
    ],
    fullCaseStudy: {
      client: 'Global Retail & Transit Alliance',
      challenge: 'Enable 12 million informal transit drivers and street vendors across South America to accept cashless tap payments without expensive card reader hardware.',
      solution: 'Deployed Mastercard Tap to Phone SoftPOS SDK embedded directly into vendor messaging apps with localized QR and NFC fallback.',
      impact: 'Generated $1.4B in new digital transaction volume and onboarded 3.8M previously unbanked merchants in 18 months.'
    }
  },
  {
    id: 'cyber-intelligence',
    category: 'security',
    eyebrow: '• CYBER & INTELLIGENCE',
    title: 'Decision Intelligence & Fraud AI',
    tagline: 'Real-time AI scorecard evaluating billions of transaction attributes in under 50 milliseconds.',
    description: 'Mastercard Decision Intelligence uses recurrent neural networks and predictive risk modeling to instantly distinguish genuine account holder activity from complex cyber threats.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    ghostWatermark: 'SECURITY',
    stats: [
      { label: 'Scored Transactions/Yr', value: '143B+' },
      { label: 'False Positives Cut', value: '60%' },
      { label: 'AI Evaluation Speed', value: '42ms' }
    ],
    keyFeatures: [
      'Predictive Behavioral Biometrics and Device Fingerprinting',
      'Autonomous Cyber Risk Assessment for Enterprise Networks',
      'Ethical AI Model Transparency & Explainable Fraud Scoring',
      'Cross-border Account Takeover Prevention'
    ],
    fullCaseStudy: {
      client: 'Pan-European Commercial Banking Group',
      challenge: 'Combat escalating synthetic identity fraud and automated credential stuffing attacks during peak holiday e-commerce surges.',
      solution: 'Integrated Mastercard Decision Intelligence Pro API into core authorization stack for live behavioral biometrics scoring.',
      impact: 'Prevented $320M in fraudulent authorizations while improving genuine transaction approval rates by 4.2%.'
    }
  },
  {
    id: 'sustainable-growth',
    category: 'sustainability',
    eyebrow: '• SUSTAINABLE GROWTH',
    title: 'Priceless Planet & Carbon Calculator API',
    tagline: 'Empowering 3 billion consumers to measure and offset the environmental impact of every purchase.',
    description: 'The Mastercard Carbon Calculator API translates transaction spending categories into estimated carbon footprint data, seamlessly integrated into mobile banking apps worldwide.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    ghostWatermark: 'PLANET',
    stats: [
      { label: 'Trees Planted Globally', value: '100M' },
      { label: 'Bank Partners Onboarded', value: '450+' },
      { label: 'Sustainable Card Badge', value: 'Eco-Cert' }
    ],
    keyFeatures: [
      'Åland Index integration for carbon footprint calculations per dollar',
      'Priceless Planet Coalition tree restoration micro-donations',
      'Sustainable Card Directory featuring 100% recycled PVC & ocean plastics',
      'Scope 3 emissions accounting dashboards for corporate cardholders'
    ],
    fullCaseStudy: {
      client: 'Nordic Digital Bank',
      challenge: 'Engage Gen-Z and eco-conscious banking customers with actionable sustainability metrics inside their everyday banking application.',
      solution: 'Embedded the Mastercard Carbon Calculator API with real-time carbon offsets at checkout and rewards points for green merchant choices.',
      impact: 'Achieved 78% monthly active user adoption and funded the restoration of 2.5M trees across Amazonian watersheds.'
    }
  },
  {
    id: 'fintech-innovations',
    category: 'fintech',
    eyebrow: '• FINTECH INNOVATORS',
    title: 'Mastercard Engage & Developer APIs',
    tagline: 'Launch card programs, open banking flows, and crypto settlement in days.',
    description: 'Mastercard Engage connects fintech founders, neobanks, and SaaS platforms with certified processors, BIN sponsors, and turnkey API sandboxes to accelerate time to market.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    ghostWatermark: 'INNOVATION',
    stats: [
      { label: 'Fintech Partners', value: '2,800+' },
      { label: 'API Endpoints Live', value: '120+' },
      { label: 'Average Time to Issue', value: '14 Days' }
    ],
    keyFeatures: [
      'Open Banking Account-to-Account Payment APIs',
      'Virtual Card Issuance for B2B Expense SaaS Platforms',
      'Stablecoin & Digital Currency Settlement Rails',
      'Mastercard Start Path Accelerator Partnership Ecosystem'
    ],
    fullCaseStudy: {
      client: 'Neobank for Creator Economy',
      challenge: 'Provide 500,000 independent content creators with instant sub-account virtual debit cards and multi-currency payout options.',
      solution: 'Utilized Mastercard Developer APIs and Fintech Express fast-track issuing program for instant virtual card generation.',
      impact: 'Scales from concept to live issuing in 3 weeks, handling $85M in monthly creator payout volume across 40 countries.'
    }
  }
];

export const STORIES_DATA: CarouselStory[] = [
  {
    id: 'story-1',
    tag: 'Story',
    title: 'The Future of Invisible Commerce in Urban Mobility',
    subtitle: 'How biometrics and ultra-wideband location signals are replacing ticket gates across London, Tokyo, and New York.',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    readTime: '4 min read',
    audience: 'Consumer',
    content: 'Imagine stepping onto a metro train without tapping a phone or pulling out a card. Mastercard’s research teams in Dublin and Singapore are testing passive spatial intent verification where your biometric token securely confirms passage in real time.'
  },
  {
    id: 'story-2',
    tag: 'Insights',
    title: 'Cyber Resilience in an Era of Quantum Computing',
    subtitle: 'Preparing cryptographic payment rails for post-quantum threat vectors with lattice-based encryption algorithms.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min read',
    audience: 'Enterprise',
    content: 'Mastercard has pioneered post-quantum cryptography standards for contactless payment cards and chip specifications, ensuring financial networks remain unbreakable as quantum processors scale.'
  },
  {
    id: 'story-3',
    tag: 'Report',
    title: 'Bridging the $5 Trillion SME Credit Gap in Emerging Markets',
    subtitle: 'Unlocking working capital through real-time supply chain data and alternative credit scoring models.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min read',
    audience: 'Fintech',
    content: 'Traditional collateral requirements often exclude small businesses. By analyzing verified transaction histories and merchant settlement flows, Mastercard Community Pass empowers financial institutions to grant micro-loans safely.'
  },
  {
    id: 'story-4',
    tag: 'Priceless',
    title: 'Restoring Coastal Mangroves with Every Contactless Tap',
    subtitle: 'Inside the Priceless Planet Coalition initiative to restore 100 million trees by uniting global issuers and merchants.',
    image: 'https://images.unsplash.com/photo-1511497584788-8767610419ea?auto=format&fit=crop&w=800&q=80',
    readTime: '3 min read',
    audience: 'Consumer',
    content: 'Trees are among nature’s most effective carbon capture technologies. Through transparent blockchain-verified planting tracking, cardholders can watch their daily purchases directly contribute to forest revival.'
  }
];

export const DESIGN_TOKENS: DesignToken[] = [
  {
    category: 'Color Palette',
    tokens: [
      { name: 'Canvas Cream', value: '#F3F0EE', hex: '#F3F0EE', usage: 'Page body canvas. Warm, putty-toned base.' },
      { name: 'Lifted Cream', value: '#FCFBFA', hex: '#FCFBFA', usage: 'Raised nested paper-on-paper containers.' },
      { name: 'Ink Black', value: '#141413', hex: '#141413', usage: 'Primary headlines, body copy, primary CTAs, dark footer.' },
      { name: 'Signal Orange', value: '#CF4500', hex: '#CF4500', usage: 'Consent & legal compliance actions exclusively.' },
      { name: 'Light Signal Orange', value: '#F37338', hex: '#F37338', usage: 'Orbital decorative lines & active carousel cues.' },
      { name: 'Clay Brown', value: '#9A3A0A', hex: '#9A3A0A', usage: 'Secondary compliance & cookie preference links.' },
      { name: 'Mastercard Red', value: '#EB001B', hex: '#EB001B', usage: 'Left circle of Mastercard logo only.' },
      { name: 'Mastercard Yellow', value: '#F79E1B', hex: '#F79E1B', usage: 'Right circle of Mastercard logo only.' }
    ]
  },
  {
    category: 'Border Radius Scale',
    tokens: [
      { name: 'Signature Button Radius', value: '20px', usage: 'Primary Ink Black & secondary outlined pill buttons.' },
      { name: 'Consent Action Radius', value: '24px', usage: 'Cookie consent pills & legal preference chips.' },
      { name: 'Stadium & Hero Radius', value: '40px', usage: 'Hero media frames & oversized section containers.' },
      { name: 'Circular Portrait Radius', value: '50% (Circle)', usage: 'Service portraits & satellite micro-CTA buttons.' },
      { name: 'Full Pill Radius', value: '999px / 1000px', usage: 'Floating nav pill, country dropdown, story cards.' }
    ]
  },
  {
    category: 'Typography Rules',
    tokens: [
      { name: 'Primary Font Stack', value: 'Sofia Sans / MarkForMC, sans-serif', usage: '100% single typeface across all headlines & body.' },
      { name: 'Headline Tracking', value: '-2% (-0.02em)', usage: 'Tight negative letter-spacing for confidence and editorial lock.' },
      { name: 'Body Weight 450', value: 'font-weight: 450', usage: 'Signature half-step weight — softer than 500, firmer than 400.' },
      { name: 'Eyebrow Scale', value: '14px / 700 / +4% Tracking', usage: 'Uppercase with accent dot (e.g. • SERVICES).' }
    ]
  },
  {
    category: 'Elevation & Shadows',
    tokens: [
      { name: 'Level 1 (Nav Lift)', value: 'rgba(0, 0, 0, 0.04) 0px 4px 24px', usage: 'Floating navigation pill off the cream canvas.' },
      { name: 'Level 2 (Card Halo)', value: 'rgba(0, 0, 0, 0.08) 0px 24px 48px', usage: 'Atmospheric cushioning for hero media & portrait cards.' },
      { name: 'Level 3 (Modal Shadow)', value: 'rgba(0, 0, 0, 0.18) 0px 40px 80px', usage: 'High contrast dialogs & interactive drawer overlays.' }
    ]
  }
];
