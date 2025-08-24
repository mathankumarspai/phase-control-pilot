import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OtherSettingsData {
  startingDryLoadTime: string;
  startingOverLoadTime: string;
  startingVoltageSensingTime: string;
  currentResetTime: string;
  voltageResetTime: string;
  overloadResetCount: string;
  voltageResetCount: string;
}

export const OtherSettings = () => {
  const [settings, setSettings] = useState<OtherSettingsData>({
    startingDryLoadTime: "00.00",
    startingOverLoadTime: "00.00",
    startingVoltageSensingTime: "00.00",
    currentResetTime: "00",
    voltageResetTime: "00",
    overloadResetCount: "00",
    voltageResetCount: "00"
  });

  const updateSetting = (key: keyof OtherSettingsData, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const SettingField = ({ 
    label, 
    value, 
    onChange, 
    unit, 
    placeholder 
  }: { 
    label: string; 
    value: string; 
    onChange: (value: string) => void; 
    unit: string;
    placeholder: string;
  }) => (
    <div className="bg-card p-4 rounded-lg border-2 border-black">
      <Label className="text-sm font-semibold mb-3 block text-center">{label}</Label>
      <div className="flex items-center justify-center space-x-2">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-input-field text-center font-bold text-black w-20"
          placeholder={placeholder}
        />
        <span className="font-semibold">{unit}</span>
      </div>
    </div>
  );

  return (
    <Card className="p-6 bg-gradient-alt-panel text-black shadow-panel">
      <h3 className="text-xl font-bold mb-6 text-center">Other Setting</h3>
      
      <div className="space-y-4">
        <SettingField
          label="Starting Dry Load Time"
          value={settings.startingDryLoadTime}
          onChange={(value) => updateSetting("startingDryLoadTime", value)}
          unit="Min"
          placeholder="00.00"
        />
        
        <SettingField
          label="Starting Over Load Time"
          value={settings.startingOverLoadTime}
          onChange={(value) => updateSetting("startingOverLoadTime", value)}
          unit="Min"
          placeholder="00.00"
        />
        
        <SettingField
          label="Starting Voltage Sensing Time"
          value={settings.startingVoltageSensingTime}
          onChange={(value) => updateSetting("startingVoltageSensingTime", value)}
          unit="Min"
          placeholder="00.00"
        />
        
        <SettingField
          label="Current Reset Time"
          value={settings.currentResetTime}
          onChange={(value) => updateSetting("currentResetTime", value)}
          unit="Nos"
          placeholder="00"
        />
        
        <SettingField
          label="Voltage Reset Time"
          value={settings.voltageResetTime}
          onChange={(value) => updateSetting("voltageResetTime", value)}
          unit="Nos"
          placeholder="00"
        />
        
        <SettingField
          label="Overload Reset Count"
          value={settings.overloadResetCount}
          onChange={(value) => updateSetting("overloadResetCount", value)}
          unit="Nos"
          placeholder="00"
        />
        
        <SettingField
          label="Voltage Reset Count"
          value={settings.voltageResetCount}
          onChange={(value) => updateSetting("voltageResetCount", value)}
          unit="Nos"
          placeholder="00"
        />
      </div>
    </Card>
  );
};