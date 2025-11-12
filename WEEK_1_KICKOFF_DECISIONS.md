# Week 1 Kickoff: 3 Critical Decisions

## DECISION #1: Assessment Tool vs. Schedule Discovery Call CTA

**THE QUESTION**: What's our primary CTA on the landing page?

### OPTION A: "Take the Kairos Assessment"
**Requirements**:
- Assessment tool is LIVE (not prototype)
- Results deliver immediate value (personalized insights, not just a type/score)
- Results page has clear path to booking ("Schedule call to discuss your results")

**Pros**:
- Qualified lead (they've self-diagnosed via assessment)
- Higher engagement (visitors invested in assessment)
- Data collection (we learn about visitor pain points)

**Cons**:
- If assessment doesn't convert to bookings, it adds friction
- Requires more development work
- More complex testing/optimization needed

---

### OPTION B: "Schedule Your Discovery Call" (RECOMMENDED FOR MVP)
**Requirements**:
- Just needs working booking calendar (Calendly/HubSpot/Acuity)
- Simple 15-min booking form

**Pros**:
- Lower friction (direct path to conversation)
- Faster to launch (less technical complexity)
- Easier to test & optimize
- Proven conversion path

**Cons**:
- Lower qualification (we don't know what brings them)
- Less initial data collection
- Requires good conversation skills to convert calls → bookings

---

### DECISION FRAMEWORK:
```
Is assessment tool live & delivering immediate value?
  ├─ YES → Use "Take Assessment" CTA
  │  └─ Ensure results page → booking link conversion
  └─ NO → Use "Schedule Discovery Call" CTA
     └─ Build assessment as Phase 2 feature post-launch
```

**FALLBACK COPY** (if using Schedule Call):
- Hero CTA: "Schedule Your Discovery Call"
- Subtext: "15 minutes. Free. No obligation. Let's understand your unique situation."

---

## DECISION #2: Pricing Tiers & Final Pricing

**THE QUESTION**: What exact prices are we listing on the landing page?

### CURRENT STATE:
- Beta pricing: $3,000 for 10 sessions
- Future: Expected to increase 3–5x for production

### LANDING PAGE OPTIONS:

**OPTION A: List Exact Pricing (Most Transparent)**
```
Individual Program
- 12 weeks, 1 session/week (or 2x/month)
- Investment: $5,000–$6,500
- Includes: assessments, daily practices, group community access

Group Program (4-6 people)
- 12 weeks, 1 session/week
- Investment per person: $3,000–$3,500
- Includes: group coaching, assessments, community cohort

Corporate/Organizational
- Custom pricing based on team size
- Includes: team assessments, leader briefing, integration support
```

**OPTION B: Use Ranges (Flexible)**
```
Individual: $4,500–$6,500
Group: $2,500–$3,500 per person
Corporate: Custom
(Details available after discovery call)
```

**OPTION C: Defer Exact Pricing (Lowest Transparency)**
```
"Investment varies based on your program choice.
Start with a discovery call to discuss what fits your needs and budget."
```

---

### LANDING PAGE MENTION:
The FAQ section (Section 9) will ask: "What about pricing and payment plans?"

**Response options:**
- **If exact pricing locked**: Use exact FAQ response with payment plan options
- **If pricing TBD**: Use fallback: "Custom pricing tailored to your needs. Discuss investment during discovery call."

### DECISION FRAMEWORK:
```
Is pricing finalized & approved?
  ├─ YES → Use Option A (exact pricing) + include in FAQ
  ├─ MOSTLY → Use Option B (ranges) + note "(details in discovery call)"
  └─ NO → Use Option C (defer) + focus conversion on discovery call
```

**ACTION**: Leadership must confirm by **Monday EOD** or we'll use ranges as fallback.

---

## DECISION #3: Secondary Page Strategy

**THE QUESTION**: How do we handle the Methodology Deep Dive content?

### CURRENT STATE:
The existing index.html has ~4,000 words of Methodology Deep Dive (lines 3704-4382 per LANDING_PAGE_COMPACTION_PLAN.md)

### OPTION A: Build Separate Page (Best UX, Most Work)
**URL**: `/methodology-deep-dive`
**Requirements**:
- Extract existing methodology content from index.html
- Create new HTML page with responsive design
- Ensure SEO (title tag, meta description, H1-H6 hierarchy)
- Link from main landing page: "Learn More" → `/methodology-deep-dive`

**Timeline**:
- Week 2: Design & content formatting
- Week 3: Responsive testing + mobile optimization
- Ready by launch? **YES or NO?**

**Decision needed**: Who owns this? Is it built by Week 3 or deferred?

---

### OPTION B: Keep on Main Page with Anchor Links (Simpler)
**URL**: Main landing page with anchor link
**Implementation**:
- Keep existing methodology content on same page
- Add anchor link: `#methodology-deep-dive`
- "Learn More" button jumps to section on same page
- Pros: Less work, faster to launch
- Cons: Makes main page longer, harder to manage

---

### OPTION C: Use Email Fallback (Minimal Work)
**Implementation**:
- Remove "Learn More" link from main CTA
- Instead: "Get Our Methodology Guide (email opt-in)"
- Send detailed methodology PDF via email
- Pros: Captures email address, less development
- Cons: Lower perceived quality, adds friction

---

### DECISION FRAMEWORK:
```
Will /methodology-deep-dive page be built by Week 3?
  ├─ YES → Assign owner, confirm timeline, link from main page
  ├─ MAYBE → Use Option B (anchor link as fallback)
  └─ NO → Use Option C (email PDF fallback)
```

**ACTION**: Content lead must confirm **Monday EOD** or we'll default to anchor links.

---

## WHAT HAPPENS NEXT

### MONDAY KICKOFF (9–10 AM):
1. **Shalini + Jatin**: Present current state on each decision
2. **You**: Facilitate discussion on options
3. **Decision**: Lock one choice per decision (A, B, or C)
4. **Document**: Record decision + fallback strategy
5. **Assign**: Who owns implementation?

### MONDAY AFTERNOON (1–5 PM):
Create Dependency Board with 12 items:
- Assessment tool (locked decision)
- Pricing finalized (locked decision)
- Secondary page ownership (locked decision)
- 9 other items (testimonials, metrics, assets, tools, etc.)

### REST OF WEEK:
Execute with clear dependencies + daily standups to unblock.

---

## DECISION RECORD (Fill in During Kickoff)

**DECISION #1 - Assessment CTA:**
- [ ] Option A: "Take Assessment"
- [ ] Option B: "Schedule Discovery Call" (Recommended)
- Rationale: ____________________
- Owner: ____________________

**DECISION #2 - Pricing:**
- [ ] Option A: Exact pricing ($5–$6.5k, etc.)
- [ ] Option B: Ranges ($4.5–$6.5k, etc.)
- [ ] Option C: Deferred (discuss in discovery call)
- Pricing tiers locked: ____________________
- Owner: ____________________

**DECISION #3 - Secondary Page:**
- [ ] Option A: Build separate /methodology-deep-dive page
- [ ] Option B: Anchor links on main page
- [ ] Option C: Email PDF fallback
- Owner: ____________________
- Timeline: ____________________
