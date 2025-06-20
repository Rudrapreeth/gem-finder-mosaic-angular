import { Skill, RoleSkills, CareerPath } from '../types/career';

export const ALL_SKILLS: Skill[] = [
  { id: 'ts', name: 'TypeScript' },
  { id: 'js', name: 'JavaScript' },
  { id: 'angular', name: 'Angular' },
  { id: 'react', name: 'React' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'nodejs', name: 'Node.js' },
  { id: 'python', name: 'Python' },
  { id: 'datasci', name: 'Data Science' },
  { id: 'machinelearning', name: 'Machine Learning' },
  { id: 'sql', name: 'SQL' },
  { id: 'nosql', name: 'NoSQL' },
  { id: 'uidesign', name: 'UI Design' },
  { id: 'uxresearch', name: 'UX Research' },
  { id: 'productstrategy', name: 'Product Strategy' },
  { id: 'marketanalysis', name: 'Market Analysis' },
  { id: 'leadership', name: 'Leadership' },
  { id: 'projectmanagement', name: 'Project Management' },
  { id: 'communication', name: 'Communication' },
];

export const ROLE_SKILLS: RoleSkills[] = [
  { role: 'Software Engineer', skills: ['ts', 'js', 'angular', 'nodejs'] },
  { role: 'Lead Software Engineer', skills: ['ts', 'js', 'angular', 'nodejs', 'projectmanagement', 'leadership'] },
  { role: 'CTO', skills: ['leadership', 'projectmanagement', 'productstrategy'] },
  { role: 'UX Designer', skills: ['uidesign', 'uxresearch'] },
  { role: 'Lead UX Designer', skills: ['uidesign', 'uxresearch', 'leadership'] },
  { role: 'Product Manager', skills: ['productstrategy', 'marketanalysis', 'communication'] },
  { role: 'Lead Product Manager', skills: ['productstrategy', 'marketanalysis', 'communication', 'leadership'] },
  { role: 'Data Analyst', skills: ['python', 'sql', 'datasci'] },
  { role: 'CEO', skills: ['leadership', 'productstrategy', 'communication'] },
];

export const CAREER_PATHS: CareerPath[] = [
  { role: 'Software Engineer', nextRoles: ['Lead Software Engineer'] },
  { role: 'Lead Software Engineer', nextRoles: ['CTO'] },
  { role: 'UX Designer', nextRoles: ['Lead UX Designer'] },
  { role: 'Product Manager', nextRoles: ['Lead Product Manager'] },
  { role: 'Data Analyst', nextRoles: ['Lead Software Engineer'] },
]; 