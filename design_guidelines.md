# Design Guidelines: Physics Rubber Band Launcher Website

## Design Approach
**Reference-Based Scientific/Academic Design** inspired by research platforms like Nature.com, IEEE Xplore, and modern science museums with interactive elements. Focus on credibility, precision, and engaging scientific visualization.

## Typography System
- **Primary Font**: Inter or IBM Plex Sans (clean, technical, professional)
- **Secondary Font**: JetBrains Mono or Fira Code (for data, calculations, code snippets)
- **Mathematical Content**: Use standard web math rendering
- **Hierarchy**: 
  - Hero titles: text-5xl to text-6xl, font-bold
  - Section headers: text-3xl to text-4xl, font-semibold
  - Body text: text-base to text-lg
  - Captions/labels: text-sm, font-medium

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 24 for consistent rhythm
- Section padding: py-16 to py-24
- Component gaps: gap-6 to gap-8
- Card padding: p-6 to p-8

## Core Structure

### Home/Landing Page
- Full-viewport hero with animated rubber band launcher visualization (canvas-based)
- Centered project title with subtitle "An Investigation of Hooke's Law and Energy Conversion"
- Group information prominently displayed: "Group No. 4" with all team member names in a clean grid
- Floating particle/molecule animation in background (subtle, non-distracting)
- Navigation bar with smooth scroll anchors to all sections
- Quick stats module: experiment parameters, data points collected, accuracy achieved

### Multi-Page Navigation
- Sticky top navigation with sections: Home | Concept | Setup | Procedure | Data | Calculations | Applications | Conclusion
- Smooth scroll behavior with active section highlighting
- Mobile: Hamburger menu with slide-out drawer

### Content Pages Layout
- **Concept Page**: 
  - Split layout: Formula derivations on left, animated diagrams on right
  - Interactive Hooke's Law formula with hover states showing variable explanations
  - Energy conversion flow diagram with sequential animation
  
- **Experiment Setup Page**:
  - Equipment grid (3 columns desktop, 1 mobile) with image placeholders and descriptions
  - Large schematic diagram of launcher setup with labeled components
  - Materials list with checkmark styling

- **Data & Observations**:
  - Interactive chart showing stretch distance vs velocity (use Chart.js style)
  - Data table with alternating row styling
  - Animated plotting of data points on graph
  - Statistical summary cards (mean, std deviation, correlation)

- **Calculations**:
  - Step-by-step derivation cards with mathematical notation
  - Sample calculation walkthrough with highlighted steps
  - Formula reference sidebar

## Component Library

### Cards
- Elevated cards with subtle border, backdrop-blur effect
- Hover: slight scale transform (1.02), enhanced shadow
- Padding: p-6, rounded-lg

### Buttons
- Primary: Solid fill, medium weight font, px-6 py-3, rounded-lg
- Secondary: Outline style with hover fill
- Icon buttons: rounded-full, p-3

### Data Visualizations
- Line graphs with gradient fill under curves
- Scatter plots with connected points
- Grid backgrounds with labeled axes
- Animated data point plotting on scroll-into-view

### Scientific Elements
- Formula containers: Monospace font, slight background tint, border-left accent
- Vector diagrams: SVG with animated arrow paths
- Measurement indicators: Badge-style with units

## Animations & Interactions

### Rubber Band Launcher Animation (Hero)
- Canvas-based visualization showing:
  - Rubber band in relaxed state
  - Progressive stretching with force vectors appearing
  - Energy bar filling as stretch increases
  - Release animation with projectile trajectory
  - Cycle repeats with 5-second loop
- Positioned center-right of hero, takes 40-50% width

### Background Effects
- Floating particle system (20-30 particles) with physics-based motion
- Subtle grid pattern overlay
- Gradient mesh background shifting slowly

### Scroll Animations
- Fade-in-up for section content (0.3s delay)
- Number counting animations for statistics
- Progressive graph drawing
- Stagger animation for card grids (0.1s between items)

### Hover States
- Cards: Lift effect with enhanced shadow
- Navigation items: Underline slide-in effect
- Interactive diagrams: Highlight associated formula variables

## Images
**Hero Section**: Use a high-quality scientific/laboratory background image showing physics equipment or abstract energy visualization. Overlay with dark gradient (top to bottom, opacity 0.7 to 0.9) to ensure text readability.

**Content Images**: 
- Experiment setup photos showing actual rubber band launcher
- Equipment close-ups for each component
- Team photo in lab setting (optional footer section)
- Schematic diagrams and technical illustrations

## Page-Specific Features

### Home
- Animated launcher (primary focus)
- Project metadata card (group, date, institution)
- Quick navigation tiles to main sections (2x3 grid)

### Concept
- Animated Hooke's Law diagram with spring compression/extension
- Energy conversion flowchart with sequential reveal
- Side-by-side comparison: Ideal vs Real scenarios

### Data Section  
- Full-width graph visualization
- Expandable data table
- Download data button
- Error analysis mini-section

### Applications
- Icon-grid layout (3-4 columns) showing real-world applications
- Each card with icon, title, brief description
- Examples: Archery, automotive suspension, prosthetics, industrial machinery

## Accessibility
- ARIA labels for all interactive elements
- Keyboard navigation for all interactions
- Sufficient contrast ratios (WCAG AA minimum)
- Animation reduced-motion query support
- Semantic HTML structure

## Responsive Breakpoints
- Mobile: Single column, stacked elements, simplified animations
- Tablet: 2-column grids, reduced particle density
- Desktop: Full multi-column layouts, all animations enabled

This scientific design balances academic rigor with engaging interactivity, creating a memorable presentation for your physics internals submission.