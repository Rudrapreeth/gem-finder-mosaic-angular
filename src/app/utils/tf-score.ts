import * as tf from '@tensorflow/tfjs';
import { Employee } from '../types/employee';

// Define a simple linear model (weights are arbitrary for demo)
const weights = [0.15, 0.15, 0.10, 0.10, 0.10, 0.10, 0.10, 0.10, 0.05, 0.05, 0.10];
const bias = 0;

function getEmployeeFeatures(employee: Employee): number[] {
  // Parse tenure (e.g., '3.2 years' => 3.2)
  const tenureYears = parseFloat(employee.tenure);
  // Normalize large values
  const norm = (val: number, max: number) => Math.min(val / max, 1);
  return [
    employee.metrics.taskConsistency,
    employee.metrics.peerRecognition,
    employee.metrics.visibilityGap,
    employee.metrics.collaboration,
    employee.metrics.learningParticipation,
    employee.metrics.recognitionGap,
    norm(employee.tasksCompleted, 250) * 100,
    norm(employee.kudosReceived, 100) * 100,
    norm(employee.coursesCompleted, 20) * 100,
    norm(employee.commitCount, 500) * 100,
    norm(tenureYears, 5) * 100,
  ];
}

export function calculateTFAIScore(employee: Employee): number {
  const features = getEmployeeFeatures(employee);
  // Convert to tensor
  const input = tf.tensor2d([features]);
  const w = tf.tensor2d([weights]);
  const b = tf.scalar(bias);
  // y = xW^T + b
  const scoreTensor = input.matMul(w.transpose()).add(b);
  const score = scoreTensor.dataSync()[0];
  // Clamp to 0-100
  return Math.round(Math.max(0, Math.min(score, 100)));
} 