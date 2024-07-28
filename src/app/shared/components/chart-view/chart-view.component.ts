import { Component, OnInit } from '@angular/core';

import Chart from 'chart.js/auto';
@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.scss']
})
export class ChartViewComponent implements OnInit {
  public chart: any;
  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){
    this.chart =new Chart("MyChart", {
      type: 'doughnut', // This denotes the type of chart
    
      data: { // Values on X-Axis
        labels: ['Occupied', 'Non-Compliant','Availability'],
        datasets: [{
          label: 'Parking Availability',
          data: [650, 709,767], // Data values for occupied and non-compliant spaces
          backgroundColor: [
            'red',    // Occupied spaces
            '#5e51b5',
            'green'  // Non-compliant spaces
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 1.1, // Increase aspect ratio to enlarge the chart
        plugins: {
          legend: {
            position: 'bottom' // Position the legend at the bottom
          }
        }
      }
    });
  }
}
