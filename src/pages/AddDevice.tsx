import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddDeviceModal } from "@/components/AddDeviceModal";

export const AddDevice = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-cosmic rounded-3xl flex items-center justify-center mx-auto shadow-glow">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            CosmiC
          </h1>
          <p className="text-white/70 text-lg">Industrial IoT Control System</p>
        </div>

        {/* Add Device Button */}
        <div className="glass-panel rounded-3xl p-8 shadow-glow">
          <Button
            onClick={() => setShowModal(true)}
            className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-lg text-white text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-6 h-6 mr-3" />
            Add Device
          </Button>
        </div>

        {/* Feature List */}
        <div className="glass-panel rounded-3xl p-6 shadow-glow">
          <h3 className="text-white font-semibold mb-4">Features</h3>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Motor Control & Monitoring
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              Real-time Phase Monitoring
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              IoT Connectivity
            </li>
          </ul>
        </div>
      </div>

      <AddDeviceModal open={showModal} onOpenChange={setShowModal} />
    </div>
  );
};