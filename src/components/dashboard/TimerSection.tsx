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
      <Card className="glass-panel p-4 shadow-glass hover:shadow-glass-hover transition-all duration-300 rounded-2xl border-0">
        <div className="text-center">
          {/* Timer Icon */}
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300",
            "bg-white/10 text-white"
          )}>
            <Icon className="h-5 w-5" />
          </div>
          
          <h4 className="font-bold text-white text-sm mb-2">{timer.name}</h4>
          
          {/* Digital Time Display */}
          <div className={cn(
            "p-3 rounded-xl mb-3 transition-all duration-300",
            timer.isOn 
              ? "bg-blue-500/20 border border-blue-500/30 text-white" 
              : "bg-white/5 text-white/70"
          )}>
            <div className="text-lg font-mono font-bold tracking-wider">
              {timer.time}
            </div>
          </div>
          
          {/* Control Switch */}
          <div className="flex items-center justify-center mb-3">
            <div className={cn(
              "flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 text-xs font-bold",
              timer.isOn ? "bg-emerald-500/20 border border-emerald-500/30" : "bg-red-500/20 border border-red-500/30"
            )}>
              <span className="text-white">OFF</span>
              <Switch
                checked={timer.isOn}
                onCheckedChange={() => toggleTimer(index)}
                className="scale-75"
              />
              <span className="text-white">ON</span>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center justify-center space-x-2">
            <div className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              timer.isOn ? "bg-emerald-400 animate-pulse" : "bg-red-400"
            )} />
            <span className={cn(
              "text-xs font-medium transition-colors duration-300",
              timer.isOn ? "text-emerald-400" : "text-red-400"
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
      <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
        <Clock className="h-5 w-5" />
        <span>Timer Controls</span>
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {timers.map((timer, index) => (
          <TimerCard key={timer.name} timer={timer} index={index} />
        ))}
      </div>
    </div>
  );
};