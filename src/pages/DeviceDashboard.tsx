import { useDevices } from "@/hooks/useDevices";
import { DeviceCard } from "@/components/DeviceCard";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const DeviceDashboard = () => {
  const { devices } = useDevices();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-sm mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-12 h-12 bg-gradient-cosmic rounded-2xl flex items-center justify-center mx-auto shadow-glow">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            CosmiC Home
          </h1>
          <p className="text-white/70">Your Connected Devices</p>
        </div>

        {/* Add Device Button */}
        <div className="glass-panel rounded-3xl p-4 shadow-glow">
          <Button
            onClick={() => navigate("/")}
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-lg text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Device
          </Button>
        </div>

        {/* Device List */}
        <div className="space-y-4">
          {devices.length === 0 ? (
            <div className="glass-panel rounded-3xl p-8 text-center shadow-glow">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white/50" />
              </div>
              <p className="text-white/70">No devices added yet</p>
              <p className="text-white/50 text-sm mt-2">
                Add your first device to get started
              </p>
            </div>
          ) : (
            devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};