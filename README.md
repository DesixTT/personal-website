# Mihnea Vodă - Interactive Developer Portfolio

A developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

## 🎨 Design System & Theme
- **Primary Background**: Dark Slate (`#090D16`)
- **Accent Glow**: Emerald Green (`#10B981` / `#34D399`)
- **Card Styling**: Glassmorphic blur (`backdrop-blur-md bg-slate-900/60 border border-slate-800`)
- **Typography & Badges**: Crisp monospace tags (`JetBrains Mono` / `ui-monospace`)

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run local development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Architecture
```
├── app/
│   ├── globals.css      # Custom scrollbars, Tailwind directives, dark theme tokens
│   ├── layout.tsx       # Root layout with SEO metadata and OpenGraph tags
│   └── page.tsx         # Single-page portfolio application with interactive state
├── package.json         # Next.js 14, React 18, Framer Motion, Lucide Icons, Tailwind
├── postcss.config.js    # PostCSS Tailwind & Autoprefixer configuration
├── tailwind.config.js   # Custom dark slate theme, emerald accents, and keyframes
├── tsconfig.json        # TypeScript configuration with @/* path aliases
└── next.config.mjs      # Next.js configuration
```
