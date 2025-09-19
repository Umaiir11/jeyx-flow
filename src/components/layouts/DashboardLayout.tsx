import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search, Settings, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children?: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  // TODO: Replace with actual user data from context
  const user = {
    name: "John Doe",
    email: "john@jeuxboard.com",
    role: "DEVELOPER",
    avatar: null,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              JeuxBoard
            </h1>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search projects, tasks, or people..."
                className="glass w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-error rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">3</span>
              </span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.role}</p>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || undefined} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children || <Outlet />}
      </main>
    </div>
  );
}