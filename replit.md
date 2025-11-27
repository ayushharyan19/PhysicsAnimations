# Rubber Band Launcher - Physics Investigation Website

## Overview
A scientific website for Group 4's Physics Internals Submission, demonstrating Hooke's Law and Energy Conversion through the Rubber Band Launcher experiment.

## Project Structure
```
client/src/
├── components/
│   ├── ParticleBackground.tsx  # Animated particle canvas background
│   ├── RubberBandLauncher.tsx  # Interactive launcher animation
│   ├── Navigation.tsx          # Site navigation with mobile support
│   ├── AnimatedSection.tsx     # Scroll-triggered animations
│   ├── FormulaCard.tsx         # Physics formula display component
│   └── DataChart.tsx           # Interactive data visualization
├── pages/
│   ├── Home.tsx               # Landing page with launcher demo
│   ├── Concept.tsx            # Hooke's Law & Energy theory
│   ├── Experiment.tsx         # Equipment & setup information
│   ├── Procedure.tsx          # Step-by-step methodology
│   ├── Data.tsx               # Experimental data & charts
│   ├── Calculations.tsx       # Numerical examples & formulas
│   ├── Applications.tsx       # Real-world engineering uses
│   └── Conclusion.tsx         # Summary & learning outcomes
└── App.tsx                    # Main app with routing

server/
├── routes.ts                  # API endpoints for experiment data
└── storage.ts                 # In-memory data storage

shared/
└── schema.ts                  # TypeScript types and schemas
```

## Team Members (Group 4)
- Vivek Choudhary
- Partham Sharma
- Preetam Kowar
- Ayush Aryan
- Nishant Verma

## Key Features
- Animated rubber band launcher visualization (Canvas-based)
- Floating particle background effects
- Interactive data charts with Recharts
- Responsive design with dark scientific theme
- Multi-page navigation with smooth transitions
- Physics formulas and calculations display

## Running the Project
The application runs on port 5000 with `npm run dev`.

## Technology Stack
- React + TypeScript (Frontend)
- Express.js (Backend)
- Tailwind CSS + shadcn/ui (Styling)
- Recharts (Data visualization)
- Wouter (Routing)
- Framer Motion concepts (Animations)

## API Endpoints
- GET /api/experiment-data - Fetch all experimental trials
- GET /api/experiment-data/:trial - Fetch specific trial data
- GET /api/project-info - Get project metadata

## Design Theme
Dark scientific/academic theme with physics-inspired colors:
- Primary: Deep blue (#6366F1)
- Secondary: Purple (#A78BFA)
- Accent: Cyan (#22D3EE)
- Background: Dark slate with particle effects
