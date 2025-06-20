import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../types/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeCardComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  searchTerm: string = '';
  allEmployees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  departments: string[] = [];
  private searchSubscription!: Subscription;

  sortBy: string = 'score';
  filterDepartment: string = 'all';

  constructor(
    private employeeService: EmployeeService, 
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.allEmployees = this.employeeService.getEmployees();
    this.departments = [...new Set(this.allEmployees.map(e => e.department))];
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
    let employees = [...this.allEmployees];

    // Filter by department
    if (this.filterDepartment !== 'all') {
      employees = employees.filter(e => e.department === this.filterDepartment);
    }

    // Filter by search term
    if (this.searchTerm && this.searchTerm.trim()) {
      const term = this.searchTerm.trim().toLowerCase();
      employees = employees.filter(emp =>
        emp.name.toLowerCase().includes(term) ||
        emp.role.toLowerCase().includes(term)
      );
    }

    // Sort
    employees.sort((a, b) => {
      if (this.sortBy === 'score') {
        return b.hiddenGemScore - a.hiddenGemScore;
      }
      if (this.sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    this.filteredEmployees = employees;
  }

  onEmployeeCardClick(employee: Employee) {
    this.router.navigate(['/employees', employee.id]);
  }
}
