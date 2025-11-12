# Kairos Landing Page Revamp — Consolidated Plan

**Audience**: Shalini and Jatin. Use this document to understand the full revamp strategy, decisions required, timeline, design system, technical specs, and QA process.

**What This Document Contains**: One master plan covering mission, messaging, 10-section architecture, website status, asset pipeline, decisions, design system, technical specs, CTA setup, QA process, timeline, and immediate tasks.

---

## 1. Mission & Current Context

**Goal**: Ship a community-first landing page and refactored website. The site must help burnt-out achievers feel seen, show proof through real lives, and convert visitors into discovery call bookings through low-friction conversations.

**Team Ownership**:
- **Shalini**: Guide story, client identification, community photos
- **Jatin**: Product strategy, copy, implementation, technical setup

Each task has one owner. There are no unassigned tasks.

**Current Website State**:
- ✅ Hero section rewritten (recognition-based)
- ✅ Methodology deep dive hidden (in HTML comments)
- ✅ Framework cards simplified (tag names only)
- ⏳ Coach bios, global copy polish, community/story assets, tooling decisions still needed

**Success Signal**: Qualified visitors book discovery calls because they feel recognized, safe, and curious. They don't book because we overwhelmed them with methodology.

## 2. Core Message & Tone (Use Everywhere)

Use these principles consistently across copy, email, social media, and the discovery call script.

**The Core Message**:
"External success doesn't guarantee internal peace. You're not broken, you're human, and you don't have to run alone."

**Tone Guidelines**:
- Write vulnerably. Share struggles, not just credentials.
- Write honestly. Use real stories, not generalizations.
- Prioritize community. "We're in this together" beats "Here's our methodology."
- Avoid jargon (no "psycho-spiritual," "evidence-informed," "integral frameworks").
- Avoid credentials-first introductions (lead with humanity, add credentials last).
- Avoid quick-fix promises ("12-week transformation," "optimize your life").
- Show proof through lives changed, not metrics (sleep returned, presence restored, purpose found).

**CTA Style**:
- Use conversational language: "Let's Talk About This," not "Schedule Consultation."
- Offer one primary action. Make it easy to click.
- Add an email fallback for hesitant visitors ("Or ask us anything" option).

## 3. Ten-Section Landing Page Architecture
| # | Section | Purpose | What Must Appear |
|---|---------|---------|------------------|
| 1 | Recognition (Hero) | Immediate resonance | Current hero copy + single CTA |
| 2 | You’re Not Alone | Belonging via real people | 3–4 named stories w/ photos |
| 3 | What Shifted | Proof through lived outcomes | Sleep, presence, clarity, purpose bullets |
| 4 | Community Gallery | Visual proof of belonging | 30–50 warm client photos |
| 5 | The Journey | Set honest expectations | Story copy about “real work in real time” |
| 6 | Who’s Guiding You | Trust via vulnerability | Shalini + Jatin origin stories + small credential footers |
| 7 | Three Phases | Simple structure | Discover → Integrate → Actualize cards |
| 8 | Community Again | Reinforce belonging | Larger grid or collage |
| 9 | One Deep Story | AA-style testimony | Full arc from one client interview |
|10 | The Invitation | Low-pressure CTA | Discovery-call invite + email option |

## 4. Website Implementation Status

**Refactoring Phases (PHASES 1–5)**:
- **Phase 1 (Hero)**: ✅ Live. Rewritten for recognition-based messaging.
- **Phase 2 (Hide deep methodology)**: ✅ Content commented out; needs final destination (Section 6 below).
- **Phase 3 (Framework cards simplified)**: ✅ Only tags remain. No descriptions.
- **Phase 4 (Coach bios)**: ⏳ Pending origin stories + photos (due EOW Week 1).
- **Phase 5 (Global brevity pass)**: ⏳ Week 2 polish—target sub-40-word paragraphs, plain language, intentional whitespace.

