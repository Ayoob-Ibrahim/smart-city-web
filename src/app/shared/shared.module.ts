import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MapComponent } from './components/map/map.component';
import { MatModule } from './material/mat/mat.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { ChartViewComponent } from './components/chart-view/chart-view.component';
import { SvgComponent } from './components/svg/svg.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
 
// import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    MapViewComponent, ChartViewComponent, SvgComponent, BarChartComponent
  ], imports: [
    CommonModule,
    MatModule,
   

    // chartModule
  ],
  exports: [MapViewComponent, ChartViewComponent, SvgComponent, BarChartComponent,
    MatModule]
})
export class SharedModule { }
