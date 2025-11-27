import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Cog,
  Target,
  Car,
  HeartPulse,
  Building2,
  Zap,
  Gauge,
  Factory,
  Plane,
  Watch,
} from 'lucide-react';

const applications = [
  {
    title: 'Archery & Sports',
    description: 'Bows and crossbows use elastic potential energy stored in the limbs to propel arrows at high speeds. The same principle applies to slingshots and catapults.',
    icon: Target,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    examples: ['Compound bows', 'Olympic archery', 'Catapult mechanisms'],
  },
  {
    title: 'Automotive Suspension',
    description: 'Vehicle suspension systems use springs following Hooke\'s Law to absorb road shocks and provide a smooth ride while maintaining tire contact with the road.',
    icon: Car,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    examples: ['Coil springs', 'Leaf springs', 'Shock absorbers'],
  },
  {
    title: 'Medical Devices',
    description: 'Prosthetic limbs and orthotics utilize elastic components to store and return energy during walking, making movement more natural and efficient.',
    icon: HeartPulse,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    examples: ['Running prosthetics', 'Orthotic braces', 'Rehabilitation devices'],
  },
  {
    title: 'Civil Engineering',
    description: 'Buildings in earthquake-prone areas use base isolators and damping systems that work on elastic principles to absorb seismic energy.',
    icon: Building2,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    examples: ['Seismic isolators', 'Structural dampers', 'Bridge expansion joints'],
  },
  {
    title: 'Energy Storage',
    description: 'Mechanical energy storage systems use compressed springs or elastic materials to store energy for later release, offering an alternative to batteries.',
    icon: Zap,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    examples: ['Flywheel systems', 'Clockwork mechanisms', 'Regenerative braking'],
  },
  {
    title: 'Measuring Instruments',
    description: 'Spring scales and force gauges directly apply Hooke\'s Law to measure weight and force by observing spring extension.',
    icon: Gauge,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    examples: ['Spring scales', 'Force meters', 'Pressure gauges'],
  },
  {
    title: 'Manufacturing',
    description: 'Industrial machinery uses springs for returning mechanisms, clamping systems, and shock absorption in assembly lines.',
    icon: Factory,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    examples: ['Press machines', 'Valve springs', 'Assembly fixtures'],
  },
  {
    title: 'Aerospace',
    description: 'Aircraft landing gear systems use shock-absorbing struts that work on elastic principles to handle the impact forces during landing.',
    icon: Plane,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    examples: ['Landing gear struts', 'Vibration dampers', 'Control systems'],
  },
  {
    title: 'Timepieces',
    description: 'Mechanical watches and clocks store energy in mainsprings and use balance wheels with hairsprings for precise timekeeping.',
    icon: Watch,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    examples: ['Mainsprings', 'Balance wheels', 'Chronograph mechanisms'],
  },
];

export default function Applications() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-applications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Cog className="w-3 h-3 mr-1" />
            Real-World Usage
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Engineering <span className="text-primary">Applications</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How Hooke's Law and elastic energy principles are applied in everyday technology and engineering
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    From Lab to Life
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The same principles demonstrated in our rubber band launcher experiment are
                    fundamental to countless engineering applications. Hooke's Law and energy
                    conservation govern the behavior of springs, elastic materials, and shock-absorbing
                    systems throughout modern technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Understanding these concepts allows engineers to design systems that efficiently
                    store, transfer, and dissipate energy—from the suspension in your car to the
                    prosthetic limbs that help people walk.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl text-center border border-primary/20">
                    <p className="text-3xl font-bold text-primary">1676</p>
                    <p className="text-sm text-muted-foreground">Hooke's Law discovered</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-xl text-center border border-secondary/20">
                    <p className="text-3xl font-bold text-secondary">100+</p>
                    <p className="text-sm text-muted-foreground">Industries apply it</p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-xl text-center border border-accent/20">
                    <p className="text-3xl font-bold text-accent">Daily</p>
                    <p className="text-sm text-muted-foreground">Used in your life</p>
                  </div>
                  <div className="p-4 bg-green-500/10 rounded-xl text-center border border-green-500/20">
                    <p className="text-3xl font-bold text-green-400">Universal</p>
                    <p className="text-sm text-muted-foreground">Fundamental principle</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Application Areas</h2>
            <p className="text-muted-foreground">Explore how elastic energy principles shape our world</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <AnimatedSection key={app.title} delay={index * 100}>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all h-full group">
                  <div className="flex flex-col h-full">
                    <div className={`${app.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <app.icon className={`h-7 w-7 ${app.color}`} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {app.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {app.description}
                    </p>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {app.examples.map((example, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <AnimatedSection delay={500}>
            <Card className="p-8 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border-violet-500/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  The Power of Fundamental Physics
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Our simple rubber band launcher demonstrates the same physical principles that engineers
                  use to design complex systems worth millions of dollars. Understanding these fundamentals
                  opens doors to innovation in aerospace, medicine, transportation, and beyond. The physics
                  you learn today shapes the technology of tomorrow.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
