import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddDevice } from "./pages/AddDevice";
import { DeviceDashboard } from "./pages/DeviceDashboard";
import { Dashboard } from "./pages/Dashboard";
import { MotorSettings } from "./pages/MotorSettings";
import { AdditionalSettings } from "./pages/AdditionalSettings";
import { Connectivity } from "./pages/Connectivity";
import { Navigation } from "./components/Navigation";
import { DevicesProvider } from "./hooks/useDevices";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DevicesProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<AddDevice />} />
              <Route path="/dashboard" element={<DeviceDashboard />} />
              <Route path="/device/:deviceId/dashboard" element={<Dashboard />} />
              <Route path="/device/:deviceId/motor-settings" element={<MotorSettings />} />
              <Route path="/device/:deviceId/additional-settings" element={<AdditionalSettings />} />
              <Route path="/device/:deviceId/connectivity" element={<Connectivity />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Navigation />
          </div>
        </BrowserRouter>
      </DevicesProvider>
    </TooltipProvider>
  </QueryClientProvider>;
export default App;