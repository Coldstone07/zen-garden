# Kairos Path Website - Quick Reference Guide

## Project at a Glance

**Type:** Landing page for transformational coaching program
**Architecture:** Hybrid (Static HTML + React/Next.js)
**Total Code:** ~63,000 lines
**Primary File:** `/index.html` (7,636 lines)

---

## File Organization Quick Map

### Most Important Files
| File | Lines | Purpose | Notes |
|------|-------|---------|-------|
| `/index.html` | 7,636 | Main landing page | Contains all content + styles |
| `/js/main.js` | 369 | App initialization | Entry point for interactions |
| `/styles/main.css` | 571 | Core styles | CSS variables and base classes |
| `/styles/transformation-ecosystem.css` | 3,141 | Ecosystem styling | 46% of all CSS - BLOATED |
| `/landing/pages/index.js` | 40,009 | React version | Duplicate of HTML content |

### JavaScript Modules
- `main.js` - Initialization & orchestration
- `interactions.js` - UI interactions & keyboard navigation
- `dynamic-content.js` - Content management & analytics
- `transformation-ecosystem.js` - Particle animations
- `adaptive-contrast.js` - DISABLED (performance)
- `three-animation.js` - 3D animations (optional)

### CSS Files
- `main.css` - Core & utilities
- `components.css` - Component styles
- `responsive.css` - Media queries
- `transformation-ecosystem.css` - Ecosystem-specific (CONSOLIDATE)

---

## 13 Main Page Sections

```
1. HERO                    - Headline & CTA
2. DIVISION TO UNITY       - Problem statement with 3D/5D consciousness
3. MIRROR APPROACH         - Philosophy & four pillars
4. METHODOLOGY            - 7 expandable accordions (phases + modalities)
5. WHAT MAKES DIFFERENT   - Comparison panels
6. DEEP DIVE              - Detailed framework descriptions
7. JOURNEY                - Visual pathway
8. PROGRAM                - Program structure details
9. STORIES                - 4 client success stories
10. RESULTS               - 3-column outcome grid
11. GUIDES                - Authority/expertise display
12. DISCOVERY FORM        - Email signup
13. FOOTER                - Contact info
```

---

## Color System

```css
/* Light Colors (Text) */
--moonlight-primary: #F7F3E9      /* Off-white */
--moonlight-secondary: #EDE7D3    /* Warm white */
--moonlight-muted: #D4CDB7        /* Gray */
--moonlight-accent: #A5968A       /* Earth tone */

/* Dark Colors (Background) */
--cosmic-void: #0A0A0F            /* Deep black */
--cosmic-depth: #13131A           /* Dark blue-gray */
--cosmic-surface: #1C1C26         /* Lighter dark */

/* Glass Colors (5-18% opacity) */
--glass-primary: rgba(247, 243, 233, 0.1)
--glass-secondary: rgba(247, 243, 233, 0.05)
--glass-border: rgba(247, 243, 233, 0.15)
--glass-highlight: rgba(247, 243, 233, 0.18)

/* Accent Colors */
--accent-primary: #C8A882         /* Gold */
--accent-secondary: #8B7A6B       /* Brown */
--accent-interactive: #E6D0B3     /* Light gold */
```

---

## Key CSS Classes

| Class | Usage | Count |
|-------|-------|-------|
| `.glass-panel` | Main containers | 31 |
| `.accordion-trigger` | Accordion buttons | 7 |
| `.accordion-content` | Accordion content | 7 |
| `.fade-in` | Scroll animation | Many |
| `.slide-up` | Scroll animation | Many |
| `.glass-button-primary` | Primary buttons | ~5 |
| `.cosmic-section` | Section wrapper | 13 |
| `.moonlight-*` | Text colors | Various |

---

## Repeated Content Patterns

### Pattern 1: Story Cards (4x)
```html
<div class="glass-panel story-profile-card">
  <div class="photo-placeholder">📸</div>
  <div class="p-8">
    <p class="font-bold">"{{quote}}"</p>
    <p class="moonlight-secondary">{{narrative}}</p>
    <div class="glass-subtle">{{outcome}}</div>
  </div>
</div>
```
**Current:** 425 lines (hardcoded)
**Could be:** 50 lines + JSON data

---

### Pattern 2: Accordion Items (7x)
```html
<button class="accordion-trigger" data-phase="1">
  Phase 1: DISCOVER
</button>
<div class="accordion-content" id="phase-1-content">
  {{content}}
</div>
```
**Current:** 950 lines (hardcoded)
**Could be:** 150 lines + JSON data

---

### Pattern 3: Section Headers (13x)
```html
<h2 class="text-4xl md:text-5xl font-bold">{{title}}</h2>
<p class="text-xl md:text-2xl moonlight-primary">{{subtitle}}</p>
```
**Current:** 50 lines (repeated)
**Could be:** Single template

---

## Consolidation Opportunities Summary

### Quick Wins (< 2 hours each)
- [ ] Extract story data to JSON → Save 375 lines (88%)
- [ ] Merge accordion handlers → Save 38 lines (52%)
- [ ] Remove disabled code → Save 500 lines
- [ ] Extract section headers → Save 50 lines

### Medium Effort (2-4 hours each)
- [ ] Extract modality data → Save 700 lines (87%)
- [ ] Consolidate CSS files → Save 500-800 lines
- [ ] Extract phase data → Save 150 lines

### Major Refactor (8+ hours)
- [ ] Unify HTML and React versions
- [ ] Build component library
- [ ] Create centralized data management

### Estimated Total Savings: 40-50% code reduction

---

## Animation System

