# Designer & Developer Handoff: Kairos Landing Page

**Audience**: Designer and developer building the Kairos landing page during Week 3 (design mockups) and Week 4 (final QA/launch).

**Purpose**: This document contains everything needed to design and build the landing page: design system specifications, layout wireframes for all 10 sections, technical requirements, asset specifications, analytics setup, and comprehensive QA checklist.

**How to Use**:
- **Designers**: Start with PART 1 (Executive Summary) + PART 2 (Design System) + PART 3 (Layout & Wireframes)
- **Developers**: Start with PART 1 (Executive Summary) + PART 2 (Design System) + PART 4 (Technical Specifications) + PART 6 (CTA Setup) + PART 7 (Analytics)
- **Everyone**: Review PART 8 (QA Checklist) before launch. Reference PART 10 (Files & Resources) for deliverables.

**Before Starting**: See PART 10 "Questions Before You Start?" to clarify domain, booking system, framework preference, and timeline.

**Related Documents**:
- LANDING_PAGE_FINAL_COPY.md: All 10 sections with exact copy, strategic rationale, and visitor experience descriptions
- REVAMP_MASTER_PLAN.md: Overall strategy, design system (extended), CTA setup, and QA process

---

**Project**: Community-First Repositioning Landing Page
**Timeline**: Week 3 Design/Build → Week 4 Launch
**Status**: Content 95% complete, ready for design/build handoff

---

## PART 1: EXECUTIVE SUMMARY

### What You're Building
A 10-section community-first landing page that makes burnt-out achievers feel SEEN, recognized, and part of a belonging community—not sold a program.

### Success Criteria
1. **Emotional Resonance**: Visitors feel recognized within 5 seconds (hero section)
2. **Belonging Signal**: Community is visually evident (photos, stories, shared experience)
3. **Conversion**: Visitors click "Let's Talk About This" CTA → discovery call booking
4. **Mobile Experience**: Readable on all devices, responsive design throughout
5. **Load Performance**: <3 second load time, Lighthouse score >90

### Timeline
- **Week 3**: Design mockups + HTML/CSS build complete
- **Week 3 QA**: Review, approve, iterate
- **Week 4**: Final QA, analytics setup, deploy

### Deliverables You Own
1. Design mockups (Figma/Adobe XD or screenshots)
2. Fully built responsive landing page (HTML/CSS/JS)
3. Asset integration (photos, stories, CTAs)
4. Analytics event tracking setup
5. Mobile/accessibility testing

---

## PART 2: DESIGN SYSTEM

**Overview**: This section defines all colors, typography, components, spacing, and animations used throughout the landing page. Use these specifications consistently across all 10 sections. The design system is based on a "contemplative, warm" aesthetic: dark cosmic backgrounds with warm moonlight text and gold accents (no bright colors, no harsh contrasts).

**CSS Variable Setup** (Recommended): Define all colors, sizes, and transitions as CSS custom properties (e.g., `--cosmic-void`, `--accent-primary`) for easy maintenance and consistency.

---

### Color Palette

**Background Colors** (Dark theme—"Cosmic")
```
--cosmic-void:     #0A0A0F    (Deep space background—primary bg)
--cosmic-depth:    #13131A    (Secondary dark areas)
--cosmic-surface:  #1C1C26    (Raised surface areas—cards, panels)
```

**Text Colors** (Light theme—"Moonlight")
```
--moonlight-primary:   #F7F3E9    (Main body text, headlines—soft warm off-white)
--moonlight-secondary: #EDE7D3    (Secondary text)
--moonlight-muted:     #D4CDB7    (Subtle elements, metadata)
--moonlight-accent:    #A5968A    (Earthy accent text)
```

**Accent Colors** (Gold/Bronze theme)
```
--accent-primary:      #C8A882    (Warm gold—buttons, highlights)
--accent-secondary:    #8B7A6B    (Earth tone)
--accent-interactive:  #E6D0B3    (Interactive elements—lighter gold)
```

**Glassmorphism Overlay System**
```
--glass-primary:    rgba(247, 243, 233, 0.1)    (Primary glass cards)
--glass-secondary:  rgba(247, 243, 233, 0.05)   (Subtle glass)
--glass-border:     rgba(247, 243, 233, 0.15)   (Glass borders)
--glass-highlight:  rgba(247, 243, 233, 0.18)   (Glass highlights)
```

**Usage Rules**:
- Dark cosmic background for all sections
- Moonlight text on cosmic backgrounds
- Glassmorphism for cards/panels (blur + transparency)
- Gold/bronze accents for CTAs and emphasis
- NO bright colors, NO harsh contrasts
- Keep it contemplative, warm, human

### Typography

**Fonts**
- **Serif (Headings)**: `Lora` (Google Fonts)
  - Weights: 400 (regular), 600 (semibold)
  - Use for: Main headlines, section titles, featured quotes

- **Sans-Serif (Body)**: `Manrope` (Google Fonts)
  - Weights: 300 (light), 400 (regular), 600 (semibold)
  - Use for: Body text, metadata, CTAs, labels

**Font Sizing**
```
H1: 3.75rem (60px) on desktop, 2.25rem (36px) on mobile
H2: 2.25rem (36px) on desktop, 1.875rem (30px) on mobile
H3: 1.5rem (24px) on desktop, 1.25rem (20px) on mobile
Body: 1rem (16px) on desktop, 0.9375rem (15px) on mobile
Small: 0.875rem (14px)
Tiny: 0.75rem (12px)
```

