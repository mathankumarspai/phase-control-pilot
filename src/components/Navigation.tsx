import { Home, Settings, Wrench } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { path: "/", icon: Home, label: "Dashboard" },
  { path: "/motor-settings", icon: Settings, label: "Motor Settings" },
  { path: "/additional-settings", icon: Wrench, label: "Additional" },
];

export const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-industrial z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center px-3 py-1 rounded-lg min-w-[70px] transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-button"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
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