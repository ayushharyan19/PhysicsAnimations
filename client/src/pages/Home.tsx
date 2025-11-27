import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RubberBandLauncher from '@/components/RubberBandLauncher';
import AnimatedSection from '@/components/AnimatedSection';
import {
  ArrowRight,
  Atom,
  FlaskConical,
  Lightbulb,
  Target,
  Users,
  Zap,
  BookOpen,
  Calculator,
  Cog,
} from 'lucide-react';

const teamMembers = [
  { name: 'Vivek Choudhary', role: 'Team Member' },
  { name: 'Partham Sharma', role: 'Team Member' },
  { name: 'Preetam Kowar', role: 'Team Member' },
  { name: 'Ayush Aryan', role: 'Team Member' },
  { name: 'Nishant Verma', role: 'Team Member' },
];

const navigationCards = [
  { title: 'Concept', description: "Hooke's Law & Energy Conversion", icon: Lightbulb, path: '/concept', color: 'text-yellow-400' },
  { title: 'Setup', description: 'Equipment & Materials', icon: FlaskConical, path: '/experiment', color: 'text-cyan-400' },
  { title: 'Procedure', description: 'Step-by-step Method', icon: Target, path: '/procedure', color: 'text-green-400' },
  { title: 'Data', description: 'Observations & Graphs', icon: BookOpen, path: '/data', color: 'text-blue-400' },
  { title: 'Calculations', description: 'Numerical Analysis', icon: Calculator, path: '/calculations', color: 'text-purple-400' },
  { title: 'Applications', description: 'Real-world Usage', icon: Cog, path: '/applications', color: 'text-orange-400' },
];

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90" />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium">
                  <Atom className="w-3 h-3 mr-1" />
                  Physics Internals Submission
                </Badge>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Rubber Band</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Launcher
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  An investigation of <span className="text-primary font-medium">Hooke's Law</span> and{' '}
                  <span className="text-secondary font-medium">Energy Conversion</span> through
                  experimental analysis of elastic potential energy and projectile motion.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/concept">
                    <Button size="lg" className="w-full sm:w-auto group" data-testid="button-explore">
                      Explore Experiment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/data">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" data-testid="button-view-data">
                      View Data
                    </Button>
                  </Link>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 border border-primary/20">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Group No. 4</p>
                      <p className="text-xs text-muted-foreground">Physics Class</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-50" />
                <RubberBandLauncher />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Research Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Team Members</h2>
            <p className="text-muted-foreground mt-2">Group 4 - Physics Internals</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <Card className="p-4 text-center bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-medium text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Explore
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Project Sections</h2>
            <p className="text-muted-foreground mt-2">Navigate through our scientific investigation</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {navigationCards.map((card, index) => (
              <AnimatedSection key={card.title} delay={index * 100}>
                <Link href={card.path}>
                  <Card
                    className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all cursor-pointer group h-full"
                    data-testid={`card-nav-${card.title.toLowerCase()}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-muted/50 ${card.color} group-hover:scale-110 transition-transform`}>
                        <card.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{card.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="p-8 md:p-12 bg-gradient-to-br from-card via-card to-muted/30 border-primary/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Experimental Trials</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Data Accuracy</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold text-accent mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Core Concepts</div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
