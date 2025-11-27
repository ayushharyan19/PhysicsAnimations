import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import DataChart from '@/components/DataChart';
import { BarChart3, TrendingUp, Database, Activity, Percent } from 'lucide-react';

const statisticalSummary = [
  { label: 'Mean Velocity', value: '1.30 m/s', icon: TrendingUp, color: 'text-primary' },
  { label: 'Data Points', value: '10', icon: Database, color: 'text-secondary' },
  { label: 'Correlation', value: '0.99', icon: Activity, color: 'text-green-400' },
  { label: 'Accuracy', value: '95%', icon: Percent, color: 'text-cyan-400' },
];

export default function Data() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-data">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <BarChart3 className="w-3 h-3 mr-1" />
            Experimental Results
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Data & <span className="text-primary">Observations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visual representation of experimental data showing the relationship between
            stretch distance and projectile velocity
          </p>
        </AnimatedSection>

        <section className="mb-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {statisticalSummary.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <Card className="p-5 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-muted/50">
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <AnimatedSection delay={200}>
            <DataChart />
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection delay={300}>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-6">Key Observations</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Linear Relationship</h4>
                      <p className="text-sm text-muted-foreground">
                        The velocity increases proportionally with stretch distance, confirming
                        the theoretical predictions of Hooke's Law and energy conservation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Consistent Results</h4>
                      <p className="text-sm text-muted-foreground">
                        Multiple trials at each stretch distance showed minimal variation,
                        indicating reliable experimental technique and measurement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="h-6 w-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-violet-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Energy Transfer</h4>
                      <p className="text-sm text-muted-foreground">
                        Elastic potential energy is effectively converted to kinetic energy,
                        with some losses due to air resistance and internal friction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                    <div className="h-6 w-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Predictable Behavior</h4>
                      <p className="text-sm text-muted-foreground">
                        The strong correlation coefficient (r = 0.99) demonstrates that the
                        rubber band behaves predictably within the elastic limit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-primary">Note:</span> All measurements were
                  taken under controlled conditions with consistent technique. The data supports
                  our hypothesis that greater elastic deformation results in higher projectile
                  velocity, as predicted by the energy conservation principle.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
