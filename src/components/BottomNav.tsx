import { Home, BookOpen, Video, MessagesSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export const BottomNav = () => {
  const navItems: NavItem[] = [
    { icon: <Home className="w-6 h-6" />, label: "Home" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Learn", active: true },
    { icon: <Video className="w-6 h-6" />, label: "Videos" },
    { icon: <MessagesSquare className="w-6 h-6" />, label: "Chats" },
    { icon: <User className="w-6 h-6" />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border/50 backdrop-blur-lg bg-card/95 pb-[env(safe-area-inset-bottom)]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                item.active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className={cn(
                "transition-transform duration-200",
                item.active && "scale-110"
              )}>
                {item.icon}
              </div>
              <span className={cn(
                "text-xs font-medium",
                item.active && "font-semibold"
              )}>
                {item.label}
              </span>
              {item.active && (
                <div className="w-1 h-1 rounded-full bg-primary mt-0.5" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
