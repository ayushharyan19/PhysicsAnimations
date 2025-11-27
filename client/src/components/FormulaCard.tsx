import { Card } from '@/components/ui/card';

interface FormulaCardProps {
  title: string;
  formula: string;
  description: string;
  variables?: { symbol: string; meaning: string }[];
  className?: string;
}

export default function FormulaCard({
  title,
  formula,
  description,
  variables = [],
  className = '',
}: FormulaCardProps) {
  return (
    <Card
      className={`p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 ${className}`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
          <p className="text-2xl font-mono text-primary text-center">{formula}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

        {variables.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border/50">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Variables
            </span>
            <div className="grid gap-1.5">
              {variables.map((v, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <code className="px-2 py-0.5 bg-primary/10 text-primary rounded font-mono">
                    {v.symbol}
                  </code>
                  <span className="text-muted-foreground">{v.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
