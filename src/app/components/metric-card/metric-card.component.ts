import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css']
})
export class MetricCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() subtitle: string = '';
  @Input() trend: 'up' | 'down' | 'stable' = 'stable';
  @Input() color: string = 'blue';

  getValueStyle() {
    // Simulate a gradient text color using a solid color for now
    const colorMap: any = {
      blue: { color: '#2563eb' },
      green: { color: '#16a34a' },
      purple: { color: '#7c3aed' },
      orange: { color: '#ea580c' }
    };
    return colorMap[this.color] || { color: '#2563eb' };
  }
}
