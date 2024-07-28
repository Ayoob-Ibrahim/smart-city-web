import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GeoService } from './core/services/geo.service';
// import { MaterialModule } from './material.module';
// import { ControlsComponent } from './components/controls/controls.component';
import { AppService } from './core/services/app.service';
import { MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet';
// import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
// import { MapViewComponent } from './components/map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    // ControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MaterialModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    AppService,
    GeoService,
    { provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
