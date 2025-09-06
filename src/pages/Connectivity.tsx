import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Bluetooth, Globe, RefreshCw } from "lucide-react";
interface ConnectivityStatus {
  mqtt: {
    status: "connected" | "disconnected";
    broker: string;
    lastSync: string;
  };
  wifi: {
    status: "connected" | "disconnected";
    ssid: string;
    signalStrength: number;
  };
  bluetooth: {
    status: "paired" | "not_paired";
    deviceName: string;
  };
}
export const Connectivity = () => {
  const [connectivity, setConnectivity] = useState<ConnectivityStatus>({
    mqtt: {
      status: "connected",
      broker: "mqtt://broker-url",
      lastSync: "12:34:56"
    },
    wifi: {
      status: "connected",
      ssid: "WiFi-Network",
      signalStrength: 3
    },
    bluetooth: {
      status: "paired",
      deviceName: "Motor-Device-01"
    }
  });
  const handleReconnect = () => {
    // Simulate reconnection
    console.log("Reconnecting...");
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected":
      case "paired":
        return "text-green-600";
      default:
        return "text-red-600";
    }
  };
  const getStatusText = (status: string) => {
    switch (status) {
      case "connected":
        return "Connected";
      case "disconnected":
        return "Disconnected";
      case "paired":
        return "Paired";
      case "not_paired":
        return "Not Paired";
      default:
        return status;
    }
  };
  return <div className="min-h-screen pb-20 p-4 bg-pink-50 rounded-full">
      <header className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
            CosmiC
          </h1>
        </div>
        <h2 className="text-xl font-bold text-foreground">Connectivity Status</h2>
        <p className="text-muted-foreground">Monitor connection status</p>
      </header>

      <div className="space-y-6">
        {/* MQTT Status */}
        <Card className="p-6 bg-glass backdrop-blur-lg border border-white/20 rounded-3xl shadow-glass">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Globe className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">MQTT</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Current Broker:</span>
              <span className="text-foreground font-medium">{connectivity.mqtt.broker}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className={`font-medium ${getStatusColor(connectivity.mqtt.status)}`}>
                {getStatusText(connectivity.mqtt.status)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Sync:</span>
              <span className="text-foreground font-medium">{connectivity.mqtt.lastSync}</span>
            </div>
          </div>
        </Card>

        {/* WiFi Status */}
        <Card className="p-6 bg-glass backdrop-blur-lg border border-white/20 rounded-3xl shadow-glass">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Wifi className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">WiFi</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">SSID Name:</span>
              <span className="text-foreground font-medium">{connectivity.wifi.ssid}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className={`font-medium ${getStatusColor(connectivity.wifi.status)}`}>
                {getStatusText(connectivity.wifi.status)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Signal Strength:</span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map(bar => <div key={bar} className={`w-2 h-4 rounded-sm ${bar <= connectivity.wifi.signalStrength ? "bg-green-500" : "bg-gray-300"}`} />)}
              </div>
            </div>
          </div>
        </Card>

        {/* Bluetooth Status */}
        <Card className="p-6 bg-glass backdrop-blur-lg border border-white/20 rounded-3xl shadow-glass">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Bluetooth className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Bluetooth</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Device Name:</span>
              <span className="text-foreground font-medium">{connectivity.bluetooth.deviceName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className={`font-medium ${getStatusColor(connectivity.bluetooth.status)}`}>
                {getStatusText(connectivity.bluetooth.status)}
              </span>
            </div>
          </div>
        </Card>

        {/* Reconnect Button */}
        <Button onClick={handleReconnect} className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl h-14 text-lg font-medium shadow-glow hover:shadow-lg transform hover:scale-105 transition-all duration-300">
          <RefreshCw className="h-5 w-5 mr-2" />
          Reconnect All
        </Button>
      </div>
    </div>;
};