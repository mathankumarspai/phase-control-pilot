import { Card } from "@/components/ui/card";
import { Zap, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhaseDisplayProps {
  phase: "R" | "Y" | "B";
  color: string;
  data: {
    voltage: number;
    current: number;
  };
}

export const PhaseDisplay = ({ phase, color, data }: PhaseDisplayProps) => {
  const getPhaseConfig = (colorName: string) => {
    switch (colorName) {
      case "phase-r":
        return {
          gradient: "bg-gradient-phase-r",
          color: "hsl(var(--phase-r))",
          bgClass: "bg-phase-r"
        };
      case "phase-y":
        return {
          gradient: "bg-gradient-phase-y", 
          color: "hsl(var(--phase-y))",
          bgClass: "bg-phase-y"
        };
      case "phase-b":
        return {
          gradient: "bg-gradient-phase-b",
          color: "hsl(var(--phase-b))",
          bgClass: "bg-phase-b"
        };
      default:
        return {
          gradient: "bg-primary",
          color: "hsl(var(--primary))",
          bgClass: "bg-primary"
        };
    }
  };

  const phaseConfig = getPhaseConfig(color);

  return (
    <Card className="glass-panel p-3 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl border-0">
      {/* Phase Header with colored background */}
      <div className={cn("p-3 rounded-xl mb-3 text-center text-white font-bold text-sm", phaseConfig.gradient)}>
        <div className="text-lg font-bold">{phase}</div>
        <div className="text-xs opacity-90">Phase</div>
      </div>
      
      {/* Voltage Display */}
      <div className="glass p-3 rounded-xl mb-2">
        <div className="flex items-center justify-center mb-1">
          <Zap className="h-4 w-4 text-yellow-400" />
        </div>
        <div className="text-center">
          <div className="text-xs text-white/70 mb-1">Voltage</div>
          <div className="text-lg font-bold text-white">{data.voltage}</div>
        </div>
      </div>

      {/* Current Display */}
      <div className="glass p-3 rounded-xl">
        <div className="flex items-center justify-center mb-1">
          <Activity className="h-4 w-4 text-blue-400" />
        </div>
        <div className="text-center">
          <div className="text-xs text-white/70 mb-1">Current</div>
          <div className="text-lg font-bold text-white">{data.current}</div>
        </div>
      </div>
    </Card>
  );
};