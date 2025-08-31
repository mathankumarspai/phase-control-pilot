import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Clock, Timer, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface Timer {
  name: string;
  isOn: boolean;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const TimerSection = () => {
  const [timers, setTimers] = useState<Timer[]>([
    { name: "Cyclic Timer", isOn: false, time: "00:15:30", icon: Timer },
    { name: "Run Timer", isOn: true, time: "02:45:12", icon: Play },
    { name: "DryRun Timer", isOn: false, time: "00:00:00", icon: Clock },
  ]);

  const toggleTimer = (index: number) => {
    setTimers(prev => prev.map((timer, i) => 
      i === index ? { ...timer, isOn: !timer.isOn } : timer
    ));
  };

  const TimerCard = ({ timer, index }: { timer: Timer; index: number }) => {
    const Icon = timer.icon;
    
    return (
      <Card className="p-6 shadow-card bg-gradient-card border-0 hover:shadow-glow transition-all duration-300">
        <div className="text-center">
          {/* Timer Icon */}
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300",
            timer.isOn ? "bg-timer-bg text-white shadow-glow" : "bg-muted text-muted-foreground"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          
          <h4 className="font-bold text-foreground mb-1">{timer.name}</h4>
          
          {/* Digital Time Display */}
          <div className={cn(
            "p-4 rounded-xl mb-4 transition-all duration-300 shadow-gauge",
            timer.isOn 
              ? "bg-timer-bg text-white" 
              : "bg-muted/50 text-muted-foreground"
          )}>
            <div className="text-2xl font-mono font-bold tracking-wider">
              {timer.time}
            </div>
          </div>
          
          {/* Control Switch */}
          <div className="flex items-center justify-center mb-3">
            <div className={cn(
              "flex items-center space-x-3 px-4 py-2 rounded-full transition-all duration-300 text-sm font-bold shadow-panel",
              timer.isOn ? "bg-status-active text-white" : "bg-status-inactive text-white"
            )}>
              <span className="text-xs">OFF</span>
              <Switch
                checked={timer.isOn}
                onCheckedChange={() => toggleTimer(index)}
                className="data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
              />
              <span className="text-xs">ON</span>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2">
            <div className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              timer.isOn ? "bg-status-active animate-pulse" : "bg-status-inactive"
            )} />
            <span className={cn(
              "text-xs font-medium transition-colors duration-300",
              timer.isOn ? "text-status-active" : "text-status-inactive"
            )}>
              {timer.isOn ? "RUNNING" : "STOPPED"}
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2">
        <Clock className="h-6 w-6" />
        <span>Timer Controls</span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {timers.map((timer, index) => (
          <TimerCard key={timer.name} timer={timer} index={index} />
        ))}
      </div>
    </div>
  );
};