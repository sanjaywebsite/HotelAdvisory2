# Design Guidelines: Sanjay Sethi Advisory

## Design Approach

**Hybrid Reference-Based**: Drawing from premium hospitality consulting and luxury hotel brands to establish executive credibility while maintaining accessibility for institutional investors.

**Primary References**: 
- Taj Hotels (luxury hospitality aesthetic) for brand tonality
- Professional consulting firms (BCG, Bain style) for information architecture
- LinkedIn's professional polish for trust signals

**Core Principle**: Sophisticated restraint with purposeful luxury touches. Every element earns its place.

## Layout System

**Single-Page Scroll Website** optimized for desktop viewing by C-suite executives and institutional investors.

**Spacing Primitives**: Use Tailwind units of **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12 for cards/grids
- Content containers: max-w-7xl for full sections, max-w-4xl for text-heavy areas

**Grid Strategy**:
- Services section: 2x2 grid (lg:grid-cols-2) for four service pillars
- Experience timeline: Single column with left-aligned content
- Hero and contact: Centered, single-column focus

## Typography

**Font Selection**: Google Fonts via CDN
- **Primary (Headlines)**: Playfair Display or Cormorant Garamond (serif, executive presence)
- **Secondary (Body)**: Inter or Source Sans Pro (sans-serif, high readability)
- **Accent (Stats/Numbers)**: Same as primary for consistency

**Hierarchy**:
- H1 (Hero): text-5xl md:text-6xl lg:text-7xl, font-serif, font-bold
- H2 (Sections): text-4xl md:text-5xl, font-serif, font-semibold
- H3 (Service Cards): text-2xl, font-serif, font-medium
- Body: text-lg, font-sans, leading-relaxed
- Small/Meta: text-sm, font-sans, tracking-wide, uppercase for labels

## Page Structure

### 1. Hero Section (80-90vh)
**Layout**: Full-width with professional headshot or sophisticated hotel interior image
- Headline: "Sanjay Sethi Advisory" with subtitle "Advisory anchored in lived experience"
- Brief tagline: "37+ years leading India's premier hospitality brands"
- Single primary CTA: "Schedule a Consultation" (blurred background if over image)
- Subtle downward scroll indicator

### 2. Who I Am (Natural height)
**Layout**: Two-column split (lg:grid-cols-2)
- Left: Professional photo or credentials highlight
- Right: Concise bio covering Taj (14 years) → Keys Hotels (Founder) → Chalet Hotels (MD & CEO, IPO) → Current advisory
- Include: CHA certification, IIM/Cornell credentials as trust signals

### 3. What I Offer (py-24)
**Layout**: 2x2 grid for four service pillars
- Each card: Icon/graphic, service title, 2-3 bullet points of specifics
- Services: Investment Advisory, Operational Excellence, Strategic Foresight, Owner & Board Advisory
- Elegant card design with subtle borders, no heavy shadows

### 4. Why It Matters (py-20)
**Layout**: Centered content with stat highlights
- Opening statement on India's expansion cycle
- 3-4 key market drivers in clean list or icon grid
- Supporting statistics (premiumisation, supply constraints, investor interest)

### 5. Engagement Model (py-16)
**Layout**: Centered, single-column
- Clear framework: "4-5 days/month • Retainer-based • Confidential • Experience-led"
- Brief description of selective approach aligned with investor goals

### 6. Experience Snapshot (py-24)
**Layout**: Vertical timeline with 4 key milestones
- Chalet Hotels: IPO leadership, asset strategy
- Keys Hotels: Portfolio creation, brand building
- Taj Group: 14 years senior operational roles
- Current: Global PE/fund/developer advisory
- Use vertical line with year markers on left, descriptions on right

### 7. Contact (py-20)
**Layout**: Two-column split
- Left: Contact form (Name, Email, Company, Message, Submit)
- Right: Direct contact info (email: contact@sanjaysethi.com, Location: Mumbai, India), LinkedIn link
- Footer: Professional disclaimer about advisory services, copyright

## Component Library

**Navigation**: Fixed header with smooth scroll anchors to sections (Who I Am, Services, Experience, Contact)

**Buttons**: 
- Primary CTA: Medium size, rounded, with blurred background if over images
- Form submit: Matching primary style

**Cards (Services)**: 
- Minimal borders, generous padding (p-8)
- Icon or subtle graphic at top
- Title + bulleted specifics
- Consistent heights within grid

**Timeline**: 
- Vertical line connector
- Circle markers for each milestone
- Year/role on left, description on right
- Staggered rhythm with different content lengths

**Form Inputs**:
- Clean borders, generous padding
- Floating labels or clear placeholders
- Consistent with professional aesthetic

**Icons**: Use Heroicons via CDN for service cards and UI elements

## Images

**Hero Section**: Large professional headshot of Sanjay Sethi in business attire OR sophisticated interior of luxury hotel (Taj property preferred for brand association). Image should convey executive presence and hospitality luxury. Full-width, 80-90vh height.

**Who I Am Section**: Optional secondary professional photo - consulting context or industry event.

**Service Cards**: Consider subtle iconography rather than photos - keep text-focused for credibility.

## Accessibility & Performance

- Maintain WCAG AA contrast ratios
- Semantic HTML structure for screen readers
- Smooth scroll behavior for anchor navigation
- Optimize hero image for fast loading
- Mobile-responsive breakpoints: sm, md, lg, xl

## Creative Distinctions

**Avoid Generic Patterns**:
- No three-column icon-title-description grids
- No carousel/slider elements
- No generic "Subscribe" footer

**Unique Touches**:
- Sophisticated serif headlines paired with clean sans-serif body (luxury + accessibility)
- Timeline format for experience (narrative vs. resume)
- Two-column contact (form + direct info) vs. standalone form
- Executive presence through restraint, not decoration