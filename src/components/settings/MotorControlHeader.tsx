import React from 'react';
import { ChevronLeft, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MotorControlHeader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-24 px-4 pt-2 pb-4 flex items-end justify-between"
         style={{
           background: 'rgba(30, 27, 75, 0.9)',
           backdropFilter: 'blur(18px)',
           borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
         }}>
      
      {/* Back Button */}
      <Button 
        variant="ghost" 
        size="icon"
        className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </Button>
      
      {/* Title */}
      <div className="flex-1 text-center">
        <h1 className="text-lg font-semibold text-white tracking-tight">
          Motor Control — Dashboard
        </h1>
      </div>
      
      {/* Status & Menu */}
      <div className="flex items-center gap-3">
        {/* Online Status */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-sm font-medium text-white">Online</span>
        </div>
        
        {/* Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <MoreVertical className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
};