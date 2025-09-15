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
    <Card className="glass-panel p-4 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl border-0">
      <div className="text-center">
        {/* Icon */}
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300",
          "bg-white/10 text-white"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <p className="text-xs text-white/60 mb-3">{description}</p>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-3">
          <div className={cn(
            "flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs font-bold",
            isOn ? "bg-emerald-500/20 border border-emerald-500/30" : "bg-red-500/20 border border-red-500/30"
          )}>
            <span className="text-white">OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className="scale-75"
            />
            <span className="text-white">ON</span>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div className="flex items-center justify-center space-x-2">
          <div className={cn(
            "w-1.5 h-1.5 rounded-full transition-all duration-300",
            isOn ? "bg-emerald-400 animate-pulse" : "bg-red-400"
          )} />
          <span className={cn(
            "text-xs font-medium transition-colors duration-300",
            isOn ? "text-emerald-400" : "text-red-400"
          )}>
            {isOn ? "ACTIVE" : "INACTIVE"}
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="mb-6">
      <div className="grid grid-cols-3 gap-3">
        {switchConfigs.map((config) => (
          <SwitchCard key={config.title} {...config} />
        ))}
      </div>
    </div>
  );
};