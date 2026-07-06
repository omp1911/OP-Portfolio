# Om Patel - Data & DevOps Portfolio

## Original Problem Statement
Build a modern, premium personal portfolio website for Om Patel with refined dark theme that impresses HR/Managers/Companies.

## Design System

### Color Palette
- **Background Base**: `#0C0C0E`
- **Surface Cards**: `#131316`
- **Orange Accent**: `#D96C4A` (labels, highlights, icons, buttons)
- **White Heading**: `#FFFFFF` (headings, titles)
- **White Content**: `rgba(255,255,255,0.7)` (body text, paragraphs)
- **White Muted**: `rgba(255,255,255,0.5)` (dates, secondary info)

### Typography Hierarchy
- **Headings (H1-H4)**: Pure white `#FFFFFF`
- **Body/Content**: Subtle white `rgba(255,255,255,0.7)`
- **Secondary/Muted**: Very subtle `rgba(255,255,255,0.5)`
- **Accents**: Orange `#D96C4A`

### Fonts
- Headings: Cabinet Grotesk
- Body: Manrope
- Monospace: JetBrains Mono

## Core Features

### Hero Section ✅
- 3D avatar with **soft blended edges** (radial gradient fade)
- Pure white name "Om Patel"
- Subtle white bio text (70% opacity)
- Orange tagline "DATA ENGINEER · ANALYTICS · DEVOPS"

### Navigation ✅
- "Om Patel" brand in white
- Links in subtle white (70%), hover to orange
- Orange Resume button

### About Section ✅
- Pure white heading
- Subtle white bio paragraphs
- Data Pipeline diagram with fork: Extract → Transform → Load → (AI/ML, Analyze)

### Experience Section ✅
- Pure white role titles
- Orange company names
- Subtle white bullet points
- No hover effects on cards

### Skills Section ✅
- Pure white heading
- Orange category labels
- Subtle white skill pills

### Projects Section ✅
- Pure white project titles
- Orange result badges
- Subtle white descriptions

### Education & Certifications ✅
- Separate containers
- Orange icons
- White titles, subtle white degrees

### Contact Section ✅
- Pure white heading
- Phrase: "Got data stuck and need to have it transformed with analytics?"
  - "transformed" and "analytics" in orange
- Request Resume → mailto:patelomr07@gmail.com

## Technology Stack
- React.js, TailwindCSS
- Framer Motion
- Lucide React icons

## Testing Results (Dec 2025)
- ✅ 100% frontend pass rate
- ✅ Typography hierarchy verified (white headings, subtle white content)
- ✅ Avatar blend verified (radial gradient fade)
- ✅ Orange accents correctly applied
- ✅ Mobile responsive at 390px

## File Structure
```
/app/frontend/src/
├── assets/avatar-3d.png
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx (avatar-blend class)
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Certifications.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.css (avatar-blend gradient)
└── index.css
```

## Backlog
- [ ] SEO & Metadata
- [ ] Add GitHub profile link
- [ ] Backend integration

## Contact
- Email: patelomr07@gmail.com
- Phone: +1 (647) 914-2834
- LinkedIn: linkedin.com/in/om-patel
