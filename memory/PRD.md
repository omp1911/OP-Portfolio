# Om Patel - Data & DevOps Portfolio

## Original Problem Statement
Build a modern, sleek tech-focused personal portfolio website with Dark Neomorphism aesthetic for Om Patel, showcasing his experience as a Data Engineer with Analytics and DevOps expertise.

## User Personas
- **Primary**: Hiring managers and recruiters looking for Data Engineers
- **Secondary**: Potential collaborators and freelance clients needing data platform work

## Core Requirements

### Theme & Styling ✅
- Dark Neomorphism theme (#1a1a2e base)
- Soft cyan (#00f2fe) and purple (#9d4cdd) accent glows
- Custom fonts: Outfit (headings), IBM Plex Sans (body), JetBrains Mono (mono)
- Tactile neomorphic cards with box shadows

### Hero Section ✅
- User's portrait image with floating animated data nodes
- "Data Engineer · Analytics · DevOps" tagline
- "Hi, I'm Om Patel" + "Architecting Data Flows" headlines
- Request Resume and View Pipeline CTA buttons

### About Section ✅
- Bio card describing 5+ years of experience
- **Animated SVG Data Pipeline Diagram** showing:
  - Source Systems → Ingestion → Transform → Data Warehouse
  - Framer Motion animated data packets flowing along path
  - Neomorphic node circles with icons

### Experience Section ✅
- Vertical timeline with glowing cyan line
- Neomorphic cards for each role (EllisDon, DIGIBEE)
- Purple border accent on bullet points
- Skill tiles at bottom of each card

### Skills Section ✅
- Three categorized neomorphic cards:
  - Data Engineering (Airflow, Kafka, Spark, dbt, etc.)
  - Analytics (BigQuery, Synapse, Snowflake, etc.)
  - Cloud & DevOps (GCP, Azure, AWS, Docker, etc.)

### Projects Section ✅
- Grid of project cards with result badges
- Tech stack tags at bottom
- Hover lift animations

### Education Section ✅ (Separate Container)
- Sheridan College - Computer System Technician
- BITS Pilani - Bachelor of Computer Science

### Certifications Section ✅ (Separate Container)
- Azure Data Fundamentals (DP-900)
- Palantir Certified Foundry Data Engineer

### Contact Section ✅
- **Phrase**: "Got data stuck and need to have it transformed with analytics?"
- Contact info grid (Email, Phone, LinkedIn, Location)
- **Request Resume button** → mailto:patelomr07@gmail.com

### Header & Navigation ✅
- Glass-morphism header with backdrop blur
- Desktop nav with smooth scroll to sections
- Mobile hamburger menu with slide-in animation
- "OM_P." branded logo

### Footer ✅
- Copyright with year
- Back to top button

## Technology Stack
- **Frontend**: React.js, TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: Static mockData.js (no backend yet)

## What's Been Implemented (Dec 2025)

### Phase 1 - Dark Neomorphism UI ✅
- [x] Updated App.css with CSS variables and neomorphic styles
- [x] Updated mockData.js with Om Patel's info
- [x] Created design_guidelines.json
- [x] Installed framer-motion
- [x] Converted and moved hero image to assets/

### Phase 2 - Component Rewrite ✅
- [x] Header.jsx - Glass header with Framer Motion animations
- [x] Hero.jsx - Two-column layout with portrait and floating nodes
- [x] About.jsx - Bento grid with bio and pipeline diagram
- [x] DataPipelineDiagram.jsx - Animated SVG with moving data packets
- [x] Experience.jsx - Timeline with neomorphic cards
- [x] Skills.jsx - Categorized skill tiles
- [x] Projects.jsx - Project cards with result badges
- [x] Education.jsx - Separate education container
- [x] Certifications.jsx - Separate certifications container
- [x] Contact.jsx - Contact info with requested phrase
- [x] Footer.jsx - Styled footer with back-to-top

### Testing ✅
- [x] All 12 features verified on desktop (1920x1080) and mobile (390x844)
- [x] 100% frontend success rate
- [x] No console errors

## Prioritized Backlog

### P1 - Near-term
- [ ] SEO & Metadata updates (title, meta tags, favicon)
- [ ] Add more social links (GitHub, Twitter)
- [ ] Add project links/demo URLs

### P2 - Future
- [ ] Backend integration with FastAPI/MongoDB for dynamic content
- [ ] Admin panel to update portfolio data
- [ ] Blog section
- [ ] Analytics integration (Google Analytics)

## File Structure
```
/app/frontend/src/
├── assets/
│   └── hero-om-converted.jpg
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── DataPipelineDiagram.jsx
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
