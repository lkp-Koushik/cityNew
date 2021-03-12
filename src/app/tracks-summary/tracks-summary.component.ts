import { Component, OnInit, ViewChild } from '@angular/core';
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";

@Component({
  selector: 'app-tracks-summary',
  templateUrl: './tracks-summary.component.html',
  styleUrls: ['./tracks-summary.component.css']
})
export class TracksSummaryComponent implements OnInit {

  arrOne =  {
    "numbers": [
      10,
      15,
      25
    ],
    "labels": [
      "label 1",
      "label 2",
      "label 3"
    ],
    "colors": [
      "#2e7bef",
      "#60af87",
      "#f29426"

      // 
    ]
  };

  @ViewChild(DoughnutChartComponent) dChartComp: any;

  doughnutCharts: any = [this.arrOne];
  constructor() { }

  ngOnInit(): void {
  }

}
