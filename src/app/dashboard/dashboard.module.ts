import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// import {RouterModule}from'@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { TreeComponent } from './tree/tree.component';
import { DashboardComponent } from './dashboard.component';
import { BinComponent } from './dashboard-components/bin/bin.component';
import { StreetLightsComponent } from './dashboard-components/street-lights/street-lights.component';
import { WifiComponent } from './dashboard-components/wifi/wifi.component';
import { CctvComponent } from './dashboard-components/cctv/cctv.component';
import { EnergyConsumptionComponent } from './dashboard-components/energy-consumption/energy-consumption.component';
import { EnvironmentalDataComponent } from './dashboard-components/environmental-data/environmental-data.component';
import { ParkingAreaComponent } from './dashboard-components/parking-area/parking-area.component';
 
// import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [

    DashboardComponent,
    BinComponent,
    StreetLightsComponent,
    WifiComponent,
    CctvComponent,
    EnergyConsumptionComponent,
    EnvironmentalDataComponent,
    ParkingAreaComponent,
    // TreeComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    
  ]

})
export class DashboardModule { }
