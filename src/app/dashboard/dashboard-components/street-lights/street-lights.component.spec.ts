import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetLightsComponent } from './street-lights.component';

describe('StreetLightsComponent', () => {
  let component: StreetLightsComponent;
  let fixture: ComponentFixture<StreetLightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetLightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
