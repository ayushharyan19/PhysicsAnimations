import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import FormulaCard from '@/components/FormulaCard';
import { Calculator, ArrowDown, Equal, Lightbulb } from 'lucide-react';

const sampleCalculation = {
  stretch: 15,
  mass: 0.01,
  springConstant: 50,
  distance: 1.0,
  time: 0.8,
};

export default function Calculations() {
  const pe = 0.5 * sampleCalculation.springConstant * Math.pow(sampleCalculation.stretch / 100, 2);
  const velocity = sampleCalculation.distance / sampleCalculation.time;
  const ke = 0.5 * sampleCalculation.mass * Math.pow(velocity, 2);

  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-calculations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Calculator className="w-3 h-3 mr-1" />
            Numerical Analysis
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Sample <span className="text-primary">Calculations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed derivations and numerical examples demonstrating the physics principles
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Energy Conservation Derivation</h2>
                    <p className="text-sm text-muted-foreground">Deriving velocity from energy principles</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                    <h3 className="font-semibold text-foreground mb-4">Step 1: Conservation of Energy</h3>
                    <p className="text-muted-foreground mb-4">
                      By the law of conservation of energy, elastic potential energy equals kinetic energy:
                    </p>
                    <div className="text-center">
                      <p className="text-2xl font-mono text-primary">PE = KE</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-8 w-8 text-muted-foreground" />
                  </div>

                  <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                    <h3 className="font-semibold text-foreground mb-4">Step 2: Substitute Formulas</h3>
                    <p className="text-muted-foreground mb-4">
                      Replace with the respective energy formulas:
                    </p>
                    <div className="text-center">
                      <p className="text-2xl font-mono">
                        <span className="text-violet-400">½kx²</span>
                        <span className="text-muted-foreground mx-3">=</span>
                        <span className="text-cyan-400">½mv²</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowDown className="h-8 w-8 text-muted-foreground" />
                  </div>

                  <div className="p-6 bg-muted/30 rounded-xl border border-border/50">
                    <h3 className="font-semibold text-foreground mb-4">Step 3: Solve for Velocity</h3>
                    <p className="text-muted-foreground mb-4">
                      Rearranging to find velocity (v):
                    </p>
                    <div className="space-y-4 text-center">
                      <p className="text-xl font-mono text-foreground">
                        kx² = mv²
                      </p>
                      <p className="text-xl font-mono text-foreground">
                        v² = kx² / m
                      </p>
                      <p className="text-2xl font-mono font-bold text-primary">
                        v = x × √(k/m)
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <p className="text-sm text-green-400">
                      <span className="font-medium">Key Insight:</span> Velocity is directly proportional
                      to stretch distance (x), explaining the linear relationship in our data.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section className="mb-16">
          <AnimatedSection className="mb-8" delay={200}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Numerical Example</h2>
            <p className="text-muted-foreground">Step-by-step calculation with actual values</p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-secondary/20">
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-4">Given Values</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Stretch Distance</p>
                    <p className="text-xl font-mono font-bold text-cyan-400">x = 15 cm</p>
                    <p className="text-xs text-muted-foreground">(0.15 m)</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Projectile Mass</p>
                    <p className="text-xl font-mono font-bold text-violet-400">m = 10 g</p>
                    <p className="text-xs text-muted-foreground">(0.01 kg)</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Spring Constant</p>
                    <p className="text-xl font-mono font-bold text-primary">k = 50 N/m</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Travel Distance</p>
                    <p className="text-xl font-mono font-bold text-green-400">d = 1.0 m</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-violet-500/5 rounded-xl border border-violet-500/20">
                  <h4 className="font-medium text-foreground mb-3">Elastic Potential Energy</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">PE = ½ × k × x²</p>
                    <p className="text-muted-foreground">PE = ½ × 50 × (0.15)²</p>
                    <p className="text-muted-foreground">PE = ½ × 50 × 0.0225</p>
                    <p className="text-lg text-violet-400 font-bold">PE = 0.5625 J</p>
                  </div>
                </div>

                <div className="p-6 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
                  <h4 className="font-medium text-foreground mb-3">Measured Velocity</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">v = d / t</p>
                    <p className="text-muted-foreground">v = 1.0 / 0.8</p>
                    <p className="text-lg text-cyan-400 font-bold">v = 1.25 m/s</p>
                  </div>
                </div>

                <div className="p-6 bg-green-500/5 rounded-xl border border-green-500/20">
                  <h4 className="font-medium text-foreground mb-3">Kinetic Energy Verification</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">KE = ½ × m × v²</p>
                    <p className="text-muted-foreground">KE = ½ × 0.01 × (1.25)²</p>
                    <p className="text-muted-foreground">KE = ½ × 0.01 × 1.5625</p>
                    <p className="text-lg text-green-400 font-bold">KE = 0.0078 J</p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                  <p className="text-sm text-yellow-400">
                    <span className="font-medium">Analysis:</span> The difference between PE and KE
                    accounts for energy losses due to air resistance, friction, and heat. In an ideal
                    system, PE would equal KE exactly.
                  </p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection className="mb-8" delay={400}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Formula Reference</h2>
            <p className="text-muted-foreground">Quick reference for all relevant equations</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedSection delay={500}>
              <FormulaCard
                title="Velocity from Energy"
                formula="v = x√(k/m)"
                description="Theoretical velocity derived from energy conservation"
                variables={[
                  { symbol: 'v', meaning: 'Velocity (m/s)' },
                  { symbol: 'x', meaning: 'Stretch (m)' },
                  { symbol: 'k', meaning: 'Spring constant (N/m)' },
                  { symbol: 'm', meaning: 'Mass (kg)' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <FormulaCard
                title="Measured Velocity"
                formula="v = d/t"
                description="Experimental velocity from distance and time measurements"
                variables={[
                  { symbol: 'v', meaning: 'Velocity (m/s)' },
                  { symbol: 'd', meaning: 'Distance (m)' },
                  { symbol: 't', meaning: 'Time (s)' },
                ]}
              />
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <FormulaCard
                title="Energy Efficiency"
                formula="η = KE/PE × 100%"
                description="Percentage of potential energy converted to kinetic"
                variables={[
                  { symbol: 'η', meaning: 'Efficiency (%)' },
                  { symbol: 'KE', meaning: 'Kinetic energy (J)' },
                  { symbol: 'PE', meaning: 'Potential energy (J)' },
                ]}
              />
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}
