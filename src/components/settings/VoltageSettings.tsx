import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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

  return (
    <Card className="glass-panel p-6 shadow-glass rounded-3xl border-0">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-md">
          <Plug className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Voltage Settings</h3>
      </div>
      
      <div className="space-y-6">
        {/* 3 Phase */}
        <div className="glass p-6 rounded-2xl space-y-4">
          <Label className="text-lg font-bold text-foreground">3 Phase</Label>
          
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Low Voltage Dropdown */}
            <div className="flex-1">
              <Label className="text-sm text-muted-foreground mb-2 block">Low Voltage</Label>
              <Select
                value={settings.threePhase.low.toString()}
                onValueChange={(value) => updateLowVoltage("threePhase", parseInt(value))}
              >
                <SelectTrigger className="bg-yellow-400 text-black border-0 font-bold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {voltageRanges.low.map((range) => (
                    <SelectItem key={range.value} value={range.value.toString()}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Center Value Display */}
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-foreground">{Math.round((settings.threePhase.low + settings.threePhase.high) / 2)}V</div>
              <div className="text-sm text-muted-foreground">Average</div>
            </div>

            {/* High Voltage Dropdown */}
            <div className="flex-1">
              <Label className="text-sm text-muted-foreground mb-2 block">High Voltage</Label>
              <Select
                value={settings.threePhase.high.toString()}
                onValueChange={(value) => updateHighVoltage("threePhase", parseInt(value))}
              >
                <SelectTrigger className="bg-yellow-400 text-black border-0 font-bold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {voltageRanges.high.map((range) => (
                    <SelectItem key={range.value} value={range.value.toString()}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="px-4">
            <Slider
              value={[settings.threePhase.low, settings.threePhase.high]}
              onValueChange={(values) => updateRange("threePhase", values)}
              min={0}
              max={600}
              step={5}
              className="w-full"
              minStepsBetweenThumbs={20}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>0V</span>
              <span>600V</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Input
                type="number"
                value={settings.threePhase.low}
                onChange={(e) => updateLowVoltage("threePhase", parseInt(e.target.value) || 0)}
                className="text-center font-bold"
                placeholder="Low"
                min={0}
                max={600}
              />
              <Input
                type="number"
                value={settings.threePhase.high}
                onChange={(e) => updateHighVoltage("threePhase", parseInt(e.target.value) || 0)}
                className="text-center font-bold"
                placeholder="High"
                min={0}
                max={600}
              />
            </div>
          </div>
        </div>

        {/* 2 Phase */}
        <div className="glass p-6 rounded-2xl space-y-4">
          <Label className="text-lg font-bold text-foreground">2 Phase</Label>
          
          <div className="flex items-center justify-between gap-4 mb-4">
            {/* Low Voltage Dropdown */}
            <div className="flex-1">
              <Label className="text-sm text-muted-foreground mb-2 block">Low Voltage</Label>
              <Select
                value={settings.twoPhase.low.toString()}
                onValueChange={(value) => updateLowVoltage("twoPhase", parseInt(value))}
              >
                <SelectTrigger className="bg-yellow-400 text-black border-0 font-bold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {voltageRanges.low.map((range) => (
                    <SelectItem key={range.value} value={range.value.toString()}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Center Value Display */}
            <div className="text-center px-4">
              <div className="text-2xl font-bold text-foreground">{Math.round((settings.twoPhase.low + settings.twoPhase.high) / 2)}V</div>
              <div className="text-sm text-muted-foreground">Average</div>
            </div>

            {/* High Voltage Dropdown */}
            <div className="flex-1">
              <Label className="text-sm text-muted-foreground mb-2 block">High Voltage</Label>
              <Select
                value={settings.twoPhase.high.toString()}
                onValueChange={(value) => updateHighVoltage("twoPhase", parseInt(value))}
              >
                <SelectTrigger className="bg-yellow-400 text-black border-0 font-bold">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {voltageRanges.high.map((range) => (
                    <SelectItem key={range.value} value={range.value.toString()}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="px-4">
            <Slider
              value={[settings.twoPhase.low, settings.twoPhase.high]}
              onValueChange={(values) => updateRange("twoPhase", values)}
              min={0}
              max={600}
              step={5}
              className="w-full"
              minStepsBetweenThumbs={20}
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>0V</span>
              <span>600V</span>
            </div>
            <div className="flex gap-4 mt-4">
              <Input
                type="number"
                value={settings.twoPhase.low}
                onChange={(e) => updateLowVoltage("twoPhase", parseInt(e.target.value) || 0)}
                className="text-center font-bold"
                placeholder="Low"
                min={0}
                max={600}
              />
              <Input
                type="number"
                value={settings.twoPhase.high}
                onChange={(e) => updateHighVoltage("twoPhase", parseInt(e.target.value) || 0)}
                className="text-center font-bold"
                placeholder="High"
                min={0}
                max={600}
              />
            </div>
          </div>
        </div>

        {/* Different Voltage */}
        <div className="glass p-6 rounded-2xl space-y-4">
          <Label className="text-lg font-bold text-foreground">Different Voltage</Label>
          <div className="flex items-center gap-4">
            <div className="text-center px-4">
              <div className="text-3xl font-bold text-foreground">{settings.differentVoltage}V</div>
            </div>
            <div className="flex-1">
              <Input
                type="number"
                value={settings.differentVoltage}
                onChange={(e) => updateDifferentVoltage(parseInt(e.target.value) || 0)}
                className="text-center font-bold text-lg"
                min={200}
                max={500}
              />
            </div>
          </div>
          <div className="px-4">
            <Slider
              value={[settings.differentVoltage]}
              onValueChange={(values) => updateDifferentVoltage(values[0])}
              min={0}
              max={600}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-2">
              <span>0V</span>
              <span>600V</span>
            </div>
            <div className="mt-4">
              <Input
                type="number"
                value={settings.differentVoltage}
                onChange={(e) => updateDifferentVoltage(parseInt(e.target.value) || 0)}
                className="text-center font-bold text-lg w-full"
                min={0}
                max={600}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};