# Om Patel - Data & DevOps Portfolio

## Original Problem Statement
Build a modern, premium personal portfolio website for Om Patel with Luxury Dark Neumorphism aesthetic that impresses HR/Managers/Companies.

## User Personas
- **Primary**: Hiring managers and recruiters looking for Data Engineers
- **Secondary**: Potential collaborators and freelance clients needing data platform work

## Core Requirements

### Theme & Styling ✅ (Redesigned Dec 2025)
- **Luxury Dark Neumorphism** with subtle color palette
- Dark base: `#0C0C0E` (not pure black)
- Surface cards: `#131316`
- Accent orange: `#D96C4A`
- Accent beige: `#D4C4A8`
- Custom fonts: Cabinet Grotesk (headings), Manrope (body)
- Neumorphic shadows: `-4px -4px 10px rgba(255,255,255,0.02), 4px 4px 10px rgba(0,0,0,0.4)`

### Hero Section ✅
- User's actual portrait (hero-om-converted.jpg) in circular avatar
- "Data Engineer · Analytics · DevOps" tagline in beige
- Clean "Om Patel" name (NO gradient effect)
- Request Resume + Get in Touch buttons
- NO "View Pipeline" button

### Header/Navigation ✅
- Shows "Om Patel" text (NOT "OM_P.")
- Navigation: About, Experience, Skills, Projects, Contact
- Resume button with orange accent
- Glass header on scroll

### About Section ✅
- Bio text on left
- Elegant Data Pipeline diagram on right with 4 stages:
  - Extract → Transform → Load → Analyze
- Neumorphic card styling

### Experience Section ✅
- Vertical timeline with orange gradient line
- Neomorphic cards for EllisDon and DIGIBEE
- Beige border on bullet points
- Skill pills at bottom

### Skills Section ✅
- Three categorized neomorphic cards:
  - Data Engineering
  - Analytics
  - Cloud & DevOps
- Rounded pill styling for skills

### Projects Section ✅
- Grid of project cards with result badges
- Orange accent on badges
- Tech stack tags at bottom

### Education Section ✅ (Separate Container)
- Sheridan College
- BITS Pilani
- Neomorphic card styling

### Certifications Section ✅ (Separate Container)
- Azure Data Fundamentals (DP-900)
- Palantir Certified Foundry Data Engineer
- Neomorphic card styling

### Contact Section ✅
- **Required Phrase**: "Got data stuck and need to have it transformed with analytics?"
  - "transformed" in orange
  - "analytics" in beige
- Contact info grid
- Request Resume button → mailto:patelomr07@gmail.com

## Technology Stack
- **Frontend**: React.js, TailwindCSS
- **Animations**: Framer Motion (smooth easing: [0.16, 1, 0.3, 1])
- **Icons**: Lucide React
- **Data**: Static mockData.js

## Design Inspirations
- https://samxie.net/ - Clean minimal portfolio
- https://neumorph-dashboard.webflow.io/ - Proper neomorphism
- https://www.tasteskill.dev/ - Modern polished design
- https://impeccable.style/designing/ - Smooth animations

## What's Been Implemented (Dec 2025)

### Phase 1 - Initial Dark Neomorphism ✅
- Created design guidelines
- Installed framer-motion
- Converted user's hero image

### Phase 2 - Premium Redesign ✅
- Redesigned color scheme (cyan/purple → orange/beige)
- Removed "OM_P." branding
- Removed "View Pipeline" button
- Removed gradient effect on name
- Implemented proper neumorphic shadows
- Fixed responsive text overflow
- Updated all 10 components with new design
- Integrated user's actual photo

### Testing ✅
- 100% frontend success rate (12/12 features)
- Desktop (1920x1080) and mobile (390x844) verified
- No horizontal overflow on mobile

## Prioritized Backlog

### P1 - Near-term
- [ ] SEO & Metadata updates (title, favicon, meta tags for Om Patel)
- [ ] Add GitHub profile link
- [ ] Add project demo URLs

### P2 - Future
- [ ] Backend integration with FastAPI/MongoDB
- [ ] Admin panel for content management
- [ ] Blog section
- [ ] Analytics integration

## File Structure
```
/app/frontend/src/
├── assets/
│   └── hero-om-converted.jpg (User's photo)
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/
│   └── mockData.js
├── App.js
├── App.css
└── index.css
```

## Contact Info
- **Email**: patelomr07@gmail.com
- **Phone**: +1 (647) 914-2834
- **LinkedIn**: linkedin.com/in/om-patel
- **Location**: Ontario, Canada
