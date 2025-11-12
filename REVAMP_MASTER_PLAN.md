# Kairos Landing Page Revamp — Consolidated Plan

## 1. Mission & Current Context
- **Goal**: Ship a community-first landing page + refactored site that makes burnt-out achievers feel seen, shows proof through real lives, and converts via low-friction conversations.
- **Team**: Shalini (guide/story), Jatin (you: product, copy, implementation). No other owners—every task sits with one of us.
- **Current Site State**: Hero rewritten, methodology deep dive hidden, framework cards shortened. Bios, global copy trim, community/story assets, and tooling decisions still open.
- **Success signal**: Qualified visitors booking discovery calls because they feel recognized, safe, and curious—not because we overwhelmed them with methodology.

## 2. Core Message & Tone (Use Everywhere)
- **Message**: “External success doesn’t guarantee internal peace. You’re not broken, you’re human, and you don’t have to run alone.”
- **Tone**: Vulnerable, honest, community-first. No jargon, no credentials-first intros, no “12‑week optimization” promises. Stories before stats.
- **CTA Style**: Conversational (“Let’s talk about this”), single primary action, optional email fallback for the hesitant.

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
- **Phase 1 (Hero)**: ✅ Live.
- **Phase 2 (Hide deep methodology)**: ✅ Content commented out; needs final destination (Section 6 below).
- **Phase 3 (Framework cards simplified)**: ✅ Only tags remain.
- **Phase 4 (Coach bios)**: ⏳ Pending origin stories + photos.
- **Phase 5 (Global brevity pass)**: ⏳ Week 2 polish—target sub-40-word paragraphs, plain language, intentional whitespace.
- **Testing**: Keep verifying on desktop + mobile + different ports (`localhost:8002` etc.) after each change.

