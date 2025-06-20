import { Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { mockEmployees } from '../data/mock-employees';
import { calculateTFAIScore } from '../utils/tf-score';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    // Return employees with TensorFlow.js AI-calculated score
    return mockEmployees.map(emp => ({
      ...emp,
      hiddenGemScore: calculateTFAIScore(emp)
    }));
  }

  getEmployeeById(id: string): Employee | undefined {
    const emp = mockEmployees.find(e => e.id === id);
    return emp ? { ...emp, hiddenGemScore: calculateTFAIScore(emp) } : undefined;
  }
} 