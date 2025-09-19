import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      </div>
      
      {/* Auth Card */}
      <div className="relative w-full max-w-md">
        <div className="glass-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              JeuxBoard
            </h1>
            <p className="text-sm text-muted-foreground mt-1">Let's Get Shit Done.</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
}