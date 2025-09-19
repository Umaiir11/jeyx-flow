import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  FolderOpen, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp,
  Plus
} from "lucide-react";

// Mock data - TODO: Replace with real data from Supabase
const stats = [
  {
    title: "Active Projects",
    value: "12",
    change: "+2 this week",
    trend: "up",
    icon: FolderOpen,
    color: "text-primary",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+3 new joins",
    trend: "up", 
    icon: Users,
    color: "text-success",
  },
  {
    title: "Pending Tasks",
    value: "47",
    change: "-8 from yesterday",
    trend: "down",
    icon: Clock,
    color: "text-warning",
  },
  {
    title: "Completed This Week",
    value: "156",
    change: "+23%",
    trend: "up",
    icon: CheckCircle,
    color: "text-success",
  },
];

const recentProjects = [
  {
    id: "1",
    name: "E-commerce Platform",
    status: "In Progress",
    completion: 65,
    team: 5,
    deadline: "2024-01-15",
    priority: "High",
  },
  {
    id: "2", 
    name: "Mobile App Redesign",
    status: "Review",
    completion: 90,
    team: 3,
    deadline: "2024-01-10",
    priority: "Medium",
  },
  {
    id: "3",
    name: "API Integration",
    status: "Planning",
    completion: 25,
    team: 4,
    deadline: "2024-01-20",
    priority: "Low",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's what's happening with your projects.
            </p>
          </div>
          <Button variant="hero" size="lg" className="group">
            <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
            New Project
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.title} className="glass-card hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <TrendingUp className={`h-3 w-3 ${stat.trend === 'up' ? 'text-success' : 'text-error'}`} />
                  <span>{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Projects
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </CardTitle>
                <CardDescription>
                  Your most recently active projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="glass p-4 rounded-lg hover:bg-surface-hover transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">{project.name}</h3>
                        <Badge 
                          variant="secondary" 
                          className={
                            project.priority === 'High' ? 'bg-error/20 text-error border-error/30' :
                            project.priority === 'Medium' ? 'bg-warning/20 text-warning border-warning/30' :
                            'bg-muted/20 text-muted-foreground border-muted/30'
                          }
                        >
                          {project.priority}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{project.status}</span>
                        <span>{project.team} team members</span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{project.completion}% complete</span>
                        <span>Due {project.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks and shortcuts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Project
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Invite Team Member
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Review Flags
                </Button>
              </CardContent>
            </Card>

            {/* Activity Feed */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full mt-2" />
                    <div>
                      <p className="text-foreground">Sarah completed design review</p>
                      <p className="text-muted-foreground text-xs">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="text-foreground">New project created</p>
                      <p className="text-muted-foreground text-xs">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                    <div>
                      <p className="text-foreground">Code review pending</p>
                      <p className="text-muted-foreground text-xs">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}