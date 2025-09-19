import { UserRole, ROLE_LABELS, ROLE_DESCRIPTIONS } from "@/types/auth";
import { cn } from "@/lib/utils";

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onRoleSelect: (role: UserRole) => void;
}

const roleColors: Record<UserRole, string> = {
  ADMIN: 'role-admin',
  CTO: 'role-cto',
  PROJECT_MANAGER: 'role-pm',
  LEAD: 'role-lead',
  DEVELOPER: 'role-developer',
  DESIGNER: 'role-designer',
};

export function RoleSelector({ selectedRole, onRoleSelect }: RoleSelectorProps) {
  const roles: UserRole[] = ['ADMIN', 'CTO', 'PROJECT_MANAGER', 'LEAD', 'DEVELOPER', 'DESIGNER'];

  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Select Your Role
      </label>
      <div className="grid grid-cols-1 gap-3">
        {roles.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => onRoleSelect(role)}
            className={cn(
              "glass text-left p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105",
              selectedRole === role
                ? "border-primary shadow-glow"
                : "border-transparent hover:border-primary/50"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-foreground">
                    {ROLE_LABELS[role]}
                  </span>
                  <span className={cn("role-badge", roleColors[role])}>
                    {role}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {ROLE_DESCRIPTIONS[role]}
                </p>
              </div>
              {selectedRole === role && (
                <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}