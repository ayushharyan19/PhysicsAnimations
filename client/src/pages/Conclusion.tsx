import { Link } from 'wouter';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import {
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Users,
  ArrowRight,
  Award,
  TrendingUp,
  Target,
  Sparkles,
} from 'lucide-react';

const keyFindings = [
  {
    title: 'Hooke\'s Law Validated',
    description: 'The rubber band\'s restoring force was proportional to displacement, confirming F = -kx within the elastic limit.',
    icon: CheckCircle2,
    color: 'text-green-400',
  },
  {
    title: 'Energy Conservation Demonstrated',
    description: 'Elastic potential energy was effectively converted to kinetic energy, with velocity increasing proportionally to stretch.',
    icon: TrendingUp,
    color: 'text-blue-400',
  },
  {
    title: 'Predictable Relationship',
    description: 'The strong linear correlation (r = 0.99) between stretch and velocity confirms theoretical predictions.',
    icon: Target,
    color: 'text-violet-400',
  },
  {
    title: 'Real-World Relevance',
    description: 'The principles demonstrated have direct applications in engineering, sports, medicine, and everyday technology.',
    icon: Sparkles,
    color: 'text-yellow-400',
  },
];

const learningOutcomes = [
  'Understanding of Hooke\'s Law and elastic behavior',
  'Practical experience with energy conservation',
  'Data collection and analysis skills',
  'Graph interpretation and correlation analysis',
  'Connecting theory to real-world applications',
  'Scientific methodology and experimentation',
];

const teamMembers = [
  'Vivek Choudhary',
  'Partham Sharma',
  'Preetam Kowar',
  'Ayush Aryan',
  'Nishant Verma',
];

export default function Conclusion() {
  return (
    <div className="min-h-screen pt-24 pb-16" data-testid="page-conclusion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Award className="w-3 h-3 mr-1" />
            Summary
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Conclusion & <span className="text-primary">Learning Outcomes</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key findings, insights, and takeaways from our rubber band launcher experiment
          </p>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection>
            <Card className="p-8 bg-gradient-to-br from-card via-card to-green-500/5 border-green-500/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Experiment Summary</h2>
                  <p className="text-sm text-muted-foreground">Successfully completed investigation</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our investigation into the Rubber Band Launcher has successfully demonstrated the
                  fundamental principles of <span className="text-primary font-medium">Hooke's Law</span> and{' '}
                  <span className="text-secondary font-medium">energy conservation</span>. Through careful
                  experimentation and data analysis, we observed a clear linear relationship between
                  the stretch distance of the rubber band and the resulting projectile velocity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The experiment confirmed that elastic potential energy stored in a stretched rubber
                  band is efficiently converted to kinetic energy upon release. Our data showed a
                  strong correlation coefficient of 0.99, indicating that the rubber band behaves
                  according to theoretical predictions within its elastic limit.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section className="mb-16">
          <AnimatedSection className="mb-8" delay={100}>
            <h2 className="text-2xl font-bold text-foreground mb-2">Key Findings</h2>
            <p className="text-muted-foreground">Major discoveries from our experiment</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {keyFindings.map((finding, index) => (
              <AnimatedSection key={finding.title} delay={200 + index * 100}>
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-muted/50 flex-shrink-0">
                      <finding.icon className={`h-5 w-5 ${finding.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{finding.title}</h3>
                      <p className="text-sm text-muted-foreground">{finding.description}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <AnimatedSection delay={400}>
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Learning Outcomes</h2>
                  <p className="text-sm text-muted-foreground">Skills and knowledge gained</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-border/30"
                  >
                    <BookOpen className="h-4 w-4 text-primary flex-shrink-0" />
                    <p className="text-sm text-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section className="mb-16">
          <AnimatedSection delay={500}>
            <Card className="p-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Group 4 - Team Members</h2>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={member}
                    className="px-4 py-2 bg-card/80 rounded-full border border-border/50 text-foreground font-medium"
                  >
                    {member}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground mb-6">
                Physics Internals Submission
              </p>

              <div className="flex justify-center gap-4">
                <Link href="/">
                  <Button variant="outline" data-testid="button-back-home">
                    Back to Home
                  </Button>
                </Link>
                <Link href="/concept">
                  <Button data-testid="button-review-concept">
                    Review Concept
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </AnimatedSection>
        </section>

        <section>
          <AnimatedSection delay={600}>
            <Card className="p-6 bg-muted/30 border-border/50">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Acknowledgments:</span> We thank our
                  physics instructor for guidance throughout this project and our peers for
                  assistance during data collection. This experiment was conducted following all
                  safety guidelines and scientific methodology standards.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
