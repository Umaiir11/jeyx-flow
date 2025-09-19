import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Users, BarChart3 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Real-time updates and blazing fast performance for modern teams",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with immutable work completion tracking",
    },
    {
      icon: Users,
      title: "Role-Based",
      description: "Intelligent dashboards tailored for each team member's role",
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "Comprehensive analytics and insights to optimize your workflow",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              JeuxBoard
            </h1>
            <span className="text-sm text-muted-foreground">Let's Get Shit Done.</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button variant="hero" onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Project Management
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Reimagined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The next-generation platform built for modern development teams. 
              Track projects, verify work completion, and ship faster than ever.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button 
              variant="hero" 
              size="hero" 
              onClick={() => navigate("/signup")}
              className="group"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Modern Teams
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to manage projects efficiently and transparently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="glass-card text-center hover-lift"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of teams already shipping faster with JeuxBoard
          </p>
          <Button 
            variant="hero" 
            size="hero" 
            onClick={() => navigate("/signup")}
            className="group"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2024 JeuxBoard. Built for developers, by developers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
