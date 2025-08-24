import { TimeSettings } from "@/components/settings/TimeSettings";
import { AmpsSettings } from "@/components/settings/AmpsSettings";
import { VoltageSettings } from "@/components/settings/VoltageSettings";

export const MotorSettings = () => {
  return (
    <div className="min-h-screen bg-background pb-20 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Motor Settings</h1>
        <p className="text-muted-foreground">Configure motor parameters</p>
      </header>

      <div className="space-y-6">
        <TimeSettings />
        <AmpsSettings />
        <VoltageSettings />
      </div>
    </div>
  );
};