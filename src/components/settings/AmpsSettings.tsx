import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap } from "lucide-react";

interface CTSettings {
  phase: "3 Phase" | "2 Phase";
  low: number;
  high: number;
}

interface AmpsSettingsData {
  ct1: CTSettings;
  ct2: CTSettings;
  ct3: CTSettings;
}

export const AmpsSettings = () => {
  const [settings, setSettings] = useState<AmpsSettingsData>({
    ct1: { phase: "3 Phase", low: 20, high: 50 },
    ct2: { phase: "2 Phase", low: 15, high: 40 },
    ct3: { phase: "2 Phase", low: 25, high: 150 }
  });

  const updateCTSetting = (ct: keyof AmpsSettingsData, field: keyof CTSettings, value: any) => {
    setSettings(prev => ({
      ...prev,
      [ct]: { ...prev[ct], [field]: value }
    }));
  };

  const updateRange = (ct: keyof AmpsSettingsData, values: number[]) => {
    setSettings(prev => ({
      ...prev,
      [ct]: { ...prev[ct], low: values[0], high: values[1] }
    }));
  };

  return (
    <Card className="p-6 bg-settings-panel text-black shadow-panel rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-settings-alt-panel rounded-full flex items-center justify-center">
          <Zap className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold">Amps Settings</h3>
      </div>
      
      <div className="bg-card rounded-2xl p-6 shadow-card space-y-6">
        {/* CT1 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-bold">CT 1</Label>
            <Select
              value={settings.ct1.phase}
              onValueChange={(value: "3 Phase" | "2 Phase") => 
                updateCTSetting("ct1", "phase", value)
              }
            >
              <SelectTrigger className="w-32 bg-settings-alt-panel text-white border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3 Phase">3 Phase</SelectItem>
                <SelectItem value="2 Phase">2 Phase</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Low</span>
              <span className="font-bold text-lg">{settings.ct1.low}</span>
              <span>High</span>
            </div>
            <Slider
              value={[settings.ct1.low, settings.ct1.high]}
              onValueChange={(values) => updateRange("ct1", values)}
              max={200}
              step={1}
              className="w-full"
              minStepsBetweenThumbs={5}
            />
          </div>
        </div>

        {/* CT2 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-bold">CT 2</Label>
            <Select
              value={settings.ct2.phase}
              onValueChange={(value: "3 Phase" | "2 Phase") => 
                updateCTSetting("ct2", "phase", value)
              }
            >
              <SelectTrigger className="w-32 bg-settings-alt-panel text-white border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3 Phase">3 Phase</SelectItem>
                <SelectItem value="2 Phase">2 Phase</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Low</span>
              <span className="font-bold text-lg">{settings.ct2.low}</span>
              <span>High</span>
            </div>
            <Slider
              value={[settings.ct2.low, settings.ct2.high]}
              onValueChange={(values) => updateRange("ct2", values)}
              max={200}
              step={1}
              className="w-full"
              minStepsBetweenThumbs={5}
            />
          </div>
        </div>

        {/* CT3 */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-bold">CT 3</Label>
            <Select
              value={settings.ct3.phase}
              onValueChange={(value: "3 Phase" | "2 Phase") => 
                updateCTSetting("ct3", "phase", value)
              }
            >
              <SelectTrigger className="w-32 bg-settings-alt-panel text-white border-0">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3 Phase">3 Phase</SelectItem>
                <SelectItem value="2 Phase">2 Phase</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="px-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Low</span>
              <span className="font-bold text-lg">{settings.ct3.low}</span>
              <span>High</span>
            </div>
            <Slider
              value={[settings.ct3.low, settings.ct3.high]}
              onValueChange={(values) => updateRange("ct3", values)}
              max={200}
              step={1}
              className="w-full"
              minStepsBetweenThumbs={5}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};