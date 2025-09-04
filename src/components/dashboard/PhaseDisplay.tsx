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
    <Card className="glass-panel p-4 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl border-0">
      {/* Phase Header with glassmorphism */}
      <div className={cn("p-3 rounded-xl mb-4 text-center text-white shadow-panel backdrop-blur-md", phaseConfig.gradient)}>
        <h3 className="text-lg font-bold">{phase} Phase</h3>
      </div>
      
      {/* Digital Values with Icons - Separated Clearly */}
      <div className="space-y-3">
        {/* Voltage Display */}
        <div className="glass p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-yellow-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Voltage</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-foreground">{data.voltage}</div>
              <div className="text-xs text-muted-foreground">V</div>
            </div>
          </div>
        </div>

        {/* Current Display */}
        <div className="glass p-4 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center">
                <Activity className="h-4 w-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Current</span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono font-bold text-foreground">{data.current}</div>
              <div className="text-xs text-muted-foreground">A</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};