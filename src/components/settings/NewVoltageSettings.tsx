import React, { useState } from 'react';
import { WheelPicker } from '@/components/ui/wheel-picker';
import { Info } from 'lucide-react';

interface VoltageValues {
  threePhase: number;
  twoPhase: number;
}

interface VoltageData {
  highVoltage: VoltageValues;
  lowVoltage: VoltageValues;
}

export const NewVoltageSettings: React.FC = () => {
  const [settings, setSettings] = useState<VoltageData>({
    highVoltage: { threePhase: 435, twoPhase: 230 },
    lowVoltage: { threePhase: 380, twoPhase: 200 }
  });

  const updateVoltageValue = (
    category: keyof VoltageData, 
    phase: keyof VoltageValues, 
    value: number
  ) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [phase]: value
      }
    }));
  };

  const VoltageRow = ({ 
    label, 
    values, 
    category 
  }: { 
    label: string; 
    values: VoltageValues;
    category: keyof VoltageData;
  }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      {/* Voltage Label */}
      <div className="min-w-20">
        <span className="text-white font-semibold text-sm">{label}</span>
      </div>
      
      {/* Wheel Pickers */}
      <div className="flex-1 flex gap-8 justify-center">
        <div className="text-center">
          <div className="text-xs text-white/60 mb-2 font-medium">3-Phase</div>
          <WheelPicker
            value={values.threePhase}
            min={100}
            max={600}
            step={1}
            suffix="V"
            decimals={0}
            onChange={(value) => updateVoltageValue(category, 'threePhase', value)}
          />
        </div>
        
        <div className="text-center">
          <div className="text-xs text-white/60 mb-2 font-medium">2-Phase</div>
          <WheelPicker
            value={values.twoPhase}
            min={100}
            max={600}
            step={1}
            suffix="V"
            decimals={0}
            onChange={(value) => updateVoltageValue(category, 'twoPhase', value)}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="rounded-3xl p-6 backdrop-blur-xl border border-white/12"
         style={{
           background: 'var(--gradient-glass-panel)',
           boxShadow: 'var(--shadow-glass)'
         }}>
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-xl font-bold text-white">Voltage Settings</h3>
        <Info className="w-4 h-4 text-white/40" />
      </div>
      
      {/* Voltage Rows */}
      <div className="space-y-4">
        <VoltageRow 
          label="High Voltage" 
          values={settings.highVoltage} 
          category="highVoltage" 
        />
        <VoltageRow 
          label="Low Voltage" 
          values={settings.lowVoltage} 
          category="lowVoltage" 
        />
      </div>
    </div>
  );
};