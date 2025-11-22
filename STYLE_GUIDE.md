# Kairos Path - Component Style Guide

**Version:** 2.0 (Phase 2 - New Component System)
**Last Updated:** November 21, 2024
**Status:** Active - Use these components for all new markup

---

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [Glass Panel System](#glass-panel-system)
3. [Accordion System](#accordion-system)
4. [Section Header System](#section-header-system)
5. [Stat Card System](#stat-card-system)
6. [Usage Examples](#usage-examples)
7. [Best Practices](#best-practices)
8. [Accessibility](#accessibility)

---

## Design Tokens

All colors, sizes, and spacing are controlled by CSS variables defined in `/styles/design-tokens.css`.

### Color System

```css
/* Moonlight Palette - Primary Text Colors */
--moonlight-primary: #F7F3E9;      /* Main text - 21:1 contrast */
--moonlight-secondary: #EDE7D3;    /* Secondary text - 12.6:1 contrast */
--moonlight-muted: #D4CDB7;        /* Subtle elements */
--moonlight-accent: #A5968A;       /* Earthy accents */

/* Dark Backgrounds */
--cosmic-void: #0A0A0F;            /* Primary background */
--cosmic-depth: #13131A;           /* Secondary areas */
--cosmic-surface: #1C1C26;         /* Raised surfaces */

/* Glass Surfaces */
--glass-primary: rgba(247, 243, 233, 0.28);    /* Primary glass */
--glass-secondary: rgba(247, 243, 233, 0.18);  /* Secondary glass */
--glass-border: rgba(247, 243, 233, 0.25);     /* Glass borders */
--glass-highlight: rgba(247, 243, 233, 0.32);  /* Glass highlights */

/* Accent Colors */
--accent-primary: #C8A882;         /* Warm gold - main accent */
--accent-secondary: #8B7A6B;       /* Earth tone */
--accent-interactive: #E6D0B3;     /* Interactive elements */
```

### Glassmorphism Properties

```css
--blur-strong: blur(24px);         /* Heavy blur for emphasis */
--blur-medium: blur(16px);         /* Standard blur */
--blur-subtle: blur(8px);          /* Minimal blur */
```

### Animations & Transitions

```css
--transition-fast: 0.2s ease-out;      /* Quick micro-interactions */
--transition-medium: 0.4s ease-out;    /* Standard transitions */
--transition-slow: 0.6s ease-out;      /* Slow animations */
```

### Usage

Use CSS variables in your styles:
```css
.my-element {
    background: var(--glass-primary);
    color: var(--moonlight-primary);
    transition: all var(--transition-medium);
}
```

---

## Glass Panel System

The glass panel is the foundation of the design system. Use it for any content container that needs visual separation.

### Base Glass Panel

```html
<div class="glass-panel">
    Your content here
</div>
```

**Properties:**
- Medium blur effect
- 24px border radius
- Hover state with subtle lift (+2px)
- Smooth transition on all properties

### Size Variants

Use size modifiers to control padding and border radius:

#### Compact (for small content blocks)
```html
<div class="glass-panel glass-panel--compact">
    Small content
</div>
```
**Use cases:** Small info boxes, navigation elements, badges

#### Medium (standard size)
```html
<div class="glass-panel glass-panel--medium">
    Standard content
</div>
```
**Use cases:** Feature cards, content blocks, standard panels

#### Large (prominent content)
```html
<div class="glass-panel glass-panel--large">
    Large featured content
</div>
```
**Use cases:** Hero sections, major content areas, story cards

### Blur Variants

Control the glass effect intensity:

#### Subtle (minimal blur)
```html
<div class="glass-panel glass-panel--subtle">
    Subtle glass effect
</div>
```
**Use cases:** Background elements, layering, accessibility for text

#### Strong (heavy blur)
```html
<div class="glass-panel glass-panel--strong">
    Strong glass effect
</div>
```
**Use cases:** Emphasis, modal overlays, prominent features

### Visual Variants

#### Frosted (readability over busy backgrounds)
```html
<div class="glass-panel glass-panel--frosted">
    Content over complex backgrounds
</div>
```
**Properties:** Gradient background, stronger blur, higher opacity
**Use cases:** Headers, emphasis sections, accessibility over busy visuals

#### Cosmic (darker variant)
```html
<div class="glass-panel glass-panel--cosmic">
    Deep space style content
</div>
```
**Properties:** Dark background, minimal border
**Use cases:** Deep AI/cosmic sections, dark emphasis

#### Interactive (clickable panels)
```html
<div class="glass-panel glass-panel--interactive">
    Click me!
</div>
```
**Properties:** Cursor pointer, enhanced hover lift and shadow
**Use cases:** Clickable cards, interactive elements

### Accent Variants

Add colored borders for visual hierarchy:

#### Top Accent Border
```html
<div class="glass-panel glass-panel--accent-top">
    Content with accent top
</div>
```
**Properties:** 4px gold border on top
**Use cases:** Priority items, important cards, featured content

#### Left Accent Border
```html
<div class="glass-panel glass-panel--accent-left">
    Content with accent left
</div>
```
**Properties:** 4px gold border on left
**Use cases:** Sidebar content, emphasis on left, quote-style content

### Combining Variants

You can combine multiple variants for complex layouts:

```html
<!-- Large frosted panel with top accent border -->
<div class="glass-panel glass-panel--large glass-panel--frosted glass-panel--accent-top">
    Featured prominent content
</div>

<!-- Interactive story card -->
<div class="glass-panel glass-panel--large glass-panel--interactive">
    Clickable story
</div>

<!-- Subtle background element -->
<div class="glass-panel glass-panel--subtle glass-panel--compact">
    Background element
</div>
```

### Real Examples

**Story Card:**
```html
<div class="glass-panel glass-panel--large glass-panel--frosted">
    <div class="photo-placeholder">
        <span>📸</span>
    </div>
    <div class="p-8">
        <h3>Jacqui's Awakening</h3>
        <p>"Eight days ago, I wondered if anyone would notice if I died..."</p>
        <div class="glass-subtle p-4">
            <strong>Today she can:</strong> Rest without guilt...
        </div>
    </div>
</div>
```

---

## Accordion System

Universal accordion component for expandable content sections.

### Basic Structure

```html
<div class="accordion">
    <div class="accordion__item">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Click to expand</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                Your expandable content here
            </div>
        </div>
    </div>
</div>
```

### With Icon Support

```html
<div class="accordion">
    <div class="accordion__item">
        <button class="accordion__header" aria-expanded="false">
            <div class="accordion__header-content">
                <span class="accordion__icon">🔍</span>
                <span class="accordion__title">Explore Inner Wisdom</span>
            </div>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                Content about inner wisdom...
            </div>
        </div>
    </div>
</div>
```

### Frosted Variant

For better readability over complex backgrounds:

```html
<div class="accordion">
    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Methodology Phase</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                Phase content with frosted background
            </div>
        </div>
    </div>
</div>
```

### Compact Variant

For tighter spacing:

```html
<div class="accordion">
    <div class="accordion__item accordion__item--compact">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Compact item</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">Compact content</div>
        </div>
    </div>
</div>
```

### Using Chevron Instead of Plus

```html
<div class="accordion">
    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Phase 1: Discovery</span>
            <span class="accordion__toggle accordion__toggle--chevron">▼</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                <!-- content rotates 180° instead of 45° -->
            </div>
        </div>
    </div>
</div>
```

### Multiple Accordions

```html
<div class="accordion">
    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Stream 1: Inner Wisdom</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                Gene Keys, IFS, Shadow Work
            </div>
        </div>
    </div>

    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Stream 2: Embodied Presence</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">
                Somatics, Mindfulness, Breathwork
            </div>
        </div>
    </div>
</div>
```

### JavaScript Required

Accordion content expand/collapse is handled by JavaScript. Make sure your JavaScript:
1. Toggles `aria-expanded` attribute on header click
2. Toggles `aria-hidden` attribute on content
3. Animates `max-height` for smooth expansion

---

## Section Header System

Standardized headers for page sections.

### Basic Section Header

```html
<div class="section-header">
    <h2 class="section-header__title">Section Title</h2>
    <p class="section-header__description">
        Description text explaining what this section is about
    </p>
</div>
```

### With Glow Effect

```html
<div class="section-header">
    <h2 class="section-header__title section-header__title--glow">
        Voices from the Path
    </h2>
    <p class="section-header__description">
        Real people discovering what becomes possible
    </p>
</div>
```

### With Gradient Text

```html
<div class="section-header">
    <h2 class="section-header__title section-header__title--gradient">
        Your Transformation
    </h2>
</div>
```

### With Frosted Background

```html
<div class="section-header section-header--frosted">
    <h2 class="section-header__title section-header__title--glow">
        Methodology Deep Dive
    </h2>
    <p class="section-header__description">
        The integrated framework behind everything
    </p>
</div>
```

### Real Example

```html
<section id="stories" class="py-28 px-4 cosmic-section">
    <div class="container mx-auto max-w-6xl">
        <div class="section-header section-header--frosted">
            <h2 class="section-header__title section-header__title--glow">
                Voices from the Path
            </h2>
            <p class="section-header__description">
                Real people discovering what becomes possible when they finally trust themselves
            </p>
        </div>
    </div>
</section>
```

---

## Stat Card System

Cards for displaying statistics, outcomes, or features.

### Basic Stat Card

```html
<div class="stat-card">
    <span class="stat-card__number">87%</span>
    <p class="stat-card__label">Report improved emotional clarity</p>
</div>
```

### Frosted Variant

```html
<div class="stat-card stat-card--frosted">
    <span class="stat-card__number">3-6</span>
    <p class="stat-card__label">Months to integrated transformation</p>
</div>
```

### Grid of Stat Cards

```html
<div class="grid md:grid-cols-3 gap-7">
    <div class="stat-card stat-card--frosted">
        <span class="stat-card__number">100%</span>
        <p class="stat-card__label">Personalized approach</p>
    </div>

    <div class="stat-card stat-card--frosted">
        <span class="stat-card__number">4</span>
        <p class="stat-card__label">Core frameworks integrated</p>
    </div>

    <div class="stat-card stat-card--frosted">
        <span class="stat-card__number">87%</span>
        <p class="stat-card__label">Report measurable results</p>
    </div>
</div>
```

---

## Usage Examples

### Complete Section: Story Cards

```html
<section id="stories" class="py-28 px-4 cosmic-section">
    <div class="container mx-auto max-w-6xl">
        <!-- Header -->
        <div class="section-header">
            <h2 class="section-header__title section-header__title--glow">
                Voices from the Path
            </h2>
            <p class="section-header__description">
                Real people discovering what becomes possible when they finally trust themselves
            </p>
        </div>

        <!-- Story Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
            <!-- Each story loaded from /data/stories.json -->
            <div class="glass-panel glass-panel--large glass-panel--frosted">
                <div class="photo-placeholder bg-gradient-to-br from-moonlight-muted/30 to-moonlight-muted/10 w-full h-48 flex items-center justify-center">
                    <div class="text-center">
                        <span class="text-5xl">📸</span>
                        <p class="text-xs moonlight-muted mt-2">Name's Photo</p>
                    </div>
                </div>
                <div class="p-8">
                    <div class="mb-6">
                        <p class="text-lg moonlight-primary font-bold mb-2">
                            "Their powerful quote"
                        </p>
                        <p class="text-sm moonlight-muted uppercase tracking-widest font-semibold">
                            Their Journey Title
                        </p>
                    </div>
                    <p class="moonlight-secondary leading-relaxed text-sm mb-4">
                        Full transformation story paragraph...
                    </p>
                    <div class="glass-subtle p-4 rounded text-xs moonlight-secondary">
                        <strong>Today they can:</strong> Specific outcomes...
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center fade-in">
            <a href="#discovery" class="cosmic-button-primary">
                Schedule a Discovery Conversation
            </a>
        </div>
    </div>
</section>
```

### Complete Section: Accordion Methodology Phases

```html
<section class="py-28 px-4 cosmic-section">
    <div class="container mx-auto max-w-4xl">
        <div class="section-header section-header--frosted">
            <h2 class="section-header__title section-header__title--glow">
                Your Journey
            </h2>
        </div>

        <!-- Accordion for phases -->
        <div class="accordion">
            <div class="accordion__item accordion__item--frosted">
                <button class="accordion__header" aria-expanded="false">
                    <div class="accordion__header-content">
                        <span class="accordion__icon">🔍</span>
                        <span class="accordion__title">Phase 1: Awareness</span>
                    </div>
                    <span class="accordion__toggle accordion__toggle--chevron">▼</span>
                </button>
                <div class="accordion__content" aria-hidden="true">
                    <div class="accordion__body">
                        Phase 1 description and content...
                    </div>
                </div>
            </div>

            <div class="accordion__item accordion__item--frosted">
                <button class="accordion__header" aria-expanded="false">
                    <div class="accordion__header-content">
                        <span class="accordion__icon">⚡</span>
                        <span class="accordion__title">Phase 2: Integration</span>
                    </div>
                    <span class="accordion__toggle accordion__toggle--chevron">▼</span>
                </button>
                <div class="accordion__content" aria-hidden="true">
                    <div class="accordion__body">
                        Phase 2 description and content...
                    </div>
                </div>
            </div>

            <div class="accordion__item accordion__item--frosted">
                <button class="accordion__header" aria-expanded="false">
                    <div class="accordion__header-content">
                        <span class="accordion__icon">✨</span>
                        <span class="accordion__title">Phase 3: Expression</span>
                    </div>
                    <span class="accordion__toggle accordion__toggle--chevron">▼</span>
                </button>
                <div class="accordion__content" aria-hidden="true">
                    <div class="accordion__body">
                        Phase 3 description and content...
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Complete Section: Results/Outcomes

```html
<section class="py-28 px-4 cosmic-section">
    <div class="container mx-auto max-w-6xl">
        <div class="section-header">
            <h2 class="section-header__title section-header__title--glow">
                Your Transformation
            </h2>
            <p class="section-header__description">
                Tangible results through our integrated approach
            </p>
        </div>

        <!-- Results Grid -->
        <div class="grid md:grid-cols-3 gap-7">
            <div class="stat-card stat-card--frosted">
                <span class="stat-card__number">87%</span>
                <p class="stat-card__label">Report improved emotional clarity</p>
            </div>

            <div class="stat-card stat-card--frosted">
                <span class="stat-card__number">92%</span>
                <p class="stat-card__label">Feel more connected to their purpose</p>
            </div>

            <div class="stat-card stat-card--frosted">
                <span class="stat-card__number">78%</span>
                <p class="stat-card__label">Experience better work-life integration</p>
            </div>
        </div>
    </div>
</section>
```

---

## Best Practices

### DO ✅

- **Use the component system** for all new markup - consistency matters
- **Combine variants thoughtfully** - `.glass-panel--large glass-panel--frosted glass-panel--accent-top` is good
- **Use semantic HTML** - Use proper heading levels, buttons for interactive elements
- **Include aria-attributes** - Especially for accordions and interactive components
- **Use Tailwind utilities** - For spacing, layout, responsive design
- **Use CSS variables** - For colors and values from design tokens
- **Test on mobile** - All components have responsive variants
- **Add icons and emojis** - Enhance visual communication where appropriate

### DON'T ❌

- **Don't create new glass panel variations** - Use the modifier system instead
- **Don't mix old and new** - Migrate sections completely to new system
- **Don't hardcode colors** - Use CSS variables from design tokens
- **Don't skip aria-attributes** - Accessibility is not optional
- **Don't nested accordions** - Keep structure flat (unless absolutely necessary)
- **Don't overuse frosted** - Use for emphasis, not everything
- **Don't ignore mobile** - Design for small screens first

### Spacing with Tailwind

Use Tailwind utilities for spacing:
```html
<!-- Padding examples -->
<div class="p-4">Small padding</div>
<div class="p-8">Medium padding</div>
<div class="px-6 py-4">Custom padding</div>

<!-- Margins examples -->
<div class="mb-6">Margin bottom</div>
<div class="mt-12 mb-8">Top and bottom margin</div>

<!-- Gap for grid/flex -->
<div class="grid gap-7 md:grid-cols-2">Items with gap</div>
```

---

## Accessibility

### Keyboard Navigation

All components support keyboard navigation:

**Accordion:**
- `Tab` - Move between headers
- `Enter` / `Space` - Toggle accordion

**Buttons:**
- `Tab` - Move between buttons
- `Enter` - Click button
- Visual focus indicator at 3px outline

### Screen Readers

All components include proper ARIA attributes:

```html
<!-- Accordion structure for screen readers -->
<button class="accordion__header"
        aria-expanded="false"
        aria-controls="accordion-panel-1">
    Toggle content
</button>
<div id="accordion-panel-1"
     class="accordion__content"
     aria-hidden="true">
    Hidden content
</div>
```

### Contrast

All text meets WCAG standards:
- **Primary text:** 21:1 contrast ratio (AAA)
- **Secondary text:** 12.6:1 contrast ratio (AA)
- **Interactive elements:** High contrast on hover

### Focus States

All interactive elements have clear focus indicators:
```css
.accordion__header:focus,
.cosmic-button-primary:focus {
    outline: 3px solid var(--accent-interactive);
    outline-offset: 3px;
}
```

### Reduced Motion

Respects `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
    /* All transitions set to 0 */
}
```

---

## Component Checklist

When creating a new section, use this checklist:

### Structure
- [ ] Section has `.section-header` if it's a major section
- [ ] Content uses appropriate glass panel variant
- [ ] Grid/flex layout is responsive (mobile-first)

### Styling
- [ ] Colors use CSS variables (no hardcoding)
- [ ] Spacing uses Tailwind utilities
- [ ] Transitions use `--transition-*` variables
- [ ] Interactive states are defined

### Accessibility
- [ ] Proper heading hierarchy (h1, h2, h3...)
- [ ] Buttons use `<button>` not `<div>`
- [ ] Links use `<a>` tags
- [ ] Forms have `<label>` elements
- [ ] Images have `alt` text
- [ ] Interactive elements are keyboard accessible
- [ ] Color isn't the only indicator
- [ ] Contrast passes WCAG AA standards

### Responsive
- [ ] Mobile layout tested (<768px)
- [ ] Tablet layout tested (768px-1024px)
- [ ] Desktop layout tested (>1024px)
- [ ] All text is readable at small sizes
- [ ] Touch targets are ≥44px for mobile

---

## Component API Reference

### Glass Panel
```
.glass-panel                  /* Base */
.glass-panel--compact         /* Size: 1.5rem padding */
.glass-panel--medium          /* Size: 2rem padding */
.glass-panel--large           /* Size: 2.5rem padding */
.glass-panel--subtle          /* Blur: light */
.glass-panel--strong          /* Blur: heavy */
.glass-panel--frosted         /* Visual: frosted gradient */
.glass-panel--cosmic          /* Visual: dark variant */
.glass-panel--interactive     /* State: clickable with enhanced hover */
.glass-panel--accent-top      /* Accent: gold border on top */
.glass-panel--accent-left     /* Accent: gold border on left */
.glass-surface                /* Secondary glass variant */
.glass-subtle                 /* Minimal glass effect */
```

### Accordion
```
.accordion                        /* Container */
.accordion__item                  /* Item wrapper */
.accordion__item--frosted         /* Frosted variant */
.accordion__item--compact         /* Compact variant */
.accordion__header                /* Trigger button */
.accordion__header-content        /* Header content flex container */
.accordion__icon                  /* Optional icon */
.accordion__title                 /* Title text */
.accordion__toggle                /* Toggle indicator (+) */
.accordion__toggle--chevron       /* Chevron variant (▼) */
.accordion__content               /* Expandable content panel */
.accordion__body                  /* Content wrapper with padding */
```

### Section Header
```
.section-header                   /* Container */
.section-header--frosted          /* Frosted background variant */
.section-header__title            /* Main title (2.5rem) */
.section-header__title--gradient  /* Gradient text effect */
.section-header__title--glow      /* Glow text shadow */
.section-header__subtitle         /* Subtitle (1.2rem italic) */
.section-header__description      /* Description text */
```

### Stat Card
```
.stat-card                        /* Base card */
.stat-card--frosted               /* Frosted background variant */
.stat-card__number                /* Large number (2.5rem) */
.stat-card__label                 /* Description label */
```

---

## Migration Guide

### Migrating from Old System

**Old Story Card:**
```html
<div class="story-card custom-styles">
    <!-- 45 lines of custom HTML -->
</div>
```

**New Story Card:**
```html
<div class="glass-panel glass-panel--large glass-panel--frosted">
    <!-- Same HTML structure, cleaner CSS -->
</div>
```

**Old Accordion:**
```html
<div id="streams-accordion">
    <div class="stream-item">
        <div class="stream-header">Title</div>
        <div class="stream-content">Content</div>
    </div>
</div>
```

**New Accordion:**
```html
<div class="accordion">
    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Title</span>
            <span class="accordion__toggle">+</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body">Content</div>
        </div>
    </div>
</div>
```

---

## Quick Reference

### Most Common Patterns

**Featured Card:**
```html
<div class="glass-panel glass-panel--large glass-panel--frosted glass-panel--accent-top">
    <!-- content -->
</div>
```

**Expandable Section:**
```html
<div class="accordion">
    <div class="accordion__item accordion__item--frosted">
        <button class="accordion__header" aria-expanded="false">
            <span class="accordion__title">Title</span>
            <span class="accordion__toggle accordion__toggle--chevron">▼</span>
        </button>
        <div class="accordion__content" aria-hidden="true">
            <div class="accordion__body"><!-- content --></div>
        </div>
    </div>
</div>
```

**Page Section:**
```html
<section class="py-28 px-4 cosmic-section">
    <div class="container mx-auto max-w-6xl">
        <div class="section-header section-header--frosted">
            <h2 class="section-header__title section-header__title--glow">Title</h2>
            <p class="section-header__description">Description</p>
        </div>
        <!-- section content -->
    </div>
</section>
```

---

## Support & Questions

For questions about components:
1. Check this style guide first
2. Review `/styles/components.css` for implementation details
3. See examples in `index.html`
4. Consult `PHASE2_COMPLETION.md` for technical details

---

**Version History**
- v2.0 (Nov 21, 2024) - New unified component system
- v1.0 (Previous) - Original scattered components

**Last Updated:** November 21, 2024
**Maintained By:** Design System Team
**Status:** Active & Recommended ✅
