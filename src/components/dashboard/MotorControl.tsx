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
    <Card className="glass-panel p-8 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl border-0 w-full max-w-sm mx-auto">
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center justify-center space-x-2">
          <Zap className="h-5 w-5" />
          <span>Motor Control</span>
        </h3>
        
        {/* Large Motor Button - Centered */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => onToggle(!isOn)}
            className={cn(
              "w-28 h-28 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-105",
              isOn 
                ? "bg-gradient-motor text-white shadow-glow animate-pulse" 
                : "glass text-muted-foreground hover:shadow-glass-hover"
            )}
          >
            <div className="text-center">
              <Power className="h-10 w-10 mx-auto mb-1" />
              <div className="text-xs font-bold">
                {isOn ? "ON" : "OFF"}
              </div>
            </div>
          </button>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-6">
          <div className={cn(
            "glass-panel flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300",
            isOn ? "bg-motor-on/20 border-motor-on/30" : "bg-motor-off/20 border-motor-off/30"
          )}>
            <span className="font-bold text-xs text-foreground">OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className={cn(
                "scale-110",
                isOn 
                  ? "data-[state=checked]:bg-motor-on" 
                  : "data-[state=unchecked]:bg-motor-off"
              )}
            />
            <span className="font-bold text-xs text-foreground">ON</span>
          </div>
        </div>

        {/* Status Display */}
        <div className="flex justify-center">
          <div className={cn(
            "glass-panel flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300",
            isOn 
              ? "border-motor-on/30 bg-motor-on/10" 
              : "border-motor-off/30 bg-motor-off/10"
          )}>
            <div className={cn(
              "w-2 h-2 rounded-full",
              isOn ? "bg-motor-on animate-pulse" : "bg-motor-off"
            )} />
            <span className="text-sm font-bold text-foreground">
              {isOn ? "RUNNING" : "STOPPED"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};