import { useNavigate } from "react-router-dom";
import { Smartphone, Wifi, WifiOff } from "lucide-react";
import { Device } from "@/types/device";

interface DeviceCardProps {
  device: Device;
}

export const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigate = useNavigate();

  const handleDeviceClick = () => {
    navigate(`/device/${device.id}/dashboard`);
  };

  return (
    <div 
      onClick={handleDeviceClick}
      className="glass-panel rounded-3xl p-6 shadow-glow cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg">
              {device.deviceName}
            </h3>
            <p className="text-white/70 text-sm">
              ID: {device.activationNumber}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {device.isOnline ? (
            <div className="flex items-center space-x-1">
              <Wifi className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-xs font-medium">Online</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <WifiOff className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-medium">Offline</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-white/70">
        <span>Last seen: {device.lastSeen}</span>
        <span className="text-blue-400 font-medium">Tap to control →</span>
      </div>
    </div>
  );
};