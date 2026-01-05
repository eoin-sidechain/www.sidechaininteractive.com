# Sidechain Interactive Website Spec

## Overview
Landing page for Sidechain Interactive - a product and AI consultancy focused on building, not consulting.

---

## Brand & Messaging

### About Sidechain
Sidechain Interactive is a solo consultancy run by Eoin McCarthy, based in Brisbane, Australia.

**Founder Background:**
- 15 years across music tech (We Are Hunted, Hydric), entertainment, and product strategy
- 3 years leading AI product development at Replica Studios
- One exit
- "The person in the room figuring out what to build and how to ship it"

**Company Structure:**
- Solo operator (for now)
- Avoid plural language ("builders" → "building", "we" used sparingly)
- Size-agnostic phrasing preferred

### Brand Positioning

**Identity:**
- Builder, not consultant
- Embedded advisory (works alongside teams, not above them)
- Stays until it ships
- Senior technical thinking without the overhead

**Anti-positioning (what Sidechain is NOT):**
- Not a consultant who delivers decks and leaves
- Not advice you can't act on
- Not AI experiments that go nowhere
- Not pilots that stall at the slide deck

### Messaging Framework

**Core Pattern: "X, not Y"**
- Building, not consulting
- Outcomes, not outputs
- Prototypes, not slides
- Shipped, not shelved
- Software, not slides

**Customer Pain Points:**
- Paying for strategy that sits in slides
- AI experiments that never reach production
- Consultants who leave before it's live
- "Almost shipped" doesn't count
- Wondering "what now?" after an engagement ends

**Customer Outcomes (what success looks like):**
- Something you can demo
- Working software
- Momentum to keep going
- Clear path forward
- In production, not just delivered
- Tangible results, not just recommendations

### Voice & Tone
- Direct and no-nonsense
- Outcome-focused
- Anti-consulting / anti-deck theater
- Technical credibility without jargon
- Confident but not arrogant
- Approachable expertise

### Key Phrases & Copy Directions

**Subheading candidates:**
> "Building, not consulting. Outcomes, not outputs. Prototypes, not slides.
> Walk away with something you can demo—and the momentum to keep going."

> "Sick of paying for strategy that sits in slides?
> Tangible outcomes. Working software. Builders who ship."

**Tagline ideas:**
- "Ship outcomes, not deliverables"
- "Strategy that becomes software"
- "Demo it tomorrow. Ship it next month."

### Previous Company Affiliations (Credibility)
- Replica Studios
- We Are Hunted
- Hydric

---

## Hero Section

### Headline: `PRODUCT × AI`
- Uses Bebas Neue display font
- Horizontal layout with × separator

### Interactive Elements

**PRODUCT hover effect:**
- Progress chip appears below on hover
- Cycles through stages: "thinking..." → "building..." → "shipped ✓"
- Spinner animation during first two stages
- Green checkmark on completion
- Resets on mouse leave

**AI hover effect:**
- Robot video (`friendly_robot916.webm`) peeks out from behind the "I"
- Video positioned to the right of the "I", reveals via clip-path animation
- WebM with transparency (chromakeyed from white background)
- Inverts colors in dark mode (`dark:invert`)
- Scale: 1.5x, positioned at `-top-[15px] left-[calc(100%-8px)]`

### Subheading (in progress)
Working on copy that emphasizes:
- Building, not consulting
- Outcomes, not outputs
- Prototypes, not slides
- Customer outcome focus: "something you can demo" + momentum

Current direction:
> "Building, not consulting. Outcomes, not outputs. Prototypes, not slides.
> Walk away with something you can demo—and the momentum to keep going."

## Design System

### Fonts
- **Display:** Bebas Neue (headlines)
- **Sans:** Inter (body, UI)
- **Serif:** IBM Plex Serif (accent text)
- **Mono:** JetBrains Mono (progress chip)

### Colors
```
brand-white: #ffffff
brand-alabaster: #d9d9d9
brand-graphite: #353535
brand-teal: #3c6e71
brand-yale: #284b63
```

### Dark Mode
- Full dark mode support via Tailwind's `dark:` prefix
- Theme toggle in header
- Persists to localStorage

## Previous Features (Removed)

### "Creative Technology × Applied AI" headline
- Replaced with simpler "PRODUCT × AI"

### Creative text jiggle animation
- Letters wrapped in spans
- Click triggered random jiggle with varied timing
- Each letter moved 10-50px with rotation
- Snapped back with staggered delays

### Tooltips on Creative/Applied AI
- Hover tooltips with definitions
- Positioned top-right of trigger text
- Animated entrance

## Technical Notes

### Video Processing
Robot video transparency created with ffmpeg:
```bash
ffmpeg -i friendly_robot916.mp4 -vf "colorkey=0xFFFFFF:0.1:0.2" -c:v libvpx-vp9 -pix_fmt yuva420p friendly_robot916.webm
```

### Key Files
- `index.html` - Single-page site
- `friendly_robot916.webm` - Transparent robot animation
- `sidechainlogo.svg` - Logo (uses currentColor for theming)

## Services Offered

### Service Model
Three-phase engagement model:
1. **Strategy** - Define what to build and why
2. **Prototyping** - Proof of concept, validate assumptions
3. **Implementation** - Ship to production

### Domain Expertise

**Product:**
- Mobile apps
- Web applications
- Backend systems

**AI:**
- Agents
- Automation
- Workflows
- Voice AI
- LLM strategy
- Build vs. buy decisions

### Service Offerings (as displayed on site)

1. **Ship products, not decks**
   - End-to-end design and development
   - Building alongside teams, not above them
   - Idea to market

2. **Embedded AI Leadership**
   - Fractional CTO
   - AI advisory
   - LLM strategy
   - Agentic workflows
   - Build vs. buy decisions
   - Clear recommendations + hands-on execution

3. **Prototype what's next**
   - Experimental AI projects
   - AI as foundational, not bolted on
   - Edge-of-emerging technology exploration

## Core Values
- **Customer outcome focused** - The primary metric is client results
- **Builder mentality** - Ship working software, not decks
- **End-to-end ownership** - Strategy through to production
- **Embedded approach** - Work alongside teams, stay until it ships
- **Clarity over complexity** - Less noise, something real at the end
