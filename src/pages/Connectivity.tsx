import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Database, Wifi, Bluetooth, Monitor, Globe, ChevronLeft, MoreVertical } from "lucide-react";
import { ConnectivityIndicators } from "@/components/ConnectivityIndicators";

export const Connectivity = () => {
  const [isReconnecting, setIsReconnecting] = useState(false);
  const [mqttEnabled, setMqttEnabled] = useState(true);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [remoteAccessEnabled, setRemoteAccessEnabled] = useState(true);

  const handleSave = async () => {
    setIsReconnecting(true);
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsReconnecting(false);
  };

  const statusItems = [
    { icon: Database, label: "MQTT Broker", status: "Connected", color: "text-emerald-400" },
    { icon: Wifi, label: "WiFi", status: "Connected", color: "text-emerald-400" },
    { icon: Bluetooth, label: "Bluetooth", status: "Disconnected", color: "text-red-400" },
    { icon: Monitor, label: "Remote Access", status: "Active", color: "text-emerald-400" },
    { icon: Globe, label: "Server", status: "Online", color: "text-emerald-400" },
  ];

  return (
    <div className="h-screen w-full max-w-[390px] mx-auto bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Phone Frame */}
      <div className="absolute inset-0 rounded-[40px] border border-white/20 shadow-2xl"></div>
      
      {/* Header */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] z-50 h-24 px-4 pt-2 pb-4 flex items-end justify-between"
           style={{
             background: 'rgba(30, 27, 75, 0.9)',
             backdropFilter: 'blur(18px)',
             borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
           }}>
        
        {/* Back Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Button>
        
        {/* Title */}
        <div className="flex-1 text-center">
          <h1 className="text-lg font-semibold text-white tracking-tight">
            CosmiC — Connectivity
          </h1>
        </div>
        
        {/* Status & Menu */}
        <div className="flex items-center gap-3">
          <ConnectivityIndicators mqtt={true} wifi={true} bluetooth={false} />
          
          <Button 
            variant="ghost" 
            size="icon"
            className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
          >
            <MoreVertical className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
        <div className="px-4 pt-[110px] pb-[120px] space-y-4">
          {/* Connection Status Overview Card */}
          <Card className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-lg font-semibold">Connection Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {statusItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-white/70" />
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                  <span className={`${item.color} font-semibold text-sm`}>{item.status}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* MQTT Broker Card */}
          <Card className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-white" />
                  <CardTitle className="text-white text-lg font-semibold">MQTT Broker</CardTitle>
                </div>
                <Switch 
                  checked={mqttEnabled} 
                  onCheckedChange={setMqttEnabled}
                  className="data-[state=checked]:bg-electric-blue"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Status</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-emerald-400 font-medium">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Broker</span>
                <span className="text-white font-mono text-sm">mqtt://broker.cosmic.io</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Last Sync</span>
                <span className="text-white">12:34:56</span>
              </div>
            </CardContent>
          </Card>

          {/* WiFi Connection Card */}
          <Card className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-white" />
                  <CardTitle className="text-white text-lg font-semibold">WiFi Connection</CardTitle>
                </div>
                <Switch 
                  checked={wifiEnabled} 
                  onCheckedChange={setWifiEnabled}
                  className="data-[state=checked]:bg-electric-blue"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">SSID</span>
                <span className="text-white font-medium">CosmiC_Network</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Signal Strength</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1 h-3 bg-emerald-400 rounded-sm"></div>
                    <div className="w-1 h-4 bg-emerald-400 rounded-sm"></div>
                    <div className="w-1 h-5 bg-emerald-400 rounded-sm"></div>
                    <div className="w-1 h-6 bg-white/30 rounded-sm"></div>
                  </div>
                  <span className="text-emerald-400 font-medium">Good</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">IP Address</span>
                <span className="text-white font-mono text-sm">192.168.1.100</span>
              </div>
            </CardContent>
          </Card>

          {/* Bluetooth Card */}
          <Card className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bluetooth className="w-5 h-5 text-white" />
                  <CardTitle className="text-white text-lg font-semibold">Bluetooth</CardTitle>
                </div>
                <Switch 
                  checked={bluetoothEnabled} 
                  onCheckedChange={setBluetoothEnabled}
                  className="data-[state=checked]:bg-electric-blue"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
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

          {/* Remote Access Card */}
          <Card className="bg-white/8 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-white" />
                  <CardTitle className="text-white text-lg font-semibold">Remote Access</CardTitle>
                </div>
                <Switch 
                  checked={remoteAccessEnabled} 
                  onCheckedChange={setRemoteAccessEnabled}
                  className="data-[state=checked]:bg-electric-blue"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Server Address</span>
              </div>
              <div className="p-3 bg-white/10 rounded-lg border border-white/20">
                <span className="text-white font-mono text-sm">192.168.1.100</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] p-4 bg-white/10 backdrop-blur-xl border-t border-white/20">
          <Button
            onClick={handleSave}
            disabled={isReconnecting}
            className="w-full h-12 bg-gradient-to-r from-electric-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-glow text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            {isReconnecting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Save Connectivity Settings"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};