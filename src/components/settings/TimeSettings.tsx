import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, Plus, Minus } from "lucide-react";

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
            <div className="text-center mb-2">
              <span className="text-2xl font-bold text-foreground">{settings.cyclicOnTime} Min</span>
            </div>
            <div className="px-4">
              <Slider
                value={[settings.cyclicOnTime]}
                onValueChange={(value) => updateSetting("cyclicOnTime", value[0])}
                max={999}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0</span>
                <span>999</span>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-3 block">Cyclic OFF Time</Label>
            <div className="text-center mb-2">
              <span className="text-2xl font-bold text-foreground">{settings.cyclicOffTime} Min</span>
            </div>
            <div className="px-4">
              <Slider
                value={[settings.cyclicOffTime]}
                onValueChange={(value) => updateSetting("cyclicOffTime", value[0])}
                max={999}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>0</span>
                <span>999</span>
              </div>
            </div>
          </div>
        </div>

        {/* Numeric Input Settings */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Label className="text-sm font-semibold mb-3 block">Auto Time</Label>
            <div className="bg-glass p-4 rounded-2xl text-center">
              <div className="text-2xl font-bold text-foreground mb-4">{settings.autoTime} Min</div>
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateSetting("autoTime", Math.max(0, settings.autoTime - 1))}
                  className="w-8 h-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={settings.autoTime}
                  onChange={(e) => updateSetting("autoTime", parseInt(e.target.value) || 0)}
                  className="w-20 text-center"
                  min={0}
                  max={999}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateSetting("autoTime", Math.min(999, settings.autoTime + 1))}
                  className="w-8 h-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <Label className="text-sm font-semibold mb-3 block">Delta Time</Label>
            <div className="bg-glass p-4 rounded-2xl text-center">
              <div className="text-2xl font-bold text-foreground mb-4">{settings.deltaTime} Min</div>
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateSetting("deltaTime", Math.max(0, settings.deltaTime - 1))}
                  className="w-8 h-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={settings.deltaTime}
                  onChange={(e) => updateSetting("deltaTime", parseInt(e.target.value) || 0)}
                  className="w-20 text-center"
                  min={0}
                  max={999}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateSetting("deltaTime", Math.min(999, settings.deltaTime + 1))}
                  className="w-8 h-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};