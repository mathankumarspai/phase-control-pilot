import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TimeSettingsData {
  cyclicOnTime: string;
  cyclicOffTime: string;
  autoTime: string;
  deltaTime: string;
}

export const TimeSettings = () => {
  const [settings, setSettings] = useState<TimeSettingsData>({
    cyclicOnTime: "00",
    cyclicOffTime: "00",
    autoTime: "00",
    deltaTime: "00"
  });

  const updateSetting = (key: keyof TimeSettingsData, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-6 bg-gradient-panel text-black shadow-panel">
      <h3 className="text-xl font-bold mb-6 text-center">Time Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <Label className="text-sm font-semibold mb-2 block">Cyclic ON Time</Label>
          <div className="flex items-center space-x-2">
            <Input
              value={settings.cyclicOnTime}
              onChange={(e) => updateSetting("cyclicOnTime", e.target.value)}
              className="bg-input-field text-center font-bold text-black placeholder:text-gray-600"
              placeholder="00"
            />
            <span className="font-semibold">Min</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <Label className="text-sm font-semibold mb-2 block">Cyclic OFF Time</Label>
          <div className="flex items-center space-x-2">
            <Input
              value={settings.cyclicOffTime}
              onChange={(e) => updateSetting("cyclicOffTime", e.target.value)}
              className="bg-input-field text-center font-bold text-black placeholder:text-gray-600"
              placeholder="00"
            />
            <span className="font-semibold">Min</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <Label className="text-sm font-semibold mb-2 block">Auto Time</Label>
          <div className="flex items-center space-x-2">
            <Input
              value={settings.autoTime}
              onChange={(e) => updateSetting("autoTime", e.target.value)}
              className="bg-input-field text-center font-bold text-black placeholder:text-gray-600"
              placeholder="00"
            />
            <span className="font-semibold">Sec</span>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <Label className="text-sm font-semibold mb-2 block">Delta Time</Label>
          <div className="flex items-center space-x-2">
            <Input
              value={settings.deltaTime}
              onChange={(e) => updateSetting("deltaTime", e.target.value)}
              className="bg-input-field text-center font-bold text-black placeholder:text-gray-600"
              placeholder="00"
            />
            <span className="font-semibold">Sec</span>
          </div>
        </div>
      </div>
    </Card>
  );
};