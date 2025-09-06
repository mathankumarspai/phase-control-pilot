import { useState } from "react";
import { PhaseDisplay } from "@/components/dashboard/PhaseDisplay";
import { MotorControl } from "@/components/dashboard/MotorControl";
import { AdditionalSwitches } from "@/components/dashboard/AdditionalSwitches";
import { TimerSection } from "@/components/dashboard/TimerSection";
import { ConnectivityIndicators } from "@/components/ConnectivityIndicators";
export const Dashboard = () => {
  const [phaseData] = useState({
    r: {
      voltage: 415,
      current: 12.5
    },
    y: {
      voltage: 418,
      current: 11.8
    },
    b: {
      voltage: 412,
      current: 12.2
    }
  });
  const [motorStatus, setMotorStatus] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [oneThirdPhase, setOneThirdPhase] = useState(false);
  const [floatMode, setFloatMode] = useState(false);
  return <div className="min-h-screen pb-20 p-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="w-full max-w-sm mx-auto">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <h1 className="text-3xl font-bold text-white">
                CosmiC
              </h1>
            </div>
            <ConnectivityIndicators mqtt={true} wifi={true} bluetooth={false} />
          </div>
          <h2 className="text-xl font-bold text-white">Motor Control Dashboard</h2>
          <p className="text-white/70">Industrial IoT Monitoring System</p>
        </header>

        {/* Phase Displays - Always in parallel/row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <PhaseDisplay phase="R" color="phase-r" data={phaseData.r} />
          <PhaseDisplay phase="Y" color="phase-y" data={phaseData.y} />
          <PhaseDisplay phase="B" color="phase-b" data={phaseData.b} />
        </div>

        {/* Motor Control - Centered */}
        <div className="flex justify-center mb-6">
          <MotorControl isOn={motorStatus} onToggle={setMotorStatus} />
        </div>

        {/* Additional Switches */}
        <AdditionalSwitches auto={autoMode} oneThirdPhase={oneThirdPhase} float={floatMode} onAutoToggle={setAutoMode} onOneThirdPhaseToggle={setOneThirdPhase} onFloatToggle={setFloatMode} />

        {/* Timer Section */}
        <TimerSection />
      </div>
    </div>;
};