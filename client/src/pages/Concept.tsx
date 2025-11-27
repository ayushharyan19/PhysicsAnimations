import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import FormulaCard from '@/components/FormulaCard';
import { ArrowRight, Atom, Zap, Battery, Target, TrendingUp } from 'lucide-react';

export default function Concept() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-concept">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Atom className="w-3 h-3 mr-1" />
            Theoretical Foundation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Core <span className="text-primary">Concepts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the physics principles behind the rubber band launcher experiment
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Hooke's Law</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Hooke's Law states that the force needed to extend or compress a spring by some
                      distance is proportional to that distance. This fundamental principle of
                      elasticity was first stated by Robert Hooke in 1676.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In our rubber band launcher experiment, the rubber band acts as a spring. When
                      stretched, it stores elastic potential energy that can be converted into kinetic
                      energy when released.
                    </p>

                    <div className="pt-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                        </div>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Elastic Region:</span>{' '}
                          <span className="text-muted-foreground">
                            Material returns to original shape when force is removed
                          </span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        </div>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Proportionality:</span>{' '}
                          <span className="text-muted-foreground">
                            Force is directly proportional to displacement
                          </span>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                        </div>
                        <p className="text-sm text-foreground">
                          <span className="font-medium">Spring Constant (k):</span>{' '}
                          <span className="text-muted-foreground">
                            Measures the stiffness of the elastic material
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-8 border border-border/50">
                    <div className="text-center">
                      <p className="text-4xl sm:text-5xl font-mono font-bold text-primary mb-4">
                        F = -kx
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="p-3 bg-card rounded-lg border border-border/50">
                          <code className="text-primary font-bold">F</code>
                          <p className="text-muted-foreground text-xs mt-1">Force (N)</p>
                        </div>
                        <div className="p-3 bg-card rounded-lg border border-border/50">
                          <code className="text-secondary font-bold">k</code>
                          <p className="text-muted-foreground text-xs mt-1">Spring Constant (N/m)</p>
                        </div>
                        <div className="p-3 bg-card rounded-lg border border-border/50">
                          <code className="text-accent font-bold">x</code>
                          <p className="text-muted-foreground text-xs mt-1">Displacement (m)</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        The negative sign indicates the restoring force opposes displacement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section className="mb-16">
          <AnimatedSection delay={200}>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-secondary/5 border-secondary/20 overflow-hidden relative">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Battery className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Energy Conversion</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 bg-muted/30 rounded-xl p-6 border border-border/50">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="text-center flex-1">
                        <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center border-2 border-violet-500/40 mb-2">
                          <Zap className="h-7 w-7 text-violet-400" />
                        </div>
                        <p className="text-sm font-medium text-foreground">Elastic PE</p>
                        <p className="text-xs text-muted-foreground">Stored Energy</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-5 w-5 text-primary animate-pulse" />
                        <ArrowRight className="h-5 w-5 text-primary animate-pulse" style={{ animationDelay: '0.2s' }} />
                      </div>

                      <div className="text-center flex-1">
                        <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border-2 border-cyan-500/40 mb-2">
                          <TrendingUp className="h-7 w-7 text-cyan-400" />
                        </div>
                        <p className="text-sm font-medium text-foreground">Kinetic Energy</p>
                        <p className="text-xs text-muted-foreground">Motion Energy</p>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-card rounded-lg border border-border/50">
                      <p className="text-2xl font-mono font-bold">
                        <span className="text-violet-400">PE</span>
                        <span className="text-muted-foreground mx-2">=</span>
                        <span className="text-cyan-400">KE</span>
                      </p>
                      <p className="text-lg font-mono mt-2">
                        <span className="text-violet-400">½kx²</span>
                        <span className="text-muted-foreground mx-2">=</span>
                        <span className="text-cyan-400">½mv²</span>
                      </p>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The Law of Conservation of Energy states that energy cannot be created or
                      destroyed, only transformed from one form to another. In our experiment:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">1.</span>
                        <p className="text-sm text-muted-foreground">
                          When the rubber band is stretched, work is done on it, storing{' '}
                          <span className="text-violet-400 font-medium">elastic potential energy</span>
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">2.</span>
                        <p className="text-sm text-muted-foreground">
                          Upon release, this stored energy converts to{' '}
                          <span className="text-cyan-400 font-medium">kinetic energy</span> of the projectile
                        </p>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary font-bold">3.</span>
                        <p className="text-sm text-muted-foreground">
                          Greater stretch results in higher velocity (ignoring energy losses)
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection className="text-center mb-8" delay={300}>
            <h2 className="text-2xl font-bold text-foreground">Key Formulas</h2>
            <p className="text-muted-foreground">Essential equations for our experiment</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={400}>
              <FormulaCard
                title="Hooke's Law"
                formula="F = -kx"
                description="The restoring force of a spring is proportional to displacement"
                variables={[
                  { symbol: 'F', meaning: 'Force (Newtons)' },
                  { symbol: 'k', meaning: 'Spring constant (N/m)' },
                  { symbol: 'x', meaning: 'Displacement (m)' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <FormulaCard
                title="Elastic Potential Energy"
                formula="PE = ½kx²"
                description="Energy stored in an elastic material when deformed"
                variables={[
                  { symbol: 'PE', meaning: 'Potential energy (J)' },
                  { symbol: 'k', meaning: 'Spring constant (N/m)' },
                  { symbol: 'x', meaning: 'Displacement (m)' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <FormulaCard
                title="Kinetic Energy"
                formula="KE = ½mv²"
                description="Energy of motion possessed by a moving object"
                variables={[
                  { symbol: 'KE', meaning: 'Kinetic energy (J)' },
                  { symbol: 'm', meaning: 'Mass (kg)' },
                  { symbol: 'v', meaning: 'Velocity (m/s)' },
                ]}
              />
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}
