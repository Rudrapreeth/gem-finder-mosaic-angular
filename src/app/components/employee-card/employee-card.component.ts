import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../types/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() cardClick = new EventEmitter<void>();

  getScoreColor(score: number): { color: string; background: string } {
    if (score >= 90) return { color: '#16a34a', background: '#dcfce7' };
    if (score >= 80) return { color: '#2563eb', background: '#dbeafe' };
    if (score >= 70) return { color: '#ea580c', background: '#ffedd5' };
    return { color: '#dc2626', background: '#fee2e2' };
  }

  getTrendIcon(trend: string): string | null {
    if (trend === 'up') return 'up';
    if (trend === 'down') return 'down';
    return null;
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
