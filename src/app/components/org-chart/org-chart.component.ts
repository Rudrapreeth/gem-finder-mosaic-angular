import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { OrgChart } from 'd3-org-chart';
import { mockEmployees } from '../../data/mock-employees';
import { Employee } from '../../types/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  chart: any;
  employees: Employee[] = mockEmployees;

  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  ngAfterViewInit() {
    if (this.employees && this.chartContainer) {
      this.chart = new OrgChart();
      this.chart
        .container(this.chartContainer.nativeElement)
        .data(this.employees)
        .nodeId((d: any) => d.id)
        .parentNodeId((d: any) => d.managerId)
        .nodeContent((d: any) => {
          const avatar = d.data.avatar ?
            `<img src="${d.data.avatar}" class="node-avatar" />` :
            `<div class="node-avatar-placeholder">
              <svg width="32" height="32" fill="none" stroke="#9ca3af" stroke-width="1.5" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>
            </div>`;

          return `
            <div class="node-container">
              ${avatar}
              <div class="node-name">${d.data.name}</div>
              <div class="node-role">${d.data.role}</div>
            </div>
          `;
        })
        .render();
    }
  }

  ngOnDestroy() {
    // Clean up if necessary
  }
}
