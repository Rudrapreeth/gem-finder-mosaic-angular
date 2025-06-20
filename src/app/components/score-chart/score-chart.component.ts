import { Component, Input } from '@angular/core';
import { Employee } from '../../types/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-score-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.css']
})
export class ScoreChartComponent {
  @Input() employees: Employee[] = [];

  scoreRanges = [
    { label: '60-69', min: 60, max: 69, color: '#f87171' }, // red-400
    { label: '70-79', min: 70, max: 79, color: '#fb923c' }, // orange-400
    { label: '80-89', min: 80, max: 89, color: '#facc15' }, // yellow-400
    { label: '90-100', min: 90, max: 100, color: '#22c55e' } // green-400
  ];

  getMaxCount(): number {
    return Math.max(...this.scoreRanges.map(range =>
      this.employees.filter(emp => emp.hiddenGemScore >= range.min && emp.hiddenGemScore <= range.max).length
    ));
  }

  getCount(range: { min: number; max: number }): number {
    return this.employees.filter(emp => emp.hiddenGemScore >= range.min && emp.hiddenGemScore <= range.max).length;
  }

  getPercentage(count: number, maxCount: number): number {
    return maxCount > 0 ? (count / maxCount) * 100 : 0;
  }
}
