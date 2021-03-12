import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksSummaryComponent } from './tracks-summary.component';

describe('TracksSummaryComponent', () => {
  let component: TracksSummaryComponent;
  let fixture: ComponentFixture<TracksSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracksSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
