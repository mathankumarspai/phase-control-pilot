import { Home, BarChart3, Settings, MoreHorizontal, Wifi } from "lucide-react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const { deviceId } = useParams();
  const location = useLocation();
  
  // Only show navigation on device-specific pages
  if (!location.pathname.includes('/device/')) {
    return null;
  }

  const navigationItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: `/device/${deviceId}/dashboard`, icon: BarChart3, label: "Dashboard" },
    { path: `/device/${deviceId}/motor-settings`, icon: Settings, label: "Motor Settings" },
    { path: `/device/${deviceId}/additional-settings`, icon: MoreHorizontal, label: "Additional" },
    { path: `/device/${deviceId}/connectivity`, icon: Wifi, label: "Connectivity" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xl border-t border-white/20 shadow-glow z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center px-4 py-2 rounded-xl min-w-[70px] transition-all duration-300 transform hover:scale-105",
                isActive
                  ? "bg-gradient-cosmic text-white shadow-glow"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};