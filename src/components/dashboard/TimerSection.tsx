import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Timer {
  name: string;
  isOn: boolean;
  time: string;
}

export const TimerSection = () => {
  const [timers, setTimers] = useState<Timer[]>([
    { name: "Cyclic Timer", isOn: false, time: "00:00" },
    { name: "Run Timer", isOn: false, time: "00:00" },
    { name: "DryRun Timer", isOn: false, time: "00:00" },
  ]);

  const toggleTimer = (index: number) => {
    setTimers(prev => prev.map((timer, i) => 
      i === index ? { ...timer, isOn: !timer.isOn } : timer
    ));
  };

  const TimerCard = ({ timer, index }: { timer: Timer; index: number }) => (
    <Card className="p-4 shadow-panel bg-gradient-card">
      <div className="text-center">
        <h4 className="font-semibold text-foreground mb-3">{timer.name}</h4>
        
        <div className="flex items-center justify-center mb-3">
          <Switch
            checked={timer.isOn}
            onCheckedChange={() => toggleTimer(index)}
            className={cn(
              "data-[state=checked]:bg-status-active",
              "data-[state=unchecked]:bg-status-inactive"
            )}
          />
          <span className="ml-2 text-sm font-medium">
            {timer.isOn ? "ON" : "OFF"}
          </span>
        </div>

        <div className="bg-timer-bg text-white p-3 rounded-lg">
          <div className="flex items-center justify-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="text-lg font-mono font-bold">{timer.time}</span>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-4">Timer Controls</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {timers.map((timer, index) => (
          <TimerCard key={timer.name} timer={timer} index={index} />
        ))}
      </div>
    </div>
  );
};