## 5. Asset & Story Pipeline (Who Does What)
| Deliverable | Owner | Notes / Due |
|-------------|-------|-------------|
| Shalini origin story (2–3 paras) + 2–3 warm photos | Shalini | Emphasize “breakdown → breakthrough,” credentials footnote only. Target: Week 1 Wednesday. |
| Jatin origin story + 2–3 warm photos | Jatin | Write in first person about research background + human insight; gather own photos. |
| Deep client stories (Jacqui/Donald/Ajay/Antonia style) | Shalini (identify) + Jatin (interview + edit) | Identify 4 clients, run 45‑min interviews Week 2, secure approvals/photos. |
| Community gallery photos (30–50) | Shalini | Pull from existing archives; ensure consent + diversity. |
| Metrics or qualitative proof | Jatin | If hard numbers aren’t verified, craft qualitative statements (e.g., “Most clients sleep through the night again within 2 months”). |

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
- **Buttons**: Gold background (#C8A882), dark text, 16px semibold, 16px×40px padding, 8px radius, hover: +10% brightness + shadow + -2px translateY
- **Cards**: Glass panel (0.1 opacity + 16px blur), 1px border, 24px radius, 32px padding, hover: shadow + -4px translateY
- **Forms**: Cosmic surface background, glass border, focus: gold border + subtle shadow
- **Spacing**: 8-level system (4px to 96px), sections: 64px padding top/bottom

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
```
Events to Track:
1. page_view (auto)
2. click_cta_primary (Section 1 & 10 button clicks)
3. booking_initiated (user opens calendar)
4. email_signup (if form-based email capture)
5. click_email_link (email contact clicks)
6. scroll_depth (20%, 50%, 75%, 100% milestones—engagement signal)
7. click_outbound (external links, if any)

Conversion Goals:
- Primary: booking_initiated
- Secondary: email_signup
- Tertiary: 50%+ scroll depth (high engagement)

Dashboard: Track weekly—unique users, session duration (target >2 min), bounce rate (<40%), CTA click-through rate (>5%), conversion rate (>2% to booking)
```

### Email Integration
- **Platform**: Mailchimp, ConvertKit, HubSpot, or custom (Firebase)
- **Sequence**: 4 emails pre/post-launch (see LANDING_PAGE_FINAL_COPY.md for templates)
- **Goal**: Nurture interested but not-yet-booking visitors

---

## 10. QA & Handoff Process

### Design QA (Before Build)
- [ ] Colors match spec (cosmic dark, moonlight text, gold accents)
- [ ] Typography matches (Lora headers, Manrope body)
- [ ] Spacing consistent (use spacing system)
- [ ] Photos integrated (correct sizes, quality, diversity)
- [ ] Hover/focus states designed (buttons, cards, links)
- [ ] Mobile layouts designed (all breakpoints)
- [ ] Mockups reviewed + signed off by Shalini & Jatin

### Development QA
**Functionality**: CTAs link correctly, forms submit, keyboard nav works, no console errors
**Performance**: Lighthouse >90, load <3s, images optimized, no unused CSS/JS
**Cross-Browser**: Chrome, Firefox, Safari, iOS Safari, Android Chrome all latest versions
**Accessibility**: WAVE zero errors, 4.5:1 contrast, heading hierarchy clean, alt text on all images, keyboard focus visible
**Mobile**: Touch targets ≥44px, readable text (no zoom needed), no horizontal scroll, forms mobile-friendly
**Analytics**: GA4 code installed, events firing correctly, conversion tracking working

### Content QA
- [ ] All copy matches LANDING_PAGE_FINAL_COPY.md
- [ ] No typos or formatting issues
- [ ] Links point to correct URLs
- [ ] Client names spelled correctly
- [ ] All quotes attributed

### Launch Checklist
- [ ] Design approved by Shalini & Jatin
- [ ] All QA tests passed
- [ ] Analytics tracking verified
- [ ] Booking system tested end-to-end
- [ ] Backup/rollback plan documented
- [ ] Post-launch monitoring setup
- [ ] Deploy → monitor 24 hours → celebrate 🚀

---

## 11. Timeline & Rhythm
- **Week 1 (Alignment & Asset Intake)**  
  - Monday 9–10 AM kickoff (present vision, lock CTA/pricing/methodology decisions).  
  - Daily 9 AM standups (15 min) to unblock.  
  - Deliverables: origin story drafts, photo selects, client candidate list, CTA/pricing decisions, methodology plan.
- **Week 2 (Story Capture + Build)**  
  - Conduct and transcribe client interviews.  
  - Draft new copy across 10 sections, weaving in stories.  
  - Integrate bios, CTA flow, community gallery placeholders.
- **Week 3 (Design/Dev Polish)**  
  - Final photo sets, responsive tweaks, methodology page (if chosen), booking + email integration, GA4 script.
- **Week 4 (QA + Launch)**  
  - Accessibility + mobile QA, copy proof, analytics validation, final approvals, deploy + monitor.

## 12. Immediate To-Do List (No Empty Slots)
| Task | Owner | Due | Details |
|------|-------|-----|---------|
| Send kickoff email + invites referencing this plan | Jatin | Today | Use condensed email body; attach this doc only. |
| Prepare kickoff walkthrough (slides or doc) | Jatin | Before Monday | Highlight 10 sections, status, decisions needed. |
| Draft Shalini origin story outline + photo shortlist | Shalini | Tue | Provide bullet outline + link to candidate photos for feedback. |
| Draft Jatin origin story + photo shortlist | Jatin | Tue | 2–3 paras; ensure tone matches hero copy. |
| Identify 4 client candidates + note transformations | Shalini | Wed | Include contact info + why each fits (sleep, presence, purpose, belonging). |
| Build client outreach emails + schedule interviews | Jatin | Thu | Customize template, offer 45‑min call slots for Week 2. |
| Confirm CTA path + pricing language + methodology destination | Shalini + Jatin | Thu | Document decisions in shared note; informs copy + dev scope. |
| Gather community gallery assets (start) | Shalini | Fri | At least 15 approved photos to start layout. |

Once these are done, move straight into Week 2 story capture + copy drafting without waiting for additional stakeholders.

## 13. Site Quality & Accessibility Fixes (Based on Nov 12 UX Audit)
| Priority | Issue | Required Fix | Owner |
|----------|-------|--------------|-------|
| **Critical** | Forms use placeholder Formspree ID (`YOUR_FORM_ID`) | Hook newsletter + contact forms to working Formspree (or Netlify/serverless) endpoints, add inline success/error feedback, keep aria-labels intact. | Jatin |
| **High** | Navigation + hero not mobile-friendly | Add hamburger/drawer below 768px, enlarge nav font/tap targets, reduce hero text clamp + add manual line breaks for readability. | Jatin |
| **High** | Content hierarchy weak (dense paragraphs, low-contrast CTAs) | Break story sections into shorter paragraphs/bullets, add subheads, increase CTA contrast (e.g., use accent gradient) and spacing. | Jatin |
| **High** | Nav visibility/active state subtle | Boost font size to base+, add bold active background/underline with sufficient contrast, ensure min 44×44px tap area and visible focus states. | Jatin |
| **Medium** | Placeholder assets (“Professional headshot coming soon”, “YouTube embed coming soon”) | Replace with real content as soon as assets arrive; otherwise remove blocks or use neutral graphic. | Shalini (photos) + Jatin (implement) |
| **Medium** | Contrast, alt text, semantic gaps | Run contrast checks on gradients, add overlays as needed, ensure all `<img>` tags include descriptive `alt`, add sr-only text for background images. | Jatin |
| **Medium** | White-space + paragraph spacing inconsistent | Apply spacing utilities (`--space-6` etc.), limit text width, increase line-height in long-form sections. | Jatin |
| **Low** | Button feedback + alignment | Strengthen hover/focus states using `--gradient-primary-hover` / outlines, tidy spacing in cards/footer, standardize external link styling with icon + label. | Jatin |

Tackle Critical/High items in parallel with content work so functional issues don't block launch readiness. Form integration + responsive nav should be completed before Week 2 design polish begins. Buttons, contrast, and spacing tweaks can fold into the Week 2/3 global copy tidy-up once the major assets are in place.

---

## 14. Reference Documents

This master plan is the single source of truth. Supporting documents:

- **LANDING_PAGE_FINAL_COPY.md**: All copy for 10 sections (finalized, ready to implement). Reference for actual text, client stories, coach origin stories, email templates, discovery call script, social media posts.

- **DESIGNER_DEVELOPER_HANDOFF.md**: Detailed technical handoff document for design + dev team. Includes expanded color codes, responsive specs, photo dimensions, asset management, advanced QA checklist. Intended for designer/developer reference during Week 3 build.

All other planning documents have been consolidated into this master plan and can be archived.

---

**Status**: Ready to Execute
**Last Updated**: November 12, 2025
**Next**: Monday 9 AM Kickoff
