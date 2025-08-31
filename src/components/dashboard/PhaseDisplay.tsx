import { Card } from "@/components/ui/card";
import { CircularProgress } from "@/components/ui/circular-progress";
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
    <Card className="p-6 shadow-card bg-gradient-card border-0 hover:shadow-glow transition-all duration-300">
      {/* Phase Header */}
      <div className={cn("p-4 rounded-xl mb-6 text-center text-white shadow-panel", phaseConfig.gradient)}>
        <h3 className="text-xl font-bold">{phase} Phase</h3>
      </div>
      
      {/* Gauges Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Voltage Gauge */}
        <div className="text-center">
          <CircularProgress
            value={data.voltage}
            max={500}
            size={100}
            strokeWidth={6}
            color={phaseConfig.color}
            unit="V"
            className="mx-auto mb-2"
          />
          <div className="flex items-center justify-center space-x-1">
            <Zap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Voltage</span>
          </div>
        </div>
        
        {/* Current Gauge */}
        <div className="text-center">
          <CircularProgress
            value={data.current}
            max={20}
            size={100}
            strokeWidth={6}
            color={phaseConfig.color}
            unit="A"
            className="mx-auto mb-2"
          />
          <div className="flex items-center justify-center space-x-1">
            <Activity className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Current</span>
          </div>
        </div>
      </div>
      
      {/* Digital Values */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <div className="text-xs font-medium text-muted-foreground mb-1">VOLTAGE</div>
          <div className="text-xl font-mono font-bold text-foreground">{data.voltage}</div>
        </div>
        <div className="bg-muted/50 p-3 rounded-lg text-center">
          <div className="text-xs font-medium text-muted-foreground mb-1">CURRENT</div>
          <div className="text-xl font-mono font-bold text-foreground">{data.current}</div>
        </div>
      </div>
    </Card>
  );
};