import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ControlsComponent } from '../components/controls/controls.component';
// import { RouterOutlet } from '@angular/router';
// import { MapComponent } from './components/map/map.component';
// import { MapComponent } from './components/map/map.component';
// import { MapService } from './services/map.service';



@NgModule({
  declarations: [NavbarComponent,LayoutComponent,SidebarComponent,ControlsComponent],
  imports: [
    CommonModule,
    SharedModule,
    // RouterOutlet
    AppRoutingModule

  ],
  exports:[LayoutComponent,ControlsComponent
  ],
  providers:[]
})
export class CoreModule { }
