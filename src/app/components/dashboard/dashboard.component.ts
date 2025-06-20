import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../types/employee';
import { MetricCardComponent } from '../metric-card/metric-card.component';
import { ScoreChartComponent } from '../score-chart/score-chart.component';
import { TopPerformersComponent } from '../top-performers/top-performers.component';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MetricCardComponent, ScoreChartComponent, TopPerformersComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  showScoreModal = false;
  searchTerm: string = '';
  private searchSubscription!: Subscription;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.applyFilters();
    this.searchSubscription = this.searchService.currentSearchTerm.subscribe(term => {
      this.searchTerm = term;
      this.applyFilters();
    });
  }

  ngOnDestroy() {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  applyFilters() {
    if (this.searchTerm && this.searchTerm.trim()) {
      const term = this.searchTerm.trim().toLowerCase();
      this.filteredEmployees = this.employees.filter(emp =>
        emp.name.toLowerCase().includes(term) ||
        emp.role.toLowerCase().includes(term) ||
        emp.department.toLowerCase().includes(term) ||
        emp.email.toLowerCase().includes(term)
      );
    } else {
      this.filteredEmployees = [...this.employees];
    }
  }

  get totalEmployees(): number {
    return this.filteredEmployees.length;
  }

  get averageScore(): number {
    if (!this.filteredEmployees.length) return 0;
    return Math.round(this.filteredEmployees.reduce((sum, emp) => sum + emp.hiddenGemScore, 0) / this.filteredEmployees.length);
  }

  get hiddenGems(): number {
    return this.filteredEmployees.filter(emp => emp.hiddenGemScore >= 80).length;
  }

  get trendingUp(): number {
    return this.filteredEmployees.filter(emp => emp.trend === 'up').length;
  }

  get departments(): { name: string, avgScore: number, gems: number }[] {
    const depts = Array.from(new Set(this.filteredEmployees.map(emp => emp.department)));
    return depts.map(dept => {
      const deptEmployees = this.filteredEmployees.filter(emp => emp.department === dept);
      const avgScore = Math.round(deptEmployees.reduce((sum, emp) => sum + emp.hiddenGemScore, 0) / deptEmployees.length);
      const gems = deptEmployees.filter(emp => emp.hiddenGemScore >= 80).length;
      return { name: dept, avgScore, gems };
    });
  }

  get hiddenGemsList(): Employee[] {
    return this.filteredEmployees.filter(emp => emp.hiddenGemScore >= 85);
  }

  exportHiddenGemsCSV() {
    const gems = this.hiddenGemsList;
    if (!gems.length) return;
    const header = ['Name', 'Role', 'Department', 'Email', 'Score', 'Recent Achievement'];
    const rows = gems.map(emp => [
      emp.name,
      emp.role,
      emp.department,
      emp.email,
      emp.hiddenGemScore.toString(),
      emp.recentAchievements[0] || ''
    ]);
    const csvContent = [header, ...rows].map(r => r.map(x => '"' + x.replace(/"/g, '""') + '"').join(',')).join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hidden-gems.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  onEmployeeSelect(employee: Employee) {
    this.router.navigate(['/employees', employee.id]);
  }

  openScoreModal() {
    this.showScoreModal = true;
  }

  closeScoreModal() {
    this.showScoreModal = false;
  }
}
