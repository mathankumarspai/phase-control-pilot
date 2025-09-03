import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Timer, Zap, RotateCcw, AlertTriangle } from "lucide-react";

interface OtherSettingsData {
  startingDryLoadTime: number;
  startingOverLoadTime: number;
  startingVoltageSensingTime: number;
  currentResetTime: number;
  voltageResetTime: number;
  overloadResetCount: number;
  voltageResetCount: number;
}

export const OtherSettings = () => {
  const [settings, setSettings] = useState<OtherSettingsData>({
    startingDryLoadTime: 5,
    startingOverLoadTime: 10,
    startingVoltageSensingTime: 3,
    currentResetTime: 15,
    voltageResetTime: 20,
    overloadResetCount: 3,
    voltageResetCount: 5
  });

  const updateSetting = (key: keyof OtherSettingsData, value: number) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const settingsData = [
    { 
      key: "startingDryLoadTime" as keyof OtherSettingsData, 
      label: "Starting Dry Load Time", 
      icon: Timer, 
      unit: "sec", 
      max: 60,
      color: "#f59e0b" 
    },
    { 
      key: "startingOverLoadTime" as keyof OtherSettingsData, 
      label: "Starting Over Load Time", 
      icon: AlertTriangle, 
      unit: "sec", 
      max: 60,
      color: "#ef4444" 
    },
    { 
      key: "startingVoltageSensingTime" as keyof OtherSettingsData, 
      label: "Starting Voltage Sensing Time", 
      icon: Zap, 
      unit: "sec", 
      max: 30,
      color: "#8b5cf6" 
    },
    { 
      key: "currentResetTime" as keyof OtherSettingsData, 
      label: "Current Reset Time", 
      icon: RotateCcw, 
      unit: "sec", 
      max: 120,
      color: "#06b6d4" 
    },
    { 
      key: "voltageResetTime" as keyof OtherSettingsData, 
      label: "Voltage Reset Time", 
      icon: RotateCcw, 
      unit: "sec", 
      max: 120,
      color: "#10b981" 
    },
    { 
      key: "overloadResetCount" as keyof OtherSettingsData, 
      label: "Overload Reset Count", 
      icon: AlertTriangle, 
      unit: "times", 
      max: 10,
      color: "#f97316" 
    },
    { 
      key: "voltageResetCount" as keyof OtherSettingsData, 
      label: "Voltage Reset Count", 
      icon: RotateCcw, 
      unit: "times", 
      max: 10,
      color: "#84cc16" 
    }
  ];

  return (
    <div className="space-y-4">
      {settingsData.map((item) => {
        const IconComponent = item.icon;
        return (
          <Card 
            key={item.key}
            className="p-6 bg-gradient-alt-panel text-black shadow-card rounded-3xl"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <Label className="text-lg font-bold">{item.label}</Label>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold" style={{ color: item.color }}>
                  {settings[item.key]}
                </span>
                <span className="text-sm text-muted-foreground ml-2">{item.unit}</span>
              </div>
              
              <div className="px-4">
                <Slider
                  value={[settings[item.key]]}
                  onValueChange={(values) => updateSetting(item.key, values[0])}
                  max={item.max}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>0</span>
                  <span>{item.max}</span>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};