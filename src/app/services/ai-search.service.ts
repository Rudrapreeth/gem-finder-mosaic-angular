import { Injectable } from '@angular/core';
import { Employee } from '../types/employee';
import { mockEmployees } from '../data/mock-employees';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiSearchService {

  private employees: Employee[] = mockEmployees;

  constructor() { }

  search(query: string): Observable<Employee[]> {
    if (!query.trim()) {
      return of(this.employees);
    }

    const lowerCaseQuery = query.toLowerCase();
    
    const filteredEmployees = this.employees.filter(employee => {
      const { name, role, department, recentAchievements } = employee;

      if (name.toLowerCase().includes(lowerCaseQuery)) return true;
      if (role.toLowerCase().includes(lowerCaseQuery)) return true;
      if (department.toLowerCase().includes(lowerCaseQuery)) return true;
      if (recentAchievements.some(ach => ach.toLowerCase().includes(lowerCaseQuery))) return true;

      return false;
    });

    return of(filteredEmployees);
  }
}