### CSS Animations
- Fade-in on scroll (`.fade-in.visible`)
- Slide-up on scroll (`.slide-up.visible`)
- Pulsing text glow (`.integrated-wholeness-text`)
- Hover effects on glass panels

### JavaScript Animations
- Particle system (transformation-ecosystem.js)
- Energy flow paths (4 SVG paths in React)
- Scroll-based opacity changes
- RequestAnimationFrame for smooth 60fps

### Accessibility
- `prefers-reduced-motion` detected and respected
- All animations can be disabled for accessibility

---

## Performance Notes

### Disabled Features
- `adaptive-contrast.js` - Disabled due to continuous DOM updates causing lag
- `three-animation.js` - May be unused

### Performance Optimizations
- RequestAnimationFrame for animations
- Intersection Observer for scroll triggers
- Lazy loading of animations
- Debounced form submission (1s)

### Performance Issues to Address
- Main HTML file is very large (7,636 lines)
- transformation-ecosystem.css is bloated (3,141 lines)
- Dual implementation creates redundancy
- No code splitting

---

## Accessibility Features

- ✓ ARIA labels on interactive elements
- ✓ Role attributes (main, button, region)
- ✓ Skip-to-main link
- ✓ Keyboard navigation support
- ✓ Screen reader optimizations
- ✓ Semantic HTML structure
- ✓ Reduced motion support
- ✓ Proper heading hierarchy

---

## Content Data

### Stories (4 total)
- Jacqui - Breakthrough & play
- Donald - Grief & connection
- Ajay - Mind-to-body integration
- Antonia - Empty nest to authenticity

### Phases (3 total)
- DISCOVER (4-6 weeks)
- INTEGRATE (6-8 weeks)
- ACTUALIZE (Ongoing)

### Modalities (4 total)
- Psycho-Somatic Work
- Energy Clearing & Transformation
- Ancestral & Systemic Healing
- Consciousness & Integral Framework

### Outcomes (6 total)
- Sleep Returns
- Presence With People
- Clarity On What Matters
- Purpose Without Burning Out
- Ability To Stop Running
- Recognition You're Human

---

## Common Tasks

### Update a Story
**Current (Hard):** Edit 100+ lines in index.html
**Proposed (Easy):** Edit JSON in `/data/stories.json`

### Add a New Modality
**Current (Hard):** Copy-paste 200 lines, update IDs, register in JS
**Proposed (Easy):** Add JSON object, done

### Change Button Styling
**Current:** Find across multiple CSS files
**Proposed:** Single `.glass-button-primary` definition

### Add a Section
**Current:** Copy 50-line header, build content, register in nav
**Proposed:** Use section header template, add content

---

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev      # or: npm run start

# Build for production
npm run build

# Watch CSS changes
npm run watch

# Lint JavaScript
npm run lint

# Optimize/minify
npm run optimize
```

---

## Technologies Used

| Category | Technology |
|----------|-----------|
| **Markup** | HTML5 |
| **Styling** | CSS3, Tailwind CSS, Custom CSS |
| **JavaScript** | Vanilla JS, React, Next.js |
| **Animation** | CSS Keyframes, RAF, Three.js (optional) |
| **Build** | Node.js, npm, PostCSS |
| **Fonts** | Google Fonts (Lora, Manrope) |
| **Server** | Python (dev), Next.js (prod) |

---

## Key Metrics

| Metric | Value |
|--------|-------|
| Total LOC | ~63,000 |
| HTML Lines | 7,636 |
| CSS Lines | 6,698 |
| JS Lines | ~2,200 |
| React Lines | 40,009 |
| Sections | 13 |
| Accordions | 7 |
| Stories | 4 |
| Pages | 2 (HTML + React) |

---

## Duplication Summary

### Content Duplication
| Item | Instances | Markup | Potential Savings |
|------|-----------|--------|------------------|
| Story cards | 4 | 425 lines | 375 lines (88%) |
| Modality accordions | 4 | 800 lines | 700 lines (87%) |
| Phase accordions | 3 | 150 lines | 115 lines (76%) |
| Section headers | 13 | 50 lines | 40 lines (80%) |
| **Total** | | **1,425 lines** | **1,230 lines (86%)** |

### Across Implementations
- HTML version: 7,636 lines
- React version: 40,009 lines
- **Total duplication:** ~48,000 lines (76%)
- **Consolidation potential:** 40-50%

---

## Recommended Next Steps

1. **This Week**
   - Review this analysis
   - Decision: Keep HTML or React?
   - Plan Phase 1 implementation

2. **Next Week**
   - Extract story data (375 line savings)
   - Merge accordion handlers (38 line savings)
   - Remove disabled code (500 line savings)

3. **Following Week**
   - Extract modality data (700 line savings)
   - Consolidate CSS (500-800 line savings)
   - Test thoroughly

4. **Ongoing**
   - Monitor performance
   - Plan architecture unification
   - Build component library

---

## Important Files to Know

```
/zen-garden/
├── index.html ...................... PRIMARY (7,636 lines)
├── js/main.js ...................... MUST READ (369 lines)
├── styles/main.css ................. REFERENCE (571 lines)
├── styles/transformation-ecosystem.css  BLOATED (3,141 lines)
└── landing/pages/index.js .......... SECONDARY (40,009 lines)
```

---

## Contact & References

- Design System: CSS Custom Properties in index.html head
- Accessibility Docs: WCAG compliance throughout
- Animation Guide: RAF and CSS keyframes in respective files
- Component Patterns: Repeated patterns identified above

---

*Last Updated: November 21, 2025*
*Analysis Complete: Codebase fully explored and documented*

