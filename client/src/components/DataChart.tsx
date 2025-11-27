import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ScatterChart,
  Scatter,
  ReferenceLine,
} from 'recharts';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { type ExperimentData } from '@shared/schema';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border p-3 rounded-lg shadow-xl">
        <p className="text-sm font-medium text-foreground mb-2">Trial {label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: <span className="font-mono font-medium">{entry.value.toFixed(2)}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function ChartSkeleton() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-5 w-32" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </Card>
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </Card>
      </div>
      <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
        <Skeleton className="h-6 w-48 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function DataChart() {
  const [animatedData, setAnimatedData] = useState<ExperimentData[]>([]);

  const { data: experimentData, isLoading } = useQuery<ExperimentData[]>({
    queryKey: ['/api/experiment-data'],
  });

  useEffect(() => {
    if (!experimentData) return;
    
    setAnimatedData([]);
    let index = 0;
    const interval = setInterval(() => {
      if (index < experimentData.length) {
        setAnimatedData((prev) => [...prev, experimentData[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [experimentData]);

  if (isLoading || !experimentData) {
    return <ChartSkeleton />;
  }

  const avgVelocity = experimentData.reduce((sum, d) => sum + d.velocity, 0) / experimentData.length;

  return (
    <div className="space-y-6" data-testid="data-chart-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <h3 className="text-lg font-semibold text-foreground">Stretch vs Velocity</h3>
            <Badge variant="secondary" className="font-mono text-xs">
              Linear Relationship
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={animatedData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
              <XAxis
                dataKey="stretch"
                label={{ value: 'Stretch (cm)', position: 'bottom', fill: 'hsl(var(--muted-foreground))' }}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis
                label={{
                  value: 'Velocity (m/s)',
                  angle: -90,
                  position: 'insideLeft',
                  fill: 'hsl(var(--muted-foreground))',
                }}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="velocity"
                name="Velocity (m/s)"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 5 }}
                activeDot={{ r: 8, fill: 'hsl(var(--secondary))' }}
              />
              <ReferenceLine
                y={avgVelocity}
                stroke="hsl(var(--secondary))"
                strokeDasharray="5 5"
                label={{
                  value: `Avg: ${avgVelocity.toFixed(2)}`,
                  fill: 'hsl(var(--secondary))',
                  fontSize: 11,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <h3 className="text-lg font-semibold text-foreground">Data Points Distribution</h3>
            <Badge variant="secondary" className="font-mono text-xs">
              {experimentData.length} Trials
            </Badge>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
              <XAxis
                type="number"
                dataKey="stretch"
                name="Stretch"
                unit=" cm"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <YAxis
                type="number"
                dataKey="velocity"
                name="Velocity"
                unit=" m/s"
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
              <Scatter
                name="Observations"
                data={animatedData}
                fill="hsl(var(--chart-2))"
                shape="circle"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6 bg-card/80 backdrop-blur-sm border-primary/20">
        <h3 className="text-lg font-semibold text-foreground mb-4">Experimental Data Table</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" data-testid="data-table">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 font-medium text-muted-foreground">Trial</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Stretch (cm)</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Time (s)</th>
                <th className="text-left p-3 font-medium text-muted-foreground">Velocity (m/s)</th>
              </tr>
            </thead>
            <tbody>
              {experimentData.map((row, index) => (
                <tr
                  key={row.trial}
                  className={`border-b border-border/50 transition-colors hover:bg-muted/30 ${
                    index % 2 === 0 ? 'bg-muted/10' : ''
                  }`}
                  data-testid={`data-row-${row.trial}`}
                >
                  <td className="p-3 font-mono text-foreground">{row.trial}</td>
                  <td className="p-3 font-mono text-cyan-400">{row.stretch}</td>
                  <td className="p-3 font-mono text-violet-400">{row.time.toFixed(2)}</td>
                  <td className="p-3 font-mono text-primary">{row.velocity.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-muted/30 font-medium">
                <td className="p-3 text-foreground" colSpan={3}>
                  Average Velocity
                </td>
                <td className="p-3 font-mono text-primary">{avgVelocity.toFixed(2)} m/s</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </div>
  );
}