**Critical Fixes (From UX Audit, Nov 12) – ALL COMPLETE ✅**:
- ✅ **Forms**: Wired to Formspree endpoint with inline validation, error/success states, aria-live regions
- ✅ **Mobile Navigation**: Hamburger menu (<768px) + full-screen drawer + 44×44px tap targets + active states + keyboard support (Escape closes)
- ✅ **CTA Contrast**: Audited all buttons—Gold (#C8A882) on dark: **8.0:1** (normal) / **9.67:1** (focus outline) ✓ Passes WCAG AAA
- ✅ **Copy Readability**: Dense paragraphs refactored into short lines; long sentences broken for mobile; consistent 2–3 line max per paragraph

**Testing**: Keep verifying on desktop + mobile + different ports (`localhost:8002` etc.) after each change.

## 5. Asset & Story Pipeline (Who Does What)

This section defines what assets you need to gather and who owns each deliverable.

| Deliverable | Owner | Timeline & Notes |
|-------------|-------|------------------|
| Personal origin story (2–3 paragraphs) + 2–3 warm photos | Shalini | Emphasize "breakdown → breakthrough." Put credentials at bottom only. Target: Wednesday of Week 1. |
| Personal origin story (2–3 paragraphs) + 2–3 warm photos | Jatin | Write in first person. Connect research background to human insight. Gather own photos. Target: Wednesday of Week 1. |
| Four deep client stories (Jacqui, Donald, Ajay, Antonia examples) | Shalini identifies + Jatin interviews/edits | Shalini: Identify 4 clients by Wednesday. Jatin: Run 45-min interviews Week 2, edit transcripts, secure approvals + photos. |
| Community gallery photos (30–50 minimum) | Shalini | Pull from existing archives. Confirm consent from all clients. Ensure diversity (age, gender, background). Target: Friday of Week 1 (at least 15). |
| Qualitative proof statements (if metrics unavailable) | Jatin | If hard numbers aren't verified, write qualitative statements instead. Example: "Most clients sleep through the night again within 2 months." |

## 6. Ops & Experience Decisions We Still Need
- **Primary CTA Path**: Decide Monday whether to stick with “Schedule Discovery Call” + Calendly (default) or reintroduce the assessment if it’s genuinely ready. Default to Calendly for MVP.
- **Pricing Transparency**: If exact tiers aren’t finalized, publish ranges (individual $4.5k–$6.5k, group $3k-ish) so visitors aren’t surprised. Otherwise, state “Discuss investment on the call.”
- **Methodology Deep Dive**: Choose one—(a) stand-alone `/methodology` page built Week 3, (b) gated PDF emailed post-opt-in, or (c) keep hidden indefinitely. Recommendation: new page so researchers have somewhere to land without cluttering hero.
- **Booking & Email Stack**: Stand up Calendly (or Cal.com) + GA4 tracking + email platform (ConvertKit/Mailchimp) during Week 2 so CTA flows don’t rely on manual follow-up.
- **Privacy/Terms**: Add links in footer before launch to close trust gap from earlier audit.

## 7. Design System

### Color Palette
```
Background (Dark—"Cosmic")
--cosmic-void:     #0A0A0F    (Primary background)
--cosmic-depth:    #13131A    (Secondary dark areas)
--cosmic-surface:  #1C1C26    (Cards/panels)

Text (Light—"Moonlight")
--moonlight-primary:   #F7F3E9    (Headlines, body text)
--moonlight-secondary: #EDE7D3    (Secondary text)
--moonlight-muted:     #D4CDB7    (Subtle elements)
--moonlight-accent:    #A5968A    (Earthy accent)

Accents (Gold/Bronze)
--accent-primary:      #C8A882    (Buttons, highlights)
--accent-secondary:    #8B7A6B    (Earth tone)
--accent-interactive:  #E6D0B3    (Interactive)

Glass (Overlays)
--glass-primary:    rgba(247, 243, 233, 0.1)
--glass-border:     rgba(247, 243, 233, 0.15)
```

### Typography
- **Serif (Headers)**: Lora (Google Fonts, weights: 400, 600)
  - H1: 60px desktop / 36px mobile, line-height 1.2
  - H2: 36px desktop / 30px mobile
  - H3: 24px desktop / 20px mobile
- **Sans-Serif (Body)**: Manrope (weights: 300, 400, 600)
  - Body: 16px desktop / 15px mobile, line-height 1.7
  - Light weight (300) for readability

### Components

**Buttons (CTAs)**:
- Background: Gold (#C8A882)
- Text: Dark, 16px semibold
- Padding: 16px horizontal × 40px vertical (min 44×44px for touch targets)
- Border radius: 8px
- Hover state: +10% brightness, shadow, -2px translateY (lifts on hover)

**Cards**:
- Background: Glass panel (0.1 opacity + 16px blur)
- Border: 1px, cosmic surface color
- Radius: 24px
- Padding: 32px
- Hover state: Shadow + -4px translateY (lifts on hover)

**Forms** (if needed for email capture):
- Background: Cosmic surface
- Border: 1px glass border
- Focus state: Gold border + subtle shadow (signals interactivity)

**Spacing System**:
- 8 levels: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Sections: 64px padding top/bottom (creates breathing room)
- Cards: 24px gap between items (groups content logically)

### Animations
- Fade-in: 0.6s ease-out
- Slide-up: 0.6s ease-out -20px translateY
- Transition timings: 0.2s (fast), 0.4s (medium), 0.6s (slow)
- Keep animations subtle—no parallax, no heavy effects

---

## 8. Technical Specifications

### Framework & Hosting
- **Stack Options**:
  - HTML/CSS/JS: Simplest, fast, static hosting (Vercel/Netlify)
  - React/Next.js: Most flexible, auto-deploy, SEO-ready
  - Webflow: Visual builder, no-code, built-in hosting
- **Recommendation**: HTML/CSS for MVP simplicity, or Next.js for scalability
- **Hosting**: New separate domain OR `/landing` path on existing site (decide in Week 1 ops meeting)
- **SSL**: Auto-generate via hosting provider (Let's Encrypt)

### Performance Targets
- Page load: <3 seconds on 4G
- Lighthouse score: >90 (all metrics)
- Core Web Vitals:
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1
- Optimization: Image minification (WebP), code-split JS, lazy-load photos, minify CSS, CDN for images

### Responsive Design
```
Mobile-first breakpoints:
- Base: 320–479px (small phones)
- Tablet: 480–767px (large phones, small tablets)
- Desktop: 768–1023px (tablets)
- Wide: 1024–1199px (large screens)
- Extra-wide: 1200px+ (very large)
```

### Accessibility (WCAG AA)
- Color contrast: 4.5:1 minimum (text vs. background)
- Keyboard navigation: All interactive elements accessible via Tab, visible focus states
- Screen readers: Semantic HTML, descriptive alt text on all images, ARIA labels for icon buttons
- Mobile: Touch targets ≥44×44px, no hover-only interactions, readable fonts (16px minimum)

### Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari (iOS) & Chrome Mobile: Latest 2 versions

---

## 9. CTA & Conversion Setup

### Primary CTA: "Let's Talk About This"
- **Location**: Hero (Section 1), Final Invitation (Section 10), optional sticky header
- **Action**: Opens discovery call booking (via Calendly, Acuity, or HubSpot form)
- **Booking System Options** (choose one):
  - **Calendly** (recommended): Embeds directly, free tier, minimal setup
  - **Acuity Scheduling**: Branded, flexible, integrates CRM ($15+/mo)
  - **HubSpot Form**: CRM integration, email capture, two-step process
  - **External Page**: Link to separate booking domain

### Secondary CTA: Email Contact
- **Text**: "Or if you have questions first: Ask us anything"
- **Link**: mailto:contact@kairos.com
- **Auto-response**: Confirm receipt + next steps

### Analytics & Event Tracking (GA4)

Set up the following events in Google Analytics 4 to measure performance:

**Events to Track**:
1. `page_view` (auto-tracked)
2. `click_cta_primary` (when user clicks "Let's Talk About This")
3. `booking_initiated` (when user opens calendar widget)
4. `email_signup` (if form-based email capture used)
5. `click_email_link` (when user clicks email contact link)
6. `scroll_depth` (20%, 50%, 75%, 100% milestones = engagement signal)
7. `click_outbound` (clicks to external links, if any)

**Conversion Goals** (in order of priority):
1. **Primary**: `booking_initiated` (user opened calendar booking)
2. **Secondary**: `email_signup` (user provided email, interested but not ready)
3. **Tertiary**: 50%+ scroll depth (high engagement, likely to convert later)

**Weekly Dashboard Metrics** (monitor these every Monday):
- Unique users (who visited)
- Session duration (target: >2 min, means they read content)
- Bounce rate (target: <40%, lower is better)
- CTA click-through rate (target: >5%, higher means page resonates)
- Conversion rate (target: >2%, visitors booking calls)

### Email Integration

Many visitors will be interested but not ready to book immediately. Email nurtures these prospects.

- **Choose One Platform**: Mailchimp (free, simple), ConvertKit (creator-focused), HubSpot (CRM), or custom (Firebase)
- **Email Sequence**: 4 emails over pre/post-launch period (see LANDING_PAGE_FINAL_COPY.md for exact copy templates)
- **Goal**: Convert interested-but-hesitant visitors into eventual booking
- **Success Metric**: Click-to-book conversion rate >10% from email (not all will book)

---

## 10. QA & Handoff Process

Before launch, verify all three areas: design, code, and content. Each has specific acceptance criteria.

### Design QA (Before Build Starts)

Designer: Complete this checklist before handing mockups to developer.

- [ ] **Colors**: Verify all colors match Section 7 specs (cosmic backgrounds, moonlight text, gold accents)
- [ ] **Typography**: Confirm Lora headers + Manrope body at correct sizes
- [ ] **Spacing**: Check spacing matches Section 7 system (4px through 96px levels)
- [ ] **Photos**: Verify correct sizes, quality, and diversity represented
- [ ] **Hover States**: Design hover effects for buttons, cards, links (clarity on interaction)
- [ ] **Mobile Layouts**: Design layouts for desktop, tablet, mobile (all breakpoints in Section 8)
- [ ] **Final Sign-Off**: Get Shalini & Jatin approval before handoff to developer

### Development QA (Before Launch)

Developer: Run through each category below. Document any failures.

**Functionality Tests**:
- All CTAs link to correct booking system or email
- All forms submit without errors
- Keyboard navigation works (Tab through all elements)
- No console errors or warnings (check DevTools)

**Performance Tests**:
- Lighthouse score >90 in all categories (use PageSpeed Insights)
- Page load time <3 seconds on 4G (test with throttling)
- All images optimized (WebP format, lazy-loaded where appropriate)
- No unused CSS or JavaScript (audit with DevTools Coverage tab)

**Cross-Browser Tests** (latest 2 versions of each):
- Google Chrome
- Firefox
- Safari (macOS)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

**Accessibility Tests**:
- WAVE extension: Zero errors (run extension on page)
- Color contrast: 4.5:1 minimum (use contrast checker on all text)
- Heading hierarchy: Clean H1 → H2 → H3 structure (no skipped levels)
- Alt text: Every image has descriptive alt text (describe what image shows, not "image")
- Keyboard focus: Tab through page, focus state visible on all buttons/links

**Mobile Tests**:
- Touch targets ≥44px×44px (buttons large enough to tap)
- Text readable without zoom (minimum 16px font)
- No horizontal scroll (page fits width on mobile)
- Forms mobile-friendly (labels above, inputs full-width)

**Analytics Tests**:
- GA4 code installed correctly (check in page source)
- All 7 events firing (open GA4 Real-time, click CTAs, scroll, verify)
- Conversion goals configured (booking_initiated, email_signup, scroll depth)

### Content QA

Editor: Verify copy matches approved version and is error-free.

- [ ] All copy word-for-word matches LANDING_PAGE_FINAL_COPY.md (no ad-lib changes)
- [ ] No typos, grammatical errors, or formatting inconsistencies (spell-check + proofread)
- [ ] All links point to correct URLs (test each link)
- [ ] Client names spelled correctly (verify against approved stories)
- [ ] All quotes attributed correctly (match to source story)
- [ ] Section headers match approved copy exactly

### Launch Checklist

Before going live, verify all the following:

- [ ] **Design**: Approved by Shalini & Jatin ✅
- [ ] **QA Tests**: All three categories (functionality, performance, accessibility) passed ✅
- [ ] **Analytics**: GA4 tracking verified in Real-time tab ✅
- [ ] **Booking System**: Test full flow (click CTA → booking page loads → confirm calendar works)
- [ ] **Rollback Plan**: Document how to revert if major issues arise (git revert command documented)
- [ ] **Monitoring Setup**: Know how to check GA4 dashboard, error logs, form submissions
- [ ] **Deploy**: Push to production, monitor 24 hours, gather early feedback

---

## 11. Timeline & Rhythm

Four-week execution plan. Each week has a clear focus and specific deliverables.

**Week 1: Alignment & Asset Intake**
- **Monday 9–10 AM**: Kickoff meeting. Present vision, lock decisions (CTA system, pricing transparency, methodology destination).
- **Daily 9 AM**: 15-minute standups (Tue-Fri) to unblock.
- **Deliverables by Friday EOW**: Origin story drafts (Shalini + Jatin), 2–3 warm photos each, 4 client candidates identified, CTA/pricing/methodology decisions documented.

**Week 2: Story Capture + Build**
- Conduct 45-minute interviews with 4 clients (Shalini identifies, Jatin conducts).
- Transcribe and edit interviews into story format.
- Draft landing page copy across all 10 sections, integrating finalized stories.
- Integrate coach bios (origin stories + photos).
- **Deliverables by Friday EOW**: Finalized stories, approved photos, all copy locked, booking system + email platform selected and configured.

**Week 3: Design/Dev Polish**
- Designer: Create mockups for all 10 sections (approve with Shalini & Jatin).
- Developer: Build responsive HTML/CSS/JS from approved designs.
- Complete missing assets (final photo sets, community gallery photos).
- Integrate booking system (Calendly/Acuity/HubSpot).
- Set up GA4 event tracking.
- Build methodology page (if chosen in Week 1).
- **Deliverables by Friday EOW**: Landing page fully built and tested, website refactoring complete, all QA passed.

**Week 4: QA + Launch**
- Run final accessibility + mobile QA (Section 10 checklist).
- Copy proof (verify word-for-word match to LANDING_PAGE_FINAL_COPY.md).
- Validate analytics tracking (GA4 Real-time test).
- Get final approvals from Shalini & Jatin.
- Deploy to production.
- Monitor first 48 hours (watch GA4 dashboard, check for errors).
- Celebrate launch 🚀

## 12. Immediate To-Do List (No Empty Slots)

Every task below has one owner and a specific due date. Complete these before Week 1 Friday EOW to unblock Week 2.

| Task | Owner | Due | Details |
|------|-------|-----|---------|
| Send kickoff email + calendar invites to team | Jatin | Today | Email should reference this REVAMP_MASTER_PLAN.md doc (attachment or link). Include Monday 9 AM kickoff invite + Tue-Fri standup invites. |
| Prepare Monday kickoff walkthrough | Jatin | Before Monday | Prepare brief slides or doc covering: 10-section architecture, current status (PHASES 1-3 live), decisions needed (CTA, pricing, methodology). |
| Draft personal origin story outline + photo shortlist | Shalini | Tuesday | Write 2–3 paragraph outline emphasizing "breakdown → breakthrough." Shortlist 3 candidate photos (warm, genuine, approachable). |
| Draft personal origin story + photo shortlist | Jatin | Tuesday | Write 2–3 paragraphs in first person, connecting research background to human insight. Gather own 2–3 candidate photos. |
| Identify 4 client candidates + note transformations | Shalini | Wednesday | List client names, contact info, key transformation (sleep returned? relationships healed? clarity found?). Why does each fit Kairos positioning? |
| Build client outreach emails + schedule interviews | Jatin | Thursday | Customize outreach email (see examples in LANDING_PAGE_FINAL_COPY.md). Offer 45-minute slots for Week 2 (Tue-Thu). |
| Confirm 3 strategic decisions | Shalini + Jatin | Thursday | Lock in writing: (1) CTA system (Calendly vs. Acuity vs. HubSpot), (2) pricing transparency (ranges vs. "discuss on call"), (3) methodology destination (/methodology page vs. PDF vs. keep hidden). |
| Gather community gallery photos (first batch) | Shalini | Friday | Pull at least 15–20 approved photos from existing archives (ensure consent + diversity). Target: 50 total by Week 2 Friday. |
| **CRITICAL: Fix form endpoints** | Jatin | ASAP (Today) | Hook contact + newsletter forms to working Formspree (or Netlify/serverless) endpoint. Add inline success/error states. Keep aria-labels intact. No placeholder IDs. |
| **CRITICAL: Implement mobile navigation** | Jatin | ASAP (Today) | Add hamburger menu <768px breakpoint, drawer collapse/expand, 44×44px tap targets, active state with contrast + bold. Test on iPhone 8 + Android. |
| **HIGH: Audit & fix CTA contrast** | Jatin | ASAP (Today) | Test all buttons for ≥4.5:1 contrast (gold on dark must pass). If gold (#C8A882) fails, use darker solid or add outline. Document ratio for each CTA. |
| **HIGH: Refactor dense copy sections** | Jatin | ASAP (Today) | Break Sections 5 & 9 into 2–3 sentence paragraphs. Add manual line breaks for mobile readability. Ensure all body text ≥16px on mobile. |

**Success Metric for Week 1 Friday**: All tasks complete, including Critical/High audit fixes. Move directly into Week 2 story capture without waiting for additional stakeholders or approvals.

## 13. Site Quality & Accessibility Fixes (Based on Nov 12 UX Audit)

**CRITICAL/HIGH ITEMS: ALL COMPLETE ✅** (Commit: `326dcff`, `023150f`)

| Priority | Issue | Required Fix | Status | Owner |
|----------|-------|--------------|--------|-------|
| **Critical** ✅ | Forms use placeholder Formspree ID | Wired to Formspree endpoint with inline validation, error/success states (aria-live), aria-labels intact | COMPLETE (Commit 023150f) | Jatin |
| **High** ✅ | Navigation + hero not mobile-friendly | Hamburger/drawer below 768px, 44×44px tap targets, mobile text breaks, active state styling | COMPLETE (Commit 326dcff) | Jatin |
| **High** ✅ | Content hierarchy weak (dense copy) | Break paragraphs into 2–3 sentence max, consistent line breaks for mobile readability | COMPLETE (Copy refactored) | Jatin |
| **High** ✅ | Nav visibility/active state subtle | Gold accent (#C8A882), bold + background highlight, 44×44px tap targets, visible focus outlines | COMPLETE (Commit 326dcff) | Jatin |
| **Medium** | Placeholder assets ("Professional headshot coming soon") | Replace with real content as assets arrive; use neutral gradient placeholder meanwhile | IN PROGRESS (Week 1–2) | Shalini (photos) + Jatin |
| **Medium** | Contrast, alt text, semantic gaps | CTA contrast verified: 8.0:1 (normal) / 9.67:1 (focus) ✓ AAA | IN PROGRESS | Jatin |
| **Medium** | White-space + paragraph spacing inconsistent | Spacing utilities applied to form sections + nav drawers | IN PROGRESS | Jatin |
| **Low** | Button feedback + alignment | Hover/focus states strengthened; animations smooth | LOW PRIORITY | Jatin |

**Summary**: All Critical/High items blocking design/build phase are now complete. Medium/Low items can fold into Week 2/3 polish without impacting launch timeline.

---

## 14. Reference Documents

**REVAMP_MASTER_PLAN.md** (this document) is the single source of truth. Use these supporting docs for specific contexts:

**LANDING_PAGE_FINAL_COPY.md** (Ready-to-implement reference):
- All copy for 10 sections (finalized, word-for-word approved)
- Real client stories (Jacqui, Donald, Ajay, Antonia)
- Coach origin stories (Shalini, Jatin)
- Email sequence (4 emails, templates)
- Discovery call opening script
- Social media post templates (4 types)
- Use: Hand this to whoever writes final copy

**DESIGNER_DEVELOPER_HANDOFF.md** (Technical reference):
- Expanded design system (colors, typography, components, spacing, animations)
- Technical specifications (framework, hosting, performance, accessibility, browsers)
- CTA & analytics setup (GA4 events, conversion goals)
- Advanced QA checklists with specific tools/commands
- Photo specifications (dimensions, formats, file sizes)
- Use: Hand this to designer + developer at start of Week 3

**All other documents have been consolidated** into this master plan and can be archived.

---

**Status**: Ready to Execute | Ready to Share
**Last Updated**: November 12, 2025
**Next**: Send to Shalini & Jatin today, Monday 9 AM Kickoff
