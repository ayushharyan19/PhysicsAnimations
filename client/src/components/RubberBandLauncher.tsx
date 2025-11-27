import { useEffect, useRef, useState } from 'react';

interface LauncherState {
  phase: 'idle' | 'stretching' | 'holding' | 'launching' | 'flying';
  stretchAmount: number;
  projectileX: number;
  projectileY: number;
  velocity: number;
  energy: number;
}

export default function RubberBandLauncher() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<LauncherState>({
    phase: 'idle',
    stretchAmount: 0,
    projectileX: 0,
    projectileY: 0,
    velocity: 0,
    energy: 0,
  });
  const animationRef = useRef<number>();
  const [displayStats, setDisplayStats] = useState({ stretch: 0, force: 0, energy: 0, velocity: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    
    const launcherX = 80;
    const launcherY = height / 2;
    const bandRestLength = 60;
    const maxStretch = 120;
    const springConstant = 50;

    let time = 0;
    let phaseTimer = 0;

    const drawLauncher = () => {
      ctx.save();
      
      ctx.fillStyle = '#374151';
      ctx.strokeStyle = '#4B5563';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.roundRect(launcherX - 15, launcherY - 80, 30, 160, 5);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#1F2937';
      ctx.beginPath();
      ctx.roundRect(launcherX - 20, launcherY - 85, 40, 10, 3);
      ctx.fill();
      ctx.beginPath();
      ctx.roundRect(launcherX - 20, launcherY + 75, 40, 10, 3);
      ctx.fill();

      const gradient = ctx.createLinearGradient(launcherX - 10, 0, launcherX + 10, 0);
      gradient.addColorStop(0, '#6366F1');
      gradient.addColorStop(0.5, '#818CF8');
      gradient.addColorStop(1, '#6366F1');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(launcherX - 8, launcherY - 70, 16, 140, 3);
      ctx.fill();

      ctx.restore();
    };

    const drawRubberBand = (stretch: number) => {
      ctx.save();
      
      const bandColor = stretch > 80 
        ? `rgb(${220 + stretch * 0.3}, ${50 - stretch * 0.3}, ${50})`
        : `rgb(${180 + stretch * 0.5}, ${80 - stretch * 0.2}, ${60})`;
      
      ctx.strokeStyle = bandColor;
      ctx.lineWidth = 8 - (stretch / maxStretch) * 3;
      ctx.lineCap = 'round';

      const topAnchorY = launcherY - 50;
      const bottomAnchorY = launcherY + 50;
      const projectilePosX = launcherX + bandRestLength + stretch;

      ctx.beginPath();
      ctx.moveTo(launcherX + 5, topAnchorY);
      
      const controlX1 = launcherX + bandRestLength / 2 + stretch / 3;
      const controlY1 = topAnchorY + 20;
      ctx.quadraticCurveTo(controlX1, controlY1, projectilePosX, launcherY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(launcherX + 5, bottomAnchorY);
      const controlY2 = bottomAnchorY - 20;
      ctx.quadraticCurveTo(controlX1, controlY2, projectilePosX, launcherY);
      ctx.stroke();

      if (stretch > 30) {
        ctx.strokeStyle = 'rgba(255, 100, 100, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 3; i++) {
          const waveOffset = Math.sin(time * 10 + i) * 2;
          ctx.beginPath();
          ctx.moveTo(launcherX + 20 + i * 20, topAnchorY + waveOffset);
          ctx.lineTo(launcherX + 20 + i * 20 + 10, launcherY + waveOffset);
          ctx.stroke();
        }
      }

      ctx.restore();
    };

    const drawProjectile = (x: number, y: number, isFlying: boolean) => {
      ctx.save();
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 20);
      gradient.addColorStop(0, '#A78BFA');
      gradient.addColorStop(0.6, '#7C3AED');
      gradient.addColorStop(1, '#5B21B6');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#C4B5FD';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(x - 5, y - 5, 4, 0, Math.PI * 2);
      ctx.fill();

      if (isFlying) {
        for (let i = 1; i <= 5; i++) {
          const trailOpacity = 0.3 - (i * 0.05);
          const trailSize = 15 - (i * 2);
          ctx.fillStyle = `rgba(167, 139, 250, ${trailOpacity})`;
          ctx.beginPath();
          ctx.arc(x - (i * 20), y + Math.sin(time * 5 + i) * 2, trailSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    };

    const drawForceVectors = (stretch: number) => {
      if (stretch < 10) return;
      
      ctx.save();
      
      const force = stretch * springConstant / 100;
      const arrowLength = Math.min(force * 3, 80);
      
      ctx.strokeStyle = '#22D3EE';
      ctx.fillStyle = '#22D3EE';
      ctx.lineWidth = 3;
      
      const arrowX = launcherX + bandRestLength + stretch + 25;
      const arrowY = launcherY;
      
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(arrowX + arrowLength, arrowY);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(arrowX + arrowLength, arrowY);
      ctx.lineTo(arrowX + arrowLength - 10, arrowY - 8);
      ctx.lineTo(arrowX + arrowLength - 10, arrowY + 8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#67E8F9';
      ctx.font = 'bold 12px JetBrains Mono, monospace';
      ctx.fillText(`F = ${force.toFixed(1)} N`, arrowX + arrowLength + 10, arrowY + 4);

      ctx.strokeStyle = '#F472B6';
      ctx.fillStyle = '#F472B6';
      
      const restoreArrowX = launcherX + bandRestLength + stretch / 2;
      ctx.beginPath();
      ctx.moveTo(restoreArrowX + 30, arrowY - 35);
      ctx.lineTo(restoreArrowX, arrowY - 35);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(restoreArrowX, arrowY - 35);
      ctx.lineTo(restoreArrowX + 10, arrowY - 43);
      ctx.lineTo(restoreArrowX + 10, arrowY - 27);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FBCFE8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('Restoring Force', restoreArrowX - 10, arrowY - 50);

      ctx.restore();
    };

    const drawEnergyBar = (energy: number) => {
      ctx.save();
      
      const barX = 30;
      const barY = height - 60;
      const barWidth = 200;
      const barHeight = 20;
      
      ctx.fillStyle = 'rgba(30, 41, 59, 0.8)';
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(barX, barY, barWidth, barHeight, 5);
      ctx.fill();
      ctx.stroke();

      const energyWidth = (energy / 100) * (barWidth - 6);
      const gradient = ctx.createLinearGradient(barX, 0, barX + energyWidth, 0);
      gradient.addColorStop(0, '#6366F1');
      gradient.addColorStop(0.5, '#A78BFA');
      gradient.addColorStop(1, '#C084FC');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.roundRect(barX + 3, barY + 3, energyWidth, barHeight - 6, 3);
      ctx.fill();

      ctx.fillStyle = '#E0E7FF';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.fillText('ELASTIC POTENTIAL ENERGY', barX, barY - 8);

      ctx.fillStyle = '#F0ABFC';
      ctx.font = 'bold 12px JetBrains Mono, monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`${energy.toFixed(1)} J`, barX + barWidth, barY - 8);
      ctx.textAlign = 'left';

      ctx.restore();
    };

    const drawFormula = () => {
      ctx.save();
      
      ctx.fillStyle = 'rgba(30, 41, 59, 0.9)';
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(width - 180, 20, 160, 80, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#C4B5FD';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.fillText("HOOKE'S LAW", width - 170, 42);

      ctx.fillStyle = '#E0E7FF';
      ctx.font = '16px JetBrains Mono, monospace';
      ctx.fillText('F = -kx', width - 170, 65);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText('k = spring constant', width - 170, 85);

      ctx.restore();
    };

    const animate = () => {
      time += 0.016;
      phaseTimer += 0.016;
      
      ctx.clearRect(0, 0, width, height);

      const state = stateRef.current;

      switch (state.phase) {
        case 'idle':
          if (phaseTimer > 0.5) {
            state.phase = 'stretching';
            phaseTimer = 0;
          }
          state.stretchAmount = 0;
          break;

        case 'stretching':
          state.stretchAmount = Math.min(state.stretchAmount + 1.5, maxStretch);
          state.energy = (0.5 * springConstant * Math.pow(state.stretchAmount / 100, 2)) * 100;
          if (state.stretchAmount >= maxStretch) {
            state.phase = 'holding';
            phaseTimer = 0;
          }
          break;

        case 'holding':
          state.stretchAmount = maxStretch + Math.sin(time * 15) * 2;
          if (phaseTimer > 0.8) {
            state.phase = 'launching';
            state.projectileX = launcherX + bandRestLength + maxStretch;
            state.projectileY = launcherY;
            state.velocity = Math.sqrt(2 * state.energy / 0.05);
            phaseTimer = 0;
          }
          break;

        case 'launching':
          state.stretchAmount = Math.max(state.stretchAmount - 15, 0);
          if (state.stretchAmount <= 0) {
            state.phase = 'flying';
            phaseTimer = 0;
          }
          break;

        case 'flying':
          state.projectileX += state.velocity * 0.3;
          state.projectileY += Math.sin(phaseTimer * 3) * 0.5;
          state.energy = Math.max(0, state.energy - 2);
          
          if (state.projectileX > width + 50) {
            state.phase = 'idle';
            state.stretchAmount = 0;
            state.projectileX = launcherX + bandRestLength;
            state.projectileY = launcherY;
            state.velocity = 0;
            state.energy = 0;
            phaseTimer = 0;
          }
          break;
      }

      setDisplayStats({
        stretch: state.stretchAmount,
        force: (state.stretchAmount * springConstant) / 100,
        energy: state.energy,
        velocity: state.velocity,
      });

      drawLauncher();
      
      if (state.phase !== 'flying') {
        drawRubberBand(state.stretchAmount);
        const projX = launcherX + bandRestLength + state.stretchAmount;
        drawProjectile(projX, launcherY, false);
        if (state.stretchAmount > 0) {
          drawForceVectors(state.stretchAmount);
        }
      } else {
        drawRubberBand(0);
        drawProjectile(state.projectileX, state.projectileY, true);
      }

      drawEnergyBar(state.energy);
      drawFormula();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative" data-testid="rubber-band-launcher">
      <canvas
        ref={canvasRef}
        width={500}
        height={300}
        className="rounded-xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-primary/20"
      />
      <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-2">
        <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-cyan-500/30">
          <span className="text-[10px] text-cyan-400 font-medium block">STRETCH</span>
          <span className="text-sm font-mono text-cyan-300">{displayStats.stretch.toFixed(1)} cm</span>
        </div>
        <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-violet-500/30">
          <span className="text-[10px] text-violet-400 font-medium block">VELOCITY</span>
          <span className="text-sm font-mono text-violet-300">{displayStats.velocity.toFixed(1)} m/s</span>
        </div>
      </div>
    </div>
  );
}
