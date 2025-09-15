import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const MotorControlFooter: React.FC = () => {
  const [saveState, setSaveState] = useState<'default' | 'saving' | 'saved'>('default');

  const handleSave = async () => {
    setSaveState('saving');
    
    // Simulate save operation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSaveState('saved');
    
    // Reset after showing success
    setTimeout(() => setSaveState('default'), 2000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-24 px-4 pt-4 pb-2 flex items-start gap-3"
         style={{
           background: 'rgba(30, 27, 75, 0.9)',
           backdropFilter: 'blur(18px)',
           borderTop: '1px solid rgba(255, 255, 255, 0.12)'
         }}>
      
      {/* Primary Save Button */}
      <Button
        onClick={handleSave}
        disabled={saveState === 'saving'}
        className="flex-1 h-12 rounded-2xl font-semibold text-white transition-all duration-300"
        style={{
          background: saveState === 'saved' ? 
            'linear-gradient(135deg, #10B981, #059669)' :
            'var(--gradient-button-save)',
          boxShadow: 'var(--shadow-button)'
        }}
      >
        {saveState === 'saving' && (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        )}
        {saveState === 'saved' && (
          <Check className="w-5 h-5 mr-2" />
        )}
        {saveState === 'default' && 'Save Settings'}
        {saveState === 'saving' && 'Saving...'}
        {saveState === 'saved' && '✓ Saved'}
      </Button>
      
      {/* Secondary Reset Button */}
      <Button
        variant="ghost"
        className="h-12 px-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all"
      >
        Reset
      </Button>
    </div>
  );
};