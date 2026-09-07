# Priceless Experience Hub

An editorial financial innovation showcase built on Mastercard's signature orbit and pill design system. This interactive web experience demonstrates cutting-edge financial technology solutions, tokenization concepts, and innovation playgrounds.

## 🌟 Overview

The **Priceless Experience Hub** is a premium digital experience that showcases Mastercard's financial innovation capabilities through an immersive, interactive interface. Built with modern web technologies, it features a unique "stadium" hero section, circular solution constellations, fintech innovation simulators, and editorial storytelling components.

## ✨ Features

### 🏟️ Hero Stadium
- Immersive full-screen hero experience with animated background elements
- Interactive call-to-action buttons for business solutions and innovation playground
- Dynamic visual effects with orbit-inspired animations

### 🌌 Solution Constellation
- Circular, orbit-based visualization of financial solutions
- Interactive solution cards with detailed modal views
- Categories: Payments, Data & Intelligence, Cybersecurity, Digital Identity, Loyalty & Engagement

### 🧪 Innovation Playground
- **Tokenization Simulator**: Interactive demonstration of payment tokenization flow
- **Stablecoin Sandbox**: Experiment with stablecoin mechanics and settlement
- **CBDC Explorer**: Central Bank Digital Currency simulation environment
- Real-time visualization of transaction flows and settlement layers

### 📰 Pill Carousel (News & Stories)
- Horizontal scrolling carousel with pill-shaped story cards
- Category filtering (Innovation, Partnerships, Insights, Regulation)
- Detailed story modals with rich content

### 🎨 Design Inspector
- Built-in design system inspector for developers and designers
- View design tokens: colors, typography, spacing, radii, shadows
- Component library reference with live examples
- Copy CSS variables and design tokens directly

### 🌍 Region & Currency Selector
- Multi-region support (North America, Europe, Asia Pacific, Latin America, Middle East & Africa)
- Currency localization with real-time conversion rates
- Persistent user preferences

### 🍪 Cookie Consent & Privacy
- GDPR/CCPA compliant cookie consent banner
- Granular consent categories (Essential, Analytics, Marketing, Personalization)
- Persistent consent management

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 with TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **AI Integration** | Google GenAI SDK |
| **Development** | ESLint, TypeScript strict mode |

## 📁 Project Structure

```
priceless-experience-hub/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── CookieConsentBanner.tsx
│   │   ├── DesignInspectorDrawer.tsx
│   │   ├── FooterDark.tsx
│   │   ├── HeaderNav.tsx
│   │   ├── HeroStadium.tsx
│   │   ├── InnovationPlayground.tsx
│   │   ├── PillCarousel.tsx
│   │   ├── RegionModal.tsx
│   │   ├── SolutionConstellation.tsx
│   │   ├── SolutionDetailModal.tsx
│   │   └── StoryModal.tsx
│   ├── data/
│   │   └── content.ts      # Solution data, stories, constants
│   ├── types.ts            # TypeScript type definitions
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── .gitignore              # Git ignore rules
├── .env.example            # Environment variables template
└── metadata.json           # Project metadata
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **yarn** 1.22+ or **pnpm** 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/priceless-experience-hub.git
cd priceless-experience-hub

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env

# Start development server
npm run dev
```

The development server will start at `http://localhost:3000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Clean build artifacts |
| `npm run lint` | Run TypeScript type checking |

## 🔧 Configuration

### Environment Variables

Create a `.env` file from `.env.example`:

```env
# Google Gemini API Key (for AI features)
VITE_GEMINI_API_KEY=your_api_key_here

# Optional: Analytics & Tracking
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Tailwind CSS Customization

The design system uses custom CSS variables defined in `src/index.css`:

```css
:root {
  /* Brand Colors */
  --color-brand-primary: #F79E1B;    /* Mastercard Orange */
  --color-brand-secondary: #EB001B;  /* Mastercard Red */
  --color-bg-primary: #F3F0EE;       /* Cream background */
  --color-text-primary: #141413;     /* Near black */
  
  /* Orbit System Colors */
  --color-orbit-1: #F79E1B;
  --color-orbit-2: #EB001B;
  --color-orbit-3: #006B3F;
  --color-orbit-4: #0052CC;
  --color-orbit-5: #7B2DFF;
}
```

## 🎨 Design System

The project implements Mastercard's **Orbit & Pill Design System**:

### Orbit System
- 5 concentric orbit levels representing solution categories
- Each orbit has distinct color, icon, and interaction pattern
- Animated orbital paths with particle effects

### Pill Components
- Rounded, capsule-shaped interactive elements
- Used for navigation, tags, story cards, and CTAs
- Consistent padding, typography, and hover states

### Typography
- **Primary**: Sofia Sans (Google Fonts)
- **Weights**: 300-900 (variable font)
- **Scale**: Fluid typography with clamp()

### Color Palette
- **Cream Base**: `#F3F0EE` - Warm, editorial background
- **Near Black**: `#141413` - Primary text
- **Mastercard Orange**: `#F79E1B` - Primary accent
- **Mastercard Red**: `#EB001B` - Secondary accent
- **Success Green**: `#006B3F` - Positive states
- **Trust Blue**: `#0052CC` - Information states
- **Innovation Purple**: `#7B2DFF` - Innovation highlights

## ♿ Accessibility

- **WCAG 2.2 AA** compliant
- Semantic HTML5 structure
- ARIA labels and roles on interactive elements
- Keyboard navigation support
- Focus management for modals and drawers
- Reduced motion support (`prefers-reduced-motion`)
- High contrast mode support
- Screen reader optimized content

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

## 📦 Deployment

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Build command: npm run build
# Publish directory: dist
```

### Docker Deployment

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🧪 Testing

```bash
# Run type checking
npm run lint

# Run unit tests (when implemented)
npm run test

# Run e2e tests (when implemented)
npm run test:e2e
```

## 🔒 Security

- **Content Security Policy** headers configured
- **XSS Protection** via React's built-in sanitization
- **HTTPS Only** in production
- **Environment Variables** for sensitive configuration
- **Dependency Scanning** via npm audit

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use functional components with hooks
- Maintain component modularity
- Write descriptive commit messages
- Update documentation for new features
- Ensure accessibility compliance

## 📄 License

This project is proprietary software developed for Mastercard. All rights reserved.

## 🙏 Acknowledgments

- **Mastercard** - Brand guidelines and design system
- **React Team** - React 19 and concurrent features
- **Vite Team** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide** - Beautiful open-source icons
- **Google Fonts** - Sofia Sans typeface

## 📞 Support

For questions, issues, or contributions:

- **Issues**: [GitHub Issues](https://github.com/girishlade111/priceless-experience-hub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/girishlade111/priceless-experience-hub/discussions)

---

**Built with ❤️ for the future of financial innovation**