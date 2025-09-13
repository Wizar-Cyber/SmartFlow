# Smart Flow Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS platforms like Linear, Notion, and Vercel for their clean, professional aesthetics that convey technical sophistication while remaining approachable.

## Core Design Elements

### Color Palette
**Dark Mode Primary:**
- Background: 210 85% 6% (#0A0F1C - deep navy)
- Primary Brand: 156 100% 50% (#00FF9D - electric green)
- Secondary: 210 100% 27% (#004B87 - medium blue)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (light gray)

**Light Mode:**
- Background: 0 0% 98% (off-white)
- Primary Brand: 156 100% 35% (darker green for accessibility)
- Secondary: 210 100% 40% (accessible blue)
- Text Primary: 210 20% 15% (dark navy)

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, technical readability
- **Accent Font**: JetBrains Mono (for code snippets and technical callouts)
- **Hierarchy**: text-4xl/3xl for heroes, text-xl/lg for headings, text-base for body

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 8, 12, and 16 (p-4, m-8, gap-12, etc.)
- Consistent 4-unit base rhythm
- Generous whitespace for professional feel
- Container max-widths: sm:max-w-6xl for content sections

### Component Library
**Navigation**: Dark header with subtle blur backdrop, clean typography
**Buttons**: Primary (electric green), secondary (outline with blue), ghost variants
**Cards**: Subtle borders, soft shadows, rounded corners (rounded-xl)
**Forms**: Clean inputs with focus states in brand green
**Data Displays**: Minimal tables and grids with hover states

## Visual Treatment

### Gradients & Backgrounds
- **Hero Gradient**: Subtle radial from dark navy to deeper navy
- **Section Accents**: Linear gradients using primary green to secondary blue (45-degree angles)
- **Card Backgrounds**: Semi-transparent overlays for depth

### Layout Structure
**7 Main Pages** with consistent structure:
- Hero sections with centered content, CTA buttons
- Service cards in 2x2 grids on larger screens
- Portfolio case studies in horizontal cards
- Blog articles in clean list format with preview cards

## Images
**Hero Image**: Large background image showcasing AI/automation concepts (servers, data visualization, or abstract tech patterns) with overlay for text readability
**Service Icons**: Technical iconography representing automation, AI, consulting, and support
**Portfolio Images**: Client work screenshots or abstract representations of business processes
**Team Photos**: Professional headshots for About Us section
**Blog Images**: Technical illustrations and infographics related to AI/automation content

## Key Principles
- **Technical Sophistication**: Clean lines, precise spacing, professional color usage
- **Accessibility First**: High contrast ratios, clear focus states, semantic structure
- **Bilingual Ready**: Consistent spacing that accommodates Spanish/English text length differences
- **Performance Focused**: Minimal animations, optimized imagery, efficient component structure