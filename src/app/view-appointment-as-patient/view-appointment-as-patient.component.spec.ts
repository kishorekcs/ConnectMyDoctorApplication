import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentAsPatientComponent } from './view-appointment-as-patient.component';

describe('ViewAppointmentAsPatientComponent', () => {
  let component: ViewAppointmentAsPatientComponent;
  let fixture: ComponentFixture<ViewAppointmentAsPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentAsPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppointmentAsPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
