import { Component, OnInit } from '@angular/core';
import { Employee } from '../../types/employee';
import { CommonModule, Location } from '@angular/common';
import { CareerPathComponent } from '../career-path/career-path.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule, CareerPathComponent],
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee | undefined;

  metricLabels: { [key: string]: string } = {
    taskConsistency: 'Task Consistency',
    peerRecognition: 'Peer Recognition',
    visibilityGap: 'Visibility Gap',
    collaboration: 'Collaboration',
    learningParticipation: 'Learning Participation',
    recognitionGap: 'Recognition Gap'
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employee = this.employeeService.getEmployeeById(id);
    }
  }

  getScoreColor(score: number): string {
    if (score >= 90) return '#16a34a'; // green-600
    if (score >= 80) return '#2563eb'; // blue-600
    if (score >= 70) return '#ea580c'; // orange-600
    return '#dc2626'; // red-600
  }

  goBack(): void {
    this.location.back();
  }
}
