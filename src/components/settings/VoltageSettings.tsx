import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plug } from "lucide-react";

interface VoltageSettingsData {
  threePhase: { low: number; high: number };
  twoPhase: { low: number; high: number };
  differentVoltage: number;
}

const voltageRanges = {
  low: [
    { label: "100V - 200V", value: 150 },
    { label: "200V - 300V", value: 250 },
    { label: "300V - 400V", value: 350 },
    { label: "400V - 500V", value: 450 }
  ],
  high: [
    { label: "200V - 300V", value: 250 },
    { label: "300V - 400V", value: 350 },
    { label: "400V - 500V", value: 450 },
    { label: "500V - 600V", value: 550 }
  ]
};

export const VoltageSettings = () => {
  const [settings, setSettings] = useState<VoltageSettingsData>({
    threePhase: { low: 0, high: 0 },
    twoPhase: { low: 0, high: 0 },
    differentVoltage: 30
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

  const updateLowVoltage = (key: "threePhase" | "twoPhase", value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: { ...prev[key], low: value }
    }));
  };

  const updateHighVoltage = (key: "threePhase" | "twoPhase", value: number) => {
    setSettings(prev => ({
      ...prev,
      [key]: { ...prev[key], high: value }
    }));
  };

  const VoltageSection = ({ 
    label, 
    low, 
    high, 
    onLowChange, 
    onHighChange,
    showDropdowns = false 
  }: { 
    label: string; 
    low: number;
    high: number;
    onLowChange: (value: number) => void;
    onHighChange: (value: number) => void;
    showDropdowns?: boolean;
  }) => (
    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-glass">
      <div className="flex items-center justify-between mb-4">
        <Label className="text-lg font-bold text-black">{label}</Label>
        {showDropdowns && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="px-4 py-2 rounded-xl font-medium bg-yellow-500 text-white border-0 shadow-md hover:bg-yellow-600"
            >
              Low Voltage
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="px-4 py-2 rounded-xl font-medium bg-yellow-500 text-white border-0 shadow-md hover:bg-yellow-600"
            >
              High Voltage
            </Button>
          </div>
        )}
      </div>
      
      <div className="text-center mb-4">
        <span className="text-3xl font-bold text-black">{(low || high || 0).toString().padStart(3, '0')} V</span>
      </div>
      
      <div className="px-2 mb-4">
        <Slider
          value={[low || high || 0]}
          onValueChange={(values) => onLowChange ? onLowChange(values[0]) : onHighChange(values[0])}
          max={500}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between text-sm text-black/70 mt-2">
          <span>0</span>
          <span>500</span>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Input
          type="number"
          value={low || high || 0}
          onChange={(e) => {
            const value = parseInt(e.target.value) || 0;
            onLowChange ? onLowChange(value) : onHighChange(value);
          }}
          className="w-24 text-center bg-white/30 border-white/30 text-black"
          min={0}
          max={500}
        />
      </div>
    </div>
  );

  return (
    <Card className="p-6 bg-gradient-to-br from-green-400 to-green-500 shadow-panel rounded-3xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          <Plug className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">Voltage Settings</h3>
      </div>
      
      <div className="space-y-6">
        <VoltageSection 
          label="3 Phase" 
          low={settings.threePhase.low}
          high={settings.threePhase.high}
          onLowChange={(value) => updateLowVoltage("threePhase", value)}
          onHighChange={(value) => updateHighVoltage("threePhase", value)}
          showDropdowns={true}
        />
        <VoltageSection 
          label="2 Phase" 
          low={settings.twoPhase.low}
          high={settings.twoPhase.high}
          onLowChange={(value) => updateLowVoltage("twoPhase", value)}
          onHighChange={(value) => updateHighVoltage("twoPhase", value)}
          showDropdowns={true}
        />
        <VoltageSection 
          label="Different Voltage" 
          low={0}
          high={settings.differentVoltage}
          onLowChange={() => {}}
          onHighChange={(value) => updateDifferentVoltage(value)}
        />
      </div>
    </Card>
  );
};