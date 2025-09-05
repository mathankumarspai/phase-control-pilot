import { Wifi, Bluetooth, Globe } from "lucide-react";

interface ConnectivityIndicatorsProps {
  mqtt: boolean;
  wifi: boolean;
  bluetooth: boolean;
}

export const ConnectivityIndicators = ({ 
  mqtt = true, 
  wifi = true, 
  bluetooth = false 
}: ConnectivityIndicatorsProps) => {
  return (
    <div className="flex items-center space-x-2">
      {/* MQTT Status */}
      <div className="flex items-center">
        <div className={`w-2 h-2 rounded-full mr-1 ${mqtt ? 'bg-green-500' : 'bg-red-500'}`} />
        <Globe className={`h-4 w-4 ${mqtt ? 'text-green-500' : 'text-red-500'}`} />
      </div>
      
      {/* WiFi Status */}
      <Wifi className={`h-4 w-4 ${wifi ? 'text-blue-500' : 'text-gray-400'}`} />
      
      {/* Bluetooth Status */}
      <Bluetooth className={`h-4 w-4 ${bluetooth ? 'text-blue-600' : 'text-gray-400'}`} />
    </div>
  );
};