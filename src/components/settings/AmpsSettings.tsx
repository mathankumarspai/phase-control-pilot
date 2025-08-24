import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CTSettings {
  threePhaseLow: string;
  threePhaseHigh: string;
  twoPhaseLow: string;
  twoPhaseHigh: string;
}

interface AmpsSettingsData {
  ct1: CTSettings;
  ct2: CTSettings;
  ct3: CTSettings;
}

export const AmpsSettings = () => {
  const [settings, setSettings] = useState<AmpsSettingsData>({
    ct1: { threePhaseLow: "00.0", threePhaseHigh: "00.0", twoPhaseLow: "00.0", twoPhaseHigh: "00.0" },
    ct2: { threePhaseLow: "00.0", threePhaseHigh: "00.0", twoPhaseLow: "00.0", twoPhaseHigh: "00.0" },
    ct3: { threePhaseLow: "00.0", threePhaseHigh: "00.0", twoPhaseLow: "00.0", twoPhaseHigh: "00.0" }
  });

  const updateCTSetting = (ct: keyof AmpsSettingsData, field: keyof CTSettings, value: string) => {
    setSettings(prev => ({
      ...prev,
      [ct]: { ...prev[ct], [field]: value }
    }));
  };

  const CTCard = ({ ctName, ctData, ctKey }: { 
    ctName: string; 
    ctData: CTSettings; 
    ctKey: keyof AmpsSettingsData;
  }) => (
    <div className="bg-card p-4 rounded-lg border-2 border-black">
      <h4 className="font-bold text-center mb-4">{ctName}</h4>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="font-semibold text-center mb-3">3 Phase</h5>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Input
                value={ctData.threePhaseLow}
                onChange={(e) => updateCTSetting(ctKey, "threePhaseLow", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="00.0"
              />
              <span className="text-sm font-semibold">Low</span>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={ctData.threePhaseHigh}
                onChange={(e) => updateCTSetting(ctKey, "threePhaseHigh", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="00.0"
              />
              <span className="text-sm font-semibold">High</span>
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-center mb-3">2 Phase</h5>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Input
                value={ctData.twoPhaseLow}
                onChange={(e) => updateCTSetting(ctKey, "twoPhaseLow", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="00.0"
              />
              <span className="text-sm font-semibold">Low</span>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={ctData.twoPhaseHigh}
                onChange={(e) => updateCTSetting(ctKey, "twoPhaseHigh", e.target.value)}
                className="bg-input-field text-center font-bold text-black"
                placeholder="00.0"
              />
              <span className="text-sm font-semibold">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="p-6 bg-gradient-panel text-black shadow-panel">
      <h3 className="text-xl font-bold mb-6 text-center">Amps Settings</h3>
      
      <div className="space-y-6">
        <CTCard ctName="CT 1" ctData={settings.ct1} ctKey="ct1" />
        <CTCard ctName="CT 2" ctData={settings.ct2} ctKey="ct2" />
        <CTCard ctName="CT 3" ctData={settings.ct3} ctKey="ct3" />
      </div>
    </Card>
  );
};