**Line Height**
- Headlines: 1.2
- Body text: 1.7 (generous breathing room)
- Quoted text: 1.6

**Letter Spacing**
- Headlines: 0.5px
- Body: 0 (default)
- Emphasis: 0.5px

**Font Weights**
- Headlines: 600 (semibold Lora)
- Subheadings: 400 (regular Lora) or 600 (semibold Manrope)
- Body: 300 (light Manrope) for readability
- Emphasis: 600 (semibold Manrope)

### Component Styles

**Buttons (CTAs)**
```
Primary CTA Button (Let's Talk About This):
- Background: --accent-primary (#C8A882)
- Text: --cosmic-void (dark text on gold)
- Padding: 16px 40px (mobile), 20px 48px (desktop)
- Border-radius: 8px
- Font: 16px semibold Manrope
- Hover:
  - Brightness: 1.1x
  - Shadow: var(--shadow-interactive)
  - Transform: translateY(-2px)
- Transition: var(--transition-fast) (0.2s ease-out)

Secondary Button (Ask Questions):
- Background: transparent
- Border: 2px solid --accent-primary
- Text: --accent-primary
- Padding: 12px 32px
- Hover:
  - Background: rgba(200, 168, 130, 0.1)
  - Color: --accent-interactive

Ghost Link (Email):
- Text: --accent-interactive
- Underline: on hover
- No background
```

**Cards & Panels (Client Stories, Coach Profiles)**
```
Glass Panel Card:
- Background: var(--glass-primary)
- Backdrop-filter: blur(16px)
- Border: 1px solid var(--glass-border)
- Border-radius: 24px
- Padding: 32px (desktop), 24px (mobile)
- Box-shadow: var(--shadow-subtle)
- Hover:
  - Box-shadow: var(--shadow-medium)
  - Transform: translateY(-4px)
  - Transition: var(--transition-medium)

Dark Surface Card (Alternative):
- Background: var(--cosmic-surface)
- Border: 1px solid var(--glass-border)
- No backdrop-filter
```

**Forms & Inputs** (if needed for discovery call booking)
```
Input Field:
- Background: var(--cosmic-surface)
- Border: 1px solid var(--glass-border)
- Border-radius: 8px
- Padding: 12px 16px
- Text: var(--moonlight-primary)
- Placeholder: var(--moonlight-muted)
- Focus:
  - Border-color: var(--accent-primary)
  - Box-shadow: 0 0 0 3px rgba(200, 168, 130, 0.2)
  - Transition: var(--transition-fast)
```

**Text Emphasis**
```
Quote Text:
- Font: Lora serif, 1.5rem, 600 weight
- Color: var(--moonlight-primary)
- Line-height: 1.6
- Padding: 24px 32px (left padding for visual indent)
- Border-left: 3px solid var(--accent-primary)

Highlighted Text:
- Background: none
- Use text-decoration or font-weight
- Color gradient optional (but sparingly)
```

### Spacing System

**Padding & Margins**
```
Tiny:      4px / 0.25rem
Small:     8px / 0.5rem
Base:      16px / 1rem
Medium:    24px / 1.5rem
Large:     32px / 2rem
XL:        48px / 3rem
2XL:       64px / 4rem
3XL:       96px / 6rem
```

**Section Spacing**
```
Between sections: 64px (4rem) padding top/bottom
Within section: 32px (2rem) between elements
Card padding: 32px (2rem)
```

**Responsive Spacing**
```
Desktop: Use full spacing above
Tablet (768px): Reduce by 10-20%
Mobile: Reduce by 30-40%
```

### Animations & Transitions

**Timing Functions**
```
--transition-fast:   0.2s ease-out
--transition-medium: 0.4s ease-out
--transition-slow:   0.6s ease-out
```

**Animation Library**
```
Fade-in: 0.6s ease-out opacity
Slide-up: 0.6s ease-out translateY(-20px)
Scale: 0.3s ease-out transform

Hover Effects:
- CTA buttons: translateY(-2px) + shadow
- Cards: translateY(-4px) + shadow
- Links: color shift + underline

Page Load:
- Hero section: Fade-in on load
- Each section: Fade-in as user scrolls (optional, keep light)
- No parallax or heavy animations (use sparingly—focus on content)
```

**Performance Note**:
- Keep animations smooth (60fps)
- Use `will-change` sparingly
- Test on low-end devices

---

## PART 3: LAYOUT & WIREFRAMES

**Overview**: This section provides detailed layout specifications for all 10 landing page sections. Each section includes:
- **Content Placement**: What text/images go where
- **Layout**: Responsive breakpoints (desktop, tablet, mobile) with specific dimensions and padding
- **Visual Style**: Design guidelines (colors, emphasis, spacing)
- **Image Specifications**: Size, format, file constraints

**How to Use**:
1. Read the complete section description in LANDING_PAGE_FINAL_COPY.md (Part 2) to understand the content and WHY it matters
2. Refer to this section for layout specifics (grid columns, padding, font sizes)
3. Use the design system (PART 2) for all colors, fonts, spacing values
4. Build mockups based on these wireframes, then iterate with the team

**Mobile-First Principle**: Start with mobile (320px) and progressively enhance for larger screens. Ensure all sections are readable and clickable on small phones.

---

### Section Breakdown

#### SECTION 1: HERO (Recognition)

