import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { CircularGauge } from "@/components/ui/circular-gauge";
import { Clock } from "lucide-react";

interface TimeSettingsData {
  cyclicOnTime: number;
  cyclicOffTime: number;
  autoTime: number;
  deltaTime: number;
}

export const TimeSettings = () => {
  const [settings, setSettings] = useState<TimeSettingsData>({
    cyclicOnTime: 7,
    cyclicOffTime: 8,
    autoTime: 10,
    deltaTime: 2
  });

  const updateSetting = (key: keyof TimeSettingsData, value: number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-6 bg-settings-panel text-black shadow-panel rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-settings-alt-panel rounded-full flex items-center justify-center">
          <Clock className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">Time Settings</h3>
      </div>
      
      <div className="bg-card rounded-2xl p-6 shadow-card">
        {/* Slider Settings */}
        <div className="space-y-6 mb-8">
          <div>
            <Label className="text-sm font-semibold mb-3 block">Cyclic ON Time</Label>
            <div className="px-4">
              <Slider
                value={[settings.cyclicOnTime]}
                onValueChange={(value) => updateSetting("cyclicOnTime", value[0])}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-3 block">Cyclic OFF Time</Label>
            <div className="px-4">
              <Slider
                value={[settings.cyclicOffTime]}
                onValueChange={(value) => updateSetting("cyclicOffTime", value[0])}
                max={10}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0</span>
                <span>10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Gauges */}
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <Label className="text-sm font-semibold mb-3 block">Auto Time</Label>
            <CircularGauge
              value={settings.autoTime}
              max={60}
              size={100}
              color="#3b82f6"
              unit="sec"
              onChange={(value) => updateSetting("autoTime", value)}
            />
          </div>

          <div className="text-center">
            <Label className="text-sm font-semibold mb-3 block">Delta Time</Label>
            <CircularGauge
              value={settings.deltaTime}
              max={60}
              size={100}
              color="#3b82f6"
              unit="sec"
              onChange={(value) => updateSetting("deltaTime", value)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};