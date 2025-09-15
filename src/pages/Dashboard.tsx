import { useState } from "react";
import { PhaseDisplay } from "@/components/dashboard/PhaseDisplay";
import { MotorControl } from "@/components/dashboard/MotorControl";
import { AdditionalSwitches } from "@/components/dashboard/AdditionalSwitches";
import { TimerSection } from "@/components/dashboard/TimerSection";
import { ConnectivityIndicators } from "@/components/ConnectivityIndicators";

export const Dashboard = () => {
  const [phaseData] = useState({
    r: {
      voltage: 420,
      current: 12.5
    },
    y: {
      voltage: 420,
      current: 12.5
    },
    b: {
      voltage: 420,
      current: 12.5
    }
  });
  const [motorStatus, setMotorStatus] = useState(true);
  const [autoMode, setAutoMode] = useState(false);
  const [oneThirdPhase, setOneThirdPhase] = useState(false);
  const [floatMode, setFloatMode] = useState(true);

  return (
    <div className="min-h-screen relative">
      {/* Phone Frame Container */}
      <div className="max-w-sm mx-auto min-h-screen relative border-4 border-white/10 rounded-[40px] overflow-hidden"
           style={{ width: '390px', height: '844px' }}>
        
        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto overflow-x-hidden pb-20"
             style={{
               scrollbarWidth: 'thin',
               scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
             }}>
          
          <div className="p-4">
            <header className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <h1 className="text-2xl font-bold text-white">
                    CosmiC
                  </h1>
                </div>
                <ConnectivityIndicators mqtt={true} wifi={true} bluetooth={false} />
              </div>
              <h2 className="text-lg font-bold text-white">Motor Control Dashboard</h2>
              <p className="text-white/70 text-sm">Industrial IoT Monitoring System</p>
            </header>

            {/* Phase Displays - Always in parallel/row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <PhaseDisplay phase="R" color="phase-r" data={phaseData.r} />
              <PhaseDisplay phase="Y" color="phase-y" data={phaseData.y} />
              <PhaseDisplay phase="B" color="phase-b" data={phaseData.b} />
            </div>

            {/* Motor Control - Centered */}
            <div className="mb-6">
              <MotorControl isOn={motorStatus} onToggle={setMotorStatus} />
            </div>

            {/* Additional Switches */}
            <AdditionalSwitches 
              auto={autoMode} 
              oneThirdPhase={oneThirdPhase} 
              float={floatMode} 
              onAutoToggle={setAutoMode} 
              onOneThirdPhaseToggle={setOneThirdPhase} 
              onFloatToggle={setFloatMode} 
            />

            {/* Timer Section */}
            <TimerSection />
          </div>
        </div>
      </div>
    </div>
  );
};