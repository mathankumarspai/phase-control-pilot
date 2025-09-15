import React from 'react';
import { MotorControlHeader } from "@/components/settings/MotorControlHeader";
import { MotorControlFooter } from "@/components/settings/MotorControlFooter";
import { OtherSettings } from "@/components/settings/OtherSettings";

export const AdditionalSettings = () => {
  return (
    <div className="min-h-screen relative">
      {/* Phone Frame Container */}
      <div className="max-w-sm mx-auto min-h-screen relative border-4 border-white/10 rounded-[40px] overflow-hidden"
           style={{ width: '390px', height: '844px' }}>
        
        {/* Header */}
        <MotorControlHeader />
        
        {/* Scrollable Content */}
        <div className="pt-28 pb-28 px-4 h-full overflow-y-auto overflow-x-hidden"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
             }}>
          <div className="space-y-4">
            <OtherSettings />
          </div>
        </div>
        
        {/* Footer */}
        <MotorControlFooter />
      </div>
    </div>
  );
};