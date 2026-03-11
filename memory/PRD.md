# Personal Portfolio Website - Product Requirements Document

## Original Problem Statement
Build a modern, sleek, personal portfolio website inspired by Apple's product pages. Features a classic black, white, and grey color scheme, large typography, and smooth, premium animations.

## Core Requirements
- **Theme:** Dark Grey/Black background (#0f0f0f) with white and grey text
- **Layout:** Multi-section single-page application with floating design (no containers/cards)
- **Header:** Center-aligned navigation for desktop, functional mobile menu with dark overlay
- **Hero Section:** Split layout with text on left, professional photo on right
- **Work Experience & Portfolio:** Vertical scroll-hijacking with fixed background, content slides in/out
- **Skills Section:** Horizontal marquee animation
- **Achievements Section:** Simple grid layout
- **Animations:** Smooth scroll animations with slide-in effects

## Architecture
```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── ExperienceScroll.jsx  - Scroll-hijacking for work experience
│   │   ├── ProjectsScroll.jsx    - Scroll-hijacking for portfolio
│   │   ├── Header.jsx            - Navigation with mobile menu
│   │   ├── Hero.jsx              - Hero section
│   │   ├── SkillsMarquee.jsx     - Skills horizontal scroll
│   │   ├── AchievementsGrid.jsx  - Achievements display
│   │   └── Contact.jsx           - Contact form
│   ├── data/mockData.js          - All site content (MOCKED)
│   ├── App.js                    - Main component
│   └── App.css                   - Global styles and animations
```

## Completed Features (March 2026)
- [x] Full frontend portfolio implementation
- [x] Apple-inspired black/white/grey theme
- [x] Scroll-hijacking for Work Experience section (sticky positioning)
- [x] Scroll-hijacking for Portfolio section (sticky positioning)
- [x] Skills marquee animation
- [x] Mobile navigation with dark overlay
- [x] Smooth slide-in/out animations
- [x] Dot indicators for navigation within sections
- [x] Progress indicator (e.g., "1/4")
- [x] Fixed background during scroll-hijacking sections

## Bug Fixes (March 11, 2026)
- [x] Fixed: Page skipping all work experiences when scrolling fast
- [x] Fixed: Background scrolling while in Work Experience/Portfolio sections
- [x] Implemented proper `position: sticky` scroll-hijacking mechanism
- [x] Added scroll accumulator to prevent accidental fast skipping
- [x] Fixed: Mobile touch navigation not working - added touch event handlers
- [x] Added mobile dot indicators for Work Experience and Portfolio sections
- [x] Increased marquee speed on mobile (30s → 12s)
- [x] Simplified scroll logic for better mobile performance

## Technical Implementation Notes
- **Scroll Hijacking:** Uses `position: sticky` with `top: 0` to lock the content viewport
- **Section Height:** Dynamically calculated as `(items - 1) * 100vh` to create scroll space
- **Wheel Event:** Captures wheel events, prevents default, and cycles through items
- **Transition Lock:** 500ms lock after each item change to prevent rapid cycling

## Data Status
⚠️ **ALL DATA IS MOCKED** - Content served from `/app/frontend/src/data/mockData.js`

## Backlog/Future Tasks
- [ ] Backend integration with FastAPI + MongoDB (P1 - User declined for now)
- [ ] Functional contact form with email sending (P2)
- [ ] Content management system / admin panel (P3)
- [ ] SEO optimization (P3)

## Deployment
Ready for Emergent native deployment. No backend required.

### GitHub Pages Deployment (Added March 11, 2026)
**Files modified:**
- `package.json` - Added `homepage`, `predeploy`, and `deploy` scripts
- `.github/workflows/deploy.yml` - GitHub Actions for auto-deploy on push

**Setup Steps:**
1. Push code to GitHub repository
2. Update `homepage` in `package.json` with your actual URL: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`
3. Go to repo Settings → Pages → Select branch: `gh-pages`, folder: `/` (root)
4. Every push to `main` will auto-deploy via GitHub Actions

**Manual deploy:** `yarn deploy` (runs build then deploys to gh-pages branch)
