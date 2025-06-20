export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  avatar?: string;
  hiddenGemScore: number;
  metrics: {
    taskConsistency: number;
    peerRecognition: number;
    visibilityGap: number;
    collaboration: number;
    learningParticipation: number;
    recognitionGap: number;
  };
  recentAchievements: string[];
  tasksCompleted: number;
  kudosReceived: number;
  coursesCompleted: number;
  commitCount: number;
  tenure: string;
  lastActive: string;
  trend: 'up' | 'down' | 'stable';
  managerId?: string;
  skills?: string[];
  imageUrl?: string;
  gender: 'male' | 'female';
} 