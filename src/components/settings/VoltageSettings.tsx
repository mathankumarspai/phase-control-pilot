import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Plug } from "lucide-react";

interface VoltageSettingsData {
  threePhase: { low: number; high: number };
  twoPhase: { low: number; high: number };
  differentVoltage: number;
}

export const VoltageSettings = () => {
  const [settings, setSettings] = useState<VoltageSettingsData>({
    threePhase: { low: 350, high: 450 },
    twoPhase: { low: 200, high: 250 },
    differentVoltage: 415
  });

  const updateRange = (key: "threePhase" | "twoPhase", values: number[]) => {
    setSettings(prev => ({
      ...prev,
      [key]: { low: values[0], high: values[1] }
    }));
  };

  const updateDifferentVoltage = (value: number) => {
    setSettings(prev => ({ ...prev, differentVoltage: value }));
  };

  return (
    <Card className="p-6 bg-settings-panel text-black shadow-panel rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-settings-alt-panel rounded-full flex items-center justify-center">
          <Plug className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">Voltage Settings</h3>
      </div>
      
      <div className="bg-card rounded-2xl p-6 shadow-card space-y-6">
        {/* 3 Phase */}
        <div className="space-y-4">
          <Label className="text-lg font-bold">3 Phase</Label>
          <div className="px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Low</span>
              <span className="font-bold text-lg">{settings.threePhase.low}</span>
              <span>High</span>
            </div>
            <Slider
              value={[settings.threePhase.low, settings.threePhase.high]}
              onValueChange={(values) => updateRange("threePhase", values)}
              min={300}
              max={500}
              step={5}
              className="w-full"
              minStepsBetweenThumbs={20}
            />
          </div>
        </div>

        {/* 2 Phase */}
        <div className="space-y-4">
          <Label className="text-lg font-bold">2 Phase</Label>
          <div className="px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Low</span>
              <span className="font-bold text-lg">{settings.twoPhase.low}</span>
              <span>High</span>
            </div>
            <Slider
              value={[settings.twoPhase.low, settings.twoPhase.high]}
              onValueChange={(values) => updateRange("twoPhase", values)}
              min={150}
              max={300}
              step={5}
              className="w-full"
              minStepsBetweenThumbs={20}
            />
          </div>
        </div>

        {/* Different Voltage */}
        <div className="space-y-4">
          <Label className="text-lg font-bold">Different Voltage</Label>
          <div className="px-4">
            <div className="text-center mb-2">
              <span className="font-bold text-2xl">{settings.differentVoltage}V</span>
            </div>
            <Slider
              value={[settings.differentVoltage]}
              onValueChange={(values) => updateDifferentVoltage(values[0])}
              min={200}
              max={500}
              step={5}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};