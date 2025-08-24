import { OtherSettings } from "@/components/settings/OtherSettings";

export const AdditionalSettings = () => {
  return (
    <div className="min-h-screen bg-background pb-20 p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Additional Settings</h1>
        <p className="text-muted-foreground">Advanced configuration options</p>
      </header>

      <OtherSettings />
    </div>
  );
};