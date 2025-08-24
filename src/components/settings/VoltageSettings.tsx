import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VoltageSettingsData {
  threePhaseLow: string;
  threePhaseHigh: string;
  twoPhaseLow: string;
  twoPhaseHigh: string;
  differentVoltage: string;
}

export const VoltageSettings = () => {
  const [settings, setSettings] = useState<VoltageSettingsData>({
    threePhaseLow: "000",
    threePhaseHigh: "000",
    twoPhaseLow: "000",
    twoPhaseHigh: "000",
    differentVoltage: "00"
  });

  const updateSetting = (key: keyof VoltageSettingsData, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Card className="p-6 bg-gradient-panel text-black shadow-panel">
      <h3 className="text-xl font-bold mb-6 text-center">Voltage Settings</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <h4 className="font-bold text-center mb-4">3 Phase</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Input
                value={settings.threePhaseLow}
                onChange={(e) => updateSetting("threePhaseLow", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="000"
              />
              <span className="font-semibold">Low</span>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={settings.threePhaseHigh}
                onChange={(e) => updateSetting("threePhaseHigh", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="000"
              />
              <span className="font-semibold">High</span>
            </div>
          </div>
        </div>

        <div className="bg-card p-4 rounded-lg border-2 border-black">
          <h4 className="font-bold text-center mb-4">2 Phase</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Input
                value={settings.twoPhaseLow}
                onChange={(e) => updateSetting("twoPhaseLow", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="000"
              />
              <span className="font-semibold">Low</span>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={settings.twoPhaseHigh}
                onChange={(e) => updateSetting("twoPhaseHigh", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="000"
              />
              <span className="font-semibold">High</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-card p-4 rounded-lg border-2 border-black w-full max-w-md">
          <Label className="text-sm font-semibold mb-2 block text-center">Different Voltage</Label>
          <div className="flex items-center justify-center space-x-2">
            <Input
              value={settings.differentVoltage}
              onChange={(e) => updateSetting("differentVoltage", e.target.value)}
              className="bg-input-field text-center font-bold text-black w-20"
              placeholder="00"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};