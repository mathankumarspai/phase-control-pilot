import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

interface CTSettings {
  phase: "3 Phase" | "2 Phase";
  value: number;
}

interface AmpsSettingsData {
  ct1: CTSettings;
  ct2: CTSettings;
  ct3: CTSettings;
}

export const AmpsSettings = () => {
  const [settings, setSettings] = useState<AmpsSettingsData>({
    ct1: { phase: "3 Phase", value: 0 },
    ct2: { phase: "2 Phase", value: 0 },
    ct3: { phase: "2 Phase", value: 0 }
  });

  const updateCTSetting = (ct: keyof AmpsSettingsData, field: keyof CTSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [ct]: { ...prev[ct], [field]: value }
    }));
  };

  const updateValue = (ct: keyof AmpsSettingsData, value: number) => {
    setSettings(prev => ({
      ...prev,
      [ct]: { ...prev[ct], value }
    }));
  };

  const CTSection = ({ label, settings: ctSettings, ctKey }: { 
    label: string; 
    settings: CTSettings; 
    ctKey: keyof AmpsSettingsData 
  }) => (
    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-glass">
      <div className="flex items-center justify-between mb-4">
        <Label className="text-lg font-bold text-black">{label}</Label>
        <div className="flex gap-2">
          <Button
            variant={ctSettings.phase === "3 Phase" ? "default" : "outline"}
            size="sm"
            onClick={() => updateCTSetting(ctKey, "phase", "3 Phase")}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              ctSettings.phase === "3 Phase"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-white/30 text-black border-white/30 hover:bg-yellow-500/20"
            }`}
          >
            3 Phase
          </Button>
          <Button
            variant={ctSettings.phase === "2 Phase" ? "default" : "outline"}
            size="sm"
            onClick={() => updateCTSetting(ctKey, "phase", "2 Phase")}
            className={`px-4 py-2 rounded-xl font-medium transition-all ${
              ctSettings.phase === "2 Phase"
                ? "bg-yellow-500 text-white shadow-md"
                : "bg-white/30 text-black border-white/30 hover:bg-yellow-500/20"
            }`}
          >
            2 Phase
          </Button>
        </div>
      </div>
      
      <div className="text-center mb-4">
        <span className="text-3xl font-bold text-black">{ctSettings.value.toString().padStart(2, '0')} A</span>
      </div>
      
      <div className="px-2">
        <Slider
          value={[ctSettings.value]}
          onValueChange={(values) => updateValue(ctKey, values[0])}
          max={50}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-black/70 mt-2">
          <span>0</span>
          <span>50</span>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="p-6 bg-gradient-to-br from-green-400 to-green-500 shadow-panel rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Amps Settings</h3>
      </div>
      
      <div className="space-y-6">
        <CTSection label="CT 1" settings={settings.ct1} ctKey="ct1" />
        <CTSection label="CT 2" settings={settings.ct2} ctKey="ct2" />
        <CTSection label="CT 3" settings={settings.ct3} ctKey="ct3" />
      </div>
    </Card>
  );
};