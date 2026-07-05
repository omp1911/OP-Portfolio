# Om Patel — Data Engineer Portfolio

## Original Problem Statement
Build a personal portfolio website for Om Patel (Data Engineer) with a clean, minimal design using real resume data.

## Design Requirements (User Specified)
- **Single Style**: Pure minimalism (NOT mixed skeuomorphism/minimalism)
- **Typography**: Simple, clean fonts (Outfit + IBM Plex Sans) — no fancy/decorative fonts
- **Colors**: Black and white color scheme
- **Content**: Minimal and straightforward — no redundant information
- **Feature**: "Request Resume" button that opens email draft to patelomr07@gmail.com

---

## What's Been Implemented

### December 2025 - Complete Redesign

**✅ Pure Minimal Swiss Design**
- Clean white background with black text
- Outfit font for headings, IBM Plex Sans for body, IBM Plex Mono for code
- Subtle section borders, no decorative elements
- Scroll reveal animations

**✅ Sections**
- Hero: Name, title, location, summary, Request Resume + Get in Touch buttons
- About: Bio, education (Sheridan College, BITS Pilani), certifications
- Experience: EllisDon (Data Engineer), DIGIBEE (Data Engineering Intern)
- Projects: 3 project cards with metrics (Kafka Migration, Cloud Composer, Fabric ELT)
- Skills: 5 categories (Languages, Data Engineering, Cloud, Databases, DevOps)
- Contact: Email, phone, LinkedIn, location, Request Resume button
- Footer: Copyright + Back to top

**✅ Request Resume Feature**
- Button opens mailto: with pre-drafted professional email
- Subject: "Requesting Resume - Data Engineer Role"
- Available in header, hero, mobile menu, and contact section

**✅ Mobile Responsive**
- Hamburger menu for mobile navigation
- Properly scaled typography and spacing
- Tested on 390px mobile width

**✅ Testing**
- 100% frontend test pass rate
- All data-testids verified
- Navigation, mailto links, scroll animations all working

---

## Architecture

```
/app/frontend/src/
├── components/
│   ├── Header.jsx      # Fixed nav with Request Resume
│   ├── Hero.jsx        # Main hero section
│   ├── About.jsx       # Bio + education + certs
│   ├── Experience.jsx  # Work history
│   ├── Projects.jsx    # Project cards
│   ├── Skills.jsx      # Technical skills grid
│   ├── Contact.jsx     # Contact info
│   └── Footer.jsx      # Footer
├── data/
│   └── mockData.js     # All portfolio data (single source of truth)
├── hooks/
│   └── useScrollReveal.js  # Intersection observer for animations
├── App.js
└── App.css             # Global styles with CSS variables
```

---

## Backlog (Future Tasks)

### P2 - Nice to Have
1. **Contact Form Backend**: Integrate SendGrid/Resend to make contact form functional
2. **SEO & Metadata**: Update index.html title, meta tags, favicon to "Om Patel - Data Engineer"
3. **Resume PDF Download**: Add downloadable PDF resume option
4. **Blog Section**: Add technical blog/articles section
5. **Analytics**: Add Google Analytics or similar

### P3 - Enhancements
- Dark mode toggle
- Custom domain setup
- Performance optimization (lazy loading, image optimization)
- Accessibility improvements (ARIA labels, keyboard navigation)

---

## Data Sources
- All data is hardcoded in `/app/frontend/src/data/mockData.js`
- No backend API — static site
- Resume email: patelomr07@gmail.com
