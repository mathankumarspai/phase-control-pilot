import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { MotorSettings } from "./pages/MotorSettings";
import { AdditionalSettings } from "./pages/AdditionalSettings";
import { Connectivity } from "./pages/Connectivity";
import { Navigation } from "./components/Navigation";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();
const App = () => <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background rounded-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/motor-settings" element={<MotorSettings />} />
            <Route path="/additional-settings" element={<AdditionalSettings />} />
            <Route path="/connectivity" element={<Connectivity />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navigation />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;
export default App;