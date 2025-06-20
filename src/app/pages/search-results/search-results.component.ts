import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AiSearchService } from '../../services/ai-search.service';
import { Employee } from '../../types/employee';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent]
})
export class SearchResultsComponent implements OnInit {
  results$!: Observable<Employee[]>;
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aiSearchService: AiSearchService
  ) {}

  ngOnInit(): void {
    this.results$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.query = params.get('query') || '';
        return this.aiSearchService.search(this.query);
      })
    );
  }

  onEmployeeClick(employee: Employee): void {
    this.router.navigate(['/employees', employee.id]);
  }
}
