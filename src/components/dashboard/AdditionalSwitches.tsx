import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
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
  const SwitchCard = ({ 
    title, 
    isOn, 
    onToggle 
  }: { 
    title: string; 
    isOn: boolean; 
    onToggle: (value: boolean) => void;
  }) => (
    <Card className="p-4 shadow-panel bg-gradient-card">
      <div className="text-center">
        <h4 className="font-semibold text-foreground mb-3">{title}</h4>
        
        <div className="flex items-center justify-center mb-3">
          <div className={cn(
            "flex items-center space-x-2 px-3 py-1 rounded-full transition-all duration-300 text-sm font-bold",
            isOn ? "bg-status-active text-white" : "bg-status-inactive text-white"
          )}>
            <span>OFF</span>
            <Switch
              checked={isOn}
              onCheckedChange={onToggle}
              className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white scale-75"
            />
            <span>ON</span>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <SwitchCard 
        title="Auto" 
        isOn={auto} 
        onToggle={onAutoToggle} 
      />
      <SwitchCard 
        title="1/3 Phase" 
        isOn={oneThirdPhase} 
        onToggle={onOneThirdPhaseToggle} 
      />
      <SwitchCard 
        title="Float" 
        isOn={float} 
        onToggle={onFloatToggle} 
      />
    </div>
  );
};