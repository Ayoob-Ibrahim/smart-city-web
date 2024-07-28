import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalDataComponent } from './environmental-data.component';

describe('EnvironmentalDataComponent', () => {
  let component: EnvironmentalDataComponent;
  let fixture: ComponentFixture<EnvironmentalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvironmentalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
