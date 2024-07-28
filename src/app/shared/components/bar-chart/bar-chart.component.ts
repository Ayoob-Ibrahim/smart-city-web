import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  ngOnInit(): void {
    this.createChart();
  }

  chart: any
  createChart() {
    this.chart = new Chart("MyChart2", {
      type: 'bar',

      data: { // Values on X-Axis
        labels: ['Occupied', 'Non-Compliant', 'Availability', 'Occupied', 'Non-Compliant','Occupied', 'Non-Compliant',],
        datasets: [{
          label: 'Parking Availability',
          data: [650, 709, 767,300,678,777,999], // Data values for occupied and non-compliant spaces
          backgroundColor: [
            '#FF0000',     
            '#0000FF',     
            '#008000',     
            '#000000',     
            '#800080',
            'orange',
            '#FFFF00'   
          ],

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
