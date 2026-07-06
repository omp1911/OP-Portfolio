# Om Patel - Data & DevOps Portfolio

## Original Problem Statement
Build a modern, premium personal portfolio website for Om Patel with refined dark theme that impresses HR/Managers/Companies.

## Design System

### Color Palette
- **Background Base**: `#0C0C0E`
- **Surface Cards**: `#131316`
- **Orange Accent**: `#D96C4A`
- **White Heading**: `#FFFFFF`
- **White Content**: `rgba(255,255,255,0.7)`
- **White Muted**: `rgba(255,255,255,0.5)`

### Typography Hierarchy
- **Headings**: Pure white `#FFFFFF`
- **Body/Content**: Subtle white `rgba(255,255,255,0.7)`
- **Muted**: Very subtle `rgba(255,255,255,0.5)`
- **Accents**: Orange `#D96C4A`

## Core Features

### Hero Section ✅
- 3D avatar with soft blended edges (radial gradient fade)
- Pure white name, subtle white bio
- Orange tagline

### Data Pipeline Diagram ✅ (Redesigned)
- **5 icons only**: Extract → Transform → Load → AI/ML → Analyze
- No circle nodes - just icons with labels
- Single continuous horizontal flow line
- **5 animated glowing particles** flowing continuously left to right
- Particles fade in/out with glow effect
- Smooth Framer Motion animations (repeat: Infinity)
- Orange icons: Extract, Load, Analyze
- White icons: Transform, AI/ML

### Experience Section ✅
- Timeline with orange line
- Static cards (no hover)
- White headings, subtle white content

### Skills/Projects/Education/Certifications ✅
- Consistent typography hierarchy
- Orange accents for labels/icons

### Contact Section ✅
- "transformed" and "analytics" in orange
- Request Resume → mailto:patelomr07@gmail.com

## Testing Results (Dec 2025)
- ✅ 100% frontend pass rate
- ✅ Pipeline animation verified (5 particles, continuous loop)
- ✅ Typography hierarchy verified
- ✅ Mobile responsive at 390px

## File Structure
```
/app/frontend/src/
├── assets/avatar-3d.png
├── components/
│   ├── About.jsx (DataPipelineVisualization with animated particles)
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
└── App.css
```

## Backlog
- [ ] SEO & Metadata
- [ ] GitHub profile link
- [ ] Backend integration

## Contact
- Email: patelomr07@gmail.com
- Phone: +1 (647) 914-2834
- LinkedIn: linkedin.com/in/om-patel
