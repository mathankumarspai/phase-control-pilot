import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Settings, Zap, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdditionalSwitchesProps {
  auto: boolean;
  oneThirdPhase: boolean;
  float: boolean;
  onAutoToggle: (value: boolean) => void;
  onOneThirdPhaseToggle: (value: boolean) => void;
  onFloatToggle: (value: boolean) => void;
}

export const AdditionalSwitches = ({
  auto,
  oneThirdPhase,
  float,
  onAutoToggle,
  onOneThirdPhaseToggle,
  onFloatToggle
}: AdditionalSwitchesProps) => {
  const switchConfigs = [
    { 
      title: "Auto", 
      icon: Settings, 
      isOn: auto, 
      onToggle: onAutoToggle,
      description: "Automatic Mode"
    },
    { 
      title: "1/3 Phase", 
      icon: Zap, 
      isOn: oneThirdPhase, 
      onToggle: onOneThirdPhaseToggle,
      description: "Single Phase"
    },
    { 
      title: "Float", 
      icon: Waves, 
      isOn: float, 
      onToggle: onFloatToggle,
      description: "Float Mode"
    }
  ];

  const SwitchCard = ({ 
    title, 
    icon: Icon,
    isOn, 
    onToggle,
    description 
  }: { 
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    isOn: boolean; 
    onToggle: (value: boolean) => void;
    description: string;
  }) => (
    <Card className="p-6 shadow-card bg-gradient-card border-0 hover:shadow-glow transition-all duration-300">
      <div className="text-center">
        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300",
          isOn ? "bg-status-active text-white shadow-glow" : "bg-muted text-muted-foreground"
        )}>
          <Icon className="h-6 w-6" />
        </div>
        
        <h4 className="font-bold text-foreground mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground mb-4">{description}</p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-3">
          <div className={cn(
            "flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold shadow-panel",
            isOn ? "bg-status-active text-white" : "bg-status-inactive text-white"
          )}>
            <span className="text-xs">OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
            />
            <span className="text-xs">ON</span>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2">
          <div className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            isOn ? "bg-status-active animate-pulse" : "bg-status-inactive"
          )} />
          <span className={cn(
            "text-xs font-medium transition-colors duration-300",
            isOn ? "text-status-active" : "text-status-inactive"
          )}>
            {isOn ? "ACTIVE" : "INACTIVE"}
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      {switchConfigs.map((config) => (
        <SwitchCard key={config.title} {...config} />
      ))}
    </div>
  );
};