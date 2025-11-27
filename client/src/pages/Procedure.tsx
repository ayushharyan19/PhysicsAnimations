import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import {
  ListOrdered,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Target,
  Repeat,
  ClipboardList,
} from 'lucide-react';

const procedureSteps = [
  {
    step: 1,
    title: 'Prepare the Launcher',
    description: 'Set up the rubber band launcher on a flat, stable surface. Ensure the rubber band is securely attached to both anchor points.',
    tip: 'Check that the rubber band is not worn or damaged before each trial',
  },
  {
    step: 2,
    title: 'Position the Projectile',
    description: 'Place the projectile (coin or ball) in the center of the rubber band pouch. Ensure it is properly seated and balanced.',
    tip: 'Use the same projectile throughout all trials for consistency',
  },
  {
    step: 3,
    title: 'Measure Initial Stretch',
    description: 'Using the ruler, measure and mark the stretch distance from the rest position. Start with 5cm for the first trial.',
    tip: 'Mark reference lines on the base for quick, accurate measurements',
  },
  {
    step: 4,
    title: 'Launch the Projectile',
    description: 'Pull the rubber band back to the marked distance, aim horizontally, and release smoothly. Start the timer as the projectile leaves.',
    tip: 'Keep a consistent release technique for reliable results',
  },
  {
    step: 5,
    title: 'Measure Travel Distance',
    description: 'Mark where the projectile lands and measure the horizontal distance traveled from the launch point.',
    tip: 'Have a partner help spot the landing point accurately',
  },
  {
    step: 6,
    title: 'Record Time of Flight',
    description: 'Note the time from release to landing. This helps calculate the average velocity of the projectile.',
    tip: 'Take multiple readings and calculate the average for better accuracy',
  },
  {
    step: 7,
    title: 'Repeat with Different Stretches',
    description: 'Increase the stretch distance by 3-5cm intervals. Repeat the launch and measurement process for each stretch value.',
    tip: 'Perform at least 3 trials for each stretch distance',
  },
  {
    step: 8,
    title: 'Calculate Velocity',
    description: 'Using the distance traveled and time of flight, calculate the average velocity for each trial using v = d/t.',
    tip: 'Record all calculations clearly in your data table',
  },
];

const safetyGuidelines = [
  'Always wear safety glasses during launching',
  'Ensure the launch path is clear of people and obstacles',
  'Never aim the launcher at people or breakable objects',
  'Check rubber band integrity before each session',
  'Use appropriate projectile mass (not too heavy)',
  'Have a designated safe zone for observers',
];

export default function Procedure() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-procedure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <ListOrdered className="w-3 h-3 mr-1" />
            Experimental Method
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Step-by-Step <span className="text-primary">Procedure</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed methodology for conducting the rubber band launcher experiment
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-6 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/20 flex-shrink-0">
                  <AlertTriangle className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Safety Guidelines</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {safetyGuidelines.map((guideline, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section className="mb-16">
          <AnimatedSection className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <ClipboardList className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Experimental Procedure</h2>
            </div>
            <p className="text-muted-foreground">Follow each step carefully for accurate results</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            <div className="space-y-6">
              {procedureSteps.map((item, index) => (
                <AnimatedSection key={item.step} delay={index * 100}>
                  <Card className="relative p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all md:ml-12">
                    <div className="absolute -left-[3.25rem] top-6 hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30">
                      {item.step}
                    </div>

                    <div className="flex md:hidden items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                      {item.step}
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        {index < procedureSteps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                        )}
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-primary/80">
                          <span className="font-medium">Pro Tip:</span> {item.tip}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section>
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-secondary/5 border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Repeat className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Multiple Trials</h2>
                  <p className="text-sm text-muted-foreground">Importance of repetition in scientific experiments</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <p className="text-sm text-muted-foreground">Trials per stretch distance</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">10</div>
                  <p className="text-sm text-muted-foreground">Different stretch values</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border border-border/50 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">30+</div>
                  <p className="text-sm text-muted-foreground">Total data points collected</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Conducting multiple trials helps reduce random errors and improves the reliability
                of our experimental data. Always calculate and report the average values along with
                the range or standard deviation to indicate measurement precision.
              </p>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
