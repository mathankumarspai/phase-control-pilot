import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Power, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface MotorControlProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

export const MotorControl = ({ isOn, onToggle }: MotorControlProps) => {
  return (
    <Card className="p-8 mb-6 shadow-card bg-gradient-card border-0 hover:shadow-glow transition-all duration-300">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center space-x-2">
          <Zap className="h-6 w-6" />
          <span>Motor Control</span>
        </h3>
        
        {/* Large Motor Button */}
        <div className="mb-8">
          <button
            onClick={() => onToggle(!isOn)}
            className={cn(
              "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-105 shadow-card",
              isOn 
                ? "bg-gradient-motor text-white shadow-glow animate-pulse" 
                : "bg-gradient-to-br from-muted to-muted/70 text-muted-foreground"
            )}
          >
            <div className="text-center">
              <Power className="h-12 w-12 mx-auto mb-2" />
              <div className="text-sm font-bold">
                {isOn ? "ON" : "OFF"}
              </div>
            </div>
          </button>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className={cn(
            "flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 shadow-panel",
            isOn ? "bg-motor-on text-white" : "bg-motor-off text-white"
          )}>
            <span className="font-bold text-sm">OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white scale-125"
            />
            <span className="font-bold text-sm">ON</span>
          </div>
        </div>

        {/* Status Display */}
        <div className="flex items-center justify-center">
          <div className={cn(
            "flex items-center space-x-3 px-8 py-4 rounded-2xl border-2 transition-all duration-300 shadow-card",
            isOn 
              ? "bg-gradient-motor text-white border-motor-on shadow-glow" 
              : "bg-muted/50 text-muted-foreground border-border"
          )}>
            <div className={cn(
              "w-3 h-3 rounded-full",
              isOn ? "bg-white animate-pulse" : "bg-muted-foreground"
            )} />
            <span className="text-lg font-bold">Motor {isOn ? "RUNNING" : "STOPPED"}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};