**Content Placement**:
- Headline (H1): Lora serif, 60px desktop / 36px mobile
- Subheading: Manrope 20px, with line breaks for breath
- Body text: Manrope 16px, light weight
- CTA Button: "Let's Talk About This" (primary style)

**Layout**:
```
DESKTOP (1200px+):
- Full width container
- Text centered
- Max-width for readability: 900px
- Padding: 96px 48px (top/bottom) | 64px 64px (left/right)
- Background: Cosmic void with optional gradient

TABLET (768px - 1199px):
- Same centered layout
- Padding: 64px 32px
- Font sizes reduced 10-15%

MOBILE (under 768px):
- Centered stack
- Padding: 48px 24px
- H1: 36px
- Subheading: 18px
- Readable in portrait mode
```

**Visual Style**:
- Dark background (cosmic-void)
- No background image/video (focus on text)
- Optional: Subtle animated gradient background (very light, doesn't distract)
- Breathing room above/below text
- CTA button: Large, clear, gold accent

**Image Placement**: None for hero (pure text focus)

---

#### SECTION 2: YOU'RE NOT ALONE (Client Stories Grid)

**Content Placement**:
- Headline: "Meet People Like You" (H2)
- 4 client story cards in grid

**Card Layout**:
```
Each Card Contains:
- Client name (H3, Manrope 600)
- Quote/opening line (Lora serif, italic, highlighted)
- Story text (body paragraph)
- Optional: Photo at top of card

Grid Layout:
DESKTOP: 2 columns (side-by-side)
TABLET: 2 columns (narrower)
MOBILE: 1 column (stacked)

Card Spacing: 24px gap between cards
Card Styling: Glass panel with border
```

**Visual Style**:
- Glass panel cards (glassmorphism)
- Border and subtle shadow
- Hover effect: lift up + stronger shadow
- Names prominent, stories conversational

**Photo Placement**:
- Optional: Small photo above or inside card (40x40px circular headshot)
- If included: Left-align within card, text wraps beside
- Alt: Photo at top of card, full width

**Design Note**: Keep cards intimate and conversational, not corporate

---

#### SECTION 3: WHAT SHIFTED (Transformation Points)

**Content Placement**:
- Headline: "What Actually Changes" (H2)
- Subheading: "Not Statistics. Lives." (italicized)
- 6 transformation points (label + description)

**Layout Options**:

**Option A (2-Column Grid)**:
```
DESKTOP: 2 columns
TABLET: 1 column
MOBILE: 1 column

Each Item:
- Title (H4, accent color gold)
- Description (body text)
- Optional: Small icon left of title
```

**Option B (Simple List)**:
```
Vertical stack with dividing lines
- Item: bold title + body text
- Spacing: 24px between items
- Visual interest: Colored left border (accent gold)
```

**Visual Style**:
- Minimal, clean design
- Plenty of whitespace
- Focus on readability over decoration
- Icons optional (keep simple if used)

**Image Placement**: None needed (text-focused)

---

#### SECTION 4: COMMUNITY (Photo Grid #1)

**Content Placement**:
- Headline: "You're Joining A Community" (H2)
- Subheading: "These are the people you're walking alongside."
- Photo grid of 30-50 real client faces

**Layout**:
```
Photo Grid Sizes:
DESKTOP: 6 columns (200px x 200px images, circular crop)
TABLET: 4 columns (180px x 180px)
MOBILE: 3 columns (120px x 120px)

Images:
- Circular crop (border-radius: 50%)
- No border (blend into background) or subtle border
- Spacing: 12px gap between photos
- Hover: Slight zoom/glow effect (optional)

Section Padding: 64px top/bottom
```

**Visual Style**:
- Clean grid layout
- Circular photos create community feeling
- Mix of headshots and candid (warm, genuine)
- Diverse representation (ages, backgrounds)
- Minimal text (photos do the speaking)

**Image Specifications**:
- Format: JPG or PNG
- Size: 200px x 200px per photo (desktop)
- Aspect ratio: 1:1 (square, cropped circular)
- File size: <50KB each (optimize for web)
- Color: Warm, natural lighting (no heavy filters)

---

#### SECTION 5: THE JOURNEY (Expectation Setting)

**Content Placement**:
- Headline: "What This Actually Looks Like" (H2)
- 6 paragraphs of narrative copy
- Optional subheadings within (bold)

**Layout**:
```
DESKTOP: Single column, max-width 900px, centered
TABLET: Single column, max-width 90%
MOBILE: Single column, max-width 100% with padding

Text Styling:
- Body: Manrope 300, 16px, line-height 1.7
- Paragraph spacing: 24px
- Emphasis (bold): Manrope 600
- No bullets or numbered lists (narrative flow)
```

**Visual Style**:
- Pure text + whitespace
- No cards, no images
- Conversational tone should show in typography
- Generous margins/padding for breathing room

**Image Placement**: None needed

---

#### SECTION 6: WHO'S GUIDING YOU (Coach Profiles)

**Content Placement**:
- Headline: "Who's Guiding You" (H2)
- 2 coach profile sections (Shalini + Jatin)

**Layout**:
```
Each Coach Profile:
[DESKTOP - Side by Side]
Left: Photo (400px x 500px, portrait)
Right: Story text + credentials

[TABLET & MOBILE - Stacked]
Top: Photo (300px x 400px)
Bottom: Story text

Photo Styling:
- Square or portrait aspect ratio
- Natural, warm portrait photo
- Optional: Subtle border/frame
- Sizing: 400px wide on desktop, 300px on mobile

Text Styling:
- Headline (H3): Lora serif, coach name
- Story: Body text, Manrope light
- Credentials: Small gray text at bottom (supporting detail)
- Spacing: 32px between photo and text

Overall Spacing:
- Between two coaches: 64px vertical gap
```

**Visual Style**:
- Intimate, human-centered
- Photos are prominent (not small)
- Story text sits beside/below
- Credentials subtle (not leading)
- Warm, approachable aesthetic

**Image Specifications**:
- Format: JPG
- Size: 400px x 500px (desktop), 300px x 400px (mobile)
- Aspect ratio: Portrait (3:4)
- Quality: High resolution, warm lighting
- File size: <100KB
- Content: Warm smile, approachable expression (not formal)

---

#### SECTION 7: THREE PHASES (Journey Roadmap)

**Content Placement**:
- Headline: "How This Works: Three Phases" (H2)
- 3 phase cards (Discover → Integrate → Actualize)

**Card Layout**:
```
Each Phase Card:
- Phase title (H3)
- Description (3-4 lines body text)
- Duration (small text, gray)
- What happens (small text)
- What shifts (small text)

Visual Elements:
- Optional: Phase number badge (1, 2, 3)
- Optional: Arrow between phases (desktop only)
- No images needed

Grid Layout:
DESKTOP: 3 columns side-by-side
TABLET: 3 columns (narrower)
MOBILE: 1 column stacked, with arrows/lines connecting

Card Styling:
- Background: var(--cosmic-surface) (dark surface, not glass)
- Border: 1px solid var(--glass-border)
- Padding: 32px
- Spacing: 24px between cards
```

**Visual Style**:
- Clean, simple, no fluff
- Focus on clarity over decoration
- Optional: Subtle progress indicator (shows progression)
- Phase titles stand out

**Image Placement**: None needed

---

#### SECTION 8: COMMUNITY AGAIN (Photo Grid #2)

**Content Placement**:
- Headline: "The Real Proof" (H2)
- Subheading: "Not in testimonials. Not in statistics. In community."
- Larger photo grid (60+ faces)

**Layout**:
```
Same as Section 4, but larger grid:

DESKTOP: 8-10 columns (120px x 120px, circular)
TABLET: 6 columns (100px x 100px)
MOBILE: 4 columns (80px x 80px)

Spacing: 8px gap between photos
Section Padding: 64px top/bottom
```

**Visual Style**:
- Larger, more impactful community display
- Visual reinforcement of belonging
- Same warm, genuine photos
- Circular crops create cohesion with Section 4

**Image Specifications**: Same as Section 4

---

#### SECTION 9: ONE DEEP STORY (Featured Transformation)

**Content Placement**:
- Headline: "Jacqui" (large, personal name)
- Optional: Small photo at top left or centered
- Story broken into sections: The Beginning → Turning Point → The Work → Now
- Closing quote: Large, emphasized

**Layout**:
```
DESKTOP (1200px+):
- Max-width: 900px, centered
- Photo (optional): 200px x 300px, positioned left or top
- Text flows beside or below photo
- Margin: Auto-center container

TABLET (768px - 1199px):
- Photo: Centered at top, 300px wide
- Text: Full width below photo

MOBILE (under 768px):
- Photo: Centered at top, full width with padding
- Text: Full width below

Story Sections:
- Subsection titles: H4, Manrope 600, bold
- Body: Normal paragraph spacing (24px)
- Closing quote: Lora serif, large (1.5rem+), centered, indented
```

**Visual Style**:
- Narrative-focused, not corporate
- Generous whitespace
- Photo warm and genuine (not formal)
- Quote stands out visually
- Readable in 5-7 minutes

**Image Specifications**:
- Format: JPG
- Size: 200px x 300px (desktop), 300px full-width (mobile)
- Aspect ratio: Portrait (2:3)
- Content: Warm, genuine photo (not headshot)
- File size: <80KB

---

#### SECTION 10: THE INVITATION (Final CTA)

**Content Placement**:
- Headline: "Ready To Stop Running?" (H2, Lora serif)
- 2-3 paragraphs of conversational copy
- Primary CTA: "Let's Have That Conversation" button
- Secondary: Email link option

**Layout**:
```
DESKTOP & TABLET:
- Text centered, max-width 700px
- Padding: 96px 64px

MOBILE:
- Text centered, max-width 90%
- Padding: 64px 24px

Button Layout:
- Primary CTA: Large, centered
- Email link: Smaller, below primary CTA
- Spacing between: 16px
```

**Visual Style**:
- Warm, inviting tone
- No hard sell (genuine conversation)
- CTA prominent but not aggressive
- Email option for less ready visitors

**Image Placement**: None needed (optional: small community photo as background very subtle)

---

## PART 4: TECHNICAL SPECIFICATIONS

**Overview**: This section covers the technical foundation for building the landing page: technology stack options, hosting, performance requirements, responsive design breakpoints, browser support, and accessibility standards.

**Key Decision Points**:
- **Technology**: Choose between static HTML/CSS/JS, React/Next.js, or Webflow (see "Framework & Technology" below)
- **Hosting**: Determine if landing page is separate domain or `/landing` path on existing Kairos website
- **Performance**: Target <3 second load time, Lighthouse score >90, Core Web Vitals passing
- **Accessibility**: WCAG AA compliance (4.5:1 contrast, keyboard navigation, alt text, 44×44px touch targets)
- **Analytics**: GA4 event tracking for 7 events (see PART 7)

**Most Important**: Performance and accessibility matter more than feature richness. A fast, accessible page that converts is better than a slow, fancy page nobody can use.

---

### Framework & Technology

**Recommended Stack** (choose one):

**Option A: Static HTML/CSS/JavaScript** (Simplest)
- Pros: Fast, no backend needed, easy to host
- Cons: Manual updates required
- Tools: HTML5, CSS3, Vanilla JS, Tailwind optional
- Hosting: Vercel, Netlify, GitHub Pages, traditional web hosting

**Option B: React + Next.js** (Most Flexible)
- Pros: Component reusability, dynamic content, SEO-friendly
- Cons: Requires build process
- Tools: React, Next.js, TailwindCSS, Firebase/Vercel
- Hosting: Vercel, Netlify

**Option C: Webflow** (Visual Builder)
- Pros: No code required, visual design, built-in hosting
- Cons: Higher cost, vendor lock-in
- Best for: Non-technical team management

**Recommended**: Option A (HTML/CSS/JS) for simplicity, or Option B (Next.js) for scalability

### Hosting & Deployment

**Location**: New separate domain OR `/landing` path on existing website?
- **Decision needed**: Is this a separate landing page or integrated into existing site?

**If Separate Domain**:
- Domain: [TBD by client]
- Hosting: Vercel, Netlify, or traditional host
- DNS: Point to hosting provider
- SSL: Auto-generate (Let's Encrypt via Vercel/Netlify)

**If /landing Path**:
- Deploy to existing website infrastructure
- No new domain needed
- Same hosting as main site

**Build Process** (if React/Next.js):
- GitHub repository
- Automated deploys on push (GitHub → Vercel/Netlify)
- Preview URLs for testing before production
- Rollback capability

### Performance Requirements

**Page Speed**:
- Target: <3 second initial load on 4G
- Lighthouse score: >90 (all metrics)
- Core Web Vitals:
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

**Optimization Strategy**:
- Image optimization (WebP format, responsive sizes)
- Code splitting (defer non-critical JS)
- Lazy loading for photos (Section 4 & 8)
- CSS minification
- Remove unused styles
- CDN for image delivery (Cloudflare, Vercel Image Optimization)

**Testing Tools**:
- Google PageSpeed Insights
- Lighthouse CLI
- WebPageTest.org

### Responsive Design Breakpoints

```
Mobile-First Approach:

Base: 320px - 479px (small phones)
Tablet: 480px - 767px (large phones, small tablets)
Desktop: 768px - 1023px (tablets)
Wide: 1024px - 1199px (large screens)
Extra Wide: 1200px+ (very large screens)

Tailwind Breakpoints (if used):
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Browser Support

**Target Browsers**:
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari (iOS): Latest 2 versions
- Chrome Mobile: Latest 2 versions

**Fallbacks**:
- CSS Grid: with fallback to Flexbox if needed
- CSS Custom Properties: with fallback values
- Backdrop-filter: graceful degradation (remove blur on unsupported)

### Accessibility (WCAG AA)

**Color Contrast**:
- Text vs background: 4.5:1 minimum ratio
- Gold accent text on dark: Test with contrast checker
- All text readable at 200% zoom

**Keyboard Navigation**:
- All interactive elements (buttons, links) keyboard accessible
- Focus states visible (colored outline, shadow)
- Tab order logical (top-to-bottom, left-to-right)

**Screen Readers**:
- Semantic HTML (proper heading hierarchy H1→H6)
- Alt text for all images (descriptive, not just "photo")
- ARIA labels for icon buttons (if used)
- Form labels associated with inputs

**Mobile Accessibility**:
- Touch targets: Minimum 44x44px
- No hover-only interactions
- Readable font sizes (minimum 16px on mobile)

**Testing**:
- WAVE browser extension
- Axe DevTools
- Manual keyboard navigation test
- Screen reader test (NVDA or JAWS)

---

## PART 5: ASSET REQUIREMENTS

**Overview**: This section specifies all photos, icons, and other assets needed to build the landing page. Real client photos are critical—they build trust and authenticity. Generic stock photos will undermine the community-first positioning.

**Asset Timeline**:
- **Week 1 EOW**: Coach photos (Shalini & Jatin) + 4 client headshots (Jacqui, Donald, Ajay, Antonia)
- **Week 2**: Community grid photos (60+ total)
- **Week 3**: Final optimization before build

**Delivery Method**: All assets should be organized in a shared Google Drive folder with clear naming and folders per section.

---

### Photos

**Client Headshots** (4 clients for Section 2):
- Quantity: 4 photos (Jacqui, Donald, Ajay, Antonia)
- Dimensions: 300px x 300px minimum (square or portrait)
- Format: JPG or WebP
- File size: <50KB each
- Quality: High resolution, warm lighting
- Style: Headshots that are warm & genuine (NOT formal/corporate)
- Delivery: Google Drive folder link, organized by name

**Community Grid Photos** (Sections 4 & 8):
- Quantity: 30 photos (Section 4) + 30+ additional (Section 8)
- Dimensions: 200px x 200px (will be cropped circular)
- Format: JPG or WebP
- File size: <40KB each
- Quality: Mix of headshots & candid
- Style: Warm, genuine, diverse (age, gender, background)
- Organized: Separate folder per section

**Coach Photos** (Section 6, Shalini & Jatin):
- Quantity: 2 photos (one per coach)
- Dimensions: 400px x 500px minimum (portrait)
- Format: JPG
- File size: <100KB each
- Quality: High resolution, warm natural lighting
- Style: Approachable, genuine (professional but warm)
- Delivery: Separate files, high-resolution originals

**Total Photos Needed**: 65-70 photos

**Delivery Timeline**:
- Week 1 EOW: Coach photos + 4 client headshots
- Week 2: Community grid photos (60+ total)
- Week 3: Final QA on all photos

**Storage**:
- Google Drive folder shared with designer/developer
- Organized by section (Section 2, Section 4, Section 6, Section 8)
- High-res originals + optimized web versions

### Icons (Optional)

**If Icons Used**:
- Library: Font Awesome, Feather, or custom SVG
- Size: 24px - 48px (depending on context)
- Color: Use gold accent (--accent-primary) or text color
- Style: Minimal, clean lines (match design aesthetic)

**Potential Icons**:
- Section 3 (What Shifted):
  - Moon icon (sleep)
  - Heart icon (presence)
  - Lightbulb icon (clarity)

**No icons needed** if design stays text-focused (recommended)

### Videos (If Any)

**Not Required** for launch
- Optional: Testimonial video clips (future enhancement)
- If included: MP4 format, <10MB, hosted on Vimeo/YouTube

---

## PART 6: CTA & CONVERSION SETUP

**Overview**: This section defines all call-to-action buttons, email links, and conversion setup. The primary goal is discovery call bookings. Secondary goal is email capture for marketing follow-up.

**Critical Decision**: Before starting development, confirm with Shalini & Jatin which booking system to use (Calendly, Acuity, or HubSpot). This affects your HTML/JS setup.

**CTA Strategy**:
- **Primary**: "Let's Talk About This" (Section 1) and "Let's Have That Conversation" (Section 10) → Opens discovery call booking
- **Secondary**: "Ask us anything" (email fallback) → Opens mailto link to contact@kairos.com
- **Optional**: Email sign-up form (if using HubSpot or Mailchimp for nurturing sequence)

---

### Button CTAs

**Primary CTA: "Let's Talk About This" & "Let's Have That Conversation"**

Appears in:
- Section 1 (Hero)
- Section 10 (Final invitation)
- Potentially sticky header/footer (optional)

**Action**: Click → Opens discovery call booking system

**Booking System Options** (choose one):

**Option A: Calendly Embedded**
- Pros: Free tier, embeds directly, minimal setup
- Cons: Shows designer's calendar
- Setup: Create Calendly account → embed in page
- Link: https://calendly.com/[your-username]

**Option B: Acuity Scheduling**
- Pros: Branded, flexible, integrates CRM
- Cons: Paid plan needed ($15/mo+)
- Setup: Create form, embed on page
- Custom styling available

**Option C: Hubspot Contact Form**
- Pros: Free, CRM integration, email capture
- Cons: Two-step process (form → email confirmation)
- Setup: Create form, embed snippet
- Automation: Auto-send calendar link via email

**Option D: External Landing Page**
- Pros: Full control over flow
- Cons: Takes user off-site
- Setup: Link to booking page on separate domain
- Recommended: Combine with email capture

**Recommendation**: Option A (Calendly) for simplicity, or Option C (HubSpot) for email capture

### Secondary CTA: Email Contact

**Text**: "Or if you have questions first: [Ask us anything]"

**Link**: mailto:contact@kairos.com (or appropriate email)

**Email Auto-Response**: Set up to confirm receipt + next steps

### Email Capture (Optional)

**If Form-Based**:
- Field: Email address only (keep friction low)
- CTA: "Send me updates" or "Notify me"
- Follow-up: Automated email sequence (see LANDING_PAGE_FINAL_COPY.md)

**Integration Options**:
- Mailchimp (free tier available)
- ConvertKit
- HubSpot
- Custom backend (Firebase, etc.)

---

## PART 7: ANALYTICS & TRACKING

**Overview**: GA4 tracking helps understand how visitors engage with the landing page: where they click, how long they stay, which sections get the most attention, and most importantly—who books discovery calls.

**What to Track**:
- **Page views**: Count total visits
- **CTA clicks**: Where are people clicking? (Section 1 hero button vs Section 10 closing button)
- **Discovery call bookings**: The primary conversion metric
- **Email sign-ups**: If using email capture form
- **Scroll depth**: Are people reading past the fold? (20%, 50%, 75%, 100%)
- **Outbound links**: Are people clicking away?

**Post-Launch Monitoring**: After Week 4 launch, monitor these metrics weekly (see REVAMP_MASTER_PLAN.md Section 9 for full monitoring dashboard specs).

---

### Google Analytics 4 Setup

**Events to Track**:

```
1. Page Load
   - Event: page_view (auto-tracked)
   - Goal: Count visits

2. CTA Clicks
   - Event: click_cta_primary
   - Trigger: Click on "Let's Talk About This" button
   - Data: Section (hero, closing, etc.)

3. Discovery Call Booking
   - Event: booking_initiated
   - Trigger: User opens calendar booking
   - Data: Timestamp, source section

4. Email Sign-up (if applicable)
   - Event: email_signup
   - Trigger: Submit email form
   - Data: Email captured (don't send PII to GA)

5. Secondary CTA Clicks
   - Event: click_email_link
   - Trigger: Click on email contact link

6. Scroll Depth
   - Event: scroll_20, scroll_50, scroll_75, scroll_100
   - Trigger: User scrolls past milestone
   - Goal: Engagement metric

7. Outbound Links
   - Event: click_outbound
   - Trigger: Click to external site (if any)
```

**Goals to Set Up**:
- Primary: Discovery call booking
- Secondary: Email sign-up
- Tertiary: 50% scroll depth (high engagement)

**Implementation**:
- GA4 tracking code in <head>
- gtag.js library
- Event tracking via JavaScript
- Test with GA DebugView before launch

### Conversion Tracking

**Primary Conversion**: Discovery call booking
- Track in GA4 as event_goal
- Attribution: Which section did they click from?
- Follow-up: Email confirmation capture

**Secondary Conversion**: Email sign-up
- Track email address (securely, no PII to GA)
- Follow-up sequence through Mailchimp/HubSpot

### Reporting

**Metrics to Monitor** (Post-Launch):
- Unique users
- Session duration (target: >2 min)
- Bounce rate (target: <40%)
- Click-through rate on CTA (target: >5%)
- Conversion rate (target: >2% to discovery call)
- Top pages/sections viewed
- Device breakdown (mobile vs desktop)

**Dashboard**: Create GA4 dashboard for weekly monitoring

---

## PART 8: QA CHECKLIST & HANDOFF

**Overview**: Quality assurance happens in three phases:
1. **Design QA**: Before code is written, mockups reviewed for consistency and correctness
2. **Development QA**: During build, functionality, performance, accessibility, and cross-browser testing
3. **Final Review**: Before launch, full team sign-off on all requirements

**Who Should Run QA**:
- **Design QA**: Designer + Shalini & Jatin (stakeholders)
- **Development QA**: Developer + QA engineer (if available) + accessibility checker
- **Final Review**: Team + client sign-off

**Timeline**:
- Week 3 (Mon-Tue): Design QA
- Week 3 (Wed-Fri): Development QA
- Week 4 (Mon): Final QA + client approval
- Week 4 (Tue-Wed): Staging deployment + final review
- Week 4 (Thu-Fri): Production launch + monitoring

**Tools Recommended**:
- Lighthouse (performance)
- WAVE (accessibility)
- Axe DevTools (accessibility)
- Chrome DevTools (cross-browser, mobile)
- Responsively.app (responsive design testing)

---

### Design QA (Before Build)

- [ ] All colors match spec (cosmic dark, moonlight text, gold accents)
- [ ] Typography matches (Lora for headers, Manrope for body)
- [ ] Spacing consistent throughout (use spacing system)
- [ ] Photos integrated correctly (sizes, crops, quality)
- [ ] Component styles applied uniformly
- [ ] Hover states designed (buttons, cards, links)
- [ ] Mobile layout designed (all breakpoints)
- [ ] Responsive images specified (srcset needed?)
- [ ] Mockups reviewed with team (get sign-off)

### Development QA

**Functionality**:
- [ ] All CTAs link to booking system
- [ ] Email links work
- [ ] Forms submit (if included)
- [ ] Keyboard navigation works (Tab through all elements)
- [ ] No console errors

**Performance**:
- [ ] Lighthouse score >90
- [ ] Page load <3 seconds (4G)
- [ ] Images optimized (WebP, lazy-loaded)
- [ ] No unused CSS/JS

**Cross-Browser**:
- [ ] Chrome/Edge latest
- [ ] Firefox latest
- [ ] Safari latest
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

**Accessibility**:
- [ ] WAVE extension: No errors
- [ ] Color contrast: 4.5:1 minimum
- [ ] Heading hierarchy: H1 → H2 → H3 (no skips)
- [ ] Alt text on all images
- [ ] Focus states visible (keyboard nav)

**Mobile**:
- [ ] Touch targets: 44px minimum
- [ ] Text readable without zoom
- [ ] No horizontal scroll
- [ ] Buttons clickable (no tiny targets)
- [ ] Forms mobile-friendly

**Analytics**:
- [ ] GA4 code installed
- [ ] Events firing correctly (DebugView)
- [ ] Conversion tracking working
- [ ] No data layer errors

### Content QA

- [ ] All copy matches LANDING_PAGE_FINAL_COPY.md
- [ ] No typos or formatting issues
- [ ] Links point to correct URLs
- [ ] Phone numbers/emails valid
- [ ] Client names spelled correctly
- [ ] All quotes attributed properly

### Final Review Checklist

**Before Launch**:
- [ ] Design approved by Shalini & Jatin
- [ ] Copy approved by Shalini & Jatin
- [ ] All QA tests passed
- [ ] Analytics tracking verified
- [ ] Backup/rollback plan in place
- [ ] Post-launch monitoring setup
- [ ] Team trained on managing updates (if needed)

---

## PART 9: HANDOFF PROCESS & TIMELINE

**Overview**: This is the execution timeline for Week 3 (design + build) and Week 4 (QA + launch). Clear deadlines and owner assignments prevent bottlenecks.

**Key Principles**:
- **Design before code**: Mockups must be approved before development starts (saves rework)
- **Daily standups**: 15-minute standup to unblock issues immediately
- **Client feedback loops**: Get Shalini & Jatin approval at design stage, not after building
- **Saturday/Sunday**: Full QA testing (not waiting until last minute)

**Success = All QA tests pass + Shalini & Jatin approve + Analytics ready before Friday launch**

---

### Week 3 Schedule

**Monday-Tuesday**: Design Phase
- Designer: Create mockups for all 10 sections
- Designer: Get feedback from Shalini & Jatin
- Designer: Finalize approved designs

**Wednesday**: Design Approval
- Review call with designer
- Approval from Shalini & Jatin
- Clear any ambiguities
- Designer moves to final assets

**Thursday-Friday**: Build Phase
- Developer: HTML/CSS structure
- Developer: Component styling
- Developer: Photo integration
- Developer: Button/CTA setup

**Saturday-Sunday**: Testing & QA
- Run all QA tests (functionality, performance, accessibility)
- Mobile testing across devices
- Bug fixes
- Final optimization

### Week 4 Schedule

**Monday**: Final QA & Analytics
- Analytics tracking setup
- Final performance test
- Accessibility final review
- Client sign-off

**Tuesday-Wednesday**: Staging Deployment
- Deploy to staging URL (preview)
- Final client review
- Any last-minute changes
- Sign-off on staging

**Thursday-Friday**: Production Launch
- Deploy to live domain
- Monitor for errors (first 24 hours)
- Celebrate! 🚀

---

## PART 10: FILES & RESOURCES TO SEND

**Overview**: This section clarifies what files the designer/developer should receive from the client (Shalini & Jatin), and what deliverables the designer/developer should provide back before launch.

**Timeline**:
- **Before Week 3 starts**: Designer/developer receives all documents + photos from Week 1-2
- **Week 3 EOW**: Designer/developer delivers mockups + build artifacts
- **Week 4 EOW**: Designer/developer delivers final code + QA reports

---

### From Client (Shalini & Jatin)

**Photos** (organized Google Drive folder):
```
Kairos Landing Page Assets/
├── Section 2 - Client Stories/
│   ├── jacqui-headshot.jpg
│   ├── donald-headshot.jpg
│   ├── ajay-headshot.jpg
│   └── antonia-headshot.jpg
├── Section 4 - Community Grid/
│   ├── photo-001.jpg through photo-030.jpg
├── Section 6 - Coach Profiles/
│   ├── shalini-portrait.jpg
│   └── jatin-portrait.jpg
└── Section 8 - Community Grid 2/
    └── photo-031.jpg through photo-060.jpg
```

**Documents** (already created, share with designer/developer):
- LANDING_PAGE_FINAL_COPY.md (all copy, exact)
- DESIGNER_DEVELOPER_HANDOFF.md (this document)
- KAIROS_CONTENT_STRATEGY_& MESSAGING_FRAMEWORK.md (context/WHY)

### From Designer/Developer

**Deliverables**:
1. Design mockups (Figma link or PDF exports)
2. Final HTML/CSS/JS code (GitHub repo)
3. Responsive screenshots (all breakpoints)
4. Performance report (Lighthouse)
5. Accessibility report (WAVE, Axe results)
6. Browser compatibility matrix
7. Deployment instructions

---

## FINAL NOTES FOR DESIGNER/DEVELOPER

**Before You Start**: Read this section carefully. The design philosophy and common mistakes explain WHY the specifications matter, not just WHAT to do.

This landing page serves a specific audience: burnt-out achievers who feel disconnected despite external success. The design must support vulnerability and belonging, not impress with technical prowess.

---

### Design Philosophy
- **Contemplative not flashy**: This is about feeling SEEN, not being impressed
- **Vulnerability first**: The design should support vulnerability, not hide it
- **Community-focused**: People matter more than methods
- **Content is king**: Don't add decoration for decoration's sake

### Common Mistakes to Avoid
- ❌ Bright, saturated colors (keep it warm & dark)
- ❌ Heavy animations (keep it subtle & purposeful)
- ❌ Tiny fonts (readability first)
- ❌ Cluttered spacing (generous margins > dense information)
- ❌ Generic stock photos (real client photos matter)
- ❌ Corporate tone in copy styling (keep it human)
- ❌ Over-designed cards (simple glass panels work better)

### What Matters Most
1. **Load speed** (people leave slow sites)
2. **Mobile experience** (60%+ traffic will be mobile)
3. **Accessibility** (this is about inclusion)
4. **CTA clarity** (one clear path to discovery call)
5. **Photo quality** (real faces build trust)
6. **Copy focus** (words matter more than decoration)

---

## SUCCESS CRITERIA

**Launch is successful when**:
- ✅ Lighthouse score >90 (all metrics)
- ✅ Mobile experience is smooth (<3s load)
- ✅ CTAs are clear and clickable
- ✅ All content matches approved copy
- ✅ Photos load quickly & look warm
- ✅ Analytics tracking is working
- ✅ Shalini & Jatin approve the final product
- ✅ No console errors or warnings
- ✅ Accessible to all users (WCAG AA)

---

## QUESTIONS BEFORE YOU START?

**Clarifications Needed**:
1. Separate domain or `/landing` path on existing site?
2. Which booking system (Calendly, Acuity, HubSpot)?
3. Framework preference (HTML/CSS, React, other)?
4. Budget for hosting/tools?
5. Timeline flexibility (Week 3 solid, or can extend)?

**Get These Answered** before starting design/build.

---

**You've got this. This landing page is going to help a lot of people recognize themselves.**

*— Shalini, Jatin, and the Kairos team*
