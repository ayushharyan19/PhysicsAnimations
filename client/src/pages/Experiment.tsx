import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import {
  FlaskConical,
  Ruler,
  Circle,
  Timer,
  CheckCircle2,
  Box,
  Scale,
  Pencil,
} from 'lucide-react';

const equipment = [
  {
    name: 'Rubber Bands',
    description: 'Standard rubber bands of varying thicknesses for testing different spring constants',
    icon: Circle,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Measuring Tape/Ruler',
    description: '30cm ruler for measuring stretch distance and projectile travel distance',
    icon: Ruler,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    name: 'Stopwatch/Timer',
    description: 'Digital timer or mobile stopwatch for measuring time of flight',
    icon: Timer,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    name: 'Projectiles',
    description: 'Small coins or paper balls of known mass for consistent launches',
    icon: Circle,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    name: 'Launcher Base',
    description: 'Cardboard or wooden base to hold and stabilize the launcher',
    icon: Box,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    name: 'Weighing Scale',
    description: 'For measuring the mass of projectiles accurately',
    icon: Scale,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    name: 'Notebook & Pen',
    description: 'For recording observations and experimental data',
    icon: Pencil,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
];

const setupSteps = [
  'Attach rubber band firmly to both pegs on the launcher base',
  'Ensure the launcher is placed on a flat, stable surface',
  'Mark reference points at 5cm intervals on the pulling guide',
  'Prepare a clear launch path of at least 3 meters',
  'Place markers at known distances to measure projectile landing',
  'Calibrate the stopwatch and test its accuracy',
  'Weigh and label all projectiles before testing',
];

export default function Experiment() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-experiment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <FlaskConical className="w-3 h-3 mr-1" />
            Experimental Setup
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Equipment & <span className="text-primary">Setup</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Materials and apparatus required for the rubber band launcher experiment
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Required Equipment</h2>
            <p className="text-muted-foreground">Low-cost materials for demonstrating physics concepts</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {equipment.map((item, index) => (
              <AnimatedSection key={item.name} delay={index * 100}>
                <Card className="p-5 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all h-full group">
                  <div className="flex flex-col h-full">
                    <div className={`${item.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{item.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Box className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Launcher Setup Diagram</h2>
                    <p className="text-sm text-muted-foreground">Schematic of the experimental apparatus</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <svg viewBox="0 0 400 250" className="w-full h-auto" aria-label="Launcher diagram">
                      <defs>
                        <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#374151" />
                          <stop offset="100%" stopColor="#1F2937" />
                        </linearGradient>
                        <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#EC4899" />
                          <stop offset="50%" stopColor="#F472B6" />
                          <stop offset="100%" stopColor="#EC4899" />
                        </linearGradient>
                        <linearGradient id="projGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#6366F1" />
                        </linearGradient>
                      </defs>
                      
                      <rect x="40" y="180" width="120" height="30" rx="5" fill="url(#baseGrad)" stroke="#4B5563" strokeWidth="2" />
                      <text x="100" y="200" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="sans-serif">BASE</text>
                      
                      <rect x="50" y="100" width="20" height="80" rx="3" fill="url(#baseGrad)" stroke="#6366F1" strokeWidth="2" />
                      <rect x="130" y="100" width="20" height="80" rx="3" fill="url(#baseGrad)" stroke="#6366F1" strokeWidth="2" />
                      <text x="60" y="95" textAnchor="middle" fill="#818CF8" fontSize="9" fontFamily="sans-serif">PEG</text>
                      <text x="140" y="95" textAnchor="middle" fill="#818CF8" fontSize="9" fontFamily="sans-serif">PEG</text>
                      
                      <path d="M 70 120 Q 100 110 130 120" fill="none" stroke="url(#bandGrad)" strokeWidth="6" strokeLinecap="round" />
                      <path d="M 70 150 Q 100 160 130 150" fill="none" stroke="url(#bandGrad)" strokeWidth="6" strokeLinecap="round" />
                      <text x="100" y="175" textAnchor="middle" fill="#F472B6" fontSize="9" fontFamily="sans-serif">RUBBER BAND</text>
                      
                      <circle cx="100" cy="135" r="15" fill="url(#projGrad)" stroke="#A78BFA" strokeWidth="2" />
                      <text x="100" y="139" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="sans-serif">P</text>
                      <text x="155" y="139" fill="#A78BFA" fontSize="9" fontFamily="sans-serif">PROJECTILE</text>
                      
                      <path d="M 180 135 L 350 135" fill="none" stroke="#22D3EE" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="#22D3EE" />
                        </marker>
                      </defs>
                      <text x="265" y="125" textAnchor="middle" fill="#22D3EE" fontSize="10" fontFamily="sans-serif">LAUNCH DIRECTION</text>
                      
                      <line x1="50" y1="220" x2="160" y2="220" stroke="#6366F1" strokeWidth="1" strokeDasharray="4,2" />
                      <line x1="50" y1="215" x2="50" y2="225" stroke="#6366F1" strokeWidth="1" />
                      <line x1="160" y1="215" x2="160" y2="225" stroke="#6366F1" strokeWidth="1" />
                      <text x="105" y="235" textAnchor="middle" fill="#818CF8" fontSize="9" fontFamily="sans-serif">~12 cm</text>
                    </svg>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Key Components</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="h-3 w-3 rounded-full bg-pink-500" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Rubber Band</p>
                          <p className="text-xs text-muted-foreground">Elastic element that stores potential energy</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="h-3 w-3 rounded-full bg-violet-500" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Projectile</p>
                          <p className="text-xs text-muted-foreground">Object launched by releasing stored energy</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Support Pegs</p>
                          <p className="text-xs text-muted-foreground">Anchor points for rubber band attachment</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                        <div className="h-3 w-3 rounded-full bg-cyan-500" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Launch Path</p>
                          <p className="text-xs text-muted-foreground">Direction of projectile motion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection className="mb-8" delay={200}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Setup Procedure</h2>
            <p className="text-muted-foreground">Follow these steps to prepare the experiment</p>
          </AnimatedSection>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50">
            <div className="space-y-4">
              {setupSteps.map((step, index) => (
                <AnimatedSection key={index} delay={300 + index * 100}>
                  <div className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 border border-primary/30 flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground">{step}</p>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-green-500/50 flex-shrink-0" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
