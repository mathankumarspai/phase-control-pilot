import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Power } from "lucide-react";
import { cn } from "@/lib/utils";

interface MotorControlProps {
  isOn: boolean;
  onToggle: (value: boolean) => void;
}

export const MotorControl = ({ isOn, onToggle }: MotorControlProps) => {
  return (
    <Card className="p-6 mb-6 shadow-panel bg-gradient-card">
      <div className="text-center">
        <h3 className="text-xl font-bold text-foreground mb-4">Motor Control</h3>
        
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className={cn(
            "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300",
            isOn ? "bg-motor-on text-white" : "bg-motor-off text-white"
          )}>
            <span className="font-bold">OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
            />
            <span className="font-bold">ON</span>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className={cn(
            "flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300",
            isOn 
              ? "bg-motor-on text-white border-motor-on shadow-button" 
              : "bg-muted text-muted-foreground border-border"
          )}>
            <Power className="h-5 w-5" />
            <span className="font-semibold">Motor {isOn ? "ON" : "OFF"}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};