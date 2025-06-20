import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../types/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-performers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.css']
})
export class TopPerformersComponent {
  @Input() employees: Employee[] = [];
  @Output() employeeSelect = new EventEmitter<Employee>();

  get topPerformers(): Employee[] {
    return [...this.employees]
      .sort((a, b) => b.hiddenGemScore - a.hiddenGemScore)
      .slice(0, 5);
  }

  onSelect(employee: Employee) {
    this.employeeSelect.emit(employee);
  }

  getBadgeColor(index: number): string {
    if (index === 0) return '#facc15'; // yellow-500
    if (index === 1) return '#a3a3a3'; // gray-400
    if (index === 2) return '#fb923c'; // orange-400
    return '#3b82f6'; // blue-500
  }
}
