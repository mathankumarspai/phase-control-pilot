import React, { useState } from 'react';
import { WheelPicker } from '@/components/ui/wheel-picker';
import { Button } from '@/components/ui/button';
import { Zap, Check, ToggleLeft, ToggleRight } from 'lucide-react';

interface CTValues {
  highAmps: number;
  lowAmps: number;
}

interface AmpsData {
  ct1: CTValues;
  ct2: CTValues;
  ct3: CTValues;
  overloadMode: boolean;
}

export const NewAmpsSettings: React.FC = () => {
  const [settings, setSettings] = useState<AmpsData>({
    ct1: { highAmps: 21.8, lowAmps: 9.9 },
    ct2: { highAmps: 18.5, lowAmps: 9.0 },
    ct3: { highAmps: 22.0, lowAmps: 11.5 },
    overloadMode: true
  });

  const [appliedStates, setAppliedStates] = useState({
    ct1: false,
    ct2: false,
    ct3: false
  });

  const updateCTValue = (ct: keyof Omit<AmpsData, 'overloadMode'>, type: keyof CTValues, value: number) => {
    setSettings(prev => ({
      ...prev,
      [ct]: {
        ...prev[ct],
        [type]: value
      }
    }));
  };

  const handleApply = (ct: keyof Omit<AmpsData, 'overloadMode'>) => {
    setAppliedStates(prev => ({ ...prev, [ct]: true }));
    setTimeout(() => {
      setAppliedStates(prev => ({ ...prev, [ct]: false }));
    }, 2000);
  };

  const toggleMode = () => {
    setSettings(prev => ({ ...prev, overloadMode: !prev.overloadMode }));
  };

  const CTRow = ({ 
    ctKey, 
    label, 
    values 
  }: { 
    ctKey: keyof Omit<AmpsData, 'overloadMode'>; 
    label: string; 
    values: CTValues;
  }) => (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      {/* CT Label & Icon */}
      <div className="flex items-center gap-2 min-w-16">
        <Zap className="w-4 h-4 text-yellow-400" />
        <span className="text-white font-semibold text-sm">{label}</span>
      </div>
      
      {/* Wheel Pickers */}
      <div className="flex-1 flex gap-6 justify-center">
        <div className="text-center">
          <div className="text-xs text-white/60 mb-2 font-medium">High Amps</div>
          <WheelPicker
            value={values.highAmps}
            min={0}
            max={50}
            step={0.1}
            suffix="A"
            decimals={1}
            onChange={(value) => updateCTValue(ctKey, 'highAmps', value)}
          />
        </div>
        
        <div className="text-center">
          <div className="text-xs text-white/60 mb-2 font-medium">Low Amps</div>
          <WheelPicker
            value={values.lowAmps}
            min={0}
            max={50}
            step={0.1}
            suffix="A"
            decimals={1}
            onChange={(value) => updateCTValue(ctKey, 'lowAmps', value)}
          />
        </div>
      </div>
      
      {/* Apply Button */}
      <Button
        onClick={() => handleApply(ctKey)}
        size="icon"
        className="w-8 h-8 rounded-lg transition-all duration-300"
        style={{
          background: appliedStates[ctKey] ? 
            'linear-gradient(135deg, #10B981, #059669)' :
            'var(--gradient-button-primary)',
          boxShadow: appliedStates[ctKey] ? 
            '0 4px 16px rgba(16, 185, 129, 0.3)' :
            '0 4px 16px rgba(10, 132, 255, 0.3)'
        }}
      >
        <Check className="w-4 h-4 text-white" />
      </Button>
    </div>
  );

  return (
    <div className="rounded-3xl p-6 backdrop-blur-xl border border-white/12"
         style={{
           background: 'var(--gradient-glass-panel)',
           boxShadow: 'var(--shadow-glass)'
         }}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Amps Settings</h3>
          <p className="text-sm text-white/70">Configure current thresholds for each CT sensor</p>
        </div>
        
        {/* Mode Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-white/70">
            {settings.overloadMode ? 'Overload' : 'Dryload'} Mode
          </span>
          <Button
            onClick={toggleMode}
            variant="ghost"
            size="sm"
            className="p-1 hover:bg-white/10"
          >
            {settings.overloadMode ? (
              <ToggleRight className="w-6 h-6 text-electric-blue" />
            ) : (
              <ToggleLeft className="w-6 h-6 text-white/40" />
            )}
          </Button>
        </div>
      </div>
      
      {/* CT Rows */}
      <div className="space-y-4">
        <CTRow ctKey="ct1" label="CT1" values={settings.ct1} />
        <CTRow ctKey="ct2" label="CT2" values={settings.ct2} />
        <CTRow ctKey="ct3" label="CT3" values={settings.ct3} />
      </div>
    </div>
  );
};