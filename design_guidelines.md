# GeoAI Earth Observation Dashboard - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from ChatGPT/Perplexity for the chat interface, combined with modern developer tools aesthetics (Linear, Vercel) for technical credibility. The design emphasizes scientific precision with approachable interaction patterns.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background Primary: 217 33% 7% (deep navy-black)
- Background Secondary: 217 33% 10% (elevated surfaces)
- Background Tertiary: 217 33% 14% (cards, chat bubbles)
- Text Primary: 0 0% 98% (high contrast white)
- Text Secondary: 217 20% 70% (muted text)
- Text Tertiary: 217 15% 55% (subtle text)

**Brand & Accent Colors**
- Primary Brand: 200 95% 55% (cyan-blue for satellite/tech feel)
- Primary Hover: 200 95% 48%
- Secondary: 280 65% 60% (purple for AI/analysis indicators)
- Success: 142 76% 45% (for successful analysis)
- Error: 0 72% 51%
- Warning: 38 92% 50%

**Semantic Colors**
- Border Default: 217 25% 20%
- Border Hover: 217 25% 28%
- Focus Ring: 200 95% 55% with 40% opacity
- Overlay: 217 33% 7% at 80% opacity

### B. Typography

**Font Families**
- Primary: Inter (via Google Fonts) - body text, UI elements
- Monospace: JetBrains Mono - code snippets, technical data
- Display: Inter with adjusted letter-spacing for headings

**Type Scale**
- Hero Headline: text-6xl (60px) / font-bold / tracking-tight
- Section Heading: text-4xl (36px) / font-semibold
- Card Title: text-xl (20px) / font-semibold
- Body Large: text-lg (18px) / font-normal
- Body: text-base (16px) / font-normal
- Caption: text-sm (14px) / font-medium
- Micro: text-xs (12px) / font-normal

**Line Heights**
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.625)
- Compact UI: leading-normal (1.5)

### C. Layout System

**Spacing Primitives** (Tailwind units)
- Core spacing: 2, 4, 6, 8, 12, 16
- Section padding: py-16 (desktop), py-12 (tablet), py-8 (mobile)
- Card padding: p-6 (desktop), p-4 (mobile)
- Gap between elements: gap-4 (tight), gap-6 (standard), gap-8 (loose)

**Container System**
- Landing page sections: max-w-7xl mx-auto px-6
- Chat interface: max-w-4xl mx-auto (optimal reading width)
- Full-width sections: w-full with inner container

**Grid Patterns**
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Competitive edge table: grid-cols-1 md:grid-cols-2 gap-4

### D. Component Library

**Navigation Bar**
- Fixed top, backdrop-blur-xl with bg-background/80
- Height: h-16
- Links with hover:text-primary transition
- GitHub/Hugging Face icons: size-5 with tooltip on hover

**Landing Page Components**

*Hero Section*
- Height: min-h-[85vh] with centered content
- Animated satellite/globe visual (Lottie or CSS animation)
- Gradient text effect on headline: from-primary to-secondary
- CTA buttons: Primary (filled) + Secondary (outline with backdrop-blur)
- Trust indicators: "Powered by GPT-OSS" badge with subtle glow

*Competitive Edge Section*
- Two-column layout: Feature list + Comparison table
- Feature items: Icon (satellite, brain, zap) + Title + Description
- Table: Bordered cells with alternating row backgrounds
- Highlight key metrics with primary color

**Chat Interface Components**

*Chat Container*
- Full height: min-h-screen with bottom-fixed input
- Message bubbles: User (right, primary background) / AI (left, secondary background)
- Avatar circles: size-8 with gradient backgrounds
- Timestamp: text-xs text-tertiary

*Image Upload Area*
- Dashed border (border-2 border-dashed) when empty
- Hover state: border-primary with subtle scale transform
- Preview: rounded-lg with overlay showing filename + size
- Drag-over state: background-primary/10 with animated pulse

*Quick-Use Case Chips*
- Pill-shaped buttons: rounded-full px-4 py-2
- Background: bg-tertiary with hover:bg-tertiary/80
- Icon + Label layout with gap-2
- Position: Above input area, horizontal scroll on mobile

*Input Area*
- Multi-line textarea with auto-resize (max 200px)
- Send button: Primary color, size-10, rounded-full
- Upload button: Ghost variant with paperclip icon
- Container: Sticky bottom with backdrop-blur and subtle top border

*Response Components*
- Loading indicator: Animated dots with primary color
- Code blocks: Monospace font, bg-tertiary, rounded-lg with copy button
- Charts/Images: Full width with rounded corners, lazy loaded
- Error state: Red border-l-4 with error icon and message

**Buttons & Interactive Elements**
- Primary: bg-primary hover:bg-primary-hover, rounded-lg, px-6 py-3
- Secondary: border border-primary/50 backdrop-blur hover:bg-primary/10
- Ghost: hover:bg-tertiary, text-secondary hover:text-primary
- Icon-only: size-10, rounded-full, centered icon
- Disabled: opacity-50 cursor-not-allowed

**Cards & Surfaces**
- Default: bg-secondary rounded-xl border border-default
- Hover: border-hover transform translate-y-[-2px] transition-all
- Glass effect (overlays): backdrop-blur-xl bg-background/60

**Footer**
- Dark background with subtle top border
- Three-column grid: Links, Resources, Social
- Copyright + Links in muted text
- Hover states with primary color transition

### E. Animations & Transitions

**Core Transitions**
- Default: transition-all duration-200 ease-in-out
- Hover lifts: translate-y-[-2px] duration-300
- Focus rings: ring-2 ring-primary/40 ring-offset-2 ring-offset-background

**Specific Animations**
- Hero satellite: Slow rotation + floating (keyframes)
- Message appearance: Fade-in from bottom (opacity + translateY)
- Loading dots: Sequential pulse animation
- Chip selection: Scale + background color change
- Image upload: Border pulse on drag-over

**Performance Guidelines**
- Use transform/opacity for animations (GPU accelerated)
- Limit to 2-3 animations per view
- Respect prefers-reduced-motion

## Images & Visual Assets

**Hero Section Image**
- Large background image: Satellite view of Earth or orbital perspective
- Overlay: Gradient from transparent to bg-primary/90 (bottom to top)
- Placement: Absolute positioned, covers 60% of hero height
- Alternative: Animated SVG of satellite orbiting stylized globe

**Feature Section Icons**
- Use Heroicons outline style for consistency
- Size: size-6 within size-12 circular backgrounds
- Color: Primary color with 20% background tint

**Chat Interface Visuals**
- Satellite image previews: Rounded-lg, max-h-96, object-cover
- Analysis results: Include generated charts/heatmaps from backend
- Loading: Radar-style circular scan animation

## Responsive Behavior

**Breakpoints**
- Mobile: < 640px (single column, stacked layout)
- Tablet: 640px - 1024px (two columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**
- Chat: Full-screen with sticky header/footer
- Hero: Reduced padding, text-4xl headings
- Chips: Horizontal scroll with snap-scroll behavior
- Navigation: Hamburger menu with slide-in drawer
- Tables: Horizontal scroll wrapper with sticky first column

## Accessibility Standards

- Maintain 4.5:1 contrast ratio for all text
- Focus indicators on all interactive elements
- Keyboard navigation throughout (Tab, Enter, Escape)
- Screen reader labels for icon-only buttons
- Semantic HTML structure (nav, main, article, section)
- ARIA labels for chat messages and dynamic content
- Form inputs with associated labels