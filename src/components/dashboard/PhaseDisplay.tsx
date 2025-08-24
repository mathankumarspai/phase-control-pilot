import { Card } from "@/components/ui/card";
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
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case "phase-r":
        return "bg-phase-r text-white";
      case "phase-y":
        return "bg-phase-y text-black";
      case "phase-b":
        return "bg-phase-b text-white";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <Card className="p-4 shadow-panel bg-gradient-card border-2">
      <div className={cn("p-3 rounded-lg mb-4 text-center font-bold", getColorClasses(color))}>
        <h3 className="text-lg">{phase} Phase</h3>
      </div>
      
      <div className="space-y-3">
        <div className="bg-card p-3 rounded-lg border">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Voltage</span>
            <span className="text-lg font-bold text-foreground">{data.voltage} V</span>
          </div>
        </div>
        
        <div className="bg-card p-3 rounded-lg border">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Current</span>
            <span className="text-lg font-bold text-foreground">{data.current} A</span>
          </div>
        </div>
      </div>
    </Card>
  );
};