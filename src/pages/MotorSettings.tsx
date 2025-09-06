import { TimeSettings } from "@/components/settings/TimeSettings";
import { AmpsSettings } from "@/components/settings/AmpsSettings";
import { VoltageSettings } from "@/components/settings/VoltageSettings";
import { ConnectivityIndicators } from "@/components/ConnectivityIndicators";
export const MotorSettings = () => {
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
          <h2 className="text-xl font-bold text-white">Motor Settings</h2>
          <p className="text-white/70">Configure motor parameters</p>
        </header>

        <div className="space-y-6">
          <TimeSettings />
          <AmpsSettings />
          <VoltageSettings />
        </div>
      </div>
    </div>;
};