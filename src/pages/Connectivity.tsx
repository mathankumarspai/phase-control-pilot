import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Bluetooth, Server, RefreshCw } from "lucide-react";
import { ConnectivityIndicators } from "@/components/ConnectivityIndicators";
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
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [lastSync] = useState("12:34:56");
  const handleReconnect = async () => {
    setIsReconnecting(true);
    // Simulate reconnection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsReconnecting(false);
  };
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
          <h2 className="text-xl font-bold text-white">Connectivity Status</h2>
          <p className="text-white/70">Monitor connection status and settings</p>
        </header>

        <div className="space-y-6">
          {/* MQTT Status Card */}
          <Card className="glass-panel border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Server className="w-5 h-5" />
                MQTT Broker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-medium">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Broker</span>
                <span className="text-white font-mono text-sm">mqtt://broker.cosmic.io</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Last Sync</span>
                <span className="text-white">{lastSync}</span>
              </div>
            </CardContent>
          </Card>

          {/* WiFi Status Card */}
          <Card className="glass-panel border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Wifi className="w-5 h-5" />
                WiFi Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">SSID</span>
                <span className="text-white font-medium">CosmiC_Network</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Signal Strength</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-green-400 rounded-sm"></div>
                    <div className="w-1 h-4 bg-green-400 rounded-sm"></div>
                    <div className="w-1 h-5 bg-green-400 rounded-sm"></div>
                    <div className="w-1 h-6 bg-white/30 rounded-sm"></div>
                  </div>
                  <span className="text-green-400 font-medium">Good</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">IP Address</span>
                <span className="text-white font-mono text-sm">192.168.1.100</span>
              </div>
            </CardContent>
          </Card>

          {/* Bluetooth Status Card */}
          <Card className="glass-panel border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Bluetooth className="w-5 h-5" />
                Bluetooth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-red-400 font-medium">Disconnected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Device Name</span>
                <span className="text-white/50">Not Paired</span>
              </div>
            </CardContent>
          </Card>

          {/* Reconnect Button */}
          <Button
            onClick={handleReconnect}
            disabled={isReconnecting}
            className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-glow text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            {isReconnecting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <RefreshCw className="w-5 h-5 mr-2" />
                Reconnect All
              </>
            )}
          </Button>
        </div>
      </div>
    </div>;
};