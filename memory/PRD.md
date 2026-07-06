# Om Patel - Data & DevOps Portfolio

## Original Problem Statement
Build a modern, premium personal portfolio website for Om Patel with refined dark theme that impresses HR/Managers/Companies.

## Design System

### Strict 2-Color Font System
- **Orange #D96C4A** - Accents, labels, highlights, icons
- **White #FFFFFF** - Main text, headings, body copy

### Theme
- Dark base: `#0C0C0E`
- Surface cards: `#131316`
- Minimal shadows, no glow effects
- No hover effects on large containers

### Typography
- Headings: Cabinet Grotesk
- Body: Manrope
- Monospace: JetBrains Mono

## Core Features

### Hero Section ✅
- 3D avatar displayed naturally (NO circular crop, NO border)
- White name "Om Patel"
- Orange tagline "DATA ENGINEER · ANALYTICS · DEVOPS"
- Request Resume + Get in Touch buttons

### Header/Navigation ✅
- "Om Patel" in white
- Navigation links in white, hover to orange
- Orange Resume button

### About Section ✅
- Bio text in white
- Data Pipeline diagram with fork:
  - Extract → Transform → Load → (AI/ML, Analyze)
  - Animated data packets flowing

### Experience Section ✅
- Timeline with orange line and dots
- Static cards (NO hover effects)
- White text, orange company names

### Skills Section ✅
- 3 categorized cards
- Orange category labels
- White skill pills

### Projects Section ✅
- Project cards with orange result badges
- Hover only on small elements (arrow icon)

### Education & Certifications ✅
- Separate containers
- Orange icons (GraduationCap, Award)
- White text

### Contact Section ✅
- Phrase: "Got data stuck and need to have it transformed with analytics?"
- "transformed" and "analytics" in orange
- Request Resume → mailto:patelomr07@gmail.com

## Technology Stack
- React.js, TailwindCSS
- Framer Motion (smooth animations)
- Lucide React icons

## Design Inspirations
- samxie.net
- neumorph-dashboard.webflow.io
- tasteskill.dev
- impeccable.style

## What's Been Implemented (Dec 2025)

### Phase 1 - Initial Setup ✅
- Project scaffolding
- Dark neomorphism base

### Phase 2 - Premium Redesign ✅
- Strict 2-color system (orange + white)
- 3D avatar (natural display)
- Pipeline diagram with fork
- Removed hover from large containers
- Minimized glow effects

### Testing ✅
- 100% frontend pass rate
- Desktop and mobile verified
- 2-color system verified

## File Structure
```
/app/frontend/src/
├── assets/
│   └── avatar-3d.png (3D rendered avatar)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx (natural avatar)
│   ├── About.jsx (pipeline with fork)
│   ├── Experience.jsx (no hover)
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/mockData.js
├── App.js
├── App.css (2-color system)
└── index.css
```

## Backlog

### P1
- [ ] SEO & Metadata (title, favicon)
- [ ] Add GitHub profile link

### P2
- [ ] Backend integration
- [ ] Admin panel
- [ ] Blog section

## Contact
- Email: patelomr07@gmail.com
- Phone: +1 (647) 914-2834
- LinkedIn: linkedin.com/in/om-patel
- Location: Ontario, Canada
