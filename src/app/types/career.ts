export interface Skill {
  id: string;
  name: string;
}

export interface RoleSkills {
  role: string;
  skills: string[]; // Array of skill IDs
}

export interface CareerPath {
  role: string;
  nextRoles: string[];
} 