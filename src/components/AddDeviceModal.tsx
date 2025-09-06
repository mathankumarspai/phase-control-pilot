import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDevices } from "@/hooks/useDevices";
import { useToast } from "@/hooks/use-toast";
import { Check, Smartphone } from "lucide-react";

interface AddDeviceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddDeviceModal = ({ open, onOpenChange }: AddDeviceModalProps) => {
  const [activationNumber, setActivationNumber] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { addDevice } = useDevices();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!activationNumber || !deviceName) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    addDevice({
      activationNumber,
      deviceName,
    });

    // Show success toast
    toast({
      title: "✅ Device Added Successfully",
      description: `${deviceName} has been added to your dashboard`,
      duration: 3000,
    });

    // Reset form
    setActivationNumber("");
    setDeviceName("");
    setIsLoading(false);
    onOpenChange(false);

    // Navigate to dashboard
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  const isFormValid = activationNumber.trim() && deviceName.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
            <Smartphone className="w-6 h-6" />
            Add New Device
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="activation" className="text-white/90">
              Activation Number
            </Label>
            <Input
              id="activation"
              type="number"
              placeholder="Enter activation number"
              value={activationNumber}
              onChange={(e) => setActivationNumber(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:border-blue-400"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="device-name" className="text-white/90">
              Device Name
            </Label>
            <Input
              id="device-name"
              placeholder="Enter device name"
              value={deviceName}
              onChange={(e) => setDeviceName(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl text-white placeholder:text-white/50 focus:border-blue-400"
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 rounded-2xl border-white/20 text-white/70 hover:bg-white/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!isFormValid || isLoading}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl shadow-lg text-white font-semibold transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Save
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};