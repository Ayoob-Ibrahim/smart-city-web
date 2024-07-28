import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAreaComponent } from './parking-area.component';

describe('ParkingAreaComponent', () => {
  let component: ParkingAreaComponent;
  let fixture: ComponentFixture<ParkingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
