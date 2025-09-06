import { createContext, useContext, useState, ReactNode } from "react";
import { Device } from "@/types/device";

interface DevicesContextType {
  devices: Device[];
  addDevice: (device: Omit<Device, "id" | "isOnline" | "lastSeen">) => void;
  removeDevice: (id: string) => void;
}

const DevicesContext = createContext<DevicesContextType | undefined>(undefined);

export const DevicesProvider = ({ children }: { children: ReactNode }) => {
  const [devices, setDevices] = useState<Device[]>([]);

  const addDevice = (deviceData: Omit<Device, "id" | "isOnline" | "lastSeen">) => {
    const newDevice: Device = {
      ...deviceData,
      id: Date.now().toString(),
      isOnline: Math.random() > 0.3, // Random online status for demo
      lastSeen: new Date().toLocaleTimeString(),
    };
    setDevices(prev => [...prev, newDevice]);
  };

  const removeDevice = (id: string) => {
    setDevices(prev => prev.filter(device => device.id !== id));
  };

  return (
    <DevicesContext.Provider value={{ devices, addDevice, removeDevice }}>
      {children}
    </DevicesContext.Provider>
  );
};

export const useDevices = () => {
  const context = useContext(DevicesContext);
  if (context === undefined) {
    throw new Error("useDevices must be used within a DevicesProvider");
  }
  return context;
};