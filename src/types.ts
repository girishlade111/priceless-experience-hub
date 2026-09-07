export interface SolutionItem {
  id: string;
  category: 'payments' | 'security' | 'sustainability' | 'fintech';
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  ghostWatermark: string;
  stats: { label: string; value: string }[];
  keyFeatures: string[];
  fullCaseStudy: {
    client: string;
    challenge: string;
    solution: string;
    impact: string;
  };
}

export interface CarouselStory {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  readTime: string;
  audience: 'Consumer' | 'Enterprise' | 'Fintech';
  content: string;
}

export type CardTier = 'Standard' | 'World' | 'World Elite';

export interface TokenSimState {
  merchantName: string;
  amount: number;
  tokenizedPan: string;
  cryptogram: string;
  expiry: string;
  biometricStatus: 'Verified' | 'Pending' | 'Bypassed';
  isTapActive: boolean;
  history: {
    timestamp: string;
    merchant: string;
    amount: number;
    status: 'Success' | 'Declined';
    token: string;
  }[];
}

export interface DesignToken {
  category: string;
  tokens: {
    name: string;
    value: string;
    hex?: string;
    usage: string;
  }[];
}
