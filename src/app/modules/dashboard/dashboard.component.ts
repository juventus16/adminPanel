import { Component, OnInit, ViewChild } from '@angular/core';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  card = [];
  pie = [];

  displayedColumns: string[] = [];
  dataSource = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.card = this.dashboardService.card();
    this.pie = this.dashboardService.pie();

    this.displayedColumns = this.dashboardService.displayedColumns();
    this.dataSource = this.dashboardService.dataSource();
  }

}
