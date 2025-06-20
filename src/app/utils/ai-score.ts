import { Employee } from '../types/employee';

export function calculateAIScore(employee: Employee): number {
  // Example weights (tweak as needed)
  const weights = {
    taskConsistency: 0.15,
    peerRecognition: 0.15,
    visibilityGap: 0.10,
    collaboration: 0.10,
    learningParticipation: 0.10,
    recognitionGap: 0.10,
    tasksCompleted: 0.10,
    kudosReceived: 0.10,
    coursesCompleted: 0.05,
    commitCount: 0.05,
    tenure: 0.10, // years
  };

  // Parse tenure (e.g., '3.2 years' => 3.2)
  const tenureYears = parseFloat(employee.tenure);

  // Normalize large values (example: scale tasks, kudos, commits)
  const norm = (val: number, max: number) => Math.min(val / max, 1);

  // Calculate weighted sum
  let score = 0;
  score += employee.metrics.taskConsistency * weights.taskConsistency;
  score += employee.metrics.peerRecognition * weights.peerRecognition;
  score += employee.metrics.visibilityGap * weights.visibilityGap;
  score += employee.metrics.collaboration * weights.collaboration;
  score += employee.metrics.learningParticipation * weights.learningParticipation;
  score += employee.metrics.recognitionGap * weights.recognitionGap;
  score += norm(employee.tasksCompleted, 250) * 100 * weights.tasksCompleted;
  score += norm(employee.kudosReceived, 100) * 100 * weights.kudosReceived;
  score += norm(employee.coursesCompleted, 20) * 100 * weights.coursesCompleted;
  score += norm(employee.commitCount, 500) * 100 * weights.commitCount;
  score += norm(tenureYears, 5) * 100 * weights.tenure;

  // Clamp to 0-100
  return Math.round(Math.max(0, Math.min(score, 100)));
} 