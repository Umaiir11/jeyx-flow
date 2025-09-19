export type UserRole = 'ADMIN' | 'CTO' | 'PROJECT_MANAGER' | 'LEAD' | 'DEVELOPER' | 'DESIGNER';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupCredentials {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export const ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: 'Admin',
  CTO: 'CTO',
  PROJECT_MANAGER: 'Project Manager',
  LEAD: 'Lead',
  DEVELOPER: 'Developer',
  DESIGNER: 'Designer',
};

export const ROLE_DESCRIPTIONS: Record<UserRole, string> = {
  ADMIN: 'Full system access, user management, global analytics',
  CTO: 'Technical leadership, project approvals, team assignments',
  PROJECT_MANAGER: 'Sprint planning, client communication, project coordination',
  LEAD: 'Code reviews, team guidance, technical decisions',
  DEVELOPER: 'Module development, task updates, self-QA',
  DESIGNER: 'UI/UX design, asset management, creative workflows',
};