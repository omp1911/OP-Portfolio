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
- [x] Implemented proper `position: sticky` scroll-hijacking mechanism (desktop only)
- [x] Added scroll accumulator to prevent accidental fast skipping
- [x] Fixed: Mobile touch navigation not working - completely rewrote mobile approach
- [x] Mobile: Removed sticky positioning (doesn't work well on mobile browsers)
- [x] Mobile: Dot indicators now positioned below section title (properly accessible)
- [x] Mobile: Added swipe hint text for user guidance
- [x] Increased marquee speed on mobile (30s → 12s)
- [x] Simplified scroll logic with separate desktop/mobile behavior

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


## Changelog
- **2026-05-22 — Hero image robustness + branding cleanup**
  - Bundled hero portrait as a local webpack asset (`src/assets/hero.png`, imported in `Hero.jsx`) so it ships inside `build/static/media/` and is served from the same origin as the rest of the GitHub Pages build. Eliminates breakage from third-party host policies, blockers, or expired CDN URLs.
  - Removed the "Made with Emergent" badge HTML and the `emergent-main.js` script from `public/index.html`.
  - Updated `<title>` to "Om Patel | Data Engineer" and meta description to portfolio copy.
  - Verified: `grep` on production `build/index.html` returns 0 occurrences of badge/script; image asset present at `build/static/media/hero.HASH.png`.

- **2026-05-22 — Animated intro hero with TTS voiceover**
  - New `IntroHero.jsx` sits as the first full-screen section before the existing `Hero`. State machine: `idle` → `speaking` → `done`.
  - Pre-recorded TTS audio generated with OpenAI `tts-1-hd` voice `onyx` via Emergent LLM key (script: `/app/backend/scripts/gen_intro_audio.py`). Output bundled as static asset: `/app/frontend/public/audio/intro.mp3` (~164 KB).
  - Exact spoken line: "Hi, I am Om. I build clean, production data systems using the modern data stack. Nice to e-meet you. Scroll down to know more about me."
  - Click-to-start splash ("Tap to meet Om") is required due to browser autoplay policies. On click: portrait breathes, blue ping ring pulses, hand emoji waves (`intro-wave` keyframe), and an equalizer of blue bars animates. No on-screen captions (per user's "not written on screen" preference).
  - After audio `onEnded`, "Scroll down to know more about me" + bouncing chevron appears.
  - `Header.jsx` updated: hidden (`opacity-0`, `-translate-y-full`, `pointer-events-none`) until `scrollY > 55% of viewport`, so it doesn't intrude during the intro.
  - Plays every visit (no localStorage gating, as requested).
  - Animations added in `App.css`: `intro-wave`, `intro-ping`, `intro-breathe`, `intro-bar`, `intro-fade-in`.
  - `EMERGENT_LLM_KEY` added to `backend/.env` for the one-off TTS script (no runtime backend calls — MP3 is static).

- **2026-05-22 — Cinematic intro hero v2 (animated character + themed backdrop + hover autoplay)**
  - Replaced the click-splash with a "hover to autoplay" pattern. Audio fires on the **first user interaction** with priority on `mouseenter` over the hero stage (desktop), with fallbacks: `scroll`, `touchstart`, `keydown`, `click`. Feels like genuine autoplay because users almost always move the mouse / scroll within a few hundred ms.
  - Generated two new visual assets with **Gemini Nano Banana (image-edit)** via Emergent LLM key:
    - `src/assets/hero-waving.png` — same character (face/hair/beard/jacket identical, image-edit on the existing portrait) but with the right arm raised mid-wave. Background was a stark white from the model; cut out via PIL threshold-based RGBA mask (script in `/tmp/cutout.py`).
    - `src/assets/office-bg.jpg` — cinematic dark data-engineer's office: bookshelves on both sides, ultrawide monitor showing data dashboards/charts, ambient blue accent lighting, depth-of-field bokeh.
  - The hero is now bottom-aligned (standing in the office). Cross-fades from `hero.png` (idle, head & shoulders) → `hero-waving.png` (full upper-body, raised hand) when audio starts — the cross-fade visually reads as Om actively raising his hand.
  - Background animates: slow 28s ken-burns zoom on the office image, drifting blue/cyan accent orbs, radial vignette + bottom fade to keep him readable.
  - While speaking: `intro-wave-pose` keyframe applies a subtle upper-body sway/bob so the raised hand reads as actively waving; equalizer bars animate underneath; no on-screen captions.
  - After audio ends: hand lowers (cross-fade back to idle frame), "Scroll down to know more about me" + bouncing chevron appears.
  - New CSS keyframes in `App.css`: `intro-kenburns`, `intro-orb-a`, `intro-orb-b`, `intro-wave-pose`, `intro-hint-pulse`.
  - Old splash button and emoji-only wave were removed.
