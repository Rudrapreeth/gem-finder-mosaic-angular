import { Employee } from '../types/employee';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Nama Sai Teja',
    role: 'CEO',
    department: 'Executive',
    email: 'namasaiteja@gmail.com',
    gender: 'male',
    hiddenGemScore: 95,
    metrics: {
      taskConsistency: 98,
      peerRecognition: 92,
      visibilityGap: 80,
      collaboration: 95,
      learningParticipation: 97,
      recognitionGap: 90
    },
    recentAchievements: [
      'Secured Series B funding',
      'Expanded company to 3 new markets',
      'Achieved 150% revenue growth'
    ],
    tasksCompleted: 250,
    kudosReceived: 80,
    coursesCompleted: 15,
    commitCount: 50,
    tenure: '5 years',
    lastActive: 'Active now',
    trend: 'up',
    skills: ['leadership', 'productstrategy', 'communication', 'marketanalysis']
  },
  {
    id: '2',
    name: 'Bandugula Srihari',
    role: 'CTO',
    department: 'Engineering',
    managerId: '1',
    email: 'bandugulasrihari@gmail.com',
    gender: 'male',
    hiddenGemScore: 92,
    metrics: {
      taskConsistency: 94,
      peerRecognition: 88,
      visibilityGap: 85,
      collaboration: 91,
      learningParticipation: 93,
      recognitionGap: 89
    },
    recentAchievements: [
      'Led the development of a new microservices architecture',
      'Reduced server costs by 30%',
      'Mentored 5 senior engineers'
    ],
    tasksCompleted: 180,
    kudosReceived: 65,
    coursesCompleted: 10,
    commitCount: 450,
    tenure: '4.2 years',
    lastActive: 'Active now',
    trend: 'up',
    skills: ['leadership', 'projectmanagement', 'productstrategy', 'ts', 'js', 'angular', 'nodejs']
  },
  {
    id: '3',
    name: 'Kanukurthi Mounika',
    role: 'Lead Software Engineer',
    department: 'Engineering',
    managerId: '2',
    email: 'kanukurthimounika@gmail.com',
    gender: 'female',
    hiddenGemScore: 91,
    metrics: {
      taskConsistency: 93,
      peerRecognition: 75,
      visibilityGap: 88,
      collaboration: 91,
      learningParticipation: 89,
      recognitionGap: 94
    },
    recentAchievements: [
      'Fixed 15 critical bugs',
      'Optimized database queries by 40%',
      'Contributed to 3 open-source projects'
    ],
    tasksCompleted: 156,
    kudosReceived: 31,
    coursesCompleted: 12,
    commitCount: 389,
    tenure: '3.2 years',
    lastActive: '30 minutes ago',
    trend: 'stable',
    skills: ['ts', 'js', 'angular', 'nodejs', 'projectmanagement']
  },
  {
    id: '4',
    name: 'Rudra',
    role: 'Lead UX Designer',
    department: 'Design',
    managerId: '1',
    email: 'rudra@gmail.com',
    gender: 'male',
    hiddenGemScore: 87,
    metrics: {
      taskConsistency: 90,
      peerRecognition: 72,
      visibilityGap: 86,
      collaboration: 89,
      learningParticipation: 88,
      recognitionGap: 85
    },
    recentAchievements: [
      'Redesigned user onboarding flow',
      'Increased user satisfaction by 25%',
      'Led design thinking workshop'
    ],
    tasksCompleted: 89,
    kudosReceived: 26,
    coursesCompleted: 7,
    commitCount: 178,
    tenure: '2.1 years',
    lastActive: '45 minutes ago',
    trend: 'up',
    skills: ['uidesign', 'uxresearch', 'leadership']
  },
  {
    id: '5',
    name: 'Lisa Wang',
    role: 'Lead Product Manager',
    department: 'Product',
    managerId: '1',
    email: 'lisawang@gmail.com',
    gender: 'female',
    hiddenGemScore: 82,
    metrics: {
      taskConsistency: 85,
      peerRecognition: 78,
      visibilityGap: 80,
      collaboration: 87,
      learningParticipation: 84,
      recognitionGap: 82
    },
    recentAchievements: [
      'Shipped 2 major features on time',
      'Coordinated cross-team initiatives',
      'Improved team velocity by 20%'
    ],
    tasksCompleted: 102,
    kudosReceived: 35,
    coursesCompleted: 9,
    commitCount: 145,
    tenure: '1.5 years',
    lastActive: '15 minutes ago',
    trend: 'stable',
    skills: ['productstrategy', 'marketanalysis', 'communication']
  }
]; 