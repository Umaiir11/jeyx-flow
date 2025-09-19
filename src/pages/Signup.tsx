import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthLayout } from "@/components/layouts/AuthLayout";
import { RoleSelector } from "@/components/auth/RoleSelector";
import { UserRole } from "@/types/auth";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      // TODO: Show error toast
      console.error("Passwords don't match");
      return;
    }
    
    if (!role) {
      // TODO: Show error toast
      console.error("Please select a role");
      return;
    }
    
    setIsLoading(true);
    
    // TODO: Implement Supabase authentication
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signup:", { name, email, password, role });
    }, 1000);
  };

  return (
    <AuthLayout 
      title="Join JeuxBoard" 
      subtitle="Create your account and start shipping"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="glass border-border/50 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass border-border/50 focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="glass border-border/50 focus:border-primary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="glass border-border/50 focus:border-primary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        <RoleSelector 
          selectedRole={role} 
          onRoleSelect={setRole} 
        />

        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full"
          disabled={isLoading || !role}
        >
          {isLoading ? "Creating account..." : "Create Account"}
        </Button>

        <div className="text-center">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link 
            to="/login" 
            className="text-primary hover:text-primary-hover font-medium transition-colors"
          >
            Sign in
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}