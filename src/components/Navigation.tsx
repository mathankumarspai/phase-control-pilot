import { Home, Settings, Wrench, Globe } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { path: "/", icon: Home, label: "Dashboard" },
  { path: "/motor-settings", icon: Settings, label: "Motor Settings" },
  { path: "/additional-settings", icon: Wrench, label: "Additional" },
  { path: "/connectivity", icon: Globe, label: "Connectivity" },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border shadow-card z-50">
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
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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